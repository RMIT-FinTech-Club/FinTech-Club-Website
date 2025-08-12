import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import Project from "../models/project";
import { invalidateCacheByPattern } from "../libs/redis";

const CLOUDFRONT_DOMAIN = process.env.CLOUDFRONT_DOMAIN || "d1234567890abc.cloudfront.net";
const generateCloudFrontUrl = (path: string) => {
  // Remove any leading slash from path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if CLOUDFRONT_DOMAIN already includes https://
  if (CLOUDFRONT_DOMAIN.includes('https://')) {
    // Remove trailing slash if present
    const cleanDomain = CLOUDFRONT_DOMAIN.endsWith('/') ? CLOUDFRONT_DOMAIN.slice(0, -1) : CLOUDFRONT_DOMAIN;
    return `${cleanDomain}/${cleanPath}`;
  } else {
    return `https://${CLOUDFRONT_DOMAIN}/${cleanPath}`;
  }
};

// Helper Functions
const isValidS3Url = (url: string): boolean => {
  const cloudfrontUrlRegex = /^https?:\/\/(?:[a-zA-Z0-9\-]+\.)*cloudfront\.net\/.+/;
  return cloudfrontUrlRegex.test(url);
};

const generateStructuredData = (project: any) => {
  // Validate URLs
  if (project.image_url && !isValidS3Url(project.image_url)) {
    throw new Error(`Invalid S3 URL: ${project.image_url}`);
  }
  
  if (project.department_photo_url && !isValidS3Url(project.department_photo_url)) {
    throw new Error(`Invalid S3 URL: ${project.department_photo_url}`);
  }

  // Validate required fields
  if (!project.title || !project.description || !project.slug) {
    throw new Error("Missing required fields: title, description, or slug");
  }

  // Validate conditional fields
  if (project.status === "completed" && !project.year) {
    throw new Error("Completed projects must have a year");
  }

  if (project.type === "department" && !project.department) {
    throw new Error("Department projects must have a department");
  }

  // Validate SEO fields
  if (!project.meta_title || !project.meta_description) {
    throw new Error("Missing SEO fields: meta_title or meta_description");
  }

  return project;
};

const testProjects = [
  // Large-scaled project (Technical)
  {
    title: "AI Banking Platform",
    description: "Revolutionary AI-powered banking platform for seamless financial transactions",
    type: "large-scaled",
    status: "ongoing",
    category: "technical",
    labels: ["AI", "Banking", "FinTech", "Machine Learning"],
    image_url: generateCloudFrontUrl("projects/ai-banking-platform.jpg"),
    slug: "ai-banking-platform",
    meta_title: "AI Banking Platform - FinTech Club",
    meta_description: "Revolutionary AI-powered banking platform for seamless financial transactions",
    category_specific: {
      goals: "Create an AI-powered banking platform that revolutionizes financial transactions",
      scope: "Full-stack development with AI integration",
      team_structure: [
        {
          role: "Lead Developer",
          responsibilities: ["Architecture design", "AI integration"],
          skills: ["Python", "TensorFlow", "React", "Node.js"]
        }
      ],
      team_leader: [
        {
          name: "John Doe",
          role: "Project Lead",
          position: "Senior Developer"
        }
      ],
      timeline: [
        {
          milestone: "Phase 1: Research",
          date: "2024-01-15",
          status: "completed"
        }
      ]
    }
  },
  // Department project (Event)
  {
    title: "Business Workshop Series",
    description: "Comprehensive business workshops for students and professionals",
    type: "department",
    status: "ongoing",
    category: "event",
    department: "Business",
    department_photo_url: generateCloudFrontUrl("departments/business-photo.jpg"),
    department_description: "Leading business innovation and entrepreneurship",
    labels: ["Workshop", "Business", "Education", "Networking"],
    image_url: generateCloudFrontUrl("projects/business-workshop.jpg"),
    slug: "business-workshop-series",
    meta_title: "Business Workshop Series - FinTech Club",
    meta_description: "Comprehensive business workshops for students and professionals",
    category_specific: {
      goals: "Provide practical business knowledge through interactive workshops",
      target_audience: "Students and young professionals",
      format: "in-person",
      key_activities: ["Case studies", "Guest speakers", "Networking sessions"],
      guest_speakers: [
        {
          name: "Jane Smith",
          avatar_url: generateCloudFrontUrl("speakers/jane-smith.jpg"),
          position: "CEO, TechStart",
          linkedin_url: "https://linkedin.com/in/janesmith"
        }
      ],
      team_leader: [
        {
          name: "Alice Johnson",
          role: "Event Coordinator",
          position: "Business Department Lead"
        }
      ],
      key_metrics: {
        attendees: 150,
        attendance_rate: 85,
        media_coverage: "Local news coverage"
      }
    }
  },
  // Completed project (Media)
  {
    title: "FinTech Podcast Series",
    description: "Educational podcast series covering FinTech trends and innovations",
    type: "large-scaled",
    status: "completed",
    category: "media",
    year: 2023,
    labels: ["Podcast", "Education", "FinTech", "Media"],
    image_url: generateCloudFrontUrl("projects/fintech-podcast.jpg"),
    slug: "fintech-podcast-series-2023",
    meta_title: "FinTech Podcast Series 2023 - FinTech Club",
    meta_description: "Educational podcast series covering FinTech trends and innovations",
    category_specific: {
      goals: "Educate audience about FinTech trends through engaging podcast content",
      target_audience: "FinTech enthusiasts and professionals",
      team_structure: [
        {
          role: "Podcast Host",
          responsibilities: ["Content creation", "Interview coordination"],
          skills: ["Public speaking", "Content creation", "Audio editing"]
        }
      ],
      team_leader: [
        {
          name: "Bob Wilson",
          role: "Podcast Director",
          position: "Media Lead"
        }
      ],
      product_library: [
        {
          title: "Episode 1: Introduction to FinTech",
          description: "Overview of FinTech industry",
          audio_url: generateCloudFrontUrl("podcasts/episode1.mp3")
        }
      ]
    }
  },
  // Completed project (Community)
  {
    title: "Financial Literacy for Youth",
    description: "Community outreach program teaching financial literacy to young people",
    type: "department",
    status: "completed",
    category: "community",
    year: 2023,
    department: "Human Resources",
    department_photo_url: generateCloudFrontUrl("departments/hr-photo.jpg"),
    department_description: "Supporting community development and social impact",
    labels: ["Community", "Education", "Youth", "Financial Literacy"],
    image_url: generateCloudFrontUrl("projects/financial-literacy.jpg"),
    slug: "financial-literacy-youth-2023",
    meta_title: "Financial Literacy for Youth 2023 - FinTech Club",
    meta_description: "Community outreach program teaching financial literacy to young people",
    category_specific: {
      goals: "Empower youth with essential financial knowledge and skills",
      target_audience: "High school students and young adults",
      key_activities: ["Workshops", "Mentoring", "Community events"],
      ngos: [
        {
          name: "Youth Finance Initiative",
          description: "Non-profit focused on youth financial education"
        }
      ],
      team_leader: [
        {
          name: "Carol Davis",
          role: "Community Coordinator",
          position: "HR Department Lead"
        }
      ],
      key_metrics: {
        volunteers: 25,
        funds_raised: 5000,
        communities_reached: 3,
        beneficiaries_served: 200
      },
      gallery: [
        generateCloudFrontUrl("gallery/workshop1.jpg"),
        generateCloudFrontUrl("gallery/workshop2.jpg")
      ]
    }
  },
  // Completed project (Career)
  {
    title: "FinTech Career Fair 2023",
    description: "Annual career fair connecting students with FinTech industry leaders",
    type: "large-scaled",
    status: "completed",
    category: "career",
    year: 2023,
    labels: ["Career", "Networking", "Employment", "Industry"],
    image_url: generateCloudFrontUrl("projects/career-fair.jpg"),
    slug: "fintech-career-fair-2023",
    meta_title: "FinTech Career Fair 2023 - FinTech Club",
    meta_description: "Annual career fair connecting students with FinTech industry leaders",
    category_specific: {
      company: {
        name: "FinTech Industry Partners",
        description: "Leading FinTech companies and startups"
      },
      goals: "Connect students with FinTech career opportunities",
      target_audience: "University students and recent graduates",
      key_outcomes: {
        participants: 300,
        attendance_rate: 90,
        skills_developed: ["Networking", "Interview preparation", "Industry knowledge"],
        job_placements: 45
      },
      gallery: [
        generateCloudFrontUrl("gallery/career-fair1.jpg"),
        generateCloudFrontUrl("gallery/career-fair2.jpg")
      ]
    }
  },
  // Completed project (Competition)
  {
    title: "FinTech Innovation Challenge 2023",
    description: "Annual competition challenging students to solve real FinTech problems",
    type: "large-scaled",
    status: "completed",
    category: "competition",
    year: 2023,
    labels: ["Competition", "Innovation", "Problem Solving", "Awards"],
    image_url: generateCloudFrontUrl("projects/innovation-challenge.jpg"),
    slug: "fintech-innovation-challenge-2023",
    meta_title: "FinTech Innovation Challenge 2023 - FinTech Club",
    meta_description: "Annual competition challenging students to solve real FinTech problems",
    category_specific: {
      theme: "Sustainable Finance Solutions",
      goals: "Foster innovation and problem-solving skills in FinTech",
      target_audience: "University students and young innovators",
      format: "hybrid",
      sideline_activities: [
        {
          name: "Workshop Series",
          description: "Technical workshops on FinTech tools and platforms"
        }
      ],
      mentors: [
        {
          name: "Dr. Sarah Chen",
          avatar_url: generateCloudFrontUrl("mentors/sarah-chen.jpg"),
          position: "FinTech Professor",
          linkedin_url: "https://linkedin.com/in/sarahchen"
        }
      ],
      judges: [
        {
          name: "Mike Rodriguez",
          avatar_url: generateCloudFrontUrl("judges/mike-rodriguez.jpg"),
          position: "CTO, FinTech Solutions",
          linkedin_url: "https://linkedin.com/in/mikerodriguez"
        }
      ],
      sponsor_brands: [
        generateCloudFrontUrl("sponsors/sponsor1.png"),
        generateCloudFrontUrl("sponsors/sponsor2.png")
      ],
      key_metrics: {
        participants: 120,
        workshops: 8,
        judges_mentors: 15,
        sponsors: 10,
        funds_raised: 15000,
        social_media_engagement: 5000,
        total_attendances: 800
      },
      gallery: [
        generateCloudFrontUrl("gallery/competition1.jpg"),
        generateCloudFrontUrl("gallery/competition2.jpg")
      ]
    }
  }
];

async function seedProjects() {
  console.log("Starting project seeding...");
  
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI!, {
      dbName: "fintech",
    });
    console.log("Connected to MongoDB");

    let successCount = 0;
    let errorCount = 0;

    for (const projectData of testProjects) {
      try {
        // Validate and structure data using helper function
        const validatedProject = generateStructuredData(projectData);
        
        // Create unique filter based on project type
        let filter: any = { slug: validatedProject.slug };
        
        if (validatedProject.status === "completed" && validatedProject.year) {
          filter.year = validatedProject.year;
        }
        if (validatedProject.type === "department" && validatedProject.department) {
          filter.department = validatedProject.department;
        }

        // Use findOneAndUpdate with upsert for idempotency
        const result = await Project.findOneAndUpdate(
          filter,
          validatedProject,
          { 
            upsert: true, 
            new: true,
            setDefaultsOnInsert: true 
          }
        );

        console.log(`Seeded project: ${validatedProject.title}`);
        successCount++;

        // Invalidate cache after each successful seeding with error handling
        try {
          await invalidateCacheByPattern("projects:*");
        } catch (cacheError) {
          console.warn(`Cache invalidation failed for ${validatedProject.title}: ${cacheError}`);
        }
        
      } catch (error: any) {
        console.error(`Error seeding project ${projectData.title}: ${error.message}`);
        errorCount++;
      }
    }

    // Get final count
    const totalProjects = await Project.countDocuments();
    
    console.log("\nSeeding Summary:");
    console.log(`Successfully seeded: ${successCount} projects`);
    console.log(`Errors: ${errorCount} projects`);
    console.log(`Total projects in database: ${totalProjects}`);
    
    if (errorCount === 0) {
      console.log("Seeding completed successfully!");
    } else {
      console.log("Seeding completed with some errors.");
    }

  } catch (error: any) {
    console.error("Seeding failed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run the seeding
seedProjects(); 