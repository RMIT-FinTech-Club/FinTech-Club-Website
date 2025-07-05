import {
	Card,
	CardBody,
	CardHeader,
	Image,
} from "@nextui-org/react";
import React, { useState } from "react";
import "./styles.css";
import Link from "next/link";

type ManagementBoard = {
	managementBoardCards: ManagementBoardCard[];
}

type ManagementBoardCard = {
	image: string;
	name: string;
	position: string;
	linkedin: string;
}

const managementBoardCards: ManagementBoardCard[] = [
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/management_board/MinhNgoc-HoB-removebg-preview.png",
		name: "TRUONG MINH NGOC",
		position: "Head of Business",
		linkedin: "https://www.linkedin.com/in/truong-minh-ngoc/",
	},
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/management_board/BaoNgoc-HoHR-removebg-preview.png",
		name: "NGUYEN BAO NGOC",
		position: "Head of Human Resources",
		linkedin: "https://www.linkedin.com/in/helene-ngoc-nguyen/",
	},
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/management_board/Hoang+Anh_Head_Marketing.png",
		name: "NGUYEN TRAN HOANG ANH",
		position: "Head of Marketing",
		linkedin: "https://www.linkedin.com/in/hoang-anh-nguyen-tran-30b67a232/",
	},
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/management_board/DiemQui-HoT-removebg-preview.png",
		name: "HUYNH LE DIEM QUI",
		position: "Head of Technology",
		linkedin: "https://www.linkedin.com/in/qu%C3%AD-hu%E1%BB%B3nh-l%C3%AA-di%E1%BB%85m-a0473424a/",
	}
]


const ManagementBoard = () => {
	return (
		<section className=" relative bg-ft-primary-yellow-500 h-fit md:pt-32 md:pb-20 md:px-[64px] px-3">
			<main>
				<div className="grid grid-cols-1 max-lg:gap-8 gap-0 xl:grid-cols-4 lg:grid-cols-2 max-lg:mb-0">
					{managementBoardCards.map((card, index) => (
						<MANAGEMENT_BOARD_CARD
							key={index}
							{...card}
						/>
					))}
				</div>
				<div className=" grid gap-2 md:grid-cols-1 md:gap-2 text-center py-9">
					<h5 className=" text-ft-primary-blue-500">
						MEET OUR <strong>MANAGEMENT BOARD</strong>
					</h5>
					<p className="w-full md:w-4/6 mx-auto text-2xl">
						Meet the talented representatives behind the four
						pillars of RMIT Vietnam FinTech Club!
					</p>
					<div className="mx-auto w-[214px] h-[4px] bg-ft-primary-blue-500 mt-6" />
				</div>
			</main>
		</section>
	);
};

function MANAGEMENT_BOARD_CARD({
	image,
	name,
	position,
	linkedin
}: ManagementBoardCard) {
	return (
		<Link href={linkedin}>
			<Card
				className="py-4 -px-2 bg-transparent mb-20"
				radius="none"
				shadow="none"
			>
				<CardHeader className="py-2 px-5 flex flex-col justify-items-center">
					<div className="bg-white rounded-full relative overflow-visible">
						<Image
							alt="Card background"
							className="object-cover rounded-full bg-transparent management-card-image "
							src={image}
							width={1000}
							height={1000}
						/>
					</div>
				</CardHeader>
				<CardBody className="overflow-visible py-4 text-center">
					<h6 className="font-bold text-[22px] pb-2">
						{name}
					</h6>
					<p className="text-lg font-semibold">
						{position}
					</p>
				</CardBody>
			</Card>
		</Link>
	)
}
export default ManagementBoard;
