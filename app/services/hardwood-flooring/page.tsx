import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

const benefits = [
  { title: "Premium Benjamin Moore Paint", desc: "Top-tier paints with superior coverage and lasting color" },
  { title: "Meticulous Surface Prep", desc: "Proper sanding, filling, priming - the foundation of quality" },
  { title: "Zero-Mess Process", desc: "Full furniture protection, daily cleanup, spotless finish" },
  { title: "On-Time Completion", desc: "Single room: 1-2 days. Full home: 3-7 days. Always on schedule" },
];

export default function InteriorPaintingPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-16" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-[#B52E32] hover:underline">
              ← Back to Services
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-6xl">
              Hardwood Flooring Installation
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Wide-plank European oak, walnut, and engineered hardwood installation.
            </p>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <h2 className="font-display text-3xl text-[#202321] md:text-4xl">Why Choose Us</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.1}>
                <div className="p-6" style={{ borderRadius: "1rem", background: "#F5F0E6", border: "1px solid rgba(198,161,91,0.18)" }}>
                  <h3 className="font-display text-lg text-[#202321]">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{benefit.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div className="relative overflow-hidden px-8 py-16 md:px-16" style={{ borderRadius: "1.5rem", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)", boxShadow: "0 8px 0 0 rgba(130,20,23,0.75), 0 24px 60px -12px rgba(130,20,23,0.48)" }}>
            <h2 className="relative max-w-2xl font-display text-4xl text-balance text-white md:text-5xl">Ready to transform your space?</h2>
            <p className="relative mt-4 max-w-xl text-white/90">Get a free, detailed quote for your hardwood flooring installation project.</p>
            <div className="relative mt-8 flex flex-wrap gap-4">
              <Link href="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[#202321] transition-all hover:-translate-y-0.5" style={{ borderRadius: "9999px", background: "#F5F0E6", boxShadow: "0 3px 0 0 rgba(32,35,33,0.18)" }}>
                Get Free Quote <ArrowRight size={16} />
              </Link>
              <a href="tel:+12266006637" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5" style={{ borderRadius: "9999px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}>
                <Phone size={16} /> (226) 600-6637
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
