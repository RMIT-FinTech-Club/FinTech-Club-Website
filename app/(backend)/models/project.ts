import mongoose, { Schema } from "mongoose";

// URL validation regex
const urlRegex = /^https?:\/\/.+/;

// Base schema with common fields
const projectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, enum: ['Technical', 'Media', 'Event', 'Community', 'Career', 'Competition'], index: true },
    labels: { type: [String], default: [], index: true },
    status: { type: String, required: true, enum: ['ongoing', 'completed'], index: true },
    introduction: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { 
      type: String, 
      required: true,
      validate: {
        validator: (v: string) => urlRegex.test(v),
        message: 'Invalid image URL format'
      }
    },
    timeline: [{ 
      date: Date,
      title: String,
      description: String 
    }],
    team_structure: { type: Schema.Types.Mixed },
    leader_team: [{
      name: String,
      role: String,
      image: String
    }],
    type: { type: String, enum: ['large-scaled', 'department'], required: true, index: true },
    department: { 
      type: String,
      required: function(this: any) { return this.type === 'department' },
      index: true
    },
    department_photo_url: { 
      type: String,
      required: function(this: any) { return this.type === 'department' },
      validate: {
        validator: (v: string) => !v || urlRegex.test(v),
        message: 'Invalid department photo URL format'
      }
    },
    department_description: { 
      type: String,
      required: function(this: any) { return this.type === 'department'; }
    },
    year: { 
      type: Number,
      required: function(this: any): boolean { return this.status === 'completed'; },
      index: true
    },
    category_specific: { type: Schema.Types.Mixed }
  },
  { 
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    discriminatorKey: 'category'
  }
);

// Category-specific schemas
const TechnicalSchema = new Schema({
  category_specific: {
    scope_of_work: { type: String, required: true },
    milestones: [{
      date: Date,
      title: String,
      description: String,
      status: String
    }]
  }
});

const MediaSchema = new Schema({
  category_specific: {
    product_library_link: { 
      type: String, 
      required: true,
      validate: {
        validator: (v: string) => urlRegex.test(v),
        message: 'Invalid product library URL format'
      }
    },
    impact_metrics: {
      reach: { type: Number, required: true },
      engagement: { type: Number, required: true }
    }
  }
});

const EventSchema = new Schema({
  category_specific: {
    format: { type: String, enum: ['online', 'in-person', 'hybrid'], required: true },
    key_metrics: {
      attendees: { type: Number, required: true },
      media_coverage: { type: Number, required: true }
    },
    guest_speakers: [String],
    sponsors: [String],
    event_gallery: {
      type: [String],
      validate: {
        validator: (v: string[]) => v.every(url => urlRegex.test(url)),
        message: 'Invalid URL in event gallery'
      }
    },
    event_details_link: { 
      type: String, 
      required: true,
      validate: {
        validator: (v: string) => urlRegex.test(v),
        message: 'Invalid event details URL format'
      }
    }
  }
});

const CommunitySchema = new Schema({
  category_specific: {
    key_metrics: {
      participants: { type: Number, required: true },
      impact_description: { type: String, required: true }
    },
    gallery: {
      type: [String],
      validate: {
        validator: (v: string[]) => v.every(url => urlRegex.test(url)),
        message: 'Invalid URL in gallery'
      }
    }
  }
});

const CareerSchema = new Schema({
  category_specific: {
    key_outcomes: {
      participants: { type: Number, required: true },
      skills_developed: [String],
      job_placements: { type: Number, required: true }
    }
  }
});

const CompetitionSchema = new Schema({
  category_specific: {
    key_highlights: {
      participants: { type: Number, required: true },
      winners: [String],
      prizes: [String]
    },
    sponsors: [String],
    gallery: {
      type: [String],
      validate: {
        validator: (v: string[]) => v.every(url => urlRegex.test(url)),
        message: 'Invalid URL in gallery'
      }
    },
    competition_details_link: { 
      type: String, 
      required: true,
      validate: {
        validator: (v: string) => urlRegex.test(v),
        message: 'Invalid competition details URL format'
      }
    }
  }
});

// Create base model and discriminators
const Project = mongoose.models?.Project || mongoose.model("Project", projectSchema);

// Register discriminators for each category
Project.discriminator('Technical', TechnicalSchema);
Project.discriminator('Media', MediaSchema);
Project.discriminator('Event', EventSchema);
Project.discriminator('Community', CommunitySchema);
Project.discriminator('Career', CareerSchema);
Project.discriminator('Competition', CompetitionSchema);

export default Project;