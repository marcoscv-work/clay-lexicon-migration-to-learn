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
layout and formatting needs, so you can style markup without writing custom CSS.
The utilities cover:

- **Layout**: flex, float, display, position, overflow, and vertical alignment.
- **Spacing**: margin and padding helpers built on the 8px grid.
- **Sizing**: width and height helpers, and autofit for responsive rows.
- **Typography**: text alignment, wrapping, transformation, and truncation.
- **Decoration**: borders, shadows, and color utilities.
- **Visibility**: showing and hiding content responsively.

## Customizing with SCSS

The framework is built with Sass and is designed to be themed without editing its
source:

- **Variables**: every Clay variable uses the `!default` flag, so you can
  override it by defining your own value before importing `base.scss` or
  `atlas.scss`.
- **Sass maps**: Clay uses maps heavily, which lets you reset a property to
  `null` (so it is not output) and reuse rulesets instead of overwriting them.
- **Mixins**: mixins such as `clay-button-variant` generate component variants
  from a map of values, so you can create your own variants.
- **Functions**: helpers such as `clay-icon` and `clay-svg-url` return icons as
  data URIs for use as background images.

Extend components by adding your own modifier classes rather than changing the
base classes. Liferay uses the base classes (for example `btn` and `btn-primary`)
throughout its administration controls, so editing them directly changes those
controls too. Creating modifiers keeps your styles isolated and compatible with
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
