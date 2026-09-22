# Deployment Guide — Mouhib Writeups

This publication is architected as a high-performance, static editorial journal designed for direct deployment to **Cloudflare Pages**.

---

## 1. Prerequisites & Installation

Ensure Node.js 18+ or 20+ is installed on your workstation.

```bash
# Clone the repository
git clone <YOUR_GIT_REPO_URL>
cd blogs

# Install dependencies
npm install
```

---

## 2. Local Development

To run the local development server with hot-module reloading:

```bash
npm run dev
```

By default, Astro serves the site at `http://localhost:4321/`.

Test the localized routes:
- Editorial index: `http://localhost:4321/`
- Arabic Master Article: `http://localhost:4321/ar/articles/session-hijacking/`
- English Edition: `http://localhost:4321/en/articles/session-hijacking/`

---

## 3. Production Build

To compile the static artifacts:

```bash
npm run build
```

This compiles all HTML, CSS, JavaScript, and SVG assets into the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 4. Cloudflare Pages Deployment

### Option A: Git Integration (Recommended)
1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository (`mouhib-writeups` or `blogs`).
4. In the **Set up builds and deployments** step, configure:
   - **Framework preset**: `None` or `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (or path to project folder)
5. Click **Save and Deploy**.

### Option B: Direct Upload via Wrangler CLI
```bash
# Install Wrangler globally or use npx
npx wrangler pages deploy dist --project-name=mouhib-writeups
```

---

## 5. Custom Subdomain Configuration (`writeups.<MAIN_DOMAIN>`)

1. Inside your Cloudflare Pages project, click the **Custom domains** tab.
2. Click **Set up a custom domain**.
3. Enter your intended production subdomain, for example:
   ```
   writeups.mouhibmahadbi.com
   ```
4. If your parent domain (`mouhibmahadbi.com`) is already managed by Cloudflare DNS:
   - Cloudflare will automatically provision the `CNAME` record pointing to `<project>.pages.dev`.
   - Click **Activate domain**.
5. If your domain is managed by an external registrar:
   - Add a `CNAME` record in your DNS provider:
     - **Name**: `writeups`
     - **Target**: `<your-project-name>.pages.dev`

---

## 6. Environment Variables Configuration

To configure the canonical origin for production:

1. In Cloudflare Pages, go to **Settings** > **Environment variables**.
2. Add the variable:
   - **Variable name**: `SITE_URL`
   - **Value**: `https://writeups.mouhibmahadbi.com` (replace with your actual domain)
3. Redeploy the project so that all sitemaps, OpenGraph cards, and canonical tags compile with your custom domain.

> [!NOTE]
> All build secrets (e.g. `NOTION_TOKEN` if future CMS integrations are added) must remain in Cloudflare's server-side environment variables and are never bundled into client-side JavaScript.

---

## 7. Security Headers & Caching (`_headers`)

Cloudflare Pages automatically reads the `public/_headers` file included in the repository. It enforces:

- **HSTS**: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
- **MIME Sniffing Prevention**: `X-Content-Type-Options: nosniff`
- **Clickjacking Protection**: `X-Frame-Options: SAMEORIGIN`
- **Strict Referrer Policy**: `Referrer-Policy: strict-origin-when-cross-origin`
- **Content Security Policy (CSP)**: Strict origin rules for scripts, styles, and SVG graphics.
- **Cache Strategy**:
  - `HTML`: `public, max-age=0, must-revalidate` (allows instantaneous updates on new deploys).
  - `_astro/*` (hashed bundles): `public, max-age=31536000, immutable`.

---

## 8. Post-Deployment Verification Checklist

Run these quick checks after deployment to verify end-to-end correctness:

- [ ] **HTTPS Enforced**: Navigating to `http://writeups.<MAIN_DOMAIN>` automatically redirects to `https://writeups.<MAIN_DOMAIN>`.
- [ ] **Subdomain Health**: Root `https://writeups.<MAIN_DOMAIN>/` renders the editorial index.
- [ ] **Arabic Route**: `https://writeups.<MAIN_DOMAIN>/ar/articles/session-hijacking/` renders with `dir="rtl"` and `lang="ar"`.
- [ ] **English Route**: `https://writeups.<MAIN_DOMAIN>/en/articles/session-hijacking/` renders with `dir="ltr"` and `lang="en"`.
- [ ] **Language Toggle**: Clicking "العربية" or "EN" switches directly between the localized editions of the article.
- [ ] **Sitemap Discovery**: Check `https://writeups.<MAIN_DOMAIN>/sitemap.xml` returns HTTP 200 with `<xhtml:link>` alternates.
- [ ] **Robots Exclusion**: Check `https://writeups.<MAIN_DOMAIN>/robots.txt` references the sitemap.
- [ ] **Canonical URL**: Inspect `<link rel="canonical">` in page source to ensure it matches the production HTTPS subdomain.
- [ ] **Social Meta**: Test with [OpenGraph.xyz](https://www.opengraph.xyz/) to confirm `og:title`, `og:site_name = "Mouhib Writeups"`, and Twitter cards are populated.
- [ ] **TOC Scroll Spy**: Scroll the article on desktop to verify active section titles subtly highlight in muted olive (`#5F6849`).
- [ ] **Code Copy Buttons**: Verify clicking `COPY` on code blocks updates the button state to `COPIED!` and populates the clipboard.
