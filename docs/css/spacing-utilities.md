---
title: Spacing Utilities
description: The c-spacing classes set margin, padding, and gap on the 8px scale, per breakpoint.
sources:
  - https://www.clayui.com/docs/css/c-spacing
status: poc-draft
---

# Spacing Utilities

The `c-` spacing classes set margins, padding, and gaps from a single naming
scheme, on the same scale as the [8px grid](/foundations/grid). The `c` prefix
stands for Clay and avoids collisions with other frameworks; unlike Bootstrap's
spacing utilities, these do not use `!important`.

## How to read a class

The pattern is `{prefix}-{type}{direction}-{breakpoint}-{value}`. For example,
`c-mt-sm-3` means "margin-top of 1rem from the small breakpoint up".

- **Type**: `m` for margin, `p` for padding.
- **Direction**: `t` top, `r` right, `b` bottom, `l` left, `y` vertical, `x`
  horizontal, or empty for all directions (`c-m-3`).
- **Breakpoint** (optional): `sm`, `md`, `lg`, or `xl`; the rule applies from
  that width up. Without it, the rule always applies.
- **Value**: the spacing scale.

## The scale

- `0`: 0px
- `1`: 4px (0.25rem)
- `2`: 8px (0.5rem)
- `3`: 16px (1rem)
- `4`: 24px (1.5rem)
- `5`: 48px (3rem)
- `6`: 72px (4.5rem)
- `7`: 96px (6rem)
- `8`: 120px (7.5rem)
- `auto`: sets the value to auto (for example `c-mx-auto` to center)

Negative margins prefix the value with `n`: `c-mtn-2` applies -8px.

## Gap

`c-gap-{value}`, `c-gapx-{value}`, and `c-gapy-{value}` set the gap of flex and
grid containers on the same scale, replacing margin dances between children.

```html
<div class="d-flex c-gap-2">
	<span class="badge badge-info">One</span>
	<span class="badge badge-info">Two</span>
</div>
```

## Related

- [Layout Utilities](/css/layout-utilities)
- [Grid foundation](/foundations/grid), the source of the 8px scale
