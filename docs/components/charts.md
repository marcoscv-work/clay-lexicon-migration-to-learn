---
title: Charts
description: Design rules for charts, the graphical pattern for analyzing data, including color and interaction.
sources:
  - https://design.liferay.com/lexicon/core-components/charts/
storybook: null
status: poc-draft
---

# Charts

Charts are the main graphical pattern for analyzing data. These are the design
rules shared by every chart type; they exist so users always know what to
expect from a chart, whatever it visualizes.

<!-- REVIEW: @clayui/charts exists but its own docs state it will be deprecated soon in favor of a wrapper, and it has no Storybook stories; the CSS framework provides the chart color palette. Confirm the recommended charting implementation (and whether per-chart-type pages should be migrated) with the Clay team. -->

## Color

Color must be the last resource for differentiating chart elements: prefer
patterns, dashed lines, and shapes first. When color is needed, use the
dedicated [chart palette](/foundations/color#chart-colors) in its defined
order, so series stay distinguishable and consistent across charts.

## Interaction

All charts share a set of basic behaviors: consistent hover feedback with
tooltips for data points, a legend that toggles series visibility, and the same
selection gestures everywhere. Reusing these behaviors keeps the learning curve
flat across the product.

## The collection

The Lexicon collection defines these chart types: bar, donut, forecast,
heatmap, line, pie, and stacked bar. Each has its own design spec in the
original Lexicon documentation; migrating those per-type specs is out of scope
for this sample and would follow this same page pattern.

## Usage guidelines

- Choose the chart type from the data relationship (comparison, composition,
  trend), not from aesthetics.
- Do not rely on color alone to distinguish series; combine it with shape or
  pattern.
- Keep axes, legends, and tooltips consistent across every chart in the
  product.

## Related

- [Color foundation](/foundations/color), for the chart palette
- [Table](/components/table), when exact values matter more than shape
