# Developer Portfolio

Multilingual developer portfolio for Tatiana Oblasser, built around detailed case studies, professional credentials, and immediately testable browser experiences.

## Scope

- Portfolio shell: `Next.js 15`, `React 19`, strict `TypeScript`, `Tailwind CSS`, `Framer Motion`, and `next-intl`
- Locales: English, Italian, and Romanian
- Main routes: Home, About, Projects, Credentials, and Contact
- Eight project case studies:
  - Chocolate Craft House
  - English4U
  - PetNest
  - OrchidCare
  - PayTrack
  - AI Comparator
  - BrickDrop
  - Sea Battle
- Six full-stack product case studies and two bundled browser-game demos
- Four professional certificates, ten UX/UI certificates, and three privacy-redacted higher-education credentials

## Experience

The site combines responsive project galleries, localized case-study content, accessible certificate dialogs, smooth project and UX/UI carousels, metadata for every locale, and static generation for all public pages. Project names remain stable across languages while descriptive content, navigation, metadata, and supporting interface copy are localized.

## Project structure

- `src/app`: App Router pages, layouts, metadata, sitemap, and robots configuration
- `src/components`: reusable interface and interactive components
- `src/content`: typed portfolio, credential, and localized project content
- `src/i18n`: locale routing, messages, navigation, and metadata helpers
- `src/lib`: pure project, carousel, media, and localization helpers
- `public/media`: portfolio images and credential media
- `public/demos`: bundled BrickDrop and Sea Battle builds

## Local development

```bash
nvm use
npm ci
npm run dev
```

The development server runs at [http://localhost:5300](http://localhost:5300).

## Quality checks

Run the repository gates in this order before handoff:

```bash
npm run i18n:check:strict
npm run lint
npm run build
```

UI changes also require focused browser checks at narrow mobile, tablet, and desktop widths. Verify all enabled locales, keyboard and focus behavior, reduced motion, missing media, broken links, and horizontal overflow on affected routes.

The repository does not yet include an automated test runner. Do not claim unit-test coverage until one is introduced; the current executable proof is strict localization validation, ESLint, the production build, and focused browser behavior checks.

## Content and media

Project media lives in `public/media/projects/*`, credentials in `public/media/credentials/*`, and shared site assets in their corresponding `public/media/*` folders.

- Keep project slugs, locale overlays, media paths, and project-presentation entries structurally aligned.
- Add every UI message to English, Italian, and Romanian catalogs.
- Keep higher-education documents privacy-redacted.
- Do not edit generated demo assets under `public/demos/*/assets/` manually.
- Do not commit temporary browser screenshots, traces, or planning documents.

## Deployment

The portfolio is deployed as a statically generated Next.js application on Vercel. The two interactive games are bundled under `/demos/brickdrop.html` and `/demos/sea-battle.html`; project case studies and repository links remain available independently of optional full-stack demo URLs.

Deployment commands:

```bash
npm run vercel:link
npm run vercel:pull
npm run vercel:build
npm run vercel:preview
npm run vercel:prod
```

Preview and production deployment require explicit authorization. A normal commit or push does not itself authorize a release.

Detailed deployment steps live in [DEPLOYMENT.md](./DEPLOYMENT.md).

## Full-Stack Live App Links

The portfolio can show `Open Web App` buttons for the deployed full-stack projects without committing deployment URLs directly. Configure these public environment variables in Vercel after each frontend/backend demo is deployed:

```bash
NEXT_PUBLIC_CHOCOLATE_WEB_APP_URL=https://...
NEXT_PUBLIC_PETNEST_WEB_APP_URL=https://...
```

The content model includes safe public fallback URLs for both applications. Override them only when a reviewed replacement deployment is ready.
