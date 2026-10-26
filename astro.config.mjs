// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lanceshields69.github.io',
  base: '/lanceshields-photos',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
