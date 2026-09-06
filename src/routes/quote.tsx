import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { FileText, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { submitQuote } from "@/lib/api/quote";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote — Sudcan Innovation Inc" },
      {
        name: "description",
        content:
          "Request a detailed, free renovation or flooring quote. Tell us about your project and get a transparent estimate within one business day.",
      },
      { property: "og:title", content: "Free Quote — Sudcan" },
      {
        property: "og:description",
        content: "Get a detailed, transparent quote for your renovation or flooring project.",
      },
    ],
  }),
  component: QuotePage,
});

const inputBase =
  "mt-2 w-full px-4 py-3 text-sm text-[#202321] outline-none transition-all placeholder:text-[#687967]/60 focus:ring-4 focus:ring-[rgba(198,161,91,0.15)] focus:border-[#C6A15B]";
const inputSty: React.CSSProperties = {
  borderRadius: "0.875rem",
  background: "#F5F0E6",
  border: "1px solid rgba(198,161,91,0.22)",
  boxShadow: "inset 0 2px 4px rgba(32,35,33,0.07), inset 0 1px 0 rgba(255,255,255,0.58)",
};

function FormSection({ title }: { title: string }) {
  return (
    <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(181,46,50,0.18)" }}>
      <div className="flex items-center gap-3 mb-1">
        <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #B52E32, transparent)" }} />
        <h3 className="font-display text-lg text-[#B52E32]">{title}</h3>
      </div>
    </div>
  );
}

function QuotePage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    const serviceIds = [
      "design", "permits", "removal", "disposal",
      "structural", "electrical", "plumbing", "hvac",
    ];
    const services = serviceIds.filter((id) => fd.get(`service_${id}`) === "on");
    try {
      await submitQuote({
        data: {
          fullName: fd.get("fullName") as string,
          email: fd.get("email") as string,
          phone: fd.get("phone") as string,
          city: (fd.get("city") as string) || undefined,
          projectType: fd.get("projectType") as string,
          propertyType: fd.get("propertyType") as string,
          squareFootage: fd.get("squareFootage") ? Number(fd.get("squareFootage")) : undefined,
          budgetRange: (fd.get("budgetRange") as string) || undefined,
          timeline: (fd.get("timeline") as string) || undefined,
          condition: (fd.get("condition") as string) || undefined,
          currentState: (fd.get("currentState") as string) || undefined,
          spaceAge: fd.get("spaceAge") ? Number(fd.get("spaceAge")) : undefined,
          existingIssues: (fd.get("existingIssues") as string) || undefined,
          designStyle: (fd.get("designStyle") as string) || undefined,
          colorPreferences: (fd.get("colorPreferences") as string) || undefined,
          materials: (fd.get("materials") as string) || undefined,
          finishPreferences: (fd.get("finishPreferences") as string) || undefined,
          services,
          specialConsiderations: (fd.get("specialConsiderations") as string) || undefined,
          hasChildren: fd.get("hasChildren") === "on",
          hasPets: fd.get("hasPets") === "on",
          projectDescription: fd.get("projectDescription") as string,
        },
      });
      toast.success("Quote request submitted — we'll reach out within one business day.");
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageShell>
      <Toaster position="top-center" />

      {/* ── HERO ── */}
      <section className="pt-40" style={{ background: "#F5F0E6" }}>
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.25em] text-[#B52E32]">
              Get a Quote
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Get a detailed, transparent{" "}
              <span className="italic text-[#C6A15B]">quote</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Share details about your project below. We'll provide a detailed, itemized quote within one business day — no surprises, no pressure.
            </p>
          </Reveal>
          <div
            className="mt-8 h-px w-20"
            style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
          />
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="mx-auto max-w-3xl px-6 pb-28" style={{ background: "#F5F0E6" }}>
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="p-8 md:p-10"
            style={{
              borderRadius: "1.5rem",
              background: "#EDEADE",
              boxShadow:
                "0 4px 0 0 rgba(32,35,33,0.09), 0 14px 36px -8px rgba(32,35,33,0.14), inset 0 1px 0 rgba(255,255,255,0.68)",
              border: "1px solid rgba(198,161,91,0.22)",
            }}
          >
            {/* Your Information */}
            <div className="flex items-center gap-3 mb-1">
              <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, #B52E32, transparent)" }} />
              <h3 className="font-display text-lg text-[#B52E32]">Your Information</h3>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="fullName" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@example.com" required />
              <Field label="Phone" name="phone" placeholder="(226) 600-6637" required />
              <Field label="City" name="city" placeholder="Kitchener" />
            </div>

            <FormSection title="Project Details" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <SelectField label="Project Type" name="projectType" required>
                <option value="">Select a project type</option>
                <option value="flooring">Flooring Installation</option>
                <option value="kitchen">Kitchen Renovation</option>
                <option value="bathroom">Bathroom Renovation</option>
                <option value="whole-home">Whole Home Renovation</option>
                <option value="commercial">Commercial Fit-out</option>
                <option value="painting">Painting</option>
                <option value="other">Other</option>
              </SelectField>
              <SelectField label="Property Type" name="propertyType" required>
                <option value="">Select property type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="mixed">Mixed Use</option>
              </SelectField>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="Square Footage (approx.)" name="squareFootage" type="number" placeholder="1,500" />
              <SelectField label="Budget Range" name="budgetRange">
                <option value="">Select a range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-30k">$15,000 - $30,000</option>
                <option value="30k-50k">$30,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
              </SelectField>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <SelectField label="Timeline" name="timeline">
                <option value="">When do you want to start?</option>
                <option value="immediate">Immediately</option>
                <option value="1-month">Within 1 month</option>
                <option value="2-3-months">2-3 months</option>
                <option value="flexible">Flexible</option>
              </SelectField>
              <Field label="Current Condition" name="condition" placeholder="e.g., needs repair, cosmetic update" />
            </div>

            <FormSection title="Existing Conditions" />
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <SelectField label="Current State" name="currentState">
                <option value="">Select current state</option>
                <option value="vacant">Vacant/New space</option>
                <option value="occupied">Currently occupied</option>
                <option value="needs-demo">Needs demolition</option>
                <option value="partial-reno">Partial renovation needed</option>
              </SelectField>
              <Field label="Age of Space (years)" name="spaceAge" type="number" placeholder="e.g., 10" />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
                Existing Issues to Address
              </label>
              <textarea
                name="existingIssues"
                placeholder="e.g., water damage, uneven floors, outdated fixtures, poor lighting…"
                rows={3}
                className={inputBase}
                style={inputSty}
              />
            </div>

            <FormSection title="Design & Style Preferences" />
            <div className="mt-5">
              <SelectField label="Design Style" name="designStyle">
                <option value="">Select a style</option>
                <option value="modern">Modern/Contemporary</option>
                <option value="transitional">Transitional</option>
                <option value="traditional">Traditional/Classic</option>
                <option value="industrial">Industrial</option>
                <option value="minimalist">Minimalist</option>
                <option value="rustic">Rustic/Farmhouse</option>
                <option value="scandinavian">Scandinavian</option>
                <option value="luxe">Luxury/High-end</option>
                <option value="unsure">Not sure yet</option>
              </SelectField>
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
                Color Preferences
              </label>
              <input
                type="text"
                name="colorPreferences"
                placeholder="e.g., warm neutrals, bold accents, light and airy…"
                className={inputBase}
                style={inputSty}
              />
            </div>

            <FormSection title="Materials & Finishes" />
            <div className="mt-5">
              <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
                Preferred Materials
              </label>
              <textarea
                name="materials"
                placeholder="e.g., European oak hardwood, luxury vinyl plank, porcelain tile, granite, quartz, marble…"
                rows={3}
                className={inputBase}
                style={inputSty}
              />
            </div>
            <div className="mt-4">
              <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
                Finish Preferences
              </label>
              <textarea
                name="finishPreferences"
                placeholder="e.g., matte vs. glossy, brushed vs. polished, textured vs. smooth…"
                rows={2}
                className={inputBase}
                style={inputSty}
              />
            </div>

            <FormSection title="Additional Services & Requirements" />
            <div className="mt-5">
              <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967] block mb-3">
                Are any of these services needed?
              </label>
              <div className="space-y-3">
                {[
                  { id: "design",     label: "Design consultation" },
                  { id: "permits",    label: "Permit handling" },
                  { id: "removal",    label: "Existing material removal" },
                  { id: "disposal",   label: "Waste disposal" },
                  { id: "structural", label: "Structural work" },
                  { id: "electrical", label: "Electrical upgrades" },
                  { id: "plumbing",   label: "Plumbing work" },
                  { id: "hvac",       label: "HVAC/ventilation" },
                ].map((service) => (
                  <label key={service.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name={`service_${service.id}`}
                      className="h-4 w-4 rounded accent-[#B52E32]"
                    />
                    <span className="text-sm text-[#202321]">{service.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <FormSection title="Special Considerations" />
            <div className="mt-5">
              <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
                Any constraints or special needs?
              </label>
              <textarea
                name="specialConsiderations"
                placeholder="e.g., pets/allergies, accessibility requirements, noise restrictions…"
                rows={3}
                className={inputBase}
                style={inputSty}
              />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="hasChildren" className="h-4 w-4 rounded accent-[#B52E32]" />
                <span className="text-sm text-[#202321]">Young children in home</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" name="hasPets" className="h-4 w-4 rounded accent-[#B52E32]" />
                <span className="text-sm text-[#202321]">Pets in home</span>
              </label>
            </div>

            <FormSection title="Project Vision & Details" />
            <div className="mt-5">
              <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
                Describe your project vision
              </label>
              <textarea
                name="projectDescription"
                required
                rows={6}
                placeholder="What's your vision? What's the scope of work? Any specific inspirations, reference photos, or styles you love? What matters most to you? Tell us everything — the more detail, the better our quote…"
                className={inputBase}
                style={inputSty}
              />
            </div>

            {/* Brand Red submit */}
            <button
              type="submit"
              disabled={loading}
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5 disabled:opacity-60"
              style={{
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                boxShadow:
                  "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
              }}
            >
              {loading ? "Submitting…" : "Request Quote"}
              <Send size={16} />
            </button>

            <p className="mt-6 text-xs text-[#687967]">
              <FileText size={12} className="inline mr-1 text-[#B52E32]" />
              We'll review your request and send a detailed quote within one business day.
            </p>
          </form>
        </Reveal>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div
            className="relative overflow-hidden px-8 py-20 md:px-16"
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
            <div
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl"
              style={{ background: "rgba(181,46,50,0.12)" }}
            />
            <h2 className="relative max-w-2xl font-display text-4xl text-balance text-[#F5F0E6] md:text-5xl">
              Have questions? Call us anytime.
            </h2>
            <a
              href="tel:+12266006637"
              className="relative mt-8 inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
              style={{
                borderRadius: "9999px",
                background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                boxShadow:
                  "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.42), inset 0 1px 0 rgba(255,255,255,0.28)",
              }}
            >
              (226) 600-6637
            </a>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}

function Field({
  label, name, type = "text", placeholder, required = false,
}: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
        {label}
      </label>
      <input
        id={name} name={name} type={type} required={required} placeholder={placeholder}
        className={inputBase} style={inputSty}
      />
    </div>
  );
}

function SelectField({
  label, name, required = false, children,
}: {
  label: string; name: string; required?: boolean; children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
        {label}
      </label>
      <select
        id={name} name={name} required={required}
        className={`${inputBase} appearance-none`} style={inputSty}
      >
        {children}
      </select>
    </div>
  );
}
