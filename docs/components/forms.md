---
title: Forms
description: Forms collect user data and send it to the system, following shared rules for layout, spacing, and help.
sources:
  - https://design.liferay.com/lexicon/core-components/forms/
  - https://www.clayui.com/docs/components/form
storybook: https://storybook.clayui.com/?path=/story/design-system-components-input--default
status: poc-draft
---

# Forms

Forms obtain user data and transmit it to the system to store it, produce an
action, or both. This page covers the rules shared by every form: structure,
layout, spacing, and help. Each control has its own page:
[Input](/components/input), [Select](/components/select),
[Checkbox, Radio, and Toggle](/components/checkbox-radio-toggle),
[Multi Select](/components/multi-select),
[Date Picker](/components/date-picker), and
[Color Picker](/components/color-picker).

## Structure

A form combines:

- **Title** (required) and an optional **description** of what the form is for.
- **Form elements**: inputs, selectors, radios, checkboxes, pickers.
- **Sections**: identified with 14px uppercase text. First level sections can be
  collapsible; second level sections never are. Wrap long section titles.
- **Buttons**: the form's actions, following the
  [Common Actions](/patterns/common-actions) vocabulary.

## Layout

A form occupies one or two columns. Reading order is left to right, top to
bottom: the user reads column one, then column two. If a form has several
stacked sections, keep the same internal layout across sections.

## Spacing

Keep the distances between form elements consistent:

- Form padding: 24px on desktop, 16px on mobile.
- Between consecutive components (horizontal): 16px.
- Between non consecutive components (horizontal): 24px.
- Between consecutive components (vertical): 24px on desktop, 16px on mobile.
- Between the form title (or title plus description) and the next component:
  48px on desktop, 32px on mobile.

## Help

Three mechanisms provide help in a form, in order of preference:

- **Help text** below the field, for rules that always apply.
- **Help icon** that opens a [popover](/components/popover), when help should be
  available only on demand.
- **Placeholder** inside the field: not recommended, because users can mistake
  it for a value. If you use one, make it an example, and do not duplicate the
  help text.

## Validation

Show validation messages right below the offending field, before the help text,
so the user never wonders which field failed. Pair the message with the status
color and icon; see the states on the [Input](/components/input) page.

## Implementation

The form building blocks ship in `@clayui/form`:

```shell
npm install @clayui/css @clayui/form
```

Wrap each field in `ClayForm.Group` to get the spacing and state classes:

```jsx
import ClayForm, {ClayInput} from '@clayui/form';

export default function Example() {
	return (
		<ClayForm.Group>
			<label htmlFor="siteName">Site Name</label>
			<ClayInput id="siteName" type="text" />
		</ClayForm.Group>
	);
}
```

## Accessibility

- Every field needs a programmatically associated label (`label` with
  `htmlFor`).
- Group related controls (radios, checkboxes) with a fieldset or an ARIA group
  labeled by the section title.
- Announce validation errors through the field's described-by relationship, so
  the message reads together with the field.

## Live examples

See the form controls on Storybook, starting with the
[Input stories](https://storybook.clayui.com/?path=/story/design-system-components-input--default).

## Related components

- [Input](/components/input)
- [Select](/components/select)
- [Checkbox, Radio, and Toggle](/components/checkbox-radio-toggle)
- [Multi Step Nav](/components/multi-step-nav)
