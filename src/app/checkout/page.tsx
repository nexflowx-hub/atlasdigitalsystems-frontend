"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowLeft,
  Loader2,
  ShieldCheck,
  Mail,
  Lock,
  AlertCircle,
  FileText,
} from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/lib/cart-store";
import { useCurrency } from "@/lib/currency-context";
import { useTranslations } from "@/lib/i18n/context";
import { stripeConfig } from "@/config/stripe";
import { features } from "@/config/features";
import { company } from "@/config/company";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total } = useCart();
  const { format } = useCurrency();
  const t = useTranslations();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Empty cart → redirect to /cart
  useEffect(() => {
    if (items.length === 0) {
      router.replace("/cart");
    }
  }, [items.length, router]);

  if (items.length === 0) {
    return null;
  }

  const primary = items[0];
  const hasMultipleItems = items.length > 1;

  async function handleCheckout(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;

    // Validate email minimally on the client; server trusts its own logic.
    const trimmed = email.trim();
    if (trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // V1: checkout the first (primary) cart item. Multi-item checkout coming soon.
    const item = items[0];

    setLoading(true);
    try {
      const res = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: item.productId,
          planId: item.planId,
          currency: item.currency,
          type: item.billingModel,
          customerEmail: trimmed || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Unable to start checkout.");
      }

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      throw new Error("No checkout URL returned.");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Unable to start checkout.";
      toast.error(message);
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="CHECKOUT"
        title="Review your order"
        subtitle="Confirm your selection and proceed to secure payment. Atlas never collects complete card details directly."
      />

      <PageSection bordered={false} className="py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:gap-10">
          {/* LEFT — Order summary */}
          <div className="space-y-6">
            <div className="card-atlas rounded-xl p-6">
              <h2 className="font-display text-lg font-bold text-white">
                Order summary
              </h2>
              <Separator className="my-4 bg-atlas-border" />

              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item.productId + (item.planId ?? "")}
                    className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          href={`/products/${item.slug}`}
                          className="text-sm font-semibold text-white hover:text-atlas-cyan"
                        >
                          {item.name}
                        </Link>
                        <Badge
                          variant="outline"
                          className="border-atlas-border text-atlas-muted"
                        >
                          {item.billingModel === "subscription"
                            ? "Subscription"
                            : "One-time"}
                        </Badge>
                        {item.planId && (
                          <Badge
                            variant="outline"
                            className="border-atlas-border capitalize text-atlas-muted"
                          >
                            {item.planId}
                          </Badge>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-atlas-muted">
                        Qty {item.quantity} · {item.currency}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-white">
                        {format(item.price * item.quantity, item.currency)}
                      </p>
                      {item.billingModel === "subscription" && (
                        <p className="text-xs text-atlas-muted">/month</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <Separator className="my-4 bg-atlas-border" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-atlas-muted">Subtotal</span>
                  <span className="font-medium text-white">
                    {format(total())}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-atlas-muted">Taxes</span>
                  <span className="text-atlas-muted">
                    Calculated during checkout
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-atlas-muted">Delivery</span>
                  <span className="text-atlas-muted">
                    Digital · Electronically provisioned
                  </span>
                </div>
              </div>

              <Separator className="my-4 bg-atlas-border" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">Total</span>
                <span className="font-display text-2xl font-bold text-white">
                  {format(total())}
                </span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-atlas-muted">
                Applicable taxes may be calculated during checkout depending on
                product, customer location and applicable rules.
              </p>
            </div>

            {/* Seller disclosure */}
            <div className="card-atlas rounded-xl p-6">
              <h3 className="font-display text-base font-bold text-white">
                Seller &amp; legal
              </h3>
              <Separator className="my-3 bg-atlas-border" />
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-atlas-muted">Seller</dt>
                  <dd className="text-right font-medium text-white">
                    {company.legalName}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-atlas-muted">Jurisdiction</dt>
                  <dd className="text-right font-medium text-white">
                    {company.jurisdiction}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-atlas-muted">Billing contact</dt>
                  <dd className="text-right">
                    <a
                      href={`mailto:${company.emails.billing}`}
                      className="text-atlas-cyan hover:underline"
                    >
                      {company.emails.billing}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-atlas-muted">Support</dt>
                  <dd className="text-right">
                    <a
                      href={`mailto:${company.emails.support}`}
                      className="text-atlas-cyan hover:underline"
                    >
                      {company.emails.support}
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                <Link
                  href="/refund-policy"
                  className="inline-flex items-center gap-1 text-atlas-muted hover:text-atlas-cyan"
                >
                  <FileText className="h-3 w-3" /> Refund Policy
                </Link>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-1 text-atlas-muted hover:text-atlas-cyan"
                >
                  <FileText className="h-3 w-3" /> Terms
                </Link>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1 text-atlas-muted hover:text-atlas-cyan"
                >
                  <FileText className="h-3 w-3" /> Privacy
                </Link>
              </div>
            </div>

            <Button asChild variant="ghost" className="text-atlas-muted hover:text-white">
              <Link href="/cart">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to cart
              </Link>
            </Button>
          </div>

          {/* RIGHT — Checkout form */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card-atlas rounded-xl p-6">
              <h2 className="font-display text-lg font-bold text-white">
                Checkout
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-atlas-muted">
                Payments are processed through our configured payment provider.
                Atlas does not need to directly store complete card details
                when Stripe Checkout is used.
              </p>

              <Separator className="my-4 bg-atlas-border" />

              {hasMultipleItems && (
                <div className="mb-4 flex items-start gap-2 rounded-md border border-atlas-blue/30 bg-atlas-blue/5 p-3">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                  <p className="text-xs leading-relaxed text-atlas-muted">
                    Multi-item checkout is coming soon. This checkout will
                    process{" "}
                    <span className="font-medium text-white">
                      {primary.name}
                    </span>{" "}
                    only. Additional cart items remain in your cart.
                  </p>
                </div>
              )}

              {!stripeConfig.isConfigured && (
                <div className="mb-4 flex items-start gap-2 rounded-md border border-yellow-500/30 bg-yellow-500/5 p-3">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
                  <p className="text-xs leading-relaxed text-yellow-200/80">
                    Stripe is not yet configured in this environment. You will
                    be redirected to a mock checkout — no real payment will be
                    processed.
                  </p>
                </div>
              )}

              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email address
                  </Label>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-atlas-muted" />
                    <Input
                      id="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-atlas-border bg-atlas-night pl-9 text-white placeholder:text-atlas-muted"
                    />
                  </div>
                  <p className="text-xs text-atlas-muted">
                    Order confirmation and digital delivery information will be
                    sent here.
                  </p>
                </div>

                <div className="rounded-md border border-atlas-border bg-atlas-night/60 p-3">
                  <div className="flex items-start gap-2">
                    <Lock className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                    <p className="text-xs leading-relaxed text-atlas-muted">
                      Card details are collected by the payment provider on its
                      own hosted page. Atlas never receives or stores complete
                      card numbers.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Preparing checkout…
                    </>
                  ) : (
                    <>
                      {features.isMock || !stripeConfig.isConfigured
                        ? "Continue to mock checkout"
                        : "Pay"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                <p className="text-center text-xs text-atlas-muted">
                  By continuing you agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-atlas-cyan hover:underline"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-atlas-cyan hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>

              <Separator className="my-4 bg-atlas-border" />

              <div className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                <p className="text-xs leading-relaxed text-atlas-muted">
                  Order fulfilment is confirmed via Stripe webhook. Visiting the
                  success URL alone does not fulfil an order.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </PageSection>
    </>
  );
}
