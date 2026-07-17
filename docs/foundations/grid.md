---
title: Grid
description: Clay's 8px base grid, 12 column system, containers, and breakpoints.
sources:
  - https://design.liferay.com/lexicon/foundations/grid/
status: poc-draft
---

# Grid

Clay's layout framework gives every component and page a common structural
reference. Using it keeps spacing consistent and makes design and development
decisions faster, because dimensions and distances come from a shared set of
values.

## Base grid

The base grid is an 8px module. Sizes and the distances between elements are
multiples of 8: 16, 24, 32, 40, 48, and so on. This creates a consistent metric
rhythm across the interface.

![The 8px base grid, showing spacing measured in multiples of 8 pixels](/assets/foundations/grid-columns.png)

When you need a value smaller than 8px, use 4px. Reserve 4px for the internal
anatomy of small elements (in Atomic Design terms, atoms and molecules), and make
sure the element as a whole still fits the 8px grid. For example, a 4px gap
between a label and an input is fine, as long as the resulting field block aligns
to the 8px grid.

## Column system

The column system organizes medium and large blocks of content horizontally. It
is not for spacing small elements such as toolbar icons.

It is based on a twelve column CSS grid (following Bootstrap), with the gutter
adjusted to Clay's base grid. The gutter is 24px, and the columns are fluid: they
resize with their parent container while the gutter stays fixed.

## Vertical rhythm

The 8px grid also sets vertical spacing. For the distance between larger blocks,
such as long paragraphs, use the main line height, 24px, as the baseline (the
"spacer-y" value). On small viewports you can tighten this to 16px to save
vertical space while still respecting the grid.

## Containers

Clay provides two container types:

- **Fluid container**: its width is responsive and follows the viewport.

  ![A fluid container that expands to the full width of the viewport](/assets/foundations/grid-container-fluid.jpg)

- **Fixed width container**: it defines a maximum width that adjusts at
  breakpoints.

  ![A fixed width container with a maximum width, centered in the viewport](/assets/foundations/grid-container-fixed.jpg)

## Breakpoints

The layout responds at these breakpoints:

- Below 576px: extra small devices (portrait phones); container width auto.
- 576px and up: small devices (landscape phones); container width auto.
- 768px and up: medium devices (tablets); container width auto.
- 992px and up: large devices (desktops); container width auto.
- 1280px and up: extra large devices (large desktops); container width 1248px.

## Related

- [Color](/foundations/color)
- [Typography](/foundations/typography)
