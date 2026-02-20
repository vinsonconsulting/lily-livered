import partytown from '@astrojs/partytown';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
