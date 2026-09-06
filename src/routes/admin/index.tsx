import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import {
  BarChart3,
  FileText,
  MessageSquare,
  TrendingUp,
  Users,
} from "lucide-react";
import { getContacts } from "@/lib/api/contact";
import { getQuotes } from "@/lib/api/quote";
import { AdminShell } from "@/components/admin/AdminShell";
import { StatCard } from "@/components/admin/StatCard";
import { RecentTable } from "@/components/admin/RecentTable";

export const Route = createFileRoute("/admin/")({
  beforeLoad: ({ context }) => {
    // Simple session check via cookie
    if (typeof document !== "undefined") {
      const authed = document.cookie.includes("admin_authed=1");
      if (!authed) throw redirect({ to: "/admin/login" });
    }
  },
  loader: async () => {
    const [contacts, quotes] = await Promise.all([getContacts(), getQuotes()]);
    return { contacts, quotes };
  },
  component: AdminDashboard,
});

function AdminDashboard() {
  const { contacts, quotes } = Route.useLoaderData();

  const newContacts = contacts.filter((c) => c.status === "new").length;
  const newQuotes = quotes.filter((q) => q.status === "new").length;
  const totalLeads = contacts.length + quotes.length;

  // Last 7 days
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const recentLeads = [...contacts, ...quotes].filter(
    (item) => new Date(item.createdAt) > sevenDaysAgo,
  ).length;

  const recentContacts = contacts.slice(0, 5);
  const recentQuotes = quotes.slice(0, 5);

  return (
    <AdminShell title="Dashboard">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={Users}
          label="Total Leads"
          value={totalLeads}
          sub="All time"
          color="blue"
        />
        <StatCard
          icon={MessageSquare}
          label="New Messages"
          value={newContacts}
          sub="Unread contacts"
          color="red"
        />
        <StatCard
          icon={FileText}
          label="New Quotes"
          value={newQuotes}
          sub="Pending review"
          color="green"
        />
        <StatCard
          icon={TrendingUp}
          label="Recent Activity"
          value={recentLeads}
          sub="Last 7 days"
          color="purple"
        />
      </div>

      {/* Recent contacts */}
      <div className="mt-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Recent Contact Messages
        </h2>
        <RecentTable
          rows={recentContacts.map((c) => ({
            id: c._id,
            name: c.name,
            email: c.email,
            subject: c.subject || "General Inquiry",
            status: c.status,
            date: c.createdAt,
          }))}
          viewAllHref="/admin/contacts"
          type="contact"
        />
      </div>

      {/* Recent quotes */}
      <div className="mt-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Recent Quote Requests
        </h2>
        <RecentTable
          rows={recentQuotes.map((q) => ({
            id: q._id,
            name: q.fullName,
            email: q.email,
            subject: q.projectType,
            status: q.status,
            date: q.createdAt,
          }))}
          viewAllHref="/admin/quotes"
          type="quote"
        />
      </div>
    </AdminShell>
  );
}
