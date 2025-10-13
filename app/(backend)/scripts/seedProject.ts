import mongoose from "mongoose";
import Project from "../models/project";
import { structureProjectData } from '../controllers/projectController'; 

// Ensure the CloudFront domain is set
if (!process.env.CLOUDFRONT_DOMAIN) {
    throw new Error("CLOUDFRONT_DOMAIN environment variable is not set.");
}

const generateCloudFrontUrl = (path: string): string => {
  // 1. Clean the domain: remove protocol and any trailing slashes
  const cleanDomain = process.env.CLOUDFRONT_DOMAIN!
    .replace(/^https?:\/\//, '')
    .replace(/\/$/, '');

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `https://${cleanDomain}/${cleanPath}`;
};
const testProjects = [
    {
        title: "AI Banking Platform",
        description: "Revolutionary AI-powered banking platform for seamless financial transactions",
        type: "large-scaled",
        status: "ongoing",
        category: "technical",
        labels: ["AI", "Banking", "FinTech"],
        image_url: generateCloudFrontUrl("projects/ai-banking-platform.jpg"),
        meta_title: "AI Banking Platform - FinTech Club",
        meta_description: "A revolutionary AI banking platform.",
        // --- Category Specific Fields ---
        goals: ["Create an AI-powered banking platform"],
        scope: ["Full-stack development with AI integration"],
        team_structure: [{ role: "Lead Developer", leader_name: "John Doe", responsibilities: ["Architecture design"], skills: ["Python", "TensorFlow"] }],
        project_leader_name: "John Doe",
        timeline: [{ time: new Date("2024-01-15"), milestoneTitle: "Phase 1: Research", milestoneDescription: "Initial research and planning." }],
    },
    {
        title: "Business Workshop Series",
        description: "Comprehensive business workshops for students and professionals",
        type: "department",
        status: "ongoing",
        category: "event",
        department: "Business",
        department_description: "Leading business innovation and entrepreneurship",
        labels: ["Workshop", "Business", "Networking"],
        image_url: generateCloudFrontUrl("projects/business-workshop.jpg"),
        meta_title: "Business Workshop Series - FinTech Club",
        meta_description: "Workshops for students and professionals.",
        // --- Category Specific Fields ---
        goals: ["Provide practical business knowledge"],
        target_audience: ["Students", "Young professionals"],
        key_activities: [{ description: "Case studies" }, { description: "Guest speakers" }],
        guest_speakers: [{ name: "Jane Smith", avatar_url: generateCloudFrontUrl("speakers/jane-smith.jpg"), position: "CEO, TechStart", linkedin_url: "https://linkedin.com/in/janesmith" }],
        team_structure: [{ role: "Event Coordinator", leader_name: "Alice Johnson" }],
        project_leader_name: "Alice Johnson",
    },
    {
        title: "Latest FinTech Podcasts",
        description: "Our dynamic feed of the most recent podcast episodes, updated automatically.",
        type: "large-scaled",
        status: "ongoing", // 'ongoing' makes more sense for a dynamic list
        category: "media",
        labels: ["Podcast", "Education", "FinTech"],
        image_url: generateCloudFrontUrl("projects/latest-podcasts.jpg"),
        meta_title: "Latest FinTech Podcasts - FinTech Club",
        meta_description: "A dynamic feed of our latest podcast episodes.",
        // --- Category Specific Fields that define the RULE ---
        auto_update_type: 'Podcast', 
        auto_update_limit: 5,       
        project_leader_name: "Bob Wilson",
    },
    // This project will dynamically fetch the 3 latest articles.
    {
        title: "Recent FinTech Articles",
        description: "The latest articles and insights from our team, always up-to-date.",
        type: "large-scaled",
        status: "ongoing",
        category: "media",
        labels: ["Articles", "DeFi", "Analysis"],
        image_url: generateCloudFrontUrl("projects/latest-articles.jpg"),
        meta_title: "Recent FinTech Articles - FinTech Club",
        meta_description: "The latest articles and insights from our team.",
        
        // --- Category Specific Fields that define the RULE ---
        auto_update_type: 'Article',
        auto_update_limit: 3,
        project_leader_name: "Jane Smith",
    }
];

async function seedProjects() {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected. Starting project seeding...");

    // 1. Clear existing projects collection
    console.log("Clearing existing projects...");
    await Project.deleteMany({});

    // 2. Loop through the test data and save each project
    //    No manual fetching or linking is needed anymore.
    for (const projectData of testProjects) {
        try {
            const structuredData = structureProjectData(projectData);
            const project = new Project(structuredData);
            await project.save();
            console.log(`✅ Seeded project: ${project.title}`);
        } catch (error: any) {
            console.error(`❌ Error seeding project "${projectData.title}": ${error.message}`);
        }
    }

    console.log("\n--- Seeding Complete ---");
    await mongoose.disconnect();
}

seedProjects().catch(err => {
    console.error("An unexpected error occurred during seeding:", err);
    mongoose.disconnect();
});