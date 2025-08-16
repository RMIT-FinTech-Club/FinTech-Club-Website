import React from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./carousel.css";
import Project from "./projectCard";
import axios from "axios";

type datatype = {
	_id: string;
	year: number;
	image_url: string;
	title: string;
	description: string;
};

function Viewmore() {
	const [View, setView] = useState(false);
	const press = () => {
		setView((prevView) => !prevView);
	};

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
						status: "ongoing",
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
		<div>
			<div className=" flex justify-center pt-10">
				<button className="text-blueSlate font-normal" onClick={press}>
					{View ? "View less" : "View more"}
				</button>
			</div>
			{View && (
				<>
					<div>
						<div className="flex place-content-center pt-10 max-w-[1652px] max-h-[54px] ">
							<p className="text-yellowSand flex items-center pr-8 font-semibold text-[40px]">
								2024
							</p>
							<div className="max-w-[1200px] w-[2000px] h-[3px] font-black bg-yellowPrimary flex items-center"></div>
						</div>
						<Slider {...settings} className="">
							{pastProject
								.filter((item) => item.year == 2024)
								.map((item) => (
									<Project
										key={item._id}
										_id={item._id}
										year={item.year}
										title={item.title}
										image_url={item.image_url}
										description={item.description}
									/>
								))}
						</Slider>

						<div className="flex place-content-center pt-10 max-w-[1652px] max-h-[54px]">
							<p className="text-yellowSand flex items-center pr-8 font-semibold text-[40px]">
								2023
							</p>
							<div className="max-w-[1200px] w-[2000px] h-[3px] font-black bg-yellowPrimary flex items-center"></div>
						</div>
						<Slider {...settings} className="">
							{pastProject
								.filter((item) => item.year == 2023)
								.map((item) => (
									<Project
										key={item._id}
										_id={item._id}
										year={item.year}
										title={item.title}
										image_url={item.image_url}
										description={item.description}
									/>
								))}
						</Slider>
					</div>
				</>
			)}
		</div>
	);
}
export default Viewmore;
