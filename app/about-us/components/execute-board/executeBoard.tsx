"use client";
import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import "./styles.css";

type ExecutiveBoardCardProps = {
	image: string;
	name: string;
	position: string;
};

const executiveBoardData = [
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/MinhPhan-EVP.png",
		name: "PHAN NHAT MINH",
		position: "External Vice President",
	},
	{
		image: "ExecuteBoard/President.svg",
		name: "NGUYEN MANH DUNG",
		position: "President",
	},
	{
		image: "ExecuteBoard/VicePresident.svg",
		name: "HOANG NGUYEN NHAT MINH",
		position: "Internal Vice President",
	},
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Tien+Dang.png",
		name: "DANG TRAN TIEN",
		position: "Chief of Finance Officer",
	},
];

const ExecuteBoard = () => {
	return (
		<section className="relative bg-ft-primary-yellow-500 bg-cover bg-center pt-6">
			<main className="mx-side-margin-mobile mt-0 md:mx-side-margin">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4 my-16 md:px-0 px-10">
					{executiveBoardData.map((item: ExecutiveBoardCardProps) => (
						<ExecutiveBoardCard {...item} />
					))}
				</div>
				<div className="grid gap-2 md:grid-cols-1 md:gap-2 text-center pb-9">
					<h4 className="text-ft-primary-blue-500">
						MEET OUR <strong>EXECUTIVE BOARD</strong>
					</h4>
					<p className="text-ft-primary-blue-500 w-full md:w-4/6 mx-auto">
						Cras eu dignissim mauris. Duis imperdiet erat sapien,
						molestie aliquet arcu tincidunt id. Mauris sit amet quam
						mi. Duis porttitor lectus quis turpis malesuada, eu
						luctus elit dignissim.
					</p>
					<div className="mx-auto w-[214px] h-[2px] bg-black mt-6" />
				</div>
			</main>
		</section>
	);
};

function ExecutiveBoardCard({
	image,
	name,
	position,
}: ExecutiveBoardCardProps) {
	return (
		<>
			<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
				<CardHeader className="py-2 px-5 flex flex-col justify-items-center ">
					<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible h-full">
						<Image
							alt="Card background"
							className="object-cover rounded-2xl bg-transparent text-center team-card-image"
							src={image}
						/>
					</div>
				</CardHeader>
				<CardBody className="overflow-visible pt-4 text-center">
					<h6 className="font-bold md:text-3xl text-2xl text-ft-primary-blue-500">
						{name}
					</h6>
					<h6 className="text-lg text-ft-primary-blue-500">
						{position}
					</h6>
				</CardBody>
			</Card>
		</>
	);
}

export default ExecuteBoard;
