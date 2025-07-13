import { create } from "domain";
import { link } from "fs";
import mongoose, { Schema } from "mongoose";

const executiveBoardSchema = new Schema(
    {
        _id: { type: String, default: () => new mongoose.Types.ObjectId().toString()},
        name: { type: String, required: true},
        position: { type: String, required: true },
        photo_url:{ type: String, required: true},
        linkedin_url:{type: String, required: true},
        createdAt: {type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now}
    })

 // create index for generation
executiveBoardSchema.index({ generation: 1 });

const ExecutiveBoard = mongoose.models.ExecutiveBoard || mongoose.model("ExecutiveBoard", executiveBoardSchema); 
export default ExecutiveBoard;  
