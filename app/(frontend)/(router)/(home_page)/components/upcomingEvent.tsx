"use client";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/upcoming.module.css";
import clsx from "clsx";

// Data shape for an event card
type EventItem = {
	name: string;
	image: string;
	date: string;
	label: string;
};

// Static list of events (source of truth for dots order)
const placeholders: EventItem[] = [
	{ name: "Hackathon 2025", image: "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter", date: "31th August", label: "label" },
	{ name: "Design Sprint", image: "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter", date: "02 Sep", label: "label" },
	{ name: "Dev Conf", image: "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter", date: "10 Sep", label: "label" },
	{ name: "AI Meetup", image: "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter", date: "18 Sep", label: "label" },
	{ name: "Cloud Day", image: "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter", date: "25 Sep", label: "label" },
];

export default function UpcomingEvent() {
	// Rotating copy of placeholders that drives what’s rendered
	const [items, setItems] = useState<EventItem[]>(placeholders);

	// Prevents new clicks while the 3s CSS animation is running
	const [animating, setAnimating] = useState(false);

	// Refs to the 5 visible card DOM nodes (positions card_1..card_5)
	const cardRef = useRef<(HTMLDivElement | null)[]>([]);

	// Trigger a step to the next or previous slide.
	// We apply CSS classes to animate positions, then rotate the data array
	// after 3s to match the new visual order.
	const handleClick = (dir: "next" | "prev") => {
		if (animating) return;
		setAnimating(true);

		// Add animation class to each of the 5 card positions
		cardRef.current.forEach((el, i) => {
			el?.classList.add(styles[`card_${i + 1}_${dir}`]);
		});

		// After animation finishes, rotate the array to match visual result
		setTimeout(() => {
			const rotated = [...items];

			if (dir === "prev") {
				// Move the last item to the front (right → center)
				// Matches clicking card_2 to go "previous"
				rotated.unshift(rotated.pop()!);
			} else {
				// Move the first item to the end (left → center)
				// Matches clicking card_4 to go "next"
				rotated.push(rotated.shift()!);
			}

			setItems(rotated);
			setAnimating(false);

			// Clean up animation classes for the next click
			cardRef.current.forEach((el, i) => {
				el?.classList.remove(styles[`card_${i + 1}_${dir}`]);
			});
		}, 3000); // Must match the CSS animation-duration
	};

	// Compute the 5 cards to render at fixed positions card_1..card_5.
	// If there are fewer than 5 items you can loop; here we assume >= 5.
	const visible = Array.from({ length: 5 }, (_, i) => items[i % (items.length || 1)]);

	return (
		<div className="h-fit w-[100vw] py-10 relative flex flex-col items-center">
			{/* Header + decorative stars */}
			<div className="h-[max-content] w-[max-content] relative mx-auto mt-[4vh] mb-[8vh]">
				<p className="text-[4vw] text-bluePrimary uppercase font-extrabold text-center">UPCOMING EVENTS</p>
				<div
					className="absolute bottom-[calc(100%+2vh)] left-[0.2vw] h-[4vh] aspect-square bg-center bg-no-repeat bg-contain"
					style={{ backgroundImage: "url(/home/star.svg)" }}
				/>
				<div
					className="absolute top-[-3vh] left-[-9vh] h-[8vh] aspect-square bg-center bg-no-repeat bg-contain"
					style={{ backgroundImage: "url(/home/star.svg)" }}
				/>
				<div
					className="absolute top-[-2vh] right-[-9vh] h-[8vh] aspect-square bg-center bg-no-repeat bg-contain"
					style={{ backgroundImage: "url(/home/star.svg)" }}
				/>
				<div
					className="absolute top-[calc(100%+2vh)] right-[0.2vw] h-[4vh] aspect-square bg-center bg-no-repeat bg-contain"
					style={{ backgroundImage: "url(/home/star.svg)" }}
				/>
			</div>

			{/* Carousel stage (5 fixed positions) */}
			<div className="h-[70vh] w-full relative">
				{visible.map((ev, index) => (
					<div
						key={`${ev.name}-${index}`}
						ref={(el: HTMLDivElement | null) => {
							// Keep a ref to each fixed position wrapper
							cardRef.current[index] = el;
						}}
						className={clsx(
							styles.card,                 // base: 3D, opacity, duration, fill-mode, etc.
							styles[`card_${index + 1}`], // fixed position class: card_1..card_5
							"grid place-items-center h-[60vh] w-[25vw] border-bluePrimary border-[0.5vh] rounded-[2vw] p-[2vh] bg-blueSlate"
						)}
						onClick={() => {
							// Click on the side cards to navigate:
							// card_2 → prev (bring right item to center)
							// card_4 → next (bring left item to center)
							if (index === 1) handleClick("prev");
							else if (index === 3) handleClick("next");
						}}
					>
						{/* Card content */}
						<p className="text-[3vh] text-yellowSand uppercase text-center font-bold">{ev.name}</p>

						<div className="relative w-full h-[25vh] rounded-[3vh] bg-gradient-to-b from-[#C9D6EA] to-[#DBB968] p-[1.5vh]">
							<div
								className="w-full h-full rounded-[2.5vh] bg-center bg-cover bg-no-repeat"
								style={{ backgroundImage: `url(${ev.image})` }}
							/>
						</div>

						<div className="w-full h-[10vh] flex justify-between">
							<div className="h-full aspect-square rounded-[3vh] bg-gradient-to-b from-[#C9D6EA] to-[#DBB968] p-[1.5vh] flex justify-center items-center">
								<p className="text-[2vh] leading-[2.2vh] font-bold text-center">{ev.date}</p>
							</div>
							<div className="h-full w-full ml-[2vw] rounded-[3vh] bg-gradient-to-b from-[#C9D6EA] to-[#DBB968] p-[1.5vh] flex justify-center items-center">
								<div className="bg-white w-full h-full rounded-[2.5vh] text-[2vh] leading-[2.2vh] font-bold text-center flex justify-center items-center">
									{ev.label}
								</div>
							</div>
						</div>

						<div className="h-[max-content] w-[max-content] max-w-full rounded-[3vh] bg-gradient-to-b from-[#C9D6EA] to-[#DBB968] py-[1.5vh] px-[3vw] flex justify-center items-center cursor-pointer">
							<p className="text-[3vh] leading-[3.3vh] font-bold text-center">Join Now</p>
						</div>
					</div>
				))}
			</div>

			{/* Dots + arrows */}
			<div className="w-full flex justify-center items-center gap-[1.5vw] mt-[-4vh] z-[10]">
				<button
					className="h-[5vh] w-[5vh] text-[3vh] leading-[4vh] rounded-full border border-[#ddd] grid place-items-center hover:bg-[#f7f7f7] disabled:opacity-50"
					onClick={() => handleClick("prev")}
					disabled={animating}
					aria-label="Previous"
				>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>

				<div className="flex items-center gap-[0.8vw]">
					{placeholders.map((_, i) => {
						// Active dot = the original index of the center card (items[2])
						const activeIndex = placeholders.indexOf(items[2]);
						return (
							<div
								key={i}
								className={`h-[2vh] aspect-square rounded-full ${i === activeIndex ? "bg-yellowPrimary" : "bg-[#D9D9D9]"
									}`}
							/>
						);
					})}
				</div>

				<button
					className="h-[5vh] w-[5vh] text-[3vh] leading-[4vh] rounded-full border border-[#ddd] grid place-items-center hover:bg-[#f7f7f7] disabled:opacity-50"
					onClick={() => handleClick("next")}
					disabled={animating}
					aria-label="Next"
				>
					<FontAwesomeIcon icon={faAngleRight} />
				</button>
			</div>
		</div>
	);
}