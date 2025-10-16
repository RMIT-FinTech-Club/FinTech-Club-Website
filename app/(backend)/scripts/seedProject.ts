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

    // =============================================
    // =========== TECHNOLOGY DEPARTMENT ===========
    // =============================================
    {
        title: "Web3 Development Bootcamp",
        description: "An intensive bootcamp covering the fundamentals of Web3 and decentralized applications.",
        type: "department",
        status: "ongoing",
        category: "technical",
        department: "Technology",
        department_description: "This semester, we’re working on three exciting projects: a blockchain-powered History Chess Game blending strategy with Vietnamese culture, an AI Financial Coach based on the 6 Jar Money Management system, and a feature-rich upgrade of the FinTech Club Website. Beyond practical coding projects, we also foster growth through mentorship, internal training, and a supportive community that empowers every member to thrive.",
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
        title: "Decentralized Finance (DeFi) Protocol",
        description: "Building a new DeFi protocol for lending and borrowing on the Ethereum blockchain.",
        type: "department",
        status: "ongoing",
        category: "technical",
        department: "Technology",
        department_description: "This semester, we’re working on three exciting projects: a blockchain-powered History Chess Game blending strategy with Vietnamese culture, an AI Financial Coach based on the 6 Jar Money Management system, and a feature-rich upgrade of the FinTech Club Website. Beyond practical coding projects, we also foster growth through mentorship, internal training, and a supportive community that empowers every member to thrive.",
        labels: ["DeFi", "Smart Contracts", "Ethereum"],
        image_url: generateCloudFrontUrl("projects/tech/defi-protocol.png"),
        meta_title: "DeFi Lending Protocol - FinTech Club",
        meta_description: "A new DeFi protocol for decentralized lending.",
        goals: ["Launch a secure and audited lending platform"],
        team_structure: [{ role: "Smart Contract Developer", leader_name: "Satoshi Nakamoto" }],
        project_leader_name: "Satoshi Nakamoto",
    },
    {
        title: "Algorithmic Trading Bot Challenge",
        description: "A competitive challenge for members to design, build, and test their own trading algorithms.",
        type: "department",
        status: "ongoing",
        category: "competition",
        department: "Technology",
        department_description: "This semester, we’re working on three exciting projects: a blockchain-powered History Chess Game blending strategy with Vietnamese culture, an AI Financial Coach based on the 6 Jar Money Management system, and a feature-rich upgrade of the FinTech Club Website. Beyond practical coding projects, we also foster growth through mentorship, internal training, and a supportive community that empowers every member to thrive.",
        labels: ["Algo-Trading", "Python", "Competition"],
        image_url: generateCloudFrontUrl("projects/tech/algo-challenge.png"),
        meta_title: "Algorithmic Trading Challenge - FinTech Club",
        meta_description: "A competitive challenge for algorithmic trading.",
        goals: ["Foster innovation in quantitative finance"],
        team_structure: [{ role: "Competition Lead", leader_name: "Ada Lovelace" }],
        project_leader_name: "Ada Lovelace",
    },
    {
        title: "Club's Mobile App Development",
        description: "Creating a dedicated mobile application for club members to access events, news, and networking.",
        type: "department",
        status: "ongoing",
        category: "technical",
        department: "Technology",
        department_description: "This semester, we’re working on three exciting projects: a blockchain-powered History Chess Game blending strategy with Vietnamese culture, an AI Financial Coach based on the 6 Jar Money Management system, and a feature-rich upgrade of the FinTech Club Website. Beyond practical coding projects, we also foster growth through mentorship, internal training, and a supportive community that empowers every member to thrive.",
        labels: ["Mobile App", "React Native", "Community"],
        image_url: generateCloudFrontUrl("projects/tech/mobile-app.png"),
        meta_title: "FinTech Club Mobile App - FinTech Club",
        meta_description: "A mobile app for club members.",
        goals: ["Enhance member engagement and accessibility"],
        team_structure: [{ role: "Mobile Lead", leader_name: "Grace Hopper" }],
        project_leader_name: "Grace Hopper",
    },


    // =============================================
    // ============ BUSINESS DEPARTMENT ============
    // =============================================
    {
        title: "Business Workshop Series",
        description: "Comprehensive business workshops for students and professionals",
        type: "department",
        status: "ongoing",
        category: "event",
        department: "Business",
        department_description: "This semester, we are leading two key initiatives: the Bi-weekly Article Series, which explores business and FinTech topics with academic depth and relevance, and Breaking the Curve, a workshop series that helps students excel academically through interactive sessions, expert insights, and practical learning. By engaging in writing, research, and discussions, members develop both analytical thinking and industry-ready skills while contributing to the club’s knowledge-sharing culture.",
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
    {
        title: "Venture Capital Pitch Day",
        description: "An exclusive event where student-led startups pitch their ideas to a panel of venture capitalists.",
        type: "department",
        status: "ongoing",
        category: "event",
        department: "Business",
        department_description: "This semester, we are leading two key initiatives: the Bi-weekly Article Series, which explores business and FinTech topics with academic depth and relevance, and Breaking the Curve, a workshop series that helps students excel academically through interactive sessions, expert insights, and practical learning. By engaging in writing, research, and discussions, members develop both analytical thinking and industry-ready skills while contributing to the club’s knowledge-sharing culture.",
        labels: ["Venture Capital", "Startups", "Pitching"],
        image_url: generateCloudFrontUrl("projects/business/vc-pitch-day.png"),
        meta_title: "Venture Capital Pitch Day - FinTech Club",
        meta_description: "An event for student startups to pitch to VCs.",
        goals: ["Connect student entrepreneurs with investors"],
        team_structure: [{ role: "Program Manager", leader_name: "Warren Buffett" }],
        project_leader_name: "Warren Buffett",
    },
    {
        title: "FinTech Market Research Report",
        description: "A quarterly report analyzing the latest trends, challenges, and opportunities in the FinTech industry.",
        type: "department",
        status: "ongoing",
        category: "community",
        department: "Business",
        department_description: "This semester, we are leading two key initiatives: the Bi-weekly Article Series, which explores business and FinTech topics with academic depth and relevance, and Breaking the Curve, a workshop series that helps students excel academically through interactive sessions, expert insights, and practical learning. By engaging in writing, research, and discussions, members develop both analytical thinking and industry-ready skills while contributing to the club’s knowledge-sharing culture.",
        labels: ["Market Research", "Analysis", "Publication"],
        image_url: generateCloudFrontUrl("projects/business/market-report.png"),
        meta_title: "FinTech Market Research Report - FinTech Club",
        meta_description: "Quarterly analysis of the FinTech industry.",
        goals: ["Establish the club as a thought leader in FinTech"],
        team_structure: [{ role: "Lead Analyst", leader_name: "Peter Thiel" }],
        project_leader_name: "Peter Thiel",
    },
    {
        title: "Corporate Partnership Program",
        description: "Developing strategic partnerships with leading financial institutions and tech companies.",
        type: "department",
        status: "ongoing",
        category: "career",
        department: "Business",
        department_description: "This semester, we are leading two key initiatives: the Bi-weekly Article Series, which explores business and FinTech topics with academic depth and relevance, and Breaking the Curve, a workshop series that helps students excel academically through interactive sessions, expert insights, and practical learning. By engaging in writing, research, and discussions, members develop both analytical thinking and industry-ready skills while contributing to the club’s knowledge-sharing culture.",
        labels: ["Partnerships", "Networking", "Corporate"],
        image_url: generateCloudFrontUrl("projects/business/partnerships.png"),
        meta_title: "Corporate Partnership Program - FinTech Club",
        meta_description: "Developing strategic partnerships with companies.",
        goals: ["Secure sponsorships and career opportunities for members"],
        team_structure: [{ role: "Partnership Lead", leader_name: "Sheryl Sandberg" }],
        project_leader_name: "Sheryl Sandberg",
    },


    // =============================================
    // ============ MARKETING DEPARTMENT ===========
    // =============================================
    {
        title: "FinTech Content Strategy",
        description: "A strategic initiative to create and distribute high-quality FinTech content across all digital platforms.",
        type: "department",
        status: "ongoing",
        category: "media",
        department: "Marketing",
        department_description: "This semester, we’re launching an Internal Training Series to upskill members in content creation, from writing and photography to editing. We’re also powering major campaigns for FTC x Charity and Hack-A-Venture, crafting branding, visual identities, and promotional materials across social media. Additionally, our revamped TikTok Project aims to spotlight member stories through engaging short-form videos, fostering connection and inspiration within the FinTech Club community.",
        labels: ["Content", "SEO", "Social Media"],
        image_url: generateCloudFrontUrl("media/podcast/graphics/Fintechtainment09-Graphic.png"),
        meta_title: "FinTech Content Strategy - FinTech Club",
        meta_description: "A strategic initiative for high-quality FinTech content.",
        goals: ["Increase brand awareness", "Drive engagement"],
        target_audience: ["FinTech enthusiasts", "Investors"],
        team_structure: [{ role: "Marketing Manager", leader_name: "Diana Prince" }],
        project_leader_name: "Diana Prince",
        auto_update_type: 'Article',
        auto_update_limit: 4,
    },
    {
        title: "The FinTech Feed Podcast Launch",
        description: "Launching a weekly podcast featuring interviews with industry leaders, market analysis, and career advice.",
        type: "department",
        status: "ongoing",
        category: "media",
        department: "Marketing",
        department_description: "This semester, we’re launching an Internal Training Series to upskill members in content creation, from writing and photography to editing. We’re also powering major campaigns for FTC x Charity and Hack-A-Venture, crafting branding, visual identities, and promotional materials across social media. Additionally, our revamped TikTok Project aims to spotlight member stories through engaging short-form videos, fostering connection and inspiration within the FinTech Club community.",
        labels: ["Podcast", "Interviews", "Media"],
        image_url: generateCloudFrontUrl("projects/marketing/podcast-launch.png"),
        meta_title: "The FinTech Feed Podcast - FinTech Club",
        meta_description: "A weekly podcast on all things FinTech.",
        goals: ["Reach a wider audience through audio content"],
        team_structure: [{ role: "Podcast Host", leader_name: "Clark Kent" }],
        project_leader_name: "Clark Kent",
    },
    {
        title: "Social Media Growth Campaign",
        description: "A multi-platform campaign to double our social media following and engagement in six months.",
        type: "department",
        status: "ongoing",
        category: "community",
        department: "Marketing",
        department_description: "This semester, we’re launching an Internal Training Series to upskill members in content creation, from writing and photography to editing. We’re also powering major campaigns for FTC x Charity and Hack-A-Venture, crafting branding, visual identities, and promotional materials across social media. Additionally, our revamped TikTok Project aims to spotlight member stories through engaging short-form videos, fostering connection and inspiration within the FinTech Club community.",
        labels: ["Social Media", "Campaign", "Growth"],
        image_url: generateCloudFrontUrl("projects/marketing/social-campaign.png"),
        meta_title: "Social Media Growth Campaign - FinTech Club",
        meta_description: "A campaign to grow our social media presence.",
        goals: ["Double social media followers", "Increase engagement metrics by 50%"],
        team_structure: [{ role: "Social Media Manager", leader_name: "Tony Stark" }],
        project_leader_name: "Tony Stark",
    },
    {
        title: "Brand Ambassador Program",
        description: "Recruiting and managing a team of student brand ambassadors to promote the club on campus.",
        type: "department",
        status: "ongoing",
        category: "community",
        department: "Marketing",
        department_description: "This semester, we’re launching an Internal Training Series to upskill members in content creation, from writing and photography to editing. We’re also powering major campaigns for FTC x Charity and Hack-A-Venture, crafting branding, visual identities, and promotional materials across social media. Additionally, our revamped TikTok Project aims to spotlight member stories through engaging short-form videos, fostering connection and inspiration within the FinTech Club community.",
        labels: ["Ambassadors", "Campus", "Marketing"],
        image_url: generateCloudFrontUrl("projects/marketing/ambassador-program.png"),
        meta_title: "Brand Ambassador Program - FinTech Club",
        meta_description: "A program for student brand ambassadors.",
        goals: ["Increase on-campus brand visibility and event attendance"],
        team_structure: [{ role: "Program Coordinator", leader_name: "Pepper Potts" }],
        project_leader_name: "Pepper Potts",
    },


    // =============================================
    // ========= HUMAN RESOURCES DEPARTMENT ========
    // =============================================
    {
        title: "Annual Recruitment Drive",
        description: "Our yearly drive to recruit talented and passionate students to join the FinTech Club.",
        type: "department",
        status: "ongoing",
        category: "career",
        department: "Human Resources",
        department_description: "This semester, we’re bringing the community together through heartfelt initiatives like the Charity Project for Tu Hanh Pagoda, high-energy bonding at the FinTech Olympics, and the adventurous End of Semester Trip. We also support personal growth with our Internal CV Review Workshop, and add a spark of fun with the festive FTC Halloween celebration. HR is where connections are built, memories are made, and every member feels at home.",
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
    {
        title: "Member Mentorship Program",
        description: "Pairing new members with senior club members to provide guidance, support, and career advice.",
        type: "department",
        status: "ongoing",
        category: "career",
        department: "Human Resources",
        department_description: "This semester, we’re bringing the community together through heartfelt initiatives like the Charity Project for Tu Hanh Pagoda, high-energy bonding at the FinTech Olympics, and the adventurous End of Semester Trip. We also support personal growth with our Internal CV Review Workshop, and add a spark of fun with the festive FTC Halloween celebration. HR is where connections are built, memories are made, and every member feels at home.",
        labels: ["Mentorship", "Career", "Development"],
        image_url: generateCloudFrontUrl("projects/hr/mentorship.png"),
        meta_title: "Member Mentorship Program - FinTech Club",
        meta_description: "A mentorship program for club members.",
        goals: ["Facilitate knowledge transfer", "Improve member retention"],
        team_structure: [{ role: "Mentorship Coordinator", leader_name: "Alfred Pennyworth" }],
        project_leader_name: "Alfred Pennyworth",
    },
    {
        title: "Alumni Networking Gala",
        description: "An annual gala to connect current members with the club's successful alumni network.",
        type: "department",
        status: "ongoing",
        category: "event",
        department: "Human Resources",
        department_description: "This semester, we’re bringing the community together through heartfelt initiatives like the Charity Project for Tu Hanh Pagoda, high-energy bonding at the FinTech Olympics, and the adventurous End of Semester Trip. We also support personal growth with our Internal CV Review Workshop, and add a spark of fun with the festive FTC Halloween celebration. HR is where connections are built, memories are made, and every member feels at home.",
        labels: ["Alumni", "Networking", "Gala"],
        image_url: generateCloudFrontUrl("projects/hr/alumni-gala.png"),
        meta_title: "Alumni Networking Gala - FinTech Club",
        meta_description: "An annual gala for members and alumni.",
        goals: ["Strengthen the alumni community", "Provide networking opportunities"],
        team_structure: [{ role: "Event Lead", leader_name: "Selina Kyle" }],
        project_leader_name: "Selina Kyle",
    },
    {
        title: "Skills Development Workshops",
        description: "A series of workshops focused on developing essential soft and hard skills for a career in FinTech.",
        type: "department",
        status: "ongoing",
        category: "career",
        department: "Human Resources",
        department_description: "This semester, we’re bringing the community together through heartfelt initiatives like the Charity Project for Tu Hanh Pagoda, high-energy bonding at the FinTech Olympics, and the adventurous End of Semester Trip. We also support personal growth with our Internal CV Review Workshop, and add a spark of fun with the festive FTC Halloween celebration. HR is where connections are built, memories are made, and every member feels at home.",
        labels: ["Skills", "Workshop", "Training"],
        image_url: generateCloudFrontUrl("projects/hr/skills-workshops.png"),
        meta_title: "Skills Development Workshops - FinTech Club",
        meta_description: "Workshops to develop essential skills.",
        goals: ["Enhance member employability", "Address skill gaps"],
        team_structure: [{ role: "Training Coordinator", leader_name: "Lucius Fox" }],
        project_leader_name: "Lucius Fox",
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