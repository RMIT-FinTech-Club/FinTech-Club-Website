"use client";
import { IconArrowsMaximize } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface EventProject {
	_id: string;
	year: string;
	eventName: string;
	description: string;
	sponsorURLs: string[];
	recapURLs: string[];
}

const EventCard = () => {
	const [eventProjectsData, setEventProjectsData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const configuration = {
			method: "get",
			url: "/api/v1/eventprojects",
		};
		axios(configuration)
			.then((result) => {
				setEventProjectsData(result.data.data);
				console.log(result.data.data);
				setIsLoading(false);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return isLoading ? (
		<section className="flex flex-col items-center h-screen w-full justify-center">
			<ClipLoader color="#2C305F" size={60} />
		</section>
	) : (
		<>
			<div className="w-full my-16">
				<h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-8 uppercase text-[#2b305e]">
					Forums and Competitions
				</h1>
				<p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-justify mt-4 w-4/5 mx-auto font-light">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Cupiditate, ut. Quos sunt expedita ut eum delectus ducimus
					doloribus officia repudiandae neque, dolor dolorum
					voluptatum, non ratione aliquam molestias! Possimus,
					perferendis!
				</p>
				<div className="w-1/5 h-1 bg-black my-8 mx-auto" />
				<div className="grid lg:grid-cols-2 lg:grid-flow-row mt-12 gap-14 md:px-40 px-12">
					{eventProjectsData.map((event: EventProject) => (
						<a
							href={`/projects/event/${event._id}`}
							className="relative w-full lg:max-w-[400px] justify-self-center m-auto items-center text-center bg-ft-background h-64 rounded-2xl hover:bg-[#dbb969]/90 hover:shadow-2xl transition-all duration-3000"
						>
							<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#DCB968] hover:bg-gradient-to-b hover:from-[#ffe098] hover:to-black to-black opacity-40 transition-all duration-300 group-hover:opacity-0 rounded-2xl" />
							<img
								src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Projects/Media/fintechtainment-logo.png"
								alt="Avatar"
								className="w-full h-full object-cover rounded-lg"
							/>
							<div className="absolute h-auto bottom-3 row-start-2 row-span-1 md:px-10 px-4 grid md:grid-cols-12 grid-cols-4 z-10">
								<div className="w-fit h-fit md:col-span-2 col-span-1 bg-black hover:bg-black/90 rounded-2xl p-2 transition-all duration-3000 justify-center my-auto">
									<IconArrowsMaximize
										className="w-12 h-12"
										stroke={2}
										color="white"
									/>
								</div>
								<div className="ml-5 md:col-span-9 col-span-3 md:justify-self-start justify-self-start text-left text-white">
									<div className="text-3xl font-extrabold">
										{event.year}
									</div>
									<div className="md:text-md text-sm">
										{event.eventName}
									</div>
								</div>
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
};

export default EventCard;
