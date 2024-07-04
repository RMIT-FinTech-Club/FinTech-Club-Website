"use client";
import { useEffect, useState } from "react";
import CoreValue from "./components/coreValue";
import ExecuteBoard from "./components/execute-board/executeBoard";
import ManagementBoard from "./components/execute-board/managementBoard";
import HistorySection from "./components/history";
import FinTechInTheEyes from "./components/inTheEyes";
import Members from "./components/members";
import VisionMission from "./components/vision-mission/missionVision";
import ClipLoader from "react-spinners/ClipLoader";
const AboutUs = () => {
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return isLoading ? (
		<section className="flex flex-col items-center h-screen w-full justify-center">
			<ClipLoader color="#2C305F" size={60} />
		</section>
	) : (
		<>
			<HistorySection />
			<VisionMission />
			<FinTechInTheEyes />
			<ExecuteBoard />
			<ManagementBoard />
			<Members />
			{/* <CoreValue /> */}
		</>
	);
};

export default AboutUs;
