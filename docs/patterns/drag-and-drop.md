---
title: Drag and Drop
description: The rules for dragging elements and dropping them onto valid targets, with consistent feedback.
sources:
  - https://design.liferay.com/lexicon/patterns/drag-and-drop/
status: poc-draft
---

# Drag and Drop

Drag and drop lets users move elements in the interface, optionally triggering
an action depending on the target. Consistent feedback at every step is what
makes the pattern feel reliable.

## Events

The interaction is a sequence of six events: DragStart (click or tap and hold,
then move), Drag, DragLeave (leaving the origin or a valid target), DragEnter
(entering a valid target), Drop (releasing), and DragEnd (the interaction
completes, successfully if the conditions of a target were met).

## Pointer and handler

- Cursor: use the open hand on hover when an element can be moved but not
  selected, and the closed (dragging) hand while dragging with a mouse.
- Communicate draggability with the drag-dots icon revealed on hover, for
  example on list items.

## Drag feedback

- Dragging a single element: scale it down to 70% and let it accompany the
  cursor, or replace it with a compact representation carrying the key
  information (optionally an icon or thumbnail).
- Dragging multiple elements: preview the selection together and add a badge
  with the count at the top right of the cursor.
- The drag source (the original position) shows feedback while the element is
  away: either 40% opacity, or a simplified placeholder of the same size with a
  dark background at 4% opacity.

## Valid targets

- At rest, a valid target shows a gray background with a gray dashed border
  (add text inside when files can be dropped).
- On DragEnter, the target activates: same border style, turned to the primary
  blue.
- On drop, use motion to communicate the result: magnetize the element to its
  new position when sorting; expand and hide a border when dropping into a
  container such as a folder; a 4px blue line between items marks the insertion
  point when sorting lists.
- After moving elements into a container, show a success
  [alert](/components/alert) with an undo link.

## Accessibility

- Provide a keyboard alternative for every drag interaction (move up and down
  actions, or cut and paste commands); the pattern must not be pointer only.
- Announce the result of the move (the success alert doubles as the
  announcement).

## Related

- [Tree View](/components/tree-view), which supports drag and drop of nodes
- [Dual Listbox](/components/dual-listbox), a keyboard friendly alternative for
  transfers
- [Alert](/components/alert)
