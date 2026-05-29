import { absoluteUrl, knowledgeTerms, profile, site, type Locale } from "./profile";

function list(items: readonly string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

function section(title: string, body: string) {
  return `## ${title}\n\n${body}`;
}

export function resumeMarkdown(locale: Locale) {
  const p = profile[locale];
  const links = [
    `- LinkedIn: ${site.linkedin}`,
    `- X: ${site.xProfile}`,
    `- Google Developer: ${site.googleDeveloper}`,
    `- Google Skillshop: ${site.googleSkills}`,
    `- Credential Wallet: ${site.credentials}`
  ].join("\n");

  const story = p.story.map((item) => `### ${item.title}\n\n${item.text}`).join("\n\n");
  const experience = p.experience
    .map((item) => {
      const companyUrl = "companyUrl" in item ? item.companyUrl : undefined;
      const company = companyUrl ? `[${item.company}](${companyUrl})` : item.company;
      return `### ${item.role} | ${company}\n\n${item.period}\n\n${list(item.points)}`;
    })
    .join("\n\n");
  const reviews = p.reviews.map((item) => `- ${item.title}: ${item.quote}`).join("\n");
  const topics = knowledgeTerms.map((term) => `- ${term.name}: ${term.sameAs.join(", ")}`).join("\n");

  return [
    `# ${site.name}`,
    "",
    `> ${p.headline}`,
    "",
    p.description,
    "",
    `Canonical page: ${absoluteUrl(p.url)}`,
    "",
    links,
    "",
    section(p.sectionTitles.story, story),
    section(p.sectionTitles.expertise, list(p.expertise)),
    section(p.sectionTitles.stack, list(p.stack)),
    section(p.sectionTitles.experience, experience),
    section(p.sectionTitles.awards, list(p.awards)),
    section(p.sectionTitles.certifications, list(p.certifications)),
    section(p.sectionTitles.knowledgeGraph, topics),
    section(p.sectionTitles.reviews, reviews),
    section(p.sectionTitles.contact, p.contactNote)
  ].join("\n\n");
}
