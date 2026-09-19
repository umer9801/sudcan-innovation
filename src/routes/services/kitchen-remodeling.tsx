import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ChefHat } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/kitchen-remodeling")({
  head: () => ({
    meta: [
      { title: "Kitchen Remodeling Kitchener | Custom Kitchen Renovation | Sudcan Painting" },
      { name: "description", content: "Professional kitchen remodeling in Kitchener-Waterloo. Custom cabinetry, stone countertops, expert design. Transform your kitchen. Free quotes. (226) 600-6637." },
      { name: "keywords", content: "kitchen renovation Kitchener, kitchen remodeling Waterloo, custom kitchen, kitchen design, kitchen contractors, affordable kitchen update, modern kitchen design Ontario" },
      { property: "og:url", content: "https://www.sudcanpainting.com/services/kitchen-remodeling" },
      { rel: "canonical", href: "https://www.sudcanpainting.com/services/kitchen-remodeling" },
    ],
  }),
  component: KitchenRemodelingPage,
});

function KitchenRemodelingPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Kitchen Remodeling Kitchener-Waterloo — <span className="italic text-[#C6A15B]">Chef-Grade Design</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Complete kitchen renovations from design to completion. Custom cabinetry, stone countertops, professional tile, and chef-grade layouts. Built around how you live.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+12266006637" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)", boxShadow: "0 3px 0 0 rgba(130,20,23,0.75)" }}>
                <Phone size={16} /> Call: (226) 600-6637
              </a>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium" style={{ borderRadius: "9999px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(198,161,91,0.35)" }}>
                Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl text-[#202321]">Kitchen Remodeling Pricing — Kitchener</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4 rounded-2xl p-8" style={{ background: "#F5F0E6" }}>
              {[
                { type: "Minor Kitchen Refresh", cost: "$15,000 – $30,000", note: "New cabinets, countertops, paint, backsplash" },
                { type: "Mid-Range Kitchen Renovation", cost: "$30,000 – $60,000", note: "Custom cabinets, stone counters, new appliances, flooring" },
                { type: "Luxury Kitchen Remodel", cost: "$60,000 – $120,000+", note: "High-end finishes, layout changes, premium appliances" },
              ].map((item, i) => (
                <div key={i} className="border-b border-[#687967]/10 pb-4 last:border-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <div className="font-semibold text-[#202321]">{item.type}</div>
                      <div className="text-sm text-[#687967]">{item.note}</div>
                    </div>
                    <div className="font-display text-lg text-[#B52E32] whitespace-nowrap">{item.cost}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div className="px-8 py-20" style={{ borderRadius: "1.5rem", background: "linear-gradient(135deg, #35483A 0%, #202321 100%)" }}>
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-4xl text-[#F5F0E6]">Ready for your dream kitchen?</h2>
                <p className="mt-4 text-[#687967]">Free design consultation. Fixed-price quotes. Transparent timeline.</p>
              </div>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)" }}>
                Start Your Project <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
