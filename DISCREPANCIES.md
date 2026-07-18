# Discrepancies between Lexicon and Clay

Merging design.liferay.com/lexicon and clayui.com into one site surfaced the
places where the two sources disagree, cover different ground, or slice the
same content differently. This file is the complete inventory.

How discrepancies are handled: unresolved items are marked in the content with
an HTML comment starting with `<!-- REVIEW: -->`. Each one is resolved by an
explicit stakeholder ruling (see [DECISIONS.md](./DECISIONS.md), item 7)
declaring which source prevails, or a scope call where the binary does not
apply. Resolutions are recorded in the affected page's `migration-map.json`
notes; the tables below track the overall status.

## 1. Direct conflicts between sources

Cases where Lexicon and Clay state incompatible things about the same
component.

| Where | Discrepancy | Status |
| ----- | ----------- | ------ |
| Button, sizes | Lexicon documents two sizes (Default 40px, Small 32px); `@clayui/button` also ships an `xs` size value. | **Resolved 2026-07-18, Clay wins.** `xs` is documented as a third supported size. |
| Select vs Picker | clayui.com documents Select as a regular form control and the public Lexicon selector spec covers it; the internal [Item Selection Guideline](https://liferay.atlassian.net/wiki/spaces/ENGLEXICON/pages/3080618005/Item+Selection+Guideline) rules the Clay Select "not recommended" and names the Picker its direct substitute. | **Resolved 2026-07-18.** The internal guideline prevails: both pages now carry the recommendation (see DECISIONS.md, item 8). |
| Charts | Lexicon has a full design collection (bar, donut, forecast, heatmap, line, pie, stacked bar); Clay's `@clayui/charts` announces its own deprecation in favor of a future wrapper and has no Storybook stories. | **Resolved 2026-07-18, out of scope.** The page was removed; the chart color palette stays in the Color foundation. |

## 2. Implementation without a design spec (Clay-only)

Components that clayui.com documents but that have no Lexicon spec. The pages
document them from the implementation; the REVIEW flags stand as an explicit
backlog of specs to request from the design team.

| Component | Notes | Status |
| --------- | ----- | ------ |
| Picker | No public Lexicon spec, ships in `@clayui/core`. | **Resolved 2026-07-18.** Covered by the internal Item Selection Guideline and accessibility doc; guidance is official, not derived. |
| Autocomplete | No standalone public spec; behavior appears inside the Multi Select spec. | **Resolved 2026-07-18.** Same internal documents cover it (live search, match announcements, single selection). |
| Nav | Building block behind Navigation Bar and Vertical Nav. | Pending ruling. |
| Focus Trap | Utility component. | Pending ruling. |
| Overlay Mask | Highlight component. | Pending ruling. |
| Resize Handle | Utility component. | Pending ruling. |
| Icon Selector | The icons foundation rules apply, but no component spec exists. | Pending ruling. |
| Language Picker | Implements the language selector used by localized inputs. | Pending ruling. |
| Data Provider | Data-fetching utility, no visual identity. | Pending ruling. |

## 3. Design without an implementation (Lexicon-only)

Lexicon specs with no matching React component. The pages state how each maps
to Clay today.

| Page | How it maps to Clay | Status |
| ---- | ------------------- | ------ |
| Keys | CSS only (`c-kbd` classes), no React component or story. | Documented as CSS; story gap logged in [STORYBOOK-GAPS.md](./STORYBOOK-GAPS.md). |
| Section | Implemented through the Panel sheet markup. | Documented with the mapping. |
| Confirmation Message | A pattern built from Modal and Alert, not a component. | Documented as a pattern. |
| Dataset Display | Realized by Management Toolbar plus display components (the frontend Data Set lives outside Clay). | Documented with the mapping. |
| Timelines | CSS only, no React component or story. | Documented as CSS; story gap logged. |

## 4. Derived guidance pending validation

Pages whose design guidance was extrapolated from a neighboring Lexicon spec
because no direct one exists.

| Page | Derivation | Status |
| ---- | ---------- | ------ |
| Panel | Collapse rules taken from the Lexicon forms guidance (first level sections may collapse, second level never). | Pending ruling. |

## 5. Taxonomy and naming mismatches

The two sites name or slice the same content differently. None of these blocks
anything; they are recorded so redirects and cross-references stay correct.

- Lexicon "Selector" (inside Forms) is Clay "Select"; the merged page is
  [Select](docs/components/select.md).
- Lexicon "Dropdowns" is Clay "DropDown" (one word; its Storybook ids sanitize
  to `dropdown`).
- clayui.com "Select Box" has no Lexicon spec of its own: it is documented
  inside [Select](docs/components/select.md) and its multiple selection mode
  exists only for the [Dual Listbox](docs/components/dual-listbox.md).
- clayui.com "Sidebar" maps to the Lexicon-named [Side Panel](docs/components/side-panel.md).
- clayui.com "Pagination Bar" is merged into [Pagination](docs/components/pagination.md).
- clayui.com "Upper Toolbar" is deprecated upstream; the guidance lives in
  [Toolbar](docs/components/toolbar.md).
- clayui.com "Reduced Motion" is a Provider setting, folded into
  [Provider](docs/components/provider.md).
- Lexicon specs Checkbox, Radio, and Toggle separately; Clay implements all
  three in `@clayui/form`, so the merged site documents them in
  [one page](docs/components/checkbox-radio-toggle.md).
- Application Bar is a satellite in Lexicon (outside the core spec) but a
  documented component pattern in Clay. **Pending ruling** on whether it stays.

## 6. Resolved by stakeholder ruling, no source change

| Where | Item | Status |
| ----- | ---- | ------ |
| Get Started | The positioning wording (when to use Clay vs the site-building stack) was drafted for this merge and had no source to defer to. | **Approved as written, 2026-07-18.** |
