import Link from "next/link";
import {
  CheckCircle2,
  Mail,
  ShieldCheck,
  ArrowRight,
  LifeBuoy,
  Sparkles,
  Package,
} from "lucide-react";
import { retrieveCheckoutSession } from "@/lib/stripe";
import { getProductBySlug } from "@/data/products";
import { company } from "@/config/company";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SuccessSearchParams = Promise<{
  session_id?: string;
  mock?: string;
}>;

function SafeEmail({ email }: { email?: string }) {
  if (!email) return null;
  // Mask the local part for privacy in the rendered HTML.
  const [local, domain] = email.split("@");
  if (!local || !domain) return <span>{email}</span>;
  const masked =
    local.length <= 2
      ? `${local[0]}••`
      : `${local[0]}${"•".repeat(Math.max(2, local.length - 2))}${local[local.length - 1]}`;
  return (
    <span>
      {masked}@{domain}
    </span>
  );
}

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: SuccessSearchParams;
}) {
  const params = await searchParams;
  const isMock = params.mock === "1" || !params.session_id;

  // ── Mock mode ────────────────────────────────────────────────────────
  if (isMock) {
    return (
      <>
        <PageHeader
          eyebrow="CHECKOUT"
          title="Mock checkout complete"
          subtitle="This is a mock checkout. No real payment was processed."
        />
        <PageSection bordered={false} className="py-12 lg:py-16">
          <div className="mx-auto max-w-2xl">
            <Card className="card-atlas border-yellow-500/30">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
                    <Sparkles className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white">
                      Mock checkout simulation
                    </CardTitle>
                    <p className="mt-1 text-sm text-atlas-muted">
                      Stripe test/live mode is not yet configured.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-atlas-muted">
                  This is a mock checkout. No real payment was processed. Stripe
                  test/live mode is not yet configured. No subscription was
                  created, no digital product was delivered and no order was
                  fulfilled.
                </p>

                <div className="rounded-md border border-atlas-border bg-atlas-night/60 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-atlas-cyan">
                    Why am I seeing this?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-atlas-muted">
                    The application is currently running in mock mode. The
                    checkout flow simulates the redirect that Stripe would
                    normally perform after a real payment. When live Stripe keys
                    are configured, this page will reflect the outcome of a real
                    checkout session.
                  </p>
                </div>

                <Separator className="bg-atlas-border" />

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
                  >
                    <Link href="/products">
                      Return to products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-night">
                    <Link href="/support">
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      Contact support
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </PageSection>
      </>
    );
  }

  // ── Real mode: retrieve session safely server-side ───────────────────
  const session = await retrieveCheckoutSession(params.session_id as string);

  // If we cannot retrieve the session (invalid, expired, or Stripe not configured),
  // do NOT assume payment. Show a cautious state instead.
  if (!session) {
    return (
      <>
        <PageHeader
          eyebrow="CHECKOUT"
          title="Order confirmation unavailable"
          subtitle="We could not confirm your checkout session."
        />
        <PageSection bordered={false} className="py-12 lg:py-16">
          <div className="mx-auto max-w-2xl">
            <Card className="card-atlas">
              <CardContent className="space-y-4 pt-6">
                <p className="text-sm leading-relaxed text-atlas-muted">
                  We could not verify this checkout session. This may be a
                  temporary issue, or the session may have expired.
                </p>
                <div className="rounded-md border border-atlas-border bg-atlas-night/60 p-4">
                  <p className="text-xs leading-relaxed text-atlas-muted">
                    If you completed payment and do not see your order
                    confirmed, please contact{" "}
                    <a
                      href={`mailto:${company.emails.support}`}
                      className="text-atlas-cyan hover:underline"
                    >
                      {company.emails.support}
                    </a>{" "}
                    with your order details.
                  </p>
                </div>
                <Button
                  asChild
                  className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
                >
                  <Link href="/products">
                    Return to products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </PageSection>
      </>
    );
  }

  // Safe, non-secret fields only.
  const customerEmail =
    session.customer_details?.email ??
    session.customer_email ??
    undefined;
  const productName = (session.metadata?.productName as string | undefined) ?? undefined;
  const productSlug = (session.metadata?.productSlug as string | undefined) ?? undefined;
  const productId = (session.metadata?.productId as string | undefined) ?? undefined;
  const planId = (session.metadata?.planId as string | undefined) ?? undefined;

  const product = productSlug ? getProductBySlug(productSlug) : undefined;
  const isSubscription =
    session.mode === "subscription" ||
    product?.billingModel === "subscription";

  const paymentStatus = session.payment_status; // paid | unpaid | no_payment_required
  const isPaid = paymentStatus === "paid" || paymentStatus === "no_payment_required";

  return (
    <>
      <PageHeader
        eyebrow="CHECKOUT"
        title={isPaid ? "Payment received" : "Payment processing"}
        subtitle={
          isPaid
            ? "Thank you. Your payment has been received."
            : "Your payment is still being processed."
        }
      />

      <PageSection bordered={false} className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl space-y-6">
          <Card className="card-atlas">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-atlas-blue/10 atlas-glow">
                  <CheckCircle2 className="h-6 w-6 text-atlas-cyan" />
                </div>
                <div>
                  <CardTitle className="text-white">
                    {isPaid ? "Payment confirmed" : "Awaiting confirmation"}
                  </CardTitle>
                  <p className="mt-1 text-sm text-atlas-muted">
                    Status:{" "}
                    <span className="font-medium text-white">
                      {paymentStatus.replace(/_/g, " ")}
                    </span>
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {productName && (
                <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-atlas-border bg-atlas-night/60 p-3">
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-atlas-cyan" />
                    <span className="text-sm font-medium text-white">
                      {productName}
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-atlas-border text-atlas-muted"
                  >
                    {isSubscription ? "Subscription" : "One-time"}
                  </Badge>
                </div>
              )}

              {customerEmail && (
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-atlas-muted" />
                  <span className="text-atlas-muted">Confirmation sent to:</span>
                  <span className="font-medium text-white">
                    <SafeEmail email={customerEmail} />
                  </span>
                </div>
              )}

              <div className="rounded-md border border-atlas-border bg-atlas-night/60 p-4">
                {isSubscription ? (
                  <p className="text-sm leading-relaxed text-atlas-muted">
                    Your subscription has been created. Account access
                    instructions will be provided according to the product
                    delivery process.
                  </p>
                ) : (
                  <p className="text-sm leading-relaxed text-atlas-muted">
                    Your payment has been confirmed. Digital delivery
                    information will be sent or displayed according to the
                    configured delivery process.
                  </p>
                )}
              </div>

              <div className="flex items-start gap-2 rounded-md border border-atlas-blue/30 bg-atlas-blue/5 p-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-atlas-cyan" />
                <p className="text-xs leading-relaxed text-atlas-muted">
                  Order fulfilment is confirmed via webhook. Visiting this page
                  alone does not fulfil an order. If you do not receive access,
                  contact{" "}
                  <a
                    href={`mailto:${company.emails.support}`}
                    className="text-atlas-cyan hover:underline"
                  >
                    {company.emails.support}
                  </a>
                  .
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Next steps */}
          <Card className="card-atlas">
            <CardHeader>
              <CardTitle className="text-base text-white">Next steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-atlas-muted">
              <p className="leading-relaxed">
                You should receive a confirmation email shortly. If
                {isSubscription
                  ? " your subscription has been provisioned,"
                  : " digital delivery has been configured,"}{" "}
                follow the instructions in that email to access your purchase.
              </p>
              <ul className="ml-4 list-disc space-y-1">
                <li>Check your spam or promotions folder for the email.</li>
                <li>
                  Keep your order confirmation for billing reference — contact{" "}
                  <a
                    href={`mailto:${company.emails.billing}`}
                    className="text-atlas-cyan hover:underline"
                  >
                    {company.emails.billing}
                  </a>{" "}
                  for billing questions.
                </li>
                <li>
                  For technical access issues, contact{" "}
                  <a
                    href={`mailto:${company.emails.support}`}
                    className="text-atlas-cyan hover:underline"
                  >
                    {company.emails.support}
                  </a>
                  .
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
            >
              <Link href="/products">
                Return to products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-atlas-border text-white hover:bg-atlas-night"
            >
              <Link href="/support">
                <LifeBuoy className="mr-2 h-4 w-4" />
                Contact support
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
