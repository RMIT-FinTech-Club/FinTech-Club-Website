import mongoose, { Schema } from "mongoose";

const teamMemberSchema = new mongoose.Schema({
  memberName: { type: String, required: true },
  memberRole: { type: String, required: true }
});

const techStackSchema = new mongoose.Schema({
  techName: { type: String, required: true },
  techDescription: { type: String, required: true }
});

const technicalProjectSchema = new Schema(
  {
    projectName: { type: String, required: true },
    tags: { type: [String], required: true },
    techStacks: { type: [techStackSchema], required: true },
    description: { type: String, required: true },
    demoSrc: { type: String, required: true },
    teamMembers: { type: [teamMemberSchema], required: true },
  }, {
  timestamps: true,
}
);

const TechnicalProject = mongoose.models?.TechnicalProject || mongoose.model("TechnicalProject", technicalProjectSchema);

export default TechnicalProject;