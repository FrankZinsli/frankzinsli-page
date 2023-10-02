import { defineConfig, squooshImageService } from 'astro/config';
import prefetch from "@astrojs/prefetch";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  router: 'spa',
  integrations: [prefetch(), vue()],
  image: {
    service: squooshImageService()
  }
});