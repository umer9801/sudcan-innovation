import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, CheckCircle2, Star, Clock, Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/locations/kitchener")({
  head: () => ({
    meta: [
      { 
        title: "Painters Kitchener ON | Professional Painting Services | Sudcan Painting" 
      },
      {
        name: "description",
        content:
          "Top-rated painting services in Kitchener, ON. Interior, exterior, cabinet refinishing. 18+ years serving Kitchener homes & businesses. Free quotes. (226) 600-6637.",
      },
      { name: "keywords", content: "painters Kitchener, painting services Kitchener ON, house painters Kitchener, interior painting Kitchener, exterior painting Kitchener, Kitchener painters" },
      
      // Open Graph
      { property: "og:title", content: "Professional Painters Kitchener ON | Sudcan Painting" },
      { property: "og:description", content: "Top-rated painting & renovation services in Kitchener. 18+ years experience. Free quotes. Licensed & insured." },
      { property: "og:url", content: "https://www.sudcanpainting.com/locations/kitchener" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Professional Painters Kitchener ON" },
      { name: "twitter:description", content: "Top-rated painting services in Kitchener. Free quotes. 18+ years experience." },
      
      // Canonical
      { rel: "canonical", href: "https://www.sudcanpainting.com/locations/kitchener" },
    ],
  }),
  component: KitchenerPage,
});

const services = [
  { name: "Interior Painting", link: "/services/interior-painting", desc: "Walls, ceilings, trim - flawless finish" },
  { name: "Exterior Painting", link: "/services/exterior-painting", desc: "Weather-resistant coatings" },
  { name: "Cabinet Refinishing", link: "/services/cabinet-refinishing", desc: "Transform your kitchen" },
  { name: "Kitchen Renovation", link: "/services/kitchen-remodeling", desc: "Complete kitchen remodels" },
  { name: "Bathroom Renovation", link: "/services/bathroom-renovation", desc: "Spa-grade bathrooms" },
  { name: "Hardwood Flooring", link: "/services/hardwood-flooring", desc: "Premium European oak" },
];

const neighborhoods = [
  "Downtown Kitchener",
  "Doon",
  "Forest Heights",
  "Grand River",
  "Highland West",
  "Huron Park",
  "Laurentian Hills",
  "Mill-Courtland",
  "Pioneer Park",
  "Stanley Park",
  "Victoria Hills",
  "Westmount",
];

const stats = [
  { value: "350+", label: "Kitchener Projects" },
  { value: "18+", label: "Years Local" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "Same Day", label: "Quote Response" },
];

function KitchenerPage() {
  return (
    <PageShell>
      
      {/* ── HERO ── */}
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              <MapPin size={14} />
              <span>Serving Kitchener, Ontario</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Professional Painters in <span className="italic text-[#C6A15B]">Kitchener</span>, ON
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Kitchener's trusted painting and renovation experts. From downtown condos to Forest Heights homes, we've transformed 350+ properties across every Kitchener neighborhood. Interior painting, exterior coatings, cabinet refinishing, and full renovations. Licensed, insured, and locally owned.
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
                      event_label: 'kitchener_location_page_hero',
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
                Free Quote for Kitchener
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

      {/* ── STATS ── */}
      <section style={{ background: "#35483A" }}>
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <div className="font-display text-4xl text-[#C6A15B]">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#687967]">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES IN KITCHENER ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Painting & Renovation Services in Kitchener
            </h2>
            <p className="mt-4 text-[#687967]">
              Serving every neighborhood from downtown to the suburbs
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <Link
                  to={s.link}
                  className="group block h-full p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#F5F0E6",
                    boxShadow:
                      "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.65)",
                    border: "1px solid rgba(198,161,91,0.16)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <CheckCircle2 size={24} className="text-[#B52E32]" />
                    <ArrowRight size={16} className="text-[#687967] transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-[#202321]">{s.name}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEIGHBORHOODS ── */}
      <section style={{ background: "#EDE7D6" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Kitchener Neighborhoods We Serve
            </h2>
            <p className="mt-4 text-[#687967]">
              We've painted homes and businesses in every corner of Kitchener
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {neighborhoods.map((n, i) => (
              <Reveal key={n} delay={i * 0.03}>
                <div className="flex items-center gap-2 rounded-lg bg-white/50 px-4 py-3">
                  <MapPin size={14} className="flex-shrink-0 text-[#B52E32]" />
                  <span className="text-sm font-medium text-[#202321]">{n}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Why Kitchener Homeowners Choose Sudcan
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Award, title: "18+ Years in Kitchener", desc: "Locally owned and operated since 2008. We know Kitchener homes inside and out." },
              { icon: Star, title: "4.9/5 Star Rating", desc: "127+ verified reviews from Kitchener homeowners. Check our Google Business Profile." },
              { icon: Clock, title: "Same-Day Quotes", desc: "Call before noon, get your quote the same day. Most projects start within 2 weeks." },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="p-7">
                  <f.icon size={32} className="text-[#B52E32]" />
                  <h3 className="mt-4 font-display text-xl text-[#202321]">{f.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
                  Ready to transform your Kitchener home?
                </h2>
                <p className="mt-4 max-w-xl text-[#687967]">
                  Free quotes. Same-day response. Licensed & insured. Serving all Kitchener neighborhoods.
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

    </PageShell>
  );
}
