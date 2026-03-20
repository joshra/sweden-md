import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://joshra.github.io",
  base: "/sweden-md",
  integrations: [sitemap()],
  output: "static"
});
