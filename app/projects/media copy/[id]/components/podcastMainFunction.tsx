"use client";

import { Button, Slider } from "@nextui-org/react";
import {
	IconDotsVertical,
	IconDownload,
	IconInfoCircle,
	IconPlayerPauseFilled,
	IconPlayerPlayFilled,
	IconRewindBackward10,
	IconRewindForward10,
	IconShare,
	IconVolume,
	IconVolumeOff,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import SpeedSelector from "./audioSpeedSelector";
// import PodcastTitle from "./podcastTitle";
import HeaderPodcastPage from "./headerPodcastPage";

const PodcastMainFunction: React.FC<{
	audioFileUrl: string;
	title: string;
}> = ({ audioFileUrl, title }) => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);

	const [isVolumeOn, setIsVolumeOn] = useState<boolean>(true);
	const [currentVolume, setCurrentVolume] = useState<number>(100);

	const [showIcons, setShowIcons] = useState(false);
	const [showFollowUs, setShowFollowUs] = useState(false);

	const [currentProgress, setCurrentProgress] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);

	const audioRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		const audioElement = audioRef.current;
		if (audioElement) {
			audioElement.volume = 1;
			audioElement.src = `${audioFileUrl}`;
			audioElement.addEventListener("timeupdate", onTimeUpdate);
			audioElement.addEventListener("loadedmetadata", () => {
				setDuration(audioElement.duration || 0);
			});
			audioElement.addEventListener("ended", () => {
				toggleAudio();
			});
		}
	}, []);

	const formattedTime = (time: number): string => {
		const leadingZero = (num: number): string =>
			num < 10 ? `0${num}` : `${num}`;

		const hour = leadingZero(Math.floor(time / 3600));
		const minute = leadingZero(Math.floor((time % 3600) / 60));
		const second = leadingZero(Math.floor(time % 60));
		return time > 3600
			? `${hour}:${minute}:${second}`
			: `${minute}:${second}`;
	};

	const handleVolumeChange = (value: number) => {
		setCurrentVolume(value);
		if (audioRef.current) {
			audioRef.current.volume = value / 100;
		}
		if (value > 0) {
			setIsVolumeOn(true);
		}
	};

	const toggleVolume = () => {
		if (isVolumeOn) {
			setCurrentVolume(0);
			setIsVolumeOn(false);
			handleVolumeChange(0);
		} else {
			setCurrentVolume(100);
			setIsVolumeOn(true);
			handleVolumeChange(100);
		}
	};

	const toggleAudio = () => {
		if (isPlaying) {
			audioRef.current?.pause();
			setIsPlaying(false);
		} else {
			audioRef.current?.play();
			setIsPlaying(true);
		}
	};

	const handleSpeedChange = (speed: number) => {
		if (audioRef.current) {
			audioRef.current.playbackRate = speed;
		}
	};

	const onTimeUpdate = () => {
		setCurrentProgress(audioRef.current?.currentTime || 0);
	};

	const skipForward = () => {
		if (audioRef.current) {
			audioRef.current.currentTime += 10;
		}
	};

	const skipBackward = () => {
		if (audioRef.current) {
			audioRef.current.currentTime -= 10;
		}
	};

	return (
		<div className="my-4 w-full">
			<audio ref={audioRef} controls={false} />
			<div className="lg:flex lg:flex-col">
				<p className="hidden lg:block text-white w-1/2">
					{title}
				</p>
				<Slider
					minValue={0}
					value={currentProgress}
					maxValue={duration}
					onChange={(value) => {
						setCurrentProgress(value as number);
						if (audioRef.current) {
							audioRef.current.currentTime = value as number;
						}
					}}
					classNames={{
						filler: "bg-ft-primary-yellow",
						track: "border-s-ft-primary-yellow bg-ft-primary-blue",
					}}
					renderThumb={(props) => (
						<div
							{...props}
							className="top-1/2 cursor-grab data-[dragging=true]:cursor-grabbing"
						>
							<span className="transition-transform duration-300 bg-ft-primary-yellow rounded-full w-5 h-5 hover:scale-80 block group-data-[dragging=true]:scale-80" />
						</div>
					)}
				/>
				<div className="flex justify-between text-white">
					<span>{formattedTime(currentProgress)}</span>
					<span>{formattedTime(duration)}</span>
				</div>
				<div className="w-full py-4">
					<div className="flex items-center justify-between">
						{/* Volume controls */}
						<div className="flex items-center w-1/6">
							{isVolumeOn ? (
								<IconVolume
									color="#ebebeb"
									className="mx-2 flex-shrink-0 cursor-pointer size-5 md:size-7"
									onClick={() => toggleVolume()}
								/>
							) : (
								<IconVolumeOff
									color="#ebebeb"
									className="mx-2 flex-shrink-0 cursor-pointer size-5 md:size-7"
									onClick={() => toggleVolume()}
								/>
							)}
							<Slider
								minValue={0}
								value={currentVolume}
								maxValue={100}
								onChange={(value) =>
									handleVolumeChange(value as number)
								}
								size="sm"
								className="w-1/2"
								showTooltip
								classNames={{
									filler: "bg-ft-primary-yellow",
									track: "border-s-ft-primary-yellow bg-ft-primary-blue",
								}}
								renderThumb={(props) => (
									<div
										{...props}
										className="top-1/2 cursor-grab data-[dragging=true]:cursor-grabbing"
									>
										<span className="transition-transform duration-300 bg-ft-primary-yellow rounded-full size-3 hover:scale-80 block group-data-[dragging=true]:scale-80" />
									</div>
								)}
								tooltipProps={{
									placement: "top",
									classNames: {
										base: "before:bg-ft-primary-yellow",
										content: "bg-ft-primary-yellow",
									},
								}}
							/>
						</div>
						{/* Audio controls */}
						<div className="flex items-center justify-center">
							<IconRewindBackward10
								strokeWidth={1}
								className="mx-2 cursor-pointer text-white size-6 md:size-8"
								onClick={skipBackward}
							/>
							{isPlaying ? (
								<IconPlayerPauseFilled
									strokeWidth={1}
									className="mx-2 cursor-pointer text-white size-10 md:size-20"
									onClick={toggleAudio}
								/>
							) : (
								<IconPlayerPlayFilled
									strokeWidth={1}
									className="mx-2 cursor-pointer text-white size-10 md:size-20"
									onClick={toggleAudio}
								/>
							)}
							<IconRewindForward10
								strokeWidth={1}
								className="mx-2 cursor-pointer text-white size-6 md:size-8"
								onClick={skipForward}
							/>
						</div>
						{/* Right actions */}
						<div className="flex items-center gap-2">
							<SpeedSelector onSpeedChange={handleSpeedChange} />
							<IconDownload
								size={30}
								color="#ebebeb"
								className="mx-2 cursor-pointer hidden md:flex"
							/>
							<IconShare
								size={30}
								color="#ebebeb"
								className="mx-2 cursor-pointer hidden md:flex"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PodcastMainFunction;
