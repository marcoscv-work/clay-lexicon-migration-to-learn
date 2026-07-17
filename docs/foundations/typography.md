---
title: Typography
description: Clay's font stacks, type scale, and formatting rules for readable, consistent text.
sources:
  - https://design.liferay.com/lexicon/foundations/typography/
status: poc-draft
---

# Typography

Clay uses typography to establish visual identity and to organize content. It
takes an agnostic, system-first approach so text renders well across platforms
and languages.

## Font stacks

Clay does not ship a font. Instead it uses the native font stack of the user's
operating system, which avoids web-font delivery and keeps text fast and
familiar. There are two styles:

- **Sans serif** (the main style): the system UI font, such as Segoe UI on
  Windows, San Francisco on macOS and iOS, and Roboto on Chrome OS and Android,
  falling back to Arial, Helvetica Neue, and sans-serif.
- **Monospaced** (for code): the system monospaced font, falling back to Courier
  New and monospace.

## Type scale

The scale starts from a 16px (1rem) base and steps up in increments of 2px,
growing to 4px at larger sizes to keep contrast and readability. The available
sizes are 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, and 40px (0.625rem to 2.5rem).

## Formatting

### Line height

Clay uses two line-height ratios:

- **Standard** (1.5): for running text such as paragraphs, headings that wrap,
  and list items. A 16px body returns a 24px line height, which is also the base
  for vertical rhythm. A minimum of 1.5 for body text improves readability,
  including for people with low vision or dyslexia.
- **Secondary** (1.25): for larger text (20px and above) and for uppercase
  headings, where tighter spacing reads better.

Line height applies to text that runs more than one line. For single-line UI
elements such as buttons, inputs, stickers, and badges, the implementation sets
the value.

### Font weight

Clay uses three weights: regular (400), semibold (600), and bold (700). Reserve
bold for titles, use semibold for emphasis such as section dividers and status
labels, and use regular for body text.

### Letter case

Use lowercase (following normal capitalization rules) by default. Reserve
uppercase for section dividers in dataset views and forms, where it acts as a
hierarchy cue.

### Line length

For medium and long text blocks, keep lines between about 60 and 100 characters,
including spaces. This keeps a comfortable reading rhythm and reduces eye strain.

## Type styles

Combine the values above into consistent styles. For example:

- **Application and page titles**: 16px, bold, line height 1.25.
- **Form title**: 20px, bold, line height 1.25.
- **Asset title**: 24px, bold, line height 1.25.
- **Section dividers**: 12px or 14px, semibold, uppercase, line height 1.25.
- **Paragraph**: 16px, regular, line height 1.5, with a 12px bottom margin
  between blocks.

## Related

- [Color](/foundations/color)
- [Grid](/foundations/grid)
