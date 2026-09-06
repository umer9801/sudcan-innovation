import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { verifyAdminLogin } from "../../lib/api/admin";
import logo from "@/assets/log.jpeg";

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
});

const inputSty: React.CSSProperties = {
  borderRadius: "0.875rem",
  background: "#F5F0E6",
  border: "1px solid rgba(198,161,91,0.25)",
  boxShadow: "inset 0 2px 4px rgba(32,35,33,0.07), inset 0 1px 0 rgba(255,255,255,0.55)",
};

function AdminLogin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const fd = new FormData(e.target as HTMLFormElement);
    const username = fd.get("username") as string;
    const password = fd.get("password") as string;
    try {
      const result = await verifyAdminLogin({ data: { username, password } });
      if (result.success) {
        const expires = new Date(Date.now() + 8 * 60 * 60 * 1000).toUTCString();
        document.cookie = `admin_authed=1; path=/; expires=${expires}; SameSite=Strict`;
        navigate({ to: "/admin" });
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center px-4"
      style={{ background: "#F5F0E6" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <img
            src={logo}
            alt="Sudcan Innovation Inc"
            className="h-10 w-10 rounded-lg object-cover"
            style={{ boxShadow: "0 3px 10px rgba(32,35,33,0.28)" }}
          />
          <div>
            <div className="font-display text-lg font-medium text-[#202321]">
              Sudcan Innovation
            </div>
            <div className="text-xs uppercase tracking-widest text-[#687967]">
              Admin Panel
            </div>
          </div>
        </div>

        {/* Card */}
        <div
          className="p-8"
          style={{
            borderRadius: "1.5rem",
            background: "#FFFDF8",
            boxShadow:
              "0 4px 0 0 rgba(32,35,33,0.10), 0 14px 36px -8px rgba(32,35,33,0.14), inset 0 1px 0 rgba(255,255,255,0.70)",
            border: "1px solid rgba(198,161,91,0.22)",
          }}
        >
          {/* Brass top accent */}
          <div
            className="mb-6 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(198,161,91,0.55), transparent)",
            }}
          />

          <h1 className="mb-1 text-xl font-semibold text-[#202321]" style={{ fontFamily: "var(--font-display)" }}>
            Sign in
          </h1>
          <p className="mb-6 text-sm text-[#687967]">Access the admin dashboard</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-widest text-[#687967] mb-1.5">
                Username
              </label>
              <input
                name="username"
                type="text"
                required
                autoComplete="username"
                className="w-full px-4 py-3 text-sm text-[#202321] outline-none transition placeholder:text-[#687967]/50 focus:ring-4 focus:ring-[rgba(198,161,91,0.15)] focus:border-[#C6A15B]"
                style={inputSty}
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-widest text-[#687967] mb-1.5">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full px-4 py-3 text-sm text-[#202321] outline-none transition placeholder:text-[#687967]/50 focus:ring-4 focus:ring-[rgba(198,161,91,0.15)] focus:border-[#C6A15B]"
                style={inputSty}
              />
            </div>

            {error && (
              <p
                className="rounded-xl px-4 py-3 text-sm"
                style={{
                  background: "rgba(181,46,50,0.10)",
                  color: "#8f2125",
                  border: "1px solid rgba(181,46,50,0.22)",
                }}
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #B52E32 0%, #8f2125 100%)",
                boxShadow:
                  "0 3px 0 0 rgba(130,20,23,0.70), 0 8px 20px -4px rgba(130,20,23,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-[#687967]">
          Sudcan Innovation Inc — Admin Portal
        </p>
      </div>
    </div>
  );
}
