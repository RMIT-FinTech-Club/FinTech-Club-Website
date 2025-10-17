"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

type Department = "Technology" | "Business" | "Marketing" | "HumanResources";

type DepartmentInfo = {
	name: string;
	button: string;
	description: string;
	background: string;
};

const departments: Record<Department, DepartmentInfo> = {
	Technology: {
		name: "TECHNOLOGY DEPARTMENT",
		button: "Technology",
		description:
			"The Technology Department is an innovation hub for tech enthusiasts, driving practical FinTech solutions through development sprints, collaborative workshops, and industry partnerships. This semester, we’re working on three exciting projects: a blockchain-powered History Chess Game blending strategy with Vietnamese culture, an AI Financial Coach based on the 6 Jar Money Management system, and a feature-rich upgrade of the FinTech Club Website. Beyond practical coding projects, we also foster growth through mentorship, internal training, and a supportive community that empowers every member to thrive.",
		background:
			"https://d2prwyp3rwi40.cloudfront.net/home/department-mascot/Technology.png",
	},
	Business: {
		name: "BUSINESS DEPARTMENT",
		button: "Business",
		description:
			"The Business Department is a dynamic space for curious minds to grow through peer-to-peer learning, hands-on projects, and real-world exposure. This semester, we are leading two key initiatives: the Bi-weekly Article Series, which explores business and FinTech topics with academic depth and relevance, and Breaking the Curve, a workshop series that helps students excel academically through interactive sessions, expert insights, and practical learning. By engaging in writing, research, and discussions, members develop both analytical thinking and industry-ready skills while contributing to the club’s knowledge-sharing culture.",
		background:
			"https://d2prwyp3rwi40.cloudfront.net/home/department-mascot/Business.png",
	},
	Marketing: {
		name: "MARKETING DEPARTMENT",
		button: "Marketing",
		description:
			"The Marketing Department is a creative hub that drives the club’s digital presence through strategic campaigns and internal training. This semester, we’re launching an Internal Training Series to upskill members in content creation, from writing and photography to editing. We’re also powering major campaigns for FTC x Charity and Hack-A-Venture, crafting branding, visual identities, and promotional materials across social media. Additionally, our revamped TikTok Project aims to spotlight member stories through engaging short-form videos, fostering connection and inspiration within the FinTech Club community.",
		background:
			"https://d2prwyp3rwi40.cloudfront.net/home/department-mascot/Marketing.png",
	},

	HumanResources: {
		name: "HUMAN RESOURCES DEPARTMENT",
		button: "Human Resources",
		description:
			"The Human Resources Department plays a pivotal role in shaping FinTech Club’s culture and fostering a welcoming, supportive environment for all members. This semester, we’re bringing the community together through heartfelt initiatives like the Charity Project for Tu Hanh Pagoda, high-energy bonding at the FinTech Olympics, and the adventurous End of Semester Trip. We also support personal growth with our Internal CV Review Workshop, and add a spark of fun with the festive FTC Halloween celebration. HR is where connections are built, memories are made, and every member feels at home.",
		background:
			"https://d2prwyp3rwi40.cloudfront.net/home/department-mascot/Human+Resources.png",
	},
};

const Department = () => {
	const [department, setDepartment] = useState<DepartmentInfo>(
		departments.Technology
	);
	const isMobile = useMediaQuery({ maxWidth: 1024 });

	return (
		<nav>
			{isMobile ? (
				<div className="relative w-screen h-[50rem] flex flex-row mb-[800px]">
					<div className="h-full w-screen">
						<section className="relative flex flex-col items-start pl-9 pt-[8.5rem] w-[90vw]">
							<div className="absolute w-[3rem] h-auto top-[4.5rem] right-[7rem]">
								<Image
									src="https://d2prwyp3rwi40.cloudfront.net/home/assets/YellowStar.svg"
									alt="Yellow Star"
									width={400}
									height={400}
									loading="lazy"
								/>
							</div>
							<div className="absolute w-[6rem] h-auto top-[6rem] right-[-1rem]">
								<Image
									src="https://d2prwyp3rwi40.cloudfront.net/home/assets/YellowStar.svg"
									alt="Yellow Star"
									width={400}
									height={400}
									loading="lazy"
								/>
							</div>
							<p className="text-[#DCB968] w-[300px] font-bold text-3xl">
								BE ONE OF US
							</p>
							<p className={`font-bold mt-6 text-[#5E5E92] text-wrap text-2xl`}>
								{department.name}
							</p>
							<p className="mt-4 w-auto font- text-[12px] text-base text-justify">
								{department.description}
							</p>
							<button className="text-[#F0EDFF] bg-[#5E5E92] max-md:w-[130px] w-fit rounded-2xl px-6 py-2 mt-4 font-semibold drop-shadow-lg text-[1rem] z-50">
								Explore more
							</button>
							<div className="flex row-span-4 gap-3 pt-8 z-50">
								{(Object.keys(departments) as Department[]).map((dept) => {
									const department = departments[dept];
									return (
										<div
											key={dept}
											className="group p-[1px] rounded-[10px]"
											style={{
												background:
													"linear-gradient(to bottom, #F0EDFF, #5E5E92)",
											}}
										>
											<Button
												onPress={() => setDepartment(department)}
												className="ma-md:w-[9rem] ma-md:h-[4rem] w-[4.2rem] h-[3rem] ma-md:text-[1rem] rounded-[10px] text-[#0B0B3B] text-wrap text-base font-semibold text-[0.6rem] bg-[#F0EDFF] group-hover:[background:linear-gradient(to_bottom,_#C9D6EA_0%,_#DBB968_58%)] transition-all duration-300"
											>
												{department.button.toUpperCase()}
											</Button>
										</div>
									);
								})}
							</div>
						</section>
					</div>
					<div className="max-md:pt-[900px] pt-[730px] -translate-x-[60rem]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1004"
							height="351"
							viewBox="0 0 1004 351"
							fill="none"
						>
							<path
								d="M175.5 5H828.5C922.665 5 999 81.3355 999 175.5C999 269.665 922.665 346 828.5 346H175.5C81.3355 346 5 269.665 5 175.5C5 81.3355 81.3355 5.00001 175.5 5Z"
								fill="#2C305F"
								stroke="url(#paint0_linear_7633_318)"
								stroke-width="10"
							/>
							<defs>
								<linearGradient
									id="paint0_linear_7633_318"
									x1="502"
									y1="0"
									x2="502"
									y2="351"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#C9D6EA" />
									<stop offset="1" stop-color="#DBB968" />
								</linearGradient>
							</defs>
						</svg>{" "}
					</div>
					<div
						className="absolute max-md:translate-y-[61rem] translate-y-[50rem] max-md:w-[55vw] w-[30vw] h-[17rem] z-30 rounded-t-[30vw]"
						style={{
							background: "linear-gradient(to bottom, #C9D6EA, #DBB968)",
						}}
					></div>
					<div className="pt-[900px] h-[10rem] w-[40vw] bottom-0 absolute z-30 rounded-t-[10vw]">
						<div className="w-[70vw] absolute m-[1rem]">
							<Image
								src={department.background}
								alt={`${department.name} background`}
								className="max-md:mt-[180px] mt-1 h-[250px] w-[170px] object-fill rounded-t-[25vw]"
								width={400}
								height={400}
								fetchPriority="high"
								loading="eager"
								priority={true}
							/>
						</div>
					</div>
				</div>
			) : (
				/*desktop */
				<div className="relative w-screen h-[50rem] flex flex-row">
					{/*con gấu */}
					<div className="absolute w-[14rem] h-auto top-[-4rem] left-[-5.25rem] rotate-[109deg] z-30">
						<Image
							src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
							alt="Bear mascot"
							width={400}
							height={400}
							loading="lazy"
						/>
					</div>

					<div className="h-full w-[70vw] bg-[#F9FAFB] border-b-[1rem] border-[#DAB868]">
						<section className="relative flex flex-col items-start pl-20 pt-[8.5rem] max-w-[45vw]">
							<div className="absolute w-[3rem] h-auto top-[4.5rem] right-[7rem]">
								<Image
									src="https://d2prwyp3rwi40.cloudfront.net/home/assets/YellowStar.svg"
									alt="Yellow Star"
									width={400}
									height={400}
									loading="lazy"
								/>
							</div>
							<div className="absolute w-[6rem] h-auto top-[6rem] right-[-1rem]">
								<Image
									src="https://d2prwyp3rwi40.cloudfront.net/home/assets/YellowStar.svg"
									alt="Yellow Star"
									width={400}
									height={400}
									loading="lazy"
								/>
							</div>
							<p className="text-[#DCB968] font-bold text-6xl">BE ONE OF US</p>
							<p className={`font-bold mt-6 text-[#5E5E92] text-wrap text-5xl`}>
								{department.name}
							</p>
							<p className="mt-4 text-base text-justify font-normal">
								{department.description}
							</p>
							<button className="text-[#F0EDFF] bg-[#5E5E92] rounded-xl w-fit px-6 py-2 mt-4 font-semibold drop-shadow-lg text-[1rem]">
								Explore more
							</button>
							<div className="mt-6 flex flex-row flex-wrap gap-4 justify-between">
								{(Object.keys(departments) as Department[]).map((dept) => {
									const department = departments[dept];
									return (
										<div
											key={dept}
											className="group p-[1px] rounded-[10px]"
											style={{
												background:
													"linear-gradient(to bottom, #F0EDFF, #5E5E92)",
											}}
										>
											<Button
												onPress={() => setDepartment(department)}
												className="w-[6.7rem] h-[4rem] rounded-[10px] text-[#0B0B3B] text-wrap font-semibold text-[0.85rem] bg-[#F0EDFF] group-hover:[background:linear-gradient(to_bottom,_#C9D6EA_0%,_#DBB968_58%)] transition-all duration-300"
											>
												{department.button.toUpperCase()}
											</Button>
										</div>
									);
								})}
							</div>
						</section>
					</div>

					<div
						className="h-full w-[29vw] rounded-br-[18vw] relative z-0"
						style={{
							background: "linear-gradient(to bottom, #C9D6EA, #DBB968)",
						}}
					>
						<div className="h-[49rem] w-[27.5vw] bg-[#2C305F] rounded-br-[17vw] absolute top-0 left-0 z-10"></div>
					</div>

					<div
						className="h-[42rem] w-[35.5vw] bottom-0 right-[14.5rem] absolute z-30 rounded-t-[10vw]"
						style={{
							background: "linear-gradient(to bottom, #C9D6EA, #DBB968)",
						}}
					>
						<div className="h-[40rem] w-[33vw] absolute m-[1rem] z-20">
							<Image
								src={department.background}
								alt={`${department.name} background`}
								className="h-full w-full object-fill rounded-t-[9vw]"
								width={400}
								height={400}
								fetchPriority="high"
								loading="eager"
								priority={true}
							/>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Department;
