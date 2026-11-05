import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "How Long Does It Take to Paint a House in Kitchener-Waterloo? | Complete Guide 2026",
    description: "Complete guide to house painting timelines in Kitchener-Waterloo. Interior, exterior, room-by-room breakdown. Average costs, prep time, and factors affecting project duration from professional painters.",
    keywords: ["how long to paint house", "house painting time", "kitchener painting timeline", "interior painting duration"],
    openGraph: {
      title: "How Long Does It Take to Paint a House? Complete Timeline Guide",
      description: "Expert breakdown of painting timelines: single room to whole house. Get accurate estimates for your Kitchener-Waterloo home.",
      images: [{
        url: '/assets/home-renovation-complete-transformation.webp',
        width: 1200,
        height: 630,
      }]
    }
  };
}

export default function BlogPost() {
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
              How Long Does It Take to Paint a House in Kitchener-Waterloo?
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#687967]">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                January 22, 2026
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                12 min read
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                Sudcan Painting Team
              </div>
            </div>
          </Reveal>

          <div className="prose prose-lg mt-8 max-w-none">
            <Reveal delay={0.3}>
              <p className="text-lg leading-relaxed text-[#202321]">
                "How long will this take?" is the first question homeowners ask. After painting 500+ homes in Kitchener-Waterloo, we've developed accurate timelines based on real projects. Here's our complete breakdown—no fluff, just facts.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Quick Timeline Summary</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-[#687967]">
                  <thead className="bg-[#FFFDF8]">
                    <tr>
                      <th className="px-4 py-3 font-display text-[#202321]">Project Type</th>
                      <th className="px-4 py-3 font-display text-[#202321]">Timeline</th>
                      <th className="px-4 py-3 font-display text-[#202321]">Crew Size</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[rgba(198,161,91,0.22)]">
                    <tr>
                      <td className="px-4 py-3">Single Room</td>
                      <td className="px-4 py-3 font-medium">1-2 days</td>
                      <td className="px-4 py-3">1-2 painters</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Full Interior (1500 sq ft)</td>
                      <td className="px-4 py-3 font-medium">3-5 days</td>
                      <td className="px-4 py-3">2-3 painters</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Full Interior (2500 sq ft)</td>
                      <td className="px-4 py-3 font-medium">5-7 days</td>
                      <td className="px-4 py-3">3-4 painters</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Exterior (1-story)</td>
                      <td className="px-4 py-3 font-medium">3-5 days</td>
                      <td className="px-4 py-3">2-3 painters</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Exterior (2-story)</td>
                      <td className="px-4 py-3 font-medium">5-8 days</td>
                      <td className="px-4 py-3">3-4 painters</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Kitchen Cabinets</td>
                      <td className="px-4 py-3 font-medium">3-5 days</td>
                      <td className="px-4 py-3">2 painters</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Room-by-Room Breakdown</h2>
              
              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">Bedroom (12' x 12')</h3>
              <p className="mt-3 text-[#687967]">
                <strong>Timeline: 1-2 days</strong>
              </p>
              <ul className="mt-2 space-y-2 text-[#687967]">
                <li><strong>Day 1:</strong> Move furniture to center, tape/cover, fill holes, sand, prime any repairs (6-8 hours)</li>
                <li><strong>Day 2:</strong> First coat walls and trim (4 hours), second coat (4 hours), cleanup (1 hour)</li>
              </ul>
              <p className="mt-3 text-[#687967]">
                <strong>Cost Range:</strong> $400-800 depending on ceiling height, condition, and number of doors/windows
              </p>

              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">Living Room (20' x 15')</h3>
              <p className="mt-3 text-[#687967]">
                <strong>Timeline: 2-3 days</strong>
              </p>
              <ul className="mt-2 space-y-2 text-[#687967]">
                <li><strong>Day 1:</strong> Protection, prep work, fill imperfections, first prime coat</li>
                <li><strong>Day 2:</strong> First finish coat (walls), first coat on trim/doors</li>
                <li><strong>Day 3:</strong> Second finish coat, touch-ups, cleanup</li>
              </ul>
              <p className="mt-3 text-[#687967]">
                <strong>Cost Range:</strong> $800-1,500
              </p>

              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">Kitchen (Standard Size)</h3>
              <p className="mt-3 text-[#687967]">
                <strong>Timeline: 2-3 days (walls only), 5-7 days (with cabinets)</strong>
              </p>
              <p className="mt-2 text-[#687967]">
                Kitchens take longer because of:
              </p>
              <ul className="mt-2 space-y-2 text-[#687967]">
                <li>• Extensive masking around appliances and countertops</li>
                <li>• Cleaning grease/smoke residue before painting</li>
                <li>• Working around homeowners' cooking schedules</li>
                <li>• Cabinet painting requires removal, cleaning, priming, 2-3 coats</li>
              </ul>
            </Reveal>

            <Reveal delay={0.6}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Complete Interior House Timeline</h2>
              
              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">1500 sq ft Bungalow (3 bed, 2 bath)</h3>
              <p className="mt-3 text-[#687967]">
                <strong>Timeline: 3-5 days with 2-3 painters</strong>
              </p>
              <p className="mt-2 text-[#687967]"><strong>Day-by-Day Breakdown:</strong></p>
              <ul className="mt-2 space-y-2 text-[#687967]">
                <li><strong>Day 1:</strong> Furniture protection, taping, patching all walls, first primer coat on repairs</li>
                <li><strong>Day 2:</strong> First coat on all walls and ceilings, cut-in around trim</li>
                <li><strong>Day 3:</strong> Second coat walls and ceilings, start trim and doors</li>
                <li><strong>Day 4:</strong> Finish trim/doors, touch-ups</li>
                <li><strong>Day 5:</strong> Final touch-ups, remove tape/protection, walkthrough</li>
              </ul>
              <p className="mt-3 text-[#687967]">
                <strong>Cost Range:</strong> $4,500-7,500 (walls, ceilings, trim, doors)
              </p>

              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">2500 sq ft Two-Story (4 bed, 3 bath)</h3>
              <p className="mt-3 text-[#687967]">
                <strong>Timeline: 5-7 days with 3-4 painters</strong>
              </p>
              <ul className="mt-2 space-y-2 text-[#687967]">
                <li><strong>Days 1-2:</strong> Complete protection, extensive prep work, priming</li>
                <li><strong>Days 3-4:</strong> First and second coats all walls/ceilings</li>
                <li><strong>Days 5-6:</strong> All trim, doors, stairwell details</li>
                <li><strong>Day 7:</strong> Touch-ups, cleanup, final inspection</li>
              </ul>
              <p className="mt-3 text-[#687967]">
                <strong>Cost Range:</strong> $7,000-12,000
              </p>
            </Reveal>

            <Reveal delay={0.7}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Exterior House Painting Timeline</h2>
              
              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">1-Story Bungalow</h3>
              <p className="mt-3 text-[#687967]">
                <strong>Timeline: 3-5 days</strong>
              </p>
              <ul className="mt-2 space-y-2 text-[#687967]">
                <li><strong>Day 1:</strong> Power wash, scrape loose paint, repair wood damage</li>
                <li><strong>Day 2:</strong> Prime repairs and bare wood, caulk gaps</li>
                <li><strong>Days 3-4:</strong> Two coats on siding</li>
                <li><strong>Day 5:</strong> Trim, soffit, fascia, touch-ups</li>
              </ul>
              <p className="mt-3 text-[#687967]">
                <strong>Cost Range:</strong> $4,000-8,000
              </p>

              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">2-Story House</h3>
              <p className="mt-3 text-[#687967]">
                <strong>Timeline: 5-8 days</strong>
              </p>
              <p className="mt-2 text-[#687967]">
                Two-story homes take longer because of scaffolding setup, more surface area, and safety protocols for working at height.
              </p>
              <p className="mt-3 text-[#687967]">
                <strong>Cost Range:</strong> $8,000-15,000
              </p>
            </Reveal>

            <Reveal delay={0.8}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Factors That Affect Timeline</h2>
              
              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">Weather (Exterior Only)</h3>
              <ul className="mt-3 space-y-2 text-[#687967]">
                <li>• Temperature must be 10-30°C for optimal paint adhesion</li>
                <li>• Rain delays work immediately (paint won't dry properly)</li>
                <li>• High humidity extends drying time by 4-6 hours per coat</li>
                <li>• Ontario spring/fall: Plan 2-3 extra days for weather buffer</li>
              </ul>

              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">Surface Condition</h3>
              <ul className="mt-3 space-y-2 text-[#687967]">
                <li><strong>Good condition:</strong> Minimal prep, standard timeline</li>
                <li><strong>Fair condition:</strong> Patching, sanding adds 1-2 days</li>
                <li><strong>Poor condition:</strong> Extensive repair adds 2-4 days</li>
              </ul>

              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">Color Changes</h3>
              <ul className="mt-3 space-y-2 text-[#687967]">
                <li><strong>Similar color:</strong> 2 coats, standard time</li>
                <li><strong>Light to dark:</strong> 2 coats, standard time</li>
                <li><strong>Dark to light:</strong> 3 coats required, adds 1-2 days</li>
                <li><strong>Red to white:</strong> Primer + 3 coats, adds 2-3 days</li>
              </ul>

              <h3 className="mt-6 font-display text-2xl text-[#B52E32]">Ceiling Height</h3>
              <ul className="mt-3 space-y-2 text-[#687967]">
                <li><strong>8' ceilings:</strong> Standard timeline</li>
                <li><strong>9' ceilings:</strong> Add 10-15% time</li>
                <li><strong>10'+ ceilings:</strong> Add 20-30% time (scaffolding required)</li>
                <li><strong>Vaulted/cathedral:</strong> Add 30-50% time</li>
              </ul>
            </Reveal>

            <Reveal delay={0.9}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Why Professional Painters Are Faster</h2>
              <p className="mt-4 text-[#687967]">
                DIY painting a 2000 sq ft house typically takes 3-4 weekends (24-32 hours spread over a month). Professional crew finishes in 4-5 straight days. Here's why:
              </p>
              <ul className="mt-4 space-y-3 text-[#687967]">
                <li><strong>Specialized Equipment:</strong> Industrial sprayers, scaffolding, proper ladders</li>
                <li><strong>Efficient Prep:</strong> We know shortcuts that don't compromise quality</li>
                <li><strong>Multiple Crew Members:</strong> While one cuts in, another rolls</li>
                <li><strong>No Learning Curve:</strong> We've done this thousands of times</li>
                <li><strong>Fewer Mistakes:</strong> No redoing drips, overlaps, or uneven coverage</li>
              </ul>
            </Reveal>

            <Reveal delay={1.0}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">How to Speed Up Your Project</h2>
              <ul className="mt-4 space-y-3 text-[#687967]">
                <li><strong>Clear the space:</strong> Remove furniture, decorations before we arrive</li>
                <li><strong>Make decisions early:</strong> Choose colors 2 weeks in advance</li>
                <li><strong>Schedule strategically:</strong> Book during shoulder seasons (May, September) for faster timelines</li>
                <li><strong>Combine projects:</strong> Painting multiple rooms at once is more efficient than separate visits</li>
                <li><strong>Hire professionals:</strong> We finish in days what takes weekends to DIY</li>
              </ul>
            </Reveal>

            <Reveal delay={1.1}>
              <h2 className="mt-8 font-display text-3xl text-[#202321]">Our Timeline Guarantee</h2>
              <p className="mt-4 text-[#687967]">
                At Sudcan Painting, we provide detailed project schedules in every quote. We start when promised and finish on time—no delays, no excuses. Our timelines include:
              </p>
              <ul className="mt-4 space-y-2 text-[#687967]">
                <li>✓ Exact start and completion dates</li>
                <li>✓ Daily schedule breakdown</li>
                <li>✓ Weather buffer (exterior projects)</li>
                <li>✓ Text updates at end of each day</li>
                <li>✓ Final walkthrough before we leave</li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={1.2}>
            <div className="mt-12 rounded-2xl border border-[rgba(198,161,91,0.22)] bg-[#FFFDF8] p-8 text-center">
              <h3 className="font-display text-2xl text-[#202321]">Get Your Exact Timeline & Quote</h3>
              <p className="mt-3 text-[#687967]">
                Every project is unique. Call for a free consultation—we'll provide exact timelines and detailed quotes.
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
