import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
import Project from "../models/project";
import { invalidateCacheByPattern } from "../libs/redis";

const CLOUDFRONT_DOMAIN = process.env.CLOUDFRONT_DOMAIN || "d1234567890abc.cloudfront.net";
const generateCloudFrontUrl = (path: string) => {
  // Remove any leading slash from path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Clean the domain - remove any invisible characters and ensure proper format
  const cleanDomain = CLOUDFRONT_DOMAIN
    .replace(/[^\x20-\x7E]/g, '') // Remove invisible characters
    .replace(/^https?:\/\//, '') // Remove http:// or https:// if present
    .replace(/\/$/, ''); // Remove trailing slash
  
  return `https://${cleanDomain}/${cleanPath}`;
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
  // Department project (Event) - Business Department
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
  // Second Business Department project (Career)
  {
    title: "Business Mentorship Program",
    description: "One-on-one mentorship program connecting students with business professionals",
    type: "department",
    status: "ongoing",
    category: "career",
    department: "Business",
    department_photo_url: generateCloudFrontUrl("departments/business-photo.jpg"),
    department_description: "Leading business innovation and entrepreneurship",
    labels: ["Mentorship", "Career Development", "Business", "Networking"],
    image_url: generateCloudFrontUrl("projects/business-mentorship.jpg"),
    slug: "business-mentorship-program",
    meta_title: "Business Mentorship Program - FinTech Club",
    meta_description: "One-on-one mentorship program connecting students with business professionals",
    category_specific: {
      company: {
        name: "Business Industry Partners",
        description: "Leading business professionals and executives"
      },
      goals: "Provide personalized career guidance and industry insights",
      target_audience: "Business students and young professionals",
      key_outcomes: {
        participants: 80,
        attendance_rate: 95,
        skills_developed: ["Leadership", "Strategic thinking", "Industry knowledge"],
        job_placements: 25
      },
      event_details_link: generateCloudFrontUrl("events/business-mentorship-details.pdf")
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
  // Ongoing HR Department project (Community)
  {
    title: "Community Outreach Initiative",
    description: "Ongoing community development and social impact programs",
    type: "department",
    status: "ongoing",
    category: "community",
    department: "Human Resources",
    department_photo_url: generateCloudFrontUrl("departments/hr-photo.jpg"),
    department_description: "Supporting community development and social impact",
    labels: ["Community", "Social Impact", "Development", "Outreach"],
    image_url: generateCloudFrontUrl("projects/community-outreach.jpg"),
    slug: "community-outreach-initiative",
    meta_title: "Community Outreach Initiative - FinTech Club",
    meta_description: "Ongoing community development and social impact programs",
    category_specific: {
      goals: "Build sustainable community partnerships and drive social impact",
      target_audience: "Local communities and organizations",
      key_activities: ["Partnership building", "Volunteer coordination", "Impact assessment"],
      ngos: [
        {
          name: "Community Development Alliance",
          description: "Local non-profit focused on community growth"
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
        volunteers: 40,
        funds_raised: 8000,
        communities_reached: 5,
        beneficiaries_served: 350
      }
    }
  },
  // Second HR Department project (Event)
  {
    title: "HR Leadership Summit",
    description: "Annual summit for HR professionals and students",
    type: "department",
    status: "ongoing",
    category: "event",
    department: "Human Resources",
    department_photo_url: generateCloudFrontUrl("departments/hr-photo.jpg"),
    department_description: "Supporting community development and social impact",
    labels: ["Leadership", "HR", "Summit", "Professional Development"],
    image_url: generateCloudFrontUrl("projects/hr-leadership-summit.jpg"),
    slug: "hr-leadership-summit",
    meta_title: "HR Leadership Summit - FinTech Club",
    meta_description: "Annual summit for HR professionals and students",
    category_specific: {
      goals: "Foster leadership skills and industry knowledge in HR",
      target_audience: "HR students and professionals",
      format: "hybrid",
      key_activities: ["Keynote speeches", "Panel discussions", "Networking", "Workshops"],
      guest_speakers: [
        {
          name: "Dr. Emily Chen",
          avatar_url: generateCloudFrontUrl("speakers/emily-chen.jpg"),
          position: "HR Director, Global Tech Corp",
          linkedin_url: "https://linkedin.com/in/emilychen"
        }
      ],
      team_leader: [
        {
          name: "David Wilson",
          role: "Summit Coordinator",
          position: "HR Department Co-Lead"
        }
      ],
      key_metrics: {
        attendees: 200,
        attendance_rate: 88,
        media_coverage: "Industry publication coverage"
      }
    }
  },
  // Completed project (Community) - 2023
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
  // Ongoing Technical Department project (Technical)
  {
    title: "Blockchain Development Lab",
    description: "Hands-on blockchain development and smart contract creation",
    type: "department",
    status: "ongoing",
    category: "technical",
    department: "Technical",
    department_photo_url: generateCloudFrontUrl("departments/technical-photo.jpg"),
    department_description: "Leading technical innovation and development",
    labels: ["Blockchain", "Smart Contracts", "Development", "Innovation"],
    image_url: generateCloudFrontUrl("projects/blockchain-lab.jpg"),
    slug: "blockchain-development-lab",
    meta_title: "Blockchain Development Lab - FinTech Club",
    meta_description: "Hands-on blockchain development and smart contract creation",
    category_specific: {
      goals: "Develop practical blockchain applications and smart contracts",
      scope: "Full blockchain development lifecycle from concept to deployment",
      team_structure: [
        {
          role: "Blockchain Developer",
          responsibilities: ["Smart contract development", "DApp creation", "Testing"],
          skills: ["Solidity", "Web3.js", "Ethereum", "React"]
        },
        {
          role: "Frontend Developer",
          responsibilities: ["User interface", "Wallet integration", "User experience"],
          skills: ["React", "TypeScript", "Web3", "CSS"]
        }
      ],
      team_leader: [
        {
          name: "Alex Thompson",
          role: "Technical Lead",
          position: "Technical Department Lead"
        }
      ],
      timeline: [
        {
          milestone: "Phase 1: Smart Contract Development",
          date: "2024-02-01",
          status: "in-progress"
        },
        {
          milestone: "Phase 2: Frontend Development",
          date: "2024-03-01",
          status: "planned"
        }
      ],
      product_link: generateCloudFrontUrl("projects/blockchain-demo.html")
    }
  },
  // Second Technical Department project (Media)
  {
    title: "Tech Tutorial Series",
    description: "Educational video series covering FinTech technologies and tools",
    type: "department",
    status: "ongoing",
    category: "media",
    department: "Technical",
    department_photo_url: generateCloudFrontUrl("departments/technical-photo.jpg"),
    department_description: "Leading technical innovation and development",
    labels: ["Tutorials", "Education", "Technology", "Video"],
    image_url: generateCloudFrontUrl("projects/tech-tutorials.jpg"),
    slug: "tech-tutorial-series",
    meta_title: "Tech Tutorial Series - FinTech Club",
    meta_description: "Educational video series covering FinTech technologies and tools",
    category_specific: {
      goals: "Create comprehensive tutorials for FinTech technologies",
      target_audience: "Students and professionals learning FinTech",
      team_structure: [
        {
          role: "Content Creator",
          responsibilities: ["Script writing", "Video production", "Editing"],
          skills: ["Video editing", "Content creation", "Technical writing"]
        }
      ],
      team_leader: [
        {
          name: "Sarah Kim",
          role: "Content Director",
          position: "Technical Department Co-Lead"
        }
      ],
      product_library: [
        {
          title: "Introduction to APIs",
          description: "Understanding REST APIs in FinTech",
          video_url: generateCloudFrontUrl("tutorials/api-intro.mp4")
        },
        {
          title: "Database Design Basics",
          description: "Database fundamentals for FinTech applications",
          video_url: generateCloudFrontUrl("tutorials/database-basics.mp4")
        }
      ],
      library_link: generateCloudFrontUrl("tutorials/tech-tutorial-series.html")
    }
  },
  // Ongoing Marketing Department project (Event)
  {
    title: "Digital Marketing Campaign",
    description: "Comprehensive digital marketing campaign for FinTech Club initiatives",
    type: "department",
    status: "ongoing",
    category: "event",
    department: "Marketing",
    department_photo_url: generateCloudFrontUrl("departments/marketing-photo.jpg"),
    department_description: "Driving brand awareness and engagement",
    labels: ["Marketing", "Digital", "Campaign", "Branding"],
    image_url: generateCloudFrontUrl("projects/digital-marketing.jpg"),
    slug: "digital-marketing-campaign",
    meta_title: "Digital Marketing Campaign - FinTech Club",
    meta_description: "Comprehensive digital marketing campaign for FinTech Club initiatives",
    category_specific: {
      goals: "Increase brand awareness and engagement across digital platforms",
      target_audience: "Students, professionals, and industry partners",
      format: "online",
      key_activities: ["Social media management", "Content creation", "Email marketing", "Analytics"],
      team_leader: [
        {
          name: "Lisa Park",
          role: "Marketing Director",
          position: "Marketing Department Lead"
        }
      ],
      key_metrics: {
        attendees: 1000,
        attendance_rate: 75,
        media_coverage: "Social media engagement"
      }
    }
  },
  // Second Marketing Department project (Career)
  {
    title: "Personal Branding Workshop",
    description: "Workshop series on building personal brands in FinTech",
    type: "department",
    status: "ongoing",
    category: "career",
    department: "Marketing",
    department_photo_url: generateCloudFrontUrl("departments/marketing-photo.jpg"),
    department_description: "Driving brand awareness and engagement",
    labels: ["Personal Branding", "Career", "Workshop", "Marketing"],
    image_url: generateCloudFrontUrl("projects/personal-branding.jpg"),
    slug: "personal-branding-workshop",
    meta_title: "Personal Branding Workshop - FinTech Club",
    meta_description: "Workshop series on building personal brands in FinTech",
    category_specific: {
      company: {
        name: "Marketing Industry Partners",
        description: "Leading marketing professionals and agencies"
      },
      goals: "Help students build strong personal brands in FinTech",
      target_audience: "Marketing students and young professionals",
      key_outcomes: {
        participants: 60,
        attendance_rate: 90,
        skills_developed: ["Personal branding", "Social media", "Networking"],
        job_placements: 15
      }
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