import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/log.jpeg";

export function Footer() {
  return (
    <footer className="mt-32" style={{ background: "#35483A" }}>
      {/* Brass top accent line */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #C6A15B 30%, #C6A15B 70%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Sudcan Innovation Inc"
                className="h-12 w-12 rounded-xl object-cover"
                style={{ boxShadow: "0 4px 12px rgba(32,35,33,0.5)" }}
              />
              <span className="font-display text-2xl text-[#F5F0E6]">
                Sudcan Innovation Inc
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#687967]">
              Premium renovation and flooring craftsmanship for residential and
              commercial projects. Built on precision, delivered with style.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full text-[#687967] transition-all hover:-translate-y-0.5 hover:text-[#C6A15B]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(198,161,91,0.25)",
                    boxShadow: "0 2px 8px rgba(32,35,33,0.25), inset 0 1px 0 rgba(255,255,255,0.07)",
                  }}
                  aria-label="Social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="font-display text-lg text-[#F5F0E6]">Explore</h4>
            <div
              className="mt-2 mb-4 h-px w-8"
              style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
            />
            <ul className="space-y-2 text-sm text-[#687967]">
              {[
                { to: "/",        label: "Home" },
                { to: "/about",   label: "About" },
                { to: "/services",label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1.5 text-[#F5F0E6]/70 transition-colors hover:text-[#C6A15B]"
                  >
                    <span
                      className="h-px w-3 transition-all group-hover:w-5"
                      style={{ background: "#C6A15B", opacity: 0.5 }}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display text-lg text-[#F5F0E6]">Get in touch</h4>
            <div
              className="mt-2 mb-4 h-px w-8"
              style={{ background: "linear-gradient(90deg, #C6A15B, transparent)" }}
            />
            <ul className="space-y-3 text-sm text-[#F5F0E6]/70">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0 text-[#C6A15B]" />
                286 Driftwood Dr. Kitchener, ON N2N-1X6
              </li>
              <li className="flex items-start gap-2">
                <Phone size={14} className="mt-1 flex-shrink-0 text-[#C6A15B]" />
                (226) 600-6637
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="mt-1 flex-shrink-0 text-[#C6A15B]" />
                sudcaninfo@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 flex flex-col items-start justify-between gap-3 pt-6 text-xs text-[#687967] md:flex-row md:items-center"
          style={{ borderTop: "1px solid rgba(198,161,91,0.22)" }}
        >
          <p className="text-[#F5F0E6]/50">
            © {new Date().getFullYear()} Sudcan Innovation Inc. All rights reserved.
          </p>
          <p>
            Designed by{" "}
            <a
              href="https://www.solvixcore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#C6A15B] hover:underline"
            >
              Solvix Core
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
