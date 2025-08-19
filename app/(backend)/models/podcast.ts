import mongoose, { Schema } from "mongoose";

const labelCategories = ["Fintech", "Technology", "Blockchain", "AI", "Customer Service", "Security", "Sustainability", "Innovation", "Digital Transformation", "Startups", "Healthcare", "Art", "Ethics", "5G", "IoT", "Quantum", "Energy", "Voice", "Cloud", "Edge", "Smart City", "Education", "Wearable", "Automotive", "Metaverse", "Policy"];

const podcastSchema = new Schema({
    title: { type: String, required: true},
    summary: { type: String, required: true },
    publicationDate: { type: Date, default: Date.now },
    video_url:{type:String, required: true, validator:{
        validator: function (value: string) {
            try {
                new URL(value); // Throw when the value is not a valid URL
                return true;
            } catch (err) {
                return false;
            }
        }
    }
    },
    thumbnail_url:{type: String, required: true, validator:{
        validator: function (value: string) {
            try {
                new URL(value); // Throw when the value is not a valid URL
                return true;
            } catch (err) {
                return false;
            }
        }
    }},
    guest_speaker:{type: String, required: true},
    creator_team:{type: [String], required: true },
    labels: { type: [String], required: true, validator:{
        validator: function (value: string[]) {
            return value.every(label => labelCategories.includes(label));
        },
        message: "One or more labels is not a valid label"
    }}
},{
    timestamps: true,
}); 
    
const Podcast =  mongoose.models?.Podcast || mongoose.model("Podcast", podcastSchema,"PodcastsCollection");
export default Podcast;      
