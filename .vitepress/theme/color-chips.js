/**
 * Progressive enhancement for color values (viewer layer only).
 *
 * The Markdown documents colors as plain inline code (for example `#0B5FFF`).
 * This module runs in the browser and prepends a small color chip to every hex
 * value in the content, giving the palette pages a swatch-like presentation
 * without adding any HTML to /docs. In any other pipeline the values render as
 * plain code, so the content stays portable.
 */

const HEX_RE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;
const CHIP_FLAG = 'data-color-chip';

export function addColorChips() {
	if (typeof document === 'undefined') {
		return;
	}

	const codes = document.querySelectorAll(
		`.vp-doc code:not([${CHIP_FLAG}])`
	);

	for (const code of codes) {
		const value = code.textContent.trim();
		if (!HEX_RE.test(value)) {
			continue;
		}

		code.setAttribute(CHIP_FLAG, 'true');

		// Skip hex values inside fenced code blocks; chips are for prose.
		if (code.closest('pre')) {
			continue;
		}

		const chip = document.createElement('span');
		chip.className = 'color-chip';
		chip.style.backgroundColor = value;
		chip.setAttribute('aria-hidden', 'true');

		code.insertAdjacentElement('beforebegin', chip);
	}
}
