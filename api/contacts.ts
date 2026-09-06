import type { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";
import { z } from "zod";

function parseBody(req: VercelRequest): unknown {
  if (!req.body) return {};
  if (typeof req.body === "string") { try { return JSON.parse(req.body); } catch { return {}; } }
  return req.body;
}

const MONGODB_URI =
  process.env["MONGODB_URI"] ??
  "mongodb+srv://sudcan:sudcan1@cluster0.6zdjb3k.mongodb.net/?appName=Cluster0";

let cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = {
  conn: null,
  promise: null,
};

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: process.env["MONGODB_DB"] ?? "sudcan",
      bufferCommands: false,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const ContactSchema = new mongoose.Schema(
  {
    name: String, email: String, phone: String,
    subject: String, message: String,
    status: { type: String, enum: ["new", "read", "replied"], default: "new" },
  },
  { timestamps: true },
);

const Contact = mongoose.models["Contact"] ?? mongoose.model("Contact", ContactSchema);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await connectDB();

  // GET — list all contacts
  if (req.method === "GET") {
    const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json(
      contacts.map((c: any) => ({
        ...c,
        _id: c._id.toString(),
        createdAt: (c.createdAt as Date).toISOString(),
        updatedAt: (c.updatedAt as Date).toISOString(),
      })),
    );
  }

  // PATCH — update status
  if (req.method === "PATCH") {
    const parsed = z
      .object({ id: z.string(), status: z.enum(["new", "read", "replied"]) })
      .parse(parseBody(req));
    await Contact.findByIdAndUpdate(parsed.id, { status: parsed.status });
    return res.status(200).json({ success: true });
  }

  // DELETE
  if (req.method === "DELETE") {
    const parsed = z.object({ id: z.string() }).parse(parseBody(req));
    await Contact.findByIdAndDelete(parsed.id);
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
