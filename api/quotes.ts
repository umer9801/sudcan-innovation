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

const QuoteSchema = new mongoose.Schema(
  {
    fullName: String, email: String, phone: String, city: String,
    projectType: String, propertyType: String, squareFootage: Number,
    budgetRange: String, timeline: String, condition: String,
    currentState: String, spaceAge: Number, existingIssues: String,
    designStyle: String, colorPreferences: String, materials: String,
    finishPreferences: String, services: [String], specialConsiderations: String,
    hasChildren: Boolean, hasPets: Boolean, projectDescription: String,
    status: { type: String, enum: ["new", "reviewed", "quoted", "accepted", "declined"], default: "new" },
  },
  { timestamps: true },
);

const Quote = mongoose.models["Quote"] ?? mongoose.model("Quote", QuoteSchema);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await connectDB();

  // GET — list all quotes
  if (req.method === "GET") {
    const quotes = await Quote.find().sort({ createdAt: -1 }).lean();
    return res.status(200).json(
      quotes.map((q: any) => ({
        ...q,
        _id: q._id.toString(),
        createdAt: (q.createdAt as Date).toISOString(),
        updatedAt: (q.updatedAt as Date).toISOString(),
      })),
    );
  }

  // PATCH — update status
  if (req.method === "PATCH") {
    const parsed = z
      .object({ id: z.string(), status: z.enum(["new", "reviewed", "quoted", "accepted", "declined"]) })
      .parse(parseBody(req));
    await Quote.findByIdAndUpdate(parsed.id, { status: parsed.status });
    return res.status(200).json({ success: true });
  }

  // DELETE
  if (req.method === "DELETE") {
    const parsed = z.object({ id: z.string() }).parse(parseBody(req));
    await Quote.findByIdAndDelete(parsed.id);
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
