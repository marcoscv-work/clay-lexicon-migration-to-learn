---
title: Layout Utilities
description: Utility classes for arranging content, from autofit rows to display, flex, position, and sizing.
sources:
  - https://www.clayui.com/docs/css/autofit
  - https://www.clayui.com/docs/css/display
  - https://www.clayui.com/docs/css/flex
  - https://www.clayui.com/docs/css/position
  - https://www.clayui.com/docs/css/width-and-height
status: poc-draft
---

# Layout Utilities

Utility classes for arranging content without custom CSS. They complement the
[grid](/foundations/grid) and the [layout components](/components/layout-components):
the grid organizes large blocks, and these utilities fine-tune everything else.

## Autofit

Autofit builds toolbar-like rows where columns shrink or expand to fill the
space, without the grid's gutters:

- `autofit-row` with `autofit-col` children: each column sizes to its content.
- `autofit-col-expand`: the column fills the remaining space.
- `autofit-col-shrink`: the column gives up space first.
- `autofit-padded` and `autofit-padded-no-gutters`: spacing variants.
- `autofit-float` and `autofit-float-end`: columns wrap and float like inline
  content; the `-sm-down` variants apply only below the small breakpoint.

```html
<div class="autofit-row autofit-padded">
	<div class="autofit-col autofit-col-expand">Title</div>
	<div class="autofit-col">Actions</div>
</div>
```

## Display

`d-{value}` sets the display property: `d-block`, `d-flex`, `d-inline`,
`d-inline-flex`, `d-none`, `d-table`, `d-table-cell`, `d-table-row`. Add a
breakpoint infix to apply from that width up (`d-md-flex`, `d-lg-none`), which
is also the standard way to hide and show elements responsively.

## Flex

Flex utilities configure a `d-flex` container: direction (`flex-row`,
`flex-column` and their `-reverse` forms), `justify-content-{start|center|end|around|between}`,
`align-items-*` and `align-content-*`, per-item `align-self-*`, plus
`flex-fill`, `flex-grow-{0|1}`, `flex-shrink-{0|1}`, `flex-wrap`, `flex-nowrap`,
and `order-{n}` for visual ordering. All accept breakpoint infixes.

## Float, position, and overflow

- `float-left`, `float-right`, `float-none` (with breakpoint infixes).
- `position-{static|relative|absolute|fixed|sticky}`, plus helpers such as
  `fixed-top`, `fixed-bottom`, and `sticky-top`.
- `overflow-auto` and `overflow-hidden` for scroll containment.

## Vertical alignment and visibility

- `align-{baseline|top|middle|bottom|text-top|text-bottom}` for inline and
  table-cell content.
- `visible` and `invisible` toggle visibility without removing the element from
  the layout (unlike `d-none`).

## Width and height

`w-{25|50|75|100|auto}` and `h-{25|50|75|100|auto}` size relative to the
parent, with `mw-100` and `mh-100` capping at 100% and `min-` and `max-`
variants for viewport-relative limits.

## Inline items

`inline-item` aligns small elements (icons, spinners) with text, and
`inline-item-before`, `inline-item-after`, and `inline-item-middle` handle the
spacing around them, as the [Button](/components/button) icon examples show.

## Related

- [Spacing Utilities](/css/spacing-utilities)
- [Layout Components](/components/layout-components)
- [Grid foundation](/foundations/grid)
