import { Building2, Download, ShieldCheck, Headphones } from "lucide-react";

const items = [
  {
    icon: Building2,
    eyebrow: "DIRECT MERCHANT",
    title: "Atlas products & services",
    desc: "Software, SaaS, digital products and technology services sold directly by ATLAS DIGITAL SYSTEMS, LLC.",
  },
  {
    icon: Download,
    eyebrow: "DIGITAL FULFILMENT",
    title: "Electronic delivery",
    desc: "Software access and digital resources are provided electronically; professional services follow the agreed scope.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "CHECKOUT",
    title: "Provider-hosted payments",
    desc: "Card details are handled by the configured payment provider when online checkout is enabled.",
  },
  {
    icon: Headphones,
    eyebrow: "US CUSTOMER SUPPORT",
    title: "+1 302-595-5455",
    desc: "Voice & SMS support, backed by dedicated support and billing email channels.",
  },
];

export function CommerceStripSection() {
  return (
    <section className="border-y border-slate-200 bg-[#f4f8fc] text-[#06111f]">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, index) => (
            <div
              key={item.eyebrow}
              className={`flex gap-3.5 py-2 lg:px-5 ${
                index > 0 ? "lg:border-l lg:border-slate-200" : ""
              }`}
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e6f3ff] text-[#0078df] ring-1 ring-[#c7e5ff]">
                <item.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#1674be]">
                  {item.eyebrow}
                </p>
                <p className="mt-1 text-sm font-bold text-[#071521]">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
