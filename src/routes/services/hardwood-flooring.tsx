import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services/hardwood-flooring")({
  head: () => ({
    meta: [
      { title: "Hardwood Flooring Installation Kitchener | European Oak & Walnut | Sudcan" },
      { name: "description", content: "Professional hardwood floor installation in Kitchener-Waterloo. European oak, walnut, engineered wide-plank. Expert installation. Free quotes. (226) 600-6637." },
      { name: "keywords", content: "hardwood flooring Kitchener, hardwood installation Waterloo, oak flooring, engineered hardwood, floor refinishing" },
      { property: "og:url", content: "https://www.sudcanpainting.com/services/hardwood-flooring" },
      { rel: "canonical", href: "https://www.sudcanpainting.com/services/hardwood-flooring" },
    ],
  }),
  component: HardwoodFlooringPage,
});

function HardwoodFlooringPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal><h1 className="max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">Hardwood Flooring Installation — <span className="italic text-[#C6A15B]">European Oak & Walnut</span></h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 max-w-2xl text-lg text-[#687967]">Premium hardwood floor installation. European oak, walnut, and engineered wide-plank. Expert installation with precision and care.</p></Reveal>
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
          <Reveal><h2 className="font-display text-4xl text-[#202321]">Hardwood Flooring Pricing</h2></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4 rounded-2xl p-8" style={{ background: "#F5F0E6" }}>
              {[
                { type: "Solid Hardwood (Oak, Maple)", cost: "$10 – $18 per sq ft installed" },
                { type: "European Oak Wide-Plank", cost: "$15 – $25 per sq ft installed" },
                { type: "Engineered Hardwood", cost: "$8 – $15 per sq ft installed" },
                { type: "Hardwood Refinishing", cost: "$3 – $6 per sq ft" },
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
              <div><h2 className="font-display text-4xl text-[#F5F0E6]">Premium hardwood floors that last</h2><p className="mt-4 text-[#687967]">Free consultation. Expert installation. Beautiful results.</p></div>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)" }}>Get Free Quote <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
