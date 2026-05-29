import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sufarwee.github.io",
  base: "myprofile",
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
});
