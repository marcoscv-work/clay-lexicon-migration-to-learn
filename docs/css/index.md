---
title: CSS Framework
description: 'An overview of the Clay CSS framework: themes, installation, utilities, and customization.'
sources:
  - https://www.clayui.com/docs/css-framework
  - https://www.clayui.com/docs/css
status: poc-draft
---

# CSS Framework

`@clayui/css` is the styling foundation for Clay. It provides the component
styles and utility classes that the React components render, and you can use it
on its own for plain HTML. It is the pure CSS layer of Clay's multi-layered API.

## Themes

Clay ships two themes:

- **Atlas**: the default, full featured theme used across Liferay's product. Most
  applications use this.
- **Base**: a lighter, unopinionated starting point for teams that want to build
  their own theme on top of Clay's structure.

Component classes such as `btn`, `dropdown-menu`, and `label` come from the
framework, so plain HTML markup can match Clay's React components.

## Installation

Install the CSS package and import one theme in your application entry point:

```shell
npm install @clayui/css
```

```js
import '@clayui/css/lib/css/atlas.css';
```

If you only need the CSS, load it from a CDN instead:

```html
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@clayui/css/lib/css/atlas.css"
/>
```

## Utilities

Beyond component styles, the framework includes utility classes for common
layout and formatting needs, so you can style markup without writing custom
CSS. Each family has its own reference page:

- **[Layout Utilities](/css/layout-utilities)**: autofit rows, display, flex,
  float, position, overflow, vertical alignment, visibility, sizing, and
  inline items.
- **[Spacing Utilities](/css/spacing-utilities)**: the `c-` margin, padding,
  and gap classes on the 8px scale.
- **[Text Utilities](/css/text-utilities)**: sizes, weights, styles,
  alignment, wrapping, and truncation.
- **[Decoration Utilities](/css/decoration-utilities)**: borders, rounded
  corners, shadows, palette colors, and focus helpers.
- **[Accessibility Utilities](/css/accessibility-utilities)**: screen reader
  text, skip links, and user preference overrides.

The palette classes build on the [Color foundation](/foundations/color), which
also documents the chart palette; keyboard key styling (`c-kbd`) is covered by
the [Keys](/components/keys) component.

## Customizing with SCSS

The framework is designed to be themed without editing its source, through
`!default` variables, Sass maps, variant mixins, and helper functions. The
[SCSS and Theming](/css/scss) page covers each mechanism with examples; the
short version: override variables before importing the theme, and extend
components with your own modifier classes instead of changing base classes such
as `btn`, which Liferay's administration controls depend on. Creating modifiers keeps your styles isolated and compatible with
the React components.

## Relationship to the components

The React components in these docs render the classes from this framework. When
you use a component such as [Button](/components/button), you get these styles
automatically. Reach for the CSS framework directly when you are working in plain
HTML, or when you need a utility class that a component does not expose.

## Related

- [Get Started](/get-started/)
- [Color](/foundations/color)
- [Grid](/foundations/grid)
