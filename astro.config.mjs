// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const isRuBuild = process.env.PUBLIC_SITE_DOMAIN === 'whittly.ru';

export default defineConfig({
  site: isRuBuild ? 'https://whittly.ru' : 'https://whittly.dev',
  srcDir: isRuBuild ? './src-ru' : './src',
  outDir: isRuBuild ? './dist-ru' : './dist',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
