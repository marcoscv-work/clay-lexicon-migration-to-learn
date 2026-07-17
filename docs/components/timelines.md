---
title: Timelines
description: Timelines visualize a series of events along a vertical line, with a panel per event.
sources:
  - https://design.liferay.com/lexicon/core-components/timelines/
  - https://www.clayui.com/docs/components/timelines
storybook: null
status: poc-draft
---

# Timelines

Use a timeline to represent a series of events over time. Each event pairs a
point on the line with a panel describing the event to its left or right. The
point is usually a circle, but for people-related events a user identifier
works well.

## Variants and anatomy

The alignment of the line defines the variants:

- **Default**: points aligned to the left, panels to the right.
- **Right**: points aligned to the right.
- **Center**: points centered, with panels on either side; the even and odd
  configurations alternate which side the first panel starts on.

On viewports below 768px the points always align left, with a dedicated
right-aligned variant available when needed.

## Usage guidelines

- Keep each event's panel short: what happened and when.
- Use a consistent point identifier along one timeline (all circles or all user
  stickers).
- Order events chronologically and keep the direction consistent across the
  product.

## Implementation

Timelines are provided by the Clay CSS framework as markup patterns (there is
no React component). Install the CSS package and use the `timeline` classes:

```shell
npm install @clayui/css
```

```html
<ul class="timeline">
	<li class="timeline-item">
		<div class="panel panel-secondary">
			<div class="panel-body">
				<h4 class="panel-title">Document approved</h4>
				<p class="text-secondary">Yesterday at 16:32</p>
			</div>
		</div>
	</li>
</ul>
```

See the timelines section of the [CSS framework](/css/) for the full class
reference.

## Accessibility

- The timeline renders as a list, so the number of events and their order are
  announced.
- Keep dates in text (not only relative positions), so the sequence is
  understandable without seeing the line.

## Live examples

There is no Storybook story for timelines; the pattern is CSS only. This gap is
recorded in [STORYBOOK-GAPS.md](https://github.com/marcoscv-work/clay-lexicon-migration-to-learn/blob/main/STORYBOOK-GAPS.md).

## Related components

- [Panel](/components/panel)
- [Sticker](/components/sticker)
- [List](/components/list)
