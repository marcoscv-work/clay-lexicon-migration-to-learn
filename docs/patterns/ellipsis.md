---
title: Ellipsis
description: When and how to use the ellipsis to signal truncation, overflow menus, and follow-up steps.
sources:
  - https://design.liferay.com/lexicon/patterns/ellipsis/
status: poc-draft
---

# Ellipsis

The ellipsis (three dots) comes from editorial design: it tells the user there
is more content than shown, or more to do after acting. Used consistently, it
lets users anticipate what the system will do.

## Types

Both the horizontal ellipsis (the common one) and the vertical ellipsis are
valid. Lexicon does not prescribe one over the other: choose one and use it
consistently for the same scenarios across the product.

## Use cases

### Overflow

Use an ellipsis to signal options that do not fit, such as the actions menu in
rows and cards or collapsed items in narrow layouts.

### Truncated text

Use an ellipsis when text does not fit its space, truncating at the end or in
the middle, whichever preserves the important part. Offer the full text in a
[tooltip](/components/tooltip), unless the text is irrelevant or too long to
read comfortably. Remember that [labels](/components/label) are never
truncated.

### Additional action

Append an ellipsis to a command that needs more input before executing ("Save
As..."). The absence of the ellipsis promises an immediate effect: activating
the command performs the action directly.

### Activity (infrequent)

An ellipsis can indicate the system is busy with a heavy task, or represent
activity in conversational interfaces. Prefer the
[loading indicator](/components/loading-indicator) for waits.

## Accessibility

- Truncation is visual: keep the full text available to assistive technology
  (and via tooltip for sighted users).
- Do not communicate "more options exist" with the ellipsis icon alone; the
  control carries an accessible name such as "Actions".

## Related

- [Tooltip](/components/tooltip)
- [Drop Down](/components/drop-down), the usual home of overflow actions
- [Label](/components/label)
