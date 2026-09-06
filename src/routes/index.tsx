import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Home,
  Layers,
  PaintBucket,
  Ruler,
  ShieldCheck,
  Sparkles,
  Brush,
  Clock,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import hero1 from "@/assets/13.jpeg";
import hero2 from "@/assets/7.jpeg";
import hero3 from "@/assets/5.jpeg";
import hero4 from "@/assets/3.jpeg";
import port1 from "@/assets/1.jpeg";
import port2 from "@/assets/2.jpeg";
import port3 from "@/assets/3.jpeg";
import port4 from "@/assets/4.jpeg";
import port5 from "@/assets/5.jpeg";
import port6 from "@/assets/6.jpeg";
import port7 from "@/assets/7.jpeg";
import port8 from "@/assets/8.jpeg";
import port9 from "@/assets/9.jpeg";

const heroImages = [hero1, hero2, hero3, hero4];
const portfolioImages = [port1, port2, port3, port4, port5, port6, port7, port8, port9];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sudcan Innovation Inc — Professional Painting & Renovation" },
      {
        name: "description",
        content:
          "Professional painting, renovation, and flooring services across Canada. Fresh colours, flawless finishes, and lasting results.",
      },
      { property: "og:title", content: "Sudcan Innovation Inc" },
      {
        property: "og:description",
        content: "Professional painting & renovation services crafted with precision.",
      },
    ],
  }),
  component: HomePage,
});

const paintingHighlights = [
  {
    icon: Brush,
    title: "Interior Painting",
    desc: "Every room deserves a fresh start. We prep, prime, and paint with precision — no drips, no missed corners.",
  },
  {
    icon: PaintBucket,
    title: "Exterior Painting",
    desc: "First impressions last. Our exterior coatings stand up to Canadian winters and look great doing it.",
  },
  {
    icon: Sparkles,
    title: "Cabinet Refinishing",
    desc: "New kitchen, same footprint. Professional refinishing gives your cabinets a showroom finish.",
  },
  {
    icon: Ruler,
    title: "Colour Consultation",
    desc: "Not sure which shade? Our experts help you choose tones that work with your lighting and lifestyle.",
  },
];

const moreServices = [
  { icon: Layers,   title: "Hardwood Flooring",    desc: "European oak, walnut, and engineered wide-plank installations." },
  { icon: Home,     title: "Home Renovation",      desc: "Whole-home transformations from concept to keys-in-hand." },
  { icon: Sparkles, title: "Kitchen Remodeling",   desc: "Functional, beautiful kitchens built around how you live." },
  { icon: Ruler,    title: "Bathroom Renovation",  desc: "Spa-grade bathrooms with premium tile and fixtures." },
];

const process = [
  { step: "01", title: "Free Consultation", desc: "We visit, assess, and listen to exactly what you want." },
  { step: "02", title: "Colour & Quote",    desc: "Choose your colours, get a fixed, transparent quote." },
  { step: "03", title: "Expert Application",desc: "Meticulous prep, premium paint, zero shortcuts." },
  { step: "04", title: "Final Walkthrough", desc: "Inspect every surface — we don't leave until it's perfect." },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "18+",  label: "Years of Experience" },
  { value: "99%",  label: "Client Satisfaction" },
  { value: "2yr",  label: "Workmanship Warranty" },
];

function PortfolioCarousel() {
  const strip = [...portfolioImages, ...portfolioImages];
  return (
    <div className="mt-14 overflow-hidden w-full">
      <div className="flex gap-2 sm:gap-4 animate-marquee">
        {strip.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-44 h-36 sm:w-80 sm:h-56 overflow-hidden"
            style={{
              borderRadius: "1.25rem",
              boxShadow:
                "0 3px 0 0 rgba(32,35,33,0.16), 0 8px 24px -4px rgba(32,35,33,0.20), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            <img
              src={src}
              alt={`Portfolio image ${(i % portfolioImages.length) + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <PageShell>

      {/* ── HERO — Deep Olive overlay · Cream text · Red primary CTA · Brass details ── */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={heroIndex}
              src={heroImages[heroIndex]}
              alt="Professional painting and renovation"
              width={1920}
              height={1080}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
          {/* Deep olive gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(170deg, rgba(32,35,33,0.80) 0%, rgba(53,72,58,0.62) 50%, rgba(245,240,230,0.10) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 pt-40"
        >
          {/* Red + Brass eyebrow pill */}
          <Reveal delay={0.1}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#F5F0E6]"
              style={{
                borderRadius: "9999px",
                background: "rgba(32,35,33,0.55)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(181,46,50,0.50)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.10)",
              }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#B52E32]" />
              Painting · Renovation · Flooring · Canada
            </span>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-[#F5F0E6] text-balance md:text-7xl lg:text-8xl">
              Your space deserves a{" "}
              <span className="italic" style={{ color: "#B52E32" }}>fresh coat</span>{" "}
              of perfection.
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            {/* Red + Brass decorative line under heading */}
            <div className="mt-4 flex gap-1">
              <div className="h-px w-8" style={{ background: "#B52E32" }} />
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }} />
            </div>
            <p className="mt-5 max-w-xl text-lg text-[#F5F0E6]/80">
              Professional painting, renovation, and flooring across Canada.
              Premium finishes, zero mess, lasting results.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-3">
              {/* Brand Red primary CTA */}
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                Get a Free Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Brass-bordered secondary CTA */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-[#F5F0E6] transition-all hover:bg-white/10"
                style={{
                  borderRadius: "9999px",
                  background: "rgba(32,35,33,0.45)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(198,161,91,0.45)",
                }}
              >
                View Services
              </Link>
            </div>
          </Reveal>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-[#F5F0E6]/55"
        >
          Scroll
        </motion.div>
      </section>

      {/* ── STATS — Deep Olive bg · Red + Brass numbers · Soft Olive labels ── */}
      <section style={{ background: "#35483A" }}>
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="text-center">
                  <div
                    className="font-display text-4xl"
                    style={{ color: i % 2 === 0 ? "#B52E32" : "#C6A15B" }}
                  >
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#687967]">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(181,46,50,0.45) 30%, rgba(198,161,91,0.45) 70%, transparent 100%)",
          }}
        />
      </section>

      {/* ── PAINTING HIGHLIGHTS — Warm Cream bg · Olive headings · Red labels · Brass icons ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                What we do best
              </span>
              <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#202321]">
                Painting that transforms every room.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[#B52E32] hover:text-[#35483A] transition-colors"
              >
                All services{" "}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {paintingHighlights.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div
                  className="group relative h-full overflow-hidden p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#EDEADE",
                    boxShadow:
                      "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.13), inset 0 1px 0 rgba(255,255,255,0.68), inset 0 0 0 1px rgba(255,255,255,0.38)",
                    border: "1px solid rgba(198,161,91,0.18)",
                  }}
                >
                  {/* Red top hover line */}
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      background: "linear-gradient(90deg, transparent, #B52E32, transparent)",
                    }}
                  />
                  {/* Olive icon container */}
                  <div
                    className="grid h-12 w-12 place-items-center"
                    style={{
                      borderRadius: "0.875rem",
                      background: "linear-gradient(135deg, #35483A 0%, #202321 100%)",
                      boxShadow:
                        "0 3px 0 0 rgba(32,35,33,0.45), 0 8px 20px -4px rgba(32,35,33,0.30), inset 0 1px 0 rgba(255,255,255,0.11)",
                    }}
                  >
                    <s.icon size={22} className="text-[#C6A15B]" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-[#202321]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#687967]">{s.desc}</p>
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

      {/* ── WHY CHOOSE US — Deep Olive bg · Cream text · Red + Brass icons ── */}
      <section style={{ background: "#35483A" }}>
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Why Sudcan
            </span>
            <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl text-[#F5F0E6]">
              Paint done right. Every single time.
            </h2>
            <p className="mt-6 max-w-md text-[#687967]">
              We're not just painters — we're detail obsessives. Every surface is prepped,
              primed, and painted to a standard that makes the difference visible the moment
              you walk in the door.
            </p>
            {/* Red + Brass double line */}
            <div className="mt-8 flex gap-1">
              <div className="h-px w-8" style={{ background: "#B52E32" }} />
              <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }} />
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { icon: Award,        t: "Premium paints only", d: "Benjamin Moore, Sherwin-Williams, and other top brands." },
              { icon: ShieldCheck,  t: "Fully insured",       d: "Licensed, bonded, and 2-year workmanship warranty." },
              { icon: CheckCircle2, t: "Meticulous prep",     d: "Proper taping, priming, and protection every time." },
              { icon: Clock,        t: "On time, always",     d: "We respect your schedule and keep the site clean daily." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.08}>
                <div
                  className="p-6 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#2C3C30",
                    boxShadow:
                      "0 4px 0 0 rgba(10,14,11,0.55), 0 12px 32px -6px rgba(10,14,11,0.42), inset 0 1px 0 rgba(255,255,255,0.09)",
                    border: "1px solid rgba(181,46,50,0.22)",
                  }}
                >
                  {/* Alternating red/brass icons */}
                  <f.icon size={20} style={{ color: i % 2 === 0 ? "#B52E32" : "#C6A15B" }} />
                  <h3 className="mt-4 font-display text-lg text-[#F5F0E6]">{f.t}</h3>
                  <p className="mt-1 text-sm text-[#687967]">{f.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO — Ivory bg · Olive text · Red label · Brass line ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Featured work
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#202321]">
              A portfolio shaped by colour, light, and detail.
            </h2>
            <div className="mt-4 flex gap-1">
              <div className="h-px w-8" style={{ background: "#B52E32" }} />
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }} />
            </div>
          </Reveal>
          <PortfolioCarousel />
        </div>
      </section>

      {/* ── PROCESS — Warm Cream bg · Olive text · Red + Brass step circles ── */}
      <section
        style={{
          background: "#F5F0E6",
          borderTop: "1px solid rgba(181,46,50,0.18)",
          borderBottom: "1px solid rgba(181,46,50,0.18)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Our process
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#202321]">
              From blank wall to beautiful finish.
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-7 hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(181,46,50,0.35), rgba(198,161,91,0.35), transparent)",
              }}
            />
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative">
                  {/* Alternating red/brass step circles */}
                  <div
                    className="grid h-14 w-14 place-items-center font-display text-lg text-white"
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
                    {p.step}
                  </div>
                  <h3 className="mt-6 font-display text-xl text-[#202321]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MORE SERVICES — Soft bg · Olive headings · Red "Learn more" ── */}
      <section style={{ background: "#EDE7D6" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                More services
              </span>
              <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#202321]">
                Beyond painting — full renovation, handled.
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {moreServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div
                  className="group relative h-full overflow-hidden p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#F5F0E6",
                    boxShadow:
                      "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.65), inset 0 0 0 1px rgba(255,255,255,0.32)",
                    border: "1px solid rgba(198,161,91,0.16)",
                  }}
                >
                  <div
                    className="absolute inset-x-0 -top-px h-px opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #B52E32, transparent)",
                    }}
                  />
                  <div
                    className="grid h-12 w-12 place-items-center text-[#35483A] transition-all group-hover:text-[#B52E32]"
                    style={{
                      borderRadius: "0.875rem",
                      background: "rgba(53,72,58,0.12)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
                    }}
                  >
                    <s.icon size={20} />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-[#202321]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#687967]">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#B52E32]/60 transition-colors group-hover:text-[#B52E32]">
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — Deep Olive bg · Cream heading · Brand Red button ── */}
      <section className="mx-auto max-w-7xl px-6 py-28">
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
            {/* Brass top rule */}
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(198,161,91,0.55), transparent)",
              }}
            />
            {/* Subtle red glow */}
            <div
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "rgba(181,46,50,0.12)" }}
            />
            {/* Brass glow bottom-left */}
            <div
              className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "rgba(198,161,91,0.12)" }}
            />

            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-4xl text-balance md:text-5xl text-[#F5F0E6]">
                  Ready to see your space transformed?
                </h2>
                <p className="mt-4 max-w-xl text-[#687967]">
                  Tell us about your project. We respond within one business day with
                  a clear, honest quote and colour recommendations.
                </p>
              </div>
              {/* Brand Red CTA — hover to brass */}
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
                Start your project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </PageShell>
  );
}
