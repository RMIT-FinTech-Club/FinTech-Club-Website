import mongoose, { Schema } from "mongoose";

const cloudfrontUrlRegex = /^https?:\/\/(?:[a-zA-Z0-9\-]+\.)*cloudfront\.net\/.+/;
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
        validator: (v: string) => cloudfrontUrlRegex.test(v),
        message: "Invalid CloudFront image URL format",
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
    department_photo_url: {
      type: String,
      required: function (this: any): boolean {
        return this.type === "department";
      },
      validate: {
        validator: (v: string) => cloudfrontUrlRegex.test(v),
        message: "Invalid CloudFront department photo URL format",
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
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  }
);

projectSchema.pre('save', function(next) {
  this.updated_at = new Date();
  next();
});

projectSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updated_at: new Date() });
  next();
});

projectSchema.pre('updateOne', function(next) {
  this.set({ updated_at: new Date() });
  next();
});

projectSchema.pre('updateMany', function(next) {
  this.set({ updated_at: new Date() });
  next();
});

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
            return v.every((url: string) => cloudfrontUrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid CloudFront URL in gallery",
      },
    },
    product_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || cloudfrontUrlRegex.test(v),
        message: "Invalid CloudFront product link URL",
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
        validator: (v: string) => !v || cloudfrontUrlRegex.test(v),
        message: "Invalid CloudFront library link URL",
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
            validator: (v: string) => cloudfrontUrlRegex.test(v),
            message: "Invalid CloudFront avatar URL",
          },
        },
        position: { type: String, required: true },
        linkedin_url: { type: String },
      },
    ],
    sponsor_brands: {
      type: [String],
      validate: {
        validator: (v: string[]) => !v || v.every((url: string) => cloudfrontUrlRegex.test(url)),
        message: "Invalid CloudFront sponsor brand URL",
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
            return v.every((url: string) => cloudfrontUrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid CloudFront URL in event gallery",
      },
    },
    event_details_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || cloudfrontUrlRegex.test(v),
        message: "Invalid CloudFront event details link URL",
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
            return v.every((url: string) => cloudfrontUrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid CloudFront URL in gallery",
      },
    },
    event_details_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || cloudfrontUrlRegex.test(v),
        message: "Invalid CloudFront event details link URL",
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
            return v.every((url: string) => cloudfrontUrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid CloudFront URL in gallery",
      },
    },
    event_details_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || cloudfrontUrlRegex.test(v),
        message: "Invalid CloudFront event details link URL",
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
            validator: (v: string) => cloudfrontUrlRegex.test(v),
            message: "Invalid CloudFront avatar URL",
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
            validator: (v: string) => cloudfrontUrlRegex.test(v),
            message: "Invalid CloudFront avatar URL",
          },
        },
        position: { type: String, required: true },
        linkedin_url: { type: String },
      },
    ],
    sponsor_brands: {
      type: [String],
      validate: {
        validator: (v: string[]) => !v || v.every((url: string) => cloudfrontUrlRegex.test(url)),
        message: "Invalid CloudFront sponsor brand URL",
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
            return v.every((url: string) => cloudfrontUrlRegex.test(url));
          }
          return true;
        },
        message: "Invalid CloudFront URL in gallery",
      },
    },
    competition_details_link: {
      type: String,
      validate: {
        validator: (v: string) => !v || cloudfrontUrlRegex.test(v),
        message: "Invalid CloudFront competition details link URL",
      },
    },
  },
});

const Project = mongoose.models?.Project || mongoose.model("Project", projectSchema);

// Only create discriminators if they don't already exist
if (!Project.discriminators?.technical) {
  Project.discriminator("technical", TechnicalSchema);
}
if (!Project.discriminators?.media) {
  Project.discriminator("media", MediaSchema);
}
if (!Project.discriminators?.event) {
  Project.discriminator("event", EventSchema);
}
if (!Project.discriminators?.community) {
  Project.discriminator("community", CommunitySchema);
}
if (!Project.discriminators?.career) {
  Project.discriminator("career", CareerSchema);
}
if (!Project.discriminators?.competition) {
  Project.discriminator("competition", CompetitionSchema);
}

export default Project;