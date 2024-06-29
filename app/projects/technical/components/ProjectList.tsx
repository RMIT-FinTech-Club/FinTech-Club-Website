"use client";
import type React from "react";
import TechnicalProject from "./TechnicalProject";
import axios from "axios";
import { useEffect, useState } from "react";
import TechnicalProjectCard from "./TechnicalProjectCard";

const ProjectList: React.FC = () => {
	const [technicalProjectsData, setTechnicalProjectsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const configuration = {
			method: "get",
			url: "/api/v1/technicalprojects/getData",
		};
		axios(configuration)
			.then((result) => {
				setTechnicalProjectsData(result.data.data);
				console.log(result.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div className="lg:w-[65vw] w-[90vw] mx-auto flex flex-col md:gap-24 gap-12 py-8">
			{technicalProjectsData.map((project: TechnicalProject) => (
				<TechnicalProjectCard
					projectId={project._id}
					projectTitle={project.projectName}
					projectTags={project.tags}
					projectDescription={project.description}
					projectImg={project.demoSrc}
				/>
			))}
		</div>
	);
};

export default ProjectList;
