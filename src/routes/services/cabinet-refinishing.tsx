import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Sparkles, DollarSign } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { createBreadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/cabinet-refinishing")({
  head: () => ({
    meta: [
      { title: "Cabinet Refinishing Kitchener | Kitchen Cabinet Painting | Sudcan Painting" },
      {
        name: "description",
        content:
          "Professional cabinet refinishing in Kitchener-Waterloo. Spray-painted cabinets at 1/3 the cost of replacement. Factory-smooth finish. Free quotes. (226) 600-6637.",
      },
      { name: "keywords", content: "cabinet refinishing Kitchener, kitchen cabinet painting, cabinet spray painting, bathroom vanity painting, cabinet makeover Waterloo, affordable cabinet update, professional cabinet refinishing Ontario" },
      { property: "og:title", content: "Cabinet Refinishing Kitchener | Sudcan Painting" },
      { property: "og:url", content: "https://www.sudcanpainting.com/services/cabinet-refinishing" },
      { rel: "canonical", href: "https://www.sudcanpainting.com/services/cabinet-refinishing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Services", url: "https://www.sudcanpainting.com/services" },
          { name: "Cabinet Refinishing", url: "https://www.sudcanpainting.com/services/cabinet-refinishing" },
        ])),
      },
    ],
  }),
  component: CabinetRefinishingPage,
});

function CabinetRefinishingPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Cabinet Refinishing Kitchener — <span className="italic text-[#C6A15B]">New Kitchen, 1/3 the Cost</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Professional cabinet refinishing and spray painting. Transform your kitchen or bathroom at a fraction of replacement cost. Factory-smooth finish guaranteed.
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
                  boxShadow: "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42)",
                }}
              >
                <Phone size={16} /> Call: (226) 600-6637
              </a>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium" style={{ borderRadius: "9999px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(198,161,91,0.35)" }}>
                Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">Why Refinish vs Replace?</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { icon: DollarSign, title: "Save 60-70%", desc: "Refinishing costs $3,500-$7,000 vs $15,000-$35,000 for new cabinets" },
              { icon: Sparkles, title: "Factory Finish", desc: "Professional spray painting delivers showroom-quality results" },
              { icon: CheckCircle2, title: "Done in Days", desc: "Most kitchens completed in 3-5 days vs weeks of installation" },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="p-7" style={{ borderRadius: "1.25rem", background: "#F5F0E6", boxShadow: "0 2px 0 0 rgba(32,35,33,0.09)" }}>
                  <b.icon size={28} className="text-[#B52E32]" />
                  <h3 className="mt-4 font-display text-xl text-[#202321]">{b.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#EDE7D6" }}>
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl text-[#202321]">Cabinet Refinishing Pricing</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4 rounded-2xl p-8" style={{ background: "#FFFDF8" }}>
              {[
                { type: "Small Kitchen (10-15 cabinets)", cost: "$3,500 – $5,500" },
                { type: "Medium Kitchen (16-25 cabinets)", cost: "$5,500 – $7,500" },
                { type: "Large Kitchen (26+ cabinets)", cost: "$7,500 – $12,000" },
                { type: "Bathroom Vanity Refinishing", cost: "$800 – $1,500" },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-between gap-4 border-b border-[#687967]/10 pb-4 last:border-0">
                  <div className="font-semibold text-[#202321]">{item.type}</div>
                  <div className="font-display text-lg text-[#B52E32] whitespace-nowrap">{item.cost}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div className="relative overflow-hidden px-8 py-20" style={{ borderRadius: "1.5rem", background: "linear-gradient(135deg, #35483A 0%, #202321 100%)" }}>
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-4xl text-[#F5F0E6]">Transform your kitchen this month</h2>
                <p className="mt-4 text-[#687967]">Free quote. Professional spray finish. Done in days, not weeks.</p>
              </div>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)" }}>
                Get Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
