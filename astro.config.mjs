// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://argmaxlp.com',
  markdown: {
    shikiConfig: {
      theme: 'vitesse-light',
    },
  },
});
