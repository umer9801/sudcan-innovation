import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Cloud, Shield, Clock, Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { createBreadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/exterior-painting")({
  head: () => ({
    meta: [
      { 
        title: "Exterior Painting Services Kitchener | Weather-Resistant House Painting | Sudcan" 
      },
      {
        name: "description",
        content:
          "Professional exterior house painting in Kitchener-Waterloo. Weather-resistant coatings, power washing, expert prep. Stand up to Canadian winters. Free quotes. (226) 600-6637.",
      },
      { name: "keywords", content: "exterior painting Kitchener, house painting Waterloo, exterior painters, siding painting, deck staining, fence painting, pressure washing, weather-resistant paint, durable exterior coating Ontario" },
      
      // Open Graph
      { property: "og:title", content: "Exterior Painting Services Kitchener | Sudcan Painting" },
      { property: "og:description", content: "Weather-resistant exterior painting. Power washing, expert prep, premium coatings. Boost curb appeal." },
      { property: "og:url", content: "https://www.sudcanpainting.com/services/exterior-painting" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sudcan Painting" },
      
      // Canonical
      { rel: "canonical", href: "https://www.sudcanpainting.com/services/exterior-painting" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Services", url: "https://www.sudcanpainting.com/services" },
          { name: "Exterior Painting", url: "https://www.sudcanpainting.com/services/exterior-painting" },
        ])),
      },
    ],
  }),
  component: ExteriorPaintingPage,
});

const benefits = [
  { icon: Cloud, title: "Weather-Resistant Coatings", desc: "Sherwin-Williams & Benjamin Moore exterior paints built for Canadian climate" },
  { icon: Shield, title: "Power Washing Included", desc: "Deep clean removes dirt, mildew, and old paint for perfect adhesion" },
  { icon: Clock, title: "Fast Turnaround", desc: "Most homes completed in 3-7 days, weather permitting" },
  { icon: Award, title: "5-Year Durability", desc: "Premium exterior paints last 5-10 years with proper maintenance" },
];

const surfacesPainted = [
  { name: "Wood Siding & Trim", detail: "Cedar, pine, engineered wood - all properly sealed" },
  { name: "Vinyl & Aluminum Siding", detail: "Specialized primers and paints for lasting color" },
  { name: "Brick & Masonry", detail: "Breathable masonry paints prevent moisture issues" },
  { name: "Stucco & EIFS", detail: "Flexible coatings that move with your exterior" },
  { name: "Decks & Fences", detail: "Stain or solid color - UV protection included" },
  { name: "Garage Doors", detail: "Curb appeal boost with color-matched finishes" },
];

function ExteriorPaintingPage() {
  return (
    <PageShell>
      
      {/* ── HERO ── */}
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Exterior Painting Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Exterior House Painting Kitchener — <span className="italic text-[#C6A15B]">Built for Canadian Weather</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Boost curb appeal and protect your investment with weather-resistant exterior painting. Power washing, expert prep, premium coatings. Serving Kitchener-Waterloo for 18+ years.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="tel:+12266006637"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                <Phone size={16} />
                Call: (226) 600-6637
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[#35483A]"
                style={{
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(198,161,91,0.35)",
                }}
              >
                Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section style={{ background: "#35483A" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#F5F0E6]">
              Why Our Exterior Painting Lasts Longer
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div
                  className="p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#2C3C30",
                    boxShadow:
                      "0 4px 0 0 rgba(10,14,11,0.55), 0 12px 32px -6px rgba(10,14,11,0.42)",
                    border: "1px solid rgba(181,46,50,0.20)",
                  }}
                >
                  <b.icon size={28} className="text-[#C6A15B]" />
                  <h3 className="mt-4 font-display text-lg text-[#F5F0E6]">{b.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SURFACES ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-5xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Surfaces We Paint
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {surfacesPainted.map((surf, i) => (
              <Reveal key={surf.name} delay={i * 0.05}>
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "#F5F0E6",
                    border: "1px solid rgba(198,161,91,0.16)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 flex-shrink-0 text-[#B52E32]" />
                    <div>
                      <div className="font-semibold text-[#202321]">{surf.name}</div>
                      <div className="text-sm text-[#687967]">{surf.detail}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section style={{ background: "#EDE7D6" }}>
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Exterior Painting Cost — Kitchener-Waterloo
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="mt-10 space-y-4 rounded-2xl p-8"
              style={{
                background: "#FFFDF8",
                boxShadow: "0 4px 0 0 rgba(32,35,33,0.09), 0 14px 36px -8px rgba(32,35,33,0.14)",
              }}
            >
              {[
                { type: "Small Home (1,000 sq ft)", cost: "$3,500 – $6,000", note: "1-2 stories, basic siding" },
                { type: "Medium Home (1,500 sq ft)", cost: "$5,500 – $9,000", note: "Includes trim, eaves, doors" },
                { type: "Large Home (2,500 sq ft)", cost: "$8,500 – $15,000", note: "Full exterior transformation" },
                { type: "Deck Staining (300 sq ft)", cost: "$900 – $1,800", note: "Semi-transparent or solid stain" },
                { type: "Fence Painting (100 ft)", cost: "$800 – $1,500", note: "Both sides, full protection" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 border-b border-[#687967]/10 pb-4 last:border-0"
                >
                  <div>
                    <div className="font-semibold text-[#202321]">{item.type}</div>
                    <div className="text-sm text-[#687967]">{item.note}</div>
                  </div>
                  <div className="font-display text-lg text-[#B52E32] whitespace-nowrap">{item.cost}</div>
                </div>
              ))}
              <p className="mt-6 text-xs text-[#687967]">
                * Includes power washing, prep, primer, 2 coats premium paint. Rot repair quoted separately.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div
            className="relative overflow-hidden px-8 py-20 md:px-16"
            style={{
              borderRadius: "1.5rem",
              background: "linear-gradient(135deg, #35483A 0%, #202321 100%)",
              boxShadow:
                "0 8px 0 0 rgba(32,35,33,0.32), 0 24px 60px -12px rgba(32,35,33,0.48)",
              border: "1px solid rgba(198,161,91,0.20)",
            }}
          >
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-4xl text-balance md:text-5xl text-[#F5F0E6]">
                  Boost your home's curb appeal today
                </h2>
                <p className="mt-4 text-[#687967]">
                  Free estimate. Weather-resistant coatings. 2-year workmanship warranty.
                </p>
              </div>
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.45)",
                }}
              >
                Get Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </PageShell>
  );
}
