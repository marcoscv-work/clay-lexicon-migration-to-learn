# Rationale: the argument behind every decision

This file exists so any decision in this proof of concept can be explained and
defended without digging. Each question below gets the short argument and a
pointer to the evidence. The detailed records live in three companion files:

- [DECISIONS.md](./DECISIONS.md): how the criteria evolved from the brief, with
  the reasoning for each change.
- [DISCREPANCIES.md](./DISCREPANCIES.md): every place Lexicon and Clay
  disagree, and how each case was ruled.
- [migration-map.json](./migration-map.json): per-page provenance, sources,
  and the editorial decisions that touched that page.

## Strategy

**Why merge the two sites instead of migrating them separately?**
Maintaining design specs and implementation docs in two places is the root
cause of their drift: today a component's design intent and its API live on
different sites that release on different rhythms and disagree (see
DISCREPANCIES.md for the inventory). One page per component, holding both,
makes disagreement visible and fixable in one review. This repositioning comes
from the epic (LPD-98580); the PoC's job was to prove it works page by page.

**Why is Lexicon mentioned only once?**
The strategic decision under validation is that Lexicon becomes the internal
design language behind Clay, not a parallel public brand. One mention on Get
Started explains the relationship; repeating it everywhere would recreate the
two-brand confusion the merge removes. Evidence: `docs/get-started/index.md`,
brief requirement, README "What this proves".

**Why did the scope grow from 14 pages to the full site?**
The 14-page sample validated the model with stakeholders first; the full
migration was then an explicit stakeholder request, batch by batch. Growing
after validation, not before, kept the risk low. Evidence: README Scope
section; the batch structure is visible in the git history.

**What was excluded, and who decided?**
Satellites, Templates, Examples, and the blog (brief). Charts was removed by
stakeholder ruling while the charting implementation is unresolved
(DISCREPANCIES.md, section 1). Writing, originally out of scope, was brought in
by stakeholder decision. Every exclusion has a named reason in README Scope.

## Content

**Why plain CommonMark, when the viewer could render anything?**
The `/docs` folder is the deliverable, and its destination is Liferay Learn's
Markdown pipeline. Any syntax that only one viewer understands is a future
migration cost. The one exception, GFM tables inside generated API blocks, is
supported by Learn. Evidence: DECISIONS.md governing principle;
CONTRIBUTING.md content rules.

**Why rewrite the content instead of copying it?**
The sources are written in two different voices for two different audiences;
copying would carry both inconsistencies and the old positioning into the new
site. Everything is rewritten in Learn's task-oriented tone. Evidence:
CONTRIBUTING.md content rules; compare any page against its `sources`
frontmatter.

**Why are the API tables generated instead of written?**
Hand-transcribed prop tables are wrong the day after the next release, and
nobody notices. The tables are extracted from the published Clay TypeScript
types, checked for drift with `npm run api:check`, and refreshed weekly by a
workflow that opens a reviewed PR. Nothing between the API markers is
human-owned. Evidence: scripts/README.md; README "API reference pipeline" and
"Quality gates".

**Why no images on component pages?**
A screenshot of a button rots the day the button changes; a live story does
not. Component variants link to Storybook stories (the viewer embeds them
live), and where no story exists the gap is recorded instead of faked, which
produces a real backlog for the Clay team. Images remain where a live example
cannot express the content (Foundations diagrams). Evidence: DECISIONS.md
items 1 and 2; STORYBOOK-GAPS.md.

**Why were internal Confluence guidelines folded in?**
Because the public sites lag the design team's actual position: the public
sources document Select as a normal control, while the internal Item Selection
Guideline rules it not recommended, replaced by the Picker. A merge of only
public sources would have shipped outdated guidance. The two internal
documents are cited as sources on the six affected pages. Evidence:
DECISIONS.md item 8; DISCREPANCIES.md sections 1 and 2.

**How were conflicts between sources handled?**
Marked inline with `<!-- REVIEW -->` comments during migration, inventoried in
DISCREPANCIES.md, and resolved one by one by explicit stakeholder ruling
(Lexicon wins, Clay wins, or a scope call). Rulings are dated and recorded in
`migration-map.json`, so the trail survives the comment's removal. Evidence:
DECISIONS.md item 7; DISCREPANCIES.md status columns.

## Viewer

**Why VitePress?**
The brief required plain-Markdown rendering, edit links, client-side search,
sidebar navigation, and a simple Pages deploy. VitePress satisfies all five
without forcing frontmatter or syntax into the content, and keeps the whole
toolchain on Node, which the API-extraction scripts already require. Starlight
leans on MDX; MkDocs adds a Python runtime. Full comparison: README "Why
VitePress for the viewer".

**Why "progressive enhancement" instead of richer Markdown?**
The viewer upgrades plain constructs in the browser: story links become
embedded live examples, hex codes become color chips. In any other pipeline
the same files degrade to normal links and inline code. This is how the site
gets a rich reading experience without contaminating the deliverable.
Evidence: DECISIONS.md governing principle and items 1 to 3;
`.vitepress/theme/`.

**Does the viewer choice lock anything in?**
No. Everything under `.vitepress/` is declared throwaway; the acceptance test
is that `/docs` moves to Learn unchanged. Evidence: README "Repository
layout".

## Trust and traceability

**Where did any given sentence come from?**
Every page's frontmatter lists its `sources`; `migration-map.json` holds the
same plus notes on what was merged, folded, or ruled. Evidence: any page +
its map entry.

**How do we know the links, embeds, and tables are correct?**
By construction: CI checks every internal link and asset, validates every
story id against a snapshot of Storybook's own index, fails the build on dead
links, and can prove the API tables regenerate with no diff. Evidence: README
"Quality gates"; `scripts/check-links.mjs`; `.github/workflows/`.

**Is the site accessible?**
WCAG 2.2 AA was an explicit requirement: skip link, visible 3px focus
outlines, landmark structure, contrast overrides on the theme, and embeds that
keep the original link as accessible fallback. Evidence:
`.vitepress/theme/custom.css`; DECISIONS.md item 1.

**What is still open?**
Nine REVIEW flags await rulings (seven Clay-only components without a Lexicon
spec, the Panel's derived collapse rules, and Application Bar's satellite
status), listed with options in DISCREPANCIES.md. Storybook gaps are the Clay
team's backlog in STORYBOOK-GAPS.md.
