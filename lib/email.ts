import nodemailer from "nodemailer";

const SENDER_EMAIL = process.env["SMTP_USER"] ?? "info@solvixcore.com";
const SENDER_PASS = process.env["SMTP_PASS"] ?? "";
const OWNER_EMAIL = process.env["OWNER_EMAIL"] ?? "sudcaninfo@gmail.com";
const REPLY_TO = process.env["REPLY_TO_EMAIL"] ?? "sudcaninfo@gmail.com";

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env["SMTP_HOST"] ?? "smtp.hostinger.com",
    port: Number(process.env["SMTP_PORT"] ?? 465),
    secure: true,
    auth: {
      user: SENDER_EMAIL,
      pass: SENDER_PASS,
    },
  });
}

// ─── Shared brand styles ────────────────────────────────────────────────────
const brandRed = "#c0392b";
const brandGreen = "#27ae60";
const brandDark = "#1a2e1a";

function baseTemplate(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sudcan Innovation Inc</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f0;font-family:'Inter',Arial,sans-serif;color:#1a2e1a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f0;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:${brandDark};padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background:${brandRed};width:40px;height:40px;border-radius:8px;text-align:center;vertical-align:middle;">
                          <span style="color:#fff;font-size:20px;font-weight:700;font-family:Georgia,serif;">S</span>
                        </td>
                        <td style="padding-left:12px;">
                          <div style="color:#fff;font-size:18px;font-family:Georgia,serif;font-weight:500;line-height:1.2;">Sudcan Innovation Inc</div>
                          <div style="color:rgba(255,255,255,0.5);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;">Premium Renovation &amp; Flooring</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Content -->
          <tr>
            <td style="padding:40px;">
              ${content}
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#f5f5f0;padding:24px 40px;border-top:1px solid #e8e8e0;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size:12px;color:#666;line-height:1.6;">
                    <strong style="color:${brandDark};">Sudcan Innovation Inc</strong><br/>
                    286 Driftwood Dr. Kitchener, ON N2N-1X6<br/>
                    <a href="tel:+12266006637" style="color:${brandRed};text-decoration:none;">(226) 600-6637</a> &nbsp;|&nbsp;
                    <a href="mailto:sudcaninfo@gmail.com" style="color:${brandRed};text-decoration:none;">sudcaninfo@gmail.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function badge(text: string, color: string): string {
  return `<span style="display:inline-block;background:${color};color:#fff;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;padding:4px 12px;border-radius:20px;">${text}</span>`;
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 0;border-bottom:1px solid #f0f0ea;width:40%;font-size:13px;color:#666;font-weight:500;">${label}</td>
    <td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-size:13px;color:#1a2e1a;">${value}</td>
  </tr>`;
}

// ─── Contact: User confirmation ──────────────────────────────────────────────
export async function sendContactUserEmail(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const transporter = createTransporter();
  const content = `
    <div style="margin-bottom:24px;">
      ${badge("Message Received", brandGreen)}
    </div>
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:500;color:#1a2e1a;margin:0 0 8px;">Thank you, ${data.name}.</h1>
    <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 28px;">
      We've received your message and will get back to you within one business day. Here's a copy of what you sent:
    </p>
    <div style="background:#f9f9f6;border-left:4px solid ${brandRed};border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
      <p style="font-size:13px;color:#888;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.1em;">Your message</p>
      <p style="font-size:14px;color:#333;line-height:1.7;margin:0;">${data.message.replace(/\n/g, "<br/>")}</p>
    </div>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
      ${row("Subject", data.subject || "General Inquiry")}
      ${row("Email", data.email)}
    </table>
    <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 24px;">
      In the meantime, feel free to call us at <a href="tel:+12266006637" style="color:${brandRed};font-weight:600;">(226) 600-6637</a> or browse our services online.
    </p>
    <a href="https://sudcan.ca/services" style="display:inline-block;background:${brandRed};color:#fff;text-decoration:none;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;">View Our Services</a>
  `;

  await transporter.sendMail({
    from: `"Sudcan Innovation Inc" <${SENDER_EMAIL}>`,
    replyTo: REPLY_TO,
    to: data.email,
    subject: "We received your message — Sudcan Innovation Inc",
    html: baseTemplate(content),
  });
}

// ─── Contact: Owner notification ────────────────────────────────────────────
export async function sendContactOwnerEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const transporter = createTransporter();
  const content = `
    <div style="margin-bottom:24px;">
      ${badge("New Contact Message", brandRed)}
    </div>
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:500;color:#1a2e1a;margin:0 0 20px;">New message from ${data.name}</h1>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${row("Name", data.name)}
      ${row("Email", `<a href="mailto:${data.email}" style="color:${brandRed};">${data.email}</a>`)}
      ${row("Phone", data.phone ? `<a href="tel:${data.phone}" style="color:${brandRed};">${data.phone}</a>` : undefined)}
      ${row("Subject", data.subject || "General Inquiry")}
    </table>
    <div style="background:#f9f9f6;border-left:4px solid ${brandRed};border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
      <p style="font-size:13px;color:#888;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
      <p style="font-size:14px;color:#333;line-height:1.7;margin:0;">${data.message.replace(/\n/g, "<br/>")}</p>
    </div>
    <a href="mailto:${data.email}" style="display:inline-block;background:${brandRed};color:#fff;text-decoration:none;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;">Reply to ${data.name}</a>
  `;

  await transporter.sendMail({
    from: `"Sudcan Innovation Inc" <${SENDER_EMAIL}>`,
    replyTo: data.email,
    to: OWNER_EMAIL,
    subject: `New Contact: ${data.name} — ${data.subject || "General Inquiry"}`,
    html: baseTemplate(content),
  });
}

// ─── Quote: User confirmation ────────────────────────────────────────────────
export async function sendQuoteUserEmail(data: {
  fullName: string;
  email: string;
  projectType: string;
  propertyType: string;
  budgetRange?: string;
  timeline?: string;
}) {
  const transporter = createTransporter();

  const projectLabels: Record<string, string> = {
    flooring: "Flooring Installation",
    kitchen: "Kitchen Renovation",
    bathroom: "Bathroom Renovation",
    "whole-home": "Whole Home Renovation",
    commercial: "Commercial Fit-out",
    painting: "Painting",
    other: "Other",
  };

  const content = `
    <div style="margin-bottom:24px;">
      ${badge("Quote Request Confirmed", brandGreen)}
    </div>
    <h1 style="font-family:Georgia,serif;font-size:28px;font-weight:500;color:#1a2e1a;margin:0 0 8px;">Your quote request is confirmed.</h1>
    <p style="font-size:15px;color:#555;line-height:1.7;margin:0 0 28px;">
      Thank you, <strong>${data.fullName}</strong>. We've received your project details and our team will prepare a detailed, itemized quote within one business day.
    </p>
    <div style="background:#f9f9f6;border-radius:12px;padding:24px;margin-bottom:28px;">
      <p style="font-size:13px;color:#888;margin:0 0 16px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Project Summary</p>
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row("Project Type", projectLabels[data.projectType] || data.projectType)}
        ${row("Property Type", data.propertyType)}
        ${row("Budget Range", data.budgetRange || undefined)}
        ${row("Timeline", data.timeline || undefined)}
      </table>
    </div>
    <div style="background:${brandDark};border-radius:12px;padding:24px;margin-bottom:28px;">
      <p style="font-size:13px;color:rgba(255,255,255,0.6);margin:0 0 8px;text-transform:uppercase;letter-spacing:0.1em;">What happens next?</p>
      <ol style="margin:0;padding-left:20px;color:rgba(255,255,255,0.85);font-size:14px;line-height:2;">
        <li>Our team reviews your project details</li>
        <li>We prepare a detailed, itemized quote</li>
        <li>You receive the quote within one business day</li>
        <li>We schedule a consultation at your convenience</li>
      </ol>
    </div>
    <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 24px;">
      Questions? Call us at <a href="tel:+12266006637" style="color:${brandRed};font-weight:600;">(226) 600-6637</a> — we're happy to help.
    </p>
    <a href="https://sudcan.ca/services" style="display:inline-block;background:${brandRed};color:#fff;text-decoration:none;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;">Explore Our Work</a>
  `;

  await transporter.sendMail({
    from: `"Sudcan Innovation Inc" <${SENDER_EMAIL}>`,
    replyTo: REPLY_TO,
    to: data.email,
    subject: "Quote request received — Sudcan Innovation Inc",
    html: baseTemplate(content),
  });
}

// ─── Quote: Owner notification ───────────────────────────────────────────────
export async function sendQuoteOwnerEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  projectType: string;
  propertyType: string;
  squareFootage?: number;
  budgetRange?: string;
  timeline?: string;
  designStyle?: string;
  services: string[];
  projectDescription: string;
}) {
  const transporter = createTransporter();

  const projectLabels: Record<string, string> = {
    flooring: "Flooring Installation",
    kitchen: "Kitchen Renovation",
    bathroom: "Bathroom Renovation",
    "whole-home": "Whole Home Renovation",
    commercial: "Commercial Fit-out",
    painting: "Painting",
    other: "Other",
  };

  const content = `
    <div style="margin-bottom:24px;">
      ${badge("New Quote Request", brandRed)}
    </div>
    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:500;color:#1a2e1a;margin:0 0 20px;">New booking from ${data.fullName}</h1>

    <p style="font-size:13px;color:#888;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Client Information</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${row("Name", data.fullName)}
      ${row("Email", `<a href="mailto:${data.email}" style="color:${brandRed};">${data.email}</a>`)}
      ${row("Phone", `<a href="tel:${data.phone}" style="color:${brandRed};">${data.phone}</a>`)}
      ${row("City", data.city || undefined)}
    </table>

    <p style="font-size:13px;color:#888;margin:0 0 12px;text-transform:uppercase;letter-spacing:0.1em;font-weight:600;">Project Details</p>
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${row("Project Type", projectLabels[data.projectType] || data.projectType)}
      ${row("Property Type", data.propertyType)}
      ${row("Square Footage", data.squareFootage ? `${data.squareFootage} sq ft` : undefined)}
      ${row("Budget Range", data.budgetRange || undefined)}
      ${row("Timeline", data.timeline || undefined)}
      ${row("Design Style", data.designStyle || undefined)}
      ${row("Additional Services", data.services.length > 0 ? data.services.join(", ") : undefined)}
    </table>

    <div style="background:#f9f9f6;border-left:4px solid ${brandRed};border-radius:0 8px 8px 0;padding:20px 24px;margin-bottom:28px;">
      <p style="font-size:13px;color:#888;margin:0 0 6px;text-transform:uppercase;letter-spacing:0.1em;">Project Vision</p>
      <p style="font-size:14px;color:#333;line-height:1.7;margin:0;">${data.projectDescription.replace(/\n/g, "<br/>")}</p>
    </div>

    <a href="mailto:${data.email}" style="display:inline-block;background:${brandRed};color:#fff;text-decoration:none;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;margin-right:12px;">Reply to Client</a>
    <a href="tel:${data.phone}" style="display:inline-block;background:${brandDark};color:#fff;text-decoration:none;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;">Call Client</a>
  `;

  await transporter.sendMail({
    from: `"Sudcan Innovation Inc" <${SENDER_EMAIL}>`,
    replyTo: data.email,
    to: OWNER_EMAIL,
    subject: `New Quote Request: ${data.fullName} — ${projectLabels[data.projectType] || data.projectType}`,
    html: baseTemplate(content),
  });
}
