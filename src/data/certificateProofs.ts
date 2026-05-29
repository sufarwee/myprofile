type CategoryKey = "seo" | "sem" | "analytics" | "ai" | "platform";

type CertificateSeed = {
  file: string;
  title: string;
  category: CategoryKey;
};

export type CertificateProof = {
  src: string;
  fullSrc: string;
  alt: string;
  title: string;
  category: string;
  summary: string;
  description: string;
};

const proofBasePath = "/certificates/all";

const certificateSeeds: CertificateSeed[] = [
  { file: "ahrefs-marketing-certification.webp", title: "Ahrefs Marketing Certification", category: "seo" },
  { file: "ai-driven-workflow-optimization.webp", title: "AI Driven Workflow Optimization", category: "ai" },
  { file: "ai-strategies-for-marketing-and-sales.webp", title: "AI Strategies for Marketing and Sales", category: "ai" },
  { file: "ai-visibility-essentials.webp", title: "AI Visibility Essentials", category: "seo" },
  { file: "apple-ads-certification.webp", title: "Apple Ads Certification", category: "sem" },
  { file: "building-a-social-listening-program-with-christina-garnett.webp", title: "Building a Social Listening Program", category: "sem" },
  { file: "chatgpt-for-search-engine-optimization.webp", title: "ChatGPT for Search Engine Optimization", category: "seo" },
  { file: "digital-marketing-for-cxos.webp", title: "Digital Marketing for CXOs", category: "sem" },
  { file: "fundamentals-of-marketing-analytics.webp", title: "Fundamentals of Marketing Analytics", category: "analytics" },
  { file: "get-started-with-databricks-for-data-engineering.webp", title: "Databricks for Data Engineering", category: "platform" },
  { file: "getting-started-with-line-mini-app.webp", title: "Getting Started with LINE MINI App", category: "platform" },
  { file: "google-ads-ai-powered-performance-certification.webp", title: "Google Ads AI-Powered Performance Certification", category: "sem" },
  { file: "google-ads-display-certification.webp", title: "Google Ads Display Certification", category: "sem" },
  { file: "google-ads-measurement-certification.webp", title: "Google Ads Measurement Certification", category: "analytics" },
  { file: "google-ads-search-certification.webp", title: "Google Ads Search Certification", category: "sem" },
  { file: "google-analytics-certification.webp", title: "Google Analytics Certification", category: "analytics" },
  { file: "google-conversion-optimization-certification.webp", title: "Google Conversion Optimization Certification", category: "analytics" },
  { file: "badge-conversion-optimization-badge-certified.webp", title: "Conversion Optimization Badge Certified", category: "analytics" },
  { file: "badge-google-ads-ai-powered-performance-badge-certified.webp", title: "Google Ads AI-Powered Performance Badge Certified", category: "sem" },
  { file: "badge-google-ads-display-badge-certified.webp", title: "Google Ads Display Badge Certified", category: "sem" },
  { file: "badge-google-ads-measurement-badge-certified.webp", title: "Google Ads Measurement Badge Certified", category: "analytics" },
  { file: "badge-google-ads-search-badge-certified.webp", title: "Google Ads Search Badge Certified", category: "sem" },
  { file: "badge-google-analytics-badge-certified.webp", title: "Google Analytics Badge Certified", category: "analytics" },
  { file: "badge-grow-offline-sales-badge-certified.webp", title: "Grow Offline Sales Badge Certified", category: "analytics" },
  { file: "grow-offline-sales-certification.webp", title: "Grow Offline Sales Certification", category: "analytics" },
  { file: "how-to-craft-high-impact-digital-advertising-campaigns-using-semrush.webp", title: "High-Impact Digital Advertising Campaigns", category: "sem" },
  { file: "how-to-incorporate-ppc-into-your-marketing-strategy-for-increased-conversions.webp", title: "PPC Strategy for Increased Conversions", category: "sem" },
  { file: "hubspot-seo-certification.webp", title: "HubSpot SEO Certification", category: "seo" },
  { file: "hubspot-seo-ii-certification.webp", title: "HubSpot SEO II Certification", category: "seo" },
  { file: "ibm-cyber-security-essentials.webp", title: "IBM Cyber Security Essentials", category: "platform" },
  { file: "introduction-to-kubernetes.webp", title: "Introduction to Kubernetes", category: "platform" },
  { file: "introduction-to-website-conversion-rate-optimization.webp", title: "Website Conversion Rate Optimization", category: "analytics" },
  { file: "keyword-research-course.webp", title: "Keyword Research Course", category: "seo" },
  { file: "keyword-research-fundamental.webp", title: "Keyword Research Fundamental", category: "seo" },
  { file: "linkedin-advertising-fundamentals-certification.webp", title: "LinkedIn Advertising Fundamentals Certification", category: "sem" },
  { file: "master-your-brand-voice-workshop.webp", title: "Master Your Brand Voice Workshop", category: "sem" },
  { file: "maximum-roi-with-semrush.webp", title: "Maximum ROI with Semrush", category: "sem" },
  { file: "n8n-course-no-code-ai-agent-builder.webp", title: "n8n No Code AI Agent Builder", category: "ai" },
  { file: "off-page-seo-certificate.webp", title: "Off-Page SEO Certificate", category: "seo" },
  { file: "on-page-and-technical-seo-course.webp", title: "On-Page and Technical SEO Course", category: "seo" },
  { file: "rag-course-for-beginners.webp", title: "RAG Course for Beginners", category: "ai" },
  { file: "semrush-seo-toolkit-course.webp", title: "Semrush SEO Toolkit Course", category: "seo" },
  { file: "seo-content-and-ai-search-essentials.webp", title: "SEO Content and AI Search Essentials", category: "seo" },
  { file: "seo-craft-certificate.webp", title: "SEO Craft Certificate", category: "seo" },
  { file: "seo-essentials-certificate.webp", title: "SEO Essentials Certificate", category: "seo" },
  { file: "technical-seo-and-ai-search-essentials-with-semrush.webp", title: "Technical SEO and AI Search Essentials", category: "seo" }
];

const categoryCopy = {
  th: {
    seo: {
      label: "Technical SEO / AI Search",
      summary: "Technical SEO, Schema, Keyword และ AI Search",
      description: "เกี่ยวกับ technical SEO, keyword research, search visibility, AI Search และการวางระบบให้เว็บไซต์ถูกค้นพบได้ดีขึ้น"
    },
    sem: {
      label: "SEM / Performance Marketing",
      summary: "Paid media, bidding, ROI/ROAS และ conversion",
      description: "เกี่ยวกับ SEM, paid media, campaign planning, bidding, conversion strategy และการปรับ ROI/ROAS"
    },
    analytics: {
      label: "Analytics / Measurement",
      summary: "GA4/GTM, attribution และ conversion signals",
      description: "เกี่ยวกับ analytics, measurement, attribution, conversion signals และการอ่านข้อมูลเพื่อการตัดสินใจ"
    },
    ai: {
      label: "AI / Automation",
      summary: "AI workflow, RAG, automation และ marketing ops",
      description: "เกี่ยวกับ AI workflow, automation, RAG, agentic workflow และการนำ AI ไปใช้กับงาน marketing operations จริง"
    },
    platform: {
      label: "Cloud / Developer Platform",
      summary: "Cloud, security, developer platform และ implementation",
      description: "เกี่ยวกับ developer platform, cloud-native foundation, security, LINE ecosystem และ technical implementation"
    }
  },
  en: {
    seo: {
      label: "Technical SEO / AI Search",
      summary: "Technical SEO, schema, keywords, and AI Search",
      description: "Proof of technical SEO, keyword research, search visibility, AI Search, and systems that help websites become more discoverable."
    },
    sem: {
      label: "SEM / Performance Marketing",
      summary: "Paid media, bidding, ROI/ROAS, and conversion",
      description: "Proof of SEM, paid media, campaign planning, bidding, conversion strategy, and ROI/ROAS optimization capability."
    },
    analytics: {
      label: "Analytics / Measurement",
      summary: "GA4/GTM, attribution, and conversion signals",
      description: "Proof of analytics, measurement, attribution, conversion signals, and data interpretation for decision making."
    },
    ai: {
      label: "AI / Automation",
      summary: "AI workflow, RAG, automation, and marketing ops",
      description: "Proof of AI workflow, automation, RAG, agentic workflow, and practical AI use in marketing operations."
    },
    platform: {
      label: "Cloud / Developer Platform",
      summary: "Cloud, security, developer platform, and implementation",
      description: "Proof of developer platforms, cloud-native foundations, security, LINE ecosystem, and technical implementation."
    }
  }
} as const;

const buildCertificateProofs = (locale: "th" | "en") =>
  certificateSeeds.map((proof) => {
    const copy = categoryCopy[locale][proof.category];

    return {
      src: `${proofBasePath}/thumb/${proof.file}`,
      fullSrc: `${proofBasePath}/full/${proof.file}`,
      alt:
        locale === "th"
          ? `ภาพใบรับรอง ${proof.title} ของ Sufarwee Dunyamat`
          : `Certificate proof for ${proof.title} by Sufarwee Dunyamat`,
      title: proof.title,
      category: copy.label,
      summary: copy.summary,
      description: copy.description
    };
  });

export const certificateProofsTh: CertificateProof[] = buildCertificateProofs("th");
export const certificateProofsEn: CertificateProof[] = buildCertificateProofs("en");
