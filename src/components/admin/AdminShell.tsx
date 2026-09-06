import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { BarChart3, FileText, LogOut, MessageSquare, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/log.jpeg";

const navItems = [
  { to: "/admin",          label: "Dashboard", icon: BarChart3,     exact: true },
  { to: "/admin/contacts", label: "Contacts",  icon: MessageSquare, exact: false },
  { to: "/admin/quotes",   label: "Quotes",    icon: FileText,      exact: false },
];

export function AdminShell({ children, title }: { children: ReactNode; title: string }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleLogout() {
    document.cookie = "admin_authed=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    navigate({ to: "/admin/login" });
  }

  const Sidebar = () => (
    <aside
      className="flex h-full w-60 flex-col"
      style={{
        background: "#35483A",
        borderRight: "1px solid rgba(198,161,91,0.18)",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center gap-3 px-6 py-5"
        style={{ borderBottom: "1px solid rgba(198,161,91,0.16)" }}
      >
        <img src={logo} alt="Sudcan Innovation Inc" className="h-9 w-9 rounded-lg object-cover" />
        <div>
          <div className="text-sm font-semibold text-[#F5F0E6]">Sudcan Admin</div>
          <div className="text-xs text-[#687967]">Management Panel</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4">
        <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-widest text-[#687967]">
          Navigation
        </div>
        {navItems.map((item) => {
          const isActive = item.exact
            ? location.pathname === item.to
            : location.pathname.startsWith(item.to) && item.to !== "/admin";
          const exactActive = item.exact && location.pathname === item.to;
          const active = item.exact ? exactActive : isActive;

          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setSidebarOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition mb-0.5"
              style={
                active
                  ? {
                      background: "rgba(181,46,50,0.18)",
                      color: "#F5F0E6",
                      border: "1px solid rgba(181,46,50,0.30)",
                    }
                  : {
                      color: "#A8B2A0",
                      border: "1px solid transparent",
                    }
              }
            >
              <item.icon
                size={16}
                style={{ color: active ? "#B52E32" : "#687967" }}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        className="px-3 py-4"
        style={{ borderTop: "1px solid rgba(198,161,91,0.16)" }}
      >
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#687967] transition hover:bg-[rgba(181,46,50,0.14)] hover:text-[#F5F0E6]"
        >
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    </aside>
  );

  return (
    <div
      className="flex h-screen overflow-hidden font-sans"
      style={{ background: "#F5F0E6" }}
    >
      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-6 py-4"
          style={{
            background: "#FFFDF8",
            borderBottom: "1px solid rgba(198,161,91,0.20)",
          }}
        >
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-1.5 text-[#687967] transition hover:bg-[#EDE7D6] lg:hidden"
            >
              <Menu size={18} />
            </button>
            <h1 className="text-lg font-semibold text-[#202321]">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              target="_blank"
              className="rounded-lg px-3 py-1.5 text-xs font-medium text-[#687967] transition hover:bg-[#EDE7D6]"
              style={{ border: "1px solid rgba(198,161,91,0.28)" }}
            >
              View Site
            </Link>
          </div>
        </header>

        {/* Page content */}
        <main
          className="flex-1 overflow-y-auto px-6 py-8"
          style={{ background: "#F5F0E6" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
