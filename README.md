# H Mountain Retreat

Production website source for `hmountains.com`.

The experience includes:

- time-aware sunrise, daytime, sunset, and night hero scenes
- responsive multi-page retreat, amenities, events, story, and property-map UI
- campsite selection and calendar preview
- accessible navigation, reduced-motion support, and mobile layouts
- Cloudflare Workers deployment through vinext

## Local setup

Requirements:

- Node.js 22.13 or newer
- npm

```bash
npm ci
npm run dev
```

## Quality gates

```bash
npm run lint
npm test
npm run deploy:dry-run
```

## Cloudflare deployment

Authenticate with `wrangler login`, or provide `CLOUDFLARE_API_TOKEN` and
`CLOUDFLARE_ACCOUNT_ID` in the deployment environment. Then run:

```bash
npm run deploy:cloudflare
```

The deploy command builds and publishes the application to Cloudflare Workers.
Attach `hmountains.com` only after the Worker deployment is healthy.

Read [DEPLOYMENT_HANDOFF.md](DEPLOYMENT_HANDOFF.md) before enabling reservations.

## Important launch state

The public marketing experience is deployable. The reservation calendar is
currently sample data and Stripe is intentionally incomplete. Do not accept
money until D1-backed availability, temporary holds, server-authoritative
pricing, Stripe webhook confirmation, and double-booking prevention are live.

## Main structure

- `app/page.tsx` — shared shell and homepage
- `app/amenities/page.tsx` — on-property and nearby experiences
- `app/events/page.tsx` — weddings, reunions, and retreats
- `app/story/page.tsx` — animated brand story
- `app/map/page.tsx` — campsite map and calendar preview
- `app/checkout/page.tsx` — checkout preview
- `app/api/checkout/route.ts` — unfinished Stripe handoff; not production-safe
- `public/assets/` — optimized production imagery
- `worker/index.ts` — Cloudflare Worker entry point
