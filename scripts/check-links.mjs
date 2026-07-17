#!/usr/bin/env node
/**
 * Internal link and asset checker for /docs.
 *
 * Scans every Markdown file under /docs and verifies that:
 *   - internal page links resolve to a real page (route or relative .md), and
 *   - image and asset references resolve to a file in /assets.
 *
 * Broken internal links fail the check (exit 1). External links (http, https,
 * mailto, tel) are not fetched; they are only counted. Anchor-only links (#foo)
 * are skipped.
 *
 * Usage: node scripts/check-links.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS = path.join(REPO_ROOT, 'docs');

function walk(dir) {
	const out = [];
	for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			out.push(...walk(full));
		} else if (entry.name.endsWith('.md')) {
			out.push(full);
		}
	}
	return out;
}

/** All page routes that VitePress will serve, derived from the docs tree. */
function buildRouteSet(files) {
	const routes = new Set();
	for (const file of files) {
		if (path.basename(file).startsWith('_')) {
			continue; // excluded from nav/build (templates)
		}
		let rel = path.relative(DOCS, file).replace(/\\/g, '/');
		rel = rel.replace(/\.md$/, '');
		if (rel.endsWith('/index')) {
			const dir = rel.slice(0, -'/index'.length);
			routes.add('/' + dir);
			routes.add('/' + dir + '/');
		}
		routes.add('/' + rel);
	}
	routes.add('/'); // home
	return routes;
}

const LINK_RE = /!?\[[^\]]*\]\(([^)]+)\)/g;

function extractTargets(content) {
	const targets = [];
	let match;
	while ((match = LINK_RE.exec(content)) !== null) {
		const isImage = match[0].startsWith('!');
		let target = match[1].trim();
		// Strip an optional markdown title: [text](url "title")
		target = target.replace(/\s+["'].*["']$/, '');
		targets.push({target, isImage});
	}
	return targets;
}

const files = walk(DOCS);
const routes = buildRouteSet(files);

// Storybook story links are validated against the snapshot of story ids in
// scripts/storybook-index.json (extracted from Storybook's own store). Ids
// must never be hand-derived: Storybook sanitizes titles (DropDown becomes
// "dropdown"), so a plausible-looking id may not exist.
let storyIds = null;
const INDEX_PATH = path.join(__dirname, 'storybook-index.json');
if (fs.existsSync(INDEX_PATH)) {
	storyIds = new Set(JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8')).ids);
}

function storyIdFromUrl(target) {
	try {
		const url = new URL(target);
		if (url.host !== 'storybook.clayui.com') {
			return null;
		}
		const match = (url.searchParams.get('path') || '').match(
			/^\/(?:story|docs)\/(.+)$/
		);
		return match ? match[1] : null;
	} catch {
		return null;
	}
}

let broken = 0;
let externalCount = 0;
let checked = 0;
let storyChecked = 0;

for (const file of files) {
	if (path.basename(file).startsWith('_')) {
		continue;
	}
	const content = fs.readFileSync(file, 'utf8');
	const rel = path.relative(REPO_ROOT, file);

	for (const {target, isImage} of extractTargets(content)) {
		if (!target || target.startsWith('#')) {
			continue;
		}
		if (/^(https?:|mailto:|tel:)/.test(target)) {
			externalCount++;
			const storyId = storyIdFromUrl(target);
			if (storyId && storyIds) {
				storyChecked++;
				if (!storyIds.has(storyId)) {
					console.error(
						`BROKEN story  ${rel}  ->  ${storyId} (not in scripts/storybook-index.json)`
					);
					broken++;
				}
			}
			continue;
		}

		checked++;
		const [pathPart] = target.split('#');
		if (!pathPart) {
			continue; // pure anchor after split
		}

		if (isImage || pathPart.startsWith('/assets/') || /\.(png|jpe?g|gif|svg|webp)$/i.test(pathPart)) {
			// Asset reference: resolve against /assets (absolute) or the file dir.
			const assetPath = pathPart.startsWith('/')
				? path.join(REPO_ROOT, pathPart)
				: path.resolve(path.dirname(file), pathPart);
			if (!fs.existsSync(assetPath)) {
				console.error(`BROKEN asset  ${rel}  ->  ${target}`);
				broken++;
			}
			continue;
		}

		// Page link.
		if (pathPart.startsWith('/')) {
			const normalized = pathPart.replace(/\.(md|html)$/, '');
			if (!routes.has(normalized) && !routes.has(normalized + '/')) {
				console.error(`BROKEN link   ${rel}  ->  ${target}`);
				broken++;
			}
		} else {
			// Relative link to another doc.
			const resolved = path.resolve(path.dirname(file), pathPart);
			const candidates = [
				resolved,
				resolved + '.md',
				path.join(resolved, 'index.md'),
			];
			if (!candidates.some((candidate) => fs.existsSync(candidate))) {
				console.error(`BROKEN link   ${rel}  ->  ${target}`);
				broken++;
			}
		}
	}
}

console.log(
	`\nChecked ${checked} internal link(s) across ${files.length} file(s). ` +
		`${storyChecked} Storybook story id(s) validated against the index. ` +
		`${externalCount} external link(s) not fetched.`
);

if (broken > 0) {
	console.error(`\n${broken} broken internal link(s) found.`);
	process.exit(1);
}
console.log('No broken internal links.');
