import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

function parseBody(req: VercelRequest): unknown {
  if (!req.body) return {};
  if (typeof req.body === "string") { try { return JSON.parse(req.body); } catch { return {}; } }
  return req.body;
}

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const parsed = loginSchema.parse(parseBody(req));

    const validUser = process.env["ADMIN_USERNAME"] ?? "sudcan_admin";
    const validPass = process.env["ADMIN_PASSWORD"] ?? "Sudcan@Admin2024";

    if (parsed.username === validUser && parsed.password === validPass) {
      return res.status(200).json({ success: true });
    }
    return res.status(200).json({ success: false });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.errors });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
}
