// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lanceshields69.github.io',
  // GitHub Pages serves at a subpath; Vercel serves at root.
  base: process.env.GH_PAGES ? '/lanceshields-photos' : '/',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
