"use client";
import type React from "react";
import PodcastCard from "./PodcastCard";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
const FinTechTainment: React.FC = () => {
	const [podcastData, setPodcastData] = useState<object[]>([]);
	const fetchingStatus = useRef<Boolean>(false);
	//   console.log(`podcastData: ${podcastData} `)
	useEffect(() => {
		try {
			if (!fetchingStatus.current) {
				axios.get("/api/v1/podcasts").then((data: any) => {
					console.log(`data: ${JSON.stringify(data)}`);
					setPodcastData([...data.data]);
					fetchingStatus.current = true;
				});
			}
		} catch (error: any) {
			console.error(error.message);
		}
	});

	return (
		<div className="min-h-screen flex flex-col justify-center items-center">
			<h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-8 uppercase text-[#2b305e]">
				FinTechTainment
			</h1>
			<p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-justify mt-4 w-4/5 mx-auto font-light">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Cupiditate, ut. Quos sunt expedita ut eum delectus ducimus
				doloribus officia repudiandae neque, dolor dolorum voluptatum,
				non ratione aliquam molestias! Possimus, perferendis!
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
