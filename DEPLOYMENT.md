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
6. There are currently no required environment variables for the portfolio shell.
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

## Current deployment assumptions

- Node version: `>=20.16.0`
- Framework preset: `Next.js`
- No required runtime environment variables yet
- Media assets are shipped from `public/media`

## Launch checklist

- Replace placeholder project links with public repository URLs when ready.
- Add final live demo URLs for the project cards after deployment.
- Add a custom domain later if needed; the first launch can use the free `.vercel.app` domain.
- Capture and replace the planned demo videos in `public/media/projects/*`.

## Notes

- `Chocolate Craft House` remains media-first until its live demo strategy is finalized.
- `English4U` is still the best candidate for the first full-stack live deployment after the portfolio shell itself.
- `PetNest` should follow only after backend hosting and database choices are locked.
