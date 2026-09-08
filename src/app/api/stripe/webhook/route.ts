import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { stripeConfig } from "@/config/stripe";

/**
 * POST /api/stripe/webhook
 *
 * Receives Stripe webhook events. Verifies the signature using the raw body
 * and STRIPE_WEBHOOK_SECRET, then dispatches by event type.
 *
 * IMPORTANT — Fulfilment policy:
 *  Order fulfilment depends on webhook confirmation. The success URL alone
 *  MUST NOT be used to fulfil an order, because a user can visit that URL
 *  without a valid completed payment. Only events received and verified here
 *  are authoritative.
 *
 * Idempotency:
 *  Future: store event IDs in a WebhookEvent table to ensure idempotent
 *  processing. Stripe may retry delivery, so each handler must be safe to
 *  invoke more than once for the same event.
 *
 * Mock mode:
 *  When Stripe is not configured (mock mode), the route returns a successful
 *  acknowledgement with `mock: true` and performs no real processing.
 */

export async function POST(request: Request) {
  const stripe = getStripe();

  // ── Mock mode ─────────────────────────────────────────────────────────
  // No live Stripe keys are configured. Acknowledge the request without
  // attempting to verify a signature (one would not exist in mock mode).
  if (!stripe || !stripeConfig.isConfigured) {
    return NextResponse.json({ received: true, mock: true });
  }

  // ── Read raw body for signature verification ──────────────────────────
  // Stripe requires the raw request body to verify the webhook signature.
  // We must NOT parse the body as JSON before verifying it.
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    console.warn("[stripe/webhook] Missing stripe-signature header.");
    return NextResponse.json(
      { error: "Missing stripe-signature header." },
      { status: 400 }
    );
  }

  if (!stripeConfig.webhookSecret) {
    console.error(
      "[stripe/webhook] STRIPE_WEBHOOK_SECRET is not configured. Cannot verify event."
    );
    return NextResponse.json(
      { error: "Webhook secret not configured." },
      { status: 500 }
    );
  }

  // ── Verify the event signature ────────────────────────────────────────
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      stripeConfig.webhookSecret
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[stripe/webhook] Signature verification failed:", message);
    return NextResponse.json(
      { error: "Invalid signature." },
      { status: 400 }
    );
  }

  // ── Dispatch by event type ────────────────────────────────────────────
  // Each branch logs the event for observability. Idempotent fulfilment
  // logic will live here once the WebhookEvent table is in place.
  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const productId = (session.metadata?.productId as string) ?? "(none)";
        const productName =
          (session.metadata?.productName as string) ?? "(unknown)";
        console.info(
          `[stripe/webhook] checkout.session.completed — product=${productId} (${productName}) mode=${session.mode} status=${session.payment_status}`
        );
        // Fulfilment hook (future): grant access / send delivery email.
        // IMPORTANT: confirm session.payment_status === "paid" (or
        // no_payment_required for free items) before fulfilling.
        break;
      }

      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.info(
          `[stripe/webhook] checkout.session.async_payment_succeeded — session=${session.id} status=${session.payment_status}`
        );
        break;
      }

      case "checkout.session.async_payment_failed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.warn(
          `[stripe/webhook] checkout.session.async_payment_failed — session=${session.id} status=${session.payment_status}`
        );
        // Future: notify customer of failed async payment.
        break;
      }

      case "customer.subscription.created": {
        const sub = event.data.object as Stripe.Subscription;
        console.info(
          `[stripe/webhook] customer.subscription.created — subscription=${sub.id} customer=${sub.customer} status=${sub.status}`
        );
        break;
      }

      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        console.info(
          `[stripe/webhook] customer.subscription.updated — subscription=${sub.id} status=${sub.status}`
        );
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        console.info(
          `[stripe/webhook] customer.subscription.deleted — subscription=${sub.id} customer=${sub.customer}`
        );
        // Future: revoke access at period end / immediately per policy.
        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        console.info(
          `[stripe/webhook] invoice.paid — invoice=${invoice.id} customer=${invoice.customer} total=${invoice.total}`
        );
        // Future: renew subscription access / record billing event.
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.warn(
          `[stripe/webhook] invoice.payment_failed — invoice=${invoice.id} customer=${invoice.customer}`
        );
        // Future: notify customer, attempt retry per Stripe Smart Retries.
        break;
      }

      default: {
        // Unhandled event types are logged at debug level. We do not throw —
        // Stripe expects a 200 for any successfully received event.
        console.debug(`[stripe/webhook] Unhandled event type: ${event.type}`);
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    // Never silently ignore errors. Return 500 so Stripe retries delivery.
    console.error(
      `[stripe/webhook] Handler error for event ${event.id} (${event.type}):`,
      err
    );
    return NextResponse.json(
      { error: "Webhook handler failed." },
      { status: 500 }
    );
  }
}
