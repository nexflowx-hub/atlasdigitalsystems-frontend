# ATLAS DIGITAL SYSTEMS, LLC

**Build smarter. Operate faster.**

A production-quality, multilingual corporate + SaaS + digital-commerce website for **ATLAS DIGITAL SYSTEMS, LLC** — a Delaware Limited Liability Company building software, AI tools and automation products for modern businesses.

- **Domain:** https://atlasdigitalsystems.co
- **Legal entity:** ATLAS DIGITAL SYSTEMS, LLC
- **Jurisdiction:** Delaware, United States
- **Primary language:** English (US)

---

## Project Overview

This is a complete, production-ready website built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, and shadcn/ui. It is suitable for public commercial launch, GitHub, Vercel, Stripe onboarding, SaaS subscriptions, one-time digital product sales, AI software sales, technology services, and international customers.

### Brand

- **Commercial brand:** ATLAS DIGITAL SYSTEMS
- **Legal entity:** ATLAS DIGITAL SYSTEMS, LLC (Delaware LLC)
- **Positioning:** A United States technology product company — *not* an agency, consulting firm, prompt store, crypto company, or financial company.
- **Visual identity:** Dark "deep tech" / midnight-blue aesthetic with electric blue (#008DFF) and cyan (#17C8FF) accents, a digital globe hero, six product divisions, premium SaaS cards, and a large institutional footer.

### Architecture

```
src/
├── app/                      # Next.js App Router routes
│   ├── page.tsx              # Homepage (13 sections + JSON-LD)
│   ├── products/             # Catalogue + product detail
│   ├── digital-products/     # Digital products catalogue
│   ├── pricing/              # Pricing page
│   ├── solutions/            # Solutions overview + [slug]
│   ├── services/             # Services list + [slug]
│   ├── business/             # For Business
│   ├── developers/           # Developer portal (Early Access)
│   ├── how-it-works/         # Purchase journeys
│   ├── about/                # Company
│   ├── company-information/  # Legal entity details (PSP onboarding)
│   ├── contact/              # Contact form
│   ├── faq/                  # FAQ
│   ├── blog/                 # Blog list + [slug]
│   ├── support/              # Support center
│   ├── ai|software|automate|data|cloud|labs/  # Division pages
│   ├── cart/                 # Cart
│   ├── checkout/             # Checkout + success + cancelled
│   ├── payment-methods/      # Payment methods
│   ├── security/             # Security overview
│   ├── terms|privacy|cookies|refund-policy|cancellation-policy|
│   │   delivery-policy|acceptable-use|ai-policy/   # Legal pages
│   ├── api/stripe/           # Stripe API routes
│   ├── sitemap.ts            # Dynamic sitemap
│   ├── robots.ts             # Robots
│   └── not-found.tsx         # 404
├── components/
│   ├── site/                 # ATLAS-specific components
│   └── ui/                   # shadcn/ui components
├── config/                   # company, navigation, locales, payments, stripe, features
├── data/                     # products, services, solutions, faqs, articles (single source of truth)
├── lib/                      # i18n, currency, cart-store, stripe, utils
└── types/                    # product, payment, service, order
```

### Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5 (strict)
- **Styling:** Tailwind CSS 4 + shadcn/ui (New York) + Lucide icons
- **State:** Zustand (cart), React Context (i18n, currency)
- **Forms:** React Hook Form + Zod
- **Payments:** Stripe (official SDK)
- **Internationalisation:** Custom i18n (5 locales, no `[locale]` routing — keeps `/` as the primary route)

---

## Installation

```bash
# 1. Clone
git clone https://github.com/nexflowx-hub/atlasdigitalsystems-frontend.git
cd atlasdigitalsystems-frontend

# 2. Install dependencies
npm install   # or: bun install / pnpm install

# 3. Environment
cp .env.example .env.local
# Fill in values (see "Environment Variables" below)

# 4. Run
npm run dev   # http://localhost:3000
```

## Development

```bash
npm run dev      # Start dev server (port 3000)
npm run lint     # ESLint
npm run build    # Production build
```

## Build

```bash
npm run build
```

The project is Vercel-ready. Import the repository on Vercel, set environment variables, and deploy.

---

## GitHub

```bash
git init
git add .
git commit -m "Initial commit: ATLAS DIGITAL SYSTEMS website"
git branch -M main
git remote add origin https://github.com/nexflowx-hub/atlasdigitalsystems-frontend.git
git push -u origin main
```

## Vercel Deployment

1. Import the repository at https://vercel.com/new
2. Framework preset: **Next.js**
3. Set all environment variables (copy from `.env.example`)
4. Deploy

---

## Environment Variables

See `.env.example` for the full list. Key groups:

| Group | Variables |
|---|---|
| Site | `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_DEFAULT_LOCALE`, `NEXT_PUBLIC_DEFAULT_COUNTRY`, `NEXT_PUBLIC_DEFAULT_CURRENCY` |
| Company | `NEXT_PUBLIC_COMPANY_NAME`, `NEXT_PUBLIC_COMPANY_LEGAL_NAME`, `NEXT_PUBLIC_COMPANY_JURISDICTION`, `NEXT_PUBLIC_DELAWARE_FILE_NUMBER`, `NEXT_PUBLIC_BUSINESS_ADDRESS` |
| Emails | `NEXT_PUBLIC_GENERAL_EMAIL`, `NEXT_PUBLIC_SUPPORT_EMAIL`, `NEXT_PUBLIC_SALES_EMAIL`, `NEXT_PUBLIC_BILLING_EMAIL`, `NEXT_PUBLIC_PRIVACY_EMAIL`, `NEXT_PUBLIC_SECURITY_EMAIL`, `NEXT_PUBLIC_LEGAL_EMAIL`, `NEXT_PUBLIC_DEVELOPERS_EMAIL` |
| Phone | `NEXT_PUBLIC_PHONE` |
| Mode | `APP_MODE` (`mock` \| `live`), `PAYMENT_PROVIDER`, `CONTACT_PROVIDER`, `AI_PROVIDER` |
| Stripe | `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_TAX_ENABLED` |
| Stripe Prices | `STRIPE_PRICE_*` (see below) |

**Never commit real secrets.** The `.gitignore` excludes `.env*` files.

### Where things are configured

- **Delaware File Number:** `NEXT_PUBLIC_DELAWARE_FILE_NUMBER` → shown in footer & company-information page (defaults to `[DELAWARE_FILE_NUMBER]` placeholder)
- **Business address:** `NEXT_PUBLIC_BUSINESS_ADDRESS` (defaults to `[ATLAS_BUSINESS_ADDRESS]`)
- **Company emails:** `NEXT_PUBLIC_*_EMAIL` in `src/config/company.ts`
- **Phone:** `NEXT_PUBLIC_PHONE` → `+1 302-595-5455`
- **Products & pricing:** `src/data/products.ts` (single source of truth for homepage, catalogue, detail, checkout, SEO)
- **SaaS pricing:** product `plans[]` in `src/data/products.ts`
- **Digital pricing:** product `price` map in `src/data/products.ts`
- **Stripe Price IDs:** `src/config/stripe-products.ts`, populated from `STRIPE_PRICE_*` env vars

---

## Internationalisation

Supported locales:

| Code | Language |
|---|---|
| `en-US` | English (US) — **primary** |
| `pt-BR` | Portuguese (Brazil) |
| `pt-PT` | Portuguese (Portugal) |
| `es` | Spanish |
| `fr` | French |

Translation strings live in `src/lib/i18n/messages/*.ts`. The language switcher in the header persists the choice in `localStorage` and updates `document.lang`. **The legal company name `ATLAS DIGITAL SYSTEMS, LLC` is never translated.**

## Country Detection

The site detects the visitor's probable country from browser locale (and `x-vercel-ip-country` on Vercel, when available) to suggest language and currency. It does **not** request GPS. Users can manually override language and currency from the header. Country detection never changes the legal merchant — the seller is always **ATLAS DIGITAL SYSTEMS, LLC**.

## Currency System

Supported currencies: **USD** (primary), **GBP**, **EUR**, **BRL**.

Prices are explicitly configured per currency per product in `src/data/products.ts` — **no fake FX conversions**. Example:

```ts
price: { USD: 49, GBP: 39, EUR: 45, BRL: 299 }
```

Stripe Price IDs are individually configurable by currency and product in `src/config/stripe-products.ts`.

---

## Products

The product catalogue (`src/data/products.ts`) is the single source of truth. It drives the homepage, catalogue, product detail, checkout, and structured data — pricing is never duplicated across pages.

**Product types:** SaaS subscriptions, one-time digital products, productized services, and bundles.

**Product status system:**

| Status | Meaning |
|---|---|
| `active` | Has live Stripe Buy buttons |
| `preview` | Preview / Early Access |
| `early-access` | Early Access |
| `coming-soon` | Coming Soon |
| `contact-sales` | Contact sales (no direct checkout) |

Only `active` products can enter live Stripe Checkout. Preview/Coming Soon products never enter live checkout.

## Services

Services are defined in `src/data/services.ts`. Each service page explains scope, starting price (where applicable), delivery, process, and CTA. Services with `contact-sales` status use "Request Proposal" instead of direct checkout.

## Pricing

The `/pricing` page renders SaaS plans (Atlas AI Free/Pro/Business, Atlas Automate, Atlas Data) and digital product prices from the product data. **Unavailable packages are never purchasable** — `Atlas One` ($99/mo) is shown as Coming Soon/Preview.

---

## Stripe Configuration

### 1. Create a Stripe account for ATLAS DIGITAL SYSTEMS, LLC

### 2. Complete business verification

### 3. Create Stripe Products

Create a product for each purchasable item (e.g., "Atlas Business Automation Pack", "Atlas AI Workspace Pro").

### 4. Create Prices

For each product, create a Price in the relevant currency. For subscriptions, use **recurring** prices; for digital products, use **one-time** prices.

### 5. Copy Price IDs

Each Price has an ID like `price_1O...`. Copy these.

### 6. Set environment variables

Map each Price ID to the corresponding `STRIPE_PRICE_*` variable in `.env.local`:

```env
STRIPE_PRICE_BUSINESS_AUTOMATION_PACK_USD=price_1O...
STRIPE_PRICE_ATLAS_AI_PRO_USD=price_1O...
# ...etc
```

The mapping lives in `src/config/stripe-products.ts`.

### 7. Add webhook endpoint

In Stripe Dashboard → Developers → Webhooks → Add endpoint:
- **URL:** `https://atlasdigitalsystems.co/api/stripe/webhook`
- **Events:** `checkout.session.completed`, `checkout.session.async_payment_succeeded`, `checkout.session.async_payment_failed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.paid`, `invoice.payment_failed`

### 8. Configure webhook signing secret

Copy the signing secret (`whsec_...`) to `STRIPE_WEBHOOK_SECRET`.

### Stripe Checkout Setup

- **One-time payments:** `mode: "payment"` for digital products.
- **Subscriptions:** `mode: "subscription"` for SaaS plans.
- The server resolves the Stripe Price ID from trusted configuration — the browser never supplies a price or amount.
- Success URL: `/checkout/success?session_id={CHECKOUT_SESSION_ID}`
- Cancel URL: `/checkout/cancelled`

### Stripe Webhook Setup

The webhook (`/api/stripe/webhook`) verifies the signature using `STRIPE_WEBHOOK_SECRET` and handles all the events listed above. **Digital product fulfilment depends on webhook confirmation — never on the success URL alone.**

**Idempotency:** When a database is added, store event IDs in a `WebhookEvent` table to ensure idempotent processing.

### Customer Portal Setup

`/api/stripe/create-portal-session` creates a Stripe Billing Portal session for subscription management. **Do not expose portal functionality unless actual Stripe Customer IDs exist.**

### Test → Live Stripe Procedure

1. Use Stripe **test keys** (`sk_test_...`, `pk_test_...`) and test Price IDs.
2. Test the full checkout flow with test cards (`4242 4242 4242 4242`).
3. Test the subscription lifecycle (create, update, cancel).
4. Test the refund flow.
5. Confirm `/checkout/success` and `/checkout/cancelled` work.
6. Switch to **live keys** (`sk_live_...`, `pk_live_...`) and live Price IDs only after review.
7. **Never expose the secret key.**
8. **Never fulfil paid content from the client redirect alone.**

For local webhook testing, use the Stripe CLI:

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

---

## Future Database Migration Plan

V1 uses strongly typed configuration and mock data — **no database required**. The Stripe architecture is designed so a database can be inserted later.

Future entities (documented for migration):

`User`, `Workspace`, `Product`, `Price`, `Customer`, `Order`, `OrderItem`, `Payment`, `Subscription`, `Entitlement`, `Download`, `Licence`, `Refund`, `WebhookEvent`, `AIUsage`, `CreditLedger`, `Workflow`, `Document`.

## Future Authentication Plan

NextAuth.js v4 is available. Future auth will manage user accounts, workspace membership, and subscription entitlements. Until then, SaaS demos remain in Preview and no real account access is created.

## Future Digital Delivery Plan

Future correct flow:

```
STRIPE → WEBHOOK → PAYMENT CONFIRMED → ORDER → ENTITLEMENT → SECURE DOWNLOAD → EMAIL
```

Paid digital assets will use private storage, signed URLs, and expiring access — never public permanent URLs. V1 is mock (no backend/database).

---

## Acceptance Criteria

This project meets the acceptance criteria from the build specification:

- ✅ Visual result matches the supplied mockup (dark deep-tech aesthetic, electric blue identity, digital globe, six divisions, premium cards, large institutional footer)
- ✅ Homepage complete with all sections
- ✅ All major routes exist (products, solutions, services, developers, business, about, contact, faq, pricing, blog, support, divisions, cart, checkout, legal pages, etc.)
- ✅ Products work; product details work; digital catalogue works; services work
- ✅ Cart works
- ✅ Stripe Checkout architecture works (server-side price resolution)
- ✅ Stripe test-mode integration can be enabled
- ✅ Subscriptions architecture works
- ✅ Webhook handler exists and validates signatures
- ✅ Payment amounts cannot be manipulated client-side
- ✅ Success/cancel pages exist
- ✅ Stripe secrets stay server-side
- ✅ Multilingual works (5 locales)
- ✅ Currency display works (USD/GBP/EUR/BRL)
- ✅ Country detection has fallback
- ✅ Legal pages are complete
- ✅ Support centre exists
- ✅ Company information exists; phone is visible
- ✅ Institutional footer is complete
- ✅ No fake metrics, partner claims, reviews, or ratings
- ✅ Mobile works; SEO exists; sitemap exists; robots exists
- ✅ `.env.example` exists
- ✅ No lorem ipsum; no broken links

---

## Contact

| Department | Email |
|---|---|
| General | hello@atlasdigitalsystems.co |
| Support | support@atlasdigitalsystems.co |
| Sales | sales@atlasdigitalsystems.co |
| Billing | billing@atlasdigitalsystems.co |
| Privacy | privacy@atlasdigitalsystems.co |
| Security | security@atlasdigitalsystems.co |
| Legal | legal@atlasdigitalsystems.co |
| Developers | developers@atlasdigitalsystems.co |

**Telephone:** +1 302-595-5455 (Voice & SMS)

---

© 2026 ATLAS DIGITAL SYSTEMS, LLC. All rights reserved.

A Delaware Limited Liability Company. Delaware, United States.
