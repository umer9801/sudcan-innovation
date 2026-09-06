import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, Mail, Phone, Trash2 } from "lucide-react";
import { deleteQuote, getQuotes, updateQuoteStatus, type QuoteRecord } from "../../lib/api/quote";
import { AdminShell } from "../../components/admin/AdminShell";
import { StatusBadge } from "../../components/admin/StatusBadge";
import { formatBudget, formatDate, formatProjectType } from "../../lib/admin-utils";

export const Route = createFileRoute("/admin/quotes")({
  beforeLoad: () => {
    if (typeof document !== "undefined") {
      const authed = document.cookie.includes("admin_authed=1");
      if (!authed) throw redirect({ to: "/admin/login" });
    }
  },
  loader: async () => {
    const quotes = await getQuotes();
    return { quotes };
  },
  component: QuotesPage,
});

function QuotesPage() {
  const { quotes } = Route.useLoaderData() as { quotes: QuoteRecord[] };
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered =
    statusFilter === "all" ? quotes : quotes.filter((q) => q.status === statusFilter);

  async function handleStatusChange(
    id: string,
    status: "new" | "reviewed" | "quoted" | "accepted" | "declined",
  ) {
    await updateQuoteStatus({ data: { id, status } });
    router.invalidate();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this quote request? This cannot be undone.")) return;
    await deleteQuote({ data: { id } });
    router.invalidate();
  }

  return (
    <AdminShell title="Quote Requests">
      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {["all", "new", "reviewed", "quoted", "accepted", "declined"].map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition ${
              statusFilter === s
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {s}
          </button>
        ))}
        <span className="ml-auto text-sm text-gray-400">{filtered.length} records</span>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm text-gray-400">No quote requests found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400">Client</th>
                <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400 md:table-cell">Project</th>
                <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400 lg:table-cell">Budget</th>
                <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400 lg:table-cell">Date</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400">Status</th>
                <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-widest text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((q) => (
                <>
                  <tr
                    key={q._id}
                    className={`transition hover:bg-gray-50 ${q.status === "new" ? "bg-red-50/40" : ""}`}
                  >
                    <td className="px-5 py-4">
                      <div className="font-medium text-gray-900">{q.fullName}</div>
                      <div className="text-xs text-gray-400">{q.email}</div>
                    </td>
                    <td className="hidden px-5 py-4 text-gray-600 md:table-cell">
                      {formatProjectType(q.projectType)}
                      {q.city && <div className="text-xs text-gray-400">{q.city}</div>}
                    </td>
                    <td className="hidden px-5 py-4 text-gray-600 lg:table-cell">
                      {formatBudget(q.budgetRange)}
                    </td>
                    <td className="hidden px-5 py-4 text-gray-400 lg:table-cell">
                      {formatDate(q.createdAt)}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={q.status} />
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setExpanded(expanded === q._id ? null : q._id)}
                          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                          title="View details"
                        >
                          <Eye size={15} />
                        </button>
                        <a
                          href={`mailto:${q.email}`}
                          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                          title="Send email"
                        >
                          <Mail size={15} />
                        </a>
                        <a
                          href={`tel:${q.phone}`}
                          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                          title="Call"
                        >
                          <Phone size={15} />
                        </a>
                        <select
                          value={q.status}
                          onChange={(e) =>
                            handleStatusChange(
                              q._id,
                              e.target.value as
                                | "new"
                                | "reviewed"
                                | "quoted"
                                | "accepted"
                                | "declined",
                            )
                          }
                          className="rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 outline-none focus:border-gray-400"
                        >
                          <option value="new">New</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="quoted">Quoted</option>
                          <option value="accepted">Accepted</option>
                          <option value="declined">Declined</option>
                        </select>
                        <button
                          onClick={() => handleDelete(q._id)}
                          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                          title="Delete"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expanded === q._id && (
                    <tr key={`${q._id}-expanded`} className="bg-gray-50">
                      <td colSpan={6} className="px-5 py-5">
                        <div className="grid gap-6 md:grid-cols-3">
                          {/* Client info */}
                          <div>
                            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                              Client
                            </div>
                            <div className="space-y-1.5 text-sm text-gray-700">
                              <div>
                                <span className="text-gray-400">Name:</span> {q.fullName}
                              </div>
                              <div>
                                <span className="text-gray-400">Email:</span>{" "}
                                <a href={`mailto:${q.email}`} className="text-red-600 hover:underline">
                                  {q.email}
                                </a>
                              </div>
                              <div>
                                <span className="text-gray-400">Phone:</span>{" "}
                                <a href={`tel:${q.phone}`} className="text-red-600 hover:underline">
                                  {q.phone}
                                </a>
                              </div>
                              {q.city && (
                                <div>
                                  <span className="text-gray-400">City:</span> {q.city}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Project info */}
                          <div>
                            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                              Project Details
                            </div>
                            <div className="space-y-1.5 text-sm text-gray-700">
                              <div>
                                <span className="text-gray-400">Type:</span>{" "}
                                {formatProjectType(q.projectType)}
                              </div>
                              <div>
                                <span className="text-gray-400">Property:</span> {q.propertyType}
                              </div>
                              {q.squareFootage != null && (
                                <div>
                                  <span className="text-gray-400">Sq Ft:</span>{" "}
                                  {q.squareFootage.toLocaleString()}
                                </div>
                              )}
                              {q.budgetRange && (
                                <div>
                                  <span className="text-gray-400">Budget:</span>{" "}
                                  {formatBudget(q.budgetRange)}
                                </div>
                              )}
                              {q.timeline && (
                                <div>
                                  <span className="text-gray-400">Timeline:</span> {q.timeline}
                                </div>
                              )}
                              {q.designStyle && (
                                <div>
                                  <span className="text-gray-400">Style:</span> {q.designStyle}
                                </div>
                              )}
                              {q.services && q.services.length > 0 && (
                                <div>
                                  <span className="text-gray-400">Services:</span>{" "}
                                  {q.services.join(", ")}
                                </div>
                              )}
                              {q.hasChildren && (
                                <div className="text-gray-500">Has young children</div>
                              )}
                              {q.hasPets && <div className="text-gray-500">Has pets</div>}
                            </div>
                          </div>

                          {/* Vision */}
                          <div>
                            <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                              Project Vision
                            </div>
                            <p className="whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-4 text-sm leading-relaxed text-gray-700">
                              {q.projectDescription}
                            </p>
                            {q.existingIssues && (
                              <div className="mt-3">
                                <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                  Existing Issues
                                </div>
                                <p className="text-sm text-gray-600">{q.existingIssues}</p>
                              </div>
                            )}
                            {q.specialConsiderations && (
                              <div className="mt-3">
                                <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                  Special Considerations
                                </div>
                                <p className="text-sm text-gray-600">{q.specialConsiderations}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </AdminShell>
  );
}
