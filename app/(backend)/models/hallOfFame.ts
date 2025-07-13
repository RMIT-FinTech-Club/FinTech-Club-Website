import mongoose, { Schema, Document } from "mongoose";

export interface HallOfFameDocument extends Document {
  name: string;
  achievement: string;
  photo_url: string;
  semester: string;
  createdAt: Date;
  updatedAt: Date;
}

const hallOfFameSchema = new Schema(
    {
        name: { type: String, required: true},
        achievement: { type: String, required: true},
        photo_url: { 
            type: String, 
            required: true,
            validate: {
            validator: function (v: string) {
                    return /^https?:\/\/.+/.test(v); // basic URL check
                },
                message: 'Invalid URL format for photo_url'
            }
        },
        semester: {
            type: String,
            required: true,
            validate: {
            validator: function (v: string) {
                    return /^\d{4}[ABC]$/.test(v);  // e.g., 2024A
                },
                message: 'Semester must be in format YYYY[A|B|C]'
            },
            index: true
        }
    },
    {
        timestamps: true,
    }
)

const HallOfFame = mongoose.models?.HallOfFame || mongoose.model<HallOfFameDocument>("HallOfFame", hallOfFameSchema);
export default HallOfFame;