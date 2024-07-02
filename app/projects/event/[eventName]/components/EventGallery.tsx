"use client";

import React from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import Slider from "react-slick";

interface RecapGalleryProps {
	eventRecapURLs: string[];
}

const EventCard: React.FC<{ url: string }> = ({ url }) => {
	return (
		<img
			className="w-full h-full rounded-2xl object-cover"
			src={url}
			alt="Recap Photo"
		/>
	);
};

const PreArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
	return (
		<div className="absolute top-1/2 left-3 z-10">
			<button
				onClick={onClick}
				className="flex justify-center w-10 h-10 rounded-full bg-ft-primary-yellow hover:bg-ft-primary-yellow-600"
			>
				<MdOutlineNavigateBefore size={40} color="white" />
			</button>
		</div>
	);
};

const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
	return (
		<div className="absolute top-1/2 right-3 z-10">
			<button
				onClick={onClick}
				className="flex justify-center w-10 h-10 rounded-full bg-ft-primary-yellow hover:bg-ft-primary-yellow-600"
			>
				<MdOutlineNavigateNext size={40} color="white" />
			</button>
		</div>
	);
};

const EventGallery: React.FC<{ eventRecapURLs: string[] }> = ({
	eventRecapURLs,
}) => {
	const settings = {
		autoplay: true,
		autoplaySpeed: 3000,
		accessibility: true,
		appendDots: (dots: any) => (
			<div
				style={{
					bottom: "12px",
				}}
			>
				<ul>{dots}</ul>
			</div>
		),
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: "linear",
		prevArrow: <PreArrow />,
		nextArrow: <NextArrow />,
	};

	return (
		<div className="w-full h-auto py-6 bg-ft-background">
			<h1 className="w-full h-full my-4 text-center text-ft-primary-blue text-4xl font-extrabold">
				Event Recap
			</h1>
			<div className="w-[16vw] h-0.5 bg-ft-primary-yellow m-auto" />
			<div className="flex justify-center">
				<Slider
					className="w-[90vw] md:w-[80vw] lg:w-[60vw] m-2"
					{...settings}
				>
					{eventRecapURLs.map((url, id) => (
						<EventCard key={id} url={url} />
					))}
				</Slider>
			</div>
		</div>
	);
};

export default EventGallery;
