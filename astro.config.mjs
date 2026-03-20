import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sweden.com.tw",
  integrations: [sitemap()],
  output: "static"
});
