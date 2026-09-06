import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, BadgeCheck, HardHat, Heart, Leaf, ShieldCheck } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import craftsman from "@/assets/craftsman.jpg";
import ctaBg from "@/assets/11.jpeg";
import work1 from "@/assets/16.jpeg";
import work2 from "@/assets/17.jpeg";
import work3 from "@/assets/18.jpeg";
import work4 from "@/assets/19.jpeg";
import work5 from "@/assets/20.jpeg";
import work6 from "@/assets/21.jpeg";

const ourWorkImages = [work1, work2, work3, work4, work5, work6];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sudcan Innovation Inc" },
      {
        name: "description",
        content:
          "A team of skilled craftsmen building beautiful, durable spaces. Learn about our story, mission, and certifications.",
      },
      { property: "og:title", content: "About Sudcan Innovation Inc" },
      {
        property: "og:description",
        content: "Skilled craftsmen, premium materials, customer-first renovation.",
      },
      { property: "og:image", content: craftsman },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Heart,       t: "Customer first",       d: "We treat every space like our own — your trust is the foundation." },
  { icon: HardHat,     t: "Skilled craftsmanship", d: "Trained installers and finishers with years of in-field experience." },
  { icon: ShieldCheck, t: "Built to last",         d: "Premium materials and proven techniques for long-term performance." },
  { icon: Leaf,        t: "Responsible sourcing",  d: "Sustainable suppliers and clean, low-waste job sites." },
];

function OurWorkCarousel() {
  const strip = [...ourWorkImages, ...ourWorkImages];
  return (
    <div className="overflow-hidden w-full">
      <div className="flex gap-2 sm:gap-4 animate-marquee">
        {strip.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-44 h-36 sm:w-80 sm:h-56 overflow-hidden"
            style={{
              borderRadius: "1.25rem",
              boxShadow:
                "0 3px 0 0 rgba(32,35,33,0.16), 0 8px 24px -4px rgba(32,35,33,0.18), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            <img
              src={src}
              alt={`Our work ${(i % ourWorkImages.length) + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <PageShell>

      {/* ── HERO — Warm Cream bg · Olive heading · Brass italic ── */}
      <section className="relative pt-40" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 pb-20">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              About us
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Eighteen years of building beautiful,{" "}
              <span className="italic text-[#C6A15B]">durable</span> spaces.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Sudcan Innovation Inc is a Canada-based team of painters, renovators, and
              project managers obsessed with clean execution and lasting results.
            </p>
          </Reveal>
          <div
            className="mt-8 h-px w-20"
            style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
          />
        </div>
      </section>

      {/* ── IMAGE + STORY — Cream bg · Olive text · Clay stat cards ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28" style={{ background: "#F5F0E6" }}>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "1.5rem",
                boxShadow:
                  "0 6px 0 0 rgba(32,35,33,0.18), 0 20px 50px -12px rgba(32,35,33,0.26), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <img
                src={craftsman}
                alt="Craftsman installing hardwood flooring"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
              {/* Floating stat badge */}
              <div
                className="absolute bottom-6 left-6 px-5 py-4"
                style={{
                  borderRadius: "1rem",
                  background: "rgba(245,240,230,0.88)",
                  backdropFilter: "blur(14px)",
                  border: "1px solid rgba(198,161,91,0.35)",
                  boxShadow:
                    "0 3px 0 0 rgba(32,35,33,0.12), 0 8px 24px -4px rgba(32,35,33,0.16), inset 0 1px 0 rgba(255,255,255,0.60)",
                }}
              >
                <div className="font-display text-3xl text-[#35483A]">
                  <Counter to={18} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[#687967]">
                  Years in the trade
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                Our story
              </span>
              <div
                className="mt-2 mb-3 h-px w-8"
                style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
              />
              <h2 className="font-display text-4xl text-balance text-[#202321] md:text-5xl">
                Started by craftsmen, run by craftsmen.
              </h2>
              <div className="mt-6 space-y-4 text-[#687967]">
                <p>
                  Sudcan was founded on a simple belief: a renovation should be the most
                  satisfying purchase a homeowner ever makes — not the most stressful.
                </p>
                <p>
                  Today, our small, senior team handles a curated number of projects each
                  year. We design with intent, install with care, and never hand off a
                  space we wouldn't proudly live in ourselves.
                </p>
              </div>

              {/* Clay stat mini-cards — red numbers */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { v: 540, s: "+", l: "Projects" },
                  { v: 99,  s: "%", l: "Satisfaction" },
                  { v: 25,  s: "",  l: "Craftsmen" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="p-4"
                    style={{
                      borderRadius: "1rem",
                      background: "#EDEADE",
                      boxShadow:
                        "0 2px 0 0 rgba(32,35,33,0.09), 0 6px 18px -4px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.62)",
                      border: "1px solid rgba(181,46,50,0.18)",
                    }}
                  >
                    <div className="font-display text-2xl text-[#B52E32]">
                      <Counter to={s.v} suffix={s.s} />
                    </div>
                    <div className="text-xs uppercase tracking-[0.15em] text-[#687967]">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION — Deep Olive bg · Red eyebrow · Cream text · Clay-dark value cards ── */}
      <section
        style={{
          background: "#35483A",
          borderTop: "1px solid rgba(181,46,50,0.25)",
          borderBottom: "1px solid rgba(181,46,50,0.25)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                Our mission
              </span>
              <h2 className="mt-3 font-display text-4xl text-balance text-[#F5F0E6] md:text-5xl">
                Better spaces, honestly built.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-[#687967]">
                We're here to raise the bar for what a renovation can feel like —
                transparent, calm, and finished to a standard that holds up for decades.
                Every project is led by a senior craftsman from first measure to final reveal.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div
                  className="h-full p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#2C3C30",
                    boxShadow:
                      "0 4px 0 0 rgba(10,14,11,0.55), 0 12px 32px -6px rgba(10,14,11,0.42), inset 0 1px 0 rgba(255,255,255,0.09)",
                    border: "1px solid rgba(181,46,50,0.20)",
                  }}
                >
                  {/* Alternating red/brass icon containers */}
                  <div
                    className="grid h-12 w-12 place-items-center"
                    style={{
                      borderRadius: "0.875rem",
                      background: i % 2 === 0 ? "rgba(181,46,50,0.18)" : "rgba(198,161,91,0.14)",
                      border: `1px solid ${i % 2 === 0 ? "rgba(181,46,50,0.30)" : "rgba(198,161,91,0.24)"}`,
                      color: i % 2 === 0 ? "#B52E32" : "#C6A15B",
                    }}
                  >
                    <v.icon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-[#F5F0E6]">{v.t}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR WORK — Ivory bg · Red label · Olive heading · Brass + Red line ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Our work
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Our Work
            </h2>
            <div className="mt-4 flex gap-1">
              <div className="h-px w-8" style={{ background: "#B52E32" }} />
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }} />
            </div>
          </Reveal>
          <div className="mt-14">
            <OurWorkCarousel />
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS — Soft Cream bg · Olive text · Brass icons ── */}
      <section style={{ background: "#EDE7D6" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                Certifications &amp; trust
              </span>
              <div
                className="mt-2 mb-3 h-px w-8"
                style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
              />
              <h2 className="font-display text-4xl text-balance text-[#202321] md:text-5xl">
                Licensed, insured, and recognized.
              </h2>
              <p className="mt-6 text-[#687967]">
                We hold full liability and workers' compensation coverage, and partner
                only with vetted premium paint and material suppliers across Canada.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Licensed general contractor — Canada",
                  "Fully insured — liability & workers' comp",
                  "Certified Benjamin Moore & Sherwin-Williams applicator",
                  "2-year workmanship warranty on all projects",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-[#687967]">
                    <BadgeCheck size={18} className="mt-0.5 flex-shrink-0 text-[#B52E32]" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[Award, ShieldCheck, BadgeCheck, HardHat].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex aspect-square flex-col items-center justify-center text-center transition-all hover:-translate-y-1"
                    style={{
                      borderRadius: "1.25rem",
                      background: "#F5F0E6",
                      boxShadow:
                        "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.62)",
                      border: "1px solid rgba(198,161,91,0.20)",
                    }}
                  >
                    <Icon size={36} className="text-[#C6A15B]" />
                    <div className="mt-3 text-xs uppercase tracking-[0.2em] text-[#687967]">
                      {["RBQ", "Insured", "Certified", "Trained"][i]}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA — Olive image overlay · Cream text · Red button ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div
            className="relative overflow-hidden px-8 py-20 md:px-16"
            style={{
              borderRadius: "1.5rem",
              backgroundImage: `linear-gradient(135deg, rgba(32,35,33,0.90) 0%, rgba(53,72,58,0.82) 100%), url(${ctaBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow:
                "0 8px 0 0 rgba(32,35,33,0.32), 0 24px 60px -12px rgba(32,35,33,0.48), inset 0 1px 0 rgba(255,255,255,0.07)",
              border: "1px solid rgba(198,161,91,0.20)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(198,161,91,0.60), transparent)",
              }}
            />
            <div
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl"
              style={{ background: "rgba(181,46,50,0.12)" }}
            />
            <div className="relative max-w-2xl text-[#F5F0E6]">
              <h2 className="font-display text-4xl text-balance md:text-5xl">
                Let's build something you'll love for decades.
              </h2>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

    </PageShell>
  );
}
