import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ravishah.dev",
  trailingSlash: "always",
  build: { format: "directory" },
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
});
