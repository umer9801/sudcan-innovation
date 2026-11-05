import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

const services = [
  { name: "Interior Painting", link: "/services/interior-painting" },
  { name: "Exterior Painting", link: "/services/exterior-painting" },
  { name: "Cabinet Refinishing", link: "/services/cabinet-refinishing" },
  { name: "Kitchen Renovation", link: "/services/kitchen-remodeling" },
  { name: "Bathroom Renovation", link: "/services/bathroom-renovation" },
  { name: "Hardwood Flooring", link: "/services/hardwood-flooring" },
];

export default function CambridgePage() {
  return (
    <PageShell>
      <section className="pt-40 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              <MapPin size={14} />
              <span>Serving Cambridge, Ontario</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Professional Painters in <span className="italic text-[#C6A15B]">Cambridge</span>, ON
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Cambridge's trusted painting and renovation experts. From downtown condos to Forest Heights homes, we've transformed 350+ properties across every Cambridge neighborhood.
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
            <h2 className="font-display text-3xl text-[#202321] md:text-4xl">Our Services in Cambridge</h2>
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
    </PageShell>
  );
}
