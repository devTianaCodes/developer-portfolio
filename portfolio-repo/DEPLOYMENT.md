# Vercel Deployment

The portfolio is a Next.js 15 App Router application in the repository's `portfolio-repo/` directory. Run npm commands from that application directory. The `vercel:*` scripts pass `--cwd ..` so Vercel resolves its project link and build root from the enclosing Git repository. Vercel detects the framework automatically; no custom `vercel.json` is currently required.

The existing Vercel project is `dev-tiana-portfolio` in `oblassertatiana-7513s-projects`. It is connected to GitHub repository `devTianaCodes/developer-portfolio`, production branch `main`, and uses Root Directory `portfolio-repo`. Open the enclosing Git repository in Codex to include both the application and CI configuration in the writable workspace.

## Prerequisites

- Node.js `>=20.16.0` using the version declared in `.nvmrc`
- Dependencies installed from the committed `package-lock.json`
- Access to the existing Vercel project when deploying from the CLI
- Explicit authorization before creating a preview or production deployment

Never commit `.env.local`, Vercel credentials, deployment tokens, or generated secret values.

## Pre-deployment verification

Run the complete repository gate before creating a deployment:

```bash
nvm use
npm ci
npm run i18n:check:strict
npm run media:check
npm run lint
npm run typecheck
npm test
npm run build
```

For UI or content changes, also check the affected English, Italian, and Romanian routes at mobile, tablet, and desktop widths. Verify keyboard and focus behavior, reduced motion, images, external links, and horizontal overflow.

## Vercel dashboard workflow

1. Confirm the approved commit includes the complete move into `portfolio-repo/`. A Git push may trigger an automatic production deployment; obtain deployment authorization before pushing to `main`.
2. In Vercel, open the existing linked portfolio project.
3. Keep the framework preset as `Next.js` and the root directory as `portfolio-repo`.
4. Confirm that the production branch is `main`.
5. Add or update optional public environment variables only when a reviewed replacement live application is available.
6. Deploy and verify the generated preview or production URL before considering the release complete.

## Vercel CLI workflow

Use the existing npm scripts rather than calling project-local binaries directly:

```bash
npm run vercel:link
npm run vercel:settings -- --environment preview
npm run vercel:build
npm run vercel:preview
npm run vercel:prod
```

- `vercel:link` connects the enclosing Git checkout to the intended Vercel project. Select the existing `dev-tiana-portfolio` project.
- `vercel:settings` refreshes Vercel build settings and environment configuration under the Git root's ignored `.vercel` directory. Select the matching environment before a local Vercel build.
- `vercel:pull` separately downloads development variables to `portfolio-repo/.env.local` for `npm run dev`; it does not refresh Vercel build settings.
- `vercel:build` reproduces the Vercel build locally.
- `vercel:preview` creates a preview deployment.
- `vercel:prod` creates a production deployment.

Linking and pulling configuration are local setup operations. Preview and production commands publish externally and always require explicit authorization.

## Optional full-stack application URLs

The portfolio can expose reviewed Chocolate Craft House and PetNest deployments through public build-time variables:

```bash
NEXT_PUBLIC_CHOCOLATE_WEB_APP_URL=https://...
NEXT_PUBLIC_PETNEST_WEB_APP_URL=https://...
```

These values are intentionally public because `NEXT_PUBLIC_*` variables are included in browser-delivered code. Never store API credentials, database URLs, JWT secrets, payment keys, or private service endpoints in them.

The content model has safe public fallback URLs for both projects. Override a fallback only after the replacement application has passed a focused live check. When changing either value, create a new deployment because Next.js resolves public variables at build time.

The same resolved links are used on About and the corresponding case studies. Overrides must be absolute HTTPS URLs without embedded credentials. An empty override hides the optional link; malformed or unsafe URLs fail the build without exposing their values.

The Git root's `.vercel` link is shared by the npm wrappers; do not create another link inside `portfolio-repo/`. The parent's `.env.local` is not loaded by Next.js in the application directory. Use the documented environment commands when preparing an authorized deployment. Local code checks do not change production settings.

## Bundled game demos

BrickDrop and Sea Battle are distributed with this portfolio rather than as separate Vercel projects:

- `/demos/brickdrop.html`
- `/demos/sea-battle.html`

Their generated assets live under `public/demos/*/assets/`. Update those files only by rebuilding the corresponding source application and copying the resulting bundle; do not hand-edit generated assets.

## Preview verification

Before promoting or accepting a deployment, verify:

- Home, About, Projects, Credentials, and Contact load successfully.
- All eight project case studies load in English, Italian, and Romanian.
- Locale switching preserves the equivalent route.
- BrickDrop and Sea Battle demo routes load and remain playable.
- Credential images are redacted and certificate dialogs work with keyboard controls.
- Project and UX/UI certificate carousels move correctly and respect reduced motion.
- Canonical URLs, language alternates, `robots.txt`, and `sitemap.xml` use the production origin.
- No images are broken, no page overflows horizontally, and the browser console has no unresolved errors.
- Optional external application and repository links reach the intended public destinations.

## Production checklist

- Confirm the exact commit intended for release is present on `main`.
- Confirm strict translations, lint, and production build are green for that commit.
- Review Vercel environment changes without exposing their values in logs or documentation.
- Deploy only after explicit authorization.
- Open the production URL and repeat the preview smoke checks.
- Confirm the Vercel deployment reports the same Git commit.
- Keep the previous successful deployment available for rollback until verification is complete.

## Related full-stack deployments

The portfolio documents sibling applications but does not own their runtime infrastructure. Deploy their frontends, APIs, and databases from their own repositories and follow their project-specific instructions. Keep public demonstrations non-destructive: no real payments, email delivery, public administrator credentials, or unreviewed user uploads.
