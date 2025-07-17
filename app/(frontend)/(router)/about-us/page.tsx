"use client";
import CoreValue from "./components/coreValue";
import ExecuteBoard from "./components/execute-board/executeBoard";
import ManagementBoard from "./components/execute-board/managementBoard";
import HistorySection from "./components/history";
import FinTechInTheEyes from "./components/inTheEyes";
import Members from "./components/members";
import { ClubMentors } from "./components/mentors";
import VisionMission from "./components/vision-mission/missionVision";
const AboutUs = () => {
	return (
		<>
			<HistorySection />
			<VisionMission />
			<FinTechInTheEyes />
			<ClubMentors/>
			<ExecuteBoard />
			<ManagementBoard />
			{/* <Members /> */}
			{/* <CoreValue /> */}
		</>)
};

export default AboutUs;
