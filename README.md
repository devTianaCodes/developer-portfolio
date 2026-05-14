# Developer Portfolio

Modern editorial-style portfolio for Tiana Oblasser and the five selected projects inside `/Users/parents/Developer`.

## Scope

- Portfolio shell: `Next.js` + `TypeScript` + `Tailwind CSS`
- Featured case studies:
  - `Chocolate Craft House`
  - `English4U`
  - `PetNest`
  - `BrickDrop`
  - `Sea Battle`

## Commands

```bash
nvm use
npm install
npm run dev
npm run build
npm run vercel:link
npm run vercel:preview
npm run vercel:prod
```

## Media

Portfolio media lives in `public/media/projects/*`.

- Ready assets are already wired into the project.
- Planned video captures are represented with poster assets and notes.
- The existing `demo-showcase` workspace remains the recommended local launcher for future screenshot and clip capture.

## Deployment

Phase 1 target:

- Deploy this portfolio to Vercel free.
- Deploy `BrickDrop` and `Sea Battle` as separate static Vercel projects.
- Deploy `Chocolate Craft House` and `PetNest` as browse-only full-stack demos.
- Keep `English4U` as a case study.

Detailed deployment steps live in [DEPLOYMENT.md](./DEPLOYMENT.md).

## Full-Stack Live App Links

The portfolio can show `Open Web App` buttons for the deployed full-stack projects without committing deployment URLs directly. Configure these public environment variables in Vercel after each frontend/backend demo is deployed:

```bash
NEXT_PUBLIC_CHOCOLATE_WEB_APP_URL=https://...
NEXT_PUBLIC_PETNEST_WEB_APP_URL=https://...
```

Leave a variable empty until that app is safely deployed. Empty values keep the portfolio focused on the case study and repository links.
