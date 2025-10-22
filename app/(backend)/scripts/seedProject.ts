import mongoose from "mongoose";
import Project from "../models/project"; // Đảm bảo đường dẫn này đúng
import dotenv from "dotenv";

// Tải biến môi trường
dotenv.config({ path: ".env" });

// Đảm bảo CLOUDFRONT_DOMAIN đã được set
if (!process.env.CLOUDFRONT_DOMAIN) {
  throw new Error("CLOUDFRONT_DOMAIN environment variable is not set.");
}

const generateCloudFrontUrl = (path: string): string => {
  const cleanDomain = process.env.CLOUDFRONT_DOMAIN!
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `https://${cleanDomain}/${cleanPath}`;
};

// --- Helper cho dữ liệu placeholder ---
const placeholderAvatar = generateCloudFrontUrl("placeholders/avatar.png");

const placeholderLeader = (name: string) => [{
  name,
  avatar_url: placeholderAvatar,
  linkedin_url: "",
}];

const placeholderCompany = {
  name: "FinTech Club",
  logo_url: generateCloudFrontUrl("logos/club-logo.png"),
  website_url: "",
  tagline: "",
};

// --- Mảng testProjects đã được cập nhật (ĐÃ LÀM PHẲNG) ---
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
    // KHÔNG CÒN "category_specific"
    goals: ["Create an AI-powered banking platform"],
    scope: ["Full-stack development with AI integration"],
    team_structure: [{ role: "Lead Developer", leader_name: "John Doe", responsibilities: ["Architecture design"], skills: ["Python", "TensorFlow"] }],
    project_leader: placeholderLeader("John Doe"),
    timeline: [{ time: "2024-01-15", milestoneTitle: "Phase 1: Research", milestoneDescription: "Initial research and planning." }],
  },
  
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
    // KHÔNG CÒN "category_specific"
    goals: ["Train the next generation of blockchain developers"],
    scope: ["Smart contracts", "dApp architecture"],
    team_structure: [{ role: "Tech Lead", leader_name: "Charlie Brown", responsibilities: ["Curriculum Design"], skills: ["Solidity", "React"] }],
    project_leader: placeholderLeader("Charlie Brown"),
    timeline: [{ time: "2024-03-01", milestoneTitle: "Curriculum Finalized", milestoneDescription: "All course materials prepared." }],
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
    // KHÔNG CÒN "category_specific"
    goals: ["Launch a secure and audited lending platform"],
    scope: ["Smart contract development", "Protocol design", "Security audit"],
    team_structure: [{ role: "Smart Contract Developer", leader_name: "Satoshi Nakamoto", responsibilities: ["Develop core contracts"], skills: ["Solidity", "Hardhat"] }],
    project_leader: placeholderLeader("Satoshi Nakamoto"),
    timeline: [{ time: "2024-04-01", milestoneTitle: "Contracts Deployed to Testnet", milestoneDescription: "Begin internal testing." }],
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
    // KHÔNG CÒN "category_specific"
    theme: "Quantitative Finance",
    duration: "4 Weeks",
    platformLocation: ["Online", "RMIT Vietnam"],
    goals: ["Foster innovation in quantitative finance"],
    target_audience: [{ name: "Students", icon: "user-graduate" }],
    featured_activities: ["Introductory Workshop", "Final Pitching"],
    team_structure: [{ role: "Competition Lead", leader_name: "Ada Lovelace" }],
    project_leader: placeholderLeader("Ada Lovelace"),
    details_link: "https://rmit.edu.vn/fintech-club/algo-challenge-2025",
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
    // KHÔNG CÒN "category_specific"
    goals: ["Enhance member engagement and accessibility"],
    scope: ["Frontend (React Native)", "Backend API", "UI/UX Design"],
    team_structure: [{ role: "Mobile Lead", leader_name: "Grace Hopper", responsibilities: ["Lead app development"], skills: ["React Native", "Firebase"] }],
    project_leader: placeholderLeader("Grace Hopper"),
    timeline: [{ time: "2024-05-01", milestoneTitle: "Beta Version Released", milestoneDescription: "Available for internal member testing." }],
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
    // KHÔNG CÒN "category_specific"
    goals: ["Provide practical business knowledge"],
    target_audience: [
      { name: "Students", icon: "user-graduate" },
      { name: "Young professionals", icon: "briefcase" },
    ],
    featured_activities: ["Case studies", "Guest speakers", "Networking sessions"],
    guest_speakers: [{ name: "Jane Smith", avatar_url: generateCloudFrontUrl("speakers/jane-smith.jpg"), position: "CEO, TechStart", linkedin_url: "https://linkedin.com/in/janesmith" }],
    team_structure: [{ role: "Event Coordinator", leader_name: "Alice Johnson" }],
    project_leader: placeholderLeader("Alice Johnson"),
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
    // KHÔNG CÒN "category_specific"
    goals: ["Connect student entrepreneurs with investors"],
    target_audience: [{ name: "Student Startups", icon: "rocket" }, { name: "Investors", icon: "chart-line" }],
    featured_activities: ["Startup Pitches", "VC Panel Discussion", "Networking"],
    team_structure: [{ role: "Program Manager", leader_name: "Warren Buffett" }],
    project_leader: placeholderLeader("Warren Buffett"),
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
    // KHÔNG CÒN "category_specific"
    goals: ["Establish the club as a thought leader in FinTech"],
    target_audience: [{ name: "FinTech Community", icon: "users" }, { name: "Industry Professionals", icon: "briefcase" }],
    featured_activities: ["Quarterly Report Publishing", "Data Analysis & Insights"],
    team_structure: [{ role: "Lead Analyst", leader_name: "Peter Thiel" }],
    project_leader: placeholderLeader("Peter Thiel"),
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
    // KHÔNG CÒN "category_specific"
    company: { name: "FinTech Club Partners", logo_url: generateCloudFrontUrl("logos/partners.png"), website_url: "", tagline: "Building bridges to industry" },
    goals: ["Secure sponsorships and career opportunities for members"],
    target_audience: [{ name: "Corporate Partners", icon: "building" }, { name: "Club Members", icon: "users" }],
    team_structure: [{ role: "Partnership Lead", leader_name: "Sheryl Sandberg" }],
    project_leader: placeholderLeader("Sheryl Sandberg"),
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
    // KHÔNG CÒN "category_specific"
    goals: ["Increase brand awareness", "Drive engagement"],
    target_audience: [
      { name: "FinTech enthusiasts", icon: "bullhorn" },
      { name: "Investors", icon: "chart-line" },
    ],
    team_structure: [{ role: "Marketing Manager", leader_name: "Diana Prince", responsibilities: ["Oversee content strategy"], skills: ["SEO", "Content Writing"] }],
    project_leader: placeholderLeader("Diana Prince"),
    auto_update_type: 'Article',
    auto_update_limit: 6,
    products: [], 
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
    // KHÔNG CÒN "category_specific"
    goals: ["Reach a wider audience through audio content"],
    target_audience: [{ name: "Podcast Listeners", icon: "headphones" }, { name: "Students", icon: "user-graduate" }],
    team_structure: [{ role: "Podcast Host", leader_name: "Clark Kent", responsibilities: ["Host episodes", "Edit audio"], skills: ["Interviewing", "Audacity"] }],
    project_leader: placeholderLeader("Clark Kent"),
    auto_update_type: 'FinTechTainment',
    auto_update_limit: 6,
    products: [], 
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
    // KHÔNG CÒN "category_specific"
    goals: ["Double social media followers", "Increase engagement metrics by 50%"],
    target_audience: [{ name: "Social Media Users", icon: "hashtag" }, { name: "Students", icon: "user-graduate" }],
    featured_activities: ["Daily Content Posting", "Engagement Contests", "Giveaways"],
    team_structure: [{ role: "Social Media Manager", leader_name: "Tony Stark" }],
    project_leader: placeholderLeader("Tony Stark"),
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
    // KHÔNG CÒN "category_specific"
    goals: ["Increase on-campus brand visibility and event attendance"],
    target_audience: [{ name: "Campus Students", icon: "university" }],
    featured_activities: ["Campus Outreach", "Event Promotion", "Info Sessions"],
    team_structure: [{ role: "Program Coordinator", leader_name: "Pepper Potts" }],
    project_leader: placeholderLeader("Pepper Potts"),
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
    // KHÔNG CÒN "category_specific"
    company: placeholderCompany,
    goals: ["Attract top talent", "Strengthen the club's member base"],
    target_audience: [{ name: "University students", icon: "user-graduate" }],
    team_structure: [{ role: "HR Lead", leader_name: "Bruce Wayne" }],
    project_leader: placeholderLeader("Bruce Wayne"),
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
    // KHÔNG CÒN "category_specific"
    company: placeholderCompany,
    goals: ["Facilitate knowledge transfer", "Improve member retention"],
    target_audience: [{ name: "New Members", icon: "user-plus" }, { name: "Senior Members", icon: "user-tie" }],
    team_structure: [{ role: "Mentorship Coordinator", leader_name: "Alfred Pennyworth" }],
    project_leader: placeholderLeader("Alfred Pennyworth"),
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
    // KHÔNG CÒN "category_specific"
    goals: ["Strengthen the alumni community", "Provide networking opportunities"],
    target_audience: [{ name: "Alumni", icon: "user-check" }, { name: "Current Members", icon: "users" }],
    featured_activities: ["Keynote Speech", "Networking Dinner", "Awards Ceremony"],
    team_structure: [{ role: "Event Lead", leader_name: "Selina Kyle" }],
    project_leader: placeholderLeader("Selina Kyle"),
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
    // KHÔNG CÒN "category_specific"
    company: placeholderCompany,
    goals: ["Enhance member employability", "Address skill gaps"],
    target_audience: [{ name: "Club Members", icon: "users" }],
    team_structure: [{ role: "Training Coordinator", leader_name: "Lucius Fox" }],
    project_leader: placeholderLeader("Lucius Fox"),
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
    // KHÔNG CÒN "category_specific"
    goals: ["Provide timely audio content"],
    target_audience: [{ name: "Listeners", icon: "headphones" }],
    team_structure: [{ role: "Media Team", leader_name: "Bob Wilson", responsibilities: ["Auto-publishing"], skills: ["CMS"] }],
    project_leader: placeholderLeader("Bob Wilson"),
    auto_update_type: 'FinTechTainment',
    auto_update_limit: 6,
    products: [],
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
    // KHÔNG CÒN "category_specific"
    goals: ["Provide timely written content"],
    target_audience: [{ name: "Readers", icon: "book-open" }],
    team_structure: [{ role: "Media Team", leader_name: "Jane Smith", responsibilities: ["Auto-publishing"], skills: ["CMS"] }],
    project_leader: placeholderLeader("Jane Smith"),
    auto_update_type: 'Article',
    auto_update_limit: 6,
    products: [],
  }
];

async function seedProjects() {
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI environment variable is not set.");
  }

  console.log("Connecting to MongoDB...");
  await mongoose.connect(mongoUri);
  console.log("Connected. Starting project seeding...");

  // 1. Xoá collection projects cũ
  console.log("Clearing existing projects...");
  await Project.deleteMany({});
  console.log("Projects collection cleared.");

  // 2. Loop qua dữ liệu test và lưu từng project
  for (const projectData of testProjects) {
    try {
      // Dữ liệu đã được cấu trúc phẳng, khớp với schema mới
      const project = new Project(projectData);
      await project.save();
      console.log(`✅ Seeded project: ${project.title} (Slug: ${project.slug})`);
    } catch (error: any) {
      console.error(`❌ Error seeding project "${projectData.title}":`);
      // Ghi lại lỗi validation nếu có
      if (error.errors) {
        for (const field in error.errors) {
          console.error(`  - ${error.errors[field].message}`);
        }
      } else {
        console.error(error.message);
      }
    }
  }

  console.log("\n--- Seeding Complete ---");
  await mongoose.disconnect();
  console.log("Disconnected from MongoDB.");
}

seedProjects().catch(err => {
  console.error("An unexpected error occurred during seeding:", err);
  mongoose.disconnect();
});