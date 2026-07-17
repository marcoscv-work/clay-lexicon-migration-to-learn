---
title: Aspect Ratio
description: Aspect ratio classes constrain images to a fixed proportion relative to their container.
sources:
  - https://www.clayui.com/docs/components/aspect-ratio
storybook: null
status: poc-draft
---

# Aspect Ratio

Use the aspect ratio classes when you cannot control the size of an image and
need to constrain it to a proportion, as [cards](/components/card) do with
their 16 to 9 image area.

## Variants and anatomy

The base class `aspect-ratio` keeps a 1 to 1 ratio relative to the container's
width. The modifiers cover the common proportions: `aspect-ratio-3-to-2`,
`aspect-ratio-4-to-3`, `aspect-ratio-8-to-3`, `aspect-ratio-8-to-5`, and
`aspect-ratio-16-to-9`. Companion classes position the image inside the frame
(centered, flush to an edge) and handle cropping.

## Usage guidelines

- Pick one ratio per collection (all cards in a grid share it), so rows stay
  aligned.
- Create custom ratios through the `$aspect-ratio-sizes` Sass map rather than
  ad hoc CSS; the map generates the class and a Sass placeholder.

## Implementation

Use the CSS framework classes over standard markup:

```html
<div class="aspect-ratio aspect-ratio-16-to-9">
	<img alt="Preview of the document's first page" class="aspect-ratio-item-center-middle aspect-ratio-item-fluid" src="/preview.png" />
</div>
```

The `Card.AspectRatio` part of the [card](/components/card) component renders
this pattern in React.

## Accessibility

- Cropping is visual: keep meaningful content within the safe area, and keep
  the image's `alt` text accurate for the full image.

## Live examples

There is no dedicated Storybook story; the
[card stories](https://storybook.clayui.com/?path=/story/design-system-components-card--card-with-info)
show the pattern inside cards.

## Related components

- [Card](/components/card)
- [Sticker](/components/sticker)
