import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://writeups.mouhibmahadbi.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
