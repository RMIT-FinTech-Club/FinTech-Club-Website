"use client"
import React from "react";
import fakeAPI from "../../fakeAPI/mediaAPI";
import Header from "./components/Header";
import ProjectCard from "./components/projectCard";

const MediaProject: React.FC = () => {
	return (
		<div className="bg-ft-background w-screen">
			<Header introduce={fakeAPI.introduce} />
			{fakeAPI.cards.map((card, index) => (
				<ProjectCard key={index} card={card} index={index} />
			))}
		</div>
	);
};

export default MediaProject;