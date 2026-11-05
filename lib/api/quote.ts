// Client-side API helpers — call Vercel serverless functions via fetch

export async function submitQuote(opts: { data: QuoteInput }) {
  const res = await fetch("/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opts.data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ success: boolean; id: string }>;
}

export async function getQuotes() {
  const res = await fetch("/api/quotes");
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<QuoteRecord[]>;
}

export async function updateQuoteStatus(opts: {
  data: { id: string; status: "new" | "reviewed" | "quoted" | "accepted" | "declined" };
}) {
  const res = await fetch("/api/quotes", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opts.data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ success: boolean }>;
}

export async function deleteQuote(opts: { data: { id: string } }) {
  const res = await fetch("/api/quotes", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opts.data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ success: boolean }>;
}

export interface QuoteInput {
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  projectType: string;
  propertyType: string;
  squareFootage?: number;
  budgetRange?: string;
  timeline?: string;
  condition?: string;
  currentState?: string;
  spaceAge?: number;
  existingIssues?: string;
  designStyle?: string;
  colorPreferences?: string;
  materials?: string;
  finishPreferences?: string;
  services: string[];
  specialConsiderations?: string;
  hasChildren: boolean;
  hasPets: boolean;
  projectDescription: string;
}

export interface QuoteRecord extends QuoteInput {
  _id: string;
  status: "new" | "reviewed" | "quoted" | "accepted" | "declined";
  createdAt: string;
  updatedAt: string;
}
