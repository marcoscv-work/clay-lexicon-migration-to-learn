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
- **Timelines** (`docs/components/timelines.md`): the pattern is CSS only (no
  React component) and has no story at all. A story rendering the default,
  right, and center variants from the `timeline` CSS classes would let the page
  show live examples.
- **Keys** (`docs/components/keys.md`): CSS only (`c-kbd` classes) with no
  story. A story showing single keys, combinations, and unicode symbols would
  let the page show live examples.
- **Charts** (`docs/components/charts.md`): no chart stories exist (the
  @clayui/charts package announces its own upcoming deprecation). If a charting
  implementation is adopted, stories per chart type would back the design
  collection.
- **Application Bar** (`docs/components/application-bar.md`): CSS markup
  pattern with no story. A story rendering the dark bar with menu trigger,
  title, and actions would back the page.
- **Menubar** (`docs/components/menubar.md`): CSS markup pattern with no
  dedicated story (the Vertical Nav stories show the React equivalent).
- **Aspect Ratio** (`docs/components/aspect-ratio.md`): CSS utility with no
  dedicated story (the card stories show it in context).

## Stories used by this PoC

All verified against the story index snapshot in scripts/storybook-index.json
(extracted from Storybook's own store):

- Alert: `--default`, `--feedback`, `--toast`
- Aspect Ratio: `--card-with-info`
- Autocomplete: `--default`, `--async-data`, `--keyboard`
- Badge: `--default`, `--with-icon`
- Breadcrumb: `--default`, `--active-state`
- Button: `--default`, `--icon`, `--group`
- Card: `--card-with-info`, `--card-with-info-image`, `--card-with-user`, `--card-with-horizontal`, `--card-with-navigation`, `--product-card`
- Checkbox, Radio, and Toggle: `--default`, `--checkbox`
- Color Picker: `--default`, `--custom-colors`, `--native`
- Confirmation Message: `--default`
- Data Provider: `--polling-example`, `--custom-fetcher`
- Dataset Display: `--default`, `--dynamic`, `--simple`
- Date Picker: `--default`, `--time`, `--date-range`, `--native`
- Drop Down: `--default`, `--checkbox`, `--search`, `--groups`, `--drilldown`
- Dual Listbox: `--default`
- Empty State: `--default`, `--empty-state`, `--search-state`, `--success-state`
- Focus Trap: `--default`, `--focus-on-specific-element`
- Forms: `--default`
- Heading: `--heading-typography`
- Icon: `--default`, `--context-spritemap`
- Icon Selector: `--default`
- Input: `--default`, `--input-feedback`, `--textarea`, `--group-connected`
- Label: `--default`, `--content-before`, `--sizes`
- Language Picker: `--default`, `--language-picker-with-translations`
- Layout Components: `--row-positioning`, `--breakpoints`, `--ordering`
- Link: `--default`, `--displayed-as-button`
- List: `--simple`, `--complex`
- Loading Indicator: `--default`
- Localized Input: `--default`
- Management Toolbar: `--default`
- Menubar: `--default`
- Modal: `--default`
- Multi Select: `--default`, `--with-primary-action`
- Multi Step Nav: `--default`, `--error`
- Nav: `--default`, `--with-decorator`
- Navigation Bar: `--navigation-bar`
- Overlay Mask: `--default`, `--with-popover`
- Pagination: `--default`, `--disabled-pages`
- Panel: `--default`, `--collapsable`, `--groups`
- Picker: `--default`, `--search`, `--custom-options`
- Popover: `--default`, `--trigger`
- Progress Bar: `--default`
- Provider: `--spritemap`, `--theme`
- Resize Handle: `--resizing-left`, `--resizing-right`
- Section: `--sheet`
- Select: `--high-level`, `--default`
- Side Panel: `--position-absolute`, `--position-fixed`, `--drilldown`
- Slider: `--default`
- Sticker: `--default`, `--shape`, `--user-image`, `--size`, `--positions`
- Table: `--dynamic`, `--sections`, `--sorting`, `--treegrid`
- Tabs: `--default`, `--new-default`
- Text: `--text-typography`, `--text-highlight-typography`
- Time Picker: `--default`
- Toolbar: `--default`, `--upper-toolbar`
- Tooltip: `--default`, `--tooltip-provider`
- Tree View: `--dynamic`, `--theme-dark`, `--with-sticker`, `--multiple-selection`, `--async-load`
- Vertical Bar: `--default`, `--dynamic-content`
- Vertical Nav: `--default`, `--primary`

The Foundations, CSS, and Patterns pages are not components and do not link to
Storybook. As the real migration adds components or variants without a story, add
them here as a backlog for the Clay team.
