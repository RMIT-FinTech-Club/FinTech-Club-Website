'use client'
import React from "react";
import Header from "./components/Header";
import ProjectCard from "./components/projectCard";
import fakeAPI from "./fakeAPI";

const Home: React.FC = () => {
	return (
		<div className="bg-ft-background w-screen">
			<Header />
			{fakeAPI.cards.map((card, index) => (
				<ProjectCard key={index} card={card} index={index} />
			))}
		</div>
	);
};

export default Home;