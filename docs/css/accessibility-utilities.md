---
title: Accessibility Utilities
description: Utility classes for screen reader text, skip links, and user preference overrides.
sources:
  - https://www.clayui.com/docs/css/accessibility
status: poc-draft
---

# Accessibility Utilities

Utility classes that implement common accessibility techniques and let users
override presentation preferences.

## Screen reader text

- `sr-only` shows an element only to screen readers, visually hiding it while
  keeping it in the accessibility tree. Use it for text labels that sighted
  users infer from context.
- `sr-only-focusable`, combined with `sr-only`, reveals the element when it
  receives keyboard focus. It is the standard technique for skip links:

```html
<a class="btn btn-link sr-only sr-only-focusable" href="#content">
	Skip to Content
</a>
```

## User preference overrides

The `c-prefers-*` classes, applied to the `body` (or a container), force a
preference regardless of the system setting, which lets products offer these
as in-app options:

- `c-prefers-reduced-motion` removes all CSS animations and transitions; the
  Clay [Provider](/components/provider) handles the JavaScript-driven ones.
- `c-prefers-link-underline` underlines links everywhere, so they do not rely
  on color alone.
- `c-prefers-letter-spacing-1` increases letter spacing for readability.
- `c-prefers-expanded-text` expands truncated text, complementing the
  [ellipsis pattern](/patterns/ellipsis).
- `c-prefers-focus` keeps focus styles always visible.

## Related

- [Provider](/components/provider), for reduced motion in JavaScript
- [Keys](/components/keys)
- [Decoration Utilities](/css/decoration-utilities), for the focus helpers
