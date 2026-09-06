import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { formatDate, formatProjectType } from "@/lib/admin-utils";

interface Row {
  id: string;
  name: string;
  email: string;
  subject: string;
  status: string;
  date: string;
}

export function RecentTable({
  rows,
  viewAllHref,
  type,
}: {
  rows: Row[];
  viewAllHref: string;
  type: "contact" | "quote";
}) {
  return (
    <div
      className="overflow-hidden"
      style={{
        borderRadius: "1.25rem",
        background: "#FFFDF8",
        boxShadow:
          "0 2px 0 0 rgba(32,35,33,0.08), 0 8px 24px -4px rgba(32,35,33,0.11), inset 0 1px 0 rgba(255,255,255,0.68)",
        border: "1px solid rgba(198,161,91,0.20)",
      }}
    >
      {rows.length === 0 ? (
        <div className="py-10 text-center text-sm text-[#687967]">No records yet.</div>
      ) : (
        <>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(198,161,91,0.18)", background: "rgba(198,161,91,0.06)" }}>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#687967]">
                  Name
                </th>
                <th className="hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#687967] md:table-cell">
                  {type === "contact" ? "Subject" : "Project"}
                </th>
                <th className="hidden px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#687967] lg:table-cell">
                  Date
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[#687967]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className="transition"
                  style={{ borderBottom: "1px solid rgba(198,161,91,0.10)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(198,161,91,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                  }}
                >
                  <td className="px-5 py-3.5">
                    <div className="font-medium text-[#202321]">{row.name}</div>
                    <div className="text-xs text-[#687967]">{row.email}</div>
                  </td>
                  <td className="hidden px-5 py-3.5 text-[#35483A] md:table-cell">
                    {type === "quote" ? formatProjectType(row.subject) : row.subject}
                  </td>
                  <td className="hidden px-5 py-3.5 text-[#687967] lg:table-cell">
                    {formatDate(row.date)}
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={row.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className="px-5 py-3"
            style={{ borderTop: "1px solid rgba(198,161,91,0.15)" }}
          >
            <Link
              to={viewAllHref}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B52E32] hover:text-[#8f2125] transition-colors"
            >
              View all
              <ArrowRight size={12} />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
