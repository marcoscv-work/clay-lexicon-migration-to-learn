# Clay documentation migration (proof of concept)

Proof of concept for epic **LPD-98580** "Consolidate Clay Design Documentation
into Liferay Learn" and discovery task **LPD-98610**.

> **Proof of concept, not official Liferay documentation.**
> Official docs live at [clayui.com](https://clayui.com) and
> [learn.liferay.com](https://learn.liferay.com). This repository exists only to
> validate a merged content model with stakeholders before the real migration.

## What this proves

Today, Clay's documentation is split across two sites:

- **clayui.com**: implementation docs (React API, usage, CSS framework).
- **design.liferay.com/lexicon**: the Lexicon design language (design specs,
  foundations, patterns).

This PoC demonstrates a **merge, not two parallel migrations**. The strategic
repositioning it validates:

1. **One umbrella.** The merged docs live under a single "Clay" heading. Lexicon
   defines the design patterns and rules; Clay is its only implementation.
2. **Lexicon becomes internal.** After the migration, Lexicon has no standalone
   public presence. It is mentioned exactly once, briefly, on the Get Started
   page, as the design language behind Clay, never as a parallel doc tree.
3. **One page per component.** Each component page combines the design guidance
   that today lives in Lexicon with the implementation content from clayui.com.
4. **Storybook stays.** [storybook.clayui.com](https://storybook.clayui.com)
   remains the only home for live, runnable examples. These docs never recreate
   interactive examples; the Markdown links to Storybook, and the viewer
   progressively enhances those links into embedded live previews (see
   [Live examples](#live-examples-progressive-storybook-embeds) below). Missing
   stories are logged in [STORYBOOK-GAPS.md](./STORYBOOK-GAPS.md).
5. **API reference is first-class.** Props tables are generated from the
   published `@clayui/*` TypeScript definitions, never hand-transcribed. See
   [API reference](#api-reference-pipeline) below.

## Scope

The PoC started as a 14-page representative sample and, after stakeholder
validation, grew into the full migration of the in-scope content:

- **Get Started** (1): what Clay is, the Lexicon one-paragraph explanation,
  installation, quick start, composition philosophy, and positioning guidance
  (when to use Clay and when to use Liferay's site-building stack).
- **Foundations** (5): Animations, Color, Grid, Layout, Typography.
- **Components** (61): every Lexicon core component merged with its Clay
  implementation, plus every Clay-only component with docs (Picker, Icon
  Selector, Language Picker, Overlay Mask, Focus Trap, Resize Handle, Nav,
  Heading, Text, Layout, Provider, Data Provider, and the CSS markup patterns).
  Design-only pages (Keys, Section, Confirmation Message, Dataset
  Display) carry no API block and say how they map to Clay.
- **CSS** (7): the framework overview plus a curated utilities reference
  (layout, spacing, text, decoration, accessibility) and the SCSS theming
  guide, consolidating the 24 clayui.com CSS pages with human names (no more
  "C Spacing"); the color, chart color, grid, typography, and c-kbd pages are
  covered by Foundations and Keys.
- **Patterns** (4): Common Actions, Common Content Patterns, Drag and Drop,
  Ellipsis.
- **Writing** (1): the writing principles, framework, and style rules,
  condensed from the four-page Lexicon writing guide.

Out of scope: Satellites, Templates, Examples, the blog, Charts (both the
design overview and the per-type specs, excluded by stakeholder decision while
the charting implementation is unresolved; the chart color palette remains in
the Color foundation), and pages marked `draft` upstream (Pager, the
foundations Accessibility stub), whose relevant guidance was folded into
related pages.

> The working criteria evolved from the original brief in a few explicit ways
> (live examples instead of images on component pages, per-story embed heights,
> color swatch chips, a fixed banner). [DECISIONS.md](./DECISIONS.md) records
> each change and wins over the brief where they disagree.

## Repository layout

```
/docs/                 the migrated Markdown content (the actual deliverable)
  get-started/
  foundations/
  components/           _TEMPLATE.md defines the merged component page shape
  css/
  patterns/
/assets/               images for content a live example cannot express (foundations)
/scripts/              API extraction pipeline (see scripts/README.md)
/.vitepress/           viewer configuration only, never mixed into /docs
migration-map.json     provenance and redirect-map seed
STORYBOOK-GAPS.md      backlog of components/variants missing a Storybook story
DECISIONS.md           how the criteria evolved from the original brief
README.md
CONTRIBUTING.md
```

The `/docs` content is plain CommonMark and stays portable: it is the real
deliverable and must survive being moved into Liferay Learn's Markdown pipeline.
Everything under `/.vitepress` is throwaway viewer scaffolding.

## Why VitePress for the viewer

The brief required a static site generator with first-class **plain-Markdown**
rendering, **"Edit this page"** links, **client-side search**, **sidebar
navigation**, and a **simple GitHub Pages** deploy, without forcing frontmatter
bloat or custom syntax into the content files. The strong candidates were
VitePress, Astro Starlight, and MkDocs Material. VitePress was chosen:

| Requirement | VitePress | Notes |
| ----------- | --------- | ----- |
| Plain-Markdown portability | Yes | Reads standard `.md`; the only non-CommonMark used in `/docs` is GFM tables inside API blocks, which Liferay Learn also supports. No component imports required in content. |
| "Edit this page" | Built-in | `editLink.pattern` with `:path`; verified correct for nested paths like `docs/components/button.md`. |
| Client-side search | Built-in | `search.provider: 'local'`, no external service (Algolia) or API key. |
| Sidebar navigation | Built-in | Declarative config, mirrors `/docs`; components ordered alphabetically. |
| GitHub Pages deploy | Simple | Single static output; one Actions workflow; `base` set to `/clay-lexicon-migration-to-learn/`. |
| Frontmatter bloat | Minimal | Only `title`, `description`, and provenance fields; no framework-specific fields leak into content. |

Astro Starlight is excellent but leans on MDX and heavier per-page frontmatter,
which works against the "content must stay plain Markdown" constraint. MkDocs
Material is a strong option, but keeping the viewer in the same Node toolchain as
the API-extraction scripts (which must read `@clayui/*` TypeScript) avoids a
second runtime (Python) in CI. VitePress keeps the whole PoC on one toolchain
while satisfying every hard requirement.

The content itself is framework-agnostic. If Learn's pipeline differs, the
`/docs` Markdown moves over unchanged; only `/.vitepress` is discarded.

## Run locally

Requires Node 18+.

```bash
npm install
npm run docs:dev      # dev server with hot reload
npm run docs:build    # production build into .vitepress/dist
npm run docs:preview  # serve the production build locally
```

The dev server and the production build both use the base path
`/clay-lexicon-migration-to-learn/`, matching GitHub Pages, so internal links and assets
are exercised the same way locally as in production.

## API reference pipeline

Component props tables are generated, not written by hand:

```bash
npm run api:generate   # regenerate all API blocks from @clayui/* types
npm run api:check      # fail if regeneration would change anything (CI)
```

The script reads the component-to-package mapping in `migration-map.json`,
resolves each package's published version and TypeScript definitions, and
rewrites the content between `<!-- API:START ... -->` and `<!-- API:END -->`
markers. Everything outside the markers is human-owned. A scheduled GitHub
Actions workflow re-runs it weekly and opens a pull request when a table
changes, so updating the docs after a Clay release is a reviewed PR, not an
archaeology session. Full details, including how to add a component, are in
[scripts/README.md](./scripts/README.md).

## Live examples: progressive Storybook embeds

Each component page's "Live examples" section is, in the Markdown, a plain
CommonMark link to the component's story on storybook.clayui.com. The viewer
theme (`.vitepress/theme/storybook-embeds.js`) progressively enhances those
links in the browser: it reads the story id from the link and inserts a
lazy-loaded, embedded Storybook preview after it, keeping the original link as
the accessible fallback and adding an "Open this example in Storybook" caption.

This keeps all three constraints intact at once:

- **Storybook stays the single home for live examples.** The embed is served by
  storybook.clayui.com itself (`iframe.html?id=...`); nothing is ported,
  recreated, or duplicated, and stories update with every Clay release.
- **The content stays plain CommonMark.** No iframes or HTML in `/docs`; in any
  other pipeline (for example Liferay Learn) the links degrade gracefully to
  normal links.
- **Contributors do nothing special.** Writing a regular Markdown link to a
  story is all it takes; the viewer does the rest.

## How the Edit-button flow works

Every page shows an **"Edit this page on GitHub"** link. Clicking it opens the
underlying `/docs/*.md` file in GitHub's own Markdown editor. GitHub handles the
fork automatically for anyone without write access, and the change is submitted
as a pull request. That PR runs the CI checks (build + Markdown link check) and
is reviewed like any other contribution. This is the intended collaboration
model: low-friction edits, human review, no direct commits to `main`.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for the content rules.
