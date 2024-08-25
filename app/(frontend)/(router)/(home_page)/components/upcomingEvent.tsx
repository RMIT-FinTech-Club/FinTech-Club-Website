"use client";
import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardEvent from "./CardEvent";
import "@styles/carousel-dynamic-height.css";
import { NextArrow, PreArrow } from "@/components/carouselArrows";
import { useQuery } from "@tanstack/react-query";

const settings = {
	className: "w-full center",
	infinite: true,
	autoplay: true,
	centerMode: true,
	autoSpeed: 1000,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	initialSlide: 0,
} as Settings;

type UpComingEvents = {
	imageUrl: string;
	name: string;
	description: string;
	location: string;
	date: string;
	time: string;
	_id: string;
};

const UpcomingEvent = async () => {
	const { data: upcomingEvents } = useQuery<UpComingEvents[]>({
		queryKey: ["upcoming-events"],
		queryFn: async () => {
			const response = await fetch("/api/v1/events/upcoming");
			return response.json().then((data) => data.data);
		},
		refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 60,
	})
	const sliderRef = useRef<Slider>(null);

	return (
		<section className="flex flex-col px-side-margin-mobile md:px-side-margin gap-5 w-screen py-2 lg:py-12">
			<h1 className="text-3xl font-bold mx-auto text-ft-primary-blue">
				PROJECTS
			</h1>
			<section className="relative mx-auto w-full">
				<section className="flex flex-row justify-between items-center w-full mb-5 gap-4">
					<hr className="w-1/3  border-b-2 border-solid border-ft-primary-yellow md:hidden" />
					<div className="text-ft-primary-yellow text-2xl font-semibold">
						2024
					</div>
					<hr className="w-1/3 border-b-2 border-solid border-ft-primary-yellow md:w-full" />
				</section>
				<PreArrow
					buttonOnClick={() => {
						sliderRef?.current?.slickPrev();
					}}
					className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-16"
				/>
				<Slider ref={sliderRef} {...settings}>
					{upcomingEvents && upcomingEvents.map((event) => {
						// Split date to get month and day
						const dateMonth = (event["date"] as string).split(" ");

						return (
							<CardEvent
								key={event["_id"]}
								eventId={event["_id"]}
								imageUrl={event["imageUrl"]}
								eventName="No name"
								location={event["location"]}
								title={event["name"]}
								detail={event["description"]}
								timeOnHour={event["time"]}
								timeOnDay={dateMonth[0]}
								timeOnMonth={dateMonth[1]}
							/>
						);
					})}
				</Slider>
				<NextArrow
					buttonOnClick={() => {
						sliderRef?.current?.slickNext();
					}}
					className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-16"
				/>
			</section>
		</section>
	);
};

export default UpcomingEvent;
