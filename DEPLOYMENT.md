# Vercel Deployment

This portfolio is a standard `Next.js` app and does not need a custom `vercel.json` for the first launch.

## Recommended production path

Use the Vercel dashboard to import the repository, then keep CLI deployment available for previews and local linking.

### Dashboard import

1. Push the repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository that contains `developer-portfolio`.
4. Keep the detected framework as `Next.js`.
5. Keep the root directory as the repository root if this portfolio lives in its own repo.
6. Add the optional full-stack live app URL variables only after those demos are deployed.
7. Deploy.

### Local CLI workflow

After installing dependencies and using Node 20 LTS locally:

```bash
nvm use
npm run vercel:link
npm run vercel:pull
npm run vercel:preview
npm run vercel:prod
```

## Full-stack live app URLs

The portfolio supports public live links for the selected full-stack projects through build-time environment variables:

```bash
NEXT_PUBLIC_CHOCOLATE_WEB_APP_URL=
NEXT_PUBLIC_PETNEST_WEB_APP_URL=
```

Keep a value empty until that app is safely deployed. When a value is present, the related project card and case-study hero show `Open Web App`.

## Full-stack demo deployment path

Use Vercel for each Vite frontend and Railway for each Express API plus MySQL database.

### Chocolate Craft House

- Backend source: `ChocolateCraftHouse/chocolate_backend/server`
- Frontend source: `ChocolateCraftHouse/chocolate_frontend/client`
- Railway backend env: `CLIENT_URL`, MySQL `DB_*`, JWT secrets, `JWT_ACCESS_EXPIRES`, `JWT_REFRESH_EXPIRES`, placeholder/test `STRIPE_SECRET_KEY`, placeholder/test `STRIPE_WEBHOOK_SECRET`.
- Seed: run `npm run seed:demo` after the Railway MySQL variables are set.
- Vercel frontend env: `VITE_API_URL=<railway-api-url>/api`.
- Portfolio env after frontend deploy: `NEXT_PUBLIC_CHOCOLATE_WEB_APP_URL=<vercel-frontend-url>`.

### PetNest

- Backend source: `PetNest/petNest-backend`
- Frontend source: `PetNest/petNest-frontend`
- Railway backend env: `CLIENT_URL`, `DATABASE_URL`, JWT secrets, `EMAIL_FROM`, `APP_BASE_URL`; leave Cloudinary empty for browse-only v1.
- Seed: run `npm run prisma:generate`, `npm run build`, `npx prisma db push`, then `npm run prisma:seed`.
- Vercel frontend env: `VITE_API_URL=<railway-api-url>/api`.
- Portfolio env after frontend deploy: `NEXT_PUBLIC_PETNEST_WEB_APP_URL=<vercel-frontend-url>`.

## Current deployment assumptions

- Node version: `>=20.16.0`
- Framework preset: `Next.js`
- Full-stack live app URL variables are optional and public
- Media assets are shipped from `public/media`

## Launch checklist

- Add final full-stack frontend URLs to the portfolio Vercel environment after deployment.
- Add a custom domain later if needed; the first launch can use the free `.vercel.app` domain.
- Capture and replace the planned demo videos in `public/media/projects/*`.

## Notes

- Full-stack demos should stay browse-only for v1: no real payments, no real email sending, no public admin credentials, and no public uploads.
- Vercel and Railway CLI credentials are account-local; do not commit deployment tokens or generated secret values.
