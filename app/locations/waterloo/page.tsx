import Link from "next/link";
import { ArrowRight, Phone, MapPin, Star, CheckCircle2, Home, Award } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painters Waterloo ON | House Painting Contractors Near Me",
  description: "Waterloo's top-rated painting company. 280+ homes painted in Uptown, Beechwood, Lakeshore. Interior/exterior painting. Licensed. Free quote (226) 600-6637.",
  keywords: ["painters waterloo", "house painters waterloo ontario", "painting contractors waterloo", "uptown waterloo painters"],
};

const services = [
  { name: "Interior Painting", link: "/services/interior-painting" },
  { name: "Exterior Painting", link: "/services/exterior-painting" },
  { name: "Cabinet Refinishing", link: "/services/cabinet-refinishing" },
  { name: "Kitchen Renovation", link: "/services/kitchen-remodeling" },
  { name: "Bathroom Renovation", link: "/services/bathroom-renovation" },
  { name: "Hardwood Flooring", link: "/services/hardwood-flooring" },
];

const neighborhoods = [
  "Uptown Waterloo", "Beechwood", "Lakeshore", "Westvale",
  "Eastbridge", "Laurelwood", "Clair Hills", "Westmount",
  "Sunnydale", "Northdale", "Columbia", "University District"
];

const stats = [
  { number: "280+", label: "Homes Painted" },
  { number: "12+", label: "Years Experience" },
  { number: "4.9/5", label: "Average Rating" },
  { number: "100%", label: "Satisfaction Rate" },
];

const whyChoose = [
  { icon: Award, title: "Licensed & Insured", desc: "Fully licensed painters with $2M liability coverage" },
  { icon: CheckCircle2, title: "2-Year Warranty", desc: "Industry-leading warranty on all painting work" },
  { icon: Home, title: "Local Experts", desc: "Serving Waterloo homeowners since 2013" },
  { icon: Star, title: "Top-Rated", desc: "4.9/5 stars from 150+ verified customer reviews" },
];

export default function WaterlooPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              <MapPin size={14} />
              <span>Serving Waterloo, Ontario</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Professional Painters in <span className="italic text-[#C6A15B]">Waterloo</span>, ON
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Waterloo's most trusted painting and renovation company. From Uptown condos to Beechwood estates, we've transformed 280+ properties across every neighborhood.
            </p>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+12266006637" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5" style={{ borderRadius: "9999px", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)", boxShadow: "0 3px 0 0 rgba(130,20,23,0.75)" }}>
              <Phone size={16} /> Call Now: (226) 600-6637
            </a>
            <Link href="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[#202321] transition-all hover:-translate-y-0.5" style={{ borderRadius: "9999px", background: "#EDEADE", border: "1px solid rgba(198,161,91,0.22)" }}>
              Get Free Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#FFFDF8" }}>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <h2 className="font-display text-3xl text-[#202321] md:text-4xl">Our Services in Waterloo</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.name} delay={i * 0.05}>
                <Link href={service.link} className="flex items-center justify-between p-5 transition-all hover:-translate-y-0.5" style={{ borderRadius: "1rem", background: "#F5F0E6", border: "1px solid rgba(198,161,91,0.18)" }}>
                  <span className="font-display text-[#202321]">{service.name}</span>
                  <ArrowRight size={16} className="text-[#B52E32]" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: "#35483A" }} className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl text-[#C6A15B] md:text-5xl">{stat.number}</div>
                  <div className="mt-2 text-sm text-[#687967]">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: "#F5F0E6" }} className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl text-[#202321] md:text-4xl">Why Waterloo Homeowners Choose Us</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-[rgba(198,161,91,0.22)] bg-[#FFFDF8] p-6">
                  <item.icon size={32} className="text-[#B52E32]" />
                  <h3 className="mt-4 font-display text-xl text-[#202321]">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#687967]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section style={{ background: "#FFFDF8" }} className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl text-[#202321] md:text-4xl">Proudly Serving All Waterloo Neighborhoods</h2>
            <p className="mt-4 max-w-2xl text-lg text-[#687967]">
              From Uptown Waterloo's vibrant core to quiet Beechwood streets, we've painted homes in every Waterloo neighborhood.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {neighborhoods.map((area, i) => (
              <Reveal key={area} delay={i * 0.03}>
                <div className="rounded-lg border border-[rgba(198,161,91,0.15)] bg-[#F5F0E6] px-4 py-3 text-center">
                  <span className="text-sm text-[#202321]">{area}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "#F5F0E6" }} className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl text-[#202321] md:text-4xl">What Waterloo Homeowners Say</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "David K.",
                location: "Uptown Waterloo",
                text: "Sudcan transformed our century home. They respected the original character while giving it a fresh modern look. Couldn't be happier!",
                rating: 5,
              },
              {
                name: "Amanda R.",
                location: "Beechwood",
                text: "Professional from start to finish. They painted our exterior during a tight timeline and the results are stunning. Worth every penny.",
                rating: 5,
              },
              {
                name: "Robert T.",
                location: "Lakeshore",
                text: "Third time using Sudcan - kitchen cabinets, living room, and now our master bedroom. Always excellent work and great communication.",
                rating: 5,
              },
            ].map((review, i) => (
              <Reveal key={review.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-[rgba(198,161,91,0.22)] bg-[#FFFDF8] p-6">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#C6A15B" className="text-[#C6A15B]" />
                    ))}
                  </div>
                  <p className="mt-4 text-[#202321]">"{review.text}"</p>
                  <div className="mt-4 text-sm">
                    <div className="font-medium text-[#202321]">{review.name}</div>
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
            <h2 className="font-display text-4xl text-[#F5F0E6] md:text-5xl">
              Ready to Transform Your Waterloo Home?
            </h2>
            <p className="mt-4 text-lg text-[#687967]">
              Get a free, no-obligation quote from Waterloo's top-rated painters
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="tel:+12266006637"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow: "0 3px 0 0 rgba(130,20,23,0.75)",
                }}
              >
                <Phone size={18} /> Call (226) 600-6637
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#202321] transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "#C6A15B",
                  boxShadow: "0 3px 0 0 rgba(160,120,45,0.75)",
                }}
              >
                Get Free Quote <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
