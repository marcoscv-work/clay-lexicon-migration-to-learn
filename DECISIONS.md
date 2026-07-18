# Decisions: how this PoC evolved from the original brief

The original migration brief (epic LPD-98580) defined the starting rules for
this proof of concept. While building it, some criteria evolved by explicit
decision of the product owner. This file records each change so the repo reads
consistently: **where this document and the original brief disagree, this
document wins.**

## The governing principle

The split that makes all of these decisions safe:

- **`/docs` is the deliverable and stays plain CommonMark.** No MDX, no HTML, no
  framework syntax, no shortcodes. It must survive being moved into Liferay
  Learn's Markdown pipeline untouched.
- **The viewer may progressively enhance that Markdown.** Plain links and plain
  inline code can be upgraded, in the browser and only in this viewer, into
  richer presentations. In any other pipeline the same Markdown degrades
  gracefully to normal links and code. Enhancements live in
  `.vitepress/theme/`, never in the content.

## 1. Component pages use live examples, not images

**Brief said:** migrate Lexicon's images into `/assets` and reference them from
component pages, with meaningful alt text. Interactive examples are replaced
with plain links to Storybook.

**Now:** component pages contain no images. Each variant is illustrated with a
plain Markdown link to its Storybook story, and the viewer embeds those links
as live, lazy-loaded previews (`.vitepress/theme/storybook-embeds.js`) with the
original link kept as accessible fallback. Storybook remains the only home for
live examples (the embed is served by storybook.clayui.com; nothing is ported
or recreated). Variants with no story to link go to `STORYBOOK-GAPS.md`.

Images remain where a live example cannot express the content, such as the
Foundations pages (for example the grid diagrams).

**Why:** a real, interactive component teaches more than a screenshot, does not
rot when Clay's visuals change, and produces a useful backlog of missing
stories for the Clay team.

## 2. Embeds use per-story heights

Each embedded story gets a height fitted to its content (a single button is
74px, a modal needs 560px). The map lives in
`.vitepress/theme/storybook-embeds.js` (`STORY_HEIGHTS`); unlisted stories fall
back to 400px. Small static stories were measured against the rendered story
canvas; interactive stories get room for their expanded state.

**Story ids must be taken from Storybook itself**, never derived by hand from
component names: Storybook sanitizes the story title, so `DropDown` becomes
`design-system-components-dropdown--*` (no hyphen). The authoritative list can
be read from `window.__STORYBOOK_PREVIEW__.storyStore.storyIndex` on any
storybook.clayui.com page; the snapshot lives in `scripts/storybook-index.json`
and the link checker validates every story link against it.

**Why:** one fixed height either crops tall stories or leaves a screen of dead
space under a single button, which reads as broken. And the id rule exists
because hand-derived ids produced embeds that rendered Storybook's "Couldn't
find story" error (the DropDown case); validating against Storybook's own
index makes that class of bug impossible to reintroduce.

## 3. Color values render as swatch chips

**Brief said:** plain CommonMark only, which strips the React swatch components
and tables the Lexicon color page was built with.

**Now:** the Color foundation documents the full palette as plain lists, with
each color's hex value written as inline code (for example `#0B5FFF`) plus its
role and its `@clayui/css` SCSS variable. The viewer
(`.vitepress/theme/color-chips.js`) renders a color chip before every hex value
in prose. In other pipelines the values read as plain code.

**Why:** the palette is reference material; hiding it behind prose made the
page uselessly thin. This keeps the data complete and visual without breaking
portability.

## 4. The PoC banner is fixed, not scrolled away

The "not official documentation" banner stays pinned (`position: fixed`, above
the navbar, mirroring how the theme fixes `.VPNav`), so the notice is visible
at any scroll position. Layout offsets are handled through
`--vp-layout-top-height`, which the theme's own components consume.

**Why:** this PoC must never be mistaken for official Liferay documentation,
including in screenshots taken mid-page. A banner that scrolls away only
protects the first viewport.

## 5. Navigation avoids duplicated labels

Single-page sections render as plain top-level sidebar links instead of a group
heading plus one identically named link ("Get Started" appears once, not
twice). Multi-page sections (Foundations, Components, Patterns) keep their
group headings.

**Why:** a heading followed by an identical link carries no information, adds a
click target that does nothing, and reads as a rendering bug. The sidebar
should be scannable, not ceremonial.

## 6. Repository naming

The brief suggested `clay-docs-migration-poc`; the work lives in the existing
`clay-lexicon-migration-to-learn` repository instead. The GitHub Pages base
path and Edit-on-GitHub links follow the real repository name (configured in
`.vitepress/config.mjs`).

**Why:** the repository already existed with its remote, GitHub Pages, and
permissions configured, and its name describes the same goal. Renaming would
have broken the published URL for zero content benefit.

## 7. REVIEW conflicts are resolved by stakeholder ruling

The brief marks source conflicts with `<!-- REVIEW -->` comments. Each one is
resolved by an explicit ruling from the product owner declaring which source
prevails (Lexicon or Clay), or a scope call where the binary does not apply.
When a ruling lands, the page text is updated, the comment is removed, and the
decision is recorded in that page's `migration-map.json` notes so the
provenance trail keeps the editorial call. The full inventory of
discrepancies and their status lives in [DISCREPANCIES.md](./DISCREPANCIES.md).

**Why:** a REVIEW comment with no owner stays in the content forever. A single
accountable decision-maker (the product owner of the epic) and a permanent
record of each ruling turn open questions into auditable decisions: after the
comment is gone, the map still says what was decided, by whom, and when.

Rulings so far (2026-07-18):

- **Button sizes: Clay wins.** `xs` is documented as a third supported size
  alongside Lexicon's Default (40px) and Small (32px).
- **Get Started positioning: wording approved as written.**
- **Charts: out of scope.** The design-overview page is removed along with the
  per-type specs, pending a decision on the charting implementation after the
  announced `@clayui/charts` deprecation. The chart color palette stays in the
  Color foundation.

## 8. Internal Lexicon guidelines are part of the merge

The public sites are not the only sources: two internal Lexicon documents from
the ENGLEXICON Confluence space were folded into the selection components on
2026-07-18.

- **[Item Selection Guideline](https://liferay.atlassian.net/wiki/spaces/ENGLEXICON/pages/3080618005/Item+Selection+Guideline)**:
  which component to use for item selection. Drop down for actions, picker for
  single selection (it substitutes the native select, which is no longer
  recommended), Multi Select with autocomplete for multiple selection, the
  picker's multiple selection where space is tight, and the select box only
  inside the Dual Listbox.
- **[Accessibility in Dropdown, Select, Picker and Autocomplete](https://liferay.atlassian.net/wiki/spaces/ENGLEXICON/pages/2444755160/Accessibility+in+Dropdown+Select+Picker+and+Autocomplete)**:
  the semantic criteria behind that choice (what visually looks like a
  selection must be semantically a selection) and the accessibility
  expectations: type-ahead in the picker, match-count announcements in the
  autocomplete.

Affected pages: Drop Down, Picker, Select, Autocomplete, Multi Select, and
Dual Listbox. The Confluence pages are listed in those pages' frontmatter
sources and in `migration-map.json`. This import resolved the Picker and
Autocomplete REVIEW flags: their design guidance is no longer derived from the
implementation, it comes from these documents.

**Why:** the public sites lag the design team's current thinking. The clearest
proof is the select: the public sources document it as a normal form control,
while the internal guideline rules it not recommended and names the picker its
substitute. A merge that read only public sources would have fossilized
outdated guidance; importing the internal documents is what makes the merged
site the actual single source of truth, which is the point of the PoC.

## Unchanged rules

Everything else in the brief still applies as written: Learn tone, rewrite (no
verbatim copying), no em dashes, one H1 with no skipped heading levels, GFM
tables only inside generated API blocks, API tables generated from the Clay
TypeScript source (never hand-edited), provenance in `migration-map.json`,
missing stories logged in `STORYBOOK-GAPS.md`, and Lexicon mentioned once on
the Get Started page as the design language behind Clay.
