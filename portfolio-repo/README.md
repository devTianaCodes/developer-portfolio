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
cd portfolio-repo
nvm use
npm ci
npm run dev
```

The development server runs at [http://localhost:5300](http://localhost:5300).

The application lives in `portfolio-repo/` within the Git repository. Run npm commands from this directory; its scripts, lint configuration, lockfile, and runtime declaration are self-contained. The repository-level GitHub Actions workflow also uses this directory.

Open the enclosing Git repository as your editor/Codex project so the workspace includes both `portfolio-repo/` and `.github/`. From that Git root, you can also start the app with `npm --prefix portfolio-repo run dev`.

## Quality checks

Run the repository gates in this order before handoff:

```bash
npm run i18n:check:strict
npm run media:check
npm run lint
npm run typecheck
npm test
npm run build
```

UI changes also require focused browser checks at narrow mobile, tablet, and desktop widths. Verify all enabled locales, keyboard and focus behavior, reduced motion, missing media, broken links, and horizontal overflow on affected routes.

The repository uses Node's test runner for content, localization, metadata, carousel, and media integrity checks. The complete local gate matches CI: strict localization and media validation, ESLint, typechecking, tests, and a production build.

The build also runs `prerender:check`, which verifies actual generated HTML and the prerender manifest for all 39 localized pages. The route summary alone is not sufficient to prove static rendering. Locale switching retains query parameters and section anchors. Carousel rotation pauses while hovered and stops when keyboard focus enters; use the play button to resume. Reduced-motion preferences apply to both carousels and credential dialogs.

For HTTP smoke checks, start the production build with `npm start -- --hostname localhost --port 5300` and run `npm run test:production -- http://localhost:5300` in another terminal. This checks every localized page, canonical URLs, cache hits, 404s, bundled demo entry points, and social images. Use the same hostname for the server and test URL so middleware rewrites stay on the same origin.

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
npm run vercel:settings -- --environment preview
npm run vercel:build
npm run vercel:preview
npm run vercel:prod
```

These npm scripts run Vercel from the enclosing Git root, where the existing `.vercel` link lives. The linked project is `dev-tiana-portfolio`, backed by `devTianaCodes/developer-portfolio` on `main`, with Vercel Root Directory set to `portfolio-repo`. Use `npm run vercel:pull` separately if you need development environment variables in the app's ignored `.env.local` file.

Preview and production deployment require explicit authorization. A normal commit or push does not itself authorize a release.

Detailed deployment steps live in [DEPLOYMENT.md](./DEPLOYMENT.md).

## Full-Stack Live App Links

The portfolio can show `Open Web App` buttons for the deployed full-stack projects without committing deployment URLs directly. Configure these public environment variables in Vercel after each frontend/backend demo is deployed:

```bash
NEXT_PUBLIC_CHOCOLATE_WEB_APP_URL=https://...
NEXT_PUBLIC_PETNEST_WEB_APP_URL=https://...
```

The content model includes safe public fallback URLs for both applications. Override them only when a reviewed replacement deployment is ready. Both About and project case studies use these values. Overrides must be absolute HTTPS URLs without embedded credentials; invalid values fail validation without being logged. An explicitly empty value disables the corresponding optional link.
