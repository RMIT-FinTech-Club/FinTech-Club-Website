import mongoose, { Schema } from "mongoose";

const s3UrlRegex = /^https?:\/\/(?:[a-zA-Z0-9\-]+\.)*s3[.-][a-zA-Z0-9\-]+\.amazonaws\.com\/.+/;
const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const projectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    type: { type: String, enum: ["large-scaled", "department"], required: true, index: true },
    status: { type: String, enum: ["ongoing", "completed"], required: true, index: true },
    category: {
      type: String,
      required: true,
      enum: ["technical", "media", "event", "community", "career", "competition"],
      index: true,
    },
    labels: { type: [String], default: [], index: true },
    image_url: {
      type: String,
      required: true,
      validate: {
        validator: (v: string) => s3UrlRegex.test(v),
        message: "Invalid AWS S3 image URL format",
      },
    },
    category_specific: { type: Schema.Types.Mixed },
    department: {
      type: String,
      required: function (this: any): boolean {
        return this.type === "department";
      },
      index: true,
    },
    year: {
      type: Number,
      required: function (this: any): boolean {
        return this.status === "completed";
      },
      index: true,
    },
    meta_title: { type: String, required: true },
    meta_description: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      validate: {
        validator: (v: string) => slugRegex.test(v),
        message: "Invalid slug format (use lowercase, numbers, dashes)",
      },
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

projectSchema.index({ _id: 1 });
projectSchema.index({ slug: 1 }, { unique: true });
projectSchema.index({ type: 1 });
projectSchema.index({ status: 1 });
projectSchema.index({ department: 1 });
projectSchema.index({ year: 1 });
projectSchema.index({ category: 1 });
projectSchema.index({ labels: 1 });

const TechnicalSchema = new Schema({
  category_specific: {
    goals: { type: String, required: true },
    scope: { type: String, required: true },
    team_structure: [
      {
        role: { type: String, required: true },
        responsibilities: { type: [String], required: true },
        skills: { type: [String], required: true },
      },
    ],
    team_leader: [
      {
        name: { type: String, required: true },
        role: { type: String, required: true },
        position: { type: String, required: true },
      },
    ],
    timeline: [
      {
        date: Date,
        title: String,
        description: String,
        status: String,
      },
    ],
    gallery: {
      type: [String],
      validate: {
        validator: function (this: any, v: string[]): boolean {
          if (this.parent().status === "completed") {
            return v.every((url: string) => s3UrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid AWS S3 URL in gallery",
      },
    },
    product_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || s3UrlRegex.test(v),
        message: "Invalid AWS S3 product link URL",
      },
    },
  },
});

const MediaSchema = new Schema({
  category_specific: {
    goals: { type: String, required: true },
    target_audience: { type: String, required: true },
    team_structure: [
      {
        role: { type: String, required: true },
        responsibilities: { type: [String], required: true },
        skills: { type: [String], required: true },
      },
    ],
    team_leader: [
      {
        name: { type: String, required: true },
        role: { type: String, required: true },
        position: { type: String, required: true },
      },
    ],
    product_library: { type: [Schema.Types.Mixed], required: true },
    library_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || s3UrlRegex.test(v),
        message: "Invalid AWS S3 library link URL",
      },
    },
  },
});

const EventSchema = new Schema({
  category_specific: {
    goals: { type: String, required: true },
    target_audience: { type: String, required: true },
    format: { type: String, enum: ["online", "in-person"], required: true },
    key_activities: { type: [String], required: true },
    guest_speakers: [
      {
        name: { type: String, required: true },
        avatar_url: {
          type: String,
          required: true,
          validate: {
            validator: (v: string) => s3UrlRegex.test(v),
            message: "Invalid AWS S3 avatar URL",
          },
        },
        position: { type: String, required: true },
        linkedin_url: { type: String },
      },
    ],
    sponsor_brands: {
      type: [String],
      validate: {
        validator: (v: string[]) => !v || v.every((url: string) => s3UrlRegex.test(url)),
        message: "Invalid AWS S3 sponsor brand URL",
      },
    },
    team_leader: [
      {
        name: { type: String, required: true },
        role: { type: String, required: true },
        position: { type: String, required: true },
      },
    ],
    key_metrics: {
      attendees: { type: Number, required: true },
      attendance_rate: { type: Number, required: true },
      media_coverage: { type: Number, required: true },
    },
    event_gallery: {
      type: [String],
      validate: {
        validator: function (this: any, v: string[]): boolean {
          if (this.parent().status === "completed") {
            return v.every((url: string) => s3UrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid AWS S3 URL in event gallery",
      },
    },
    event_details_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || s3UrlRegex.test(v),
        message: "Invalid AWS S3 event details link URL",
      },
    },
  },
});

const CommunitySchema = new Schema({
  category_specific: {
    goals: { type: String, required: true },
    target_audience: { type: String, required: true },
    key_activities: { type: [String], required: true },
    ngos: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    team_leader: [
      {
        name: { type: String, required: true },
        role: { type: String, required: true },
        position: { type: String, required: true },
      },
    ],
    key_metrics: {
      volunteers: { type: Number, required: true },
      funds_raised: { type: Number, required: true },
      communities_reached: { type: Number, required: true },
      beneficiaries_served: { type: Number, required: true },
    },
    gallery: {
      type: [String],
      validate: {
        validator: function (this: any, v: string[]): boolean {
          if (this.parent().status === "completed") {
            return v.every((url: string) => s3UrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid AWS S3 URL in gallery",
      },
    },
    event_details_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || s3UrlRegex.test(v),
        message: "Invalid AWS S3 event details link URL",
      },
    },
  },
});

const CareerSchema = new Schema({
  category_specific: {
    company: { type: Schema.Types.Mixed, required: true },
    goals: { type: String, required: true },
    target_audience: { type: String, required: true },
    key_outcomes: {
      participants: { type: Number, required: true },
      attendance_rate: { type: Number, required: true },
      skills_developed: { type: [String], required: true },
      job_placements: { type: Number, required: true },
    },
    gallery: {
      type: [String],
      validate: {
        validator: function (this: any, v: string[]): boolean {
          if (this.parent().status === "completed") {
            return v.every((url: string) => s3UrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid AWS S3 URL in gallery",
      },
    },
    event_details_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || s3UrlRegex.test(v),
        message: "Invalid AWS S3 event details link URL",
      },
    },
  },
});

const CompetitionSchema = new Schema({
  category_specific: {
    theme: { type: String, required: true },
    goals: { type: String, required: true },
    target_audience: { type: String, required: true },
    format: { type: String, enum: ["online", "in-person"], required: true },
    sideline_activities: { type: [Schema.Types.Mixed], required: true },
    mentors: [
      {
        name: { type: String, required: true },
        avatar_url: {
          type: String,
          required: true,
          validate: {
            validator: (v: string) => s3UrlRegex.test(v),
            message: "Invalid AWS S3 avatar URL",
          },
        },
        position: { type: String, required: true },
        linkedin_url: { type: String },
      },
    ],
    judges: [
      {
        name: { type: String, required: true },
        avatar_url: {
          type: String,
          required: true,
          validate: {
            validator: (v: string) => s3UrlRegex.test(v),
            message: "Invalid AWS S3 avatar URL",
          },
        },
        position: { type: String, required: true },
        linkedin_url: { type: String },
      },
    ],
    sponsor_brands: {
      type: [String],
      validate: {
        validator: (v: string[]) => !v || v.every((url: string) => s3UrlRegex.test(url)),
        message: "Invalid AWS S3 sponsor brand URL",
      },
    },
    timeline: [
      {
        date: Date,
        title: String,
        description: String,
        status: String,
      },
    ],
    key_metrics: {
      participants: { type: Number, required: true },
      workshops: { type: Number, required: true },
      judges_mentors: { type: Number, required: true },
      sponsors: { type: Number, required: true },
      funds_raised: { type: Number, required: true },
      social_media_engagement: { type: Number, required: true },
      total_attendances: { type: Number, required: true },
    },
    gallery: {
      type: [String],
      validate: {
        validator: function (this: any, v: string[]): boolean {
          if (this.parent().status === "completed") {
            return v.every((url: string) => s3UrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid AWS S3 URL in gallery",
      },
    },
    competition_details_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || s3UrlRegex.test(v),
        message: "Invalid AWS S3 competition details link URL",
      },
    },
  },
});

const Project = mongoose.models?.Project || mongoose.model("Project", projectSchema);

Project.discriminator("technical", TechnicalSchema);
Project.discriminator("media", MediaSchema);
Project.discriminator("event", EventSchema);
Project.discriminator("community", CommunitySchema);
Project.discriminator("career", CareerSchema);
Project.discriminator("competition", CompetitionSchema);

export default Project;