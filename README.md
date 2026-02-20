# Lily Livered

[![Lighthouse Performance](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/vinsonconsulting/lily-livered/main/.github/badges/lighthouse_perf.json)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/lighthouse.yml)
[![Lighthouse Accessibility](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/vinsonconsulting/lily-livered/main/.github/badges/lighthouse_a11y.json)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/lighthouse.yml)
[![Lighthouse Best Practices](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/vinsonconsulting/lily-livered/main/.github/badges/lighthouse_best.json)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/lighthouse.yml)
[![Lighthouse SEO](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/vinsonconsulting/lily-livered/main/.github/badges/lighthouse_seo.json)](https://github.com/vinsonconsulting/lily-livered/actions/workflows/lighthouse.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Built with Astro](https://img.shields.io/badge/built%20with-Astro-bc52ee.svg?logo=astro)](https://astro.build)
[![Deploy: Cloudflare Pages](https://img.shields.io/badge/deploy-Cloudflare%20Pages-f38020.svg?logo=cloudflare)](https://pages.cloudflare.com)

You bought a domain. You're not ready to build a site. You _are_ ready to stop staring at a parking page that says "Future home of something quite cool" like it's 2003.

Lily Livered is a one-page logo site for domains that deserve better than nothing but aren't getting a full website today. Drop in your SVG, edit one config file, push to Cloudflare Pages. Done before your coffee gets cold.

**What you get:**
- A resizable logo that looks good on everything from a phone to a projector (yes, that counts as an interactive feature)
- Three tiers of analytics so you can watch your one visitor a month in stunning detail
- `robots.txt` and `llms.txt` so search engines and AI actually know you exist
- A 404 page, because even a single-page site needs to handle disappointment gracefully

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
git add -A && git commit -m "My domain has pants now" && git push
```

## The One File You Actually Edit

**`src/config.js`** — everything lives here:

```javascript
export const config = {
  // ◈ The basics
  siteName: 'Acme Corporation',
  siteDescription: 'Fine Products for Coyotes Since 1949',
  siteUrl: 'https://acme.example.com',

  // ◈ Analytics (leave '' to skip any of these)
  googleAnalyticsId: '',           // 'G-XXXXXXXXXX'
  clarityProjectId: '',            // 'abc123xyz'
  cloudflareAnalyticsToken: '',    // 'abcd1234...'

  // ◈ Colors
  backgroundColor: '#000000',
  textColor: '#ffffff',

  // ◈ How big should the logo be?
  logoSize: 'normal',   // 'normal' | 'large' | 'massive'

  // ◈ Fade-in animation
  fadeIn: true,
  fadeInDuration: 1.2,

  // ◈ Structured data for search engines
  enableStructuredData: true,
  organizationType: 'Organization',
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

Edit `public/robots.txt` to tell crawlers what's up. The template ships with a sensible default that allows full crawling and points to your sitemap:

```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

Swap `yourdomain.com` for your actual domain.

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

**Social sharing image** — Create a 1200×630 `public/og-image.png` (your logo on your background color). This is what shows up when someone shares your link.

**Favicon** — The SVG logo doubles as the favicon. For older browsers, add a 48×48 `public/favicon.ico`. Tools: [favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/).

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
├── favicon.ico          ← Optional. For legacy browsers.
└── og-image.png         ← Optional. For social media previews.
```

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

## What's Under the Hood

- **Astro 5** — static site generator, zero client JS by default
- **Partytown** — runs analytics scripts off the main thread
- **Cloudflare Pages** — edge deployment, free tier is generous
- Semantic HTML, `prefers-reduced-motion` support, high-contrast defaults
- Open Graph, Twitter Cards, JSON-LD structured data — all auto-generated from your config
- Perfect Lighthouse scores because there's almost nothing to screw up

## License

MIT — Do whatever you want with it.
