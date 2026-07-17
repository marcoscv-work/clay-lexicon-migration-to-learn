---
title: Animations
description: Clay's default animations support empty state messages and can be themed for your brand.
sources:
  - https://design.liferay.com/lexicon/foundations/animations/
status: poc-draft
---

# Animations

Use animations only to support a message, never as decoration. Clay ships three
default animations, used by the [empty state](/components/empty-state)
component to communicate each scenario.

## The default animations

- **Empty collection**: a satellite drifting in space. Use it when the dataset
  or folder is empty.
- **Empty search**: a telescope finding nothing. Use it for empty search
  results or filters that return nothing.
- **Successful empty state**: a spaceship taking off. Use it when a list was
  emptied for a good reason, such as clearing all notifications.

## Customizing

You can replace the default animations to reflect your brand. Choose a theme
and build a story behind it, the way the defaults build on a space theme, so
the scenes stay coherent across messages.

## Accessibility

- Always provide a reduced motion alternative: the empty state component
  accepts a static image for users who minimize non essential motion.
- The message lives in the text, not the animation; the animation only
  reinforces it.

## Related

- [Empty State](/components/empty-state)
- [Loading Indicator](/components/loading-indicator)
