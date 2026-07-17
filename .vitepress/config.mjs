import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {defineConfig} from 'vitepress';

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Repository coordinates. Change these if the repo is forked or renamed;
// they drive the GitHub Pages base path and the "Edit this page" links.
const GITHUB_OWNER = 'marcoscv-work';
const GITHUB_REPO = 'clay-lexicon-migration-to-learn';

const BASE = `/${GITHUB_REPO}/`;

export default defineConfig({
	// Content lives in /docs so the Markdown stays portable and never mixes
	// with viewer configuration. VitePress config stays in /.vitepress.
	srcDir: 'docs',

	// Project pages are served from https://<owner>.github.io/<repo>/, so the
	// base path must match the repo name for assets and internal links to resolve.
	base: BASE,

	title: 'Clay',
	description:
		'Proof of concept: Clay and Lexicon documentation merged under a single Clay umbrella. Not official Liferay documentation.',
	lang: 'en-US',

	// Fail the build on dead internal links so CI catches them.
	ignoreDeadLinks: false,

	// The component page template is documentation for contributors, not a page.
	srcExclude: ['**/_TEMPLATE.md'],

	head: [
		['meta', {name: 'robots', content: 'noindex, nofollow'}],
		[
			'meta',
			{
				name: 'description',
				content:
					'Proof of concept for LPD-98580. Not official Liferay documentation.',
			},
		],
	],

	themeConfig: {
		siteTitle: 'Clay Docs (PoC)',

		// Client-side search, no external service required.
		search: {
			provider: 'local',
		},

		nav: [
			{text: 'Get Started', link: '/get-started/'},
			{text: 'Foundations', link: '/foundations/color'},
			{text: 'Components', link: '/components/button'},
			{text: 'CSS', link: '/css/'},
			{text: 'Patterns', link: '/patterns/common-actions'},
		],

		// Sidebar mirrors the /docs structure. Components are alphabetical,
		// per the migration brief. Single-page sections are plain links (no
		// group heading) to avoid duplicated labels in the navigation.
		sidebar: [
			{
				text: 'Get Started',
				link: '/get-started/',
			},
			{
				text: 'Foundations',
				items: [
					{text: 'Color', link: '/foundations/color'},
					{text: 'Grid', link: '/foundations/grid'},
					{text: 'Typography', link: '/foundations/typography'},
				],
			},
			{
				text: 'Components',
				items: [
					{text: 'Alert', link: '/components/alert'},
					{text: 'Badge', link: '/components/badge'},
					{text: 'Breadcrumb', link: '/components/breadcrumb'},
					{text: 'Button', link: '/components/button'},
					{text: 'Card', link: '/components/card'},
					{text: 'Drop Down', link: '/components/drop-down'},
					{text: 'Empty State', link: '/components/empty-state'},
					{text: 'Label', link: '/components/label'},
					{text: 'Link', link: '/components/link'},
					{
						text: 'Loading Indicator',
						link: '/components/loading-indicator',
					},
					{text: 'Modal', link: '/components/modal'},
					{
						text: 'Navigation Bar',
						link: '/components/navigation-bar',
					},
					{text: 'Pagination', link: '/components/pagination'},
					{text: 'Popover', link: '/components/popover'},
					{text: 'Progress Bar', link: '/components/progress-bar'},
					{text: 'Sticker', link: '/components/sticker'},
					{text: 'Table', link: '/components/table'},
					{text: 'Tabs', link: '/components/tabs'},
					{text: 'Tooltip', link: '/components/tooltip'},
					{text: 'Vertical Nav', link: '/components/vertical-nav'},
				],
			},
			{
				text: 'CSS Framework',
				link: '/css/',
			},
			{
				text: 'Patterns',
				items: [
					{text: 'Common Actions', link: '/patterns/common-actions'},
				],
			},
		],

		// "Edit this page on GitHub" on every page. VitePress resolves :path
		// relative to srcDir (docs), so the docs/ segment is added explicitly.
		editLink: {
			pattern: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/edit/main/docs/:path`,
			text: 'Edit this page on GitHub',
		},

		outline: {
			level: [2, 3],
			label: 'On this page',
		},

		socialLinks: [
			{
				icon: 'github',
				link: `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`,
			},
		],
	},

	// Keep the .md files portable: relative links between docs use the .md
	// suffix in source, which VitePress rewrites to clean routes.
	markdown: {
		theme: {
			light: 'github-light',
			dark: 'github-dark',
		},

		// Prepend the base path to root-absolute image sources (for example
		// /assets/components/x.png) so images served from the public directory
		// resolve correctly under the GitHub Pages base path, in both dev and
		// build. Keeping the Markdown paths base-agnostic keeps /docs portable.
		config: (md) => {
			const defaultImageRenderer =
				md.renderer.rules.image ??
				((tokens, idx, options, env, self) =>
					self.renderToken(tokens, idx, options));

			md.renderer.rules.image = (tokens, idx, options, env, self) => {
				const token = tokens[idx];
				const srcIndex = token.attrIndex('src');
				if (srcIndex >= 0) {
					const src = token.attrs[srcIndex][1];
					if (
						src.startsWith('/') &&
						!src.startsWith('//') &&
						!src.startsWith(BASE)
					) {
						token.attrs[srcIndex][1] =
							BASE.replace(/\/$/, '') + src;
					}
				}
				return defaultImageRenderer(tokens, idx, options, env, self);
			};
		},
	},

	// Images live in the repo-root /assets folder (the deliverable) and are
	// referenced from Markdown with absolute paths like /assets/components/x.png.
	// Disable Vue's absolute-asset import so those paths are served statically
	// from the public directory (with the base path applied) in both dev and
	// build, instead of being turned into module imports. The scripts/sync-assets
	// step mirrors /assets into the served public/assets folder.
	vue: {
		template: {
			transformAssetUrls: {
				includeAbsolute: false,
			},
		},
	},

	// Serve static files (the synced /public/assets) from the repo-root /public
	// folder rather than the default docs/public, so nothing generated lives
	// inside the portable /docs deliverable.
	vite: {
		publicDir: path.join(REPO_ROOT, 'public'),
	},
});
