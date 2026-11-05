// Client-side API helpers — call Vercel serverless functions via fetch

export async function submitContact(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ success: boolean; id: string }>;
}

export async function getContacts() {
  const res = await fetch("/api/contacts");
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<ContactRecord[]>;
}

export async function updateContactStatus(opts: { data: { id: string; status: "new" | "read" | "replied" } }) {
  const res = await fetch("/api/contacts", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opts.data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ success: boolean }>;
}

export async function deleteContact(opts: { data: { id: string } }) {
  const res = await fetch("/api/contacts", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opts.data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ success: boolean }>;
}

export interface ContactRecord {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: string;
  updatedAt: string;
}
