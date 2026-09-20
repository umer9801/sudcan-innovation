import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Calendar } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Painting & Renovation Blog | Expert Tips & Guides | Sudcan Painting" },
      {
        name: "description",
        content:
          "Expert advice on painting, renovation, and home improvement. Tips, cost guides, and how-to articles from professional painters in Kitchener-Waterloo.",
      },
      { name: "keywords", content: "painting tips, renovation guides, home improvement blog, painting cost Kitchener, DIY advice, professional painting advice, color selection tips, renovation budget guide Ontario" },
      
      // Open Graph
      { property: "og:title", content: "Painting & Renovation Blog | Sudcan Painting" },
      { property: "og:description", content: "Expert tips and guides on painting, renovation, and home improvement." },
      { property: "og:url", content: "https://www.sudcanpainting.com/blog" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sudcan Painting" },
      { property: "og:locale", content: "en_CA" },
      
      // Twitter Card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Painting & Renovation Blog | Sudcan Painting" },
      { name: "twitter:description", content: "Expert tips and guides on painting and home improvement." },
      
      // Canonical
      { rel: "canonical", href: "https://www.sudcanpainting.com/blog" },
    ],
  }),
  component: BlogPage,
});

const blogPosts = [
  {
    slug: "interior-painting-cost-kitchener-2026",
    title: "Interior Painting Cost Kitchener 2026: What to Expect",
    excerpt: "Complete breakdown of interior painting costs in Kitchener-Waterloo. Room-by-room pricing, factors that affect cost, and how to get the best value.",
    category: "Cost Guides",
    date: "March 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-choose-paint-colors",
    title: "How to Choose Paint Colors That Actually Work",
    excerpt: "Expert colour consultation tips from professional painters. Learn how lighting, room size, and existing décor affect your perfect shade.",
    category: "Design Tips",
    date: "March 2026",
    readTime: "6 min read",
  },
  {
    slug: "cabinet-refinishing-vs-replace",
    title: "Cabinet Refinishing vs Replace: Which Saves More?",
    excerpt: "Complete cost comparison and decision guide. When refinishing makes sense, when replacement is worth it, and what to expect from each option.",
    category: "Kitchen Renovation",
    date: "March 2026",
    readTime: "7 min read",
  },
  {
    slug: "best-exterior-paint-canadian-weather",
    title: "Best Exterior Paint for Canadian Weather (2026 Guide)",
    excerpt: "Surviving harsh winters and hot summers requires the right exterior coating. Our tested recommendations for Ontario's climate.",
    category: "Exterior Painting",
    date: "March 2026",
    readTime: "9 min read",
  },
];

function BlogPage() {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="pt-40 pb-16" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Expert Advice
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Painting & renovation{" "}
              <span className="italic text-[#C6A15B]">insights</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Practical tips, cost breakdowns, and expert advice from professional painters and renovators in Kitchener-Waterloo.
            </p>
          </Reveal>
          <div
            className="mt-8 h-px w-20"
            style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
          />
        </div>
      </section>

      {/* ── BLOG POSTS GRID ── */}
      <section className="pb-28" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full"
                >
                  <article
                    className="flex h-full flex-col p-8 transition-all hover:-translate-y-1"
                    style={{
                      borderRadius: "1.25rem",
                      background: "#EDEADE",
                      boxShadow:
                        "0 4px 0 0 rgba(32,35,33,0.09), 0 12px 28px -8px rgba(32,35,33,0.14), inset 0 1px 0 rgba(255,255,255,0.68)",
                      border: "1px solid rgba(198,161,91,0.22)",
                    }}
                  >
                    <div className="flex items-center gap-3 text-xs text-[#687967]">
                      <span className="inline-block px-3 py-1" style={{
                        borderRadius: "9999px",
                        background: "rgba(181,46,50,0.10)",
                        color: "#B52E32",
                        fontWeight: 500,
                      }}>
                        {post.category}
                      </span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </div>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl text-[#202321] group-hover:text-[#B52E32] transition-colors">
                      {post.title}
                    </h2>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#687967]">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#B52E32] transition-transform group-hover:translate-x-1">
                      Read article
                      <ArrowRight size={16} />
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div
            className="relative overflow-hidden px-8 py-16 md:px-16"
            style={{
              borderRadius: "1.5rem",
              background: "linear-gradient(135deg, #35483A 0%, #202321 100%)",
              boxShadow:
                "0 8px 0 0 rgba(32,35,33,0.32), 0 24px 60px -12px rgba(32,35,33,0.48), inset 0 1px 0 rgba(255,255,255,0.07)",
              border: "1px solid rgba(198,161,91,0.20)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(198,161,91,0.55), transparent)",
              }}
            />
            <h2 className="relative max-w-2xl font-display text-4xl text-balance text-[#F5F0E6] md:text-5xl">
              Have questions about your project?
            </h2>
            <p className="relative mt-4 max-w-xl text-[#687967]">
              Get expert advice and a free quote for your painting or renovation project.
            </p>
            <div className="relative mt-8 flex flex-wrap gap-4">
              <Link
                to="/quote"
                className="inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                Get Free Quote
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
