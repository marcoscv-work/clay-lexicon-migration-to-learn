---
title: Color
description: Clay's color palette, the roles each color plays, and how to use color accessibly.
sources:
  - https://design.liferay.com/lexicon/foundations/color/
status: poc-draft
---

# Color

Color carries a large part of Clay's visual identity, brings harmony to the
interface, and helps communicate meaning. This palette was chosen for how well
the colors combine and with accessibility in mind. You can replace it with a
palette that reflects your own product or brand.

## Primary colors

The primary colors define most of the visual identity:

- **Dark** (`#272833`): text and icons, navigation backgrounds, borders, and
  dividers. It has darker and lighter steps for layered navigation backgrounds.
- **Primary** (`#0B5FFF`): the main actions, such as primary buttons and links,
  plus their hover and active states. It has darker steps for hover (`#0053F0`)
  and active (`#004AD7`), and lighter steps for disabled backgrounds and for
  hover and active backgrounds in tables and lists.
- **White** (`#FFFFFF`): backgrounds for cards, toolbars, modals, and forms, and
  text or icons on dark surfaces.

A neutral secondary gray (`#6B6C7E`) supports these, for secondary text, disabled
text, control borders, and dividers.

## Status colors

Status colors give meaning to feedback such as alerts, and always work alongside
an icon and text, never color on its own:

- **Error** (`#DA1414`): error messages and destructive states.
- **Success** (`#287D3C`): successful actions.
- **Warning** (`#B95000`): actions that completed with something to check.
- **Information** (`#2E5AAC`): neutral, informational messages.

Each status color has a darker step for hover and active states, a lighter step
for borders, and a very light step for message backgrounds (for example the
background of an alert).

## Using color accessibly

- Do not rely on color alone to convey meaning. Use color as an enhancement, and
  always pair it with an icon, a label, or text, so the meaning survives for
  users who cannot distinguish the colors.
- Keep text and its background at a contrast ratio of at least 4.5:1. The palette
  includes accessible steps (for example a primary and a secondary step tuned for
  a 3:1 contrast with white) to help you meet contrast requirements.
- When you customize the palette, re-check contrast for text, icons, and
  interactive states in both light and dark contexts.

## Charts

Clay provides a separate, longer palette for data visualization, tuned so that
adjacent series stay distinguishable. Use the chart palette for charts rather
than the interface colors above.

## Customizing the palette

This palette reflects Liferay's visual identity. You can substitute it with
colors that match your own brand. When you do, keep the roles (primary, status,
neutral) and the accessibility guidance above, so the interface stays coherent
and usable.

## Related

- [Typography](/foundations/typography)
- [Grid](/foundations/grid)
- [Alert](/components/alert), which uses the status colors
