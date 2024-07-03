import React from "react";

const EventDescription: React.FC<{
	eventName: string;
	eventDescription: string;
	eventThumbnail: string;
}> = ({ eventName, eventDescription, eventThumbnail }) => {
	return (
		<div className="w-full bg-ft-background py-6">
			<h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-8 uppercase text-[#2b305e]">
				{eventName}
			</h1>
			<div className="w-1/5 h-1 bg-ft-primary-yellow my-8 mx-auto"></div>
			<img
				src={eventThumbnail}
				alt="event-img"
				className="mx-auto w-[70vw] h-auto rounded-2xl"
			/>
			<p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-justify mt-4 w-[70vw] mx-auto font-light">
				{eventDescription}
			</p>
		</div>
	);
};

export default EventDescription;
