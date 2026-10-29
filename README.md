# AVG Agency — Influencer Marketing & UGC Content Creation

Conversion-focused marketing site for an influencer marketing and UGC content
creation agency working with brands in the **USA, UK, UAE and India**.

Built with **React 18 + Vite + TypeScript + Tailwind CSS + React Router**, with
per-page SEO via `react-helmet-async`, forms via **React Hook Form + Zod**, and
email delivery via **EmailJS**.

---

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values you have
npm run dev            # http://localhost:5173
npm run build          # type-check + production build
```

The site runs with **zero configuration**. Anything you have not set yet (EmailJS
keys, WhatsApp number, analytics IDs) degrades gracefully: forms show a clear
"not configured" notice, the WhatsApp button shows a placeholder, and analytics
simply never load.

---

## Environment variables

Set these in `.env` locally and in **Vercel → Settings → Environment Variables**
for production. Only `VITE_`-prefixed variables are exposed to the browser.

| Variable | Required | Purpose |
| --- | --- | --- |
| `VITE_SITE_URL` | Yes | Canonical origin, no trailing slash. e.g. `https://creatoravgagency.in` |
| `VITE_EMAILJS_SERVICE_ID` | Yes (forms) | EmailJS service ID — shared by both forms |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes (forms) | EmailJS public key — shared by both forms |
| `VITE_EMAILJS_BRAND_TEMPLATE_ID` | Yes (forms) | Brand Inquiry → notification email to you |
| `VITE_EMAILJS_BRAND_AUTOREPLY_TEMPLATE_ID` | Optional | Brand Inquiry → auto-reply to the submitter |
| `VITE_EMAILJS_CREATOR_TEMPLATE_ID` | Yes (forms) | Creator Application → notification email to you |
| `VITE_EMAILJS_CREATOR_AUTOREPLY_TEMPLATE_ID` | Optional | Creator Application → auto-reply to the submitter |
| `VITE_WHATSAPP_NUMBER` | Yes | Digits only, with country code, no `+` or spaces. e.g. `919876543210` |
| `VITE_GA4_ID` | Optional | Google Analytics 4 measurement ID. Nothing loads until set **and** consent is given |
| `VITE_META_PIXEL_ID` | Optional | Meta Pixel ID. Nothing loads until set **and** consent is given |

> Analytics are **consent-gated**: scripts load only after the visitor presses
> "Accept" in the cookie banner. Leave the IDs blank and no third-party script
> is ever requested.

---

## EmailJS template variables

Both forms send the same variable names. The single source of truth is
[`src/constants/emailjs.ts`](src/constants/emailjs.ts) — change a name there and
it changes everywhere, but remember to update the matching `{{variable}}` in the
EmailJS template too.

### Sent with **both** forms

| Variable | Value |
| --- | --- |
| `{{brand_name}}` | `AVG Agency` |
| `{{form_name}}` | `Brand Inquiry` or `Creator Application` |
| `{{submitted_at}}` | Human-readable timestamp (ISO)
| `{{reply_to}}` | Submitter's email — set this as the template's **Reply-To** |
| `{{page_url}}` | Page the form was submitted from |
| `{{utm_summary}}` | Human-readable summary of UTM / click IDs |
| `{{utm_source}}`, `{{utm_medium}}`, `{{utm_campaign}}`, `{{utm_term}}`, `{{utm_content}}`, `{{gclid}}`, `{{fbclid}}`, `{{landing_page}}` | First-touch attribution, captured per session |

### Brand Inquiry form (`/contact`)

| Variable | Field |
| --- | --- |
| `{{company_name}}` | Company name |
| `{{contact_name}}` | Contact name |
| `{{contact_email}}` | Contact email |
| `{{website}}` | Website / social profile (optional) |
| `{{budget}}` | Campaign budget range |
| `{{target_country}}` | Target market (USA / UK / UAE / India / Other) |
| `{{marketing_goals}}` | Marketing goals |
| `{{creator_categories}}` | Preferred creator categories (comma-separated) |

### Creator Application form (`/join`)

| Variable | Field |
| --- | --- |
| `{{full_name}}` | Full name |
| `{{email}}` | Email |
| `{{country_city}}` | Country and city |
| `{{instagram_handle}}` | Instagram handle (optional) |
| `{{tiktok_handle}}` | TikTok handle (optional) |
| `{{youtube_handle}}` | YouTube channel (optional) |
| `{{niche}}` | Primary niche / category |
| `{{follower_range}}` | Follower count range |
| `{{portfolio_link}}` | Portfolio link (optional) |
| `{{languages}}` | Languages (comma-separated) |
| `{{short_intro}}` | Short intro |

**Auto-reply templates** reuse the same variables (plus `{{reply_to}}` as the
"To" address). Auto-reply failures are non-fatal — the notification email is
sent first and always takes priority.

Every form also has a hidden honeypot field (`company_website_confirm`). If a
bot fills it, the submission is silently discarded and reports success.

---

## Editing content

**All copy lives in one file: [`src/content/site.ts`](src/content/site.ts).**
Nothing user-facing is hard-coded in components.

### Change the brand name

Edit `BRAND_NAME` at the top of `site.ts`. It propagates to the navbar, footer,
meta tags, WhatsApp pre-filled message and email templates.

### Change the accent colour (one place)

Colours are CSS variables in [`src/index.css`](src/index.css). Change only the
three accent values — everything else (buttons, links, focus rings, icons)
follows automatically:

```css
--accent-rgb: 37 99 255;        /* #2563FF — electric blue */
--accent-hover-rgb: 29 79 216;  /* #1D4FD8 — hover */
--accent-soft-rgb: 234 240 255; /* #EAF0FF — soft blue tiles / on-dark text */
```

Values are space-separated RGB channels (`R G B`), not hex, so Tailwind opacity
modifiers like `bg-accent/10` keep working.

The full neutral scale lives in the same block: `--ink-rgb` `#0A0A0B`,
`--surface-rgb` `#121214`, `--text-rgb` `#111827`, `--muted-rgb` `#6B7280`,
`--line-rgb` `#E5E7EB` and `--subtle-rgb` `#F6F8FB`.

Two non-token spots reference the accent — update them together if you rebrand:

- `index.html` → `<meta name="theme-color">`
- `tailwind.config.js` → `boxShadow.glow`

> **Accessibility note.** White text on `#2563FF` measures ~5.2:1 — comfortably
> above the WCAG AA 4.5:1 threshold. The soft blue `#EAF0FF` is used for icon
> tiles on light sections and for eyebrow text on near-black sections.

---

## Replacing placeholders

The site ships with **no invented content**. Anything that would normally need
real data renders as an intentional, clearly-marked empty state instead. Search
`site.ts` for `placeholder: true` / empty arrays to find everything.

### Creators — `creatorNetwork.items`

Each entry is a reserved slot (`placeholder: true`). To publish a real creator,
fill in `name`, `niche`, `platform`, `country`, `flag`, `followers`, `avatarUrl`
and `profileUrl`, then set `placeholder: false`. The `/creators` page filters
and the homepage preview grid update automatically.

### Campaign results + case studies — `results`

- `results.metrics` — the four metric tiles (reach, engagement, views,
  conversions). Put the real figure in `value` and flip `placeholder` to `false`.
- `results.caseStudies` — starts empty (`[]`). Add `CaseStudy` objects to publish
  real work; the `/work` page and homepage show an elegant empty state until then.

### Testimonials — `testimonials.items`

Ships empty. Add `Testimonial` objects to show the section; while the array is
empty the section is **hidden entirely** (no fake quotes anywhere).

---

## SEO, analytics & performance

**Per-page head** is handled by [`src/components/Seo.tsx`](src/components/Seo.tsx):
unique `<title>`, meta description, canonical URL, Open Graph and Twitter card.
The shared OG image is `public/og-image.jpg` (2560×1440) — replace the file to
change the social preview.

**Structured data** is built from `content/site.ts` in
[`src/lib/schema.ts`](src/lib/schema.ts) and injected via
[`JsonLd.tsx`](file:///d:/AvgAgency/src/components/JsonLd.tsx):

| Schema | Where |
| --- | --- |
| `Organization` + `WebSite` | every page (via [Layout.tsx](file:///d:/AvgAgency/src/components/layout/Layout.tsx)) |
| `Service` | `/services` |
| `FAQPage` | homepage FAQ section |

**Crawler files** live in `public/`: `robots.txt` and `sitemap.xml`. Update the
domain in both, plus `VITE_SITE_URL`, when the final name is chosen.

**Analytics** ([`src/lib/analytics.ts`](src/lib/analytics.ts)) is consent-gated
and silent until IDs are set. Tracked events: `cta_click` (with `label` and
`page_path`), `brand_inquiry_submit`, `creator_application_submit`,
`whatsapp_click`, `email_click`, `outbound_social_click`, `form_error`. UTM
first-touch values are captured on load and attached to every form submission.

**Performance:** system fonts fall back instantly while Space Grotesk / Inter
load with `display=swap`; images are lazy-loaded with `decoding="async"` and
intrinsic `width`/`height`; the only third-party scripts are the consented
analytics tags.

---

## Accessibility & performance

- Semantic HTML, exactly **one `<h1>` per page**, a skip link, and visible focus
  rings on every interactive element.
- Animations respect `prefers-reduced-motion`.
- Responsive at **360px, 768px and 1280px+** with no horizontal scroll; tap
  targets are at least 44px.

> All text/background pairings meet WCAG AA — including white on the `#2563FF`
> accent (~5.2:1).

---

## Pre-launch checklist

Replace these before launch (all in `src/content/site.ts` unless noted):

- [ ] `BRAND_NAME` — confirm the final trading name.
- [ ] `creatorNetwork.items` — 8 placeholder creator slots → real, consented profiles (`placeholder: false`).
- [ ] `results.metrics` — 4 placeholder metric tiles → verified numbers.
- [ ] `results.caseStudies` — empty → real case studies.
- [ ] `testimonials.items` — empty → real client testimonials (or leave hidden).
- [ ] `contact` — Instagram handle, LinkedIn URL, email, WhatsApp (`site.ts` + `VITE_WHATSAPP_NUMBER`).
- [ ] `pages.privacy` / `pages.terms` — reviewed by you; update `lastUpdated`.
- [ ] `public/og-image.jpg` — replace the generated social preview if you want bespoke artwork.
- [ ] `public/sitemap.xml` + `public/robots.txt` — confirm the domain matches the final one.
- [ ] `.env` / Vercel — EmailJS IDs, WhatsApp number, `VITE_SITE_URL`.
- [ ] `.env` / Vercel — `VITE_GA4_ID` and `VITE_META_PIXEL_ID` (optional).
