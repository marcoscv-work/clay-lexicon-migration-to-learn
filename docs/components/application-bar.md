---
title: Application Bar
description: The application bar is the main navigation bar of an application, provided as a markup pattern.
sources:
  - https://www.clayui.com/docs/components/application-bar
storybook: null
status: poc-draft
---

# Application Bar

The application bar is the main navigation bar of Liferay DXP applications: the
dark bar at the top with the product menu trigger, the application title, and
the contextual actions. Clay provides it as a markup pattern built on the CSS
framework (there is no dedicated React component).

<!-- REVIEW: in Lexicon this belongs to the satellites section (out of the core spec); it is included here because Clay documents it as a component pattern. -->

## Variants and anatomy

The bar combines, left to right: the menu trigger (a monospaced icon button),
the application or page title, and the actions area (icon buttons and drop
downs). The dark variant is the standard for administration screens.

## Usage guidelines

- Keep one application bar per screen, always at the top.
- Put the screen's primary action at the right end, following the
  [toolbar](/components/toolbar) rules.
- Note that drop downs inside navbars need the CSS alignment classes; the
  automatic positioning does not apply there.

## Implementation

Use the CSS framework classes over standard markup:

```html
<nav class="application-bar application-bar-dark navbar navbar-expand-md">
	<div class="container-fluid">
		<ul class="navbar-nav">
			<li class="nav-item">
				<button aria-label="Open menu" class="nav-link nav-link-monospaced btn btn-unstyled" type="button">
					<svg class="lexicon-icon"><use href="/icons.svg#product-menu-closed"></use></svg>
				</button>
			</li>
		</ul>
		<div class="navbar-title">Documents and Media</div>
	</div>
</nav>
```

## Accessibility

- The bar is a navigation landmark; label it when the page has several.
- Icon-only triggers carry accessible names (`aria-label`).

## Live examples

There is no Storybook story for the application bar; the pattern is CSS only
(recorded in the Storybook gaps backlog).

## Related components

- [Navigation Bar](/components/navigation-bar)
- [Toolbar](/components/toolbar)
- [Drop Down](/components/drop-down)
