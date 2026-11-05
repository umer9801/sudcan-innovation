import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Top 10 Interior Paint Colors for Kitchener Homes 2026 | Sudcan Painting",
    description: "Discover the most popular interior paint colors for 2026 in Kitchener-Waterloo. Expert color trends, combinations, and tips from professional painters. Benjamin Moore & Sherwin-Williams top picks.",
    keywords: ["paint colors 2026", "interior paint trends", "kitchener paint colors", "benjamin moore colors", "sherwin williams colors"],
    openGraph: {
      title: "Top 10 Interior Paint Colors for Kitchener Homes 2026",
      description: "Expert guide to 2026's hottest interior paint colors. Transform your Kitchener home with these trending shades.",
      images: [{
        url: '/assets/interior-painting-living-room-kitchener.webp',
        width: 1200,
        height: 630,
      }]
    }
  };
}

export default function BlogPost() {
  const publishDate = "January 15, 2026";
  const readTime = "8 min read";
  const author = "Sudcan Painting Team";

  return (
    <PageShell>
      <article className="pt-32 pb-20" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-[#B52E32] hover:underline">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-4xl leading-tight text-[#202321] md:text-5xl">
              Top 10 Interior Paint Colors for Kitchener Homes in 2026
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#687967]">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {publishDate}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {readTime}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                {author}
              </div>
            </div>
          </Reveal>

          <div className="prose prose-lg mt-8 max-w-none">
            <Reveal delay={0.3}>
              <p className="text-lg leading-relaxed text-[#202321]">
                As professional painters serving Kitchener-Waterloo for over 18 years, we've seen paint trends come and go. After painting 500+ homes in 2025, we're sharing the top 10 interior colors that are dominating 2026. These aren't just trendy—they're timeless choices that will look stunning for years to come.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">1. Warm Greige (Benjamin Moore "Revere Pewter")</h2>
              <p className="mt-4 text-[#687967]">
                The perfect marriage of gray and beige, warm greige remains the #1 choice for Kitchener homeowners. It's incredibly versatile, working with both modern and traditional decor. In north-facing rooms, it reads slightly cooler; in south-facing spaces, it reveals beautiful warm undertones.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Living rooms, bedrooms, open-concept spaces<br />
                <strong>Pairs with:</strong> Crisp white trim, natural wood, brass fixtures
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">2. Sage Green (Sherwin-Williams "Clary Sage")</h2>
              <p className="mt-4 text-[#687967]">
                Sage green has exploded in popularity, bringing nature indoors. This muted, sophisticated green creates a calming atmosphere perfect for bedrooms and home offices. We're painting at least two sage green rooms per week in Waterloo condos.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Bedrooms, bathrooms, home offices<br />
                <strong>Pairs with:</strong> Natural linen, rattan, black accents
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">3. Warm White (Benjamin Moore "Simply White")</h2>
              <p className="mt-4 text-[#687967]">
                Not stark, not creamy—Simply White hits the perfect balance. It's clean and fresh without feeling cold. In Kitchener's often-cloudy days, it brightens spaces beautifully while maintaining warmth.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Kitchens, trim, ceilings, small spaces<br />
                <strong>Pairs with:</strong> Any color! It's the ultimate neutral
              </p>
            </Reveal>

            <Reveal delay={0.7}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">4. Terracotta (Sherwin-Williams "Cavern Clay")</h2>
              <p className="mt-4 text-[#687967]">
                Terracotta brings warmth and earthiness that Ontarians crave during long winters. It's bold but not overwhelming—creating cozy, inviting spaces. We've seen incredible accent walls in Cambridge dining rooms.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Accent walls, dining rooms, entryways<br />
                <strong>Pairs with:</strong> Cream, sage, natural wood
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">5. Charcoal Gray (Benjamin Moore "Kendall Charcoal")</h2>
              <p className="mt-4 text-[#687967]">
                Deep, sophisticated charcoal creates dramatic, moody spaces that feel both modern and timeless. Perfect for feature walls or entire rooms if you have good natural light.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Home offices, media rooms, accent walls<br />
                <strong>Pairs with:</strong> Gold accents, warm wood, white trim
              </p>
            </Reveal>

            <Reveal delay={0.9}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">6. Soft Blue (Sherwin-Williams "Sea Salt")</h2>
              <p className="mt-4 text-[#687967]">
                Sea Salt is a chameleon—sometimes reading blue, sometimes green, always beautiful. It's calming and serene, perfect for creating spa-like bathrooms and peaceful bedrooms.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Bathrooms, bedrooms, coastal-inspired spaces<br />
                <strong>Pairs with:</strong> White, navy, natural textures
              </p>
            </Reveal>

            <Reveal delay={1.0}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">7. Warm Taupe (Benjamin Moore "Balboa Mist")</h2>
              <p className="mt-4 text-[#687967]">
                Balboa Mist is warmer than traditional gray but cooler than beige. It's sophisticated and timeless, working beautifully with Kitchener's historic homes and modern builds alike.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Whole-home color, living rooms, hallways<br />
                <strong>Pairs with:</strong> Crisp white, charcoal, brass
              </p>
            </Reveal>

            <Reveal delay={1.1}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">8. Deep Navy (Sherwin-Williams "Naval")</h2>
              <p className="mt-4 text-[#687967]">
                Navy adds instant sophistication and depth. We're seeing tons of navy accent walls in Waterloo home offices and powder rooms. It's bold but surprisingly versatile.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Accent walls, powder rooms, home offices<br />
                <strong>Pairs with:</strong> Gold, brass, white, natural wood
              </p>
            </Reveal>

            <Reveal delay={1.2}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">9. Warm Cream (Benjamin Moore "White Dove")</h2>
              <p className="mt-4 text-[#687967]">
                White Dove is the softest, warmest white in our arsenal. It's perfect for creating bright, airy spaces that still feel cozy. Especially popular in kitchens and nurseries.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Kitchens, nurseries, cabinets<br />
                <strong>Pairs with:</strong> Any color, especially neutrals
              </p>
            </Reveal>

            <Reveal delay={1.3}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">10. Soft Blush (Sherwin-Williams "Touching White")</h2>
              <p className="mt-4 text-[#687967]">
                Barely-there blush adds subtle warmth without being overtly pink. It's sophisticated and unexpected, perfect for creating feminine-leaning spaces that aren't childish.
              </p>
              <p className="mt-4 text-[#687967]">
                <strong>Best for:</strong> Bedrooms, powder rooms, dressing rooms<br />
                <strong>Pairs with:</strong> Gray, white, gold accents
              </p>
            </Reveal>

            <Reveal delay={1.4}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Pro Tips from Our Painters</h2>
              <ul className="mt-4 space-y-3 text-[#687967]">
                <li><strong>Always test samples:</strong> Paint large swatches (2' x 2') on multiple walls. Light changes dramatically throughout the day.</li>
                <li><strong>Consider your lighting:</strong> North-facing rooms need warmer colors; south-facing rooms can handle cooler tones.</li>
                <li><strong>Quality matters:</strong> Benjamin Moore and Sherwin-Williams offer superior coverage and durability. Cheaper paint = more coats = higher cost.</li>
                <li><strong>Don't forget sheen:</strong> Matte for ceilings, eggshell for walls, semi-gloss for trim and doors.</li>
                <li><strong>Hire professionals:</strong> Proper prep makes all the difference. Our 2-year warranty proves our confidence in quality work.</li>
              </ul>
            </Reveal>

            <Reveal delay={1.5}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Popular Color Combinations We're Painting</h2>
              <p className="mt-4 text-[#687967]">
                Here are actual combinations we've painted in Kitchener-Waterloo homes:
              </p>
              <ul className="mt-4 space-y-2 text-[#687967]">
                <li><strong>Modern Farmhouse:</strong> Revere Pewter (walls) + Simply White (trim) + Cavern Clay (accent)</li>
                <li><strong>Coastal Calm:</strong> Sea Salt (walls) + White Dove (trim) + Naval (accent)</li>
                <li><strong>Warm Minimalist:</strong> Balboa Mist (walls) + Simply White (trim) + Kendall Charcoal (accent)</li>
                <li><strong>Nature-Inspired:</strong> Clary Sage (walls) + White Dove (trim) + natural wood accents</li>
              </ul>
            </Reveal>

            <Reveal delay={1.6}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Ready to Transform Your Home?</h2>
              <p className="mt-4 text-[#687967]">
                Choosing the perfect color is just the first step. Our professional painters ensure flawless application, proper surface prep, and zero-mess execution. We've painted over 500 homes in Kitchener-Waterloo and offer:
              </p>
              <ul className="mt-4 space-y-2 text-[#687967]">
                <li>✓ Free color consultations</li>
                <li>✓ Premium Benjamin Moore & Sherwin-Williams paints</li>
                <li>✓ 2-year workmanship warranty</li>
                <li>✓ Licensed, insured, WSIB compliant</li>
                <li>✓ Zero-mess guarantee</li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={1.7}>
            <div className="mt-12 rounded-2xl border border-[rgba(198,161,91,0.22)] bg-[#FFFDF8] p-8 text-center">
              <h3 className="font-display text-2xl text-[#202321]">Get Your Free Color Consultation</h3>
              <p className="mt-3 text-[#687967]">
                Call us today for a free in-home consultation. We'll help you choose the perfect colors and provide a detailed quote.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="tel:+12266006637"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                  style={{
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                    boxShadow: "0 3px 0 0 rgba(130,20,23,0.75)",
                  }}
                >
                  Call (226) 600-6637
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#202321] transition-all hover:-translate-y-0.5"
                  style={{
                    borderRadius: "9999px",
                    background: "#EDEADE",
                    border: "1px solid rgba(198,161,91,0.22)",
                  }}
                >
                  Get Free Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </article>
    </PageShell>
  );
}
