import mongoose from "mongoose";

const MONGODB_URI =
  process.env["MONGODB_URI"] ??
  "mongodb+srv://sudcan:sudcan1@cluster0.6zdjb3k.mongodb.net/?appName=Cluster0";

let cached: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } = {
  conn: null,
  promise: null,
};

export async function connectDB(): Promise<typeof mongoose> {
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
