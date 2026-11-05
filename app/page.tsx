"use client";

import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
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
  Star,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

// Metadata for homepage is in layout.tsx

const heroImages = [
  "/assets/home-renovation-complete-transformation.webp",
  "/assets/exterior-siding-painting-residential-ontario.webp",
  "/assets/modern-interior-paint-bedroom-kitchener.webp",
  "/assets/kitchen-cabinet-refinishing-before-after.webp"
];

const portfolioImages = [
  "/assets/interior-painting-living-room-kitchener.webp",
  "/assets/exterior-house-painting-waterloo.webp",
  "/assets/kitchen-cabinet-refinishing-before-after.webp",
  "/assets/bathroom-renovation-tile-work-cambridge.webp",
  "/assets/modern-interior-paint-bedroom-kitchener.webp",
  "/assets/commercial-painting-office-space-waterloo.webp",
  "/assets/exterior-siding-painting-residential-ontario.webp",
  "/assets/hardwood-floor-installation-living-room.webp",
  "/assets/kitchen-remodeling-countertop-backsplash.webp"
];

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
  { value: "4.9★", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Rate" },
];

const whyChooseUs = [
  { icon: Award, title: "Licensed & Insured", desc: "Fully licensed with $2M liability coverage. WSIB compliant, bonded for your peace of mind." },
  { icon: ShieldCheck, title: "2-Year Warranty", desc: "Industry-leading warranty. If it peels, chips, or fades, we fix it free." },
  { icon: CheckCircle2, title: "Zero-Mess Promise", desc: "Complete protection, daily cleanup, final deep clean. Your home stays spotless." },
  { icon: Clock, title: "On-Time Guarantee", desc: "We start when promised. Single room: 1-2 days. Full home: 3-7 days." },
];

const ourProcess = [
  { step: "1", title: "Free Consultation", desc: "We visit your home, assess the project, provide detailed written quote with no hidden fees." },
  { step: "2", title: "Color Selection", desc: "Work with our color consultants. We provide samples and expert guidance." },
  { step: "3", title: "Surface Prep", desc: "Proper prep is 80% of quality. We fill, sand, prime, and protect meticulously." },
  { step: "4", title: "Expert Painting", desc: "Two coats minimum of premium Benjamin Moore or Sherwin-Williams paint." },
  { step: "5", title: "Final Walkthrough", desc: "We inspect every inch with you, ensuring 100% satisfaction." },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "Forest Heights, Kitchener",
    text: "Sudcan painted our entire house - inside and out. The attention to detail was incredible. They treated our home like it was their own.",
    rating: 5,
  },
  {
    name: "Michael Peterson",
    location: "Uptown Waterloo",
    text: "Best painting contractors in Waterloo! Finished our condo in 3 days, on budget, and it looks amazing. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jennifer Lee",
    location: "Preston, Cambridge",
    text: "We've used Sudcan twice - kitchen cabinets and exterior. Both times exceeded expectations. Our neighbors asked for their number!",
    rating: 5,
  },
];

function PortfolioCarousel() {
  const portfolioAltTexts = [
    "Interior painting - modern living room with neutral gray walls in Kitchener home",
    "Exterior house painting - residential home with fresh siding paint in Waterloo Ontario",
    "Kitchen cabinet refinishing - before and after transformation with white finish",
    "Bathroom renovation - custom tile work and modern fixtures in Cambridge",
    "Bedroom interior painting - modern design with neutral paint colors in Kitchener",
    "Commercial office space painting - professional contractors in Waterloo",
    "Exterior residential painting - siding and trim work in Ontario",
    "Hardwood flooring installation - natural oak floor in living room",
    "Kitchen remodeling - countertop and backsplash installation completed project",
  ];
  
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
              alt={portfolioAltTexts[i % portfolioImages.length]}
              width={1280}
              height={960}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
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
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.img
              key={heroIndex}
              src={heroImages[heroIndex]}
              alt="Professional residential painting and home renovation services in Kitchener-Waterloo"
              width={1920}
              height={1080}
              loading="eager"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
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
              Kitchener's <span className="italic" style={{ color: "#B52E32" }}>trusted painters</span>{" "}
              since 2008
            </h1>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-4 flex gap-1">
              <div className="h-px w-8" style={{ background: "#B52E32" }} />
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }} />
            </div>
            <p className="mt-5 max-w-xl text-lg text-[#F5F0E6]/80">
              House painters serving Kitchener-Waterloo. Interior & exterior painting, cabinet refinishing. 
              Licensed, insured, 2-year warranty. Free in-home quote.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/quote"
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

              <Link
                href="/services"
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

      {/* STATS */}
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

      {/* PORTFOLIO */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Our work
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Transforming spaces across Kitchener-Waterloo
            </h2>
          </Reveal>
          <PortfolioCarousel />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: "#F5F0E6" }} className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">Why Sudcan</span>
            <h2 className="mt-3 font-display text-4xl text-balance text-[#202321] md:text-5xl">
              Why homeowners choose us
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-[rgba(198,161,91,0.22)] bg-[#FFFDF8] p-6 transition-all hover:-translate-y-1">
                  <item.icon size={32} className="text-[#B52E32]" />
                  <h3 className="mt-4 font-display text-xl text-[#202321]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section style={{ background: "#FFFDF8" }} className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">How we work</span>
            <h2 className="mt-3 font-display text-4xl text-balance text-[#202321] md:text-5xl">
              Our proven 5-step process
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {ourProcess.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #C6A15B 0%, #a8843e 100%)" }}>
                    <span className="font-display text-2xl text-[#202321]">{item.step}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg text-[#202321]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#35483A" }} className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B]">Client reviews</span>
            <h2 className="mt-3 font-display text-4xl text-balance text-[#F5F0E6] md:text-5xl">
              What our customers say
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review, i) => (
              <Reveal key={review.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-[rgba(198,161,91,0.22)] bg-[#2C3C30] p-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-[#C6A15B]">★</span>
                    ))}
                  </div>
                  <p className="mt-4 text-[#F5F0E6]">"{review.text}"</p>
                  <div className="mt-4 text-sm">
                    <div className="font-medium text-[#F5F0E6]">{review.name}</div>
                    <div className="text-[#687967]">{review.location}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#35483A" }} className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-[#F5F0E6]">
              Ready to transform your space?
            </h2>
            <p className="mt-4 text-lg text-[#687967]">
              Get a free, no-obligation quote today.
            </p>
            <Link
              href="/quote"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white transition-all hover:-translate-y-0.5"
              style={{
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                boxShadow:
                  "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
              }}
            >
              Get Your Free Quote
              <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
