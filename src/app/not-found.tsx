import Link from "next/link";
import { Home, ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-atlas-border">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-atlas-blue/10 blur-[120px]" />
      <div className="relative mx-auto max-w-xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-atlas-blue/30 bg-atlas-blue/10 text-atlas-cyan">
          <Compass className="h-8 w-8" />
        </div>
        <p className="mt-6 font-display text-6xl font-extrabold text-white">404</p>
        <h1 className="mt-2 font-display text-2xl font-bold text-white">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-atlas-muted">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-7 flex items-center justify-center gap-3">
          <Button asChild className="bg-atlas-blue text-white hover:bg-atlas-blue-bright btn-glow">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-atlas-border text-white hover:bg-atlas-blue/10">
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Browse products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
