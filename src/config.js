// Site Configuration
// Edit these values for each new site deployment

export const config = {
  // ===================
  // REQUIRED - Site Info
  // ===================
  siteName: 'BRAND NAME',
  siteDescription: 'Your brand description',
  siteUrl: 'https://yourdomain.com',

  // ===================
  // OPTIONAL - Analytics
  // ===================
  // Leave as empty string '' to disable any of these
  googleAnalyticsId: '',        // e.g., 'G-XXXXXXXXXX'
  clarityProjectId: '',         // e.g., 'abc123xyz'
  cloudflareAnalyticsToken: '', // e.g., 'abcd1234...'

  // ===================
  // OPTIONAL - Appearance
  // ===================
  backgroundColor: '#000000',
  textColor: '#ffffff',

  // Logo sizing - how much screen real estate?
  // 'normal'  = min(92vw, 80vh) - good for most logos
  // 'large'   = min(95vw, 90vh) - for logos that need more presence
  // 'massive' = min(98vw, 95vh) - edge-to-edge, minimal padding
  logoSize: 'normal',

  // ===================
  // OPTIONAL - Animation
  // ===================
  fadeIn: true,
  fadeInDuration: 1.2, // seconds

  // ===================
  // OPTIONAL - Structured Data
  // ===================
  enableStructuredData: true,
  organizationType: 'Organization', // 'Organization', 'LocalBusiness', 'Person', etc.
};
