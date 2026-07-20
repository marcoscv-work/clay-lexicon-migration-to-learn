<script setup>
// Persistent, page-level notice required by the PoC brief (LPD-98580).
// Rendered in the default theme's `layout-top` slot so it appears on every page.
</script>

<template>
	<div class="poc-banner" role="note" aria-label="Proof of concept notice">
		<span class="poc-banner__tag">Proof of concept</span>
		<span class="poc-banner__text">
			Proof of concept for LPD-98580. Not official Liferay documentation.
			Official docs:
			<a href="https://clayui.com">clayui.com</a> and
			<a href="https://learn.liferay.com">learn.liferay.com</a>.
		</span>
	</div>
</template>

<style scoped>
.poc-banner {
	/* In the page flow by default, so small viewports keep their vertical
	 * space: the notice still opens the page above the nav, it just scrolls
	 * away like the rest of the mobile chrome. Pinned only at >=960px, the
	 * same breakpoint where the default theme fixes .VPNav; the layout offset
	 * for that pinned range is --vp-layout-top-height (set in custom.css),
	 * which VitePress's own components (nav, local nav, sidebar) consume. */
	position: relative;
	z-index: var(--vp-z-index-layout-top, 10);
	box-sizing: border-box;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 0.25rem 0.5rem;
	min-height: 40px;
	padding: 0.375rem 1.5rem;
	font-size: 0.8125rem;
	line-height: 1.4;
	text-align: center;
	/* High-contrast amber pairing verified >= 4.5:1 in both themes. */
	background-color: #7a4f01;
	color: #ffffff;
	border-bottom: 1px solid rgba(255, 255, 255, 0.25);
}

@media (min-width: 960px) {
	.poc-banner {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		min-height: var(--vp-layout-top-height, 40px);
	}
}

.poc-banner__tag {
	flex-shrink: 0;
	padding: 0.0625rem 0.5rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.03em;
	font-size: 0.6875rem;
	background-color: #ffffff;
	color: #7a4f01;
	border-radius: 0.25rem;
}

.poc-banner__text a {
	color: #ffffff;
	text-decoration: underline;
	font-weight: 600;
}

.poc-banner__text a:hover,
.poc-banner__text a:focus-visible {
	text-decoration: none;
}
</style>
