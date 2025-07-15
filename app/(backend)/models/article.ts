import mongoose, {Schema} from "mongoose";

const articleSchema = new Schema({
    title: { type: String, required: true },
    overview: { type: String, require: true},
    status: { 
      type: String, 
      enum: ['draft', 'published'],
      default: 'draft'
    },
    graphic_url: { type: String, required: true },
    label: { type: String, required: true },
    publicationDate: { type: Date, default: Date.now },
  }
);

const Article = mongoose.models?.Article || mongoose.model("Article", articleSchema);

export default Article;


