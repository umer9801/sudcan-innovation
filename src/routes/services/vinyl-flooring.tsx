import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/vinyl-flooring")({
  head: () => ({
    meta: [
      { title: "Luxury Vinyl Flooring Installation Kitchener | LVP & LVT | Sudcan Painting" },
      { name: "description", content: "Luxury vinyl plank (LVP) installation in Kitchener-Waterloo. Waterproof, durable, realistic wood look. Expert installation. Free quotes. (226) 600-6637." },
      { name: "keywords", content: "vinyl flooring Kitchener, LVP installation Waterloo, luxury vinyl plank, waterproof flooring, vinyl tile installation" },
      { property: "og:url", content: "https://www.sudcanpainting.com/services/vinyl-flooring" },
      { rel: "canonical", href: "https://www.sudcanpainting.com/services/vinyl-flooring" },
    ],
  }),
  component: VinylFlooringPage,
});

function VinylFlooringPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal><h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">Luxury Vinyl Flooring — <span className="italic text-[#C6A15B]">Waterproof & Durable</span></h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 max-w-2xl text-lg text-[#687967]">Luxury vinyl plank (LVP) and tile installation. 100% waterproof, realistic textures, lifetime durability. Perfect for kitchens, basements, and bathrooms.</p></Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+12266006637" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)" }}><Phone size={16} /> (226) 600-6637</a>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium" style={{ borderRadius: "9999px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(198,161,91,0.35)" }}>Free Quote <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal><h2 className="font-display text-4xl text-[#202321]">Vinyl Flooring Pricing</h2></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4 rounded-2xl p-8" style={{ background: "#F5F0E6" }}>
              {[
                { type: "Luxury Vinyl Plank (LVP)", cost: "$5 – $10 per sq ft installed" },
                { type: "Luxury Vinyl Tile (LVT)", cost: "$4 – $8 per sq ft installed" },
                { type: "Sheet Vinyl", cost: "$3 – $6 per sq ft installed" },
                { type: "Waterproof SPC/WPC Core", cost: "$6 – $12 per sq ft installed" },
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
              <div><h2 className="font-display text-4xl text-[#F5F0E6]">Waterproof flooring that looks like wood</h2><p className="mt-4 text-[#687967]">Free samples. Expert installation. Lifetime durability.</p></div>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)" }}>Get Free Quote <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
