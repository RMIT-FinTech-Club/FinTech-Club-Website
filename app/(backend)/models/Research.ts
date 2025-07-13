import mongoose, { Schema } from "mongoose";

const sectionSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true }
});

const researchSchema = new Schema(
  {
    title: { type: String, required: true },
    thumbnail: { type: String, required: true },
    thumbnailDescription: { type: String, required: true },
    sections: [sectionSchema],
    author: { type: String, required: true },
    publicationDate: { type: Date, required: true },
    status: { 
      type: String, 
      enum: ['draft', 'published'],
      default: 'draft'
    }
  },
  {
    timestamps: true,
  }
);

const Research = mongoose.models?.Research || mongoose.model("Research", researchSchema);

export default Research;

