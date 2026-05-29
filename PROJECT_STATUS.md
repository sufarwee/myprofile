# Web Resume Project Status

Last updated: 2026-05-28

## Current Direction

Static Astro resume focused on:

- High SEO quality
- Fast performance
- Premium UI without heavy runtime
- Reader-friendly content for AI and crawlers
- Strong positioning for `SEO Developer`, `SEM`, `AI Automation`, and `Cloud Server Optimization`

## Stack Right Now

- Astro static site
- TypeScript in content/config files
- Custom CSS
- No backend required for the current version
- No external font dependency
- Minimal client-side JavaScript

## What Is Already Done

- Built Thai and English resume pages
- Added dark/light theme toggle
- Added reader mode and markdown resume endpoints
- Added canonical, hreflang, sitemap, robots, schema, navigation schema
- Added image-focused certificate schema with `ImageObject`, `contentUrl`, `thumbnailUrl`, caption, description, and WebP encoding metadata
- Added security headers file for Pages-style hosting
- Improved keyword targeting for:
  - `SEO Developer`
  - `SEO Specialist`
  - `SEM Specialist`
  - `AI Automation`
  - `Cloud Server Optimization`
- Improved homepage visual style with a more premium look while keeping payload small
- Added certificate gallery section with proof images
- Added a dedicated services layer so the site works as both profile and service offering
- Updated homepage copy tone:
  - Thai: warmer, friendlier, more natural
  - English: more formal, developer-minded, less sales-heavy
- Expanded SEM platform coverage in content:
  - Google Ads
  - Meta Ads (Facebook / Instagram)
  - LINE Ads
  - TikTok Ads
- Added logo-ready meta structure:
  - favicon
  - apple-touch-icon
  - social image placeholders
  - schema logo hooks
- Added certificate provider logos, grouped certificate lists, and proof descriptions
- Certificate proof images have visible text descriptions, descriptive alt text, fixed dimensions, lazy loading, and matching structured data
- Started responsive cleanup:
  - reduced Thai hero type scale
  - shortened Thai homepage copy
  - added small inline SVG card icons
  - improved tablet/mobile grid collapse behavior

## Important Files

- Content and SEO data: `src/data/profile.ts`
- Reader markdown generation: `src/data/reader.ts`
- Main page component: `src/components/ResumePage.astro`
- Layout and head tags: `src/layouts/BaseLayout.astro`
- Styles: `src/styles/global.css`
- Reader layout: `src/layouts/ReaderLayout.astro`
- Headers for deployment: `public/_headers`

## Open Decisions

- Should TH and EN stay as separate URLs, or become one page with in-page language switching while still preserving SEO-friendly URLs?
- Should the site remain custom CSS, or move to Tailwind/Nano-style utility structure?
- Should the certificate gallery open as:
  - modal lightbox
  - grouped categories
  - expandable archive
- Which final domain will be used for production?

## Recommended Next Work

1. Replace placeholder domain:
   - update `site.baseUrl` in `src/data/profile.ts`
   - update canonical URLs in `public/_headers`

2. Improve image/content system:
   - add your own profile photo
   - add selected project/work images
   - add grouped certificate gallery
   - confirm all `alt`, `width`, `height`, and file naming

3. Add more real proof:
   - project case studies
   - selected audits / performance wins
   - server optimization examples
   - competitor intelligence examples

4. Strengthen homepage positioning:
   - expand AI tools actually used in production
   - expand CMS/framework history
   - refine “best-fit work” / service angle

5. Final technical audit pass:
   - Web Developer extension
   - Screaming Frog
   - PageSpeed Insights
   - GTmetrix

6. Continue UI cleanup:
   - tighten Thai copy further where needed
   - verify header/nav behavior on mobile and tablet
   - improve certificate section into more premium floating cards
   - add filter/lightbox if still needed

## Certificate Assets To Process Next

User has provided additional removed-background certificate images that should be reviewed and likely integrated into a better gallery:

- `/Users/sufarwee/Desktop/cert. up web resume/cert remove bg/cert pic 01.png`
- `/Users/sufarwee/Desktop/cert. up web resume/cert remove bg/cert pic 02.png`
- `/Users/sufarwee/Desktop/cert. up web resume/cert remove bg/cert pic 03.png`
- `/Users/sufarwee/Desktop/cert. up web resume/cert remove bg/cert pic 04.png`
- `/Users/sufarwee/Desktop/cert. up web resume/cert remove bg/cert pic 05.png`
- `/Users/sufarwee/Desktop/cert. up web resume/cert remove bg/cert pic 06.png`
- `/Users/sufarwee/Desktop/cert. up web resume/cert remove bg/cert pic 08png.png`
- `/Users/sufarwee/Desktop/cert. up web resume/cert remove bg/cert pic 09.png`

## Notes

- 2026-05-27 update:
  - certificate proof gallery now opens by default as smaller per-certificate mini cards
  - each certificate card keeps image alt text plus a short contextual description
  - certificate images now use `object-fit: contain` so badges/certificates are not cropped
  - added Leadership / SEO Operations and cross-functional communication skills in Thai and English
  - `npm run build` passed with 0 errors and 0 warnings

- A backend is not necessary unless we want:
  - CMS editing
  - contact forms with storage
  - dynamic case studies
  - admin upload flows
  - analytics dashboard inside the site

- For now, static is the right choice for speed, crawlability, and simpler deployment.

- 2026-05-27 second update:
  - integrated older prompt content into the live Thai/English profile data
  - expanded the career narrative from Software Engineering into webboard/CMS/PHP, student freelance work, network/mail/server support, and production infrastructure
  - added O2O, confidential data handling, Google Developer/LINE Developer mindset, history/interdisciplinary learning, UTM governance, DNS/SSL/CDN, mail server, NAS backup, and log file analysis
  - updated Nebly Media UK wording in the experience section, pending exact spelling/date confirmation

- 2026-05-27 certificate WebP update:
  - replaced the older certificate gallery source with the cleaned WebP folder from `alll certified sufarwee dunyamat Web P`
  - generated 46 full-size WebP certificate assets and 46 lightweight WebP thumbnails under `public/certificates/all/`
  - added `src/data/certificateProofs.ts` so every certificate has title, category, alt text, full image URL, thumbnail URL, and contextual TH/EN description
  - certificate cards now open the full image when clicked, while the page itself loads the smaller thumbnail version
  - old generated PNG files inside `public/certificates/all/full` and `public/certificates/all/thumb` were replaced by WebP assets

- 2026-05-27 design reference update:
  - saved preferred inspiration sites in `CONTENT_NOTES.md`
  - current visual target: premium Astro profile, multilingual, breathable layout, certificate/logo motion, high mobile performance, and minimal JavaScript

- 2026-05-27 certificate/review update:
  - removed `Head of IT Extreme Club, Prince of Songkla University Phuket Campus, 2008-2010` from the awards list
  - certificate proof cards are now individually clickable and open the larger source image in a new tab
  - highlighted the second “5 angles” review card around verifiable web optimization: Google PageSpeed Insights 90+ / GTmetrix A Score
  - `npm run build` passed with 0 errors and 0 warnings

- 2026-05-27 typography/content update:
  - added smaller second-line notes under Knowledge Graph Signals for Search Engine Marketing and Cloud Computing
  - refined the performance review card so `Optimize Performance Score A` appears first, then the Thai explanation on the next line
  - kept the review paragraph closer to the original font scale so it does not feel oversized
  - `npm run build` passed with 0 errors and 0 warnings

- 2026-05-27 work timeline update:
  - restructured the experience section into a clearer reverse-chronological timeline
  - added Yongsingeyia now Crown Construction wording
  - added Chao Phraya Architech / Boonbundan group as a recent project-based SEO Developer / Digital Growth entry
  - added Freelance / Business Owner as an ongoing 2017-present consulting and 0-100 delivery track
  - added SchoolOS / Echelon Thailand Phuket / SIPA software community as a 2013-2014 startup and product milestone
  - moved teaching roles to parallel present entries instead of mixing them into the main corporate timeline
  - `npm run build` passed with 0 errors and 0 warnings

- 2026-05-27 timeline correction:
  - corrected `Nebly Media UK` to `Nebsly Media UK` in both Thai and English timeline content
  - added `JINGLEBUILE Co., Ltd.` as `Digital Marketing & SEO Specialist`, period `04 Dec 2020 - May 2021`
  - kept Nebsly Media UK as a separate SEO/SEM project-based entry so it is not hidden inside freelance work
  - `npm run build` passed with 0 errors and 0 warnings

- 2026-05-27 Nebly Media timeline correction:
  - updated the company spelling to `Nebly Media UK`
  - moved/worded Nebly Media UK as the role after leaving Sri panwa and before JINGLEBUILE
  - added Thai/English copy explaining that the role continued from hotel-scale/multi-site search, ads, and website operations experience
  - `npm run build` passed with 0 errors and 0 warnings

- 2026-05-27 NEBSLY company context update:
  - updated the public-facing company label to `NEBSLY Media UK / Thailand`
  - added context that NEBSLY Media was founded in the UK, worked across markets such as the United States, Singapore and Germany, and had a Thailand company presence in Bangkok
  - added that the role was WFH from Phuket during that period
  - kept the full street address out of the resume page for readability, but the source note is available from user-provided context
  - `npm run build` passed with 0 errors and 0 warnings

- 2026-05-27 NEBSLY role title update:
  - changed the NEBSLY Media role title to `Developer & Digital Marketing (SEO/SEM)` in both Thai and English profile data
  - `npm run build` passed with 0 errors and 0 warnings

- 2026-05-27 NEBSLY source URL note:
  - former company URL provided by user: `http://www.nebslymedia.com/th`
  - user noted the website is no longer maintained/connected
  - do not add this as a public outgoing link on the site unless a working archived or replacement URL is provided, because it may create broken-link/HTTP URL audit issues

- 2026-05-27 NEBSLY LinkedIn company profile update:
  - added `https://www.linkedin.com/showcase/nebslymediaasia/about/` as the public company link for `NEBSLY Media UK / Thailand`
  - linked NEBSLY in the visual timeline, reader page, and generated Markdown reader output
  - kept the discontinued `http://www.nebslymedia.com/th` off the public page to avoid HTTP and broken-link audit issues
  - `npm run build` passed with 0 errors and 0 warnings

- 2026-05-28 image schema / review-snippet safety update:
  - added an `ItemList` of certificate proof images to JSON-LD using `ImageObject`
  - each certificate image schema now includes `contentUrl`, `thumbnailUrl`, `name`, `caption`, `description`, `encodingFormat: image/webp`, and links back to the Person entity
  - intentionally did not add fake `AggregateRating` or `Review` schema; review snippet markup should only be added for real, visible, guideline-safe reviews

- 2026-05-28 certificate proof slider cleanup:
  - removed the old mixed provider/composite strip from the certificate proof section, including the confusing LinkedIn/SEMrush-style gallery image
  - cleared the unused `certificateLogos` data arrays so old composite proof images are not accidentally reused later
  - replaced it with a real certificate proof slider sourced from individual WebP certificate thumbnails
  - kept every slide clickable so users can open the real full-size certificate proof image
  - recategorized Google badge assets into the correct proof groups: paid media, analytics, and related platform proof instead of a generic badge bucket
  - kept the detailed certificate list below the slider for SEO-readable text, alt text, and structured proof context
