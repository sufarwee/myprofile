import { absoluteUrl, alternateLinks, routeGroups } from "../data/profile";
import { resumeMarkdown } from "../data/reader";

const linkHeader = [
  `<${absoluteUrl(routeGroups.markdown.en)}>; rel="canonical"`,
  ...alternateLinks("markdown").map((alternate) => `<${alternate.href}>; rel="alternate"; hreflang="${alternate.hreflang}"`)
].join(", ");

export function GET() {
  return new Response(resumeMarkdown("en"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Link: linkHeader
    }
  });
}
