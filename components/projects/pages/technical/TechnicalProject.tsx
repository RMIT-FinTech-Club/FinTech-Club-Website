"use client";
import type React from "react";
import Header from "./components/Header";
import ProjectCard from "./components/projectCard";
import fakeAPI from "../../fakeAPI/techAPI";

const TechnicalProject: React.FC = () => {
	return (
		<div className="bg-ft-background w-screen">
			<Header introduce={fakeAPI.introduce} />
			{fakeAPI.cards.map((card, index) => (
				<ProjectCard key={index} card={card} index={index} />
			))}
		</div>
	);
};

export default TechnicalProject;
