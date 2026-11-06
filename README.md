# Friends of Woodstock CE Primary School — PTA website

A rough-but-working React site for the school PTA, based on the content of the
existing school page. It covers the basics (welcome, get involved, committee
with photos, contact) and links out to proper platforms for **ticketing** and
**donations/payments**, which should never be handled by the site itself.

## Stack

- **React 18 + Vite** (plain JSX) with `react-router-dom` for pages:
  Home, Events, Committee, Donate, Contact.
- **Alchemy (alchemy.run)** — Infrastructure-as-Code in TypeScript, used in
  `infra/alchemy.run.ts` to deploy the built site to Cloudflare as a Worker
  with static assets.
- **Cloudflare free hosting** — yes, this works for free. Cloudflare Pages
  (or a Worker with static assets) serves static sites with **unlimited
  requests and bandwidth**, free SSL and a custom domain. Free-tier limits to
  know about: 500 builds/month, 20,000 files per site, 25 MiB per file, and
  100,000 requests/day if you add server-side Functions (this site has none).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # output in dist/
```

## Deploy (free, on Cloudflare)

**Live deployment:** <https://pta.claidler.uk> (alias
<https://woodstock-pta.pages.dev>) — Cloudflare Pages project
`woodstock-pta`, production branch `main`.

1. **GitHub Action (what actually runs):** `.github/workflows/deploy.yml`
   builds with `npm ci && npm run build` and runs
   `wrangler pages deploy dist --project-name woodstock-pta` on every push to
   `main`. It needs two repo secrets: `CLOUDFLARE_API_TOKEN` and
   `CLOUDFLARE_ACCOUNT_ID`.

   ```bash
   gh secret set CLOUDFLARE_API_TOKEN --body "$TOKEN"
   gh secret set CLOUDFLARE_ACCOUNT_ID --body "$ACCOUNT_ID"
   gh run watch        # watch a deploy
   ```

   The `public/_redirects` file makes client-side routes (`/committee`,
   `/events`, …) resolve to `index.html`. To deploy by hand instead of
   waiting for CI:

   ```bash
   npm run build
   CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... \
     npx --yes wrangler pages deploy dist --project-name woodstock-pta \
     --branch main --commit-dirty=true
   ```

2. **Alchemy (infrastructure as code, not currently used):**

   ```bash
   npm install --save-dev alchemy @alchemy.run/cloudflare effect
   npx alchemy login          # connect your Cloudflare account once
   npx alchemy deploy infra/alchemy.run.ts
   ```

   This builds the Vite app and deploys it as a Cloudflare Worker serving
   static assets, all declared in code.

## Editing content

Everything lives in **`src/config/site.js`**: committee members, events
(including the ticket link per event), donation/payment links, contact email.
Edit that one file and rebuild — no other code changes needed.

### Committee photos

Drop real photos (e.g. `carys-connelly.jpg`) into `public/committee/` and
point the member's `photo` field at them. The repo ships with SVG placeholder
avatars (initials) so the layout works out of the box.

### Tickets, donations, payments

Set `ticketUrl` on an event (e.g. an Eventbrite page) and the Events page
shows a "Book tickets" button. Set the `url` fields under `donations` (e.g.
JustGiving, PayPal, SchoolMoney) and the Donate page links out to them.
Keep payments on those established, PCI-compliant platforms rather than
collecting card details on this site.

## School website page

See `docs/school-page-update.md` for suggested minimal replacement copy for
the current school page, turning it into basic info plus a link to this site.
