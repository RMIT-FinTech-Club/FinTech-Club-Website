import React from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./carousel.css";
import Project from "./projectCard";

type datatype = {
	year: number;
	image: string;
	title: string;
	brief: string;
};

const data: datatype[] = [
	{
		year: 2024,
		image: "AchievementBg.png",
		title: "ABC",
		brief: "ddddd",
	},

	{
		year: 2024,
		image: "AchievementBg.png",
		title: "qrt",
		brief: "yui",
	},

	{
		year: 2023,
		image: "AchievementBg.png",
		title: "dsadasdsđ",
		brief: "ccc",
	},

	{
		year: 2023,
		image: "AchievementBg.png",
		title: "5454545",
		brief: "ccc",
	},

	{
		year: 2023,
		image: "AchievementBg.png",
		title: "dfdsffasdádasdsds",
		brief: "dádasd",
	},
];

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
							<h6 className="text-yellowSand flex items-center pr-8"> 2024 </h6>
							<div className="max-w-[1200px] w-[2000px] h-[3px] font-black bg-yellowPrimary flex items-center"></div>
						</div>
						<Slider {...settings} className="">
							{data
								.filter((item) => item.year == 2024)
								.map((item) => (
									<Project
										key={item.year}
										year={item.year}
										title={item.title}
										image={item.image}
										brief={item.brief}
									/>
								))}
						</Slider>

						<div className="flex place-content-center pt-10 max-w-[1652px] max-h-[54px]">
							<h6 className="text-yellowSand flex items-center pr-8"> 2023 </h6>
							<div className="max-w-[1200px] w-[2000px] h-[3px] font-black bg-yellowPrimary flex items-center"></div>
						</div>
						<Slider {...settings} className="">
							{data
								.filter((item) => item.year == 2023)
								.map((item) => (
									<Project
										key={item.year}
										year={item.year}
										title={item.title}
										image={item.image}
										brief={item.brief}
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
