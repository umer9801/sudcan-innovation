import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { createBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/cabinet-refinishing-vs-replace")({
  head: () => ({
    meta: [
      { title: "Cabinet Refinishing vs Replace: Cost Comparison 2026 | Sudcan Painting" },
      { name: "description", content: "Cabinet refinishing vs replacement cost guide. When to refinish, when to replace, and how to save thousands on your kitchen renovation in Kitchener-Waterloo." },
      { name: "keywords", content: "cabinet refinishing cost, replace cabinets cost, kitchen cabinet options Kitchener, refinish vs replace cabinets, affordable kitchen update, cabinet painting Waterloo, save money kitchen renovation Ontario" },
      { property: "og:title", content: "Cabinet Refinishing vs Replace: Which Saves More?" },
      { property: "og:url", content: "https://www.sudcanpainting.com/blog/cabinet-refinishing-vs-replace" },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      { property: "article:published_time", content: "2026-03-20" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cabinet Refinishing vs Replace: Which Saves More?" },
      { rel: "canonical", href: "https://www.sudcanpainting.com/blog/cabinet-refinishing-vs-replace" },
    ],
    scripts: [
            {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Cabinet Refinishing vs Replace: Cost Comparison 2026",
          "description": "Should you refinish or replace your kitchen cabinets? Complete cost breakdown, pros and cons, and decision guide for Kitchener-Waterloo homeowners.",
          "datePublished": "2026-03-20",
          "dateModified": "2026-03-20",
          "author": {
            "@type": "Organization",
            "name": "Sudcan Painting",
            "url": "https://www.sudcanpainting.com"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sudcan Painting",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.sudcanpainting.com/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.sudcanpainting.com/blog/cabinet-refinishing-vs-replace"
          }
        })
      },

      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Blog", url: "https://www.sudcanpainting.com/blog" },
          { name: "Cabinet Refinishing vs Replace", url: "https://www.sudcanpainting.com/blog/cabinet-refinishing-vs-replace" },
        ])),
      },
    ],
  }),
  component: BlogArticle,
});

function BlogArticle() {
  return (
    <PageShell>
      <section className="pt-40 pb-12" style={{background: "#F5F0E6"}}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal><Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#B52E32]">← Back to Blog</Link></Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#687967]">
              <span className="px-3 py-1" style={{borderRadius:"9999px", background:"rgba(181,46,50,0.10)", color:"#B52E32", fontWeight:500}}>Kitchen Renovation</span>
              <span>·</span><div className="flex items-center gap-1"><Calendar size={12}/>March 2026</div>
              <span>·</span><div className="flex items-center gap-1"><Clock size={12}/>7 min read</div>
            </div>
          </Reveal>
          <Reveal delay={0.2}><h1 className="mt-6 font-display text-4xl leading-tight text-[#202321] md:text-6xl">Cabinet Refinishing vs Replace: Which Saves More?</h1></Reveal>
          <Reveal delay={0.3}><p className="mt-6 text-lg text-[#687967]">Complete cost comparison and decision guide. When refinishing makes sense, when replacement is worth it, and what to expect from each option.</p></Reveal>
          <div className="mt-8 h-px w-20" style={{background:"linear-gradient(90deg, #C6A15B, transparent)"}}/>
        </div>
      </section>

      <section className="pb-20" style={{background:"#F5F0E6"}}>
        <div className="mx-auto max-w-4xl px-6">
          <article className="prose prose-lg">
            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-10">Cost Comparison 2026</h2>
              <div className="my-8 p-6 rounded-xl" style={{background:"#EDEADE", border:"1px solid rgba(198,161,91,0.22)", boxShadow:"0 4px 12px -4px rgba(32,35,33,0.12)"}}>
                <ul className="space-y-3 text-[#202321]">
                  <li><strong>Cabinet Refinishing (Professional):</strong> $3,500 - $7,000 (average 10×12 kitchen)</li>
                  <li><strong>Cabinet Replacement (Mid-Range):</strong> $12,000 - $25,000</li>
                  <li><strong>Cabinet Replacement (Custom):</strong> $25,000 - $50,000+</li>
                </ul>
              </div>
              <p className="text-[#687967]">Refinishing saves 60-80% vs. replacement while delivering a showroom-quality finish.</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">When Refinishing Makes Sense</h2>
              <p className="text-[#687967]">Refinishing is ideal if your cabinet boxes are solid and the layout works. Choose refinishing if:</p>
              <ul className="space-y-2 text-[#687967]">
                <li>✓ Cabinet boxes are solid wood or high-quality plywood (not particle board)</li>
                <li>✓ Hinges and drawer glides work smoothly</li>
                <li>✓ You like the current layout and door style</li>
                <li>✓ No water damage, warping, or structural issues</li>
                <li>✓ You want a fresh colour without tearing out everything</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">When Replacement is Worth It</h2>
              <p className="text-[#687967]">Replace if the cabinet structure is failing or you need a new layout. Replace if:</p>
              <ul className="space-y-2 text-[#687967]">
                <li>✗ Particle board cabinets that are swollen or crumbling</li>
                <li>✗ Significant water damage or mold</li>
                <li>✗ You want to change the layout (add an island, remove upper cabinets)</li>
                <li>✗ Hinges and drawer boxes are worn out beyond repair</li>
                <li>✗ Current door style is dated (raised panel, ornate moulding) and you want modern flat-panel doors</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">What's Included in Professional Refinishing</h2>
              <p className="text-[#687967]">Here's what you get with Sudcan Painting cabinet refinishing:</p>
              <ul className="space-y-2 text-[#687967]">
                <li>✓ Complete removal of all doors, drawer fronts, and hardware</li>
                <li>✓ Deep cleaning and degreasing</li>
                <li>✓ Sanding to remove old finish</li>
                <li>✓ Repairs to minor dings, scratches, and holes</li>
                <li>✓ Premium primer and two coats of durable paint or stain</li>
                <li>✓ Soft-close hinges and modern hardware (optional upgrade)</li>
                <li>✓ Professional spray finish (no brush marks)</li>
                <li>✓ 2-year workmanship warranty</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">Timeline Comparison</h2>
              <div className="my-8 p-6 rounded-xl" style={{background:"#EDEADE", border:"1px solid rgba(198,161,91,0.22)"}}>
                <ul className="space-y-3 text-[#202321]">
                  <li><strong>Refinishing:</strong> 5-7 days (kitchen functional, some inconvenience)</li>
                  <li><strong>Replacement:</strong> 3-6 weeks (kitchen completely out of service during demo and install)</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">ROI: What Adds More Value?</h2>
              <p className="text-[#687967]">Both options add value, but refinishing delivers better ROI:</p>
              <ul className="space-y-2 text-[#687967]">
                <li><strong>Refinishing ROI:</strong> 80-100% (you'll recover most or all of the cost at resale)</li>
                <li><strong>Replacement ROI:</strong> 60-75% (higher upfront cost, less return)</li>
              </ul>
              <p className="text-[#687967]">If you're selling within 3-5 years, refinishing delivers maximum visual impact at minimum cost.</p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">Popular Finishes in 2026</h2>
              <p className="text-[#687967]">Kitchener-Waterloo homeowners are choosing:</p>
              <ul className="space-y-2 text-[#687967]">
                <li><strong>Warm whites:</strong> Sherwin-Williams Pure White, Benjamin Moore Simply White</li>
                <li><strong>Soft greys:</strong> Benjamin Moore Chelsea Grey, Sherwin-Williams Repose Grey</li>
                <li><strong>Navy/charcoal (lower cabinets):</strong> Benjamin Moore Hale Navy</li>
                <li><strong>Natural wood stain (uppers) + painted lowers:</strong> Two-tone kitchens remain popular</li>
              </ul>
            </Reveal>
          </article>

          <Reveal>
            <div className="mt-16 p-8 md:p-10" style={{borderRadius:"1.25rem", background:"linear-gradient(135deg, #B52E32 0%, #8f2125 100%)", boxShadow:"0 6px 0 0 rgba(130,20,23,0.75)"}}>
              <h3 className="font-display text-3xl text-white">Not sure if refinishing is right for you?</h3>
              <p className="mt-4 text-white/90">We'll assess your cabinets for free and give honest recommendations — even if that means telling you replacement is the better option.</p>
              <Link to="/quote" className="mt-6 inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[#202321]" style={{borderRadius:"9999px", background:"#F5F0E6"}}>Get Free Assessment<ArrowRight size={16}/></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
