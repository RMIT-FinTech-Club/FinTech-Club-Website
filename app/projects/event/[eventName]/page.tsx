"use client";
import type React from "react";
import axios from "axios";
import EventDescription from "./components/EventDescription";
import EventGallery from "./components/EventGallery";
import Sponsor from "./components/Sponsor";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface EventProject {
	_id: string;
	year: string;
	eventName: string;
	eventThumbnail: string;
	description: string;
	sponsorURLs: string[];
	recapURLs: string[];
}

const EventDetailPage: React.FC = () => {
	const [projectData, setProjectData] = useState<EventProject>({
		_id: "",
		year: "",
		eventName: "",
		eventThumbnail: "",
		description: "",
		sponsorURLs: [],
		recapURLs: [],
	});
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const configuration = {
			method: "post",
			url: "/api/v1/eventprojects/getOneEventProject",
			data: {
				id: "667e662dd27faa3bbed379e1",
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
	}, []);
	return isLoading ? (
		<section className="flex flex-col items-center h-screen w-full justify-center">
			<ClipLoader color="#2C305F" size={60}/>
		</section>
	) : (
		<div className="w-100 h-auto">
			{/* <EventDescription
				eventName={projectData.eventName}
				eventDescription={projectData.description}
				eventThumbnail={projectData.eventThumbnail}
			/> */}
			<Sponsor />
			<EventGallery eventRecapURLs={projectData.recapURLs} />
		</div>
	);
};

export default EventDetailPage;
