import type { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import { z } from "zod";

function parseBody(req: VercelRequest): unknown {
  if (!req.body) return {};
  if (typeof req.body === "string") { try { return JSON.parse(req.body); } catch { return {}; } }
  return req.body;
}

// ── DB ───────────────────────────────────────────────────────────────────────
const MONGODB_URI = process.env["MONGODB_URI"] ?? "mongodb+srv://sudcan:sudcan1@cluster0.6zdjb3k.mongodb.net/?appName=Cluster0";
let cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = { conn: null, promise: null };
async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) cached.promise = mongoose.connect(MONGODB_URI, { dbName: process.env["MONGODB_DB"] ?? "sudcan", bufferCommands: false });
  cached.conn = await cached.promise;
  return cached.conn;
}

const ContactSchema = new mongoose.Schema(
  { name: { type: String, required: true, trim: true }, email: { type: String, required: true, trim: true, lowercase: true }, phone: { type: String, trim: true }, subject: { type: String, trim: true }, message: { type: String, required: true }, status: { type: String, enum: ["new", "read", "replied"], default: "new" } },
  { timestamps: true },
);
const Contact = mongoose.models["Contact"] ?? mongoose.model("Contact", ContactSchema);

// ── Email ────────────────────────────────────────────────────────────────────
const SENDER_EMAIL = process.env["SMTP_USER"] ?? "info@solvixcore.com";
const SENDER_PASS = process.env["SMTP_PASS"] ?? "";
const OWNER_EMAIL = process.env["OWNER_EMAIL"] ?? "sudcaninfo@gmail.com";
const REPLY_TO = process.env["REPLY_TO_EMAIL"] ?? "sudcaninfo@gmail.com";
const brandRed = "#c0392b";
const brandGreen = "#27ae60";
const brandDark = "#1a2e1a";

function createTransporter() {
  return nodemailer.createTransport({ host: process.env["SMTP_HOST"] ?? "smtp.hostinger.com", port: Number(process.env["SMTP_PORT"] ?? 465), secure: true, auth: { user: SENDER_EMAIL, pass: SENDER_PASS } });
}

function badge(text: string, color: string) {
  return `<span style="display:inline-block;background:${color};color:#fff;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;padding:4px 12px;border-radius:20px;">${text}</span>`;
}

function row(label: string, value: string | undefined | null) {
  if (!value) return "";
  return `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;width:40%;font-size:13px;color:#666;font-weight:500;">${label}</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-size:13px;color:#1a2e1a;">${value}</td></tr>`;
}

function baseTemplate(content: string) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>Sudcan Innovation Inc</title></head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:'Inter',Arial,sans-serif;color:#1a2e1a;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:40px 0;"><tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
<tr><td style="background:${brandDark};padding:32px 40px;">
  <table cellpadding="0" cellspacing="0"><tr>
    <td style="background:${brandRed};width:40px;height:40px;border-radius:8px;text-align:center;vertical-align:middle;"><span style="color:#fff;font-size:20px;font-weight:700;font-family:Georgia,serif;">S</span></td>
    <td style="padding-left:12px;"><div style="color:#fff;font-size:18px;font-family:Georgia,serif;font-weight:500;line-height:1.2;">Sudcan Innovation Inc</div><div style="color:rgba(255,255,255,0.5);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;">Premium Renovation &amp; Flooring</div></td>
  </tr></table>
</td></tr>
<tr><td style="padding:40px;">${content}</td></tr>
<tr><td style="background:#f5f5f0;padding:24px 40px;border-top:1px solid #e8e8e0;">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td style="font-size:12px;color:#666;line-height:1.6;">
    <strong style="color:${brandDark};">Sudcan Innovation Inc</strong><br/>
    286 Driftwood Dr. Kitchener, ON N2N-1X6<br/>
    <a href="tel:+12266006637" style="color:${brandRed};text-decoration:none;">(226) 600-6637</a> &nbsp;|&nbsp;
    <a href="mailto:sudcaninfo@gmail.com" style="color:${brandRed};text-decoration:none;">sudcaninfo@gmail.com</a>
  </td></tr></table>
</td></tr>
</table></td></tr></table></body></html>`;
}

// ── Validation ───────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1),
});

// ── Handler ──────────────────────────────────────────────────────────────────
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = parseBody(req);
    const parsed = contactSchema.parse(body);
    await connectDB();
    const doc = await Contact.create(parsed);

    try {
      const transporter = createTransporter();

      const userContent = `
        <div style="margin-bottom:24px;">${badge("Message Received", brandGreen)}</div>
        <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:500;color:#1a2e1a;margin:0 0 8px;">Thank you, ${parsed.name}.</h1>
        <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 28px;">We've received your message and will get back to you within one business day. Here's a copy of what you sent:</p>
        <div style="background:#f9f9f6;border-left:4px solid ${brandRed};border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
          <p style="font-size:13px;color:#888;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.1em;">Your message</p>
          <p style="font-size:14px;color:#333;line-height:1.7;margin:0;">${parsed.message.replace(/\n/g, "<br/>")}</p>
        </div>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
          ${row("Subject", parsed.subject || "General Inquiry")}
          ${row("Email", parsed.email)}
        </table>
        <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 24px;">In the meantime, feel free to call us at <a href="tel:+12266006637" style="color:${brandRed};font-weight:600;">(226) 600-6637</a> or browse our services online.</p>
        <a href="https://sudcan-innovation.vercel.app/services" style="display:inline-block;background:${brandRed};color:#fff;text-decoration:none;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;">View Our Services</a>
      `;

      const ownerContent = `
        <div style="margin-bottom:24px;">${badge("New Contact Message", brandRed)}</div>
        <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:500;color:#1a2e1a;margin:0 0 20px;">New message from ${parsed.name}</h1>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
          ${row("Name", parsed.name)}
          ${row("Email", `<a href="mailto:${parsed.email}" style="color:${brandRed};">${parsed.email}</a>`)}
          ${row("Phone", parsed.phone ? `<a href="tel:${parsed.phone}" style="color:${brandRed};">${parsed.phone}</a>` : undefined)}
          ${row("Subject", parsed.subject || "General Inquiry")}
        </table>
        <div style="background:#f9f9f6;border-left:4px solid ${brandRed};border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
          <p style="font-size:13px;color:#888;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
          <p style="font-size:14px;color:#333;line-height:1.7;margin:0;">${parsed.message.replace(/\n/g, "<br/>")}</p>
        </div>
        <a href="mailto:${parsed.email}" style="display:inline-block;background:${brandRed};color:#fff;text-decoration:none;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;">Reply to ${parsed.name}</a>
      `;

      await Promise.all([
        transporter.sendMail({ from: `"Sudcan Innovation Inc" <${SENDER_EMAIL}>`, replyTo: REPLY_TO, to: parsed.email, subject: "We received your message — Sudcan Innovation Inc", html: baseTemplate(userContent) }),
        transporter.sendMail({ from: `"Sudcan Innovation Inc" <${SENDER_EMAIL}>`, replyTo: parsed.email, to: OWNER_EMAIL, subject: `New Contact: ${parsed.name} — ${parsed.subject || "General Inquiry"}`, html: baseTemplate(ownerContent) }),
      ]);
    } catch (emailErr) {
      console.error("[contact] Email error:", emailErr);
    }

    return res.status(200).json({ success: true, id: doc._id.toString() });
  } catch (err) {
    console.error("[contact] ERROR:", err);
    if (err instanceof z.ZodError) return res.status(400).json({ error: err.errors });
    const message = err instanceof Error ? err.message : String(err);
    return res.status(500).json({ error: "Internal server error", detail: message });
  }
}
