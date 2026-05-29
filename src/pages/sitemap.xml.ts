import { absoluteUrl, alternateLinks, routeGroups, type RouteGroup } from "../data/profile";

const routeEntries: Array<{ group: RouteGroup; paths: string[] }> = [
  { group: "resume", paths: [routeGroups.resume.th, routeGroups.resume.en] },
  { group: "reader", paths: [routeGroups.reader.th, routeGroups.reader.en] },
  { group: "markdown", paths: [routeGroups.markdown.th, routeGroups.markdown.en] }
];

function hreflangXml(group: RouteGroup) {
  return alternateLinks(group)
    .map((alternate) => `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${alternate.href}" />`)
    .join("\n");
}

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routeEntries
  .flatMap(({ group, paths }) =>
    paths.map(
      (path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
${hreflangXml(group)}
  </url>`
    )
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
