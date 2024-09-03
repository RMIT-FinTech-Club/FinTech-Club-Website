"use client";
import { FaCirclePlay } from "react-icons/fa6";
import getBlobDuration from "get-blob-duration";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@nextui-org/react";

const PodcastCard: React.FC<{ data: any; espsode: number }> = ({
	data,
	espsode,
}) => {
	console.log(JSON.stringify(data));
	const [duration, setDuration] = useState<string>();
	useEffect(() => {
		getAudioDuration(data.audioFileUrl).then((duration) => {
			setDuration(duration);
		});
	});
	if (duration) {
		return (
			<div className="w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4 min-w-[360px] aspect-[1/1] shadow-lg rounded-xl relative overflow-hidden group">
				<div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 transition-all duration-300 group-hover:opacity-0" />
				<Image
					src={data.thumnailFileUrl}
					alt="Avatar"
					className="w-full h-full object-cover rounded-lg"
					style={{ aspectRatio: "1/1" }}
					width={1000}
					height={1000}
				/>
				<div className="absolute h-auto bottom-0 w-full p-4 bg-gradient-to-t from-[#000] to-transparent text-white text-base md:text-lg lg:text-xl font-light transition-all duration-300">
					<div className="h-100 w-100 flex flex-row justify-between">
						<div className="w-3/5">
							<div className="flex flex-row justify-between mb-1">
								<p className="leading-normal text-sm font-semibold text-white">
									EP <span>{espsode}</span>
								</p>
								<p className="leading-normal text-sm font-semibold text-white">
									{duration}
								</p>
							</div>
							<h1 className="leading-normal text-[19px] font-extrabold text-white">
								{data.title}
							</h1>
						</div>
						<div className="h-[4/5] bg-white w-[2px] opacity-50" />
						<div className="w-1/4">
							<div className="">
								<p className="text-md leading-normal text-white font-semibold">
									By
								</p>
								<p className="text-md leading-normal font-extrabold text-white">
									Fintech Club
								</p>
							</div>
							<Link
								href={`/projects/media/${data._id}`}
							>
								<FaCirclePlay
									className="block m-auto mt-4 cursor-pointer"
									size={50}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <Skeleton className="w-full h-full" />;
	}
};

async function getAudioDuration(audioFileUrl: string) {
	try {
		let result = "";
		const duration = await getBlobDuration(audioFileUrl);
		console.log(`duration: ${duration}`);

		if (duration < 60) {
			result = `${duration} SECS`;
		} else if (duration < 60 * 60) {
			result = `${Math.round(duration / 60)} MINS`;
		} else {
			result = `${Math.round(duration / (60 * 60))} H`;
		}
		return result;
	} catch (error: any) {
		console.error(error.message);
	}
}
export default PodcastCard;
