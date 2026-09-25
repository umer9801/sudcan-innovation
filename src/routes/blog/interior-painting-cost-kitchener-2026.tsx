import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { createBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/interior-painting-cost-kitchener-2026")({
  head: () => ({
    meta: [
      { title: "Interior Painting Cost Kitchener 2026: Complete Price Guide | Sudcan Painting" },
      {
        name: "description",
        content:
          "How much does interior painting cost in Kitchener-Waterloo 2026? Room-by-room pricing, cost factors, and tips to get the best value. Free quotes available.",
      },
      { name: "keywords", content: "interior painting cost Kitchener, painting prices Waterloo 2026, room painting cost, professional painter rates Ontario, affordable painting services, interior painting estimate, cost per room, budget painting Kitchener" },
      
      // Open Graph
      { property: "og:title", content: "Interior Painting Cost Kitchener 2026 Guide" },
      { property: "og:description", content: "Complete breakdown of interior painting costs in Kitchener-Waterloo. Room pricing and cost factors." },
      { property: "og:url", content: "https://www.sudcanpainting.com/blog/interior-painting-cost-kitchener-2026" },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      { property: "article:published_time", content: "2026-03-15" },
      { property: "article:author", content: "Sudcan Painting" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Interior Painting Cost Kitchener 2026 Guide" },
      { name: "twitter:description", content: "Complete room-by-room pricing guide for interior painting in Kitchener-Waterloo." },
      
      // Canonical
      { rel: "canonical", href: "https://www.sudcanpainting.com/blog/interior-painting-cost-kitchener-2026" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Interior Painting Cost Kitchener 2026: What to Expect",
          "description": "Complete breakdown of interior painting costs in Kitchener-Waterloo for 2026, including room-by-room pricing and cost factors.",
          "datePublished": "2026-03-15",
          "dateModified": "2026-03-15",
          "author": {
            "@type": "Organization",
            "name": "Sudcan Painting"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Sudcan Painting",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.sudcanpainting.com/logo.png"
            }
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Blog", url: "https://www.sudcanpainting.com/blog" },
          { name: "Interior Painting Cost Kitchener 2026", url: "https://www.sudcanpainting.com/blog/interior-painting-cost-kitchener-2026" },
        ])),
      },
    ],
  }),
  component: BlogArticle,
});

function BlogArticle() {
  return (
    <PageShell>
      {/* ── HEADER ── */}
      <section className="pt-40 pb-12" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#B52E32] hover:text-[#8f2125] transition-colors"
            >
              ← Back to Blog
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#687967]">
              <span className="inline-block px-3 py-1" style={{
                borderRadius: "9999px",
                background: "rgba(181,46,50,0.10)",
                color: "#B52E32",
                fontWeight: 500,
              }}>
                Cost Guides
              </span>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                March 2026
              </div>
              <span>·</span>
              <div className="flex items-center gap-1">
                <Clock size={12} />
                8 min read
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="mt-6 font-display text-4xl leading-tight text-[#202321] md:text-6xl">
              Interior Painting Cost Kitchener 2026: What to Expect
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-lg text-[#687967]">
              Complete breakdown of interior painting costs in Kitchener-Waterloo. Room-by-room pricing, factors that affect cost, and how to get the best value.
            </p>
          </Reveal>
          <div
            className="mt-8 h-px w-20"
            style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
          />
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <section className="pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6">
          <article className="prose prose-lg">
            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-10">2026 Average Costs by Room</h2>
              <p className="text-[#687967] leading-relaxed">
                Here's what professional interior painting typically costs in Kitchener-Waterloo as of 2026. These prices include all labour, materials, prep work, and two coats of premium paint:
              </p>
              <div className="my-8 p-6 rounded-xl" style={{
                background: "#EDEADE",
                border: "1px solid rgba(198,161,91,0.22)",
                boxShadow: "0 4px 12px -4px rgba(32,35,33,0.12)"
              }}>
                <ul className="space-y-3 text-[#202321]">
                  <li><strong>Bedroom (12×12 ft):</strong> $400 - $700</li>
                  <li><strong>Living Room (15×18 ft):</strong> $650 - $1,100</li>
                  <li><strong>Kitchen (10×12 ft):</strong> $500 - $900</li>
                  <li><strong>Bathroom (8×10 ft):</strong> $350 - $600</li>
                  <li><strong>Hallway (4×10 ft):</strong> $200 - $400</li>
                  <li><strong>Master Bedroom (14×16 ft):</strong> $550 - $950</li>
                  <li><strong>Open Concept Living/Dining (20×24 ft):</strong> $1,200 - $2,000</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">What Affects the Cost?</h2>
              <h3 className="font-display text-2xl text-[#35483A] mt-8">1. Surface Condition</h3>
              <p className="text-[#687967] leading-relaxed">
                Smooth, clean walls cost less. Damaged drywall, cracks, holes, or heavy texture require prep work that adds $200-$800 depending on severity. If your walls need patching, sanding, or skim-coating, expect the higher end of the price range.
              </p>

              <h3 className="font-display text-2xl text-[#35483A] mt-8">2. Ceiling Height</h3>
              <p className="text-[#687967] leading-relaxed">
                Standard 8-9 ft ceilings are included in base pricing. Vaulted ceilings, 10+ ft walls, or two-story foyers add 15-30% due to scaffolding and extra time required.
              </p>

              <h3 className="font-display text-2xl text-[#35483A] mt-8">3. Paint Quality</h3>
              <p className="text-[#687967] leading-relaxed">
                We use Benjamin Moore and Sherwin-Williams premium lines. Upgrading to designer colours, zero-VOC, or specialty finishes (matte, eggshell, semi-gloss) can add $50-$150 per room depending on coverage needs.
              </p>

              <h3 className="font-display text-2xl text-[#35483A] mt-8">4. Colour Changes</h3>
              <p className="text-[#687967] leading-relaxed">
                Going from dark to light (or vice versa) often needs an extra primer coat or third finish coat. This adds $100-$250 per room. Accent walls in bold colours follow the same rule.
              </p>

              <h3 className="font-display text-2xl text-[#35483A] mt-8">5. Trim and Doors</h3>
              <p className="text-[#687967] leading-relaxed">
                Painting baseboards, crown moulding, door frames, and doors requires precision taping and adds time. Expect $150-$400 extra per room depending on trim complexity.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">Whole-Home Interior Painting Cost</h2>
              <p className="text-[#687967] leading-relaxed">
                For complete interior repaints in Kitchener-Waterloo, here are typical ranges based on home size:
              </p>
              <div className="my-8 p-6 rounded-xl" style={{
                background: "#EDEADE",
                border: "1px solid rgba(198,161,91,0.22)",
                boxShadow: "0 4px 12px -4px rgba(32,35,33,0.12)"
              }}>
                <ul className="space-y-3 text-[#202321]">
                  <li><strong>1,000 sq ft condo/townhouse:</strong> $2,500 - $4,500</li>
                  <li><strong>1,500 sq ft home:</strong> $4,000 - $7,000</li>
                  <li><strong>2,000 sq ft home:</strong> $5,500 - $9,000</li>
                  <li><strong>2,500+ sq ft home:</strong> $7,500 - $13,000</li>
                </ul>
              </div>
              <p className="text-[#687967] leading-relaxed">
                These prices assume walls and ceilings, two coats, standard prep, and mid-grade paint. Trim, doors, and extensive repairs are quoted separately.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">How to Get the Best Value</h2>
              <ol className="space-y-4 text-[#687967] leading-relaxed">
                <li><strong>1. Get multiple quotes.</strong> Compare line-item breakdowns, not just totals. Watch for low bids that skip prep work.</li>
                <li><strong>2. Ask about paint quality.</strong> Cheap paint costs less upfront but fades and chips faster. Premium paint lasts 7-10 years vs. 3-5 for budget brands.</li>
                <li><strong>3. Bundle rooms.</strong> Painting multiple rooms at once reduces setup time and per-room cost by 10-15%.</li>
                <li><strong>4. Schedule in off-peak.</strong> Winter and early spring (Jan-Mar) often see lower demand and better pricing flexibility.</li>
                <li><strong>5. Confirm warranty.</strong> Reputable painters warranty workmanship for 1-2 years. If paint peels or bubbles due to application issues, they'll fix it free.</li>
              </ol>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">What's Included in Our Quotes</h2>
              <p className="text-[#687967] leading-relaxed">
                At Sudcan Painting, every interior painting quote includes:
              </p>
              <ul className="space-y-2 text-[#687967] leading-relaxed">
                <li>✓ Free colour consultation</li>
                <li>✓ Furniture moving and protection</li>
                <li>✓ Surface cleaning, patching, and sanding</li>
                <li>✓ Premium Benjamin Moore or Sherwin-Williams paint</li>
                <li>✓ Two finish coats (primer if needed)</li>
                <li>✓ Daily site cleanup</li>
                <li>✓ Final walkthrough and touch-ups</li>
                <li>✓ 2-year workmanship warranty</li>
              </ul>
            </Reveal>
          </article>

          {/* ── CTA ── */}
          <Reveal>
            <div
              className="mt-16 p-8 md:p-10"
              style={{
                borderRadius: "1.25rem",
                background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                boxShadow:
                  "0 6px 0 0 rgba(130,20,23,0.75), 0 18px 40px -10px rgba(130,20,23,0.45), inset 0 1px 0 rgba(255,255,255,0.28)",
              }}
            >
              <h3 className="font-display text-3xl text-white">Ready to get exact pricing for your project?</h3>
              <p className="mt-4 text-white/90 max-w-2xl">
                Get a free, detailed quote within 24 hours. Transparent pricing, zero surprises.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/quote"
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
                </Link>
                <a
                  href="tel:+12266006637"
                  className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                  style={{
                    borderRadius: "9999px",
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    boxShadow:
                      "0 3px 0 0 rgba(0,0,0,0.12), 0 10px 28px -6px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.25)",
                  }}
                >
                  Call (226) 600-6637
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
