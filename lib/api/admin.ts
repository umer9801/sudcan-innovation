// Client-side API helper — call Vercel serverless function via fetch

export async function verifyAdminLogin(opts: { data: { username: string; password: string } }) {
  const res = await fetch("/api/admin-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opts.data),
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<{ success: boolean }>;
}
