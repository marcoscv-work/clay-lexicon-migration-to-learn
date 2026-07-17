#!/usr/bin/env node
/**
 * Generate the API reference tables for component pages from the source of
 * truth: the TypeScript definitions in the github.com/liferay/clay mirror.
 *
 * Props are never hand-transcribed. For each component listed in
 * migration-map.json (entries with an `api` field), this script:
 *   1. Resolves the package's published version on npm (falls back to the local
 *      mirror's package.json when the registry is unreachable).
 *   2. Reads the component's prop types with ts-morph, extracting name, type,
 *      default value, required flag, and JSDoc description.
 *   3. Rewrites the content between the `<!-- API:START ... -->` and
 *      `<!-- API:END -->` markers, and updates the `version` marker attribute
 *      plus the page's `api_version` frontmatter.
 *
 * Everything outside the markers is human-owned and never touched.
 *
 * Usage:
 *   node scripts/generate-api.mjs            regenerate and write changes
 *   node scripts/generate-api.mjs --check    fail (exit 1) if anything changed
 *   node scripts/generate-api.mjs --offline  skip the npm version lookup
 *
 * The Clay source location defaults to ../sources/clay relative to the repo
 * root and can be overridden with the CLAY_SRC environment variable (CI clones
 * the mirror there).
 */

import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {Node, Project, ts} from 'ts-morph';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const CLAY_SRC = process.env.CLAY_SRC
	? path.resolve(process.env.CLAY_SRC)
	: path.resolve(REPO_ROOT, '..', 'sources', 'clay');

const CHECK = process.argv.includes('--check');
const OFFLINE = process.argv.includes('--offline');

const MAP_PATH = path.join(REPO_ROOT, 'migration-map.json');

// ---------------------------------------------------------------------------
// Version resolution
// ---------------------------------------------------------------------------

const npmVersionCache = new Map();

function localPackageVersion(pkg) {
	// @clayui/drop-down -> packages/clay-drop-down/package.json
	const dir = pkg.replace('@clayui/', 'clay-');
	const pkgJson = path.join(CLAY_SRC, 'packages', dir, 'package.json');
	if (fs.existsSync(pkgJson)) {
		return JSON.parse(fs.readFileSync(pkgJson, 'utf8')).version;
	}
	return null;
}

function resolveVersion(pkg) {
	if (npmVersionCache.has(pkg)) {
		return npmVersionCache.get(pkg);
	}

	let version = null;
	let source = 'npm';

	if (!OFFLINE) {
		try {
			version = execFileSync('npm', ['view', pkg, 'version'], {
				encoding: 'utf8',
				stdio: ['ignore', 'pipe', 'ignore'],
				timeout: 20000,
			}).trim();
		} catch {
			version = null;
		}
	}

	if (!version) {
		version = localPackageVersion(pkg);
		source = 'mirror';
	}

	const localVersion = localPackageVersion(pkg);
	if (version && localVersion && version !== localVersion) {
		console.warn(
			`  ! ${pkg}: npm latest is ${version} but the local mirror is ${localVersion}. ` +
				`Props are read from the mirror; refresh it to match the published version.`
		);
	}

	const resolved = {version: version || 'unknown', source};
	npmVersionCache.set(pkg, resolved);

	return resolved;
}

// ---------------------------------------------------------------------------
// Type extraction (ts-morph)
// ---------------------------------------------------------------------------

const project = new Project({
	compilerOptions: {
		jsx: ts.JsxEmit.React,
		target: ts.ScriptTarget.ESNext,
		module: ts.ModuleKind.ESNext,
		moduleResolution: ts.ModuleResolutionKind.NodeJs,
		skipLibCheck: true,
		noEmit: true,
		strict: false,
	},
	skipAddingFilesFromTsConfig: true,
});

function getSourceFile(relFile) {
	const abs = path.join(CLAY_SRC, relFile);
	if (!fs.existsSync(abs)) {
		throw new Error(`Source file not found: ${abs}`);
	}
	return (
		project.getSourceFile(abs) ?? project.addSourceFileAtPath(abs)
	);
}

function findLocalTypeDecl(sourceFile, name) {
	return (
		sourceFile.getInterface(name) ?? sourceFile.getTypeAlias(name) ?? null
	);
}

function isLocalDecl(decl) {
	// Only follow declarations that live in the Clay mirror, never external
	// types such as React.ButtonHTMLAttributes resolved from node_modules.
	return decl.getSourceFile().getFilePath().startsWith(slash(CLAY_SRC));
}

function slash(p) {
	return p.replace(/\\/g, '/');
}

/**
 * Return the public property signatures declared by a named type. Follows local
 * interface `extends` clauses, local intersections, and local aliases (so props
 * defined on a base interface in the same package are included), but skips
 * external types (React.*, Omit, etc.) so inherited DOM attributes never leak
 * into the table. Own declarations win over inherited ones of the same name.
 */
function ownProperties(decl) {
	if (!decl) {
		return [];
	}
	if (Node.isInterfaceDeclaration(decl)) {
		const props = new Map();
		for (const base of decl.getBaseDeclarations()) {
			if (
				(Node.isInterfaceDeclaration(base) ||
					Node.isTypeAliasDeclaration(base)) &&
				isLocalDecl(base)
			) {
				for (const prop of ownProperties(base)) {
					props.set(prop.getName(), prop);
				}
			}
		}
		for (const prop of decl.getProperties()) {
			props.set(prop.getName(), prop);
		}
		return [...props.values()];
	}
	if (Node.isTypeAliasDeclaration(decl)) {
		return membersFromTypeNode(decl.getTypeNode(), decl.getSourceFile());
	}
	return [];
}

function membersFromTypeNode(typeNode, sourceFile) {
	if (!typeNode) {
		return [];
	}
	if (Node.isTypeLiteral(typeNode)) {
		return typeNode.getProperties();
	}
	if (Node.isIntersectionTypeNode(typeNode)) {
		return typeNode
			.getTypeNodes()
			.flatMap((node) => membersFromTypeNode(node, sourceFile));
	}
	if (Node.isTypeReference(typeNode)) {
		const name = typeNode.getTypeName().getText();
		const local = findLocalTypeDecl(sourceFile, name);
		return local ? ownProperties(local) : [];
	}
	return [];
}

/** Collect default values from destructured component parameters in a file. */
function collectDefaults(sourceFile) {
	const defaults = {};
	sourceFile.forEachDescendant((node) => {
		if (Node.isObjectBindingPattern(node)) {
			for (const element of node.getElements()) {
				const initializer = element.getInitializer();
				if (initializer) {
					defaults[element.getName()] = initializer.getText();
				}
			}
		}
	});
	return defaults;
}

function cleanType(text) {
	return text
		.replace(/import\([^)]*\)\./g, '') // strip import("...") prefixes
		.replace(/\s*\|\s*undefined\b/g, '') // optionality shown separately
		.replace(/\s+/g, ' ')
		.replace(/^\|\s*/, '') // drop a leading pipe from multi-line unions
		.trim();
}

/**
 * Prefer the type exactly as written in the source. When a property points at a
 * local union type alias (for example `displayType?: DisplayType`), expand the
 * alias to its allowed values so the table shows the real options instead of an
 * opaque type name. This keeps `boolean` as `boolean` rather than `true | false`.
 */
function resolveTypeText(prop) {
	const node = prop.getTypeNode();
	if (!node) {
		return cleanType(prop.getType().getText(prop));
	}
	if (Node.isTypeReference(node)) {
		const name = node.getTypeName().getText();
		const alias = prop.getSourceFile().getTypeAlias(name);
		const aliasNode = alias?.getTypeNode();
		if (aliasNode && Node.isUnionTypeNode(aliasNode)) {
			return cleanType(aliasNode.getText());
		}
	}
	return cleanType(node.getText());
}

/** Escape a value for a GFM table cell wrapped in a code span. */
function codeCell(text) {
	if (!text) {
		return '';
	}
	// Collapse any internal whitespace (including newlines from multi-line
	// default values or object types) so the cell stays on a single line.
	const oneLine = text.replace(/\s+/g, ' ').trim();
	return '`' + oneLine.replace(/\|/g, '\\|') + '`';
}

/** Escape a plain-text GFM table cell. */
function textCell(text) {
	if (!text) {
		return '';
	}
	return text.replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').trim();
}

function describe(prop) {
	const jsDocs = prop.getJsDocs();
	let description = jsDocs
		.map((doc) => doc.getDescription())
		.join(' ')
		.replace(/\s+/g, ' ')
		.trim();

	const deprecated = jsDocs
		.flatMap((doc) => doc.getTags())
		.find((tag) => tag.getTagName() === 'deprecated');

	if (deprecated) {
		const comment = deprecated.getComment();
		const reason = typeof comment === 'string' ? comment.trim() : '';
		description = `Deprecated${reason ? `: ${reason}` : '.'} ${description}`.trim();
	}

	return description;
}

function extractProps(target) {
	const sourceFile = getSourceFile(target.file);
	const decl = findLocalTypeDecl(sourceFile, target.type);
	if (!decl) {
		throw new Error(
			`Type "${target.type}" not found in ${target.file}`
		);
	}

	const defaults = collectDefaults(sourceFile);
	const rows = [];

	for (const prop of ownProperties(decl)) {
		const name = prop.getName().replace(/^['"]|['"]$/g, '');
		// Skip internal/private props (leading underscore), which are plumbing
		// and not part of the public API surface.
		if (name.startsWith('_')) {
			continue;
		}
		const optional = prop.hasQuestionToken();
		const typeText = resolveTypeText(prop);
		const defaultValue = defaults[name] ?? '';
		const required = !optional && !defaultValue ? 'Yes' : 'No';

		rows.push({
			name,
			type: typeText,
			default: defaultValue,
			required,
			description: describe(prop),
		});
	}

	return rows;
}

function renderTable(rows) {
	const header =
		'| Prop | Type | Default | Required | Description |\n' +
		'| ---- | ---- | ------- | -------- | ----------- |';
	if (rows.length === 0) {
		return `${header}\n| _(no public props)_ |  |  |  |  |`;
	}
	const body = rows
		.map(
			(row) =>
				`| ${codeCell(row.name)} | ${codeCell(row.type)} | ${codeCell(
					row.default
				)} | ${row.required} | ${textCell(row.description)} |`
		)
		.join('\n');
	return `${header}\n${body}`;
}

function renderBlockContent(entry, version) {
	const sections = entry.api.targets.map((target) => {
		const rows = extractProps(target);
		return `### ${target.heading}\n\n${renderTable(rows)}`;
	});

	return (
		`<!-- API:START package=${entry.api.package} version=${version} -->\n` +
		`<!-- Generated by scripts/generate-api.mjs. Do not edit by hand; run \`npm run api:generate\`. -->\n\n` +
		sections.join('\n\n') +
		`\n\n<!-- API:END -->`
	);
}

// ---------------------------------------------------------------------------
// File rewriting
// ---------------------------------------------------------------------------

const BLOCK_RE = /<!--\s*API:START[\s\S]*?<!--\s*API:END\s*-->/;

function updateFrontmatterVersion(content, version) {
	const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
	if (!fmMatch) {
		return content;
	}
	let front = fmMatch[1];
	if (/^api_version:/m.test(front)) {
		front = front.replace(/^api_version:.*$/m, `api_version: ${version}`);
	} else {
		front = `${front}\napi_version: ${version}`;
	}
	return content.replace(fmMatch[0], `---\n${front}\n---`);
}

function processEntry(entry) {
	const docPath = path.join(REPO_ROOT, entry.new_path);
	if (!fs.existsSync(docPath)) {
		console.warn(`  ! skipping ${entry.new_path}: file not found`);
		return {changed: false};
	}

	const original = fs.readFileSync(docPath, 'utf8');
	if (!BLOCK_RE.test(original)) {
		console.warn(
			`  ! skipping ${entry.new_path}: no API:START/END block found`
		);
		return {changed: false};
	}

	const {version, source} = resolveVersion(entry.api.package);
	const block = renderBlockContent(entry, version);

	let updated = original.replace(BLOCK_RE, block);
	updated = updateFrontmatterVersion(updated, version);

	const changed = updated !== original;

	if (changed && !CHECK) {
		fs.writeFileSync(docPath, updated);
	}

	console.log(
		`  ${changed ? (CHECK ? 'DIFF' : 'updated') : 'ok'}  ${entry.new_path}  ` +
			`(${entry.api.package}@${version}, version from ${source})`
	);

	return {changed};
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
	if (!fs.existsSync(CLAY_SRC)) {
		console.error(
			`Clay source not found at ${CLAY_SRC}.\n` +
				`Clone github.com/liferay/clay there or set CLAY_SRC.`
		);
		process.exit(2);
	}

	const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf8'));
	const entries = map.filter((entry) => entry.api && entry.api.targets);

	if (entries.length === 0) {
		console.log('No entries with an `api` mapping in migration-map.json.');
		return;
	}

	console.log(
		`${CHECK ? 'Checking' : 'Generating'} API tables for ${entries.length} ` +
			`component page(s) from ${CLAY_SRC}\n`
	);

	let changedCount = 0;
	for (const entry of entries) {
		const {changed} = processEntry(entry);
		if (changed) {
			changedCount++;
		}
	}

	console.log('');
	if (CHECK && changedCount > 0) {
		console.error(
			`${changedCount} API block(s) are out of date. Run \`npm run api:generate\`.`
		);
		process.exit(1);
	}
	console.log(
		CHECK
			? 'All API blocks are up to date.'
			: `Done. ${changedCount} file(s) changed.`
	);
}

main();
