# Storybook gaps

`storybook.clayui.com` is the single home for live, runnable Clay examples. This
proof of concept never recreates interactive examples; each page links to the
matching Storybook story instead.

When a component or variant covered in these docs has no corresponding Storybook
story, record it here instead of inventing a link. The real migration will use
this list as a backlog for the Clay team.

## Format

Each entry: the page, the specific example or variant that lacks a story, and
what a reasonable story would show.

## Open gaps

<!-- Add entries as gaps are found while migrating pages. -->

_None. Every component in this PoC sample links to an existing Storybook story,
verified against storybook.clayui.com:_

- Button: `design-system-components-button--default`
- Alert: `design-system-components-alert--default`
- Badge: `design-system-components-badge--default`
- Card: `design-system-components-card--card-with-info`
- Drop Down: `design-system-components-drop-down--default`
- Modal: `design-system-components-modal--default`
- Table: `design-system-components-table--dynamic`
- Tooltip: `design-system-components-tooltip--default`

The Foundations, CSS, and Patterns pages are not components and do not link to
Storybook. As the real migration adds components or variants without a story, add
them here as a backlog for the Clay team.
