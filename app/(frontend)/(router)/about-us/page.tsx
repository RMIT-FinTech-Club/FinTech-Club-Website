"use client";
import CoreValue from "./components/coreValue";
import ExecuteBoard from "./components/execute-board/executeBoard";
import ManagementBoard from "./components/execute-board/managementBoard";
import HistorySection from "./components/history";
import FinTechInTheEyes from "./components/inTheEyes";
import Members from "./components/members";
import VisionMission from "./components/vision-mission/missionVision";
import HallOfFame from "./components/hallOfFamePage";

const AboutUs = () => {
	return (
		<>
			<HistorySection />
			<VisionMission />
			<FinTechInTheEyes />
			<ExecuteBoard />
			<ManagementBoard />
			<HallOfFame />
			{/* <Members /> */}
			{/* <CoreValue /> */}
		</>)
};

export default AboutUs;
