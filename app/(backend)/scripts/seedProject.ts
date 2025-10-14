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
        image_url: generateCloudFrontUrl("media/podcast/graphics/Fintechtainment02-Graphic.png"),
        meta_title: "AI Banking Platform - FinTech Club",
        meta_description: "A revolutionary AI banking platform.",
        goals: ["Create an AI-powered banking platform"],
        scope: ["Full-stack development with AI integration"],
        team_structure: [{ role: "Lead Developer", leader_name: "John Doe", responsibilities: ["Architecture design"], skills: ["Python", "TensorFlow"] }],
        project_leader_name: "John Doe",
        timeline: [{ time: new Date("2024-01-15"), milestoneTitle: "Phase 1: Research", milestoneDescription: "Initial research and planning." }],
    },
    // --- DEPARTMENT PROJECTS ---
    {
        title: "Business Workshop Series",
        description: "Comprehensive business workshops for students and professionals",
        type: "department",
        status: "ongoing",
        category: "event",
        department: "Business",
        department_description: "Leading business innovation and entrepreneurship",
        labels: ["Workshop", "Business", "Networking"],
        image_url: generateCloudFrontUrl("media/podcast/graphics/Fintechtainment03-Graphic.png"),
        meta_title: "Business Workshop Series - FinTech Club",
        meta_description: "Workshops for students and professionals.",
        goals: ["Provide practical business knowledge"],
        target_audience: ["Students", "Young professionals"],
        key_activities: [{ description: "Case studies" }, { description: "Guest speakers" }],
        guest_speakers: [{ name: "Jane Smith", avatar_url: generateCloudFrontUrl("speakers/jane-smith.jpg"), position: "CEO, TechStart", linkedin_url: "https://linkedin.com/in/janesmith" }],
        team_structure: [{ role: "Event Coordinator", leader_name: "Alice Johnson" }],
        project_leader_name: "Alice Johnson",
    },
    // --- NEW MOCK DATA ---
    {
        title: "Web3 Development Bootcamp",
        description: "An intensive bootcamp covering the fundamentals of Web3 and decentralized applications.",
        type: "department",
        status: "ongoing",
        category: "technical",
        department: "Technology",
        department_description: "Driving technological advancement and digital transformation.",
        labels: ["Web3", "Blockchain", "Development"],
        image_url: generateCloudFrontUrl("media/podcast/graphics/Fintechtainment05-Graphic.png"),
        meta_title: "Web3 Development Bootcamp - FinTech Club",
        meta_description: "An intensive bootcamp on Web3 and dApps.",
        goals: ["Train the next generation of blockchain developers"],
        scope: ["Smart contracts", "dApp architecture"],
        team_structure: [{ role: "Tech Lead", leader_name: "Charlie Brown", responsibilities: ["Curriculum Design"], skills: ["Solidity", "React"] }],
        project_leader_name: "Charlie Brown",
    },
    {
        title: "FinTech Content Strategy",
        description: "A strategic initiative to create and distribute high-quality FinTech content across all digital platforms.",
        type: "department",
        status: "ongoing",
        category: "media",
        department: "Marketing",
        department_description: "Crafting compelling narratives and engaging our community.",
        labels: ["Content", "SEO", "Social Media"],
        image_url: generateCloudFrontUrl("media/podcast/graphics/Fintechtainment09-Graphic.png"),
        meta_title: "FinTech Content Strategy - FinTech Club",
        meta_description: "A strategic initiative for high-quality FinTech content.",
        goals: ["Increase brand awareness", "Drive engagement"],
        target_audience: ["FinTech enthusiasts", "Investors"],
        team_structure: [{ role: "Marketing Manager", leader_name: "Diana Prince" }],
        project_leader_name: "Diana Prince",
        auto_update_type: 'Article', // This media project will show latest articles
        auto_update_limit: 4,
    },
    {
        title: "Annual Recruitment Drive",
        description: "Our yearly drive to recruit talented and passionate students to join the FinTech Club.",
        type: "department",
        status: "ongoing",
        category: "career",
        department: "Human Resources",
        department_description: "Nurturing talent and building a strong, collaborative culture.",
        labels: ["Recruitment", "Networking", "Career"],
        image_url: generateCloudFrontUrl("media/podcast/graphics/Fintechtainment10-Graphic-New.png"),
        meta_title: "Annual Recruitment Drive - FinTech Club",
        meta_description: "Join the FinTech Club through our annual recruitment drive.",
        goals: ["Attract top talent", "Strengthen the club's member base"],
        target_audience: ["University students"],
        company: { name: "FinTech Club", logo_url: generateCloudFrontUrl("logos/club-logo.png") },
        team_structure: [{ role: "HR Lead", leader_name: "Bruce Wayne" }],
        project_leader_name: "Bruce Wayne",
    },
    // --- MEDIA PROJECTS (AUTO-UPDATE) ---
    {
        title: "Latest FinTech Podcasts",
        description: "Our dynamic feed of the most recent podcast episodes, updated automatically.",
        type: "large-scaled",
        status: "ongoing",
        category: "media",
        labels: ["Podcast", "Education", "FinTech"],
        image_url: generateCloudFrontUrl("media/podcast/graphics/Fintechtainment11-Graphic.png"),
        meta_title: "Latest FinTech Podcasts - FinTech Club",
        meta_description: "A dynamic feed of our latest podcast episodes.",
        auto_update_type: 'Podcast', 
        auto_update_limit: 5,     
        project_leader_name: "Bob Wilson",
    },
    {
        title: "Recent FinTech Articles",
        description: "The latest articles and insights from our team, always up-to-date.",
        type: "large-scaled",
        status: "ongoing",
        category: "media",
        labels: ["Articles", "DeFi", "Analysis"],
        image_url: generateCloudFrontUrl("media/podcast/graphics/Fintechtainment08-Graphic.png"),
        meta_title: "Recent FinTech Articles - FinTech Club",
        meta_description: "The latest articles and insights from our team.",
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