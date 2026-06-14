# Free Mold Inspection

SEO-optimized marketing website for **Free Mold Inspection** — certified mold
inspection and testing in Pembroke Park, FL.

Built with **Astro (SSG)**, **TypeScript (strict)**, and **Tailwind CSS v4**.
Ships zero client-side JavaScript by default (Astro Islands architecture).

## Tech stack

- [Astro 5](https://astro.build) — static site generation
- TypeScript (strict mode)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `@astrojs/sitemap` — automatic `sitemap-index.xml`
- Content Collections with Zod schemas (`src/content/config.ts`)

## Project structure

```text
freeMoldInspection/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── robots.txt
└── src/
    ├── assets/images/        # optimized via astro:assets
    ├── components/           # SEO, Navbar, Footer, Hero, Card, Button, ...
    ├── content/
    │   ├── config.ts         # Zod schema for the "services" collection
    │   └── services/*.md     # one markdown file per service
    ├── data/site.ts          # single source of truth for business info
    ├── layouts/BaseLayout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── about.astro
    │   ├── contact.astro
    │   ├── 404.astro
    │   └── services/
    │       ├── index.astro
    │       └── [slug].astro
    └── styles/global.css
```

## Commands

| Command           | Action                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Type-check and build to `./dist/`         |
| `npm run preview` | Preview the production build locally      |

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **Import Project** — the Astro framework is auto-detected
   (build command `npm run build`, output directory `dist`).
3. No adapter is required for static output.

## Before going live

- Update `SITE_URL` in `astro.config.mjs` and `url` in `src/data/site.ts`
  to the real production domain.
- Replace the form `action` in `src/pages/contact.astro` with your form
  endpoint (e.g. Formspree).
- Confirm business hours, email, and social links in `src/data/site.ts`.
