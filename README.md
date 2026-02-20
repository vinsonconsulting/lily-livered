# Lily Livered

<!-- Lighthouse scores (dynamic, updated by CI) -->
[![Lighthouse Performance](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/vinsonconsulting/lily-livered/main/.github/badges/lighthouse_perf.json)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/lighthouse.yml)
[![Lighthouse Accessibility](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/vinsonconsulting/lily-livered/main/.github/badges/lighthouse_a11y.json)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/lighthouse.yml)
[![Lighthouse Best Practices](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/vinsonconsulting/lily-livered/main/.github/badges/lighthouse_best.json)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/lighthouse.yml)
[![Lighthouse SEO](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/vinsonconsulting/lily-livered/main/.github/badges/lighthouse_seo.json)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/lighthouse.yml)

<!-- Live site scoring (dynamic, hit demo URL) -->
[![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Flily-livered.jimvinson.com&label=W3C)](https://validator.nu/?doc=https%3A%2F%2Flily-livered.jimvinson.com)
[![Mozilla Observatory](https://img.shields.io/mozilla-observatory/grade/lily-livered.jimvinson.com?label=Observatory)](https://observatory.mozilla.org/analyze/lily-livered.jimvinson.com)

<!-- CI status (dynamic) -->
[![CI](https://github.com/vinsonconsulting/lily-livered/actions/workflows/ci.yml/badge.svg)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/ci.yml)

<!-- Repo stats (dynamic, from GitHub API) -->
[![GitHub last commit](https://img.shields.io/github/last-commit/vinsonconsulting/lily-livered)](https://github.com/vinsonconsulting/lily-livered/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/vinsonconsulting/lily-livered)](https://github.com/vinsonconsulting/lily-livered)
[![GitHub stars](https://img.shields.io/github/stars/vinsonconsulting/lily-livered?style=flat)](https://github.com/vinsonconsulting/lily-livered/stargazers)

<!-- Tech stack (static) -->
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-bc52ee.svg?logo=astro)](https://astro.build)
[![Deploy: Cloudflare Pages](https://img.shields.io/badge/deploy-Cloudflare%20Pages-f38020.svg?logo=cloudflare)](https://pages.cloudflare.com)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?logo=biome)](https://biomejs.dev)
[![Renovate enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen?logo=renovatebot)](https://github.com/apps/renovate)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**[↗ Live Demo](https://lily-livered.jimvinson.com)** · Your email-only domains are naked, and you know it. Here's a pair of pants.

You bought a domain. Maybe you're not ready to build the site yet. Maybe it's just an email domain and always will be. Either way, you _are_ ready to stop staring at a parking page that says "Future home of something quite cool" like it's 2003.

Lily Livered is a one-page logo site for domains that deserve better than nothing but aren't getting a full website today. Drop in your SVG, edit one config file, push to Cloudflare Pages. Done before your coffee gets cold.

**What you get:**
- A fun resizable logo that looks good on everything from a phone to a projector — playing with the three size settings counts as an interactive feature
- Three tiers of site metrics and visitor tracking to keep tabs on that baseline traffic flow
- `robots.txt` and `llms.txt` so you can tell the cool kids what's going on
- A 404 page, because even a single-page site needs to handle disappointment gracefully

> **A note on our Lighthouse scores:** The demo site ships with an absurdly complex 72 KB SVG logo (a 16th-century woodcut skull surrounded by clouds — long story). Your logo is almost certainly simpler, lighter, and faster to render. Expect your Performance score to be higher than ours. You are, after all, smarter, cooler, and better looking than us.
>
> **Best Practices at 82?** That's Astro's inline `<style>` tags requiring `'unsafe-inline'` in our Content Security Policy. Astro 5.9+ ships with [experimental hash-based CSP](https://docs.astro.build/en/reference/experimental-flags/csp/) that eliminates this — once it graduates from experimental, this template will adopt it and the score will hit 100.

## Quick Start

```bash
git clone https://github.com/vinsonconsulting/lily-livered.git my-site
cd my-site
npm install
```

Then do three things:

1. **Drop your logo** into `public/logo.svg`
2. **Edit `src/config.js`** with your details (see below)
3. **Edit `public/llms.txt`** and `public/robots.txt` with your info

Preview it:

```bash
npm run dev    # → localhost:4321
```

Deploy it:

```bash
git add . && git commit -m "My domain has pants now" && git push
```

## The One File You Actually Edit

**`src/config.js`** — everything lives here:

```javascript
export const config = {
  // ◈ Site Info
  siteName: 'Acme Corporation',
  siteDescription: 'Fine Products for Coyotes Since 1949',
  siteUrl: 'https://acme.example.com',

  // ◈ Analytics — paste your IDs, or leave '' to disable
  googleAnalyticsId: '', // e.g., 'G-XXXXXXXXXX'
  clarityProjectId: '', // e.g., 'abc123xyz'
  cloudflareAnalyticsToken: '', // e.g., 'abcd1234...'

  // ◈ Colors
  backgroundColor: '#000000',
  textColor: '#ffffff',

  // ◈ Logo size — how much screen to fill
  logoSize: 'normal', // 'normal' | 'large' | 'massive'

  // ◈ Fade-in animation
  fadeIn: true,
  fadeInDuration: 1.2, // seconds

  // ◈ Social sharing image (set true if you've added public/og-image.png)
  hasOgImage: false,

  // ◈ Structured data (JSON-LD for search engines)
  enableStructuredData: true,
  organizationType: 'Organization', // 'Organization', 'LocalBusiness', 'Person'
};
```

### Logo Sizes

| Setting | What it does | When to use it |
|---------|-------------|----------------|
| `'normal'` | Comfortable fit, breathing room | Most logos |
| `'large'` | Fills most of the screen | Bold wordmarks, wide logos |
| `'massive'` | Edge-to-edge domination | You want the logo and nothing else |

## Your Logo (SVG)

Replace `public/logo.svg` with yours. A few ground rules:

- **Convert text to outlines** — no font dependency headaches
- **Center it in the viewBox** — if it looks off-center on the page, it's off-center in the file
- **White or light colors** — dark background is the default
- **Run it through [SVGO](https://jakearchibald.github.io/svgomg/)** — smaller file, faster load

If your logo looks weirdly positioned: open it in Illustrator/Figma/Inkscape, select all, center on artboard, re-export.

## robots.txt

Edit `public/robots.txt` to update the domain in the sitemap URL. The sitemap itself is auto-generated at build time by `@astrojs/sitemap` using `siteUrl` from your config:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap-index.xml
```

Swap `yourdomain.com` for your actual domain (should match `siteUrl` in `config.js`).

## llms.txt

Edit `public/llms.txt` so AI systems know who you are. This follows the [llmstxt.org](https://llmstxt.org) spec. The template ships with a placeholder — replace it with your actual company info, services, and contact details.

## Analytics (Pick Your Poison)

Three options. All optional. All run off the main thread via Partytown so they don't slow anything down.

| Service | What it tells you | Get it at |
|---------|------------------|-----------|
| **Google Analytics 4** | Everything. Too much, probably. | [analytics.google.com](https://analytics.google.com) |
| **Microsoft Clarity** | Session recordings, heatmaps, rage clicks | [clarity.microsoft.com](https://clarity.microsoft.com) |
| **Cloudflare Web Analytics** | Privacy-friendly basics, ~1KB | CF Dashboard ↗ Web Analytics |

Paste the ID into `config.js`. Leave blank to disable. They stack — use one, two, or all three.

## Optional Extras

**Social sharing image** — Create a 1200×630 `public/og-image.png` (your logo on your background color), then set `hasOgImage: true` in `config.js`. This is what shows up when someone shares your link. The image meta tags are only emitted when you opt in — no broken image URLs out of the box.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub
2. [Cloudflare Dashboard](https://dash.cloudflare.com) ↗ Pages ↗ Create project
3. Connect your repo
4. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Framework preset:** Astro
5. Add your custom domain

Every `git push` after that auto-deploys.

## File Map

```
src/
├── config.js            ← Edit this. All your settings.
└── pages/
    ├── index.astro      ← The page. You probably don't need to touch this.
    └── 404.astro        ← 404 page. Also probably leave it alone.
public/
├── logo.svg             ← Replace this with your logo.
├── robots.txt           ← Edit with your domain.
├── llms.txt             ← Edit with your company info.
├── _headers             ← Security headers for Cloudflare Pages.
└── og-image.png         ← Optional. For social media previews.
biome.json               ← Lint/format config.
renovate.json            ← Automated dependency updates.
```

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
npm run check     # Lint + format check via Biome
npm run check:fix # Auto-fix lint and format issues
```

## What's Under the Hood

- **Astro 5** — static site generator, zero client JS by default
- **Partytown** — runs analytics scripts off the main thread
- **Cloudflare Pages** — edge deployment, free tier is generous
- **Biome** — linting and formatting in one Rust binary
- **Renovate** — automated dependency updates so your clone doesn't rot
- Semantic HTML, `prefers-reduced-motion` support, high-contrast defaults
- Auto-generated sitemap via `@astrojs/sitemap`
- Open Graph, Twitter Cards, JSON-LD structured data — all auto-generated from your config
- Near-perfect Lighthouse scores — Accessibility and SEO at 100, Performance scales with your logo complexity

## FAQ

**"Isn't this over-engineered for a one-page site?"**

Yes, gloriously so. That's the point. Your domain gets the same edge deployment, security headers, structured data, and analytics pipeline as a site with a hundred pages — except you configured it in sixty seconds. The over-engineering is a feature, not a bug. You're welcome.

**"Why does the demo logo look like it was drawn by a 16th-century monk?"**

Because it was (see credits below). We wanted to prove the template handles complex SVGs gracefully. Your clean, modern logo will load faster and score higher. Use us as the "before" picture.

**"A 72 KB SVG? For a template about simplicity?"**

The template is simple. The demo logo is a stress test. It's a 16th-century woodcut with 30,000+ coordinates, SVGO-optimized from 236 KB down to 72 KB (32 KB on the wire with compression). If it can handle this, it can handle your logo.

**"Why Cloudflare Pages specifically?"**

Free tier is generous (unlimited bandwidth, 500 builds/month), deploys are fast, and the edge network is global. You could deploy this to Vercel or Netlify with minimal changes, but Cloudflare Pages is the default because it's the best deal for a site that costs nothing to run.

**"The 404 page loads a Google Font. Isn't that a dependency?"**

It is. Bebas Neue loads from Google Fonts because it looks fantastic at 50vw and we didn't want to bundle a 40 KB font file for a page most people never see. If Google Fonts goes down, your 404 falls back to the browser's default sans-serif. The world keeps turning.

**"Why three analytics services?"**

Because they do different things and they're all free. GA4 is the kitchen sink. Clarity gives you session recordings and heatmaps. Cloudflare Web Analytics is privacy-friendly and weighs 1 KB. Pick one, pick all three, pick none. They're off the main thread via Partytown so they don't affect performance.

## Demo Logo Credit

The demo site logo is adapted from a woodcut on page 181 of Claude Paradin's [*Devises heroïques*](https://www.emblems.arts.gla.ac.uk/french/books.php?id=fpab) (Lyon: Jean de Tournes & Guillaume Gazeau, 1557). The image is in the public domain.

## License

MIT — Do whatever you want with it.
