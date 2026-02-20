import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { config } from './src/config.js';

const hasAnalytics =
  config.googleAnalyticsId || config.clarityProjectId || config.cloudflareAnalyticsToken;

export default defineConfig({
  site: config.siteUrl,
  integrations: [
    sitemap(),
    ...(hasAnalytics
      ? [
          partytown({
            config: {
              forward: ['dataLayer.push'],
            },
          }),
        ]
      : []),
  ],
});
