"use client";
import type { EventDetails } from "./types";
import type { Event } from "../../components/types";
import { Button } from "@nextui-org/react";
import { CSSProperties } from "react";

const EventDetail: React.FC<{ event: Event }> = ({ event }) => {
	console.log(event);
	return (
		<div className="items-center w-full h-full md:mx-side-margin 2xl:mx-16 my-4 2xl:my-8 justify-between">
			<section
				className="rounded-2xl w-full h-[50vh] px-5 relative flex flex-col md:flex-row justify-center md:justify-between items-center"
				style={{
					backgroundImage: `url(${event?.imageUrl})`,
					backgroundRepeat: `no-repeat`,
					backgroundSize: `cover`,
					backgroundClip: `border-box`,
				}}
			>
				<div className="backdrop-blur-sm py-1 2xl:py-4">
					<h5 className="font-black text-white my-5 py-1 2xl:py-2 text-center lg:text-left">
						{event?.description}
						{/* change to {event?.name} later because there is not any data...*/}
					</h5>
					<p className="text-white text-4xl py-1 2xl:py-2 text-justify">
						{event?.description}
					</p>
				</div>
				<div className="backdrop-blur-sm place-items-cente rounded-xl ">
					<Button size="lg" color="primary" variant="solid">
						<a href={event?.registrationLink}>Join event</a>
					</Button>
				</div>
				{/* <img
          className="block w-full object-cover rounded-xl"
          src={event?.imageUrl}
          alt={event?.description}
        /> */}
			</section>
			<section className="my-10 flex md:flex-row flex-col">
				{/* Left content */}
				<div className="w-full md:w-2/3 px-4">
					<div className="my-1 py-1 2xl:my-2 2xl:py-4">
						<h5 className="font-black py-1 2xl:py-2 text-center lg:text-left">
							Description
						</h5>
						<p className="py-1 2xl:py-2 text-justify">
							{event?.description}
						</p>
					</div>
					<div className="my-1 py-1 2xl:my-2 2xl:py-4">
						<h5 className="font-black py-1 2xl:py-2 text-center lg:text-left">
							Date
						</h5>
						<p className="py-1 2xl:py-2 text-justify">
							{event?.fullDate}
						</p>
					</div>
					<div className="my-1 py-1 2xl:my-2 2xl:py-4">
						<h5 className="font-black py-1 2xl:py-2 text-center lg:text-left">
							Link
						</h5>
						<p className="py-1 2xl:py-2 text-justify">
							{event?.registrationLink}
						</p>
					</div>
				</div>
				{/* Right content */}
				<div className="py-1 md:px-4 2xl:py-4 md:w-1/3">
					<h5 className="font-black py-1 2xl:py-2 mb-4 text-center lg:text-left">
						Event Location
					</h5>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62713.703081693166!2d106.6549008613193!3d10.764783831994377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fbea5fe3db1%3A0xfae94aca5709003f!2zxJDhuqFpIEjhu41jIFJNSVQgTmFtIFPDoGkgR8Oybg!5e0!3m2!1svi!2s!4v1714499338949!5m2!1svi!2s"
						loading="lazy"
						title="Event Location Google Map"
						className="w-full object-cover h-[360px] 2xl:h-[480px]  rounded-xl"
					/>
				</div>
			</section>
		</div>
	);
};

export default EventDetail;
