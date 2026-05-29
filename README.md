# Sufarwee Dunyamat Static Resume

Astro static resume focused on SEO, schema markup, bilingual content, fast loading and clean tracking integration.

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Edit Content

Most profile content, links, schema fields and tracking IDs live in:

```txt
src/data/profile.ts
```

Change these before production deploy:

```ts
site.baseUrl
site.gtmId
site.gaMeasurementId
site.loadDirectGa
```

If `gtmId` and `gaMeasurementId` still contain `XXXX`, tracking scripts are not loaded. This keeps the local and draft site lightweight.

Recommended setup:

- Put GA4 inside Google Tag Manager and set `gtmId`.
- Keep `loadDirectGa: false` to avoid duplicate page views.
- Set `loadDirectGa: true` only if you intentionally want a direct GA4 snippet in addition to GTM.

## SEO Targets

- Static Astro output
- No external fonts
- Minimal client-side JavaScript
- JSON-LD for `Person`, `ProfilePage`, `WebSite`, `ItemList`, and `BreadcrumbList`
- Thai and English pages with canonical and hreflang tags
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, and SVG favicon included
