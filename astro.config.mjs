import { defineConfig } from 'astro/config';

// Uncomment and install @astrojs/sitemap when deploying to production:
// import sitemap from '@astrojs/sitemap';

// Update `site` to match the production URL before deploying.
export default defineConfig({
  site: 'https://www.ejemplo.com',
  integrations: [
    // sitemap(),  // enable when site URL is set to production domain
  ],
  output: 'static',
  build: {
    assets: '_assets',
  },
  server: {
    port: 4321,
    host: true,
    allowedHosts: ['astro-web-template.ddev.site'],
  },
});
