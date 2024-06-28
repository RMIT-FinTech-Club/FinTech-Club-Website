import React from "react";
import Department from "./components/department";
import HeroSection from "./components/hero";
import HerosectionVid from "./components/heroVideoSection";
import IntroSection from "./components/intro";
import UpcomingEvent from "./components/upcomingEvent";
import Member from "./components/member";
const Home = () => {
	return (
		<div className="flex min-h-screen flex-col justify-center items-center">
			<HerosectionVid />
			<HeroSection />
			<IntroSection />
			<Department />
			<Member />
			<UpcomingEvent />
		</div>
	);
};

export default Home;