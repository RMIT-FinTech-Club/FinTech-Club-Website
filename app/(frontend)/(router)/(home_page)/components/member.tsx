"use client";
import React, { useState } from "react";
import {Image} from "@heroui/react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/skeleton";
import Link from "next/link";

const hallOfFame = [
	{
		name: "Phan Nhat Minh",
		imageURL:
			"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/hall-of-fame/minh-phan-mvp.jpeg",
		title: "Club MVP",
		linkedin: "https://www.linkedin.com/in/minhpnh/",
	},
	{
		name: "Nguyen Thi Thanh Ngoc",
		imageURL:
			"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/hall-of-fame/thanh-ngoc-hof.jpeg",
		title: "1st Runner-up HKU/HSBC Competition",
		linkedin: "https://www.linkedin.com/in/ngocnguyen74/",
	},
	{
		name: "Hoang Thai Phuc",
		imageURL:
			"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/hall-of-fame/thai-phuc-mvp.jpeg",
		title: "Technology Department MVP",
		linkedin: "https://www.linkedin.com/in/htphuc/",
	},
	{
		name: "Dang Tran Tien",
		imageURL:
			"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/hall-of-fame/tran-tien-mvp.jpeg",
		title: "Business Department MVP",
		linkedin: "https://www.linkedin.com/in/tiendangtran/",
	},
	{
		name: "Ngo Minh Quan",
		imageURL:
			"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/hall-of-fame/minh-quan-mvp.jpeg",
		title: "HR Department MVP",
		linkedin: "https://www.linkedin.com/in/quan-ngo-840490301/",
	},
	{
		name: "Nguyen Doan Nghia",
		imageURL:
			"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Homepage/hall-of-fame/Nguyen+Doan+Nghia.jpeg",
		title: "Marketing Department MVP",
		linkedin:
			"https://www.linkedin.com/in/nghia-nguyen-78631218b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
	},
];

const Member = () => {
	const [loading, setLoading] = useState(false);
	const imageUrl =
		"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/HallOfFame-Background.svg";
	return (
		<section
			className=" relative bg-cover bg-center h-fit pb-10 w-screen px-side-margin-mobile md:px-side-margin md:pb-10"
			style={{ backgroundImage: `url(${imageUrl})` }}
		>
			{/* <div className="absolute right-10 bottom-0 z-0 max-w-44 md:max-w-96">
				<Image
					src="HallOfFame-FrontMasCot.svg"
					radius="none"
					id="HallOfFame-MasCot"
					className="mascot"
				/>
			</div> */}
			<div className="absolute right-0 md:right-12 top-10 md:top-4 z-10 max-w-24 md:max-w-96">
				<Image
					src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/HallOfFame-ClubLogo.svg"
					radius="none"
				/>
			</div>
			<header className="flex z-10 mt-0 -mx-side-margin-mobile md:mt-10 md:-mx-side-margin">
				<svg width="10%" height="100%" id="left-bar" aria-label="Line">
					<title> Line bar </title>
					<line
						x1="0%"
						y1="80"
						x2="100%"
						y2="80"
						stroke="#FFFFFF"
						strokeWidth="110"
						id="white-line"
					/>
					<line
						x1="0"
						y1="80"
						x2="100%"
						y2="80"
						stroke="#DCB968"
						strokeWidth="90"
						id="yellow-line"
					/>
				</svg>
				<div className=" basis-2/12 w-full mx-3 md:mx-5 text-ft-text-bright content-center">
					<h1>HALL</h1>
					<div className="flex flex-row">
						<h5 className="mt-2 md:-mt-2">OF</h5>
						<h1 className="mt-3 md:-mt-4">FAME</h1>
					</div>
				</div>
				<svg className=" basis-9/12" height="80%" aria-label="Line">
					<title> Line bar </title>
					<line
						x1="100%"
						y1="80"
						x2="0%"
						y2="80"
						stroke="#FFFFFF"
						strokeWidth="110"
						id="white-line"
					/>
					<line
						x1="100%"
						y1="80"
						x2="0%"
						y2="80"
						stroke="#DCB968"
						strokeWidth="90"
						id="yellow-line"
					/>
				</svg>
			</header>
			<main className=" grid grid-cols-2 gap-8 mt-0  md:grid-cols-3 md:gap-10 md:my-14">
				{/* 
                    WARNING: length of 4 is hardcoded for placeholder data
                    TODO: replace the placeholder with actual data 
                    */}
				{hallOfFame.map((member) => (
					<Link href={member.linkedin}>
						<Card className="card h-full relative" isFooterBlurred>
							<Skeleton isLoaded={loading}>
								<Image
									removeWrapper
									alt="Card background"
									className="z-0 w-full h-full object-cover aspect-[4/3] relative"
									src={member.imageURL}
									radius="none"
									isZoomed
									onLoad={() => setLoading(true)}
								/>
								<div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent absolute top-0" />
							</Skeleton>
							<CardFooter className="card-content flex flex-col text-left -bottom-20 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large w-[calc(100%_-_8px)] shadow-small ml-1 z-10 transition-all ease-out delay-150">
								<p className=" text-base text-ft-primary-yellow-500">
									{member.name}
								</p>
								<p className="text-tiny text-ft-text-bright">
									{member.title}
								</p>
							</CardFooter>
						</Card>
					</Link>
				))}
			</main>
		</section>
	);
};

export default Member;
