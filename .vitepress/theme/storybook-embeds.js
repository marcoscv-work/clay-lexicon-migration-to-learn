/**
 * Progressive enhancement for Storybook links (viewer layer only).
 *
 * The Markdown in /docs stays plain CommonMark: each component page links to
 * its story with a normal link, per the migration brief (Storybook is the only
 * home for live, runnable examples). This module runs in the browser and turns
 * those links into embedded, lazy-loaded Storybook iframes so the component can
 * be tried without leaving the page.
 *
 * Because the enhancement lives in the viewer theme, the content degrades
 * gracefully anywhere else (for example Liferay Learn's pipeline): the links
 * render as plain links and nothing breaks. The example itself is still served
 * by storybook.clayui.com; nothing is ported or recreated.
 */

const STORYBOOK_HOST = 'storybook.clayui.com';
const ENHANCED_FLAG = 'data-storybook-embedded';

/**
 * Per-story iframe heights, in pixels, so each embed fits its content instead
 * of using one generic height. Small static stories were measured against the
 * rendered story canvas (document.body.scrollHeight on iframe.html) with a
 * small buffer; interactive stories (drop downs, modals, toasts) get room for
 * their expanded state. Stories not listed fall back to DEFAULT_HEIGHT.
 */
const DEFAULT_HEIGHT = 400;
const STORY_HEIGHTS = {
	'design-system-components-alert--default': 110,
	'design-system-components-alert--feedback': 166,
	'design-system-components-alert--toast': 320,
	'design-system-components-badge--default': 64,
	'design-system-components-badge--with-icon': 64,
	'design-system-components-button--default': 74,
	'design-system-components-button--group': 74,
	'design-system-components-button--icon': 74,
	'design-system-components-card--card-with-horizontal': 360,
	'design-system-components-card--card-with-info': 440,
	'design-system-components-card--card-with-info-image': 440,
	'design-system-components-card--card-with-navigation': 380,
	'design-system-components-card--card-with-user': 440,
	'design-system-components-card--product-card': 480,
	'design-system-components-dropdown--checkbox': 420,
	'design-system-components-dropdown--default': 420,
	'design-system-components-dropdown--drilldown': 420,
	'design-system-components-dropdown--groups': 460,
	'design-system-components-dropdown--search': 420,
	'design-system-components-modal--default': 560,
	'design-system-components-table--dynamic': 480,
	'design-system-components-table--sections': 520,
	'design-system-components-table--sorting': 480,
	'design-system-components-table--treegrid': 520,
	'design-system-components-tooltip--default': 48,
	'design-system-components-tooltip--tooltip-provider': 140,
};

/** Extract the story id from a canonical ?path=/story/<id> Storybook URL. */
function storyIdFromHref(href) {
	try {
		const url = new URL(href);
		if (url.host !== STORYBOOK_HOST) {
			return null;
		}
		const path = url.searchParams.get('path') || '';
		const match = path.match(/^\/(?:story|docs)\/(.+)$/);
		return match ? match[1] : null;
	} catch {
		return null;
	}
}

/**
 * Find Storybook story links in the rendered page and insert an embedded
 * preview after the paragraph that contains them. Idempotent: already-enhanced
 * links are skipped, so it is safe to call on every route change.
 */
export function embedStorybookLinks() {
	if (typeof document === 'undefined') {
		return;
	}

	const links = document.querySelectorAll(
		`.vp-doc a[href*="${STORYBOOK_HOST}"]:not([${ENHANCED_FLAG}])`
	);

	// One embed per story per page: pages may link the same story more than
	// once (for example in a variants list and again under Live examples).
	// Derive the already-embedded set from the DOM so this stays idempotent.
	const embeddedIds = new Set(
		[...document.querySelectorAll('.storybook-embed iframe')]
			.map((frame) => {
				try {
					return new URL(frame.src).searchParams.get('id');
				} catch {
					return null;
				}
			})
			.filter(Boolean)
	);

	for (const link of links) {
		// Never enhance links inside an embed we created (the figcaption link
		// also points at Storybook; without this the enhancer recurses).
		if (link.closest('.storybook-embed')) {
			continue;
		}

		const id = storyIdFromHref(link.href);
		if (!id) {
			continue;
		}

		link.setAttribute(ENHANCED_FLAG, 'true');

		if (embeddedIds.has(id)) {
			continue;
		}

		// Idempotence against DOM state too (not only the link flag): if the
		// framework re-rendered the content but a previously injected embed for
		// this block survived, do not add a second one.
		const host = link.closest('p, li') || link;
		if (host.nextElementSibling?.classList.contains('storybook-embed')) {
			continue;
		}

		embeddedIds.add(id);

		const container = document.createElement('figure');
		container.className = 'storybook-embed';

		const iframe = document.createElement('iframe');
		iframe.src = `https://${STORYBOOK_HOST}/iframe.html?id=${encodeURIComponent(
			id
		)}&viewMode=story`;
		iframe.loading = 'lazy';
		iframe.title = `Live example: ${link.textContent.trim()}`;
		iframe.style.height = `${STORY_HEIGHTS[id] ?? DEFAULT_HEIGHT}px`;

		const caption = document.createElement('figcaption');
		const openLink = document.createElement('a');
		openLink.href = link.href;
		openLink.target = '_blank';
		openLink.rel = 'noreferrer';
		openLink.textContent = 'Open this example in Storybook';
		// Flag the caption link too so no enhancement pass ever matches it.
		openLink.setAttribute(ENHANCED_FLAG, 'true');
		caption.appendChild(openLink);

		container.appendChild(iframe);
		container.appendChild(caption);

		// Insert the embed after the block that holds the link, keeping the
		// original paragraph (and its link) intact as the accessible fallback.
		host.insertAdjacentElement('afterend', container);
	}
}
