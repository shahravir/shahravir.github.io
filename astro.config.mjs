import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ravishah.dev",
  trailingSlash: "always",
  build: { format: "directory" },
  markdown: {
    // High-contrast variants keep comments and punctuation above WCAG AA in both themes.
    shikiConfig: { themes: { light: "github-light-high-contrast", dark: "github-dark-high-contrast" } },
  },
});
