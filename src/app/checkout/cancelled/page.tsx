import Link from "next/link";
import { XCircle, ArrowRight, ShoppingBag } from "lucide-react";
import { PageHeader, PageSection } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CheckoutCancelledPage() {
  return (
    <>
      <PageHeader
        eyebrow="CHECKOUT"
        title="Checkout cancelled"
        subtitle="Your payment was not completed."
      />

      <PageSection bordered={false} className="py-12 lg:py-16">
        <div className="mx-auto max-w-2xl">
          <Card className="card-atlas">
            <CardContent className="space-y-4 pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
                  <XCircle className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-white">
                    No order has been fulfilled
                  </h2>
                  <p className="mt-1 text-sm text-atlas-muted">
                    Your payment was not completed. No charge was made and no
                    order has been fulfilled.
                  </p>
                </div>
              </div>

              <div className="rounded-md border border-atlas-border bg-atlas-night/60 p-4">
                <p className="text-sm leading-relaxed text-atlas-muted">
                  You can return to your cart to try again, or continue browsing
                  our products. If you experienced an issue during checkout,
                  please contact{" "}
                  <a
                    href="mailto:support@atlasdigitalsystems.co"
                    className="text-atlas-cyan hover:underline"
                  >
                    support@atlasdigitalsystems.co
                  </a>
                  .
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button
                  asChild
                  className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow"
                >
                  <Link href="/cart">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Return to cart
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-atlas-border text-white hover:bg-atlas-night"
                >
                  <Link href="/products">
                    Return to products
                    <ArrowRight className="ml-2 h-4 w-4" />
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
