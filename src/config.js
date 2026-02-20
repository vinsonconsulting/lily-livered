// Site Configuration
// This is the only file you need to edit. Replace the Acme placeholder values with yours.

export const config = {
  // ◈ Site Info
  siteName: 'Acme Corporation',
  siteDescription: 'Fine Products for Coyotes Since 1949',
  siteUrl: 'https://acme.example.com',

  // ◈ Analytics — paste your IDs, or leave '' to disable
  googleAnalyticsId: '',           // e.g., 'G-XXXXXXXXXX'
  clarityProjectId: '',            // e.g., 'abc123xyz'
  cloudflareAnalyticsToken: '',    // e.g., 'abcd1234...'

  // ◈ Colors
  backgroundColor: '#000000',
  textColor: '#ffffff',

  // ◈ Logo size — how much screen to fill
  // 'normal'  → min(92vw, 80vh) — breathing room
  // 'large'   → min(95vw, 90vh) — fills the viewport
  // 'massive' → min(98vw, 95vh) — edge-to-edge
  logoSize: 'normal',

  // ◈ Fade-in animation
  fadeIn: true,
  fadeInDuration: 1.2, // seconds

  // ◈ Structured data (JSON-LD for search engines)
  enableStructuredData: true,
  organizationType: 'Organization', // 'Organization', 'LocalBusiness', 'Person'
};
