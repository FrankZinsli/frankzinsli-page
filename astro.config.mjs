import { defineConfig, squooshImageService } from 'astro/config';
import prefetch from "@astrojs/prefetch";
import Compress from "astro-compress";
import vue from "@astrojs/vue";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://frankzinsli.ch',
  server: {
    port: 21123
  },
  router: 'spa',
  integrations: [prefetch(), vue(), Compress({
    CSS: true,
    HTML: true,
    JavaScript: false,
    SVG: true,
    Image: true
  }), sitemap({
    changefreq: 'weekly',
    priority: 1,
    lastmod: new Date()
  }), robotsTxt({
    host: 'frankzinsli.ch',
    sitemap: [
      'https://frankzinsli.ch/sitemap-index.xml'
    ],
  })],
  image: {
    service: squooshImageService()
  }
});
