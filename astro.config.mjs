// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// NOTE: `site` + `base` target GitHub Pages at vibe-tour.github.io/vibe-tour-site.
// When the custom domain (vibetour.dev) is live, set:
//   site: "https://vibetour.dev", base: "/"
// The link helper in src/i18n/utils.ts reads BASE_URL, so links adapt automatically.
export default defineConfig({
  site: "https://vibe-tour.github.io",
  base: "/vibe-tour-site",
  trailingSlash: "ignore",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "my"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [tailwind(), sitemap()],
});
