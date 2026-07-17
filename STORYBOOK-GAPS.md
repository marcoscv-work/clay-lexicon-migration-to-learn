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

Found while replacing component-page images with live story examples. Each of
these variants is documented (from the Lexicon design spec) but has no Storybook
story to embed or link:

- **Button, split button** (`docs/components/button.md`, Common variations): no
  story shows a split button (main action plus drop down toggle). A reasonable
  story would pair a labeled primary action with a caret drop down trigger.
- **Alert, stripe and embedded variants** (`docs/components/alert.md`,
  Variations): stories exist for default, feedback, and toast, but none renders
  the stripe (full width bar) or embedded (in-form) variants. The `variant`
  control on the default story covers part of this, but a dedicated story per
  variant would document placement.
- **Tooltip, arrow positions reference** (`docs/components/tooltip.md`, Variants
  and anatomy): no story shows the twelve `alignPosition` values side by side.
  A grid story rendering one tooltip per position would replace the old static
  reference image.

## Stories used by this PoC

All verified against storybook.clayui.com (derived from the story exports in the
Clay source):

- Button: `--default`, `--group`, `--icon`
- Alert: `--default`, `--feedback`, `--toast`
- Badge: `--default`, `--with-icon`
- Card: `--card-with-info`, `--card-with-info-image`, `--card-with-user`,
  `--card-with-horizontal`, `--card-with-navigation`, `--product-card`
- Drop Down: `--default`, `--checkbox`, `--search`, `--groups`, `--drilldown`
- Modal: `--default`
- Table: `--dynamic`, `--sections`, `--sorting`, `--treegrid`
- Tooltip: `--default`, `--tooltip-provider`

The Foundations, CSS, and Patterns pages are not components and do not link to
Storybook. As the real migration adds components or variants without a story, add
them here as a backlog for the Clay team.
