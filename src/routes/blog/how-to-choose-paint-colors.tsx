import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { createBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blog/how-to-choose-paint-colors")({
  head: () => ({
    meta: [
      { title: "How to Choose Paint Colors That Actually Work | Expert Tips 2026" },
      {
        name: "description",
        content: "Professional colour consultation tips for choosing paint colors. Learn how lighting, room size, and décor affect your perfect shade. Free colour advice from Sudcan Painting.",
      },
      { name: "keywords", content: "choose paint colors, colour consultation, paint color tips, interior design Kitchener, best paint colors 2026, color selection guide, paint matching service, professional color advice Ontario" },
      { property: "og:title", content: "How to Choose Paint Colors That Actually Work" },
      { property: "og:description", content: "Expert tips for choosing the perfect paint colors for your home." },
      { property: "og:url", content: "https://www.sudcanpainting.com/blog/how-to-choose-paint-colors" },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      { property: "article:published_time", content: "2026-03-18" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "How to Choose Paint Colors That Actually Work" },
      { rel: "canonical", href: "https://www.sudcanpainting.com/blog/how-to-choose-paint-colors" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "How to Choose Paint Colors That Actually Work",
          "description": "Professional colour consultation tips for choosing paint colors. Learn how lighting, room size, and décor affect your perfect shade.",
          "datePublished": "2026-03-18",
          "dateModified": "2026-03-18",
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
            "@id": "https://www.sudcanpainting.com/blog/how-to-choose-paint-colors"
          }
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Choose the Perfect Paint Color",
          "description": "Step-by-step guide to selecting paint colors that work with your lighting, furniture, and lifestyle.",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Test in Your Actual Lighting",
              "text": "Paint large swatches (at least 2'×2') on multiple walls. Observe morning, afternoon, and evening light. North-facing rooms read cooler; south-facing warmer.",
              "position": 1
            },
            {
              "@type": "HowToStep",
              "name": "Consider Your Existing Décor",
              "text": "Pull colors from existing furniture, rugs, or artwork. Use undertones that complement what you already own rather than fighting against it.",
              "position": 2
            },
            {
              "@type": "HowToStep",
              "name": "Account for Room Size and Ceiling Height",
              "text": "Small rooms benefit from lighter shades to open up space. Large rooms can handle deeper, richer tones. Higher ceilings pair well with darker accent walls.",
              "position": 3
            },
            {
              "@type": "HowToStep",
              "name": "Think About Traffic Flow",
              "text": "Colors should flow naturally from room to room. Use a cohesive palette with variations in tone rather than jarring contrasts between adjacent spaces.",
              "position": 4
            },
            {
              "@type": "HowToStep",
              "name": "Factor in Sheen and Finish",
              "text": "Matte hides imperfections but shows marks. Eggshell and satin are versatile. Semi-gloss works for trim and high-traffic areas. High-gloss is dramatic but unforgiving.",
              "position": 5
            }
          ]
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(createBreadcrumbSchema([
          { name: "Home", url: "https://www.sudcanpainting.com/" },
          { name: "Blog", url: "https://www.sudcanpainting.com/blog" },
          { name: "How to Choose Paint Colors", url: "https://www.sudcanpainting.com/blog/how-to-choose-paint-colors" },
        ])),
      },
    ],
  }),
  component: BlogArticle,
});

function BlogArticle() {
  return (
    <PageShell>
      <section className="pt-40 pb-12" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#B52E32] hover:text-[#8f2125]">
              ← Back to Blog
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[#687967]">
              <span className="inline-block px-3 py-1" style={{borderRadius: "9999px", background: "rgba(181,46,50,0.10)", color: "#B52E32", fontWeight: 500}}>Design Tips</span>
              <span>·</span>
              <div className="flex items-center gap-1"><Calendar size={12} />March 2026</div>
              <span>·</span>
              <div className="flex items-center gap-1"><Clock size={12} />6 min read</div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="mt-6 font-display text-4xl leading-tight text-[#202321] md:text-6xl">
              How to Choose Paint Colors That Actually Work
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-lg text-[#687967]">
              Expert colour consultation tips from professional painters. Learn how lighting, room size, and existing décor affect your perfect shade.
            </p>
          </Reveal>
          <div className="mt-8 h-px w-20" style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }} />
        </div>
      </section>

      <section className="pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6">
          <article className="prose prose-lg">
            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-10">Step 1: Understand Your Lighting</h2>
              <p className="text-[#687967] leading-relaxed">
                Light changes everything. The same paint swatch looks completely different at 8am, 2pm, and 8pm. Here's what to watch for:
              </p>
              <ul className="space-y-2 text-[#687967]">
                <li><strong>North-facing rooms:</strong> Cool, flat light all day. Warm neutrals (beige, cream, soft yellow) balance the coolness.</li>
                <li><strong>South-facing rooms:</strong> Warm, bright light. Cool greys, blues, and greens stay balanced and don't look washed out.</li>
                <li><strong>East-facing rooms:</strong> Morning sunshine, cool afternoons. Test colours at both times to avoid surprises.</li>
                <li><strong>West-facing rooms:</strong> Warm late-day glow. Avoid oranges and yellows that intensify at sunset.</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">Step 2: Test Before You Commit</h2>
              <p className="text-[#687967] leading-relaxed">
                Never choose paint from a tiny swatch alone. Here's the right way to test:
              </p>
              <ol className="space-y-3 text-[#687967]">
                <li><strong>1. Buy sample pots.</strong> $5-8 each gets you enough to paint a 2×2 ft square.</li>
                <li><strong>2. Paint on poster board.</strong> Tape it to multiple walls and move it throughout the day. Seeing colour in different lights reveals what works.</li>
                <li><strong>3. Live with it for 3-5 days.</strong> Check it morning, noon, and night. Notice how it interacts with your furniture, flooring, and natural light.</li>
                <li><strong>4. Test 3 shades.</strong> If you love a grey, test one shade lighter and one shade darker. The middle option is often the winner.</li>
              </ol>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">Step 3: Consider Room Size and Function</h2>
              <h3 className="font-display text-2xl text-[#35483A] mt-8">Small Rooms</h3>
              <p className="text-[#687967] leading-relaxed">
                Light, cool tones (soft whites, pale greys, light blues) make small spaces feel larger. Avoid dark colours that close in the room.
              </p>
              <h3 className="font-display text-2xl text-[#35483A] mt-8">Large Open Spaces</h3>
              <p className="text-[#687967] leading-relaxed">
                Rich, warm tones (deep greiges, warm greys, soft browns) add coziness to oversized rooms. Light colours can feel cold and sterile in big spaces.
              </p>
              <h3 className="font-display text-2xl text-[#35483A] mt-8">Bedrooms</h3>
              <p className="text-[#687967] leading-relaxed">
                Calm, muted tones promote relaxation. Soft blues, sage greens, warm greys, and muted lavenders work beautifully.
              </p>
              <h3 className="font-display text-2xl text-[#35483A] mt-8">Kitchens & Bathrooms</h3>
              <p className="text-[#687967] leading-relaxed">
                Semi-gloss or satin finishes resist moisture and wipe clean easily. Whites, soft greys, and light neutrals stay timeless and pair with any countertop or tile.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">Popular 2026 Color Trends in Kitchener-Waterloo</h2>
              <p className="text-[#687967] leading-relaxed">
                Based on projects we're completing right now, here are the shades homeowners in Kitchener-Waterloo are loving:
              </p>
              <div className="my-8 p-6 rounded-xl" style={{background: "#EDEADE", border: "1px solid rgba(198,161,91,0.22)", boxShadow: "0 4px 12px -4px rgba(32,35,33,0.12)"}}>
                <ul className="space-y-3 text-[#202321]">
                  <li><strong>Greige (grey + beige):</strong> Benjamin Moore Revere Pewter, Sherwin-Williams Accessible Beige</li>
                  <li><strong>Warm whites:</strong> Benjamin Moore Simply White, Sherwin-Williams Alabaster</li>
                  <li><strong>Soft sage greens:</strong> Benjamin Moore Saybrook Sage, Sherwin-Williams Clary Sage</li>
                  <li><strong>Moody blues:</strong> Benjamin Moore Hale Navy, Sherwin-Williams Naval (accent walls)</li>
                  <li><strong>Deep charcoals:</strong> Benjamin Moore Kendall Charcoal (feature walls, trim)</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">Common Mistakes to Avoid</h2>
              <ul className="space-y-3 text-[#687967] leading-relaxed">
                <li><strong>1. Choosing colour first, furniture second.</strong> Your sofa, rug, and curtains should guide your palette, not the other way around.</li>
                <li><strong>2. Matching everything.</strong> Monotone rooms feel flat. Vary shades slightly between walls, trim, and ceilings for depth.</li>
                <li><strong>3. Ignoring undertones.</strong> Every "grey" leans blue, green, or purple. Test next to your flooring to catch undertones before painting.</li>
                <li><strong>4. Skipping primer.</strong> Dark-to-light transitions need primer. Skipping it means uneven coverage and wasted paint.</li>
                <li><strong>5. Painting one coat.</strong> Two coats ensure even colour and durability. One-coat results look streaky and fade faster.</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-3xl text-[#202321] mt-12">Need Help Choosing?</h2>
              <p className="text-[#687967] leading-relaxed">
                Colour consultation is included free with every Sudcan Painting project. We bring samples, assess your lighting, and help you choose shades that work beautifully in your space. No guesswork, no regrets.
              </p>
            </Reveal>
          </article>

          <Reveal>
            <div className="mt-16 p-8 md:p-10" style={{borderRadius: "1.25rem", background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)", boxShadow: "0 6px 0 0 rgba(130,20,23,0.75), 0 18px 40px -10px rgba(130,20,23,0.45), inset 0 1px 0 rgba(255,255,255,0.28)"}}>
              <h3 className="font-display text-3xl text-white">Free colour consultation with every quote</h3>
              <p className="mt-4 text-white/90 max-w-2xl">
                Get expert advice on choosing the perfect colours for your space. No obligation, just honest recommendations.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link to="/quote" className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-[#202321] transition-all hover:-translate-y-0.5" style={{borderRadius: "9999px", background: "#F5F0E6", boxShadow: "0 3px 0 0 rgba(32,35,33,0.18), 0 10px 28px -6px rgba(32,35,33,0.22), inset 0 1px 0 rgba(255,255,255,0.68)"}}>
                  Get Free Consultation<ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      <section style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
                Related Articles
              </span>
              <h2 className="mt-3 font-display text-3xl text-[#202321]">
                Continue Reading
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              { title: "Interior Painting Cost Kitchener 2026", desc: "Complete pricing guide for interior painting projects", link: "/blog/interior-painting-cost-kitchener-2026" },
              { title: "Best Exterior Paint for Canadian Weather", desc: "Top paint recommendations for harsh winters", link: "/blog/best-exterior-paint-canadian-weather" },
            ].map((article, i) => (
              <Reveal key={article.title} delay={i * 0.1}>
                <Link
                  to={article.link}
                  className="group block h-full p-6 transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#EDEADE",
                    boxShadow: "0 3px 0 0 rgba(32,35,33,0.08), 0 10px 28px -6px rgba(32,35,33,0.12)",
                    border: "1px solid rgba(198,161,91,0.18)",
                  }}
                >
                  <h3 className="font-display text-lg text-[#202321] group-hover:text-[#B52E32] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#687967]">{article.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#B52E32]">
                    Read Article <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
