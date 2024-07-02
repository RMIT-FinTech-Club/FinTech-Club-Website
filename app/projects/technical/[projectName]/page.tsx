"use client";
import React from "react";
import ProjectDescription from "./components/projectDescription";
import ProjectTeam from "./components/projectTeam";
import TechStack from "./components/techStack";
import axios from "axios";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// import { TechnicalProject } from "../components/TechnicalProject";

interface TeamMember {
	memberName: string;
	memberRole: string;
	imageUrl: string;
}

interface ProjectTechStack {
	techName: string;
	techDescription: string;
}
interface TechnicalProject {
	_id: string;
	projectName: string;
	description: string;
	tags: string[];
	techStacks: ProjectTechStack[];
	teamMembers: TeamMember[];
	demoSrc: string;
}

const TechnicalProjectPage: React.FC<{ params: { id: string } }> = ({
	params,
}) => {
	const [projectData, setProjectData] = useState<TechnicalProject>({
		_id: "",
		projectName: "",
		description: "",
		tags: [],
		techStacks: [],
		teamMembers: [],
		demoSrc: "",
	});
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const configuration = {
			method: "post",
			url: "/api/v1/technicalprojects/getOneTechnicalProject",
			data: {
				id: "667e0e9ad27faa3bbed379d7",
			},
		};
		// console.log(params.id);
		axios(configuration)
			.then((result) => {
				setProjectData(result.data.data);
				// console.log(result.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [params.id]);
	return isLoading ? (
		<section className="flex flex-col items-center h-screen w-full justify-center">
			<ClipLoader color="#2C305F" size={60}/>
		</section>
	) : (
		<div className="w-100 h-auto bg-ft-background">
			<ProjectDescription
				projectName={projectData.projectName}
				projectDescription={projectData.description}
			/>
			<TechStack techStacks={projectData.techStacks} />

			{/* Project Video/Image Demo */}
			<h1 className="w-full h-full my-4 text-center text-ft-primary-blue text-4xl font-extrabold">
				Our Demo
			</h1>
			<div className="w-[16vw] h-0.5 bg-ft-primary-yellow m-auto" />
			<img
				src={projectData?.demoSrc}
				alt="event-img"
				className="mx-auto w-[70vw] h-auto rounded-2xl"
			/>

			<ProjectTeam teamMembers={projectData?.teamMembers} />
		</div>
	);
};

export default TechnicalProjectPage;
