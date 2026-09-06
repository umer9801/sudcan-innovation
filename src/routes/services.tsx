import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  Brush,
  ChefHat,
  Home as HomeIcon,
  Layers,
  PaintBucket,
  Sparkles,
  Square,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import beforeImg from "@/assets/12.jpeg";
import afterImg from "@/assets/10.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Sudcan Innovation Inc" },
      {
        name: "description",
        content:
          "Professional painting, renovation, and flooring services across Canada.",
      },
      { property: "og:title", content: "Our Services — Sudcan" },
      {
        property: "og:description",
        content: "End-to-end painting and renovation for residential and commercial.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Brush,       title: "Interior Painting",   desc: "Walls, ceilings, trim, and doors — flawless finish from primer to topcoat.",             num: "01" },
  { icon: PaintBucket, title: "Exterior Painting",   desc: "Weather-resistant coatings that protect your property and boost curb appeal.",           num: "02" },
  { icon: Sparkles,    title: "Cabinet Refinishing",  desc: "Spray-painted cabinets with a factory-smooth finish at a fraction of replacement cost.", num: "03" },
  { icon: Layers,      title: "Hardwood Flooring",   desc: "Wide-plank European oak, walnut, and engineered hardwood.",                             num: "04" },
  { icon: Square,      title: "Vinyl Flooring",      desc: "Luxury vinyl plank with realistic textures and lifetime durability.",                    num: "05" },
  { icon: PaintBucket, title: "Tile Installation",   desc: "Porcelain, ceramic, and natural stone — laid with millimetre precision.",                num: "06" },
  { icon: HomeIcon,    title: "Home Renovation",     desc: "Whole-home transformations, design-build, and additions.",                              num: "07" },
  { icon: ChefHat,     title: "Kitchen Remodeling",  desc: "Custom cabinetry, stone surfaces, and chef-grade layouts.",                             num: "08" },
  { icon: Bath,        title: "Bathroom Renovation", desc: "Spa-grade bathrooms with curbless showers and heated floors.",                          num: "09" },
];

// Alternating card backgrounds for visual rhythm
const cardBg = ["#EDEADE", "#E8E3D8"];

const steps = [
  { n: "01", t: "Free Estimate",    d: "We visit, assess surfaces, and discuss your colour ideas." },
  { n: "02", t: "Colour & Plan",    d: "Choose colours with expert guidance and receive a fixed quote." },
  { n: "03", t: "Expert Work",      d: "Full prep, prime, and paint with premium materials." },
  { n: "04", t: "Final Inspection", d: "Walk-through together — we don't leave until it's perfect." },
];

const faqs = [
  {
    q: "How long does interior painting take?",
    a: "A single room typically takes 1–2 days including prep and two coats. A full home interior usually runs 3–7 days depending on size and surface condition.",
  },
  {
    q: "What paint brands do you use?",
    a: "We work exclusively with Benjamin Moore, Sherwin-Williams, and other premium brands. We never cut corners with budget paint — the difference in finish and durability is significant.",
  },
  {
    q: "Do I need to move my furniture?",
    a: "We handle all furniture moving and protection with professional drop cloths and plastic sheeting. You don't need to do a thing before we arrive.",
  },
  {
    q: "Can you help choose colours?",
    a: "Absolutely. We offer colour consultation as part of every project. We bring samples, assess your lighting, and help you choose shades that work beautifully in your space.",
  },
  {
    q: "Are your quotes fixed or estimates?",
    a: "All quotes are fixed once scope is confirmed. Any change order is approved in writing before we proceed — no surprise bills, ever.",
  },
  {
    q: "What warranty do you offer?",
    a: "All workmanship is warrantied for 2 years. If paint peels, bubbles, or fails due to application, we come back and fix it at no charge.",
  },
];

function ServicesPage() {
  return (
    <PageShell>

      {/* ── HERO — Warm Cream bg · Olive heading · Brass italic ── */}
      <section className="pt-40" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Professional painting &amp;{" "}
              <span className="italic text-[#C6A15B]">renovation</span>, elevated.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              From a fresh coat of paint to a complete home renovation — one senior
              team, one fixed quote, one beautiful result across Canada.
            </p>
          </Reveal>
          <div
            className="mt-8 h-px w-20"
            style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
          />
        </div>
      </section>

      {/* ── SERVICE GRID — Soft cream bg · Clay cards · Brass numbers · Olive icons ── */}
      <section style={{ background: "#EDE7D6" }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div
                  className="group relative flex h-full flex-col overflow-hidden p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: cardBg[i % 2],
                    boxShadow:
                      "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.13), inset 0 1px 0 rgba(255,255,255,0.62)",
                    border: "1px solid rgba(198,161,91,0.18)",
                  }}
                >
                  {/* Brass top hover line */}
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, transparent, #C6A15B, transparent)",
                    }}
                  />
                  {/* Brass service number */}
                  <span className="mb-4 block text-xs font-semibold tracking-[0.2em] text-[#C6A15B]">
                    {s.num}
                  </span>
                  {/* Olive icon container */}
                  <div
                    className="grid h-12 w-12 place-items-center"
                    style={{
                      borderRadius: "0.875rem",
                      background: "linear-gradient(135deg, #35483A 0%, #202321 100%)",
                      boxShadow:
                        "0 3px 0 0 rgba(32,35,33,0.45), 0 8px 18px -4px rgba(32,35,33,0.28), inset 0 1px 0 rgba(255,255,255,0.11)",
                    }}
                  >
                    <s.icon size={20} className="text-[#C6A15B]" />
                  </div>
                  <h3 className="mt-5 font-display text-xl text-[#202321]">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#687967]">{s.desc}</p>
                  <Link
                    to="/quote"
                    className="mt-6 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#B52E32]/60 transition-colors group-hover:text-[#B52E32]"
                  >
                    Get a quote <ArrowRight size={12} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS — Deep Olive bg · Red eyebrow · Cream text · Red + Brass step circles ── */}
      <section
        style={{
          background: "#35483A",
          borderTop: "1px solid rgba(181,46,50,0.25)",
          borderBottom: "1px solid rgba(181,46,50,0.25)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Our process
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#F5F0E6]">
              From blank wall to beautiful finish.
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-7 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(181,46,50,0.40), rgba(198,161,91,0.35), transparent)",
              }}
            />
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative">
                  {/* Alternating red/brass circles */}
                  <div
                    className="grid h-14 w-14 place-items-center font-display text-lg"
                    style={{
                      borderRadius: "9999px",
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)"
                        : "linear-gradient(135deg, #C6A15B 0%, #a8843e 100%)",
                      boxShadow: i % 2 === 0
                        ? "0 3px 0 0 rgba(130,20,23,0.70), 0 8px 20px -4px rgba(130,20,23,0.38), inset 0 1px 0 rgba(255,255,255,0.30)"
                        : "0 3px 0 0 rgba(160,120,45,0.70), 0 8px 20px -4px rgba(160,120,45,0.38), inset 0 1px 0 rgba(255,255,255,0.32)",
                      color: i % 2 === 0 ? "white" : "#202321",
                    }}
                  >
                    {s.n}
                  </div>
                  <h3 className="mt-6 font-display text-xl text-[#F5F0E6]">{s.t}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER — Ivory bg · Olive text · Olive overlays ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#687967]">
              Showcase
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Before &amp; after, side by side.
            </h2>
            <div
              className="mt-4 h-px w-16"
              style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { src: beforeImg, alt: "Before renovation",   label: "The Space",          tag: "Before" },
              { src: afterImg,  alt: "After renovation",    label: "The Transformation", tag: "After"  },
            ].map((item, i) => (
              <Reveal key={item.tag} delay={i * 0.1}>
                <div
                  className="group relative overflow-hidden"
                  style={{
                    borderRadius: "1.25rem",
                    boxShadow:
                      "0 4px 0 0 rgba(32,35,33,0.14), 0 14px 36px -8px rgba(32,35,33,0.20), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={1280}
                    height={960}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(32,35,33,0.82) 0%, rgba(53,72,58,0.18) 50%, transparent 100%)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-[#F5F0E6]">
                    <span className="font-display text-xl">{item.label}</span>
                    <span
                      className="px-3 py-1 text-xs uppercase tracking-[0.2em] text-[#F5F0E6]"
                      style={{
                        borderRadius: "9999px",
                        background: "rgba(32,35,33,0.58)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(198,161,91,0.40)",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — Warm Cream bg · Red label · Olive text · Brass borders ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Questions, answered.
            </h2>
            <div className="mt-4 flex gap-1">
              <div className="h-px w-8" style={{ background: "#B52E32" }} />
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div
              className="mt-10 overflow-hidden"
              style={{
                borderRadius: "1.25rem",
                background: "#EDEADE",
                boxShadow:
                  "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.13), inset 0 1px 0 rgba(255,255,255,0.62)",
                border: "1px solid rgba(198,161,91,0.20)",
              }}
            >
              <Accordion type="single" collapsible>
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="px-7"
                    style={{ borderColor: "rgba(198,161,91,0.18)" }}
                  >
                    <AccordionTrigger className="py-6 text-left font-display text-lg hover:no-underline text-[#202321] hover:text-[#35483A]">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base text-[#687967]">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>

    </PageShell>
  );
}
