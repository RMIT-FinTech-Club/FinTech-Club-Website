interface TeamMember {
  memberName: string;
  memberRole: string;
};

interface TechStack {
  techName: string;
  techDescription: string;
};

interface TechnicalProject {
  _id: string;
  projectName: string;
  tags: string[];
  techStacks: TechStack[];
  description: string;
  demoSrc: string;
  teamMembers: TeamMember[];
};

export default TechnicalProject;
