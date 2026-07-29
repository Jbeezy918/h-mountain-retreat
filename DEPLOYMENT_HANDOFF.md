# H Mountain Retreat — Cloudflare Handoff

## Deployable now

The complete public-facing website can be deployed to Cloudflare Workers now.
Routes, imagery, responsive layouts, navigation, time-based hero states, and the
reservation preview are included.

## Required deployment sequence

1. Use Node.js 22.13 or newer.
2. Run `npm ci`.
3. Run `npm run lint`.
4. Run `npm test`.
5. Run `npm run deploy:dry-run`.
6. Authenticate Cloudflare with `wrangler login`, or set
   `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`.
7. Set `NEXT_PUBLIC_CONTACT_EMAIL` to the verified H Mountain inbox.
8. Run `npm run deploy:cloudflare`.
9. Verify every route on desktop and mobile.
10. Attach `hmountains.com` to the successful Worker deployment.
11. Confirm DNS, TLS, redirects, and both apex and `www` behavior.

## Routes to verify

- `/`
- `/amenities`
- `/events`
- `/story`
- `/map`
- `/checkout`
- `/success`

## Reservation launch gate

The current map and calendar are a visual booking preview. They are not a source
of truth. Before enabling payment, implement all of the following:

- Cloudflare D1 tables for campsites, reservations, holds, and payment events
- server-side availability checks for every requested night
- atomic temporary holds with expiration
- server-calculated rates and deposits; never trust query-string amounts
- Stripe Checkout creation only after a valid hold
- signed Stripe webhook verification
- idempotent payment processing
- reservation confirmation only from a successful webhook
- automatic hold release after failed, canceled, or expired checkout
- an admin-controlled blocked-date and reservation view
- cancellation, refund, privacy, and booking policies

Until those items are complete, do not set a production Stripe key and do not
describe selected dates as reserved or held.

## Business information still required

- official property address or approved public location wording
- confirmed contact email and phone
- final campsite names, rates, capacity, and amenities
- opening date and operating season
- check-in/check-out rules
- cancellation and refund policy
- event inquiry process
- real property and hut photos when available

## Domain

The intended production domain is `hmountains.com`. Remove conflicting legacy
records before attaching it to the final Worker. Use the exact DNS targets
Cloudflare supplies for that deployment rather than reusing old preview-site
records.

## Security

- never commit `.env`
- use a restricted Stripe key, not a broad secret key
- store secrets in Cloudflare Worker secrets
- validate all booking input on the server
- rate-limit booking and inquiry endpoints
- keep generated concept imagery labeled until replaced with real property photos
