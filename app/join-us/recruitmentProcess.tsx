import type React from "react";
import RoadToFtcButton from "./components/roadToFtcButton";

const RecruitmentProcess = () => {
	return (
		<>
			{/* Laptop view */}
			<div className="hidden lg:flex lg:flex-col relative">
				<div className="w-full h-auto">
					<img
						className="w-full object-cover"
						src="RecruitmentProcessDesktop.png"
						alt="Recruitment Process"
					/>
				</div>

				<div className="flex self-center justify-evenly w-1/2 my-16 mx-auto">
					<RoadToFtcButton
						text="Apply Now"
						color="bg-ft-primary-blue-500"
					/>
					<RoadToFtcButton
						text="Our Booklet"
						color="bg-ft-primary-yellow-500"
					/>
				</div>
			</div>
			{/* Mobile view */}
			<div className="flex flex-col relative items-center justify-around lg:hidden">
				<div className="w-full h-auto my-14">
					<img
						className="w-full object-cover"
						src="RecruitmentProcessMobile.png"
						alt="Recruitment Process"
					/>
				</div>
				<div className="flex flex-col">
					<RoadToFtcButton
						text="Apply Now"
						color="bg-ft-primary-blue-500"
					/>
					<RoadToFtcButton
						text="Our Booklet"
						color="bg-ft-primary-yellow-500"
					/>
					
				</div>
			</div>
		</>
	);
};

export default RecruitmentProcess;
