// "use client";
// import { Button, Image } from "@nextui-org/react";
// import clsx from "clsx";
// import React, { useState } from "react";

// const Department = () => {
// 	type Department =
// 		| "technology"
// 		| "business"
// 		| "humanResources"
// 		| "marketing";

// 	type DepartmentInfo = {
// 		name: string;
// 		description: string;
// 		imageUrl?: string;
// 		background?: string;
// 	};

// 	const departments: Record<Department, DepartmentInfo> = {
// 		technology: {
// 			name: "TECHNOLOGY DEPARTMENT",
// 			description:
// 				"With an unquenchable thirst for coding, fixing bugs, and …, the Technology Department represents the second pillar of our organization. We are responsible for the development of the club’s technical projects, including the SnapID Computer Vision Project, RBPC Website, and currently the FinTech Club Website Project. Beyond practical coding projects, we also provide internal training & sharing sessions, public workshops, mentoring initiatives, and memorable bonding activities for Tech Dept. members. Our members receive the full package of skill improvement, industry connections, and a belonging environment.",
// 			imageUrl: "Tech.png",
// 		},
// 		business: {
// 			name: "BUSINESS DEPARTMENT",
// 			description:
// 				"The Business Department is regarded as the cornerstone of FinTech Club’s unequivocal success and rapid development. This curiosity-driven Dept. is actively involved in researching, brainstorming and collaborating with others to generate academic values, operation frameworks and awesome activities related to the Finance, Business and Technology space. More specifically, Business members are involved in curating internal skill training, knowledge workshops, hold meetings to evaluate working processes, propose toolkits, and composing well-researched articles on Financial Technology news and trends to educate members, and further engage the external community to our core disciplines!",
// 			imageUrl: "Bus.png",
// 		},
// 		humanResources: {
// 			name: "HR DEPARTMENT",
// 			description:
// 				"What is a club, without its people? Where would the club’s fun and desirability be, without its culture? That is where the Human Resources Department comes in. HR is in charge of organizing the club’s internal bonding activities, the FinTech Olympics, Newbies Orientation Day, End of Semester Award Ceremony, and the FinTech Field Trip – in addition to ensuring member well-being, safety and connection via the HR Committee. The HR Department consists of some of the kindest, most caring, most enthusiastic members in FTC. So, if you want to be a part of this lovely community, join the HR Dept.!",
// 			imageUrl:
// 				"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Hr.png",
// 			background: "url('Background.png')",
// 		},
// 		marketing: {
// 			name: "MARKETING DEPARTMENT",
// 			description:
// 				"With a creative and expressive mindset, the Marketing Department is accountable for maintaining and spreading the digital presence of the club’s story and mission. Through various media projects, collaborative teams, adventurous campaigns, the Marketing Dept. never failed to disappoint in generating the most engaging and visually appealing content to hook the eyes of curious FinTech Club followers! So, you want to express yourself, unleash your creativity, unbound your imagination? Join the Marketing Dept. to help us bolster our club presence, and fulfill your creative interests!",
// 			imageUrl: "Mar.png",
// 		},
// 	};

// 	// Manage the current department
// 	const [department, setDepartment] = useState<DepartmentInfo>(
// 		departments.humanResources,
// 	);

// 	return (
// 		<section
// 			className="relative flex flex-col-reverse w-full max-h-fit justify-center items-center lg:flex-row bg-ft-primary-blue-900"
// 			style={{
// 				backgroundImage: department.background
// 					? department.background
// 					: "none",
// 				backgroundSize: "cover",
// 				backgroundPosition: "center",
// 			}}
// 		>
// 			{/* Department background image */}

// 			{/* Department content */}
// 			<div className="flex flex-col lg:items-start items-center p-8 bg-opacity-50 z-10 mt-10 md:mt-0 lg:w-3/5">
// 				{/* These elements will be pushed down on mobile due to the absolute positioning of the buttons bar */}
// 				<h4 className="font-bold text-ft-primary-yellow text-wrap">
// 					{department.name}
// 				</h4>
// 				<h4 className="text-ft-text-bright mt-4">BE ONE OF US!</h4>
// 				<p className="ft-body-2 text-ft-text-bright max-w-lg mt-6 text-center md:text-left">
// 					{department.description}
// 				</p>

// 				{/* Desktop buttons */}
// 				<div className="flex flex-wrap justify-center md:justify-start mt-6 gap-4 ">
// 					{Object.keys(departments).map((depName) => {
// 						return (
// 							<Button
// 								className={clsx(
// 									"text-white",
// 									department.name ===
// 										departments[depName as Department]
// 											.name && "bg-ft-primary-yellow",
// 								)}
// 								onClick={() =>
// 									setDepartment(
// 										departments[depName as Department],
// 									)
// 								}
// 								variant="light"
// 							>
// 								{/* Split string on capitalized letter first then convert all uppercase */}
// 								{depName
// 									.split(/(?=[A-Z])/)
// 									.join(" ")
// 									.toUpperCase()}
// 							</Button>
// 						);
// 					})}
// 				</div>
// 			</div>

// 			{/* Department right image */}
// 			<div className="relative h-full w-96 lg:min-w-60 lg:max-w-96 lg:h-5/6 md:w-2/5 flex justify-center items-center">
// 				<Image
// 					className="object-cover lg:h-full md:w-full"
// 					src={department.imageUrl ? department.imageUrl : ""}
// 					// Remove url() wrapper, NextUI Image component doesn't support it :<, this will change "url('image.png')" to "image.png"
// 					alt={`${department.name} Image`}
// 				/>
// 			</div>
// 		</section>
// 	);
// };

// export default Department;

"use client";
import { Button, Image } from "@nextui-org/react";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Department = () => {
	type Department =
		| "technology"
		| "business"
		| "humanResources"
		| "marketing";

	type DepartmentInfo = {
		name: string;
		description: string;
		imageUrl: string;
		background: string;
		color: string;
	};

	const departments: Record<Department, DepartmentInfo> = {
		technology: {
			name: "TECHNOLOGY DEPARTMENT",
			description:
				"With an unquenchable thirst for coding, fixing bugs, and …, the Technology Department represents the second pillar of our organization. We are responsible for the development of the club’s technical projects, including the SnapID Computer Vision Project, RBPC Website, and currently the FinTech Club Website Project. Beyond practical coding projects, we also provide internal training & sharing sessions, public workshops, mentoring initiatives, and memorable bonding activities for Tech Dept. members. Our members receive the full package of skill improvement, industry connections, and a belonging environment.",
			imageUrl:
				"url('https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/DepartmentsBrief/hrdept.svg')",
			background:
				"url('https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/DepartmentsBrief/hrdept-bg.jpg')",
			color: "text-[#73EEBF]",
		},
		business: {
			name: "BUSINESS DEPARTMENT",
			description:
				"The Business Department is regarded as the cornerstone of FinTech Club’s unequivocal success and rapid development. This curiosity-driven Dept. is actively involved in researching, brainstorming and collaborating with others to generate academic values, operation frameworks and awesome activities related to the Finance, Business and Technology space. More specifically, Business members are involved in curating internal skill training, knowledge workshops, hold meetings to evaluate working processes, propose toolkits, and composing well-researched articles on Financial Technology news and trends to educate members, and further engage the external community to our core disciplines!",
			imageUrl:
				"url('https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/DepartmentsBrief/busdept.svg')",
			background:
				"url(https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/DepartmentsBrief/busdept-bg.png)",
			color: "text-[#6a3bed]",
		},
		humanResources: {
			name: "HR DEPARTMENT",
			description:
				"What is a club, without its people? Where would the club’s fun and desirability be, without its culture? That is where the Human Resources Department comes in. HR is in charge of organizing the club’s internal bonding activities, the FinTech Olympics, Newbies Orientation Day, End of Semester Award Ceremony, and the FinTech Field Trip – in addition to ensuring member well-being, safety and connection via the HR Committee. The HR Department consists of some of the kindest, most caring, most enthusiastic members in FTC. So, if you want to be a part of this lovely community, join the HR Dept.!",
			imageUrl:
				"url('https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/DepartmentsBrief/techdept.svg')",
			background:
				"url('https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/DepartmentsBrief/techdept-bg.jpg')",
			color: "text-[#29C0F2]",
		},
		marketing: {
			name: "MARKETING DEPARTMENT",
			description:
				"With a creative and expressive mindset, the Marketing Department is accountable for maintaining and spreading the digital presence of the club’s story and mission. Through various media projects, collaborative teams, adventurous campaigns, the Marketing Dept. never failed to disappoint in generating the most engaging and visually appealing content to hook the eyes of curious FinTech Club followers! So, you want to express yourself, unleash your creativity, unbound your imagination? Join the Marketing Dept. to help us bolster our club presence, and fulfill your creative interests!",
			imageUrl:
				"url('https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/DepartmentsBrief/mktdept.svg')",
			background:
				"url(https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/DepartmentsBrief/mktdept-bg.png)",
			color: "text-[#E689EE]",
		},
	};

	// Manage the current department
	const [department, setDepartment] = useState<DepartmentInfo>(
		departments.humanResources,
	);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		arrows: true,
	};

	const [hrButton, setHrButton] = useState(true);
	const [busButton, setBusButton] = useState(false);
	const [marButton, setMarButton] = useState(false);
	const [techButton, setTechButton] = useState(false);
	return (
		<section
			className="relative flex flex-col-reverse w-full max-h-fit px-side-margin-mobile md:px-20 justify-center items-center lg:flex-row bg-ft-primary-blue-900"
			style={{
				backgroundImage: department.background
					? department.background
					: "none",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backdropFilter: "blur(10px)",
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 rounded-2xl" />
			{/* Department background image */}

			{/* Mobile buttons bar */}
			<div className="flex sm:hidden justify-center items-center w-full p-2">
				<Slider {...settings} className="w-80">
					<Button
						onClick={() => setDepartment(departments.technology)}
						variant="light"
						className="text-white bg-transparent hover:bg-ft-primary-yellow-500 rounded-[10px] transition duration-300"
					>
						TECHNOLOGY
					</Button>
					<Button
						onClick={() => setDepartment(departments.business)}
						variant="light"
						className="text-white bg-transparent hover:bg-ft-primary-yellow-500 rounded-[10px] transition duration-300"
					>
						BUSINESS
					</Button>
					<Button
						onClick={() =>
							setDepartment(departments.humanResources)
						}
						variant="light"
						className="text-white bg-transparent hover:bg-ft-primary-yellow-500 rounded-[10px] transition duration-300"
					>
						HUMAN RESOURCES
					</Button>
					<Button
						onClick={() => setDepartment(departments.marketing)}
						variant="light"
						className="text-white bg-transparent hover:bg-ft-primary-yellow-500 rounded-[10px] transition duration-300"
					>
						MARKETING
					</Button>
				</Slider>
			</div>

			{/* Department content */}
			<div
				className="flex flex-col md:items-start items-center p-8 bg-opacity-50 z-10 md:mt-0"
				style={{ flex: 1 }}
			>
				{/* These elements will be pushed down on mobile due to the absolute positioning of the buttons bar */}
				<h4 className={`font-bold ${department.color} text-wrap text-xl md:text-5xl sm:text-4xl`}>
					{department.name}
				</h4>
				<h4 className="text-ft-text-bright mt-4">BE ONE OF US!</h4>
				<p className="ft-body-2 text-ft-text-bright w-full mt-6 text-justify md:text-left">
					{department.description}
				</p>

				{/* Desktop buttons */}
				<div className=" hidden sm:flex mt-6 gap-4">
					<Button
						onClick={() => {
							setDepartment(departments.technology);
							setTechButton(true);
							setHrButton(false);
							setBusButton(false);
							setMarButton(false);
						}}
						variant={techButton ? "solid" : "light"}
						className={
							techButton
								? "text-black text-semibold bg-[#73EEBF]"
								: "text-white"
						}
					>
						TECHNOLOGY
					</Button>
					<Button
						onClick={() => {
							setDepartment(departments.business);
							setTechButton(false);
							setHrButton(false);
							setBusButton(true);
							setMarButton(false);
						}}
						variant={busButton ? "solid" : "light"}
						className={
							busButton
								? "text-black text-semibold bg-[#6a3bed]"
								: "text-white"
						}
					>
						BUSINESS
					</Button>
					<Button
						onClick={() => {
							setDepartment(departments.humanResources);
							setTechButton(false);
							setHrButton(true);
							setBusButton(false);
							setMarButton(false);
						}}
						variant={hrButton ? "solid" : "light"}
						className={
							hrButton
								? "text-black text-semibold bg-[#29C0F2]"
								: "text-white"
						}
					>
						HUMAN RESOURCES
					</Button>
					<Button
						onClick={() => {
							setDepartment(departments.marketing);
							setTechButton(false);
							setHrButton(false);
							setBusButton(false);
							setMarButton(true);
						}}
						variant={marButton ? "solid" : "light"}
						className={
							marButton
								? "text-black text-semibold bg-[#E689EE]"
								: "text-white"
						}
					>
						MARKETING
					</Button>
				</div>
			</div>

			{/* Department right image */}
			<div className="relative w-full h-full md:h-5/6 md:w-2/5 flex justify-center items-center">
				<Image
					className="object-cover md:h-full md:w-full"
					src={department.imageUrl
						.replace("url('", "")
						.replace("')", "")}
					// Remove url() wrapper, NextUI Image component doesn't support it :<, this will change "url('image.png')" to "image.png"
					alt={`${department.name} Image`}
					loading="lazy"
				/>
			</div>
		</section>
	);
};

export default Department;
