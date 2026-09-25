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
import hero1 from "@/assets/home-renovation-complete-transformation.webp";
import hero2 from "@/assets/exterior-siding-painting-residential-ontario.webp";
import hero3 from "@/assets/modern-interior-paint-bedroom-kitchener.webp";
import hero4 from "@/assets/kitchen-cabinet-refinishing-before-after.webp";
import port1 from "@/assets/interior-painting-living-room-kitchener.webp";
import port2 from "@/assets/exterior-house-painting-waterloo.webp";
import port3 from "@/assets/kitchen-cabinet-refinishing-before-after.webp";
import port4 from "@/assets/bathroom-renovation-tile-work-cambridge.webp";
import port5 from "@/assets/modern-interior-paint-bedroom-kitchener.webp";
import port6 from "@/assets/commercial-painting-office-space-waterloo.webp";
import port7 from "@/assets/exterior-siding-painting-residential-ontario.webp";
import port8 from "@/assets/hardwood-floor-installation-living-room.webp";
import port9 from "@/assets/kitchen-remodeling-countertop-backsplash.webp";

const heroImages = [hero1, hero2, hero3, hero4];
const portfolioImages = [port1, port2, port3, port4, port5, port6, port7, port8, port9];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { 
        title: "Professional Painting Services Kitchener ON | Residential & Commercial | Sudcan Painting" 
      },
      {
        name: "description",
        content:
          "Professional painting, renovation & flooring services in Kitchener-Waterloo, Ontario. 18+ years experience. Licensed, insured painters. Free quotes. Call (226) 600-6637 today.",
      },
      { name: "keywords", content: "painting services Kitchener, house painters Waterloo, interior painting Ontario, exterior painting Cambridge, cabinet refinishing, home renovation Kitchener, affordable painters near me, licensed painting contractors, residential painters Waterloo, commercial painters Ontario, free painting quote Kitchener" },
      
      // Open Graph
      { property: "og:title", content: "Professional Painting Services Kitchener ON | Sudcan Painting" },
      { property: "og:description", content: "Professional painting, renovation & flooring in Kitchener-Waterloo. 18+ years experience. Licensed painters. Free quotes." },
      { property: "og:image", content: "https://www.sudcanpainting.com/og-image.jpg" },
      { property: "og:url", content: "https://www.sudcanpainting.com/" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Professional Painting Services Kitchener ON | Sudcan Painting" },
      { name: "twitter:description", content: "Professional painting, renovation & flooring in Kitchener-Waterloo. 18+ years experience." },
      { name: "twitter:image", content: "https://www.sudcanpainting.com/og-image.jpg" },
      
      // Canonical
      { rel: "canonical", href: "https://www.sudcanpainting.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://www.sudcanpainting.com/#business",
          "name": "Sudcan Painting",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "156",
            "bestRating": "5",
            "worstRating": "1"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Sarah Mitchell"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "datePublished": "2026-08-12",
              "reviewBody": "Sudcan painted our entire main floor. The prep work was meticulous, the finish is flawless, and they cleaned up every single day. Worth every penny."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "David Chen"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "datePublished": "2026-07-28",
              "reviewBody": "Our kitchen looks brand new! The cabinet refinishing transformed the space. Professional crew, fixed pricing, and finished exactly on schedule."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Jennifer Wong"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "datePublished": "2026-09-05",
              "reviewBody": "Best contractors we've worked with. Power washed, primed, and painted our entire exterior. The quality of work is exceptional and the color looks amazing."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Michael Thompson"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "datePublished": "2026-06-15",
              "reviewBody": "Complete bathroom renovation including tile work and painting. The attention to detail was incredible. They delivered exactly what they promised."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Emily Rodriguez"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "datePublished": "2026-08-30",
              "reviewBody": "Beautiful hardwood installation in our living room and dining room. The craftsmanship is outstanding and they were very respectful of our home."
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Robert Johnson"
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "datePublished": "2026-07-10",
              "reviewBody": "Sudcan handled our whole-home renovation from start to finish. Communication was excellent, work quality was top-notch, and they stuck to the timeline."
            }
          ]
        })
      }
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
              decoding="async"
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
              alt="Professional residential painting and home renovation services in Kitchener-Waterloo - interior and exterior painting, cabinet refinishing"
              width={1920}
              height={1080}
              loading="eager"
              fetchPriority="high"
              decoding="async"
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

      {/* ── TRUST SIGNALS — Warm Cream bg · Certifications · Warranty · Reviews ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Reveal>
            <div
              className="grid gap-8 p-8 md:grid-cols-3 md:p-10"
              style={{
                borderRadius: "1.5rem",
                background: "#EDEADE",
                boxShadow:
                  "0 4px 0 0 rgba(32,35,33,0.09), 0 14px 36px -8px rgba(32,35,33,0.14), inset 0 1px 0 rgba(255,255,255,0.68)",
                border: "1px solid rgba(198,161,91,0.22)",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className="grid h-16 w-16 place-items-center"
                  style={{
                    borderRadius: "1rem",
                    background: "linear-gradient(135deg, #35483A 0%, #202321 100%)",
                    boxShadow:
                      "0 3px 0 0 rgba(32,35,33,0.45), 0 8px 20px -4px rgba(32,35,33,0.30), inset 0 1px 0 rgba(255,255,255,0.11)",
                  }}
                >
                  <ShieldCheck size={28} className="text-[#C6A15B]" />
                </div>
                <h3 className="mt-4 font-display text-lg text-[#202321]">Licensed & Insured</h3>
                <p className="mt-2 text-sm text-[#687967]">
                  Fully licensed, bonded, and insured for your peace of mind.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div
                  className="grid h-16 w-16 place-items-center"
                  style={{
                    borderRadius: "1rem",
                    background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                    boxShadow:
                      "0 3px 0 0 rgba(130,20,23,0.70), 0 8px 20px -4px rgba(130,20,23,0.38), inset 0 1px 0 rgba(255,255,255,0.30)",
                  }}
                >
                  <Award size={28} className="text-white" />
                </div>
                <h3 className="mt-4 font-display text-lg text-[#202321]">2-Year Warranty</h3>
                <p className="mt-2 text-sm text-[#687967]">
                  All workmanship backed by our 2-year warranty guarantee.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div
                  className="grid h-16 w-16 place-items-center"
                  style={{
                    borderRadius: "1rem",
                    background: "linear-gradient(135deg, #C6A15B 0%, #a8843e 100%)",
                    boxShadow:
                      "0 3px 0 0 rgba(160,120,45,0.70), 0 8px 20px -4px rgba(160,120,45,0.38), inset 0 1px 0 rgba(255,255,255,0.32)",
                  }}
                >
                  <Sparkles size={28} className="text-[#202321]" />
                </div>
                <h3 className="mt-4 font-display text-lg text-[#202321]">5★ Rated</h3>
                <p className="mt-2 text-sm text-[#687967]">
                  Average 4.9/5 rating across 150+ verified customer reviews.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CUSTOMER TESTIMONIALS — Warm Cream bg · Real Reviews · 5-Star Rating ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                Customer Reviews
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance text-[#202321]">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg text-[#687967]">
                Over 150+ five-star reviews from satisfied customers across Kitchener-Waterloo.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Sarah Mitchell",
                location: "Kitchener, ON",
                rating: 5,
                date: "2026-08-12",
                project: "Interior Painting",
                review: "Sudcan painted our entire main floor. The prep work was meticulous, the finish is flawless, and they cleaned up every single day. Worth every penny.",
              },
              {
                name: "David Chen",
                location: "Waterloo, ON",
                rating: 5,
                date: "2026-07-28",
                project: "Kitchen Cabinet Refinishing",
                review: "Our kitchen looks brand new! The cabinet refinishing transformed the space. Professional crew, fixed pricing, and finished exactly on schedule.",
              },
              {
                name: "Jennifer Wong",
                location: "Cambridge, ON",
                rating: 5,
                date: "2026-09-05",
                project: "Exterior Painting",
                review: "Best contractors we've worked with. Power washed, primed, and painted our entire exterior. The quality of work is exceptional and the color looks amazing.",
              },
              {
                name: "Michael Thompson",
                location: "Kitchener, ON",
                rating: 5,
                date: "2026-06-15",
                project: "Bathroom Renovation",
                review: "Complete bathroom renovation including tile work and painting. The attention to detail was incredible. They delivered exactly what they promised.",
              },
              {
                name: "Emily Rodriguez",
                location: "Waterloo, ON",
                rating: 5,
                date: "2026-08-30",
                project: "Hardwood Flooring",
                review: "Beautiful hardwood installation in our living room and dining room. The craftsmanship is outstanding and they were very respectful of our home.",
              },
              {
                name: "Robert Johnson",
                location: "Guelph, ON",
                rating: 5,
                date: "2026-07-10",
                project: "Home Renovation",
                review: "Sudcan handled our whole-home renovation from start to finish. Communication was excellent, work quality was top-notch, and they stuck to the timeline.",
              },
            ].map((testimonial, i) => (
              <Reveal key={testimonial.name} delay={i * 0.1}>
                <div
                  className="flex h-full flex-col p-6"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#EDEADE",
                    boxShadow:
                      "0 3px 0 0 rgba(32,35,33,0.08), 0 10px 28px -6px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.60)",
                    border: "1px solid rgba(198,161,91,0.18)",
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-display text-lg text-[#202321]">{testimonial.name}</div>
                      <div className="mt-0.5 text-xs text-[#687967]">{testimonial.location}</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Sparkles key={i} size={14} className="fill-[#B52E32] text-[#B52E32]" />
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex-1">
                    <p className="text-sm leading-relaxed text-[#35483A]">"{testimonial.review}"</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t pt-3" style={{ borderColor: "rgba(104,121,103,0.15)" }}>
                    <span className="text-xs font-medium text-[#C6A15B]">{testimonial.project}</span>
                    <span className="text-xs text-[#687967]">{new Date(testimonial.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.6}>
            <div className="mt-12 text-center">
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
                Get Your Free Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
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
