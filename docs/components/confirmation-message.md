---
title: Confirmation Message
description: Confirmation messages make the user confirm critical or irreversible actions before proceeding.
sources:
  - https://design.liferay.com/lexicon/core-components/confirmation-message/
storybook: https://storybook.clayui.com/?path=/story/design-system-components-modal--default
status: poc-draft
---

# Confirmation Message

Use a confirmation message when proceeding would create a critical situation
the user must consciously accept. Confirmations are rarely needed; reserve them
for exactly two cases:

- **A risk action**: the consequences are significant and cannot be undone (or
  not easily), such as deleting a site.
- **An unintended consequence**: the action has side effects that could
  disorient the user, such as a site switch that changes the whole context and
  permissions.

## When not to use it

- **Error prevention**: the interface should communicate its intended use
  clearly instead of asking for confirmation.
- **Undoable actions**: if an action can be undone (such as moving to the
  recycle bin), never interrupt it with a confirmation; acknowledge it with a
  toast [alert](/components/alert) offering undo.

## Writing the message

The message must clearly communicate the situation and what happens if the user
proceeds:

- Never ask a generic, open ended question such as "Are you sure?".
- Be clear and concise, with the exact information about what is being
  confirmed.
- If the confirmation starts an action, label the confirming button with the
  verb from the [Common Actions](/patterns/common-actions) vocabulary; for
  purely informational confirmations, use "Ok".
- Scale the mechanism to the risk, as defined for the Delete action: a
  confirmation dialog for medium risk, and a danger [modal](/components/modal)
  with a typing proof for high risk.

## Implementation

Confirmation messages compose existing components rather than a dedicated one:
a status [modal](/components/modal) (warning or danger) with the message in the
body and the confirming and canceling actions in the footer.

## Accessibility

- The confirmation is a modal: focus moves into it, is trapped while open, and
  returns to the trigger on close.
- Do not allow dismissing a deliberate-choice confirmation by clicking the
  overlay.
- The confirming button's label names the action, so the choice is clear when
  announced.

## Live examples

See the [Modal stories on Storybook](https://storybook.clayui.com/?path=/story/design-system-components-modal--default),
which confirmation messages are built with.

## Related components

- [Modal](/components/modal)
- [Alert](/components/alert)
- [Common Actions](/patterns/common-actions)
