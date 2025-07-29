import { Button } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const bottomImages = [
	{
		id: "1",
		src: "https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+Mặt+trước.svg",
		size: "hidden md:block w-full md:w-1/4",
		alt: "Placeholder image",
	},
	{
		id: "2",
		size: "md:block w-full md:w-1/2 ",
		src: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/IMG_0501.JPG",
		alt: "Placeholder image",
	},
	{
		id: "3",
		size: " md:block w-full md:w-1/4",
		src: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/2.png",
		alt: "Placeholder image",
	},
];

const HeroSection = () => {
	return (
		<div className="w-screen lg:py-12 flex-col justify-start items-center p-side-margin-mobile md:p-20 gap-6 md:gap-12 flex">
			<div className=" justify-start items-center gap-6 md:gap-[60px] flex flex-col md:flex-row ">
				<div className="w-full md:w-1/2 h-full">
					<h4 className = "font-bold">What is</h4>
					<br />
					<h4 className="text-[#DCB968] font-[1000] uppercase">
						FinTech Club{" "}?
					</h4>
					<br />
					<p className="leading-relaxed">
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,  
					</p>
					<br />
					<p className ="font-bold text-[#2C305F]">Our Core Activities</p>
					<div className="justify-start items-center gap-6 flex mt-8">
						<Button
							className="bg-ft-primary-blue text-ft-text-bright w-[7rem]"
							variant="solid"
						>
							<Link href="/about-us">Read More</Link>
						</Button>
						<Button
							className="bg-ft-primary-blue text-ft-text-bright w-[7rem]"
							variant="solid"
						>
							<Link href="/join-us">Join Us</Link>
						</Button>
					</div>
				</div>
				<div className="w-full md:w-1/2 rounded-xl relative ">
					<Image
						className="w-full object-cover rounded-3xl"
						src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/1.png"
						alt="Placeholder image"
						fetchPriority="high"
						loading="eager"
						width={1000}
						height={1000}
						priority={true}
					/>
				</div>
			</div>
			<div className="flex-col md:flex-row justify-end items-center gap-6 flex w-full">
				{bottomImages.map((img, _idx) => (
					<Image
						src={img.src}
						alt={img.alt}
						key={img.id}
						width={1000}
						height={200}
						fetchPriority="high"
						loading="eager"
						priority={true}
						className={`h-[300px] md:h-[200px] lg:h-[300px] relative rounded-xl 
							${img.size} object-cover`}
					/>
				))}
			</div>
		</div>
	);
};

export default HeroSection;
