import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/assets/log.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "py-2 shadow-[0_4px_24px_-8px_rgba(32,35,33,0.45)]"
          : "py-3",
      )}
      style={{ background: "#35483A" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <div
            className="overflow-hidden"
            style={{
              borderRadius: "0.75rem",
              boxShadow: "0 2px 8px rgba(32,35,33,0.4)",
            }}
          >
            <img
              src={logo}
              alt="Sudcan Innovation Inc"
              className="h-11 w-11 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <span className="font-display text-lg leading-none tracking-tight text-[#F5F0E6]">
            Sudcan
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#687967]">
              Innovation Inc
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-[#F5F0E6]/75 transition-colors hover:text-[#F5F0E6]"
              activeProps={{ className: "text-[#F5F0E6]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{
                        background: "rgba(198,161,91,0.18)",
                        border: "1px solid rgba(198,161,91,0.38)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </Link>
          ))}

          {/* Brand Red CTA */}
          <Link
            to="/quote"
            className="ml-3 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
              boxShadow:
                "0 3px 0 0 rgba(130,20,23,0.75), 0 8px 20px -4px rgba(130,20,23,0.38), inset 0 1px 0 rgba(255,255,255,0.30)",
            }}
            // Hover via onMouseEnter/Leave for brass swap
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, #C6A15B 0%, #a8843e 100%)";
              (e.currentTarget as HTMLElement).style.color = "#202321";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 3px 0 0 rgba(160,120,45,0.75), 0 8px 20px -4px rgba(160,120,45,0.38), inset 0 1px 0 rgba(255,255,255,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)";
              (e.currentTarget as HTMLElement).style.color = "white";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 3px 0 0 rgba(130,20,23,0.75), 0 8px 20px -4px rgba(130,20,23,0.38), inset 0 1px 0 rgba(255,255,255,0.30)";
            }}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full text-[#F5F0E6] md:hidden"
          style={{
            background: "rgba(198,161,91,0.14)",
            border: "1px solid rgba(198,161,91,0.38)",
          }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "x" : "m"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mt-2 overflow-hidden p-4 md:hidden"
            style={{
              borderRadius: "1.25rem",
              background: "#2C3C30",
              boxShadow:
                "0 4px 0 0 rgba(32,35,33,0.5), 0 16px 40px -8px rgba(32,35,33,0.5), inset 0 1px 0 rgba(255,255,255,0.09)",
              border: "1px solid rgba(198,161,91,0.22)",
            }}
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-xl px-4 py-3 text-base font-medium text-[#F5F0E6]/80 transition-colors hover:bg-[#C6A15B]/15 hover:text-[#F5F0E6]"
                  activeProps={{
                    className:
                      "rounded-xl px-4 py-3 text-base font-medium bg-[#C6A15B]/20 text-[#F5F0E6] border border-[#C6A15B]/32",
                  }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/quote"
                className="mt-2 rounded-xl px-4 py-3 text-center text-base font-medium text-white"
                style={{
                  background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                  boxShadow:
                    "0 3px 0 0 rgba(130,20,23,0.75), 0 8px 20px -4px rgba(130,20,23,0.38), inset 0 1px 0 rgba(255,255,255,0.30)",
                }}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
