import mongoose, {Schema} from "mongoose";
import { validate } from "uuid";
const labelCategories = ["Fintech", "Technology", "Blockchain", "AI","Customer Service", "Security", "Sustainability", "Innovation", "Digital Transformation", "Startups", "Healthcare", "Art", "Ethics", "5G", "IoT","Quantum","Energy","Voice","Cloud","Edge","Smart City", "Education","Wearable","Automotive","Metaverse","Policy"];

const articleSchema = new Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true},
    content_url: { type: String, required: true, 
      validate: function (value: string) {
        try {
              new URL(value); // Throw when the value is not a valid URL
              return true;
            } catch (err) {
              return false;
            }
     }},
    illustration_url: {
      type: String,
      
      validate: {
          validator: function (value: string) {
            try {
              new URL(value); // Throw when the value is not a valid URL
              return true;
            } catch (err) {
              return false;
            }
          },
      message: "illustration_url must be a valid URL"
    },
    },
    authors: { type: [String], required: true },
    labels: { type: [String], required: true,
      validate:{
        validator: function (value: string[]) {
          return value.every(labels => labelCategories.includes(labels));
        }, message: "One or more labels is not a valid label"
      } 
     },
    publicationDate: {type: Date, default: Date.now }
    
  },  
  {
    timestamps: true,
  }
);

const Article = mongoose.models?.Article || mongoose.model("Article", articleSchema);
 
export default Article;


