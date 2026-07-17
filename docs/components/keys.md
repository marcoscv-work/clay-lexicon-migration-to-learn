---
title: Keys
description: Keys visually represent keyboard shortcuts so users can learn to work without the pointer.
sources:
  - https://design.liferay.com/lexicon/core-components/keys/
  - https://www.clayui.com/docs/css/c-kbd
storybook: null
status: poc-draft
---

# Keys

Use keys to show one or several keyboard keys, teaching users how to complete a
common task with the keyboard instead of the pointer. Shortcut hints should be
understandable, learnable, and easy to ignore.

## Variants and anatomy

Keys use the monospaced font stack from the
[typography foundation](/foundations/typography), sized to match the text they
accompany. Combine individual keys with separators to express combinations
(for example Ctrl plus S), and use Unicode symbols where they are the
convention (arrows, the command symbol on macOS).

## Usage guidelines

- Match the shortcut to the user's operating system when showing modifier keys.
- Place the hint near the action it accelerates (in a tooltip, a menu item, or
  help text), never as the only way to discover the action.
- Keep hints short: the keys and nothing else.

## Implementation

Keys are provided by the Clay CSS framework as the `c-kbd` classes (there is no
React component):

```html
<kbd class="c-kbd">
	<kbd class="c-kbd">⌘</kbd>
	<span class="c-kbd-separator">+</span>
	<kbd class="c-kbd">S</kbd>
</kbd>
```

See the [CSS framework](/css/) for the utilities involved.

## Accessibility

- Use the semantic `kbd` element, so the markup identifies keyboard input.
- The action must remain fully operable without knowing the shortcut; keys are
  an accelerator, not the mechanism.

## Live examples

There is no Storybook story for keys; the pattern is CSS only (recorded in the
Storybook gaps backlog).

## Related components

- [Tooltip](/components/tooltip), a common home for shortcut hints
- [Typography foundation](/foundations/typography)
