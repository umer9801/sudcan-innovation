import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Sparkles, Clock, Shield, Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { createBreadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/interior-painting")({
  head: () => ({
    meta: [
      { 
        title: "Interior Painting Services Kitchener | Professional House Painters | Sudcan Painting" 
      },
      {
        name: "description",
        content:
          "Professional interior painting in Kitchener-Waterloo. Expert prep, premium Benjamin Moore paint, flawless finish. 18+ years experience. Free quotes. 2-year warranty. Call (226) 600-6637.",
      },
      { name: "keywords", content: "interior painting Kitchener, house painters Waterloo, room painting, wall painting, ceiling painting, residential painting, home painters near me, affordable interior painting, professional painters Ontario, trim painting" },
      
      // Open Graph
      { property: "og:title", content: "Interior Painting Services Kitchener | Sudcan Painting" },
      { property: "og:description", content: "Professional interior painting with premium materials. Expert prep, flawless finish. Free quotes. Kitchener-Waterloo." },
      { property: "og:url", content: "https://www.sudcanpainting.com/services/interior-painting" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Interior Painting Services Kitchener | Sudcan Painting" },
      { name: "twitter:description", content: "Professional interior painting. Expert prep, premium paint, flawless finish. Free quotes." },
      
      // Canonical
      { rel: "canonical", href: "https://www.sudcanpainting.com/services/interior-painting" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Services", url: "https://www.sudcanpainting.com/services" },
          { name: "Interior Painting", url: "https://www.sudcanpainting.com/services/interior-painting" },
        ])),
      },
    ],
  }),
  component: InteriorPaintingPage,
});

const benefits = [
  { icon: CheckCircle2, title: "Premium Benjamin Moore Paint", desc: "Top-tier paints with superior coverage and lasting color" },
  { icon: Shield, title: "Meticulous Surface Prep", desc: "Proper sanding, filling, priming - the foundation of quality" },
  { icon: Sparkles, title: "Zero-Mess Process", desc: "Full furniture protection, daily cleanup, spotless finish" },
  { icon: Clock, title: "On-Time Completion", desc: "Single room: 1-2 days. Full home: 3-7 days. Always on schedule" },
  { icon: Award, title: "2-Year Workmanship Warranty", desc: "If paint peels or fails due to application, we fix it free" },
];

const process = [
  { step: "01", title: "Free In-Home Consultation", desc: "We assess surfaces, discuss colors, answer questions" },
  { step: "02", title: "Detailed Fixed-Price Quote", desc: "Transparent pricing with no hidden fees or surprises" },
  { step: "03", title: "Professional Prep Work", desc: "Patching, sanding, caulking, taping, priming" },
  { step: "04", title: "Expert Paint Application", desc: "Two coats minimum, precision cutting, smooth finish" },
  { step: "05", title: "Final Walk-Through", desc: "Inspect together, touch-ups if needed, furniture back" },
];

const roomsPainted = [
  "Living Rooms & Great Rooms",
  "Bedrooms & Master Suites",
  "Kitchens & Dining Rooms",
  "Bathrooms & Powder Rooms",
  "Hallways & Stairwells",
  "Basements & Rec Rooms",
  "Home Offices & Dens",
  "Ceilings & Trim Work",
];

function InteriorPaintingPage() {
  return (
    <PageShell>
      
      {/* ── HERO ── */}
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Interior Painting Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Interior Painting Kitchener-Waterloo — <span className="italic text-[#C6A15B]">Fresh Walls, Flawless Finish</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Transform every room with professional interior painting. Premium Benjamin Moore paints, meticulous prep, and expert application. Serving Kitchener, Waterloo, Cambridge, and Guelph for 18+ years.
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
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'phone_call_click', {
                      event_category: 'engagement',
                      event_label: 'interior_painting_hero',
                      value: 1
                    });
                  }
                }}
              >
                <Phone size={16} />
                Call Now: (226) 600-6637
              </a>
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[#35483A] transition-all hover:bg-white"
                style={{
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(198,161,91,0.35)",
                }}
              >
                Free Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div
            className="mt-8 h-px w-20"
            style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
          />
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Why Homeowners Choose Us for Interior Painting
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div
                  className="p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#F5F0E6",
                    boxShadow:
                      "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.65)",
                    border: "1px solid rgba(198,161,91,0.16)",
                  }}
                >
                  <b.icon size={28} className="text-[#B52E32]" />
                  <h3 className="mt-4 font-display text-xl text-[#202321]">{b.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROOMS WE PAINT ── */}
      <section style={{ background: "#EDE7D6" }}>
        <div className="mx-auto max-w-5xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Rooms We Paint
            </h2>
            <p className="mt-4 text-[#687967]">
              Every space in your home deserves attention. We paint it all:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {roomsPainted.map((room, i) => (
              <Reveal key={room} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl bg-white/50 px-5 py-4">
                  <CheckCircle2 size={20} className="flex-shrink-0 text-[#B52E32]" />
                  <span className="font-medium text-[#202321]">{room}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: "#35483A" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Our Process
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#F5F0E6]">
              How Interior Painting Works with Sudcan
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative">
                  <div
                    className="grid h-14 w-14 place-items-center font-display text-lg"
                    style={{
                      borderRadius: "9999px",
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)"
                        : "linear-gradient(135deg, #C6A15B 0%, #a8843e 100%)",
                      boxShadow: i % 2 === 0
                        ? "0 3px 0 0 rgba(130,20,23,0.70), 0 8px 20px -4px rgba(130,20,23,0.38)"
                        : "0 3px 0 0 rgba(160,120,45,0.70), 0 8px 20px -4px rgba(160,120,45,0.38)",
                      color: i % 2 === 0 ? "white" : "#202321",
                    }}
                  >
                    {p.step}
                  </div>
                  <h3 className="mt-6 font-display text-lg text-[#F5F0E6]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING GUIDE ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Interior Painting Cost Guide — Kitchener-Waterloo
            </h2>
            <p className="mt-4 text-[#687967]">
              Transparent pricing. No hidden fees. Every quote is fixed once scope is confirmed.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="mt-10 space-y-4 rounded-2xl p-8"
              style={{
                background: "#FFFDF8",
                boxShadow: "0 4px 0 0 rgba(32,35,33,0.09), 0 14px 36px -8px rgba(32,35,33,0.14)",
                border: "1px solid rgba(198,161,91,0.20)",
              }}
            >
              {[
                { room: "Single Room (12×12)", cost: "$400 – $800", note: "Includes ceiling, walls, trim" },
                { room: "Master Bedroom", cost: "$600 – $1,200", note: "Including closet and ensuite prep" },
                { room: "Full Living Room", cost: "$800 – $1,600", note: "High ceilings add 20-30%" },
                { room: "Full Home Interior (1,500 sq ft)", cost: "$4,500 – $8,000", note: "All rooms, ceilings, trim, 2 coats" },
                { room: "Full Home Interior (2,500 sq ft)", cost: "$7,500 – $14,000", note: "Complete transformation" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 border-b border-[#687967]/10 pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="font-semibold text-[#202321]">{item.room}</div>
                    <div className="text-sm text-[#687967]">{item.note}</div>
                  </div>
                  <div className="font-display text-lg text-[#B52E32] whitespace-nowrap">{item.cost}</div>
                </div>
              ))}
              <p className="mt-6 text-xs text-[#687967]">
                * Prices vary based on surface condition, ceiling height, and prep requirements. Free in-home quotes available.
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
                "0 8px 0 0 rgba(32,35,33,0.32), 0 24px 60px -12px rgba(32,35,33,0.48), inset 0 1px 0 rgba(255,255,255,0.07)",
              border: "1px solid rgba(198,161,91,0.20)",
            }}
          >
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-4xl text-balance md:text-5xl text-[#F5F0E6]">
                  Ready to transform your home's interior?
                </h2>
                <p className="mt-4 max-w-xl text-[#687967]">
                  Get a free, no-obligation quote. We respond within 24 hours with transparent pricing.
                </p>
              </div>
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.45), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                Get Free Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                Related Services
              </span>
              <h2 className="mt-3 font-display text-4xl text-[#202321]">
                Complete Your Project
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Exterior Painting", desc: "Weather-resistant coatings for your home's exterior", link: "/services/exterior-painting" },
              { title: "Cabinet Refinishing", desc: "Transform your kitchen with professional cabinet painting", link: "/services/cabinet-refinishing" },
              { title: "Home Renovation", desc: "Complete home transformation services", link: "/services/home-renovation" },
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <Link
                  to={service.link}
                  className="group block h-full p-6 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#EDEADE",
                    boxShadow: "0 3px 0 0 rgba(32,35,33,0.08), 0 10px 28px -6px rgba(32,35,33,0.12)",
                    border: "1px solid rgba(198,161,91,0.18)",
                  }}
                >
                  <h3 className="font-display text-xl text-[#202321] group-hover:text-[#B52E32] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#687967]">{service.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B52E32]">
                    Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
