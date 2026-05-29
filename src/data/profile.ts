import { certificateProofsEn, certificateProofsTh } from "./certificateProofs";

export type Locale = "th" | "en";
export type RouteGroup = "resume" | "reader" | "markdown";

const resolvedBaseUrl = import.meta.env.DEV
  ? "http://127.0.0.1:4321"
  : "https://sufarwee.github.io/myprofile/";

export const site = {
  name: "Sufarwee Dunyamat",
  siteTitle: "Sufarwee Dunyamat Resume",
  shortName: "Sufarwee SEO",
  brandName: "Sufarwee",
  baseUrl: resolvedBaseUrl,
  linkedin: "https://www.linkedin.com/in/sufarwee/",
  xProfile: "https://x.com/sufarwee",
  googleDeveloper: "https://g.dev/sufarwee",
  googleSkills: "https://www.skills.google/public_profiles/340c5d93-3cfe-40c7-bd06-10df9b9fd215",
  credentials: "https://www.credential.net/profile/sufarwee/wallet",
  hubspotSeo: "https://app-na2.hubspot.com/academy/achievements/ttrj471d/en/1/sufarwee-dunyamat/seo",
  hubspotSeoII: "https://app-na2.hubspot.com/academy/achievements/n6rcbfb0/en/1/sufarwee-dunyamat/seo-ii",
  logoSvg: "/favicon.svg",
  logoPng: "/icon-512.png",
  appleTouchIcon: "/apple-touch-icon.png",
  socialImage: "/og-default.png",
  // ใส่รหัสจริงของคุณตรงนี้: GTM, GA4, Clarity, และ site verification ต่าง ๆ
  gtmId: "GTM-XXXXXXX",
  gaMeasurementId: "G-XXXXXXXXXX",
  clarityProjectId: "",
  hotjarId: "",
  metaPixelId: "",
  googleSiteVerification: "",
  bingSiteVerification: "",
  yandexVerification: "",
  facebookDomainVerification: "",
  loadDirectGa: false
};

export const routeGroups = {
  resume: {
    th: "/",
    en: "/en/",
    xDefault: "/"
  },
  reader: {
    th: "/reader/",
    en: "/en/reader/",
    xDefault: "/reader/"
  },
  markdown: {
    th: "/resume.th.md",
    en: "/resume.en.md",
    xDefault: "/resume.th.md"
  }
} as const;

export const profile = {
  th: {
    lang: "th",
    url: "/",
    alternateUrl: "/en/",
    languageLabel: "EN",
    title: "Sufarwee Dunyamat | SEO Developer, SEM Specialist, AI Automation และ Cloud Server SEO",
    description:
      "Portfolio resume ของ Sufarwee Dunyamat, SEO Developer และ SEO Operation Lead ประสบการณ์ 10-13 ปี รับงาน SEO มืออาชีพ ครอบคลุม Technical SEO, SEM, WordPress, AI Automation, Analytics, Cloud Server, AEO และ AI Visibility.",
    keywords:
      "รับงาน SEO, SEO Developer, SEO Specialist, SEO Consultant, Technical SEO, SEM Specialist, Google Ads Specialist, WordPress SEO Expert, AI SEO, AI Automation, Agentic AI, Vertex AI Agent Builder, n8n, Dify, OpenClaw, Hermes Agent, Papaclip, Cloud Server Optimization, AWS, Google Cloud, DigitalOcean, VPS, Apache, Nginx, OpenLiteSpeed, Dokploy, Coolify, GA4, Google Tag Manager, AI Visibility, AEO, Sufarwee Dunyamat",
    eyebrow: "Software Engineering, Search และ AI ทำงานร่วมกันได้",
    headline: "ผมทำ SEO แบบคนสาย dev ที่เข้าใจเว็บ เซิร์ฟเวอร์ โฆษณา และ AI",
    summary:
      "ผมเริ่มจาก Software Engineering และทำเว็บมาตั้งแต่ยุค webboard, CMS และ PHP ระหว่างเรียน ก่อนจะค่อย ๆ รักงาน search เพราะมันเป็นจุดที่ code, content, data, server และ business เชื่อมกันจริง งาน freelance และงานองค์กรทำให้ผมได้เรียนรู้งานแบบ 0-100 ตั้งแต่ audit เว็บ, WordPress, cloud/VPS, analytics, SEM, organic-paid-offline reporting ไปจนถึง AI workflow โดยรักษาความลับของข้อมูลลูกค้าและองค์กรเสมอ.",
    primaryCta: "ดู LinkedIn",
    secondaryCta: "Google Developer Profile",
    years: "10-13 ปี",
    seoLabel: "SEO Experience",
    speedLabel: "Target Performance",
    speedValue: "PSI 90+ / GTmetrix A",
    cloudLabel: "Server + Cloud",
    cloudValue: "AWS, GCP, DigitalOcean, VPS 0-100%",
    nav: ["โปรไฟล์", "เรื่องราว", "ทักษะ", "บริการ", "ประสบการณ์", "รางวัล", "ใบรับรอง", "รีวิว"],
    sectionTitles: {
      story: "Career Narrative",
      expertise: "Core Expertise",
      services: "What I Can Help With",
      stack: "Tools & Platforms",
      experience: "Recent Experience",
      awards: "Awards & Recognition",
      certifications: "Selected Certifications",
      knowledgeGraph: "Knowledge Graph Signals",
      reviews: "Review Signals",
      contact: "Contact & Profiles"
    },
    sectionHeadlines: {
      story: "จากนักพัฒนาซอฟต์แวร์สู่คนทำ SEO ที่คุยกับ dev และธุรกิจรู้เรื่อง",
      expertise: "SEO, SEM, AI automation, analytics และ cloud server ในระบบเดียว",
      services: "ผมถนัดงาน audit, จัดระเบียบ และหาจุดที่ทำให้ search โตได้จริง",
      stack: "เครื่องมือที่ใช้ครอบคลุม organic, paid, AI, data และ production",
      experience: "เส้นทางจากงานระบบไปสู่งาน search, growth และ performance",
      awards: "รางวัลและกิจกรรมที่สะท้อนพื้นฐาน startup, software และ community",
      certifications: "หลักฐาน certificate จริงสำหรับ SEO, paid media, analytics, cloud และ AI",
      knowledgeGraph: "หัวข้อความเชี่ยวชาญที่ช่วยให้ search engines เข้าใจบริบทของผม",
      reviews: "5 มุมที่คนมักเห็นเวลาผมเข้าไปช่วยดูเว็บหรือวางระบบ search"
    },
    story: [
      {
        label: "Software Engineering",
        title: "เริ่มจากการสร้างระบบจริง",
        text: "พื้นฐานของผมคือ Software Engineering จาก Prince of Songkla University, Phuket Campus ผ่านงาน PHP, Java, GWT, WordPress, network, cloud server และ documentation ในโครงการ 1000 Developer."
      },
      {
        label: "Student / Freelance Era",
        title: "ทำงานจริงตั้งแต่ยุค webboard, CMS และ PHP",
        text: "ระหว่างเรียนผมรับงาน webboard, web CMS, PHP, graphic, IT HelpDesk, mail server, network field work และเคยสร้างระบบ authentication สำหรับแมนชั่นที่ต้องกรอกรหัสใช้งาน พร้อมแนวทางป้องกัน NetCut ในยุคนั้น."
      },
      {
        label: "Production Infrastructure",
        title: "เรียนรู้ 0-100 จากงานที่ต้องรับผิดชอบจริง",
        text: "งาน freelance และงานองค์กรทำให้ได้จับตั้งแต่ OS, DNS, SSL, VPS, AWS, Google Cloud, DigitalOcean, backup/NAS, log file, antivirus update, cache, CDN และการดูแลระบบ production ที่ต้องใช้งานได้จริง."
      },
      {
        label: "Marketing Discovery",
        title: "พบว่า marketing คือระบบข้อมูลอีกแบบหนึ่ง",
        text: "ช่วงทำเว็บ ระบบโรงแรม และ campaign tracking ทำให้เห็นว่า SEO/SEM ไม่ใช่แค่ traffic แต่คือระบบวัดผล ทดลอง และแปลงข้อมูล organic, paid และ offline signal ให้เป็นโอกาสทางธุรกิจ."
      },
      {
        label: "SEO Operations",
        title: "กลายเป็น SEO Expert / SEO Operation Lead",
        text: "จุดแข็งของผมคือทำได้ทั้ง strategy และ execution: competitor set, keyword value, schema, PageSpeed, analytics QA และ AI visibility."
      }
    ],
    expertise: [
      "Technical SEO, semantic structure, schema markup, indexation และ crawl optimization",
      "SEO Developer workflow: WordPress, frontend, backend, performance, Core Web Vitals",
      "Cloud/VPS setup ตั้งแต่ 0-100%: OS, DNS, SSL, Apache, Nginx, OpenLiteSpeed, Dokploy, Coolify, caching และ security baseline",
      "SEM และ paid acquisition บน Google Ads, Meta (Facebook/Instagram), LINE Ads, TikTok Ads, Bing, Yandex, Apple Ads และประสบการณ์ Naver ในอดีต",
      "Facebook/Meta ecosystem experience ตั้งแต่ยุคเริ่มต้น ทั้ง organic behavior, page growth และ paid media context รวมถึงการทำงานกับ Meta Ads จริง",
      "GTM, GA4, UTM, Matomo (Piwik), PostHog, Microsoft Clarity, Hotjar, OpenReplay, reporting, O2O/online-to-offline measurement และ dashboard logic",
      "O2O และข้อมูลที่เปิดเผยไม่ได้: รวม organic, paid และ offline data ให้เป็น report ที่ใช้ตัดสินใจได้ พร้อมรักษา confidentiality ขององค์กรและลูกค้า",
      "Competitor analysis, SERP tracking, link building, content gap, AI visibility และ AEO strategy",
      "Agentic AI, Vertex AI Agent Builder, n8n, Dify, OpenClaw, Hermes Agent, Papaclip, RAG, workflow automation และ AI-assisted research",
      "Leadership และ SEO Operation: วาง workflow, KPI/OKR, scorecard, task ownership, QA cadence และ reporting rhythm ให้ทีมทำงานต่อได้จริง",
      "Cross-functional communication: แปลโจทย์จากเจ้าของธุรกิจ, marketing, content, designer และ developer ให้กลายเป็น action plan เดียวกัน",
      "Google Developer และ LINE Developer mindset: เข้าใจ ecosystem, platform workflow, integration และ technical documentation",
      "สนใจประวัติศาสตร์และศาสตร์หลายแขนง ทำให้มอง search, market, behavior และ technology เป็นระบบที่เชื่อมโยงกัน",
      "รับงาน SEO มืออาชีพสำหรับธุรกิจที่ต้องการคนทำได้ทั้ง strategy, execution, developer handoff และ server performance"
    ],
    services: [
      {
        title: "SEO Website Audit",
        text: "ตรวจโครงสร้างเว็บ, indexation, crawl path, schema, internal links, Core Web Vitals, rendering, server behavior และจุดเสี่ยงที่ทำให้ organic growth โตช้ากว่าที่ควร"
      },
      {
        title: "Business + Website Analysis",
        text: "ดูเว็บพร้อมบริบทธุรกิจจริง ไม่แยก SEO ออกจากสินค้า บริการ funnel conversion และความพร้อมของทีม เพื่อหาว่าควรแก้อะไรก่อนหลัง"
      },
      {
        title: "Competitor Intelligence",
        text: "หา competitor set, SERP pattern, content gap, paid overlap, link signals, offer positioning และช่องที่คู่แข่งยังไม่แข็งพอให้เราใช้เป็น growth angle"
      },
      {
        title: "SEM Audit and Search Growth Planning",
        text: "ช่วยดู Google Ads, Meta Ads, LINE Ads และ TikTok Ads ทั้งในมุม account structure, query or audience intent, landing page fit, tracking quality, wasted spend และความสัมพันธ์ระหว่าง organic กับ paid"
      },
      {
        title: "WordPress, CMS and Technical Fix Direction",
        text: "เหมาะกับเว็บ WordPress, Joomla, Drupal, Magento, Wix, Squarespace หรือ custom stack ที่ต้องการคนช่วยแปลปัญหา SEO เป็น task ที่ dev และ owner เอาไปทำต่อได้จริง"
      },
      {
        title: "AI Workflow for Search Teams",
        text: "วางการใช้ AI แบบใช้งานจริงทั้ง research, clustering, content support, reporting, QA และ automation โดยใช้ Vertex AI Agent Builder, n8n และ Dify เป็นตัวช่วย ไม่ใช่ปล่อยให้ agent mode ทำงานแทนคนทั้งหมด"
      }
    ],
    stack: [
      "SEMrush",
      "Ahrefs",
      "Moz",
      "SE Ranking",
      "WebCEO",
      "HubSpot",
      "Google Search Console",
      "GA4",
      "Google Tag Manager",
      "UTM Governance",
      "Matomo (Piwik)",
      "PostHog",
      "Microsoft Clarity",
      "Hotjar",
      "OpenReplay",
      "O2O Reporting",
      "Google Ads",
      "Meta Ads",
      "Instagram Ads",
      "LINE Ads",
      "TikTok Ads",
      "Facebook Pages",
      "Google Developer Profile",
      "LINE Developer",
      "WordPress",
      "Joomla",
      "Drupal",
      "Magento",
      "Wix",
      "Squarespace",
      "Next.js",
      "Nuxt",
      "Express.js",
      "AWS",
      "Google Cloud",
      "DigitalOcean",
      "VPS/Linux",
      "DNS",
      "SSL",
      "CDN",
      "Mail Server",
      "NAS Backup",
      "Log File Analysis",
      "Apache",
      "Nginx",
      "OpenLiteSpeed",
      "Dokploy",
      "Coolify",
      "n8n",
      "Dify",
      "OpenClaw",
      "Hermes Agent",
      "Papaclip",
      "Gemini",
      "Claude",
      "ChatGPT",
      "Qwen",
      "Manus AI",
      "MiniMax",
      "Kimi",
      "DeepSeek",
      "Grok",
      "GLM",
      "Firebase Studio",
      "Vertex AI",
      "Vertex AI Agent Builder",
      "Vercel",
      "Cursor",
      "Cline",
      "Stable Diffusion",
      "RAG",
      "Databricks",
      "Kubernetes"
    ],
    experience: [
      {
        role: "Digital Marketing, SEO/SEM/SMO",
        company: "Yongsingeyia, now Crown Construction",
        period: "2024 - ปัจจุบัน",
        points: [
          "ดูแล SEO, SEM และ SMO เพื่อรวมภาพ organic, paid และ conversion data เข้าสู่การตัดสินใจ",
          "วิเคราะห์ keyword, competitor set, SERP movement, technical issues และโอกาสด้าน AI visibility",
          "ออกแบบ measurement ด้วย GTM, GA4, UTM และ reporting เพื่อเชื่อม performance กับ business outcome"
        ]
      },
      {
        role: "SEO Developer / Digital Growth",
        company: "Chao Phraya Architech และ Boonbundan group",
        period: "ช่วงล่าสุด / project-based",
        points: [
          "ทำงาน SEO และ technical optimization ทั้งฝั่งเว็บไซต์, WordPress, frontend/backend และ server",
          "ปรับความเร็วเว็บไซต์และ cloud/server stack ให้เหมาะกับ PageSpeed, Core Web Vitals และ production reliability",
          "ช่วยมองภาพ search, content, tracking และ website infrastructure ให้เป็น action plan ที่ทีมทำต่อได้"
        ]
      },
      {
        role: "Digital Marketing & SEO Specialist",
        company: "JINGLEBUILE Co., Ltd.",
        period: "04 Dec 2020 - May 2021",
        points: [
          "ดูแล digital marketing และ SEO เพื่อพัฒนา organic visibility, keyword direction และโครงสร้างเว็บไซต์ให้รองรับการเติบโต",
          "ทำงานร่วมกับ campaign, content, tracking และ performance signals เพื่อเชื่อม SEO กับผลลัพธ์ทางธุรกิจ",
          "ช่วยตรวจประเด็น technical SEO, on-page SEO และ reporting ที่ทีมสามารถนำไปปรับปรุงต่อได้"
        ]
      },
      {
        role: "SEO / SEM / Developer Consultant",
        company: "Freelance / Business Owner",
        period: "2017 - ปัจจุบัน",
        points: [
          "รับงาน SEO, SEM, Analytics, Web Development และ Server Optimization โดยเชื่อม organic, paid และ offline data เป็นรายงาน O2O",
          "เรียนรู้งานแบบ 0-100 ตั้งแต่ audit, information architecture, WordPress/CMS, server, cache, tracking, report และ handoff ให้ทีม",
          "งานบางส่วนเป็นข้อมูลภายในองค์กร จึงเล่าเป็น capability และ process มากกว่าการเปิดเผยชื่อ project"
        ]
      },
      {
        role: "Developer & Digital Marketing (SEO/SEM)",
        company: "NEBSLY Media UK / Thailand",
        companyUrl: "https://www.linkedin.com/showcase/nebslymediaasia/about/",
        period: "หลังออกจาก Sri panwa / ก่อน JINGLEBUILE",
        points: [
          "ทำงานด้าน SEO และ SEM หลังออกจาก Sri panwa โดยต่อยอดจากประสบการณ์ search, ads และ website operations ในระดับโรงแรม/หลายเว็บไซต์",
          "NEBSLY Media ก่อตั้งที่ประเทศอังกฤษและทำงานกับหลายประเทศ เช่น สหรัฐอเมริกา สิงคโปร์ และเยอรมนี รวมถึงมีการก่อตั้งในประเทศไทยที่กรุงเทพฯ โดยช่วงนั้นผมทำงานแบบ WFH จากภูเก็ต",
          "ดูแล analytics QA, campaign tracking และ performance reporting เพื่อให้ทีมเห็นความเชื่อมโยงของ organic, paid และ conversion",
          "ทำงานกับ Google Ads, Meta channels, search analytics และการปรับปรุงเว็บไซต์เชิงเทคนิคเพื่อสนับสนุน acquisition"
        ]
      },
      {
        role: "Business Development (IT)",
        company: "Sri panwa Phuket",
        period: "2014 - 2017",
        points: [
          "ดูแล web development และ digital marketing ผ่าน WordPress, EC-Cube, OpenCart, PrestaShop, HTML5, JavaScript และ PHP",
          "ดูแล Google Search Console, Google AdWords, Yandex, Bing, Facebook, Instagram และ Naver ในอดีต พร้อม custom tracking ผ่าน GTM, Analytics และ webmaster tools",
          "ใช้ Baidu เป็นแหล่งช่วยสรุปและวิเคราะห์เพิ่มเติม ไม่ใช่ช่องทางหลักของ campaign",
          "สนับสนุน AWS, Google Cloud, CentOS server operation และระบบโรงแรม เช่น Opera และ MICROS"
        ]
      },
      {
        role: "Startup / Software Product Project",
        company: "SchoolOS, Echelon Thailand Phuket และ SIPA software community",
        period: "2013 - 2014",
        points: [
          "ร่วมทำ software product และ startup project ที่ต่อยอดจากพื้นฐาน software engineering, web application และระบบโรงเรียน",
          "SchoolOS ได้รางวัล Winner และ People's Choice ใน Echelon Thailand Phuket 2014 และมี coverage จากสื่อด้าน startup",
          "ประสบการณ์ช่วงนี้ทำให้มอง SEO และ marketing ในมุม product, user, data และ growth มากขึ้น"
        ]
      },
      {
        role: "Programmer & System Analyst",
        company: "Intelligent Enterprise Software Co., Ltd.",
        period: "2012 - 2013",
        points: [
          "พัฒนา web application ด้วย Java, GWT, PHP, WordPress และ JavaScript",
          "ตั้งค่าและ optimize cloud server ด้วย Nginx, Apache และ Jetty",
          "ทำงานกับระบบ production, documentation และการแก้ปัญหาเชิงเทคนิคที่ต้องส่งต่อให้ทีมเข้าใจ"
        ]
      },
      {
        role: "Early Technical Roles",
        company: "Freelance, Easy Branches, PSU Phuket / SIPA 1000 Developer Project",
        period: "2009 - 2012",
        points: [
          "รับงาน webboard, web CMS, PHP, graphic support และ IT HelpDesk ระหว่างเรียน พร้อมแก้ปัญหา OS, data recovery และ user support",
          "ทำ network system, WiFi hotspot/authentication, ระบบกรอกรหัสสำหรับแมนชั่น, CCTV, LAN/WLAN, mail server และ cloud/server support",
          "ทำ software engineering documentation และ PHP development ผ่านโครงการ PSU Phuket และ SIPA Phuket 1000 Developer"
        ]
      },
      {
        role: "Instructor, Business Computer",
        company: "วิทยาลัยพาณิชยการมูฮัมมาดีย์ สะบ้าย้อย",
        period: "งานสอน / ปัจจุบัน",
        points: [
          "สอนสายคอมพิวเตอร์ธุรกิจ ครอบคลุมทักษะ digital, data, website และการประยุกต์ใช้เครื่องมือสมัยใหม่",
          "เชื่อมประสบการณ์จริงจาก SEO, marketing analytics และ automation เข้ากับการเรียนการสอน"
        ]
      },
      {
        role: "Project Instructor, Science and Technology",
        company: "โรงเรียนอิสลามวิทยามูลนิธิ สะบ้าย้อย ห้องพิเศษ",
        period: "งานสอน / ปัจจุบัน",
        points: [
          "ดูแลการสอน project ด้านวิทยาศาสตร์และเทคโนโลยี เน้นการคิดวิเคราะห์ การทดลอง และการนำเสนอผลงาน",
          "ใช้แนวคิด data, research และ AI-assisted learning เพื่อช่วยให้นักเรียนพัฒนา project ได้เป็นระบบ"
        ]
      }
    ],
    awards: [
      "Echelon Thailand Phuket 2014: Winner Award และ People's Choice ใน international startup program",
      "Award เซียนซอฟแวร์ ซอฟต์แวร์ตีแตก: อันดับ 3",
      "Asian Software Expo 2013, Queen Sirikit National Convention Center Bangkok",
      "Network Security 4 Contest 2009, Southern Part และ Ambassadors Telecommunications 2009"
    ],
    certifications: [
      "Ahrefs Marketing Platform",
      "HubSpot SEO และ HubSpot SEO II",
      "SEMrush SEO Toolkit, Technical SEO and AI Search, AI Visibility, On-Page, Off-Page, Keyword Research",
      "Google Ads Search, Display, Measurement, Conversion Optimization, AI-Powered Performance และ Grow Offline Sales",
      "Google Analytics, Apple Ads, LinkedIn Advertising Fundamentals",
      "n8n AI Agent Builder, RAG, ChatGPT for SEO, AI Workflow Optimization, Databricks, Kubernetes, LINE MINI App"
    ],
    certificateLogos: [],
    certificateProviders: ["Google", "SEMrush", "HubSpot", "Ahrefs", "IBM", "Databricks", "LinkedIn", "Apple Ads", "n8n", "Simplilearn", "LINE"],
    certificateCatalog: [
      {
        title: "Search, SEO และ AI Search",
        items: [
          "Ahrefs Marketing Platform",
          "HubSpot SEO",
          "HubSpot SEO II",
          "SEMrush SEO Toolkit Crash Course",
          "SEMrush SEO Essentials",
          "SEMrush Technical SEO and AI Search Essentials",
          "SEMrush AI Visibility Essentials",
          "SEMrush On-Page SEO and AI Search Essentials",
          "SEMrush Off-Page SEO and AI Search Essentials",
          "SEMrush Keyword Research Essentials",
          "SEMrush Content Marketing Essentials for SEO and AI Search",
          "ChatGPT for Search Engine Optimization"
        ]
      },
      {
        title: "SEM, Ads และ Analytics",
        items: [
          "Google Ads Search",
          "Google Ads Display",
          "Google Ads Measurement",
          "Google Ads Conversion Optimization",
          "Google Ads AI-Powered Performance",
          "Grow Offline Sales",
          "Google Analytics",
          "Apple Ads Certification",
          "LinkedIn Advertising Fundamentals"
        ]
      },
      {
        title: "AI Workflow และ Automation",
        items: [
          "n8n AI Agent Builder",
          "RAG Course for Beginners",
          "AI Driven Workflow Optimization",
          "AI Strategies for Marketing and Sales"
        ]
      },
      {
        title: "Cloud, Data และ Technical Systems",
        items: [
          "Databricks for Data Engineering",
          "Kubernetes Certified",
          "LINE MINI App Open Access Academy"
        ]
      },
      {
        title: "Marketing, CRO และ Growth",
        items: [
          "CRO Website Conversion Rate Optimization",
          "Digital Marketing for CXOs",
          "Digital Marketing Keyword Research Fundamental",
          "SEMrush Fundamentals of Marketing Analytics",
          "SEMrush Maximizing ROI through Marketing Analytics",
          "SEMrush Master Your Brand Voice",
          "SEMrush Crafting a Winning SEO Strategy: A Guide for In-House Marketers",
          "SEMrush How to Craft High-Impact Digital Advertising Campaigns Using Semrush",
          "SEMrush Building a Social Listening Program with Christina Garnett",
          "SEMrush How to Incorporate PPC Into Your Marketing Strategy for Increased Conversions"
        ]
      }
    ],
    certificateImages: certificateProofsTh,
    reviews: [
      {
        title: "Technical SEO + Developer Mindset",
        quote: "มองปัญหา SEO ลึกถึงโครงเว็บ ความเร็ว server และ data layer ไม่หยุดแค่ keyword หรือ content."
      },
      {
        title: "Performance Score ตรวจสอบได้จริง",
        quote: "Optimize Performance Score A\nปรับเว็บให้แตะ Google PageSpeed Insights 90+ หรือ GTmetrix A Score โดยออกแบบตั้งแต่ code, cache, server และ tracking ให้ตรวจสอบผลได้จริง."
      },
      {
        title: "Competitor Intelligence",
        quote: "หา gap จากคู่แข่งได้ไว ทั้ง SERP, content, link profile, visibility และ conversion path."
      },
      {
        title: "AI + Automation",
        quote: "ใช้ Agentic AI, n8n และ RAG เพื่อเร่ง research, workflow และ visibility planning."
      },
      {
        title: "Teaching and Communication",
        quote: "อธิบายเรื่อง technical ให้คนที่ไม่ใช่สาย dev เข้าใจและเอาไปใช้งานต่อได้."
      }
    ],
    contactNote: "เหมาะกับงานที่ต้องการคนดูได้ทั้ง SEO, SEM, WordPress, server, analytics, competitor set, Google Ads, Meta Ads, LINE Ads, TikTok Ads และ AI workflow โดยยังคุยกับทีม dev และทีมการตลาดได้ลื่น"
  },
  en: {
    lang: "en",
    url: "/en/",
    alternateUrl: "/",
    languageLabel: "TH",
    title: "Sufarwee Dunyamat | SEO Developer, SEM Specialist, AI Automation and Cloud Server SEO",
    description:
      "Portfolio resume for Sufarwee Dunyamat, a professional SEO Developer and SEO Operation Lead with 10-13 years across Technical SEO, SEM, WordPress, AI Automation, Analytics, Cloud Server, AEO and AI Visibility.",
    keywords:
      "SEO Developer for hire, SEO Specialist, SEO Consultant, Technical SEO, SEM Specialist, Google Ads Specialist, WordPress SEO Expert, AI SEO, AI Automation, Agentic AI, Vertex AI Agent Builder, n8n, Dify, OpenClaw, Hermes Agent, Papaclip, Cloud Server Optimization, AWS, Google Cloud, DigitalOcean, VPS, Apache, Nginx, OpenLiteSpeed, Dokploy, Coolify, GA4, Google Tag Manager, AI Visibility, AEO, Sufarwee Dunyamat",
    eyebrow: "Software engineering, search systems, and AI working together",
    headline: "A developer-minded SEO lead who understands websites, servers, paid media, and AI",
    summary:
      "I started in software engineering and web development during the webboard, CMS, and PHP era while still studying, then moved deeper into search because SEO is one of the few disciplines where code, content, data, servers, and business outcomes genuinely meet. Freelance and organizational work taught me the full 0-100 cycle: website audits, WordPress, cloud/VPS, analytics, SEM, organic-paid-offline reporting, and AI workflows, while keeping client and internal business data confidential.",
    primaryCta: "View LinkedIn",
    secondaryCta: "Google Developer Profile",
    years: "10-13 years",
    seoLabel: "SEO Experience",
    speedLabel: "Target Performance",
    speedValue: "PSI 90+ / GTmetrix A",
    cloudLabel: "Server + Cloud",
    cloudValue: "AWS, GCP, DigitalOcean, VPS 0-100%",
    nav: ["Profile", "Story", "Skills", "Services", "Experience", "Awards", "Certifications", "Reviews"],
    sectionTitles: {
      story: "Career Narrative",
      expertise: "Core Expertise",
      services: "Service Focus",
      stack: "Tools & Platforms",
      experience: "Recent Experience",
      awards: "Awards & Recognition",
      certifications: "Selected Certifications",
      knowledgeGraph: "Knowledge Graph Signals",
      reviews: "Review Signals",
      contact: "Contact & Profiles"
    },
    sectionHeadlines: {
      story: "A path from software engineering into SEO with enough depth to work across product, development, and growth teams",
      expertise: "SEO Developer, SEM, AI automation, analytics and cloud server execution in one operating system",
      services: "The work that fits me best is stepping into a site, auditing the system, and finding where search and business performance can improve together",
      stack: "Tools used across organic, paid, AI, data and production systems",
      experience: "Experience that gradually moved from systems work into search, growth, and performance operations",
      awards: "Awards and activities reflecting startup, software and community roots",
      certifications: "Real certificate proof for SEO, paid media, analytics, cloud and AI workflows",
      knowledgeGraph: "Expertise topics mapped to public entities so search engines understand context",
      reviews: "Five qualities people usually notice when I step into a search or performance project"
    },
    story: [
      {
        label: "Software Engineering",
        title: "Started by building real systems",
        text: "My foundation is Software Engineering from Prince of Songkla University, Phuket Campus, with early work in PHP, Java, GWT, WordPress, networking, cloud servers and documentation through the 1000 Developer Project."
      },
      {
        label: "Student / Freelance Era",
        title: "Real work started in the webboard, CMS, and PHP era",
        text: "While studying, I worked on webboards, web CMS projects, PHP websites, basic graphics, IT HelpDesk, mail servers, network field work, and a mansion authentication system that required user codes and helped reduce NetCut-style abuse."
      },
      {
        label: "Production Infrastructure",
        title: "Learned the 0-100 cycle through hands-on responsibility",
        text: "Freelance and organizational projects put me close to OS setup, DNS, SSL, VPS, AWS, Google Cloud, DigitalOcean, backup/NAS, log files, antivirus updates, cache, CDN, and production systems that had to keep working."
      },
      {
        label: "Marketing Discovery",
        title: "Marketing became another kind of data system",
        text: "While building websites, hotel systems and campaign tracking, I learned that SEO/SEM is not only traffic. It is hypothesis, measurement, iteration, and turning organic, paid, and offline signals into business growth."
      },
      {
        label: "SEO Operations",
        title: "Became an SEO Expert / SEO Operation Lead",
        text: "My strength is combining strategy and execution: competitor sets, keyword value, task ownership, KPI/OKR, schema, PageSpeed, link building, analytics QA and AI visibility."
      }
    ],
    expertise: [
      "Technical SEO, semantic structure, schema markup, indexation and crawl optimization",
      "SEO Developer workflow: WordPress, frontend, backend, performance and Core Web Vitals",
      "Cloud/VPS setup from 0-100%: OS, DNS, SSL, Apache, Nginx, OpenLiteSpeed, Dokploy, Coolify, caching and security baseline",
      "SEM and paid acquisition across Google Ads, Meta (Facebook/Instagram), LINE Ads, TikTok Ads, Bing, Yandex, Apple Ads and past Naver experience",
      "Facebook/Meta ecosystem experience from the early platform era across organic behavior, page growth, and real paid media execution",
      "GTM, GA4, UTM, Matomo (Piwik), PostHog, Microsoft Clarity, Hotjar, OpenReplay, reporting, online-to-offline measurement and dashboard logic",
      "O2O and confidential data handling: turning organic, paid and offline data into useful reports while protecting client and internal business information",
      "Competitor analysis, SERP tracking, link building, content gap, AI visibility and AEO strategy",
      "Agentic AI, Vertex AI Agent Builder, n8n, Dify, OpenClaw, Hermes Agent, Papaclip, RAG, workflow automation and AI-assisted research",
      "Leadership and SEO operations: workflow design, KPI/OKR scorecards, task ownership, QA cadence and reporting rhythm for teams that need clarity",
      "Cross-functional communication: translating business, marketing, content, design and developer needs into one practical action plan",
      "Google Developer and LINE Developer mindset: ecosystem understanding, platform workflow, integrations and technical documentation",
      "A personal interest in history and multiple fields of knowledge, which helps me read search, markets, behavior and technology as connected systems",
      "Professional SEO work for businesses that need strategy, execution, developer handoff and server performance in one operator"
    ],
    services: [
      {
        title: "SEO Website Audit",
        text: "Review site structure, indexation, crawl path, schema, internal linking, Core Web Vitals, rendering behavior, and server-side issues that slow organic growth."
      },
      {
        title: "Business and Website Analysis",
        text: "Look at the website together with the real business context so SEO decisions match products, services, conversion flow, team readiness, and execution constraints."
      },
      {
        title: "Competitor Intelligence",
        text: "Build a realistic competitor set, inspect SERP patterns, content gaps, paid overlap, link signals, and positioning opportunities that competitors are still leaving open."
      },
      {
        title: "SEM Audit and Search Growth Planning",
        text: "Audit Google Ads, Meta Ads, LINE Ads, and TikTok Ads with attention to account structure, query or audience intent, landing page fit, tracking quality, wasted spend, and the relationship between organic and paid search."
      },
      {
        title: "WordPress, CMS and Technical Fix Direction",
        text: "Useful for WordPress, Joomla, Drupal, Magento, Wix, Squarespace, and custom stacks when SEO findings need to become clean technical tasks for developers and owners."
      },
      {
        title: "AI Workflow for Search Teams",
        text: "Design practical AI usage across research, clustering, content support, reporting, QA, and automation using Vertex AI Agent Builder, n8n, and Dify as helpers rather than pretending agent mode should replace human judgment."
      }
    ],
    stack: [
      "SEMrush",
      "Ahrefs",
      "Moz",
      "SE Ranking",
      "WebCEO",
      "HubSpot",
      "Google Search Console",
      "GA4",
      "Google Tag Manager",
      "UTM Governance",
      "Matomo (Piwik)",
      "PostHog",
      "Microsoft Clarity",
      "Hotjar",
      "OpenReplay",
      "O2O Reporting",
      "Google Ads",
      "Meta Ads",
      "Instagram Ads",
      "LINE Ads",
      "TikTok Ads",
      "Facebook Pages",
      "Google Developer Profile",
      "LINE Developer",
      "WordPress",
      "Joomla",
      "Drupal",
      "Magento",
      "Wix",
      "Squarespace",
      "Next.js",
      "Nuxt",
      "Express.js",
      "AWS",
      "Google Cloud",
      "DigitalOcean",
      "VPS/Linux",
      "DNS",
      "SSL",
      "CDN",
      "Mail Server",
      "NAS Backup",
      "Log File Analysis",
      "Apache",
      "Nginx",
      "OpenLiteSpeed",
      "Dokploy",
      "Coolify",
      "n8n",
      "Dify",
      "OpenClaw",
      "Hermes Agent",
      "Papaclip",
      "Gemini",
      "Claude",
      "ChatGPT",
      "Qwen",
      "Manus AI",
      "MiniMax",
      "Kimi",
      "DeepSeek",
      "Grok",
      "GLM",
      "Firebase Studio",
      "Vertex AI",
      "Vertex AI Agent Builder",
      "Vercel",
      "Cursor",
      "Cline",
      "Stable Diffusion",
      "RAG",
      "Databricks",
      "Kubernetes"
    ],
    experience: [
      {
        role: "Digital Marketing, SEO/SEM/SMO",
        company: "Yongsingeyia, now Crown Construction",
        period: "2024 - Present",
        points: [
          "Manage SEO, SEM and SMO while combining organic, paid and conversion data into business decisions",
          "Analyze keywords, competitor sets, SERP movement, technical issues and AI visibility opportunities",
          "Design measurement with GTM, GA4, UTM and reporting to connect performance with business outcomes"
        ]
      },
      {
        role: "SEO Developer / Digital Growth",
        company: "Chao Phraya Architech and Boonbundan group",
        period: "Recent / project-based",
        points: [
          "Handled SEO and technical optimization across websites, WordPress, frontend/backend and server layers",
          "Improved site speed and cloud/server stack for PageSpeed, Core Web Vitals and production reliability",
          "Translated search, content, tracking and website infrastructure issues into action plans teams could execute"
        ]
      },
      {
        role: "Digital Marketing & SEO Specialist",
        company: "JINGLEBUILE Co., Ltd.",
        period: "04 Dec 2020 - May 2021",
        points: [
          "Handled digital marketing and SEO work to improve organic visibility, keyword direction and website structure for growth",
          "Connected campaign, content, tracking and performance signals so SEO activity could support business outcomes",
          "Reviewed technical SEO, on-page SEO and reporting issues that the team could continue improving"
        ]
      },
      {
        role: "SEO / SEM / Developer Consultant",
        company: "Freelance / Business Owner",
        period: "2017 - Present",
        points: [
          "Led SEO, paid media, analytics, web development and server optimization while joining organic, paid and offline data into practical O2O reporting",
          "Learned projects from 0-100 across audits, information architecture, WordPress/CMS, servers, caching, tracking, reporting and team handoff",
          "Some work is bound by client or organizational confidentiality, so the public profile focuses on capability, process and outcomes rather than private project details"
        ]
      },
      {
        role: "Developer & Digital Marketing (SEO/SEM)",
        company: "NEBSLY Media UK / Thailand",
        companyUrl: "https://www.linkedin.com/showcase/nebslymediaasia/about/",
        period: "After Sri panwa / before JINGLEBUILE",
        points: [
          "Worked on SEO and SEM after leaving Sri panwa, building on search, advertising and website operations experience across hotel-scale and multi-site environments",
          "NEBSLY Media was founded in the UK and worked across multiple markets including the United States, Singapore and Germany, with a Thailand company presence in Bangkok; I worked remotely from Phuket during that period",
          "Handled analytics QA, campaign tracking and performance reporting so teams could connect organic, paid and conversion signals",
          "Worked across Google Ads, Meta channels, search analytics and technical website improvements to support acquisition"
        ]
      },
      {
        role: "Business Development (IT)",
        company: "Sri panwa Phuket",
        period: "2014 - 2017",
        points: [
          "Owned web development and digital marketing across WordPress, EC-Cube, OpenCart, PrestaShop, HTML5, JavaScript and PHP",
          "Managed Google Search Console, Google AdWords, Yandex, Bing, Facebook, Instagram and past Naver activity with custom tracking through GTM, Analytics and webmaster tools",
          "Used Baidu as an additional research, summarization and analysis helper rather than a primary campaign channel",
          "Supported AWS, Google Cloud, CentOS server operations and hotel software workflows including Opera and MICROS systems"
        ]
      },
      {
        role: "Startup / Software Product Project",
        company: "SchoolOS, Echelon Thailand Phuket and SIPA software community",
        period: "2013 - 2014",
        points: [
          "Worked on software product and startup execution built from software engineering, web application and school management system foundations",
          "SchoolOS won Winner and People's Choice recognition at Echelon Thailand Phuket 2014 with startup media coverage",
          "This period shaped the way I connect SEO and marketing with product, users, data and growth"
        ]
      },
      {
        role: "Programmer & System Analyst",
        company: "Intelligent Enterprise Software Co., Ltd.",
        period: "2012 - 2013",
        points: [
          "Developed web applications using Java, GWT, PHP, WordPress and JavaScript",
          "Configured and optimized cloud servers using Nginx, Apache and Jetty",
          "Worked with production systems, documentation and technical problem solving that had to be transferred clearly to teams"
        ]
      },
      {
        role: "Early Technical Roles",
        company: "Freelance, Easy Branches, PSU Phuket / SIPA 1000 Developer Project",
        period: "2009 - 2012",
        points: [
          "Delivered webboard, web CMS, PHP, basic graphics and IT HelpDesk work while studying, including OS troubleshooting, data recovery and user support",
          "Built and supported network systems, WiFi hotspot/authentication, a code-based mansion access system, CCTV, LAN/WLAN, mail server and cloud/server operations",
          "Created software engineering documentation and PHP development work through the PSU Phuket and SIPA Phuket 1000 Developer Project"
        ]
      },
      {
        role: "Instructor, Business Computer",
        company: "Muhammadiyah Commercial College, Saba Yoi",
        period: "Teaching / Present",
        points: [
          "Teach business computer topics covering digital skills, data, websites and practical modern tools",
          "Bring real SEO, marketing analytics and automation experience into classroom projects"
        ]
      },
      {
        role: "Project Instructor, Science and Technology",
        company: "Islam Wittaya Foundation School, Saba Yoi Special Program",
        period: "Teaching / Present",
        points: [
          "Guide science and technology projects with focus on analysis, experimentation and presentation",
          "Apply data, research and AI-assisted learning to help students develop structured projects"
        ]
      }
    ],
    awards: [
      "Echelon Thailand Phuket 2014: Winner Award and People's Choice in an international startup program",
      "Software contest award, เซียนซอฟแวร์ ซอฟต์แวร์ตีแตก: 3rd place",
      "Asian Software Expo 2013, Queen Sirikit National Convention Center Bangkok",
      "Network Security 4 Contest 2009, Southern Part and Ambassadors Telecommunications 2009"
    ],
    certifications: [
      "Ahrefs Marketing Platform",
      "HubSpot SEO and HubSpot SEO II",
      "SEMrush SEO Toolkit, Technical SEO and AI Search, AI Visibility, On-Page, Off-Page and Keyword Research",
      "Google Ads Search, Display, Measurement, Conversion Optimization, AI-Powered Performance and Grow Offline Sales",
      "Google Analytics, Apple Ads and LinkedIn Advertising Fundamentals",
      "n8n AI Agent Builder, RAG, ChatGPT for SEO, AI Workflow Optimization, Databricks, Kubernetes and LINE MINI App"
    ],
    certificateLogos: [],
    certificateProviders: ["Google", "SEMrush", "HubSpot", "Ahrefs", "IBM", "Databricks", "LinkedIn", "Apple Ads", "n8n", "Simplilearn", "LINE"],
    certificateCatalog: [
      {
        title: "Search, SEO and AI Search",
        items: [
          "Ahrefs Marketing Platform",
          "HubSpot SEO",
          "HubSpot SEO II",
          "SEMrush SEO Toolkit Crash Course",
          "SEMrush SEO Essentials",
          "SEMrush Technical SEO and AI Search Essentials",
          "SEMrush AI Visibility Essentials",
          "SEMrush On-Page SEO and AI Search Essentials",
          "SEMrush Off-Page SEO and AI Search Essentials",
          "SEMrush Keyword Research Essentials",
          "SEMrush Content Marketing Essentials for SEO and AI Search",
          "ChatGPT for Search Engine Optimization"
        ]
      },
      {
        title: "SEM, Ads and Analytics",
        items: [
          "Google Ads Search",
          "Google Ads Display",
          "Google Ads Measurement",
          "Google Ads Conversion Optimization",
          "Google Ads AI-Powered Performance",
          "Grow Offline Sales",
          "Google Analytics",
          "Apple Ads Certification",
          "LinkedIn Advertising Fundamentals"
        ]
      },
      {
        title: "AI Workflow and Automation",
        items: [
          "n8n AI Agent Builder",
          "RAG Course for Beginners",
          "AI Driven Workflow Optimization",
          "AI Strategies for Marketing and Sales"
        ]
      },
      {
        title: "Cloud, Data and Technical Systems",
        items: [
          "Databricks for Data Engineering",
          "Kubernetes Certified",
          "LINE MINI App Open Access Academy"
        ]
      },
      {
        title: "Marketing, CRO and Growth",
        items: [
          "CRO Website Conversion Rate Optimization",
          "Digital Marketing for CXOs",
          "Digital Marketing Keyword Research Fundamental",
          "SEMrush Fundamentals of Marketing Analytics",
          "SEMrush Maximizing ROI through Marketing Analytics",
          "SEMrush Master Your Brand Voice",
          "SEMrush Crafting a Winning SEO Strategy: A Guide for In-House Marketers",
          "SEMrush How to Craft High-Impact Digital Advertising Campaigns Using Semrush",
          "SEMrush Building a Social Listening Program with Christina Garnett",
          "SEMrush How to Incorporate PPC Into Your Marketing Strategy for Increased Conversions"
        ]
      }
    ],
    certificateImages: certificateProofsEn,
    reviews: [
      {
        title: "Technical SEO + Developer Mindset",
        quote: "Looks beyond keywords into site structure, speed, servers and the data layer."
      },
      {
        title: "Verifiable Performance Score",
        quote: "Optimize Performance Score A\nOptimizes websites toward Google PageSpeed Insights 90+ or GTmetrix A Score by aligning code, caching, server setup and tracking so the result can be verified."
      },
      {
        title: "Competitor Intelligence",
        quote: "Finds competitor gaps across SERPs, content, link profiles, visibility and conversion paths."
      },
      {
        title: "AI + Automation",
        quote: "Uses Agentic AI, n8n and RAG to accelerate research, workflows and visibility planning."
      },
      {
        title: "Teaching and Communication",
        quote: "Explains technical topics clearly enough for non-developers to apply."
      }
    ],
    contactNote: "Best suited to roles that need one person to understand SEO, SEM, WordPress, servers, analytics, competitor intelligence, Google Ads, Meta Ads, LINE Ads, TikTok Ads, and AI-assisted workflow design without losing execution detail."
  }
} as const;

export const knowledgeTerms = [
  {
    name: "Search Engine Optimization",
    sameAs: ["https://en.wikipedia.org/wiki/Search_engine_optimization", "https://www.wikidata.org/wiki/Q180711"]
  },
  {
    name: "Search Engine Marketing",
    note: "Advertising: Google Ads, Meta Ads, LINE Ads, TikTok Ads, Bing, Yandex, Apple Search Ads",
    sameAs: ["https://en.wikipedia.org/wiki/Search_engine_marketing", "https://www.wikidata.org/wiki/Q1433357"]
  },
  {
    name: "WordPress",
    sameAs: ["https://en.wikipedia.org/wiki/WordPress", "https://www.wikidata.org/wiki/Q13166"]
  },
  {
    name: "Google Analytics",
    sameAs: ["https://en.wikipedia.org/wiki/Google_Analytics", "https://www.wikidata.org/wiki/Q845633"]
  },
  {
    name: "Google Tag Manager",
    sameAs: ["https://en.wikipedia.org/wiki/Google_Tag_Manager", "https://www.wikidata.org/wiki/Q55868388"]
  },
  {
    name: "Cloud Computing",
    note: "AWS, Google Cloud, Alibaba Cloud, Oracle Cloud, DigitalOcean, VPS",
    sameAs: ["https://en.wikipedia.org/wiki/Cloud_computing", "https://www.wikidata.org/wiki/Q483639"]
  },
  {
    name: "Artificial Intelligence",
    sameAs: ["https://en.wikipedia.org/wiki/Artificial_intelligence", "https://www.wikidata.org/wiki/Q11660"]
  },
  {
    name: "Vertex AI Agent Builder",
    note: "Vertex AI, Gemini workflow, agentic search assistants and structured automation",
    sameAs: [
      "https://cloud.google.com/products/agent-builder",
      "https://cloud.google.com/vertex-ai",
      "https://cloud.google.com/vertex-ai/generative-ai"
    ]
  },
  {
    name: "Schema.org",
    sameAs: ["https://en.wikipedia.org/wiki/Schema.org", "https://www.wikidata.org/wiki/Q3475322"]
  }
] as const;

export function absoluteUrl(path: string) {
  return new URL(path, site.baseUrl).toString();
}

export function alternateLinks(group: RouteGroup) {
  const routes = routeGroups[group];
  return [
    { hreflang: "th", href: absoluteUrl(routes.th) },
    { hreflang: "en", href: absoluteUrl(routes.en) },
    { hreflang: "x-default", href: absoluteUrl(routes.xDefault) }
  ] as const;
}

export function primaryNavigation(locale: Locale) {
  const p = profile[locale];
  const anchors = ["profile", "story", "skills", "services", "experience", "awards", "certifications", "reviews"] as const;
  return anchors.map((anchor, index) => ({
    label: p.nav[index] ?? anchor,
    href: `${p.url}#${anchor}`,
    absoluteHref: absoluteUrl(`${p.url}#${anchor}`)
  }));
}

export function personSchema(locale: Locale) {
  const p = profile[locale];
  const nav = primaryNavigation(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.baseUrl}/#person`,
        name: site.name,
        url: absoluteUrl(p.url),
        image: absoluteUrl(site.logoPng),
        jobTitle: ["SEO Operation Lead", "SEO Developer", "Technical SEO Specialist", "Digital Marketing Specialist"],
        description: p.description,
        sameAs: [site.linkedin, site.xProfile, site.googleDeveloper, site.googleSkills, site.credentials],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Prince of Songkla University, Phuket Campus",
          sameAs: "https://en.wikipedia.org/wiki/Prince_of_Songkla_University"
        },
        knowsAbout: [
          ...knowledgeTerms.map((term) => term.name as string),
          "Technical SEO",
          "Schema Markup",
          "Knowledge Graph",
          "AI Visibility",
          "Answer Engine Optimization",
          "Cloud Server Optimization",
          "Agentic AI",
          "AI Automation",
          "Dify",
          "n8n",
          "OpenClaw",
          "Hermes Agent",
          "Papaclip",
          "Cloud Server Deployment",
          "Apache HTTP Server",
          "Nginx",
          "OpenLiteSpeed",
          "Dokploy",
          "Coolify",
          "SEO Operations"
        ],
        hasCredential: profile.en.certifications.map((name) => ({
          "@type": "EducationalOccupationalCredential",
          name
        }))
      },
      {
        "@type": "ProfilePage",
        "@id": `${absoluteUrl(p.url)}#profile`,
        url: absoluteUrl(p.url),
        name: p.title,
        description: p.description,
        keywords: p.keywords,
        inLanguage: locale === "th" ? "th-TH" : "en-US",
        mainEntity: { "@id": `${site.baseUrl}/#person` },
        mentions: knowledgeTerms.map((_, index) => ({ "@id": `${site.baseUrl}/#term-${index + 1}` }))
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.baseUrl}/#organization`,
        name: site.brandName,
        url: site.baseUrl,
        logo: {
          "@type": "ImageObject",
          "@id": `${site.baseUrl}/#logo`,
          url: absoluteUrl(site.logoPng)
        },
        image: absoluteUrl(site.socialImage),
        sameAs: [site.linkedin, site.xProfile, site.googleDeveloper],
        areaServed: "Thailand",
        description: locale === "th"
          ? "โปรไฟล์และเว็บไซต์บริการของ Sufarwee Dunyamat สำหรับ SEO, SEM, WordPress, analytics, AI workflow และ technical website audits"
          : "Profile and service website for Sufarwee Dunyamat covering SEO, SEM, WordPress, analytics, AI workflow, and technical website audits.",
        makesOffer: p.services.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: item.title,
            description: item.text
          }
        }))
      },
      {
        "@type": "WebSite",
        "@id": `${site.baseUrl}/#website`,
        url: site.baseUrl,
        name: site.siteTitle,
        inLanguage: ["th-TH", "en-US"],
        about: { "@id": `${site.baseUrl}/#person` },
        publisher: { "@id": `${site.baseUrl}/#organization` }
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl(p.url)}#site-navigation`,
        name: locale === "th" ? "เมนูหลักของ resume" : "Primary resume navigation",
        itemListElement: nav.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SiteNavigationElement",
            name: item.label,
            url: item.absoluteHref
          }
        }))
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl(p.url)}#skills`,
        name: p.sectionTitles.expertise,
        itemListElement: p.expertise.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item
        }))
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl(p.url)}#services`,
        name: p.sectionTitles.services,
        itemListElement: p.services.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: item.title,
            description: item.text,
            provider: { "@id": `${site.baseUrl}/#person` }
          }
        }))
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl(p.url)}#awards`,
        name: p.sectionTitles.awards,
        itemListElement: p.awards.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item
        }))
      },
      {
        "@type": "ItemList",
        "@id": `${absoluteUrl(p.url)}#certificate-images`,
        name: locale === "th" ? "ภาพหลักฐานใบรับรองของ Sufarwee Dunyamat" : "Certificate proof images for Sufarwee Dunyamat",
        description:
          locale === "th"
            ? "รายการภาพใบรับรองและ badge ที่เกี่ยวข้องกับ SEO, SEM, analytics, AI automation, developer platform และ cloud skills"
            : "A structured image list of certificates and badges related to SEO, SEM, analytics, AI automation, developer platforms, and cloud skills.",
        itemListElement: p.certificateImages.map((image, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "ImageObject",
            "@id": `${absoluteUrl(image.fullSrc)}#image`,
            contentUrl: absoluteUrl(image.fullSrc),
            thumbnailUrl: absoluteUrl(image.src),
            name: image.title,
            caption: image.alt,
            description: image.description,
            encodingFormat: "image/webp",
            representativeOfPage: false,
            creator: { "@id": `${site.baseUrl}/#person` },
            about: { "@id": `${site.baseUrl}/#person` }
          }
        }))
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${site.baseUrl}/#knowledge-graph-topics`,
        name: "Knowledge graph topics for Sufarwee Dunyamat",
        hasDefinedTerm: knowledgeTerms.map((term, index) => ({
          "@type": "DefinedTerm",
          "@id": `${site.baseUrl}/#term-${index + 1}`,
          name: term.name,
          sameAs: term.sameAs
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(p.url)}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Resume",
            item: absoluteUrl(p.url)
          }
        ]
      }
    ]
  };
}
