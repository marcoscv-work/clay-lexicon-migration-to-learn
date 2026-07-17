---
title: Dataset Display
description: The dataset display combines a management toolbar with data views and pagination.
sources:
  - https://design.liferay.com/lexicon/core-components/dataset-display/
storybook: https://storybook.clayui.com/?path=/story/design-system-components-managementtoolbar--default
status: poc-draft
---

# Dataset Display

The dataset display is the system's main data management pattern: a
[management toolbar](/components/management-toolbar) combined with one or more
visualization types, and optionally [pagination](/components/pagination). The
common visualizations are the [table](/components/table), the
[list](/components/list), and [cards](/components/card).

## Usage guidelines

Use the pattern when the data requires collective management: the toolbar
provides the tools to work with the dataset.

- Use it only once per page.
- Offer several visualization options only when they all suit the data; drop
  the ones that do not.
- Use it when the user performs actions on individual items or on a selection.

## Choosing the visualization

- **List view**: homogeneous sets of basic data, with sorting, grouping, and
  filtering; no exhaustive comparison of attributes.
- **Table view**: text heavy datasets that need direct, analytical comparison
  across attributes.
- **Card view**: datasets centered on imagery, where recognition beats
  comparison.

Empty datasets show the [empty state](/components/empty-state) that matches the
scenario (empty collection, empty search, success).

## Implementation

Compose the pattern from its parts: a
[Management Toolbar](/components/management-toolbar) wired to the active view,
one of the dataset views, and a
[Pagination Bar](/components/pagination) when the dataset pages. Selection in
the rows or cards reflects in the toolbar's active state, and the applied
filters appear in its results bar.

## Accessibility

- Each part carries its own accessibility contract (toolbar, view, pagination);
  keep the selection state announced when it changes.
- Switching the visualization type must not lose the user's context (filters,
  selection, page).

## Live examples

See the [Management Toolbar story](https://storybook.clayui.com/?path=/story/design-system-components-managementtoolbar--default)
together with the [Table](https://storybook.clayui.com/?path=/story/design-system-components-table--dynamic)
and [List](https://storybook.clayui.com/?path=/story/design-system-components-list--simple)
stories.

## Related components

- [Management Toolbar](/components/management-toolbar)
- [Table](/components/table)
- [List](/components/list)
- [Card](/components/card)
- [Pagination](/components/pagination)
