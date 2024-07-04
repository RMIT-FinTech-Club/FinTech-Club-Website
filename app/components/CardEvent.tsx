import { Button } from "@nextui-org/button";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
    CardProps
} from "@nextui-org/react";
import clsx from "clsx";
import { CSSProperties, HTMLAttributes, RefObject } from "react";
import Slider from "react-slick";

interface CardEventContent extends CardProps {
	eventName: string;
	location: string;
	title: string;
	detail: string;
	timeOnHour: string;
	timeOnDay: string;
	timeOnMonth: string;
};

const CardEvent = ({
	eventName,
	location,
	title,
	detail,
	timeOnHour,
	timeOnDay,
	timeOnMonth,
}: CardEventContent) => {
	return (
		<Card className={clsx('flex min-h-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] flex-col mr-5 mb-6')}>
			<CardBody className="p-0 overflow-visible">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					className="w-full object-cover h-[150px] lg:h-[200px]"
					alt="Card background"
					src="/ProjectGeneralImage.png"
				/>
			</CardBody>
			<CardFooter className="w-full text-white gap-2 md:text-ft-primary-blue">
				<div className="bg-ft-primary-blue w-auto rounded-lg px-4 flex justify-around items-center gap-2 md:gap-0 content-center md:flex-col md:items-center  md:bg-transparent md:text-ft-primary-blue">
					<p className="text-sm font-bold">{timeOnDay}</p>
					<p className="text-md font-bold">{timeOnMonth}</p>
				</div>
				<div className="hidden md:block md:w-full md:text-ft-primary-blue">
					<h1 className="text-xl font-bold w-full text-wrap md:font-semibold truncate line-clamp-1">
						{title}
					</h1>
					<p className="text-medium w-full text-wrap truncate line-clamp-1">{detail}</p>
				</div>
			</CardFooter>
			{/* For mobile */}
			<CardBody className="flex text-ft-primary-blue flex-col gap-1 md:hidden">
				<div>
					<h2 className="text-2xl font-semibold">{eventName}</h2>
					<h3 className="text-xl font-medium">{timeOnHour}</h3>
					<p className=" text-base">{location}</p>
				</div>
				<a
					href="/"
					className="hidden w-full md:block md:h-unit-5xl bg-gray-50"
				>
					<img
						src=""
						alt=""
						className="relative top-0 left-0 w-full h-full"
					/>
				</a>
			</CardBody>
			<CardFooter className="md:hidden">
				<Button className="w-full bg-ft-primary-blue text-xl text-white font-bold">
					View details
				</Button>
			</CardFooter>
		</Card>
	);
};
export default CardEvent;
