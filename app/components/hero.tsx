import { Button, Image } from "@nextui-org/react";
import React from "react";
import Link from "next/link";

const bottomImages = [
	{
		id: "1",
		src: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/z5587551509111_944f7e7fe24867670f1674c8636b736f.jpg",
		size: "w-full md:w-1/4",
		alt: "Placeholder image",
	},
	{
		id: "2",
		size: "hidden md:block w-full md:w-1/2",
		src: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/IMG_0501.JPG",
		alt: "Placeholder image",
	},
	{
		id: "3",
		size: "hidden md:block w-full md:w-1/4",
		src: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/2.png",
		alt: "Placeholder image",
	},
];

const HeroSection = () => {
	return (
		<div className="w-screen lg:py-12 flex-col justify-start items-center p-side-margin-mobile md:p-20 gap-6 md:gap-12 flex">
			<div className=" justify-start items-center gap-6 md:gap-[60px] flex flex-col md:flex-row ">
				<div className="w-full md:w-1/2 h-full">
					<h5>What is</h5>
					<br />
					<h4 className="text-[#000A64] font-[1000] uppercase">
						<span className="text-[#EBB040]">Fin</span>Tech Club{" "}
						<span className="text-black">?</span>
					</h4>
					<br />
					<p className="line-clamp-6 md:line-clamp-2 lg:line-clamp-3">
						We’re the first ever student-led Financial Technology
						initiative in Vietnam. Founded in 2020, our original
						mission was to create an interdisciplinary learning hub
						between Business and Technology major students, to
						advance each other’s expertise and help understand the
						interconnected nature of Technological advancement and
						real Business issues.
					</p>
					<div className="justify-start items-center gap-6 flex mt-8">
						<Button
							className="bg-ft-primary-blue text-ft-text-bright"
							variant="solid"
						>
							<Link href="/about-us">Read More</Link>
						</Button>
						<Button
							className="bg-ft-primary-blue text-ft-text-bright"
							variant="solid"
						>
							<Link href="/join-us">Join Us</Link>
						</Button>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-[300px] md:h-[200px] lg:h-[300px] rounded-xl relative ">
					<Image
						className="w-full h-full object-cover"
						src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/1.png"
						alt="Placeholder image"
						loading="lazy"
					/>
				</div>
			</div>
			<div className="flex-col md:flex-row justify-end items-center gap-12 flex w-full">
				{bottomImages.map((img, _idx) => (
					<div
						key={img.id}
						className={`h-[300px] md:h-[200px] lg:h-[300px] relative rounded-xl 
							${img.size}`}
						style={{
							backgroundImage: `url(${img.src})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroSection;
