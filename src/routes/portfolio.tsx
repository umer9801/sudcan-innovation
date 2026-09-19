import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Phone } from "lucide-react";

// Import portfolio images
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";
import img7 from "@/assets/7.jpeg";
import img8 from "@/assets/8.jpeg";
import img9 from "@/assets/9.jpeg";
import img10 from "@/assets/10.jpeg";
import img11 from "@/assets/11.jpeg";
import img12 from "@/assets/12.jpeg";
import img13 from "@/assets/13.jpeg";
import img14 from "@/assets/14.jpeg";
import img15 from "@/assets/15.jpeg";
import img16 from "@/assets/16.jpeg";
import img17 from "@/assets/17.jpeg";
import img18 from "@/assets/18.jpeg";
import img19 from "@/assets/19.jpeg";
import img20 from "@/assets/20.jpeg";
import img21 from "@/assets/21.jpeg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Before & After Photos | Painting & Renovation Gallery - Sudcan Painting" },
      {
        name: "description",
        content:
          "View our completed painting & renovation projects in Kitchener-Waterloo. Before & after photos of interior painting, exterior painting, cabinet refinishing, flooring & kitchen/bathroom renovations.",
      },
      { name: "keywords", content: "painting portfolio Kitchener, before after photos, renovation gallery, completed projects Waterloo, painting examples" },
      
      // Open Graph
      { property: "og:title", content: "Portfolio - Sudcan Painting Projects | Kitchener ON" },
      { property: "og:description", content: "See our completed painting & renovation work. Before & after transformations across Kitchener-Waterloo." },
      { property: "og:url", content: "https://www.sudcanpainting.com/portfolio" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.sudcanpainting.com/assets/1.jpeg" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Portfolio | Sudcan Painting Projects" },
      { name: "twitter:description", content: "Before & after photos of our painting & renovation work." },
      { name: "twitter:image", content: "https://www.sudcanpainting.com/assets/1.jpeg" },
      
      // Canonical
      { rel: "canonical", href: "https://www.sudcanpainting.com/portfolio" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Sudcan Painting Portfolio - Completed Projects",
          "description": "Professional painting and renovation projects completed in Kitchener-Waterloo region. Before and after transformations.",
          "image": [
            "https://www.sudcanpainting.com/assets/1.jpeg",
            "https://www.sudcanpainting.com/assets/2.jpeg",
            "https://www.sudcanpainting.com/assets/3.jpeg",
            "https://www.sudcanpainting.com/assets/4.jpeg",
            "https://www.sudcanpainting.com/assets/5.jpeg",
            "https://www.sudcanpainting.com/assets/6.jpeg",
            "https://www.sudcanpainting.com/assets/7.jpeg",
            "https://www.sudcanpainting.com/assets/8.jpeg",
            "https://www.sudcanpainting.com/assets/9.jpeg",
            "https://www.sudcanpainting.com/assets/10.jpeg",
          ],
          "author": {
            "@type": "LocalBusiness",
            "name": "Sudcan Painting",
            "telephone": "+1-226-600-6637",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 King St W",
              "addressLocality": "Kitchener",
              "addressRegion": "ON",
              "postalCode": "N2G 1A5",
              "addressCountry": "CA"
            }
          }
        })
      }
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { id: 1, img: img1, title: "Modern Kitchen Transformation", category: "Kitchen Renovation", location: "Kitchener" },
  { id: 2, img: img2, title: "Contemporary Bathroom Remodel", category: "Bathroom Renovation", location: "Waterloo" },
  { id: 3, img: img3, title: "Luxury Living Room Repaint", category: "Interior Painting", location: "Cambridge" },
  { id: 4, img: img4, title: "Exterior House Refresh", category: "Exterior Painting", location: "Guelph" },
  { id: 5, img: img5, title: "Cabinet Refinishing Project", category: "Cabinet Refinishing", location: "Kitchener" },
  { id: 6, img: img6, title: "Hardwood Floor Installation", category: "Hardwood Flooring", location: "Waterloo" },
  { id: 7, img: img7, title: "Master Bedroom Makeover", category: "Interior Painting", location: "Kitchener" },
  { id: 8, img: img8, title: "Commercial Office Space", category: "Commercial Painting", location: "Waterloo" },
  { id: 9, img: img9, title: "Open Concept Living Room", category: "Home Renovation", location: "Cambridge" },
  { id: 10, img: img10, title: "Luxury Vinyl Flooring", category: "Vinyl Flooring", location: "Kitchener" },
  { id: 11, img: img11, title: "Tile Installation - Backsplash", category: "Tile Installation", location: "Waterloo" },
  { id: 12, img: img12, title: "Heritage Home Exterior", category: "Exterior Painting", location: "Guelph" },
  { id: 13, img: img13, title: "Basement Renovation", category: "Home Renovation", location: "Kitchener" },
  { id: 14, img: img14, title: "Modern Office Interior", category: "Interior Painting", location: "Waterloo" },
  { id: 15, img: img15, title: "Kitchen Cabinet Update", category: "Cabinet Refinishing", location: "Cambridge" },
  { id: 16, img: img16, title: "Spa-Style Bathroom", category: "Bathroom Renovation", location: "Kitchener" },
  { id: 17, img: img17, title: "Contemporary Exterior", category: "Exterior Painting", location: "Waterloo" },
  { id: 18, img: img18, title: "Elegant Dining Room", category: "Interior Painting", location: "Guelph" },
  { id: 19, img: img19, title: "Hardwood Staircase", category: "Hardwood Flooring", location: "Kitchener" },
  { id: 20, img: img20, title: "Full Home Renovation", category: "Home Renovation", location: "Waterloo" },
  { id: 21, img: img21, title: "Modern Kitchen Island", category: "Kitchen Renovation", location: "Cambridge" },
];

const categories = [
  "All Projects",
  "Interior Painting",
  "Exterior Painting",
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Cabinet Refinishing",
  "Hardwood Flooring",
  "Vinyl Flooring",
  "Tile Installation",
  "Home Renovation",
];

function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  
  const filteredProjects = activeCategory === "All Projects" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-40 pb-16" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Our Work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Projects that speak for{" "}
              <span className="italic text-[#C6A15B]">themselves</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Every project is a partnership. See the transformations we've delivered across Kitchener-Waterloo — spaces that are functional, beautiful, and built to last.
            </p>
          </Reveal>
          <div
            className="mt-8 h-px w-20"
            style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
          />
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="pb-12" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 text-sm font-medium transition-all hover:-translate-y-0.5"
                  style={{
                    borderRadius: "9999px",
                    background: activeCategory === cat 
                      ? "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)"
                      : "#EDEADE",
                    color: activeCategory === cat ? "#fff" : "#202321",
                    boxShadow: activeCategory === cat
                      ? "0 3px 0 0 rgba(130,20,23,0.75), 0 6px 16px -4px rgba(130,20,23,0.42)"
                      : "0 2px 0 0 rgba(32,35,33,0.09), 0 4px 12px -4px rgba(32,35,33,0.12)",
                    border: activeCategory === cat ? "none" : "1px solid rgba(198,161,91,0.22)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="pb-28" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.05}>
                <div
                  className="group relative overflow-hidden"
                  style={{
                    borderRadius: "1rem",
                    boxShadow:
                      "0 4px 0 0 rgba(32,35,33,0.09), 0 12px 28px -8px rgba(32,35,33,0.18)",
                    border: "1px solid rgba(198,161,91,0.22)",
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.img}
                      alt={`${project.title} - ${project.category} in ${project.location}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(32,35,33,0.92) 0%, transparent 100%)",
                    }}
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B]">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/80">{project.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div
              className="grid gap-8 p-10 sm:grid-cols-3 md:gap-12 md:p-16"
              style={{
                borderRadius: "1.5rem",
                background: "linear-gradient(135deg, #35483A 0%, #202321 100%)",
                boxShadow:
                  "0 8px 0 0 rgba(32,35,33,0.32), 0 24px 60px -12px rgba(32,35,33,0.48), inset 0 1px 0 rgba(255,255,255,0.07)",
                border: "1px solid rgba(198,161,91,0.20)",
              }}
            >
              <div className="text-center">
                <div className="font-display text-5xl text-[#C6A15B]">500+</div>
                <div className="mt-2 text-sm text-[#F5F0E6]/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="font-display text-5xl text-[#C6A15B]">98%</div>
                <div className="mt-2 text-sm text-[#F5F0E6]/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="font-display text-5xl text-[#C6A15B]">5★</div>
                <div className="mt-2 text-sm text-[#F5F0E6]/80">Average Rating</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div
            className="relative overflow-hidden px-8 py-16 md:px-16"
            style={{
              borderRadius: "1.5rem",
              background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
              boxShadow:
                "0 8px 0 0 rgba(130,20,23,0.75), 0 24px 60px -12px rgba(130,20,23,0.48), inset 0 1px 0 rgba(255,255,255,0.28)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent)",
              }}
            />
            <h2 className="relative max-w-2xl font-display text-4xl text-balance text-white md:text-5xl">
              Ready to start your transformation?
            </h2>
            <p className="relative mt-4 max-w-xl text-white/90">
              Get a free, detailed quote for your painting or renovation project. No pressure, just honest pricing and expert advice.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-4">
              <a
                href="/quote"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[#202321] transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "#F5F0E6",
                  boxShadow:
                    "0 3px 0 0 rgba(32,35,33,0.18), 0 10px 28px -6px rgba(32,35,33,0.22), inset 0 1px 0 rgba(255,255,255,0.68)",
                }}
              >
                Get Free Quote
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+12266006637"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'phone_call_click', {
                      event_category: 'engagement',
                      event_label: 'portfolio_cta',
                      value: 1
                    });
                  }
                }}
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  boxShadow:
                    "0 3px 0 0 rgba(0,0,0,0.12), 0 10px 28px -6px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                <Phone size={16} />
                (226) 600-6637
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
