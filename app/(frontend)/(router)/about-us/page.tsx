"use client";
import CoreValue from "./components/coreValue";
import ExecuteBoard from "./components/execute-board/executeBoard";
import ManagementBoard from "./components/execute-board/managementBoard";
import III from "./components/III/III";
import HistorySection from "./components/history";
import FinTechInTheEyes from "./components/inTheEyes";
import Members from "./components/members";
import VisionMission from "./components/vision-mission/missionVision";
const AboutUs = () => {
	return (
		<>
			<HistorySection />
			<VisionMission />
			<III />
			<FinTechInTheEyes />
			<ExecuteBoard />
			<ManagementBoard />
			{/* <Members /> */}
			{/* <CoreValue /> */}
		</>)
};

export default AboutUs;
