import type { Metadata } from "next";
import { ProductsCatalog } from "./products-catalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Atlas software, AI, automation, data products, digital products and services.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products | ATLAS DIGITAL SYSTEMS",
    description:
      "Browse Atlas software, AI, automation, data products, digital products and services.",
    url: "/products",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | ATLAS DIGITAL SYSTEMS",
    description:
      "Browse Atlas software, AI, automation, data products, digital products and services.",
  },
};

export default function ProductsPage() {
  return <ProductsCatalog />;
}
