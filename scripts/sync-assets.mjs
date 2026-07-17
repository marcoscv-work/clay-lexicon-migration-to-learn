#!/usr/bin/env node
/**
 * Mirror the canonical /assets folder (the migration deliverable, committed at
 * the repo root) into /public/assets, which VitePress serves statically with the
 * correct base path in both dev and build.
 *
 * The /public copy is generated and gitignored: /assets stays the single source
 * of truth. This runs automatically before `docs:dev` and `docs:build`.
 */

import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const SRC = path.join(REPO_ROOT, 'assets');
const DEST = path.join(REPO_ROOT, 'public', 'assets');

if (!fs.existsSync(SRC)) {
	console.warn(`sync-assets: no /assets folder at ${SRC}; nothing to sync.`);
	process.exit(0);
}

fs.rmSync(DEST, {recursive: true, force: true});
fs.mkdirSync(path.dirname(DEST), {recursive: true});
fs.cpSync(SRC, DEST, {recursive: true});

const count = countFiles(DEST);
console.log(`sync-assets: mirrored ${count} file(s) from /assets to /public/assets.`);

function countFiles(dir) {
	let total = 0;
	for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
		const full = path.join(dir, entry.name);
		total += entry.isDirectory() ? countFiles(full) : 1;
	}
	return total;
}
