import {defineConfig} from 'vitepress';

// Repository coordinates. Change these if the repo is forked or renamed;
// they drive the GitHub Pages base path and the "Edit this page" links.
const GITHUB_OWNER = 'marcoscv-work';
const GITHUB_REPO = 'clay-docs-migration-poc';

export default defineConfig({
	// Content lives in /docs so the Markdown stays portable and never mixes
	// with viewer configuration. VitePress config stays in /.vitepress.
	srcDir: 'docs',

	// Project pages are served from https://<owner>.github.io/<repo>/, so the
	// base path must match the repo name for assets and internal links to resolve.
	base: `/${GITHUB_REPO}/`,

	title: 'Clay',
	description:
		'Proof of concept: Clay and Lexicon documentation merged under a single Clay umbrella. Not official Liferay documentation.',
	lang: 'en-US',

	// Fail the build on dead internal links so CI catches them.
	ignoreDeadLinks: false,

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
		// per the migration brief.
		sidebar: [
			{
				text: 'Get Started',
				items: [{text: 'Get Started', link: '/get-started/'}],
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
					{text: 'Button', link: '/components/button'},
					{text: 'Card', link: '/components/card'},
					{text: 'Drop Down', link: '/components/drop-down'},
					{text: 'Modal', link: '/components/modal'},
					{text: 'Table', link: '/components/table'},
					{text: 'Tooltip', link: '/components/tooltip'},
				],
			},
			{
				text: 'CSS',
				items: [{text: 'CSS Framework', link: '/css/'}],
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
	},
});
