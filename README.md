# Lily Livered

A minimal, high-performance single-logo landing page. Built with Astro, optimized for Cloudflare Pages.

## Quick Start

```bash
# 1. Use this template (click "Use this template" on GitHub)
#    Or clone directly:
git clone https://github.com/vinsonconsulting/lily-livered.git my-brand-site
cd my-brand-site

# 2. Install dependencies
npm install

# 3. Configure your site
#    Edit src/config.js with your details

# 4. Add your logo
#    Replace public/logo.svg

# 5. Preview locally
npm run dev

# 6. Deploy
git add -A && git commit -m "Initial setup" && git push
```

## Configuration

All settings are in **`src/config.js`**:

```javascript
export const config = {
  // Required
  siteName: 'BRAND NAME',
  siteDescription: 'Your brand description',
  siteUrl: 'https://yourdomain.com',

  // Analytics (optional - leave empty to disable)
  googleAnalyticsId: '',
  clarityProjectId: '',
  cloudflareAnalyticsToken: '',

  // Appearance
  backgroundColor: '#000000',
  textColor: '#ffffff',
  logoSize: 'normal',  // 'normal' | 'large' | 'massive'

  // Animation
  fadeIn: true,
  fadeInDuration: 1.2,

  // Structured Data
  enableStructuredData: true,
  organizationType: 'Organization',
};
```

### Logo Sizes

| Option | Size | Use Case |
|--------|------|----------|
| `normal` | `min(92vw, 80vh)` | Good for most logos |
| `large` | `min(95vw, 90vh)` | Logos that need more presence |
| `massive` | `min(98vw, 95vh)` | Edge-to-edge, minimal padding |

## File Structure

```
src/
├── config.js          # All site configuration
└── pages/
    ├── index.astro    # Main page
    └── 404.astro      # 404 page
public/
├── logo.svg           # Your logo (replace this)
├── favicon.ico        # Fallback favicon (optional)
├── og-image.png       # Social sharing image (optional)
├── robots.txt
└── llms.txt           # AI discoverability
```

## Logo Requirements (SVG)

Replace `public/logo.svg` with your logo:

1. **Center content within viewBox** - Ensure artwork is centered, not offset
2. **Convert text to outlines** - Eliminates font dependency issues
3. **Use SVGO for optimization** - Reduces file size
4. **Use white/light colors** - Works well on dark backgrounds

### Troubleshooting Off-Center Logos

If your logo appears off-center:

1. Open the SVG in a vector editor (Illustrator, Figma, Inkscape)
2. Select all artwork and center it on the artboard
3. Adjust the viewBox to match the content bounds
4. Re-export with "Use Artboard" or equivalent option

### Optimization

Run your SVG through [SVGO](https://jakearchibald.github.io/svgomg/) with these settings:
- Remove metadata
- Remove comments
- Clean up IDs
- Remove empty containers

## Open Graph Image (og-image.png)

Create `public/og-image.png` for social media sharing:

- **Size**: 1200×630 pixels
- **Content**: Your logo centered on the background color
- **Format**: PNG (or JPG for photos)

This image appears when your site is shared on social media.

## Favicon

The site uses your SVG logo as the primary favicon. For browsers that don't support SVG favicons:

1. Create a 48×48 pixel `favicon.ico`
2. Place it in `public/favicon.ico`

Tools: [favicon.io](https://favicon.io/) or [RealFaviconGenerator](https://realfavicongenerator.net/)

## llms.txt

The `public/llms.txt` file helps AI assistants understand your site. Edit it with:

- Brief description of your organization
- Services offered
- Contact information
- Any notes for AI systems

Reference: [llmstxt.org](https://llmstxt.org)

## Deployment

### Cloudflare Pages

1. Push to GitHub
2. In [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create project
3. Connect your GitHub repo
4. Build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Astro
5. Add custom domain

Push to GitHub and Cloudflare auto-deploys.

## Accessibility

The template includes:

- `prefers-reduced-motion` support - Disables animations for users who prefer reduced motion
- Semantic HTML structure
- Proper alt text from config
- High contrast default (white on black)

## Analytics

Three analytics options are supported (all optional):

| Service | Purpose | Setup |
|---------|---------|-------|
| **Google Analytics 4** | Full-featured analytics | [analytics.google.com](https://analytics.google.com) |
| **Microsoft Clarity** | Session recordings & heatmaps | [clarity.microsoft.com](https://clarity.microsoft.com) |
| **Cloudflare Web Analytics** | Privacy-focused, ~1KB | CF Dashboard → Web Analytics |

Set any to empty string `''` in config to disable.

## Development

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Features

- Zero-config deployment with Cloudflare Pages
- Perfect Lighthouse scores
- SEO ready (Open Graph, Twitter Cards, JSON-LD)
- Accessibility (reduced motion, semantic HTML)
- AI discoverable (llms.txt)
- Analytics ready (GA4, Clarity, Cloudflare)
- Minimal footprint

## License

MIT
