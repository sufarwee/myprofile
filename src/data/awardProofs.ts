export type AwardProof = {
  src: string;
  fullSrc: string;
  title: string;
  category: string;
  alt: string;
  description: string;
  width: number;
  height: number;
  datePublished: string;
  keywords: string[];
  sourceName?: string;
};

type Locale = "th" | "en";

type AwardCopy = Pick<AwardProof, "title" | "category" | "alt" | "description">;

type AwardSeed = Omit<AwardProof, "src" | "fullSrc" | "title" | "category" | "alt" | "description"> & {
  file: string;
  th: AwardCopy;
  en: AwardCopy;
};

const basePath = "/awards";

const awardSeeds: AwardSeed[] = [
  {
    file: "sufarwee-dunyamat-schoolos-echelon-thailand-2014-winner-peoples-choice-phuket-news.webp",
    width: 2560,
    height: 1440,
    datePublished: "2014-08-22",
    sourceName: "The Phuket News",
    keywords: [
      "Sufarwee Dunyamat",
      "SchoolOS",
      "Echelon Thailand 2014",
      "Phuket startup",
      "startup award",
      "software award"
    ],
    th: {
      title: "SchoolOS ได้รับ Winner และ People's Choice ที่ Echelon Thailand Phuket 2014",
      category: "Startup Award / Media Proof",
      alt: "ภาพหลักฐานรางวัล SchoolOS ของ Sufarwee Dunyamat ได้รับ Winner และ People's Choice ที่ Echelon Thailand Phuket 2014 พร้อมบทความ Phuket News",
      description:
        "ภาพสรุปหลักฐานรางวัล SchoolOS จาก Echelon Thailand 2014 Phuket Satellite และการถูกกล่าวถึงใน The Phuket News สำหรับผลงานแพลตฟอร์มบริหารจัดการโรงเรียน"
    },
    en: {
      title: "SchoolOS Winner and People's Choice at Echelon Thailand Phuket 2014",
      category: "Startup Award / Media Proof",
      alt: "Award proof image for Sufarwee Dunyamat and SchoolOS winning Winner and People's Choice at Echelon Thailand Phuket 2014 with Phuket News coverage",
      description:
        "Visual proof of SchoolOS recognition at Echelon Thailand 2014 Phuket Satellite, including Winner, People's Choice and Phuket News coverage for the school management platform."
    }
  },
  {
    file: "sufarwee-dunyamat-schoolos-echelon-thailand-2014-award-desk-proof.webp",
    width: 2560,
    height: 1440,
    datePublished: "2014-08-16",
    sourceName: "Echelon Thailand 2014",
    keywords: ["Sufarwee Dunyamat", "SchoolOS", "Echelon Thailand", "Winner Award", "People's Choice"],
    th: {
      title: "หลักฐานรางวัล Echelon Thailand 2014 ของ SchoolOS",
      category: "Startup Award Proof",
      alt: "ภาพถ้วยและประกาศนียบัตร SchoolOS ของ Sufarwee Dunyamat จาก Echelon Thailand 2014 Phuket Satellite",
      description:
        "ภาพหลักฐานรางวัล SchoolOS ที่แสดงประกาศนียบัตร Winner และ People's Choice จาก Echelon Thailand 2014 Phuket Satellite"
    },
    en: {
      title: "SchoolOS award proof from Echelon Thailand 2014",
      category: "Startup Award Proof",
      alt: "Award certificate proof for Sufarwee Dunyamat and SchoolOS from Echelon Thailand 2014 Phuket Satellite",
      description:
        "Award proof image showing the SchoolOS Winner and People's Choice recognition from Echelon Thailand 2014 Phuket Satellite."
    }
  },
  {
    file: "sufarwee-dunyamat-schoolos-echelon-thailand-2014-achievement-recognition.webp",
    width: 2560,
    height: 1440,
    datePublished: "2014-08-16",
    sourceName: "Echelon Thailand 2014",
    keywords: ["Sufarwee Dunyamat", "SchoolOS", "Echelon Thailand 2014", "startup recognition", "EdTech"],
    th: {
      title: "SchoolOS Achievements & Recognition จาก Echelon Thailand 2014",
      category: "Achievement Proof",
      alt: "ภาพแสดงรางวัล Winner People's Choice และการนำเสนอข่าว Phuket News ของ SchoolOS โดย Sufarwee Dunyamat",
      description:
        "ภาพรวมความสำเร็จของ SchoolOS ในฐานะผลงาน EdTech ที่ได้รับการยอมรับจากเวที Echelon Thailand 2014 และสื่อ Phuket News"
    },
    en: {
      title: "SchoolOS achievements and recognition from Echelon Thailand 2014",
      category: "Achievement Proof",
      alt: "SchoolOS achievement proof showing Winner, People's Choice and Phuket News feature connected to Sufarwee Dunyamat",
      description:
        "Summary proof of SchoolOS as an EdTech project recognized at Echelon Thailand 2014 and covered by Phuket News."
    }
  },
  {
    file: "sufarwee-dunyamat-sean-software-award-third-place-dev-seo.webp",
    width: 1200,
    height: 895,
    datePublished: "2014-08-05",
    sourceName: "SIPA / Ministry of ICT Thailand",
    keywords: ["Sufarwee Dunyamat", "เซียนซอฟแวร์", "SIPA", "software contest", "developer award"],
    th: {
      title: "รางวัลเซียนซอฟแวร์ ซอฟต์แวร์ตีแตก อันดับ 3",
      category: "Software Contest Award",
      alt: "ภาพหลักฐานรางวัลเซียนซอฟแวร์ ซอฟต์แวร์ตีแตก อันดับ 3 ของ Sufarwee Dunyamat จาก SIPA และกระทรวง ICT",
      description:
        "ภาพหลักฐานรางวัลด้าน software และ web development จากโครงการเซียนซอฟแวร์ ซอฟต์แวร์ตีแตก ซึ่งสะท้อนพื้นฐาน developer ก่อนต่อยอดสู่ SEO และ digital marketing"
    },
    en: {
      title: "Sean Software contest award, 3rd place",
      category: "Software Contest Award",
      alt: "Proof image of Sufarwee Dunyamat's 3rd place Sean Software contest award from SIPA and Thailand ICT",
      description:
        "Software and web development award proof from the Sean Software contest, reflecting the developer foundation behind Sufarwee's SEO and digital marketing work."
    }
  },
  {
    file: "sufarwee-dunyamat-sean-software-award-thai-proof.webp",
    width: 768,
    height: 1363,
    datePublished: "2014-08-05",
    sourceName: "SIPA / Ministry of ICT Thailand",
    keywords: ["Sufarwee Dunyamat", "เซียนซอฟแวร์", "SIPA", "software award trophy", "web development"],
    th: {
      title: "ถ้วยรางวัลเซียนซอฟแวร์ ซอฟต์แวร์ตีแตก",
      category: "Software Award Trophy",
      alt: "ภาพถ้วยรางวัลเซียนซอฟแวร์ ซอฟต์แวร์ตีแตก ของ Sufarwee Dunyamat",
      description:
        "ภาพถ้วยรางวัลจากโครงการเซียนซอฟแวร์ ซอฟต์แวร์ตีแตก ใช้เป็นหลักฐานประกอบเส้นทางจาก software engineering สู่ SEO Developer"
    },
    en: {
      title: "Sean Software award trophy",
      category: "Software Award Trophy",
      alt: "Trophy proof image for Sufarwee Dunyamat from the Sean Software software contest",
      description:
        "Trophy proof from the Sean Software contest, supporting the career story from software engineering into SEO Developer work."
    }
  }
];

const localizeAwards = (locale: Locale): AwardProof[] =>
  awardSeeds.map((seed) => {
    const { file, th, en, ...rest } = seed;
    const localized = locale === "th" ? th : en;

    return {
      ...rest,
      ...localized,
      src: `${basePath}/${file}`,
      fullSrc: `${basePath}/${file}`
    };
  });

export const awardProofsTh = localizeAwards("th");
export const awardProofsEn = localizeAwards("en");
