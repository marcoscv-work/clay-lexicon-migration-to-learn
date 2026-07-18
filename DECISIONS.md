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
storybook.clayui.com page.

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

## 5. Navigation avoids duplicated labels

Single-page sections render as plain top-level sidebar links instead of a group
heading plus one identically named link ("Get Started" appears once, not
twice). Multi-page sections (Foundations, Components, Patterns) keep their
group headings.

## 6. Repository naming

The brief suggested `clay-docs-migration-poc`; the work lives in the existing
`clay-lexicon-migration-to-learn` repository instead. The GitHub Pages base
path and Edit-on-GitHub links follow the real repository name (configured in
`.vitepress/config.mjs`).

## 7. REVIEW conflicts are resolved by stakeholder ruling

The brief marks source conflicts with `<!-- REVIEW -->` comments. Each one is
resolved by an explicit ruling from the product owner declaring which source
prevails (Lexicon or Clay), or a scope call where the binary does not apply.
When a ruling lands, the page text is updated, the comment is removed, and the
decision is recorded in that page's `migration-map.json` notes so the
provenance trail keeps the editorial call. Rulings so far (2026-07-18):

- **Button sizes: Clay wins.** `xs` is documented as a third supported size
  alongside Lexicon's Default (40px) and Small (32px).
- **Get Started positioning: wording approved as written.**
- **Charts: out of scope.** The design-overview page is removed along with the
  per-type specs, pending a decision on the charting implementation after the
  announced `@clayui/charts` deprecation. The chart color palette stays in the
  Color foundation.

## Unchanged rules

Everything else in the brief still applies as written: Learn tone, rewrite (no
verbatim copying), no em dashes, one H1 with no skipped heading levels, GFM
tables only inside generated API blocks, API tables generated from the Clay
TypeScript source (never hand-edited), provenance in `migration-map.json`,
missing stories logged in `STORYBOOK-GAPS.md`, and Lexicon mentioned once on
the Get Started page as the design language behind Clay.
