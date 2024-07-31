import mongoose, { Schema } from "mongoose";

const eventProjectSchema = new Schema(
  {
    year: { type: String, required: true },
    eventName: { type: String, required: true },
    description: { type: String, required: true },
    sponsors: {
      gold: { type: [String], required: true },
      silver: { type: [String], required: true },
      inkind: { type: [String], required: true },
    },
    recapURLs: { type: [String], required: true },
    eventThumbnail: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const EventProject = mongoose.models.EventProject || mongoose.model("EventProject", eventProjectSchema);

export default EventProject;
