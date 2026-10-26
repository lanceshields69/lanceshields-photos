// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.lanceshields.com',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
