import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQuote extends Document {
  // Contact info
  fullName: string;
  email: string;
  phone: string;
  city?: string;
  // Project details
  projectType: string;
  propertyType: string;
  squareFootage?: number;
  budgetRange?: string;
  timeline?: string;
  condition?: string;
  // Existing conditions
  currentState?: string;
  spaceAge?: number;
  existingIssues?: string;
  // Design
  designStyle?: string;
  colorPreferences?: string;
  // Materials
  materials?: string;
  finishPreferences?: string;
  // Additional services
  services: string[];
  // Special considerations
  specialConsiderations?: string;
  hasChildren: boolean;
  hasPets: boolean;
  // Vision
  projectDescription: string;
  // Admin
  status: "new" | "reviewed" | "quoted" | "accepted" | "declined";
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSchema = new Schema<IQuote>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    city: { type: String, trim: true },
    projectType: { type: String, required: true },
    propertyType: { type: String, required: true },
    squareFootage: { type: Number },
    budgetRange: { type: String },
    timeline: { type: String },
    condition: { type: String },
    currentState: { type: String },
    spaceAge: { type: Number },
    existingIssues: { type: String },
    designStyle: { type: String },
    colorPreferences: { type: String },
    materials: { type: String },
    finishPreferences: { type: String },
    services: { type: [String], default: [] },
    specialConsiderations: { type: String },
    hasChildren: { type: Boolean, default: false },
    hasPets: { type: Boolean, default: false },
    projectDescription: { type: String, required: true },
    status: {
      type: String,
      enum: ["new", "reviewed", "quoted", "accepted", "declined"],
      default: "new",
    },
  },
  { timestamps: true },
);

export const Quote: Model<IQuote> =
  mongoose.models.Quote ?? mongoose.model<IQuote>("Quote", QuoteSchema);
