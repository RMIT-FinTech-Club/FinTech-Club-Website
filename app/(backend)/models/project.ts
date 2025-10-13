import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import mongoose, { Schema } from "mongoose";
import crypto from "crypto";

// Ensure the CloudFront domain is set for the validator
if (!process.env.CLOUDFRONT_DOMAIN) {
    throw new Error("CLOUDFRONT_DOMAIN environment variable is not set.");
}
// Escape special regex characters in the domain name (like '.')
const escapedCloudfrontDomain = process.env.CLOUDFRONT_DOMAIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Dynamically create a regex that accepts the default cloudfront.net OR your custom domain
const cloudfrontUrlRegex = new RegExp(
  `^https?:\/\/((?:[a-zA-Z0-9\\-]+\\.)*cloudfront\\.net|${escapedCloudfrontDomain})\/.+`
);

const urlValidator = {
  validator: (v: string) => cloudfrontUrlRegex.test(v),
  message: "Invalid CloudFront URL format.",
};

// Reusable Sub-Document Schemas
const PersonSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    avatar_url: { type: String, required: true, validate: urlValidator },
    linkedin_url: { type: String, trim: true }, // Optional
  },
  { _id: false }
);

// For key/sideline activities
const ActivitySchema = new Schema(
  {
    date: { type: String },
    description: { type: String, required: true, trim: true },
  },
  { _id: false }
);

// For team structure with detailed roles, skills, and responsibilities
const DetailedTeamMemberSchema = new Schema(
  {
    role: { type: String, required: true, trim: true },
    leader_name: { type: String, required: true, trim: true },
    responsibilities: { type: [String], required: true, default: [] },
    skills: { type: [String], required: true, default: [] },
  },
  { _id: false }
);

// For simpler team structures
const SimpleTeamMemberSchema = new Schema(
  {
    role: { type: String, required: true, trim: true },
    leader_name: { type: String, required: true, trim: true },
  },
  { _id: false }
);

// For key metrics shown on completed projects
const KeyMetricSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    value: { type: String, required: true, trim: true },
    icon_url: { type: String, validate: urlValidator },
  },
  { _id: false }
);

// For timeline events in competitions
const TimelineEventSchema = new Schema(
  {
    date: { type: Date, required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
  },
  { _id: false }
);

// Base Project Schema
const projectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    type: {
      type: String,
      enum: ["large-scaled", "department"],
      required: true,
    },
    status: { type: String, enum: ["ongoing", "completed"], required: true },
    category: {
      type: String,
      required: true,
      enum: [
        "technical",
        "media",
        "event",
        "community",
        "career",
        "competition",
      ],
    },
    labels: { type: [String], default: [] },
    image_url: {
      type: String,
      required: true,
      validate: urlValidator,
    },
    category_specific: { type: Schema.Types.Mixed },
    department: {
      type: String,
      required: function (this: any): boolean {
        return this.type === "department";
      },
    },
    department_description: {
      type: String,
      required: function (this: any): boolean {
        return this.type === "department";
      },
    },
    year: {
      type: Number,
      required: function (this: any): boolean {
        return this.status === "completed";
      },
    },
    meta_title: { type: String, required: true },
    meta_description: { type: String, required: true },
    slug: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }, // <--- Correctly placed here
  }
);

// Middleware to auto-generate the slug before saving
projectSchema.pre("save", function (next) {
  // Only generate a slug if the title is new or has been modified
  if (this.isModified("title") || this.isNew) {
    // Create the base slug from the title
    const baseSlug = this.title
      .toLowerCase()
      .trim()
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[\s\W-]+/g, "-") // Replace spaces, non-word chars and dashes with a single dash
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing dashes

    // Create a unique suffix to prevent collisions
    const uniqueSuffix = crypto.randomBytes(4).toString("hex");

    this.slug = `${baseSlug}-${uniqueSuffix}`;
  }
  next();
});

projectSchema.pre("findOneAndUpdate", function (next) {
  this.set({ updated_at: new Date() });
  next();
});

projectSchema.pre("updateOne", function (next) {
  this.set({ updated_at: new Date() });
  next();
});

projectSchema.pre("updateMany", function (next) {
  this.set({ updated_at: new Date() });
  next();
});

// Indexes for query optimization
projectSchema.index({ type: 1, status: 1, category: 1 });
projectSchema.index({ year: -1 });

// Discriminator Schemas (Category-Specific)
const TechnicalSchema = new Schema({
  goals: { type: [String], required: true },
  scope: { type: [String], required: true },
  team_structure: { type: [DetailedTeamMemberSchema], required: true },
  project_leader_name: { type: String, required: true },
  gallery: {
    type: [String],
    validate: urlValidator,
    default: [],
  },
  timeline: {
    type: [
      {
        time: { type: Date, required: true },
        milestoneTitle: { type: String, required: true, trim: true },
        milestoneDescription: { type: String, required: true, trim: true },
      },
    ],
    default: [],
  },
  product_link: { type: String },
});

const MediaSchema = new Schema({
  goals: { type: [String], required: true },
  target_audience: { type: [String], required: true },
  team_structure: { type: [DetailedTeamMemberSchema], required: true },
  project_leader_name: { type: String, required: true },
  products: {
    type: [
      {
        // 'product' stores the ObjectId of the document
        product: {
          type: Schema.Types.ObjectId,
          required: true,
          // 'refPath' tells Mongoose to look at the 'onModel' field
          // to determine which collection to query.
          refPath: "products.onModel",
        },
        // 'onModel' stores the name of the model ('Article' or 'Podcast')
        onModel: {
          type: String,
          required: true,
          enum: ["Article", "Podcast"],
        },
      },
    ],
    default: [],
  },
  auto_update_type: { 
    type: String, 
    enum: ['Article', 'Podcast'], 
    required: true
  },
  auto_update_limit: { 
    type: Number, 
    default: 5 
  },
});

const EventSchema = new Schema({
  goals: { type: [String], required: true },
  target_audience: { type: [String], required: true },
  key_activities: { type: [ActivitySchema], required: true },
  guest_speakers: { type: [PersonSchema], default: [] },
  sponsors: {
    type: [
      { name: String, logo_url: { type: String, validate: urlValidator } },
    ],
    default: [],
  },
  team_structure: { type: [SimpleTeamMemberSchema], required: true },
  project_leader_name: { type: String, required: true },
  key_metrics: {
    type: [KeyMetricSchema],
    required: function (this: any): boolean {
      return this.parent().status === "completed";
    },
  },
  gallery: {
    type: [String],
    validate: urlValidator,
    default: [],
  },
});

const CommunitySchema = new Schema({
  goals: { type: [String], required: true },
  target_audience: { type: [String], required: true },
  key_activities: { type: [ActivitySchema], required: true },
  partner_ngos: {
    type: [
      { name: String, logo_url: { type: String, validate: urlValidator } },
    ],
    default: [],
  },
  team_structure: { type: [SimpleTeamMemberSchema], required: true },
  project_leader_name: { type: String, required: true },
  key_metrics: {
    type: [KeyMetricSchema],
    required: function (this: any): boolean {
      return this.parent().status === "completed";
    },
  },
  gallery: {
    type: [String],
    validate: urlValidator,
    default: [],
  },
});

const CareerSchema = new Schema({
  company: {
    type: {
      name: { type: String, required: true },
      logo_url: { type: String, required: true, validate: urlValidator },
    },
    required: true,
  },
  goals: { type: [String], required: true },
  target_audience: { type: [String], required: true },
  team_structure: { type: [SimpleTeamMemberSchema], required: true },
  project_leader_name: { type: String, required: true },
  key_metrics: {
    type: [KeyMetricSchema],
    required: function (this: any): boolean {
      return this.parent().status === "completed";
    },
  },
  gallery: {
    type: [String],
    validate: urlValidator,
    default: [],
  },
});

const CompetitionSchema = new Schema({
  theme: { type: String, required: true },
  goals: { type: [String], required: true },
  target_audience: { type: [String], required: true },
  sponsors: {
    type: [
      { name: String, logo_url: { type: String, validate: urlValidator } },
    ],
    default: [],
  },
  team_structure: { type: [SimpleTeamMemberSchema], required: true },
  project_leader_name: { type: String, required: true },
  key_metrics: {
    type: [KeyMetricSchema],
    required: function (this: any): boolean {
      return this.parent().status === "completed";
    },
  },
  gallery: {
    type: [String],
    validate: urlValidator,
    default: [],
  },
  details_link: { type: String },
});

const Project =
  mongoose.models?.Project || mongoose.model("Project", projectSchema);

// Only create discriminators if they don't already exist
if (!Project.discriminators) {
  Project.discriminator("technical", TechnicalSchema);
  Project.discriminator("media", MediaSchema);
  Project.discriminator("event", EventSchema);
  Project.discriminator("community", CommunitySchema);
  Project.discriminator("career", CareerSchema);
  Project.discriminator("competition", CompetitionSchema);
}

export default Project;
