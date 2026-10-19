# initlabel.com

Single-page [vinext](https://github.com/cloudflare/vinext) site (Next.js App Router API on Vite) deployed to Cloudflare Workers.
The page shows the initlabel logo while loading and renders a full-viewport iframe of https://initlabel.iceiy.com/.

## Structure

```
app/
  layout.tsx      metadata: title, favicons, manifest, theme color, Open Graph
  page.tsx        logo splash + full-screen iframe
  globals.css     styles
public/
  logo.png, favicon.*, apple-touch-icon.png, android-chrome-*.png
  site.webmanifest
  robots.txt
  sitemap.xml
cloudflare.config.ts   Worker name, entrypoint, static-asset routing
vite.config.ts         vinext + Cloudflare Vite plugin
```

To change the framed URL, edit `SITE_URL` in `app/page.tsx`.

## Local development

Requires Node.js 22+.

```bash
npm install
npm run dev        # dev server with HMR
npm run build      # production build
npm run start      # preview the built Worker locally
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial vinext site"
git branch -M main
git remote add origin https://github.com/<you>/initlabel-site.git
git push -u origin main
```

## Deploy on Cloudflare (Workers Builds, from GitHub)

1. Cloudflare dashboard → Workers & Pages → Create → Import a repository → pick this repo.
2. Settings:
   - Build command: `npm run build`
   - Deploy command: `npx vinext-cloudflare deploy --skip-build`
   - Root directory: `/`
3. Save and deploy. Every push to `main` redeploys.
4. Custom domain: Worker → Settings → Domains & Routes → Add → `initlabel.com` (and `www.initlabel.com` if wanted).

The Worker name (`initlabel`) in `cloudflare.config.ts` must match the Worker name in the dashboard.

## Deploy manually (optional)

```bash
npx cf login       # or set CLOUDFLARE_API_TOKEN ("Edit Cloudflare Workers" template)
npm run deploy
```
