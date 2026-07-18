---
title: Text Utilities
description: Utility classes for text size, weight, style, alignment, wrapping, and transformation.
sources:
  - https://www.clayui.com/docs/css/text
status: poc-draft
---

# Text Utilities

Utility classes for styling text in markup, applying the
[typography foundation](/foundations/typography) without custom CSS. The
[Text](/components/text) and [Heading](/components/heading) components render
these styles in React.

## Sizes

`text-1` through `text-11` map to the type scale, from the smallest supporting
text to the largest display size. The default body size corresponds to
`text-4` (16px). The `$text-sizes` Sass map generates the set, so themes can
extend it.

## Weights

`text-weight-{lighter|light|normal|semi-bold|bold|bolder}` set the font weight.
The foundation reserves three for content: regular (400), semibold (600), and
bold (700).

## Styles and transforms

- `text-italic` and `text-monospace` switch style and family.
- `text-{lowercase|uppercase|capitalize}` transform casing; remember the
  [writing guide](/writing/): uppercase belongs to small labels and section
  dividers only.

## Alignment and wrapping

- `text-{left|center|right}` (with breakpoint infixes) align text.
- `text-nowrap` prevents wrapping, and `text-truncate` cuts overflowing text
  with an ellipsis; follow the [ellipsis pattern](/patterns/ellipsis) and keep
  the full text available in a [tooltip](/components/tooltip).
- `text-break` allows breaking long unbroken strings such as URLs.

```html
<p class="text-3 text-weight-semi-bold text-truncate" style="max-width: 200px">
	A long name that truncates with an ellipsis
</p>
```

## Related

- [Typography foundation](/foundations/typography)
- [Text](/components/text) and [Heading](/components/heading) components
- [Writing](/writing/), for when to use each casing
