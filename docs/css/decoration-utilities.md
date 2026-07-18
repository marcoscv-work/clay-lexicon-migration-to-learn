---
title: Decoration Utilities
description: Utility classes for borders, rounded corners, shadows, palette colors, and focus styles.
sources:
  - https://www.clayui.com/docs/css/borders
  - https://www.clayui.com/docs/css/shadow
  - https://www.clayui.com/docs/css/color-utilities
  - https://www.clayui.com/docs/css/c-focus-inset
  - https://www.clayui.com/docs/css/c-inner
status: poc-draft
---

# Decoration Utilities

Utility classes for the visual finish of an element: borders, corners, shadows,
palette colors, and focus behavior.

## Borders

- **Additive**: `border` draws all sides; `border-top`, `border-right`,
  `border-bottom`, `border-left` draw one.
- **Subtractive**: `border-0` removes all borders; `border-top-0` and friends
  remove one side.
- **Color**: `border-{primary|secondary|success|danger|warning|info|light|dark|white}`
  color the border with the [palette](/foundations/color); the
  `$border-colors` Sass map extends the set.

## Rounded corners

`rounded` applies the default radius, `rounded-0` removes it, and
`rounded-{sm|lg|pill|circle}` cover the size variants and full shapes.

## Shadows

`shadow-{sm||lg}` and `shadow-none` apply the elevation levels. Use shadows for
surfaces that float above the page (menus, popovers), not as decoration.

## Color utilities

`text-{color}` and `bg-{color}` apply the palette to text and backgrounds:
the semantic names (`primary`, `secondary`, `success`, `danger`, `warning`,
`info`, `light`, `dark`) and the chart palette names (`blue`, `teal`, `pink`,
and the rest). Keep the [contrast rules](/foundations/color#using-color-accessibly)
when combining them.

## Focus utilities

- `c-focus-inset` draws the focus border inside the element, for controls at
  the edge of a container where the outline would be clipped.
- `c-inner` (on a wrapper with `tabindex="-1"`) shows focus styles only on
  keyboard interaction and not on click, keeping pointer interactions clean
  while preserving the visible keyboard indicator.

```html
<button class="btn btn-primary c-focus-inset" type="button">Save</button>
```

## Related

- [Color foundation](/foundations/color)
- [Accessibility Utilities](/css/accessibility-utilities)
- [Layout Utilities](/css/layout-utilities)
