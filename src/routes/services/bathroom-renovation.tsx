import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, Bath } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { createBreadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/bathroom-renovation")({
  head: () => ({
    meta: [
      { title: "Bathroom Renovation Kitchener | Spa-Grade Bathroom Remodeling | Sudcan" },
      { name: "description", content: "Professional bathroom renovation in Kitchener-Waterloo. Curbless showers, heated floors, premium tile. Spa-grade bathrooms. Free quotes. (226) 600-6637." },
      { name: "keywords", content: "bathroom renovation Kitchener, bathroom remodeling Waterloo, shower installation, bathroom contractors, tile installation, spa bathroom, luxury bathroom design Ontario" },
      { property: "og:url", content: "https://www.sudcanpainting.com/services/bathroom-renovation" },
      { rel: "canonical", href: "https://www.sudcanpainting.com/services/bathroom-renovation" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Services", url: "https://www.sudcanpainting.com/services" },
          { name: "Bathroom Renovation", url: "https://www.sudcanpainting.com/services/bathroom-renovation" },
        ])),
      },
    ],
  }),
  component: BathroomRenovationPage,
});

function BathroomRenovationPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Bathroom Renovation Kitchener — <span className="italic text-[#C6A15B]">Spa-Grade Luxury</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Transform your bathroom into a spa-like retreat. Curbless showers, heated floors, premium tile, and custom vanities. Professional installation guaranteed.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+12266006637" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)" }}>
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
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl text-[#202321]">Bathroom Renovation Pricing</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4 rounded-2xl p-8" style={{ background: "#F5F0E6" }}>
              {[
                { type: "Powder Room Renovation", cost: "$8,000 – $15,000" },
                { type: "Full Bathroom Renovation", cost: "$15,000 – $30,000" },
                { type: "Master Ensuite Renovation", cost: "$25,000 – $50,000+" },
                { type: "Curbless Shower Installation", cost: "$6,000 – $12,000" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between gap-4 border-b border-[#687967]/10 pb-4 last:border-0">
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
          <div className="px-8 py-20" style={{ borderRadius: "1.5rem", background: "linear-gradient(135deg, #35483A 0%, #202321 100%)" }}>
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-4xl text-[#F5F0E6]">Create your spa bathroom</h2>
                <p className="mt-4 text-[#687967]">Free design consultation. Premium materials. Expert installation.</p>
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
