import React from "react";
import Department from "./components/department";
import HeroSection from "./components/hero";
import HerosectionVid from "./components/heroVideoSection";
import IntroSection from "./components/intro";
import UpcomingEvent from "./components/upcomingEvent";
import Achievements from "./components/achievements";
import Member from "./components/member";
import { SpeedInsights } from "@vercel/speed-insights/next";
import IntroVideo from "./components/introVideo";
const Home = () => {
	return (
		<>
			<IntroVideo />
			<div className="flex min-h-screen flex-col justify-center items-center">
				<SpeedInsights />
				<HerosectionVid />
				<HeroSection />
				<IntroSection />
				<Department />
				<Member />
				<UpcomingEvent />
				<Achievements />
			</div>
		</>
	);
};

export default Home;
