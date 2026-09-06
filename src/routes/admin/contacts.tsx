import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, Trash2, Eye, ChevronDown } from "lucide-react";
import { getContacts, updateContactStatus, deleteContact } from "@/lib/api/contact";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { formatDate } from "@/lib/admin-utils";

export const Route = createFileRoute("/admin/contacts")({
  beforeLoad: () => {
    if (typeof document !== "undefined") {
      const authed = document.cookie.includes("admin_authed=1");
      if (!authed) throw redirect({ to: "/admin/login" });
    }
  },
  loader: async () => {
    const contacts = await getContacts();
    return { contacts };
  },
  component: ContactsPage,
});

function ContactsPage() {
  const { contacts } = Route.useLoaderData();
  const router = useRouter();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filtered =
    statusFilter === "all" ? contacts : contacts.filter((c) => c.status === statusFilter);

  async function handleStatusChange(id: string, status: "new" | "read" | "replied") {
    await updateContactStatus({ data: { id, status } });
    router.invalidate();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this contact message? This cannot be undone.")) return;
    await deleteContact({ data: { id } });
    router.invalidate();
  }

  return (
    <AdminShell title="Contact Messages">
      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {["all", "new", "read", "replied"].map((s) => (
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
          <div className="py-16 text-center text-sm text-gray-400">No contact messages found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400">Name</th>
                <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400 md:table-cell">Subject</th>
                <th className="hidden px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400 lg:table-cell">Date</th>
                <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-widest text-gray-400">Status</th>
                <th className="px-5 py-3.5 text-right text-xs font-semibold uppercase tracking-widest text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((c) => (
                <>
                  <tr
                    key={c._id}
                    className={`transition hover:bg-gray-50 ${c.status === "new" ? "bg-red-50/40" : ""}`}
                  >
                    <td className="px-5 py-4">
                      <div className="font-medium text-gray-900">{c.name}</div>
                      <div className="text-xs text-gray-400">{c.email}</div>
                    </td>
                    <td className="hidden px-5 py-4 text-gray-600 md:table-cell">
                      {c.subject || "General Inquiry"}
                    </td>
                    <td className="hidden px-5 py-4 text-gray-400 lg:table-cell">
                      {formatDate(c.createdAt)}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={c.status} />
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setExpanded(expanded === c._id ? null : c._id)}
                          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                          title="View details"
                        >
                          <Eye size={15} />
                        </button>
                        <a
                          href={`mailto:${c.email}`}
                          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                          title="Send email"
                        >
                          <Mail size={15} />
                        </a>
                        {c.phone && (
                          <a
                            href={`tel:${c.phone}`}
                            className="rounded-lg p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                            title="Call"
                          >
                            <Phone size={15} />
                          </a>
                        )}
                        <select
                          value={c.status}
                          onChange={(e) =>
                            handleStatusChange(c._id, e.target.value as "new" | "read" | "replied")
                          }
                          className="rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 outline-none focus:border-gray-400"
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                        </select>
                        <button
                          onClick={() => handleDelete(c._id)}
                          className="rounded-lg p-1.5 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                          title="Delete"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expanded === c._id && (
                    <tr key={`${c._id}-expanded`} className="bg-gray-50">
                      <td colSpan={5} className="px-5 py-5">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div>
                            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Contact Details</div>
                            <div className="space-y-1 text-sm text-gray-700">
                              <div><span className="text-gray-400">Name:</span> {c.name}</div>
                              <div><span className="text-gray-400">Email:</span> <a href={`mailto:${c.email}`} className="text-red-600 hover:underline">{c.email}</a></div>
                              {c.phone && <div><span className="text-gray-400">Phone:</span> <a href={`tel:${c.phone}`} className="text-red-600 hover:underline">{c.phone}</a></div>}
                              <div><span className="text-gray-400">Subject:</span> {c.subject || "General Inquiry"}</div>
                              <div><span className="text-gray-400">Received:</span> {formatDate(c.createdAt)}</div>
                            </div>
                          </div>
                          <div>
                            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-400">Message</div>
                            <p className="whitespace-pre-wrap rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-700 leading-relaxed">
                              {c.message}
                            </p>
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
