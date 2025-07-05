import { Button } from "@nextui-org/button";
import {
	Card,
	CardBody,
	CardFooter,
	type CardProps,
} from "@nextui-org/react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
interface CardEventContent extends CardProps {
	eventId: string;
	eventName: string;
	imageUrl: string;
	location: string;
	title: string;
	detail: string;
	timeOnHour: string;
	timeOnDay: string;
	timeOnMonth: string;
}

const CardEvent = ({
	eventId,
	imageUrl,
	location,
	title,
	detail,
	timeOnHour,
	timeOnDay,
	timeOnMonth,
}: CardEventContent) => {
	return (
		<Card
			className={clsx(
				"flex w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] flex-col mr-5 mb-6 h-full",
			)}
		>
			<CardBody className="p-0 overflow-visible">
				<Image
					width={1000}
					height={1000}
					className="w-full object-cover h-[150px] lg:h-[200px]"
					alt="Card background"
					src={imageUrl}
				/>
			</CardBody>
			<Link
				className="h-full"
				href={`/events/event-detail/${eventId}`}>
				<CardFooter className="w-full text-white gap-2 md:text-ft-primary-blue">
					<div className="bg-ft-primary-blue w-auto rounded-lg px-4 flex justify-around items-center gap-2 md:gap-0 content-center md:flex-col md:items-center  md:bg-transparent md:text-ft-primary-blue">
						<p className="text-sm font-bold">{timeOnDay}</p>
						<p className="text-md font-bold">{timeOnMonth}</p>
					</div>
					<div className="hidden md:block md:w-full md:text-ft-primary-blue ">
						<h1 className="text-xl font-bold w-full text-wrap md:font-semibold truncate line-clamp-1">
							{title}
						</h1>
						<p className="text-medium w-full text-wrap truncate line-clamp-1">
							{detail}
						</p>
					</div>
				</CardFooter>
				{/* For mobile */}
				<CardBody className="flex text-ft-primary-blue flex-col gap-1 md:hidden min-h-64">
					<div>
						<h2 className="text-2xl font-semibold">{title}</h2>
						<h3 className="text-xl font-medium">{timeOnHour}</h3>
						<p className=" text-base">{location}</p>
					</div>
				</CardBody>
				<CardFooter className="md:hidden">
					<Button
						className="w-full bg-ft-primary-blue text-xl text-white font-bold">
						View details
					</Button>
				</CardFooter>
			</Link>
		</Card >
	);
};
export default CardEvent;
