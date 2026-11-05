"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    slug: "#",
    title: "Interior Painting Cost Kitchener 2026: What to Expect",
    excerpt: "Complete breakdown of interior painting costs in Kitchener-Waterloo. Room-by-room pricing, factors that affect cost, and how to get the best value.",
    category: "Cost Guides",
    date: "March 2026",
    readTime: "8 min read",
  },
  {
    slug: "#",
    title: "How to Choose Paint Colors That Actually Work",
    excerpt: "Expert colour consultation tips from professional painters. Learn how lighting, room size, and existing décor affect your perfect shade.",
    category: "Design Tips",
    date: "March 2026",
    readTime: "6 min read",
  },
  {
    slug: "#",
    title: "Cabinet Refinishing vs Replace: Which Saves More?",
    excerpt: "Complete cost comparison and decision guide. When refinishing makes sense, when replacement is worth it, and what to expect from each option.",
    category: "Kitchen Renovation",
    date: "March 2026",
    readTime: "7 min read",
  },
  {
    slug: "#",
    title: "Best Exterior Paint for Canadian Weather (2026 Guide)",
    excerpt: "Surviving harsh winters and hot summers requires the right exterior coating. Our tested recommendations for Ontario's climate.",
    category: "Exterior Painting",
    date: "March 2026",
    readTime: "9 min read",
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <section className="pt-40 pb-16" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">Expert Advice</span>
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
          <div className="mt-8 h-px w-20" style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }} />
        </div>
      </section>

      <section className="pb-28" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.1}>
                <Link
                  href={post.slug}
                  className="group block overflow-hidden transition-all hover:-translate-y-1"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#EDEADE",
                    boxShadow: "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.13), inset 0 1px 0 rgba(255,255,255,0.62)",
                    border: "1px solid rgba(198,161,91,0.20)",
                  }}
                >
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[#B52E32]">
                      <span>{post.category}</span>
                      <span className="text-[#687967]">•</span>
                      <span className="text-[#687967]">{post.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-[#202321] group-hover:text-[#B52E32] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#687967]">{post.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#687967]">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#B52E32]/60 transition-colors group-hover:text-[#B52E32]">
                        Read more <ArrowRight size={12} />
                      </div>
                    </div>
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
