import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { submitContact } from "@/lib/api/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sudcan Innovation Inc" },
      {
        name: "description",
        content:
          "Get a free renovation or flooring quote. Reach Sudcan by phone, email, or our online form. Based in Kitchener, ON.",
      },
      { property: "og:title", content: "Contact Sudcan" },
      {
        property: "og:description",
        content: "Tell us about your project — we respond within one business day.",
      },
    ],
  }),
  component: ContactPage,
});

const inputSty: React.CSSProperties = {
  borderRadius: "0.875rem",
  background: "#F5F0E6",
  border: "1px solid rgba(198,161,91,0.22)",
  boxShadow: "inset 0 2px 4px rgba(32,35,33,0.07), inset 0 1px 0 rgba(255,255,255,0.58)",
};
const inputCls =
  "mt-2 w-full px-4 py-3 text-sm text-[#202321] outline-none transition-all placeholder:text-[#687967]/60 focus:ring-4 focus:ring-[rgba(198,161,91,0.15)] focus:border-[#C6A15B]";

function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    try {
      await submitContact({
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        phone: (fd.get("phone") as string) || undefined,
        subject: (fd.get("subject") as string) || undefined,
        message: fd.get("message") as string,
      });
      toast.success("Message sent — we'll be in touch within one business day.");
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
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.05] text-balance text-[#202321] md:text-7xl">
              Get in <span className="italic text-[#C6A15B]">touch</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[#687967]">
              Questions about our services? Need project advice? Reach out and let's talk. We're here to help.
            </p>
          </Reveal>
          <div
            className="mt-8 h-px w-20"
            style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
          />
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="mx-auto max-w-7xl px-6 pb-28" style={{ background: "#F5F0E6" }}>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">

          {/* Contact form — clay card */}
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
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name"    name="name"    placeholder="Jane Doe"           required />
                <Field label="Email"   name="email"   type="email" placeholder="jane@example.com" required />
                <Field label="Phone"   name="phone"   placeholder="(226) 600-6637" />
                <Field label="Subject" name="subject" placeholder="Inquiry, partnership, etc." />
              </div>
              <div className="mt-5">
                <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us how we can help…"
                  className={inputCls}
                  style={inputSty}
                />
              </div>

              {/* Brand Red submit button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-7 inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 disabled:opacity-60"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 8px 20px -4px rgba(130,20,23,0.38), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                {loading ? "Sending…" : "Send message"}
                <Send size={14} />
              </button>

              <p className="mt-6 text-xs text-[#687967]">
                <strong>Ready to get a quote?</strong> Head to our{" "}
                <Link to="/quote" className="font-medium text-[#B52E32] hover:underline">
                  quote request form
                </Link>{" "}
                for a detailed estimate.
              </p>
            </form>
          </Reveal>

          {/* Info cards */}
          <Reveal delay={0.15}>
            <div className="flex h-full flex-col gap-5">
              {[
                { icon: Phone,  t: "Call us", v: "(226) 600-6637" },
                { icon: Mail,   t: "Email",   v: "sudcaninfo@gmail.com" },
                { icon: MapPin, t: "Visit",   v: "286 Driftwood Dr. Kitchener, ON N2N-1X6" },
                { icon: Clock,  t: "Hours",   v: "Mon–Fri 8:00–18:00 · Sat 9:00–14:00" },
              ].map((c) => (
                <div
                  key={c.t}
                  className="flex items-start gap-4 p-5 transition-all hover:-translate-y-0.5"
                  style={{
                    borderRadius: "1.25rem",
                    background: "#EDEADE",
                    boxShadow:
                      "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.62)",
                    border: "1px solid rgba(198,161,91,0.18)",
                  }}
                >
                  <div
                    className="grid h-11 w-11 flex-shrink-0 place-items-center text-[#B52E32]"
                    style={{
                      borderRadius: "0.875rem",
                      background: "rgba(181,46,50,0.12)",
                      border: "1px solid rgba(181,46,50,0.22)",
                    }}
                  >
                    <c.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#B52E32]">{c.t}</div>
                    <div className="mt-1 font-display text-lg text-[#202321]">{c.v}</div>
                  </div>
                </div>
              ))}

              {/* Social row */}
              <div
                className="flex gap-3 p-5"
                style={{
                  borderRadius: "1.25rem",
                  background: "#EDEADE",
                  boxShadow:
                    "0 2px 0 0 rgba(32,35,33,0.09), 0 8px 24px -4px rgba(32,35,33,0.12), inset 0 1px 0 rgba(255,255,255,0.62)",
                  border: "1px solid rgba(198,161,91,0.18)",
                }}
              >
                <span className="self-center mr-auto text-xs uppercase tracking-[0.2em] text-[#687967]">
                  Follow us
                </span>
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="grid h-10 w-10 place-items-center text-[#687967] transition-all hover:-translate-y-0.5 hover:text-[#B52E32]"
                    style={{
                      borderRadius: "9999px",
                      background: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(181,46,50,0.22)",
                      boxShadow:
                        "0 1px 0 0 rgba(32,35,33,0.07), inset 0 1px 0 rgba(255,255,255,0.68)",
                    }}
                    aria-label="Social"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "1.5rem",
              boxShadow:
                "0 4px 0 0 rgba(32,35,33,0.12), 0 14px 36px -8px rgba(32,35,33,0.16), inset 0 1px 0 rgba(255,255,255,0.18)",
              border: "1px solid rgba(198,161,91,0.20)",
            }}
          >
            <iframe
              title="Sudcan location"
              src="https://www.google.com/maps?q=Kitchener,ON&output=embed"
              width="100%"
              height="460"
              loading="lazy"
              style={{ border: 0, display: "block", filter: "grayscale(0.4) contrast(1.05) sepia(0.10)" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {/* ── CTA — Deep Olive bg · Cream text · Red button ── */}
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
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="relative max-w-2xl font-display text-4xl text-balance text-[#F5F0E6] md:text-5xl">
                  Ready for your quote?
                </h2>
                <p className="relative mt-3 text-[#687967]">
                  Get detailed, itemized estimates for your project.
                </p>
              </div>
              <Link
                to="/quote"
                className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                style={{
                  borderRadius: "9999px",
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 10px 28px -6px rgba(130,20,23,0.45), inset 0 1px 0 rgba(255,255,255,0.28)",
                }}
              >
                Get a Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-[0.15em] text-[#687967]">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputCls}
        style={inputSty}
      />
    </div>
  );
}
