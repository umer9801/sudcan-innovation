import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/locations/guelph")({
  head: () => ({
    meta: [
      { title: "Painters Guelph ON | Professional Painting Services | Sudcan Painting" },
      { name: "description", content: "Professional painting services in Guelph, ON. Interior, exterior, renovations. Serving downtown Guelph and surrounding areas. Free quotes. (226) 600-6637." },
      { name: "keywords", content: "painters Guelph, painting services Guelph ON, house painters Guelph, Guelph painters, interior painting Guelph, affordable painters Guelph, residential painters Guelph, downtown Guelph painters, licensed painters Ontario" },
      { property: "og:url", content: "https://www.sudcanpainting.com/locations/guelph" },
      { rel: "canonical", href: "https://www.sudcanpainting.com/locations/guelph" },
    ],
  }),
  component: GuelphPage,
});

const neighborhoods = ["Downtown Guelph", "Exhibition Park", "Old University", "St. George's", "Westminster Woods", "Willow West"];

function GuelphPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal><div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B52E32]"><MapPin size={14} /><span>Serving Guelph, Ontario</span></div></Reveal>
          <Reveal delay={0.1}><h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">Professional Painters in <span className="italic text-[#C6A15B]">Guelph</span>, ON</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 max-w-2xl text-lg text-[#687967]">Guelph's premier painting and renovation contractor. From downtown heritage homes to modern subdivisions, we deliver professional interior painting, exterior coatings, and complete renovations. Licensed and insured.</p></Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+12266006637" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)" }}><Phone size={16} /> (226) 600-6637</a>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium" style={{ borderRadius: "9999px", background: "rgba(255,255,255,0.7)", border: "1px solid rgba(198,161,91,0.35)" }}>Free Quote <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal><h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">Guelph Neighborhoods We Serve</h2></Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {neighborhoods.map((n, i) => (
              <Reveal key={n} delay={i * 0.05}>
                <div className="flex items-center gap-2 rounded-lg bg-[#F5F0E6] px-4 py-3">
                  <MapPin size={14} className="text-[#B52E32]" />
                  <span className="text-sm font-medium text-[#202321]">{n}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div className="px-8 py-20" style={{ borderRadius: "1.5rem", background: "linear-gradient(135deg, #35483A 0%, #202321 100%)" }}>
            <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div><h2 className="font-display text-4xl text-[#F5F0E6]">Transform your Guelph home</h2><p className="mt-4 text-[#687967]">Free quotes. Expert painters. Serving all Guelph areas.</p></div>
              <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)" }}>Get Free Quote <ArrowRight size={16} /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
