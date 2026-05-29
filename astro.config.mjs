import { defineConfig } from "astro/config";

const siteUrl =
  process.env.CF_PAGES_URL ??
  process.env.SITE ??
  (process.env.NODE_ENV === "development" ? "http://127.0.0.1:4321" : "https://sufarwee.github.io/myprofile/");

export default defineConfig({
  output: "static",
  site: siteUrl,
  build: {
    inlineStylesheets: "auto"
  },
  compressHTML: true
});
