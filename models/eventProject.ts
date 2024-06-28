import mongoose, { Schema } from "mongoose";

const eventProjectSchema = new Schema(
  {
    year: { type: String, required: true },
    eventName: { type: String, required: true },
    description: { type: String, required: true },
    sponsors: { type: [String], required: true },
    recapURLs: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
)
