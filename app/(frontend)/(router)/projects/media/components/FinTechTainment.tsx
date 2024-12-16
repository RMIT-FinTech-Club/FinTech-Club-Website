"use client";
import type React from "react";
import PodcastCard from "./PodcastCard";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
const FinTechTainment: React.FC = () => {
	const [podcastData, setPodcastData] = useState<object[]>([]);
	const fetchingStatus = useRef<Boolean>(false);
	
	useEffect(() => {
		try {
			if (!fetchingStatus.current) {
				axios.get("/api/v1/projects/mediaprojects").then((data: any) => {
					setPodcastData([...data.data]);
					fetchingStatus.current = true;
				});
			}
		} catch (error: any) {
			console.error(error.message);
		}
	});

	return (
		<div className="flex flex-col justify-center items-center my-24">
			<h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center uppercase text-[#2b305e]">
				FinTechTainment
			</h1>
			<p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-justify mt-4 w-4/5 mx-auto font-light">
				FinTechTainment is play of words between “FinTech” and
				“Entertainment”. It is a media/podcast project aimed at
				interviewing industry professionals with topics in the fields
				of: Business, Finance, Technology and Entrepreneurship.
			</p>
			<div className="w-1/5 h-1 bg-black my-8 mx-auto" />
			<section className="w-full flex justify-center mt-8">
				<div className="flex flex-wrap justify-center items-center gap-12 w-full max-w-screen-xl px-4 mb-6">
					{podcastData.length > 0 &&
						podcastData.map((data: object, index: number) => (
							<PodcastCard data={data} espsode={index + 1} />
						))}
				</div>
			</section>
		</div>
	);
};

export default FinTechTainment;
