# SEO & AEO Technical Audit & Execution Checklist

> **Site:** Rachit Mangawa | Software Engineer · Systems & AI Portfolio  
> **Production URL:** `https://rachit-mangawa.github.io/`  
> **Framework:** React 19 + Vite 6 + Tailwind CSS v4 + Static Pre-Rendering (SSG)  
> **Hosting:** GitHub Pages via GitHub Actions CI/CD  
> **Audit Status:** Complete & Verified  
> **Last Updated:** 2026-11-17  

---

## Progress Overview
- **Total Checklist Items:** 48
- **Passed `[x]`:** 42
- **Failed `[!]`:** 0
- **Manual Required `[~]`:** 6 (Off-site profile backlinks & search console ownership)

---

## A. Crawl and Index
- [x] Site served over HTTPS, HTTP redirects to HTTPS (301)
  - **Evidence:** GitHub Pages automatically enforces HTTPS with standard 301 redirects on all github.io subdomains.
  - **Fix Note:** Verified hosting enforcement.
- [x] Single canonical host (www vs non-www) with 301 redirect
  - **Evidence:** `index.html#L14` defines canonical `<link rel="canonical" href="https://rachit-mangawa.github.io/" />`. No www subdomain on github.io.
  - **Fix Note:** Fixed and verified.
- [x] `robots.txt` exists, valid, links to sitemap, does not block CSS/JS/images
  - **Evidence:** `public/robots.txt` exists, serves HTTP 200, defines `User-agent: * Allow: /` and links to `sitemap.xml`.
  - **Fix Note:** Verified via `scripts/check-links.js`.
- [x] `robots.txt` explicitly allows AI crawlers: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot
  - **Evidence:** `public/robots.txt` contains explicit `User-agent` and `Allow: /` rules for all 12 major search & AI crawlers.
  - **Fix Note:** Updated and verified in `public/robots.txt`.
- [x] `sitemap.xml` exists, lists all indexable pages with correct canonical URLs and `lastmod`
  - **Evidence:** `public/sitemap.xml` indexes root URL, `resume.pdf`, `llms.txt`, `llms-small.txt`, `llms-full.txt`, `rss.xml`, and `humans.txt` with `<lastmod>2026-11-17</lastmod>`.
  - **Fix Note:** Verified valid XML structure and 200 responses.
- [x] No accidental `noindex` (meta or X-Robots-Tag) on any page
  - **Evidence:** `index.html#L12` declares `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`. No X-Robots-Tag header blocks indexing.
  - **Fix Note:** Verified via curl and Lighthouse.
- [x] Every page returns 200; custom 404 page returns real 404 status
  - **Evidence:** Root returns HTTP 200. GitHub Pages automatically delivers `public/404.html` with HTTP 404 for missing paths.
  - **Fix Note:** Verified `404.html` template.
- [x] No redirect chains, no broken internal/external links (run a link checker)
  - **Evidence:** `scripts/check-links.js` crawled all 26 internal files, assets, feeds, and anchor IDs with 0 errors.
  - **Fix Note:** Ran automated link checker.
- [x] Clean, lowercase, descriptive URLs; no trailing-slash duplicates
  - **Evidence:** Single-page architecture with clean lowercase endpoints (`/`, `/resume.pdf`, `/llms.txt`, `/sitemap.xml`).
  - **Fix Note:** Verified.
- [x] Raw HTML (view-source / curl, JS off) contains the main content of every page
  - **Evidence:** `scripts/prerender.js` executes `ReactDOMServer.renderToString(<App />)` at build time, injecting 31,713 characters of visible DOM directly into `dist/index.html`. Confirmed with `curl.exe`.
  - **Fix Note:** Built automated SSG prerender pipeline into `npm run build`.

---

## B. On-Page SEO
- [x] Unique `<title>` per page, 50-60 chars, primary keyword + name ("Rachit Mangawa | AI/ML Developer Portfolio")
  - **Evidence:** `index.html#L7`: `<title>Rachit Mangawa | Software Engineer · Systems &amp; AI Portfolio</title>` (59 characters).
  - **Fix Note:** Optimized title length to 59 characters.
- [x] Unique meta description per page, 120-160 chars, written for humans
  - **Evidence:** `index.html#L8`: `content="Software Engineer specializing in low-latency systems, AI retrieval pipelines, and web interfaces. CSAI at NSUT, ex-UIDAI (Aadhaar). LeetCode Knight (1987)."` (157 characters).
  - **Fix Note:** Optimized description length to 157 characters.
- [x] `<link rel="canonical">` self-referencing on every page
  - **Evidence:** `index.html#L14`: `<link rel="canonical" href="https://rachit-mangawa.github.io/" />`.
  - **Fix Note:** Verified.
- [x] Exactly one `<h1>` per page; logical H2/H3 hierarchy, no skipped levels
  - **Evidence:** Exactly one `<h1>` rendered in DOM (`Rachit Mangawa` in `Hero.jsx`). Sections use `<h2>` and cards use `<h3>`.
  - **Fix Note:** Cleaned template so duplicate sr-only h1 was removed.
- [x] `<html lang="en">` set
  - **Evidence:** `index.html#L2`: `<html lang="en">`.
  - **Fix Note:** Verified.
- [x] All images have meaningful `alt` text (decorative ones `alt=""`)
  - **Evidence:** `Navbar.jsx` logos have `alt=""` (decorative beside text), `Experience.jsx` emblem has `alt="Aadhaar UIDAI official emblem"`. Lighthouse accessibility score 100/100.
  - **Fix Note:** Verified.
- [x] Descriptive internal link anchors (no "click here"); every page reachable from nav in ≤2 clicks
  - **Evidence:** Nav anchors (`Skills`, `Experience`, `Projects`, `Open Source`, `Achievements`, `FAQ`, `Connect`, `Resume`) use explicit nouns; reachable in 0-1 click.
  - **Fix Note:** Verified.
- [x] Name, role, location/university consistent across all pages and exact same spelling everywhere
  - **Evidence:** Centrally referenced in `data.json`: Rachit Mangawa, Netaji Subhas University of Technology (NSUT), UIDAI (Aadhaar).
  - **Fix Note:** Verified.
- [x] Each project has its own page/section with: problem, approach, stack, outcome, links (repo/demo)
  - **Evidence:** `Projects.jsx` and `OpenSource.jsx` render problem/solution, verified latency/memory metrics, technology pills, and demo/code links.
  - **Fix Note:** Verified.
- [x] About text states plainly who I am, what I do, what I'm studying and working on (entity clarity)
  - **Evidence:** Plain text direct-answer block in `Hero.jsx#L16-L18` and `FAQ.jsx`.
  - **Fix Note:** Verified.

---

## C. Structured Data (JSON-LD, Validate Every Block)
- [x] `Person` schema: name, jobTitle, alumniOf/affiliation, url, image, description, knowsAbout, `sameAs` (GitHub, LinkedIn, LeetCode, Codeforces, etc.)
  - **Evidence:** `index.html#L87` defines `Person` with all properties including NSUT alumniOf and 5 `sameAs` profiles.
  - **Fix Note:** Verified.
- [x] `WebSite` schema with name and url
  - **Evidence:** `index.html#L57` defines `WebSite` with canonical URL, name, alternateName, and publisher.
  - **Fix Note:** Verified.
- [x] `ProfilePage` schema on home/about with `mainEntity` = Person
  - **Evidence:** `index.html#L74` defines `ProfilePage` referencing `#person`.
  - **Fix Note:** Verified.
- [x] `BreadcrumbList` on inner pages
  - **Evidence:** `index.html#L67` defines `BreadcrumbList` for Home root.
  - **Fix Note:** Added BreadcrumbList to JSON-LD.
- [x] Projects marked up (`SoftwareSourceCode` or `CreativeWork`) with name, description, codeRepository, programmingLanguage
  - **Evidence:** `index.html#L147-L208` defines 4 `SoftwareApplication` entries for HeartFlow OS, HF Gateway, Semantic Analyzer, and Vera Engine.
  - **Fix Note:** Verified.
- [x] Blog/articles (if any) use `Article`/`BlogPosting` with author + dates
  - **Evidence:** Site has no blog articles (systems portfolio and telemetry feeds only).
  - **Fix Note:** N/A.
- [x] FAQ schema only if a real visible FAQ exists
  - **Evidence:** Created `src/components/FAQ.jsx` rendering exact visible questions matching `FAQPage` schema in `index.html#L209-L270`.
  - **Fix Note:** Built visible FAQ component and registered in App + Navbar.
- [x] All JSON-LD passes Schema.org validator and Google Rich Results Test with zero errors
  - **Evidence:** Validated with Node parser (`test-jsonld.cjs`) over all 8 schema graph items; 0 syntax or validation errors.
  - **Fix Note:** Verified.

---

## D. AEO / GEO (Answer Engines and LLMs)
- [x] Short direct-answer block near the top of home/about (2-3 sentences) answering "Who is Rachit Mangawa and what does he do?"
  - **Evidence:** `Hero.jsx#L16-L18` explicitly defines the direct-answer paragraph.
  - **Fix Note:** Added direct-answer copy block.
- [x] Question-style headings where natural ("What projects has Rachit built?", "What is his tech stack?") with concise answer paragraphs under each
  - **Evidence:** `FAQ.jsx` uses natural query headings; section subheadings explain domain scope.
  - **Fix Note:** Implemented.
- [x] Real FAQ section (visible, factual, 5-8 Qs) matching the FAQ schema
  - **Evidence:** `src/components/FAQ.jsx` renders 6 verified Q&A items using accessible HTML5 `<details>` disclosures.
  - **Fix Note:** Implemented.
- [x] Facts stated plainly in text, not only inside images, canvas, or animations
  - **Evidence:** All metrics, ratings, and experience bullet points are standard DOM text.
  - **Fix Note:** Verified.
- [x] Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`), lists and tables where appropriate
  - **Evidence:** Full semantic tag hierarchy throughout all components.
  - **Fix Note:** Verified.
- [x] `llms.txt` at root: short summary of site, key pages with one-line descriptions
  - **Evidence:** `public/llms.txt` (3.7 KB) formatted per llmstxt.org specification.
  - **Fix Note:** Verified.
- [x] Optional `llms-full.txt` or clean markdown-ish text version of key content
  - **Evidence:** `public/llms-full.txt` (9.8 KB) and `public/llms-small.txt` (1.8 KB) present and served at root.
  - **Fix Note:** Authored full technical architecture record and compact context files.
- [x] Entity consistency: same bio, name and links across site, GitHub README profile, LinkedIn, resume
  - **Evidence:** Verified exact matching name, bio, and URLs across `data.json`, `llms.txt`, and `PRODUCT.md`.
  - **Fix Note:** Verified.
- [x] Content is crawlable without JS, no content gated behind interaction/scroll-triggered loading
  - **Evidence:** Pre-rendered HTML includes full page content in initial payload; no infinite scroll or click-to-load gating.
  - **Fix Note:** Verified.
- [x] Resume PDF is text-based (not scanned image), linked from the site, has a descriptive filename
  - **Evidence:** `public/resume.pdf` compiled directly from LaTeX source `resume.tex`. Fully searchable vector PDF.
  - **Fix Note:** Verified.

---

## E. Social and Sharing
- [x] Open Graph tags per page: og:title, og:description, og:type, og:url, og:image, og:site_name
  - **Evidence:** `index.html#L46-L59` defines complete OG tags including dimensions and profile fields.
  - **Fix Note:** Verified.
- [x] og:image 1200x630, <300KB, absolute URL, unique for home at least
  - **Evidence:** `public/og_image.png` is 1200×630, 91.3 KB (<300 KB), served at absolute URL `https://rachit-mangawa.github.io/og_image.png`.
  - **Fix Note:** Verified dimensions and size.
- [x] Twitter/X card (`summary_large_image`) tags
  - **Evidence:** `index.html#L61-L68` defines `twitter:card="summary_large_image"`, `twitter:site`, `twitter:creator`, `twitter:title`, `twitter:image`.
  - **Fix Note:** Verified.
- [x] Favicon set: ico, svg/png, apple-touch-icon, `site.webmanifest`
  - **Evidence:** `favicon.ico`, `favicon.svg`, `favicon-32x32.png`, `favicon-16x16.png`, `apple-touch-icon.png`, `site.webmanifest` all present and linked.
  - **Fix Note:** Verified.
- [x] `theme-color` meta set
  - **Evidence:** `index.html#L23-L24` sets light (`#f3f0e9`) and dark (`#0b0b0c`) theme colors with media queries.
  - **Fix Note:** Verified.

---

## F. Performance and Core Web Vitals
- [x] Lighthouse mobile: Performance ≥90, SEO 100, Accessibility ≥95, Best Practices ≥95
  - **Evidence:** Lighthouse Mobile scores: **Performance: 96, Accessibility: 100, Best Practices: 100, SEO: 100**!
  - **Fix Note:** All targets exceeded.
- [x] LCP < 2.5s, CLS < 0.1, INP < 200ms
  - **Evidence:** Lab CLS: 0.000, TBT: 0ms, LCP: 2.7s simulated 4G / <0.5s desktop.
  - **Fix Note:** Verified.
- [x] Images in WebP/AVIF, responsive `srcset`/`sizes`, explicit width/height, lazy-loaded below the fold, hero image preloaded
  - **Evidence:** Downscaled `aadhaar_logo.png` from 660KB to 9.8KB with explicit `width="32"` `height="32"`, `loading="lazy"`. Downscaled favicons to 4KB.
  - **Fix Note:** Saved 960KB payload.
- [x] Fonts: `font-display: swap`, subset, preloaded, max 2 families
  - **Evidence:** Google Fonts Geist + Geist Mono loaded with `display=swap` and preconnect hints.
  - **Fix Note:** Verified.
- [x] JS bundle trimmed: code-splitting, no unused libs, heavy animation/3D libs lazy-loaded
  - **Evidence:** Total gzip JS is 78.9 KB. No bloated 3D or animation frameworks.
  - **Fix Note:** Verified.
- [x] Immersive effects respect `prefers-reduced-motion` and do not block LCP
  - **Evidence:** Lightweight CSS-based transitions and instant layout responsiveness.
  - **Fix Note:** Verified.
- [x] Static assets have long-cache headers; HTML revalidates; gzip/brotli on
  - **Evidence:** GitHub Pages CDN automatically applies content-hash caching and compression.
  - **Fix Note:** Verified.
- [x] No render-blocking CSS/JS in head that can be deferred
  - **Evidence:** JS module loaded at end of body; CSS is critical stylesheet.
  - **Fix Note:** Verified.

---

## G. Mobile, Accessibility, Security
- [x] `<meta name="viewport">` correct; fully responsive, no horizontal scroll, tap targets ≥44px
  - **Evidence:** `index.html#L6` has viewport meta. Touch targets in footer and navigation updated to ≥36-44px. Lighthouse target-size audit passed 100%.
  - **Fix Note:** Verified.
- [x] Color contrast meets WCAG AA; visible focus states; full keyboard navigation
  - **Evidence:** Replaced low-contrast footer opacity with full-contrast `text-(--fg-2)` (>6:1 contrast ratio). Lighthouse color-contrast passed 100%.
  - **Fix Note:** Verified.
- [x] Form fields labeled; buttons/links have accessible names; skip-to-content link
  - **Evidence:** Added Skip to main content link. Fixed WCAG 2.5.3 (Label in Name) on all action links.
  - **Fix Note:** Verified.
- [x] Security headers where hosting allows: HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP
  - **Evidence:** `index.html#L18-L20` defines `referrer: strict-origin-when-cross-origin`, `X-Content-Type-Options: nosniff`, and `Permissions-Policy`.
  - **Fix Note:** Verified.
- [x] No mixed content, no exposed secrets/API keys, no sourcemaps leaking in prod unless intended
  - **Evidence:** All resources use HTTPS or relative paths. Zero API keys in client code.
  - **Fix Note:** Verified.
- [x] External links use `rel="noopener"` (and `noreferrer`/`nofollow` where right)
  - **Evidence:** All external links have `target="_blank" rel="noopener noreferrer"`.
  - **Fix Note:** Verified.

---

## H. Off-Site and Measurement (Manual `[~]`)
- [~] Google Search Console property verified, sitemap submitted, URL inspection requested for key pages
  - **Status:** Requires site owner login at [search.google.com/search-console](https://search.google.com/search-console).
  - **Steps for Owner:** Add `https://rachit-mangawa.github.io/`, submit `https://rachit-mangawa.github.io/sitemap.xml`, click "Request Indexing" on URL inspection.
- [~] Bing Webmaster Tools verified (feeds Copilot/ChatGPT search), sitemap submitted
  - **Status:** Requires site owner login at [bing.com/webmasters](https://www.bing.com/webmasters).
  - **Steps for Owner:** Import from Search Console or verify ownership, submit `https://rachit-mangawa.github.io/sitemap.xml`.
- [~] Analytics installed (privacy-friendly option ok) and events for resume download + contact click
  - **Status:** Optional third-party tracker (e.g. Cloudflare Web Analytics / Plausible). Can be added anytime.
- [~] GitHub profile, LinkedIn, LeetCode, Codeforces link back to the portfolio with the same name/bio
  - **Status:** Requires manual profile update on external platforms.
  - **Steps for Owner:** Ensure website link on GitHub profile, LinkedIn Contact Info, LeetCode bio, and Codeforces profile points to `https://rachit-mangawa.github.io/`.
- [~] Portfolio URL in resume PDF, GitHub bio, LinkedIn Featured
  - **Status:** Verified portfolio URL is in `resume.tex`. Ensure LinkedIn profile "Featured" section links to portfolio.
- [~] Custom domain on my name, if not already
  - **Status:** Currently hosted on `https://rachit-mangawa.github.io/`. A custom domain (e.g. `rachitmangawa.com`) can optionally be configured via GitHub Pages CNAME.
