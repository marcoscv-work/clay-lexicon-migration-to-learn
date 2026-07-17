# Contributing

This is a proof of concept for epic LPD-98580. Contributions that improve the
merged content model are welcome. The goal is to keep the `/docs` Markdown clean,
portable, and ready to move into Liferay Learn.

## The quickest way: Edit this page

Every page on the site has an **"Edit this page on GitHub"** link at the bottom.

1. Click it. It opens the page's `.md` file in GitHub's Markdown editor.
2. Make your change. If you do not have write access, GitHub forks the repo for
   you automatically.
3. Propose the change. GitHub opens a pull request.
4. CI runs (site build + Markdown link check) and a maintainer reviews it.

You never need to clone anything or run a local environment for a content edit.

## The other way: fork and edit `/docs`

If you prefer working locally:

```bash
git clone https://github.com/marcoscv-work/clay-lexicon-migration-to-learn
cd clay-lexicon-migration-to-learn
npm install
npm run docs:dev
```

Edit files under `/docs`, preview at the local URL, then open a pull request.

## Content rules

These are the rules the CI check and reviewers look for. They exist because the
final destination is Liferay Learn's Markdown pipeline.

- **Liferay Learn tone.** Task-oriented, second person, direct ("Use a primary
  button for the main action on a page"). No marketing language. Rewrite; do not
  copy paragraphs verbatim from clayui.com or Lexicon.
- **Plain CommonMark only.** No MDX, no framework components, no shortcodes, no
  HTML beyond what is strictly unavoidable. The single exception is GFM tables,
  and only inside the generated API blocks.
- **No interactive examples in the Markdown.** Never embed CodeSandbox, live MDX
  blocks, or iframes. Link to the matching
  [Storybook](https://storybook.clayui.com) story with a plain Markdown link;
  the viewer automatically turns story links into embedded live previews, so a
  link is all you need. If no story exists, add an entry to
  [STORYBOOK-GAPS.md](./STORYBOOK-GAPS.md) rather than inventing a link.
- **No em dashes.** Use commas, colons, or parentheses instead.
- **One H1 per page, no skipped heading levels.**
- **API tables are generated.** Never hand-edit content between
  `<!-- API:START -->` and `<!-- API:END -->`. Run `npm run api:generate`
  instead. Everything outside those markers is yours to edit.
- **No images on component pages.** Component pages show variants through live
  Storybook story links (which the viewer embeds) instead of screenshots.
  Images are still used where a live example cannot express the content (for
  example the Foundations pages); those go in `/assets`, organized per section,
  with a descriptive filename and meaningful alt text in the Markdown.
- **Record provenance.** When you add or substantially change a page, update its
  entry in `migration-map.json` (source URLs and notes).
- **Conflicts between sources.** Prefer clayui.com for implementation facts and
  Lexicon for design intent. Flag anything unresolved with an HTML comment
  `<!-- REVIEW: conflict between sources, describe -->` so it can be found with
  grep.

## What not to migrate (for this PoC)

Satellites, Templates, Examples, Writing, and the blog are out of scope.

## Pull request checklist

The PR template asks three questions: which page you changed, whether you checked
it against the source, and whether the change stays plain CommonMark. Answer them
so review is fast.
