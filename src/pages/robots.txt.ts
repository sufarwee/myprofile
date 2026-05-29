import { site } from "../data/profile";

export function GET() {
  return new Response(`User-agent: *
Allow: /

Sitemap: ${site.baseUrl}/sitemap.xml

AI-Readable-Resume: ${site.baseUrl}/reader/
AI-Readable-Resume-Markdown-TH: ${site.baseUrl}/resume.th.md
AI-Readable-Resume-Markdown-EN: ${site.baseUrl}/resume.en.md
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
