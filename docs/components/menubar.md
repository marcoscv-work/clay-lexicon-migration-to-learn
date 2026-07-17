---
title: Menubar
description: The menubar is the collapsing markup pattern behind vertical navigations on small screens.
sources:
  - https://www.clayui.com/docs/components/menubar
storybook: null
status: poc-draft
---

# Menubar

The menubar is the markup pattern that makes a
[vertical navigation](/components/vertical-nav) collapse on small screens: at
767px and below it becomes a toggle button that expands the navigation over the
content. For vertical navigations that never collapse, the plain
[nav](/components/nav) stacked classes are enough.

## Variants and anatomy

The pattern pairs a `menubar-toggler` button (showing the active item's label)
with the collapsible list. The `menubar-vertical-expand-md` variant collapses
below the medium breakpoint; other expand variants change the threshold.

## Usage guidelines

- Use the React [Vertical Nav](/components/vertical-nav) component when
  possible; it renders this pattern for you, including the mobile trigger.
- Keep the toggler's label showing the current selection, so context is not
  lost while collapsed.

## Implementation

Use the CSS framework classes over standard markup:

```html
<nav class="menubar menubar-transparent menubar-vertical-expand-md">
	<button
		aria-controls="menubarCollapse"
		aria-expanded="false"
		class="menubar-toggler"
		data-toggle="collapse"
		type="button"
	>
		General
	</button>
	<div class="collapse menubar-collapse" id="menubarCollapse">
		<ul class="nav nav-nested"></ul>
	</div>
</nav>
```

## Accessibility

- The toggler exposes `aria-expanded` and controls the collapsible region via
  `aria-controls`.
- The expanded menu overlays the content; it never pushes it down, and it stays
  keyboard reachable.

## Live examples

There is no Storybook story for the menubar markup pattern; the React
[Vertical Nav stories](https://storybook.clayui.com/?path=/story/design-system-components-verticalnav--default)
show the behavior it implements.

## Related components

- [Vertical Nav](/components/vertical-nav)
- [Nav](/components/nav)
