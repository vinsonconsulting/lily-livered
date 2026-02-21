# Contributing to Lily Livered

Thanks for your interest. This is a small, opinionated template — contributions that keep it small and opinionated are welcome.

## Ground Rules

- **Keep the scope tight.** Lily Livered is a one-page logo site. Features that push it toward "starter template for a real website" are out of scope.
- **One config file.** If a feature can't be driven from `src/config.js`, it probably doesn't belong here.
- **Zero client JS by default.** Partytown is the exception, and only when analytics are configured.
- **Lighthouse scores matter.** Don't ship changes that regress Accessibility, Best Practices, or SEO below 100. Performance should stay in the high 80s+ with the stress-test logo.

## How to Contribute

1. **Open an issue first** for anything beyond a typo fix. Describe what you want to change and why.
2. **Fork and branch.** Branch names like `fix/favicon-handling` or `feat/color-scheme-support` are ideal.
3. **Test locally:**
   ```bash
   npm install
   npm run build
   npm run check
   npm run dev    # eyeball it
   ```
4. **Run Lighthouse** against your local build (`npm run preview`, then audit `localhost:4321`). Screenshot the scores in your PR.
5. **One PR per change.** Keep diffs focused.

## Code Style

- **Biome** handles linting and formatting. Run `npm run check:fix` before committing.
- **No Prettier, no ESLint.** Biome is the single source of truth.
- Astro components use the `.astro` extension. JavaScript config files use `.js` (not `.ts` — this project doesn't need TypeScript).

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation only
- `chore:` — tooling, deps, CI
- `style:` — formatting (Biome-driven)

## What We Won't Merge

- Features that require a build step beyond `npm run build`
- Dependencies with large bundle sizes
- TypeScript conversion PRs
- "Just in case" abstractions
- Anything that makes `config.js` more complicated without clear user value

## Questions?

Open an issue. We're friendly.
