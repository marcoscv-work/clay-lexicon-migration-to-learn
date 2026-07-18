---
title: SCSS and Theming
description: How to theme Clay CSS with Sass variables, maps, mixins, and functions without editing its source.
sources:
  - https://www.clayui.com/docs/css/scss
status: poc-draft
---

# SCSS and Theming

Clay CSS is built with Sass and designed to be themed by overriding, never by
editing its source. Four mechanisms make that possible.

## Variables

Every Clay variable carries the `!default` flag, so a value you define before
importing `base.scss` or `atlas.scss` wins:

```scss
// _custom.scss, imported before atlas.scss
$primary: #6200ee;
$alert-dismissible-padding-right: 3rem;
```

A `!default` assignment only applies when the variable is undefined or `null`,
which is what makes the override order work. One caveat from the Sass spec: a
variable already set cannot be reset to `null` with `null !default`; Clay works
around it with maps.

## Sass maps

Components read their values from maps merged with `map-merge`, where your
overrides win over the defaults. Setting a key to `null` removes that
declaration from the output entirely, which lets you strip properties instead
of overwriting them:

```scss
$my-component: (
	background-color: null,
	color: null,
) !default;
```

## Mixins

Mixins such as `clay-button-variant` generate a component variant from a map of
values, covering the hover, focus, active, and disabled states in one place:

```scss
$btn-custom: (
	background-color: #6200ee,
	color: #fff,
	hover: (
		background-color: #651fff,
	),
);

.btn-custom {
	@include clay-button-variant($btn-custom);
}
```

Extend components by adding modifier classes on top of the base class
(`btn btn-custom`), not by modifying `btn` or `btn-primary` directly: Liferay
uses the base classes across its administration controls, so editing them
changes those screens too.

## Functions

Helper functions cover common needs: `clay-icon($name, $color)` returns a
spritemap icon as a data URI for backgrounds, `clay-svg-url($svg)` encodes an
inline SVG, and `math-sign($number)` negates values safely for offsets.

## Related

- [CSS Framework overview](/css/)
- [Color foundation](/foundations/color), for the palette variables
- [Get Started](/get-started/), for installing @clayui/css
