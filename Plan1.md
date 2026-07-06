# Plan 1: Restore Live Database-Backed Demos

Goal: make the live Chocolate Craft House and PetNest demos load real database records again.

Current diagnosis:

- The Vercel frontends are loading.
- The Railway backend URLs are dead because Railway trial usage expired.
- Live API requests return `404 Application not found` from Railway.
- Because the API service is missing, the backend never reaches MySQL.
- Moving from Vercel to Netlify would not fix this because the broken part is backend/database hosting.

Target architecture:

```text
Vercel = frontend hosting
Render = backend API hosting
External MySQL-compatible database = products and animal listings
```

## Step 1: Prepare Repos For Render

Status: Done locally.

Chocolate backend:

- Added `render.yaml`.
- Added `RENDER_DEPLOYMENT.md`.
- Local commit: `07232b1 Add Render deployment config`.

PetNest backend:

- Added `render.yaml`.
- Added `RENDER_DEPLOYMENT.md`.
- Local commit: `eca0ffd Add Render deployment config`.

Chocolate frontend:

- Removed stale hardcoded Railway production API fallback.
- Added required production `VITE_API_URL` handling.
- Added root `vercel.json` for correct Vite deployment from repo root.
- Added `client/.env.example`.
- Local commit: `6a19973 Require configured production API URL`.

PetNest frontend:

- Removed stale hardcoded Railway production API fallback.
- Added required production `VITE_API_URL` handling.
- Updated `.env.example`.
- Local commit: `4a0e4f2 Require configured production API URL`.

## Step 2: Refresh GitHub Authentication

Status: Done.

Why:

- Local commits exist.
- Push failed because GitHub credentials are expired.
- `gh auth status` says the token is invalid.

User action:

```bash
gh auth login -h github.com
```

Recommended answers:

```text
Git protocol: HTTPS
Authenticate Git with GitHub credentials: Yes
Login method: Web browser
```

Verified:

```bash
gh auth status
```

GitHub CLI is authenticated as `devTianaCodes`.

## Step 3: Push Commits To GitHub

Status: Done.

Commands:

```bash
git -C /Users/parents/Developer/ChocolateCraftHouse/chocolate_backend push origin main
git -C /Users/parents/Developer/PetNest/petNest-backend push origin main
git -C /Users/parents/Developer/ChocolateCraftHouse/chocolate_frontend push origin main
git -C /Users/parents/Developer/PetNest/petNest-frontend push origin main
```

Expected result:

- Render can deploy backend repos from GitHub.
- Vercel can redeploy frontend repos from GitHub.

Pushed commits:

```text
Chocolate backend: 07232b1 Add Render deployment config
PetNest backend: eca0ffd Add Render deployment config
Chocolate frontend: 6a19973 Require configured production API URL
PetNest frontend: 4a0e4f2 Require configured production API URL
```

## Step 4: Create External MySQL-Compatible Database

Status: In progress.

Code prep completed:

- Chocolate backend now supports optional `DB_SSL=true` for cloud MySQL providers.
- Chocolate seed script now supports the same SSL setting when loading the live product catalogue.
- Chocolate Render config defaults `DB_SSL=true` for production.
- PetNest docs now call out provider-specific MySQL SSL parameters in `DATABASE_URL`.
- Verification passed: Chocolate backend tests, PetNest backend TypeScript build.

Need one MySQL-compatible production database host because Render does not provide permanent free MySQL.

Database options:

- TiDB Cloud Starter, recommended first. Official docs describe it as MySQL-compatible with a no-cost free quota and no credit card required while inside the quota.
- PlanetScale, paid but strong MySQL-compatible option.
- DigitalOcean Managed MySQL, paid and reliable.
- Another MySQL host chosen by the user.

Recommended next action:

1. Create one TiDB Cloud Starter database for Chocolate.
2. Create one TiDB Cloud Starter database for PetNest.
3. Copy the connection details into the fields below.
4. Use those values in Render.

Required outputs:

Chocolate database fields:

```text
DB_HOST=
DB_PORT=3306
DB_USER=
DB_PASSWORD=
DB_NAME=
```

PetNest database URL:

```text
DATABASE_URL=mysql://USER:PASSWORD@HOST:3306/DATABASE_NAME
```

## Step 5: Deploy Chocolate Backend On Render

Status: Pending.

Render service:

```text
Repository: devTianaCodes/chocolate_backend
Root directory: server
Build command: npm install
Start command: npm start
Health check path: /api/health
```

Required Render environment variables:

```text
NODE_ENV=production
CLIENT_URL=https://chocolate-frontend-one.vercel.app
DB_HOST=<mysql-host>
DB_PORT=3306
DB_USER=<mysql-user>
DB_PASSWORD=<mysql-password>
DB_NAME=<mysql-database>
JWT_ACCESS_SECRET=<generated-secret>
JWT_REFRESH_SECRET=<generated-secret>
JWT_ACCESS_EXPIRES=15m
JWT_REFRESH_EXPIRES=7d
STRIPE_SECRET_KEY=<stripe-key>
STRIPE_WEBHOOK_SECRET=<stripe-webhook-secret>
```

Expected health check:

```text
https://<chocolate-render-api>.onrender.com/api/health
```

## Step 6: Deploy PetNest Backend On Render

Status: Pending.

Render service:

```text
Repository: devTianaCodes/petNest-backend
Build command: npm install && npx prisma generate && npm run build
Start command: npm start
Health check path: /api/health
```

Required Render environment variables:

```text
NODE_ENV=production
CLIENT_URL=https://petnest-frontend.vercel.app
APP_BASE_URL=https://petnest-frontend.vercel.app
DATABASE_URL=mysql://USER:PASSWORD@HOST:3306/DATABASE_NAME
JWT_ACCESS_SECRET=<generated-secret>
JWT_REFRESH_SECRET=<generated-secret>
ACCESS_TOKEN_TTL=15m
REFRESH_TOKEN_TTL_DAYS=7
EMAIL_FROM=no-reply@petnest.local
```

Optional Cloudinary variables:

```text
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Expected health check:

```text
https://<petnest-render-api>.onrender.com/api/health
```

## Step 7: Seed Databases

Status: Pending.

Chocolate:

Use the SQL seed path for the full product catalogue.

```bash
mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < db/schema.sql
mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < db/seeds/categories.sql
mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < db/seeds/sample_products.sql
mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < db/seeds/product_images_seed.sql
mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < db/seeds/shipping_methods.sql
mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < db/seeds/admin_user.sql
```

Expected result:

- Chocolate products table has the full live catalogue.
- Product image records are available.

PetNest:

```bash
npx prisma db push
npm run prisma:seed
```

Expected result:

- Pet categories exist.
- Demo users exist.
- Published animal listings exist.

## Step 8: Update Vercel Frontend Environment Variables

Status: Pending.

Chocolate Vercel project:

```text
VITE_API_URL=https://<chocolate-render-api>.onrender.com/api
```

PetNest Vercel project:

```text
VITE_API_URL=https://<petnest-render-api>.onrender.com/api
```

After setting each variable, redeploy both frontends.

## Step 9: Verify Live API Endpoints

Status: Pending.

Chocolate:

```bash
curl https://<chocolate-render-api>.onrender.com/api/health
curl "https://<chocolate-render-api>.onrender.com/api/products?limit=3"
```

PetNest:

```bash
curl https://<petnest-render-api>.onrender.com/api/health
curl "https://<petnest-render-api>.onrender.com/api/pets?limit=3"
```

Expected result:

- Health endpoints return OK JSON.
- Chocolate products endpoint returns real products.
- PetNest pets endpoint returns real animal listings.

## Step 10: Verify Live Frontend Pages

Status: Pending.

Open in browser:

```text
https://chocolate-frontend-one.vercel.app/shop
https://chocolate-frontend-one.vercel.app/offers
https://petnest-frontend.vercel.app/adopt
```

Expected result:

- Chocolate shop shows database products.
- Chocolate offers shows discounted products.
- PetNest adopt page shows animal cards.
- Product/animal images load.

## Current Next Action

Create or choose the external MySQL-compatible database.
