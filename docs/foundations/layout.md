---
title: Layout
description: The four standard layouts that organize pages, built on the twelve column grid.
sources:
  - https://design.liferay.com/lexicon/foundations/layout/
status: poc-draft
---

# Layout

Four standard layouts organize the space of a page on top of the
[grid](/foundations/grid). Choosing the right one is the first step toward a
structured reading experience; the components' information architecture builds
on top of it.

## Cards layout

Displays cards in a dataset. It adapts fully to the container's width,
adjusting the size of the cards and the number per row to the viewport. Used in
the dataset display pattern.

## Form box

The basic container for forms: a box spanning 8 grid columns with a 2 column
offset on each side. On viewports of 768px or less it grows to the full 12
columns to make room for the content.

## Full box

A fluid box that always occupies 100% of the container (12 columns) across
breakpoints. The lateral space is removed below 576px. Used in the dataset
display pattern.

## Sidebar and box

Pairs a 3 column sidebar (a [vertical nav](/components/vertical-nav)) with the
content box:

- **3+9 columns**: the default for tables, lists, and any content except forms.
- **3+8 columns**: for forms, which need less width.

On viewports of 768px or less, the vertical navigation becomes a toggle top
navigation and the box takes the full 12 columns.

## Related

- [Grid](/foundations/grid)
- [Forms](/components/forms)
- [Dataset Display](/components/dataset-display)
