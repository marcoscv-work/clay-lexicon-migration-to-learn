---
title: Section
description: Sections group content hierarchically, optionally collapsing to hide and reveal it.
sources:
  - https://design.liferay.com/lexicon/core-components/section/
storybook: https://storybook.clayui.com/?path=/story/design-system-components-panel--sheet
status: poc-draft
---

# Section

Use sections to group content so it can be processed more effectively,
especially in forms and configuration screens. A section pairs an uppercase
title with the content it groups, following the rules from the
[forms guidance](/components/forms).

## Variants and anatomy

- **Section**: the simple form, a non collapsible group that establishes
  hierarchy.
- **Collapsible section**: expands and collapses its content, with an icon that
  reflects the open or closed state. Only first level sections may collapse;
  second level sections never do.

Sizes: regular section items stack vertically with 24px between them; the small
size compacts that rhythm for dense screens.

In Clay, sections inside form sheets are implemented with the
[Panel](/components/panel) component; try the
[sheet story](https://storybook.clayui.com/?path=/story/design-system-components-panel--sheet).

## Usage guidelines

- Identify sections with the 14px uppercase title from the forms guidance, and
  wrap long titles rather than truncating them.
- Add the full width underline separator in configuration forms that need a
  stronger visual separation.
- Do not hide required content inside collapsed sections.

## Implementation

Use the [Panel](/components/panel) component with the sheet display for
collapsible form sections, or plain markup with the `sheet-section` CSS classes
for the simple form.

## Accessibility

- A collapsible section's header is a button exposing `aria-expanded`.
- Section titles are headings, so users can navigate the form by headings.

## Live examples

See the [panel sheet story on Storybook](https://storybook.clayui.com/?path=/story/design-system-components-panel--sheet).

## Related components

- [Panel](/components/panel)
- [Forms](/components/forms)
