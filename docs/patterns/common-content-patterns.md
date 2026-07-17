---
title: Common Content Patterns
description: Writing rules for the recurring content situations in the interface, from actions to validations.
sources:
  - https://design.liferay.com/lexicon/patterns/common-content-patterns/
status: poc-draft
---

# Common Content Patterns

These are the writing rules for the content situations that repeat across the
interface. Consistent wording lowers the effort of every screen; combine these
rules with the [Common Actions](/patterns/common-actions) vocabulary.

## Actions

- Title-case action labels in buttons; it gives them emphasis, including
  borderless buttons.
- Make the text specific to the action, using a verb that names it ("New" is
  accepted as a verb, as an exception).
- When a modal performs an action, put the action in both the title and the
  call to action.

## Links

Include the noun of the destination in the link text. Test it by imagining a
list of the page's links read aloud: each one should make sense without
context.

## Lists

- Introduce bullet lists with a colon.
- Punctuate items that are full sentences; leave fragments unpunctuated but
  sentence-cased.
- Use parallel construction, and avoid starting every item with the same word.

## Messaging

When delivering bad news (payment issues, cancellations, unsupported or
sunsetted features):

- Be direct about the news, stay positive, and focus on the solution.
- Avoid "you" and "your".
- Be transparent without self blame: apologize for the negative effect,
  especially when something we did creates work for the customer.

## Descriptions

- Center descriptions on the user's use case, not on the software.
- For boolean settings, state the impact of each choice explicitly.
- Do not hide helpful information in popovers, alerts, or secondary text.
- Practice progressive disclosure: explain at the point of intention, not
  everything up front.

## Instructions

- Guide toward the action with progressive disclosure.
- When referring to a UI element, use its on-screen casing, with no extra bold
  or italics.

## Titles

Titles use sentence casing.

## Validations

- **Confirmations**: only for destructive actions and unintended consequences;
  see [Confirmation Message](/components/confirmation-message) for the writing
  rules.
- **Acknowledgments**: toast [alerts](/components/alert) for background
  actions, undoable removals, confirmed destructive actions, and bulk actions.
  Do not acknowledge foreground actions the user can see happen.
- **Errors**: describe the problem specifically, keep momentum, be brief, offer
  more information when necessary, and provide a recovery path. Give format
  rules in real time, and if the same error repeats, offer another way to
  progress. For unknown technical errors, never surface the backend message or
  guess an explanation.
- **Forms**: validate on the fly or on submit as the case needs; messages
  describe the problem concisely, give feedback in real time, provide the valid
  format, and avoid reiterating the problem. See the
  [Input](/components/input) validation states.

## Related

- [Common Actions](/patterns/common-actions)
- [Confirmation Message](/components/confirmation-message)
- [Alert](/components/alert)
