# Arula Herbals — Website

A static marketing website for **Arula Herbals**, built with **Next.js 14 (App Router)** and **Tailwind CSS**, matching the Product Requirement Document (Version 1.0, 17 Sept 2026).

No backend, database, or checkout — every product routes to **WhatsApp**, **Amazon**, or **Flipkart**, as scoped.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, health-benefit pillars, farm-to-bottle story, quality badges, product grid, recipe teaser, testimonials |
| `/products` | Full product listing |
| `/products/[slug]` | One page per powder (Moringa, Beetroot, Ashwagandha, Amla, Wheatgrass, Raw Banana) — overview, nutrient profile, real-customer timeline, recipes |
| `/quality` | Lab report checks, certification, and farm origin showcase |
| `/about` | Brand story and values |
| `/contact` | WhatsApp / email contact channels |

Plus `sitemap.xml`, `robots.txt`, and Open Graph / meta tags for SEO, generated automatically at build.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

## Building the static site

This project is configured with `output: "export"` in `next.config.mjs`, so a production build produces a fully static site in `/out` — no Node.js server required.

```bash
npm run build
```

The `/out` folder can be deployed to **Vercel**, Netlify, GitHub Pages, S3, or any static host.

### Deploying to Vercel (recommended, per the PRD)

1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed (framework preset: Next.js). Keep the default build command (`next build`); the static export in `/out` is served automatically.
4. Connect the client-owned domain `arulaherbals.com` under Project → Settings → Domains.

## Brand assets already applied

- **Logo**: the client's logo is live in the header (`public/images/brand/logo-mark.png`) and footer (same mark, inverted to white via CSS on the dark background). The full wordmark lockup is saved at `public/images/brand/logo-full.png` for anywhere a larger logo is needed. Favicon/app icon (`app/icon.png`, `app/apple-icon.png`) are generated from the same mark.
- **Moringa product photography**: the supplied pouch photo, "Why Arula Herbals" comparison graphic, and certification/quality graphic are live on `/products/moringa-powder` (`public/images/moringa/`), plus the pouch photo on its product card everywhere it's listed (home, `/products`).
- **Pricing**: a `price` field now exists on the `Product` type in `data/products.ts`. Moringa is set to a **placeholder `₹399` per 100g pouch** — replace with the real price (and add `price`/`priceUnit` to the other five products the same way) once confirmed.

## Content that still needs client assets

- **Product photography for the other 5 powders** (Beetroot, Ashwagandha, Amla, Wheatgrass, Raw Banana): each still shows the illustrated jar placeholder (`JarGlyph` in `components/Botanical.tsx`) until real photos arrive. Follow the same pattern used for Moringa in `data/products.ts` (`heroImage`, `compareImage`, `qualityImage`) — the product card and detail page already render real images automatically whenever those fields are set.
- **Confirmed pricing** for all six products.
- **Lab certificates**: link real PDFs from `/quality` once received (currently states certificates are available on request via WhatsApp).
- **WhatsApp numbers / pre-filled message**: configured in `data/site.ts` (`whatsappNumbers`, `whatsappLink`).

## Design tokens

- **Colour**: Deep Forest Green `#1F3B2C`, Sage Green `#7C9473`, Warm Sand `#E8DCC4`, Cream `#FAF6EC`, Botanical Clay accent `#A85C32`.
- **Type**: Fraunces (display/serif headlines) + Inter (body), loaded via `next/font/google`.
- All tokens live in `tailwind.config.ts`.

## Analytics & CTA tracking

No analytics platform is wired in by default (PRD left this "as per convenience"). Every outbound CTA (`WhatsApp`, `Amazon`, `Flipkart`) carries a `data-cta` attribute (see `components/CTAButtons.tsx`) so a script such as Google Analytics / Plausible can be added later and bound to `data-cta="whatsapp" | "amazon" | "flipkart"` click events without touching markup.

## Out of scope (per PRD)

E-commerce checkout, payment gateway, authentication, admin dashboard, custom backend/database, and paid third-party integrations are explicitly out of scope for this build.
