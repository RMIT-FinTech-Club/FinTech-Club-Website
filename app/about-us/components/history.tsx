"use client";
import { fontSans } from "@/config/fonts";
import { motion } from "framer-motion";
import {
	useDisclosure,
} from "@nextui-org/react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import "../../../styles/about-us/historyPage.css";

const historyData = [
	{
		year: "2019",
		title: "A Big-Four Inspiration",
		content:
			"Ms. Mai Hoang My Hao, our visionary leader, learned about the T-shaped knowledge concept while at a Big-4 firm internship and recognized its growing demand by employers internationally. Most RMIT clubs then were specialized, so she along with her friend Ms. Mai Doan Ngoc Han, co-founded a multi-disciplinary learning hub for Business, Finance, and Tech students to gain T-shaped skills, and explore the Finance-Technology intersection. With the support of Dr. Binh Nguyen, Senior Program Manager of RMIT’s Blockchain-Enabled Business major, the club was officially unveiled on February 10th, 2020!",
	},
	{
		year: "2020",
		title: "An Ambitious Vision",
		content:
			"Under Ms. Hao’s President tenure, she laid the club’s foundation for future growth. With her intellectual prowess, charitable heart, and ambitious passion, she spearheaded the club’s operations, initial projects, training workshops, collaborative efforts, and industry engagements to deliver value and foster an open-sharing FinTech Club environment. Her relentless efforts resulted in large numbers of talented students flocking to the club, further contributing to its acceleration and recognition in the RMIT community.",
	},
	{
		year: "2021",
		title: "Liftoff!",
		content:
			"Despite COVID-related disruptions, 2021 was an explosive year for FinTech Club. As Bitcoin prices peaked, FinTech-related investments soared, so was FinTech Club’s brand name elevated to the next level. We won “Best Academic Club of Semester” RMIT title for two semesters, successfully organized two major large-scale events envisioned by Ms. Hao, and our club members achieved significant recognition in international competitions. Apart from academics, we also initiated media endeavors like the FinTech Podcast, CafeFin weekly news, and the FinTech Magazine.",
	},
	{
		year: "2022",
		title: "Resilient As Ever",
		content:
			"With a bold mindset, FinTech Club ventured into a broad range of projects and activities in 2022, to deliver more diverse value and experiences for members. Apart from annualized events, we also initiated a charity-fundraising initiative for social causes, partnered with various industry partners, and initiated an internal blockchain development competition called “Star-Up” in collaboration with KardiaChain. Internally, we also created new bonding activity formats, such as the “End-of-Semester Trip” and the “FinTech Olympics”. Despite significant economic fluctuations, our FinTech Club remained resilient through an experimentative spirit.",
	},
	{
		year: "2023",
		title: "Without The People, There Wouldn’t Be A Club!",
		content:
			"In the pursuit of status, recognition and achievement, we as a club cannot forget what makes us who we are – the people. In 2023, our leadership philosophy shifted more towards fostering member well-being and skill/knowledge development. Our club members became more empowered, more connected with each other through this period, through projects such as the RMIT FinTech Blockchain Forum 2023, Club Day project, RMIT Business Plan Competition 2023, Finalytics Day, SnapID app development, and more. We learned that member empowerment is everything.",
	},
	{
		year: "2024",
		title: "Creating Exceptional Value",
		content:
			"After four years of trials-tribulations, our club had grown more experienced and more matured, readying us for a giant leap in 2024 and beyond! Our mission this year is to deliver exceptional value to internal club members, while further heightening our club’s presence in the RMIT community and abroad. To realize this objective, we aim to organize more Business & Tech skill workshops, upscale our media projects, and initiate more mutually beneficial collaborations with industry and student clubs to create real-life experiences for members. Ultimately, we want to further contribute to a FinTech Club that members are proud of, and that the community admires.",
	},
];

export default function HistorySection() {
	const [emblaHorizontalRef, emblaHorizontalApi] = useEmblaCarousel({
		loop: false,
		dragFree: true,
	});

	const [centerSlideIndex, setCenterSlideIndex] = useState<number>(0);

	useEffect(() => {
		if (emblaHorizontalApi) {
			const onSelect = () => {
				const selectedIndex = emblaHorizontalApi.selectedScrollSnap();
				setCenterSlideIndex(selectedIndex);
			};

			emblaHorizontalApi.on("select", onSelect);
			return () => {
				emblaHorizontalApi.off("select", onSelect);
			};
		}
	}, [emblaHorizontalApi]);

	useEffect(() => {
		const screenWidth = window.innerWidth;
		console.log((screenWidth/2) - 53);
	}, [centerSlideIndex]);

	return (
		<>
			<div className="mx-auto w-full md:px-[52px] mt-12 bg-white bg-opacity-0 flex-col grid grid-cols-8 justify-center items-center gap-4">
				<div className="md:inline-flex sm:hidden md:w-full md:h-1 bg-black flex items-center col-span-1">
					<div className="md:inline-block sm:hidden md:w-6 md:h-6 bg-black rounded-full" />
				</div>

				<div className="flex-col justify-start items-center md:gap-1 flex md:col-span-6 col-span-8">
					<div
						className={`self-stretch text-center text-slate-700 text-2xl font-bold ${fontSans.style} tracking-tight`}
					>
						BACK TO TIME
					</div>
					<div className="self-stretch text-center">
						<span
							className={`text-slate-700 md:text-5xl text-2xl font-bold ${fontSans.style}`}
						>
							Discover the
						</span>
						<span
							className={`text-zinc-800 md:text-5xl text-2xl font-bold ${fontSans.style}`}
						>
							{" "}
						</span>
						<span
							className={`text-orange-300 md:text-5xl text-2xl font-bold ${fontSans.style} `}
						>
							FINTECH CLUB
							<br />
						</span>
						<span
							className={`text-slate-400 md:text-5xl text-2xl font-bold ${fontSans.style}`}
						>
							Story & History
						</span>
					</div>

					<div
						className={`mx-auto mt-[16px] md:px-0 px-11 text-black text-lg ${fontSans.style} tracking-wide text-center`}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Cras viverra viverra eros, eu euismod arcu dignissim
						quis. Phasellus sollicitudin
					</div>
				</div>

				<div className="md:inline-flex sm:hidden md:w-full md:h-1 bg-black flex flex-row-reverse items-center justify-self-end col-span-1">
					<div className="md:inline-block sm:hidden md:w-6 md:h-6 bg-black rounded-full" />
				</div>
			</div>

			{/* desktop version */}
			<div className="items-center w-full md:mt-8 md:grid md:grid-cols-7 grid-cols-1 overflow-hidden my-auto overflow-x-hidden">
				<img
					alt="fintech mascot"
					className="md:block hidden md:w-[500px] scale-150 lg:w-[600px] rotate-[58.03deg] rounded-[59px] z-10"
					src="https://ik.imagekit.io/mbrrji2rk/fintechMascot.png?updatedAt=1718991881430"
				/>
				<div
					className={`mt-[93px] mb-[77px] md:w-[0px] w-auto md:h-[300px] h-[200px] grid grid-cols-3 col-span-5 z-0 md:mx-auto ${centerSlideIndex === 0
						? "pr-96"
						: centerSlideIndex === historyData.length - 1
							? " md:pr-0"
							: " md:pr-0"
						}`}
					ref={emblaHorizontalRef}
				>
					<div className="flex items-center col-start-2">
						{historyData.map((data, index) => {
							return (
								<div
									key={data.year}
									className={`flex shrink-0 md:ml-[50px] ml-[50px] lg:ml-[90px] items-center rounded-full duration-1000 ease-out select-none ${index === centerSlideIndex
										? "md:w-[170px] md:h-[170px] lg:w-60 lg:h-60 bg-slate-700 w-48 h-48"
										: "sm:inline-flex lg:w-32 lg:h-32 bg-amber-200 md:w-[120px] w-[100px] md:h-[120px] h-[100px]"
										}
										${index === historyData.length - 1 ? "" : ""} `}
									// On click for changing the year
									onClick={() =>
										emblaHorizontalApi?.scrollTo(index)
									}
								>
									<div
										className={`mx-auto font-extrabold ${index === centerSlideIndex
											? "text-orange-300 md:text-4xl lg:text-5xl text-3xl"
											: "sm:inline-flex text-slate-700 md:text-3xl lg:text-4xl"
											} ${fontSans.style}`}
									>
										{data.year}
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<img
					alt="fintech mascot"
					className=" md:block hidden md:w-[500px] scale-150 lg:w-[600px] rotate-[-58.03deg] rounded-[59px] z-10 "
					src="https://ik.imagekit.io/mbrrji2rk/fintechMascot.png?updatedAt=1718991881430"
				/>
			</div>

			<div className="grid md:grid-cols-3 justify-between md:h-96 mb-56 items-center w-full">
				<img
					alt=""
					className="md:w-[250px] hidden md:inline-block md:h-auto rotate-[-24.12deg]"
					src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
				/>
				<motion.div
					className="box"
					key={centerSlideIndex}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.9,
						ease: [0, 0.71, 0.2, 1.01],
					}}
				>
					<div className="md:col-span-1 col-span-full">
						<div
							className={`md:mb-[26px] mb-2 mx-auto text-pretty text-center text-slate-400 md:text-5xl text-3xl font-semibold ${fontSans.style}`}
						>
							{/* Develop and Grow */}
							{historyData[centerSlideIndex].title}
						</div>
						<div
							className={`mx-auto text-justify text-black text-lg font-medium ${fontSans.style} md:p-0 px-11`}
						>
							{historyData[centerSlideIndex].content}
						</div>
					</div>
				</motion.div>
				<img
					alt=""
					className="md:w-[250px] md:inline-block hidden md:h-auto transform -scale-x-100 rotate-[24.12deg] justify-self-end"
					src="https://ik.imagekit.io/mbrrji2rk/3164276f-e306-432f-ab36-b9a275439de7.jpg?updatedAt=1713241506012"
				/>
			</div>
		</>
	);
}
