---
title: Common Actions
description: A shared vocabulary for the frequent actions in Liferay's products, and how to label and place them.
sources:
  - https://design.liferay.com/lexicon/patterns/common-actions/
status: poc-draft
---

# Common Actions

Use a consistent vocabulary for the actions that appear again and again across
Liferay's products. When the same interaction always uses the same verb, users
learn it once and recognize it everywhere. This page defines the standard actions
and how to label and place them.

Throughout this page, an *entity* is a collection of data fields (a schema) that
form an object, and a *record* is a specific entry within an entity.

## Creating and adding

- **New**: starts creating a new entity or record. Label it "New [entity]" when
  there is a single type to create, or just "New" when there are several. As an
  icon button, use the plus icon with a tooltip.
- **Create**: completes the creation of a new entity or record. Use a text
  button labeled "Create [entity]". Use "Create" only for the first setup;
  later changes use "Save".
- **Add**: adds an existing entity or record to the current context, for example
  adding a user to a segment. In a modal, use the title "Add [entity]" and a
  primary button labeled "Add".
- **Assign**: a variation of "add" that associates an existing user with a job or
  task. Use "Assign [entity]" in the modal title and on the primary button.

## Editing and saving

- **Edit**: starts modifying an existing entity or record, such as its title or
  description. It usually lives in a drop down menu.
- **Configure**: modifies an entity's settings or meta properties, often on a
  separate screen. Use "Configure" when editing and configuring are separate
  steps, and "Edit" when they are combined.
- **Save**: completes changes to an entity or its settings. Use a primary text
  button. Do not use "Save" for changes in a secondary state such as a modal (use
  "Done") or to submit filters (use "Apply").
- **Save as draft**: saves changes when the primary action, "Publish", has not
  happened yet. Use a secondary text button.
- **Publish**: saves an entity and makes it publicly available. Use a primary
  text button, alongside another save action, and confirm success with an alert.

## Removing

- **Delete**: permanently removes an entity or record. It is usually the last
  action in a drop down. Because it is destructive, match the warning to the
  risk:
  - Low risk (the item can be restored from the recycle bin): confirm with a
    toast alert after deletion.
  - Medium risk (the item cannot be restored, but consequences are limited):
    show a confirmation message before deleting.
  - High risk (the item cannot be restored and consequences are serious, such as
    deleting an entire site): show a danger modal that requires the user to type
    a confirmation.
- **Remove**: a non-destructive removal of an item that was added or assigned.
  The item still exists elsewhere and can be re-added. On sensitive screens,
  acknowledge the removal with an alert that can include an undo action.

## Copying and moving

- **Duplicate**: makes an exact copy in the same location. Name the copy
  "Filename (Copy)".
- **Duplicate to**: makes a copy in another location.
- **Copy to**: copies an entity's records into another existing entity.
- **Copy to clipboard**: copies a string to the clipboard, and confirms with a
  tooltip. Use this exact label rather than "Copy" or "Duplicate".
- **Move**: moves an entity or record to another place and removes it from the
  original location.

## Closing and confirming

- **Cancel**: discards work in progress and closes the interaction. Use a
  secondary text button, and confirm intent if there are unsaved changes.
- **Close**: dismisses an element such as a modal, sidebar, or menu, and returns
  to the previous state. Place it in the top right corner as a secondary action.
- **Done**: confirms a completed change in a secondary state (such as a modal or
  wizard) during an unsaved sequence.
- **Apply**: confirms a temporary selection, such as a filter, and closes the
  secondary state while updating the screen.
- **Clear**: clears temporary items such as queries, filters, or unsaved
  selections. It usually affects the current view, not saved data.
- **Select**: chooses one or more existing items to apply to an interaction. Use
  "Select", not "Choose".

## Ordering and placement

- Order actions in a menu by context: group related actions with dividers, and
  order groups by how often they are used.
- Keep the primary action as a primary button, and secondary actions as
  secondary or borderless buttons.
- Put destructive actions such as Delete at the end, and always warn before a
  destructive action, scaled to its risk.

## Related

- [Button](/components/button), for how these actions are styled
- [Drop Down](/components/drop-down), where many actions are listed
- [Modal](/components/modal), where confirmations and forms appear
