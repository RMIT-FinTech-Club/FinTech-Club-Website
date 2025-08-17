"use client";
import type React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./carousel.css";
import Project from "./projectCard";
import Viewmore from "./viewMore";
import axios from "axios";

type datatype = {
	_id: string;
	year: number;
	image_url: string;
	title: string;
	description: string;
};

const PastProject = () => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 2.5,
		focusOnSelect: true,
	};

	const [pastProject, setPastProject] = useState<datatype[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchPastHighLightedProject = async () => {
			try {
				const res = await axios.get("/api/v1/projects", {
					params: {
						status: "completed",
					},
				});

				let projectsData: datatype[] = [];

				if (Array.isArray(res.data)) {
					projectsData = res.data;
				} else if (
					res.data &&
					typeof res.data === "object" &&
					!Array.isArray(res.data)
				) {
					projectsData = [res.data];
				}
				setPastProject(projectsData);
				console.log("Check data: ", projectsData);
			} catch (error) {
				console.log("Error fetching Past Highlighted Project: ", error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchPastHighLightedProject();
	}, []);

	if (isLoading) return;
	{
		<div className="flex justify-center text-bluePrimary font-bold">
			Loading Our Projects...
		</div>;
	}

	return (
		<section className="pb-10">
			<p className="flex justify-center text-bluePrimary font-extrabold text-[50px]">
				PAST HIGHLIGHTED PROJECTS
			</p>

			<div className="flex place-content-center pt-10 max-w-[1652px] max-h-[50px]">
				<p className="text-yellowSand flex items-center pr-8 font-semibold text-[40px]">
					2025
				</p>
				<div className="flex items-center max-w-[1200px] w-[2000px] h-[3px] font-black bg-yellowPrimary"></div>
			</div>

			<Slider {...settings}>
				{pastProject.map((item) => (
					<Project
						key={item._id}
						_id={item._id}
						year={item.year}
						image_url={item.image_url}
						title={item.title}
						description={item.description}
					/>
				))}
			</Slider>

			<Viewmore />
		</section>
	);
};
export default PastProject;
