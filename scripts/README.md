# Scripts

Tooling for the Clay documentation PoC. Two scripts, both plain Node ESM with no
build step.

## generate-api.mjs: API reference generation

The API reference tables on component pages are generated, never hand-written.
This keeps them accurate: the primary reason developers visit the Clay docs is
the component API, so the tables are treated as first-class content backed by the
source of truth.

### What it does

For each component page listed in `migration-map.json` (entries that have an
`api` field), the script:

1. Resolves the package version. It runs `npm view <package> version` for the
   latest published version, and falls back to the version in the local Clay
   mirror's `package.json` when the registry is unreachable. If the two differ,
   it prints a warning, because props are read from the mirror.
2. Reads the component's TypeScript prop types with
   [ts-morph](https://ts-morph.com), extracting for each public prop: name,
   type, default value, required flag, and the JSDoc description (including any
   `@deprecated` note).
3. Rewrites only the content between the `<!-- API:START ... -->` and
   `<!-- API:END -->` markers, updates the `version` attribute on the START
   marker, and updates the `api_version` field in the page frontmatter.

Everything outside the markers is human-owned and never touched.

### Source of truth

Props are extracted from the component source in the
[github.com/liferay/clay](https://github.com/liferay/clay) mirror, which is the
liferay-portal monorepo mirror and ships the TypeScript source (with JSDoc and
default values). The published `@clayui/*` packages ship compiled `.d.ts` files,
but those do not carry the default values that live in the component's
destructured parameters, so the mirror source gives a richer table.

The script reads only each type's own properties. Inherited DOM attributes (for
example everything on `React.ButtonHTMLAttributes`) are intentionally excluded,
so the table shows Clay-specific props only. Local union type aliases (such as
`DisplayType`) are expanded to their allowed values.

### Configure the Clay source location

The script looks for the mirror at `../sources/clay` relative to the repo root.
Override it with the `CLAY_SRC` environment variable:

```bash
CLAY_SRC=/path/to/clay npm run api:generate
```

CI clones the mirror and sets `CLAY_SRC` (see
`.github/workflows/api-update.yml`).

### Run it

```bash
npm run api:generate    # regenerate all API blocks and write changes
npm run api:check       # exit 1 if regeneration would change anything (CI use)
node scripts/generate-api.mjs --offline   # skip the npm version lookup
```

### Add a new component

1. Add (or extend) the component's entry in `migration-map.json` with an `api`
   field:

   ```json
   {
     "new_path": "docs/components/card.md",
     "site_url": "/components/card",
     "sources": ["..."],
     "storybook": "...",
     "api": {
       "package": "@clayui/card",
       "targets": [
         {
           "heading": "Card",
           "file": "packages/clay-card/src/Card.tsx",
           "type": "IProps"
         }
       ]
     }
   }
   ```

   - `heading` is the H3 shown above the table (use the exported component name,
     for example `Card` or `ClayCard.Body`).
   - `file` is the source file, relative to the Clay mirror root.
   - `type` is the name of the interface or type alias that declares the props
     (commonly `IProps` or `Props` in Clay packages). To find it, open the source
     file and look at the type argument of `React.forwardRef<Ref, ThisType>` or
     the props parameter type of the function component.

2. Add the markers to the page inside the `## API reference` section:

   ```markdown
   <!-- API:START package=@clayui/card version=0.0.0 -->
   <!-- API:END -->
   ```

3. Run `npm run api:generate`. The block and the `api_version` frontmatter fill
   in automatically.

### How updates stay current

`.github/workflows/api-update.yml` runs this script on a weekly schedule (and on
demand). When a new Clay release changes a table, the workflow opens a pull
request with the regenerated blocks. A human reviews the API diff like any other
change; nothing is committed to `main` directly.

## sync-assets.mjs: viewer asset staging

Mirrors the canonical `/assets` folder (the migration deliverable, committed at
the repo root) into `/public/assets`, which VitePress serves statically with the
correct base path. The `/public` copy is generated and gitignored, so `/assets`
stays the single source of truth. It runs automatically before `docs:dev` and
`docs:build`; run it manually with `npm run assets:sync`.

## check-links.mjs: internal link check

Validates internal Markdown links across `/docs` (see the script header for
details). Runs in CI on every pull request; broken internal links fail the
check, external links are not fetched.
