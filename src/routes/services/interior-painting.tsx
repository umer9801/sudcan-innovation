import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, Sparkles, Clock, Shield, Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { createBreadcrumbSchema } from "@/lib/schema";

export const Route = createFileRoute("/services/interior-painting")({
  head: () => ({
    meta: [
      { 
        title: "Interior House Painters Kitchener | Room Painting Near Me | Sudcan" 
      },
      {
        name: "description",
        content:
          "Top-rated interior painters in Kitchener-Waterloo. 500+ rooms painted. Benjamin Moore premium paint. Same-day quotes. 2-year warranty. Licensed. Call (226) 600-6637.",
      },
      { name: "keywords", content: "interior painters kitchener, house painters near me, room painting waterloo, interior painting contractors kitchener, residential painters near me, best interior painters waterloo, painters kitchener ontario, home painters cambridge, wall painters near me, painting company kitchener, interior house painting cost" },
      
      // Open Graph
      { property: "og:title", content: "Interior Painters Kitchener | 500+ Rooms Painted | 2-Yr Warranty" },
      { property: "og:description", content: "Best interior house painters in Kitchener-Waterloo. Benjamin Moore paint. Licensed. Same-day quotes. (226) 600-6637" },
      { property: "og:url", content: "https://www.sudcanpainting.com/services/interior-painting" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Interior Painting Services Kitchener | Sudcan Painting" },
      { name: "twitter:description", content: "Professional interior painting. Expert prep, premium paint, flawless finish. Free quotes." },
      
      // Canonical
      { rel: "canonical", href: "https://www.sudcanpainting.com/services/interior-painting" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Services", url: "https://www.sudcanpainting.com/services" },
          { name: "Interior Painting", url: "https://www.sudcanpainting.com/services/interior-painting" },
        ])),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Interior Painting",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Sudcan Painting",
            "telephone": "+1-226-600-6637",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "286 Driftwood Dr",
              "addressLocality": "Kitchener",
              "addressRegion": "ON",
              "postalCode": "N2N 1X6",
              "addressCountry": "CA"
            }
          },
          "areaServed": [
            {"@type": "City", "name": "Kitchener"},
            {"@type": "City", "name": "Waterloo"},
            {"@type": "City", "name": "Cambridge"},
            {"@type": "City", "name": "Guelph"}
          ],
          "offers": {
            "@type": "Offer",
            "priceCurrency": "CAD",
            "priceRange": "$$"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "156",
            "bestRating": "5"
          }
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How much does interior painting cost in Kitchener-Waterloo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Interior painting costs vary by room size and prep work required. A single bedroom (12×12) typically costs $400-$800, while a full 2,000 sq ft home interior ranges from $5,000-$10,000. We provide free in-home quotes with transparent, fixed pricing."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to paint a house interior?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Timeline depends on project scope. A single room takes 1-2 days, a full home (5-7 rooms) takes 5-7 business days. Larger homes (3,000+ sq ft) may take 10-14 days. We provide a detailed timeline in your quote."
              }
            },
            {
              "@type": "Question",
              "name": "Do you move furniture before painting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We move furniture away from walls, protect it with drop cloths, and return everything to its original position when done. We can work around heavy furniture like pianos or entertainment centers."
              }
            },
            {
              "@type": "Question",
              "name": "What paint brands do you use for interior painting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We primarily use Benjamin Moore paints - specifically Regal Select for walls and Advance for trim. Benjamin Moore offers superior coverage, durability, and color retention. All paints are low-VOC for indoor air quality."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer a warranty on interior painting?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide a 2-year workmanship warranty on all interior painting. If paint peels, cracks, or fails due to application issues, we'll fix it at no charge. Benjamin Moore paint also comes with their manufacturer's warranty."
              }
            },
            {
              "@type": "Question",
              "name": "Are you licensed and insured in Ontario?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Sudcan Painting is fully licensed, bonded, and insured in Ontario. We carry $2 million liability insurance and WSIB coverage. You'll never have liability for accidents on your property."
              }
            }
          ]
        }),
      },
    ],
  }),
  component: InteriorPaintingPage,
});

const benefits = [
  { icon: CheckCircle2, title: "Premium Benjamin Moore Paint", desc: "Top-tier paints with superior coverage and lasting color" },
  { icon: Shield, title: "Meticulous Surface Prep", desc: "Proper sanding, filling, priming - the foundation of quality" },
  { icon: Sparkles, title: "Zero-Mess Process", desc: "Full furniture protection, daily cleanup, spotless finish" },
  { icon: Clock, title: "On-Time Completion", desc: "Single room: 1-2 days. Full home: 3-7 days. Always on schedule" },
  { icon: Award, title: "2-Year Workmanship Warranty", desc: "If paint peels or fails due to application, we fix it free" },
];

const process = [
  { step: "01", title: "Free In-Home Consultation", desc: "We assess surfaces, discuss colors, answer questions" },
  { step: "02", title: "Detailed Fixed-Price Quote", desc: "Transparent pricing with no hidden fees or surprises" },
  { step: "03", title: "Professional Prep Work", desc: "Patching, sanding, caulking, taping, priming" },
  { step: "04", title: "Expert Paint Application", desc: "Two coats minimum, precision cutting, smooth finish" },
  { step: "05", title: "Final Walk-Through", desc: "Inspect together, touch-ups if needed, furniture back" },
];

const roomsPainted = [
  "Living Rooms & Great Rooms",
  "Bedrooms & Master Suites",
  "Kitchens & Dining Rooms",
  "Bathrooms & Powder Rooms",
  "Hallways & Stairwells",
  "Basements & Rec Rooms",
  "Home Offices & Dens",
  "Ceilings & Trim Work",
];

function InteriorPaintingPage() {
  return (
    <PageShell>
      
      {/* ── HERO ── */}
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Interior Painting Services
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Interior House Painters <span className="italic text-[#C6A15B]">Kitchener-Waterloo</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Professional room painting services near you. We've transformed 500+ homes in Kitchener, Waterloo, Cambridge, and Guelph. Premium Benjamin Moore paints, meticulous prep, 2-year warranty. Licensed and insured since 2008.
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
                      event_label: 'interior_painting_hero',
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
                Free Quote
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

      {/* ── BENEFITS ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Why Homeowners Choose Us for Interior Painting
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div
                  className="p-7 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#F5F0E6",
                    boxShadow:
                      "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.65)",
                    border: "1px solid rgba(198,161,91,0.16)",
                  }}
                >
                  <b.icon size={28} className="text-[#B52E32]" />
                  <h3 className="mt-4 font-display text-xl text-[#202321]">{b.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROOMS WE PAINT ── */}
      <section style={{ background: "#EDE7D6" }}>
        <div className="mx-auto max-w-5xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Rooms We Paint
            </h2>
            <p className="mt-4 text-[#687967]">
              Every space in your home deserves attention. We paint it all:
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {roomsPainted.map((room, i) => (
              <Reveal key={room} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl bg-white/50 px-5 py-4">
                  <CheckCircle2 size={20} className="flex-shrink-0 text-[#B52E32]" />
                  <span className="font-medium text-[#202321]">{room}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ background: "#35483A" }}>
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Our Process
            </span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl text-balance text-[#F5F0E6]">
              How Interior Painting Works with Sudcan
            </h2>
          </Reveal>
          <div className="relative mt-16 grid gap-10 md:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <div className="relative">
                  <div
                    className="grid h-14 w-14 place-items-center font-display text-lg"
                    style={{
                      borderRadius: "9999px",
                      background: i % 2 === 0
                        ? "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)"
                        : "linear-gradient(135deg, #C6A15B 0%, #a8843e 100%)",
                      boxShadow: i % 2 === 0
                        ? "0 3px 0 0 rgba(130,20,23,0.70), 0 8px 20px -4px rgba(130,20,23,0.38)"
                        : "0 3px 0 0 rgba(160,120,45,0.70), 0 8px 20px -4px rgba(160,120,45,0.38)",
                      color: i % 2 === 0 ? "white" : "#202321",
                    }}
                  >
                    {p.step}
                  </div>
                  <h3 className="mt-6 font-display text-lg text-[#F5F0E6]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING GUIDE ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl text-balance text-[#202321]">
              Interior Painting Cost Guide — Kitchener-Waterloo
            </h2>
            <p className="mt-4 text-[#687967]">
              Transparent pricing. No hidden fees. Every quote is fixed once scope is confirmed.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div
              className="mt-10 space-y-4 rounded-2xl p-8"
              style={{
                background: "#FFFDF8",
                boxShadow: "0 4px 0 0 rgba(32,35,33,0.09), 0 14px 36px -8px rgba(32,35,33,0.14)",
                border: "1px solid rgba(198,161,91,0.20)",
              }}
            >
              {[
                { room: "Single Room (12×12)", cost: "$400 – $800", note: "Includes ceiling, walls, trim" },
                { room: "Master Bedroom", cost: "$600 – $1,200", note: "Including closet and ensuite prep" },
                { room: "Full Living Room", cost: "$800 – $1,600", note: "High ceilings add 20-30%" },
                { room: "Full Home Interior (1,500 sq ft)", cost: "$4,500 – $8,000", note: "All rooms, ceilings, trim, 2 coats" },
                { room: "Full Home Interior (2,500 sq ft)", cost: "$7,500 – $14,000", note: "Complete transformation" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 border-b border-[#687967]/10 pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <div className="font-semibold text-[#202321]">{item.room}</div>
                    <div className="text-sm text-[#687967]">{item.note}</div>
                  </div>
                  <div className="font-display text-lg text-[#B52E32] whitespace-nowrap">{item.cost}</div>
                </div>
              ))}
              <p className="mt-6 text-xs text-[#687967]">
                * Prices vary based on surface condition, ceiling height, and prep requirements. Free in-home quotes available.
              </p>
            </div>
          </Reveal>
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
                  Ready to transform your home's interior?
                </h2>
                <p className="mt-4 max-w-xl text-[#687967]">
                  Get a free, no-obligation quote. We respond within 24 hours with transparent pricing.
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

      {/* ── FAQ SECTION ── */}
      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-4xl px-6 py-28">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                Common Questions
              </span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance text-[#202321]">
                Interior Painting FAQs — Kitchener-Waterloo
              </h2>
              <p className="mt-4 text-[#687967]">
                Everything you need to know about our interior house painting services.
              </p>
            </div>
          </Reveal>
          
          <div className="mt-14 space-y-6">
            {[
              {
                q: "How much does interior painting cost in Kitchener-Waterloo?",
                a: "Interior painting costs vary by room size and prep work required. A single bedroom (12×12) typically costs $400-$800, while a full 2,000 sq ft home interior ranges from $5,000-$10,000. We provide free in-home quotes with transparent, fixed pricing. Factors affecting cost include ceiling height, surface condition, number of coats, and trim work."
              },
              {
                q: "How long does it take to paint a house interior?",
                a: "Timeline depends on project scope. A single room takes 1-2 days, a full home (5-7 rooms) takes 5-7 business days. We work efficiently while maintaining quality standards. Larger homes (3,000+ sq ft) may take 10-14 days. We always provide a detailed timeline in your quote and stick to our schedule."
              },
              {
                q: "Do you move furniture before painting?",
                a: "Yes! We move furniture away from walls, protect it with drop cloths, and return everything to its original position when done. We can work around heavy furniture like pianos or entertainment centers. If you have valuable or fragile items, we recommend relocating them beforehand for extra safety."
              },
              {
                q: "What paint brands do you use for interior painting?",
                a: "We primarily use Benjamin Moore paints - specifically Regal Select for walls and Advance for trim and cabinets. Benjamin Moore offers superior coverage, durability, and color retention. We can also work with Sherwin-Williams or your preferred brand if requested. All paints are low-VOC for indoor air quality."
              },
              {
                q: "Do I need to be home while you paint?",
                a: "No, you don't need to stay home. Many clients provide access and go about their day. We're fully insured and bonded. We'll communicate start/end times daily, send progress photos, and do a final walkthrough when you're available. Your home security is our priority."
              },
              {
                q: "How do you protect floors and furniture?",
                a: "We take protection seriously: heavy-duty canvas drop cloths (not plastic sheets that slip), furniture wrapped in protective film, floor runners in high-traffic areas, door jamb protection, and daily cleanup. We treat your home like our own and leave it cleaner than we found it."
              },
              {
                q: "What's included in your surface prep work?",
                a: "Professional prep is what separates a good paint job from a great one. We include: patching nail holes and cracks, sanding rough spots, caulking trim gaps, priming stained or new drywall, cleaning surfaces, taping crisp lines, and removing old peeling paint. Prep typically takes 30-40% of project time."
              },
              {
                q: "Can you paint just one or two rooms?",
                a: "Absolutely! We paint single rooms, entire floors, or whole homes - whatever you need. Single-room projects are perfect for testing colors or refreshing high-impact spaces like living rooms or master bedrooms. No project is too small for our team."
              },
              {
                q: "Do you offer a warranty on interior painting?",
                a: "Yes, we provide a 2-year workmanship warranty on all interior painting. If paint peels, cracks, or fails due to application issues, we'll fix it at no charge. This doesn't cover damage from water leaks, impacts, or normal wear. Benjamin Moore paint also comes with their manufacturer's warranty."
              },
              {
                q: "Are you licensed and insured in Ontario?",
                a: "Yes, Sudcan Painting is fully licensed, bonded, and insured in Ontario. We carry $2 million liability insurance and WSIB coverage for all crew members. You'll never have liability for accidents on your property. We can provide proof of insurance before starting work."
              },
              {
                q: "What areas in Kitchener-Waterloo do you serve?",
                a: "We serve all of Kitchener, Waterloo, Cambridge, and Guelph, including surrounding areas like New Hamburg, Elmira, and Baden. Our service radius is approximately 50km from Kitchener. If you're unsure whether we cover your location, call us at (226) 600-6637 - we'll let you know right away."
              },
              {
                q: "How soon can you start my interior painting project?",
                a: "Typical lead time is 1-3 weeks depending on season. Spring and summer (April-August) book faster. Fall and winter often have shorter wait times. Once we provide your quote and you approve, we'll schedule a start date. Rush projects may be available - contact us to discuss your timeline."
              }
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className="p-6"
                  style={{
                    borderRadius: "1rem",
                    background: "#F5F0E6",
                    boxShadow: "0 2px 0 0 rgba(32,35,33,0.06), 0 6px 16px -4px rgba(32,35,33,0.10)",
                    border: "1px solid rgba(198,161,91,0.12)",
                  }}
                >
                  <h3 className="font-display text-lg text-[#202321]">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#687967]">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.6}>
            <div className="mt-12 text-center">
              <p className="text-sm text-[#687967] mb-4">Still have questions? We're here to help.</p>
              <a
                href="tel:+12266006637"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                <Phone size={16} />
                Call (226) 600-6637
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                Related Services
              </span>
              <h2 className="mt-3 font-display text-4xl text-[#202321]">
                Complete Your Project
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { title: "Exterior Painting", desc: "Weather-resistant coatings for your home's exterior", link: "/services/exterior-painting" },
              { title: "Cabinet Refinishing", desc: "Transform your kitchen with professional cabinet painting", link: "/services/cabinet-refinishing" },
              { title: "Home Renovation", desc: "Complete home transformation services", link: "/services/home-renovation" },
            ].map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <Link
                  to={service.link}
                  className="group block h-full p-6 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#EDEADE",
                    boxShadow: "0 3px 0 0 rgba(32,35,33,0.08), 0 10px 28px -6px rgba(32,35,33,0.12)",
                    border: "1px solid rgba(198,161,91,0.18)",
                  }}
                >
                  <h3 className="font-display text-xl text-[#202321] group-hover:text-[#B52E32] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#687967]">{service.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B52E32]">
                    Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </PageShell>
  );
}
