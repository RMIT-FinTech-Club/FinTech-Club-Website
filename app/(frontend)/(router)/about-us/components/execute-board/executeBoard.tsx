import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";
import "./styles.css";
import Link from "next/link";

type ExecutiveBoardCardProps = {
	image: string;
	name: string;
	position: string;
	linkedin: string;
};

const executiveBoardData = [
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/executive_board/EVP.png",
		name: "PHAN NHAT MINH",
		position: "External Vice President",
		linkedin: "https://www.linkedin.com/in/minhpnh/",
	},
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/executive_board/DungNguyen-President.svg",
		name: "NGUYEN MANH DUNG",
		position: "President",
		linkedin:
			"https://www.linkedin.com/in/nguy%E1%BB%85n-m%E1%BA%A1nh-d%C5%A9ng-598173262/",
	},
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/executive_board/IVP-removebg-preview.png",
		name: "HOANG NGUYEN NHAT MINH",
		position: "Internal Vice President",
		linkedin: "https://www.linkedin.com/in/minh-hoang-9229a62a4/",
	},
	{
		image: "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/executive_board/CFO-removebg-preview.png",
		name: "DANG TRAN TIEN",
		position: "Chief of Finance Officer",
		linkedin: "https://www.linkedin.com/in/tiendangtran/",
	},
];

const ExecuteBoard = () => {
	return (
		<section className="relative bg-ft-primary-yellow-500 bg-cover bg-center pt-6">
			<main className="mx-side-margin-mobile mt-0 md:mx-[64px]">
				<div className="grid grid-cols-1 gap-8 xl:grid-cols-4 md:grid-cols-2 my-16 md:px-0 px-10">
					{executiveBoardData.map((item: ExecutiveBoardCardProps) => (
						<ExecutiveBoardCard {...item} />
					))}
				</div>
				<div className="grid gap-2 md:grid-cols-1 md:gap-2 text-center pb-9">
					<h5 className="text-ft-primary-blue-500">
						MEET OUR <strong>EXECUTIVE BOARD</strong>
					</h5>
					<p className="w-full md:w-4/6 mx-auto text-2xl">
						Meet the fierce, brilliant, and passionate minds behind
						the FinTech Club machine!
					</p>
					<div className="mx-auto w-[214px] h-[4px] bg-ft-primary-blue-500 mt-6" />
				</div>
			</main>
		</section>
	);
};

function ExecutiveBoardCard({
	image,
	name,
	position,
	linkedin,
}: ExecutiveBoardCardProps) {
	return (
		<Link href={linkedin}>
			<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible mb-20">
				<CardHeader className="py-2 px-5 flex flex-col justify-items-center ">
					<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible h-full">
						<Image
							alt="Card background"
							className="object-cover rounded-2xl bg-transparent text-center team-card-image"
							src={image}
							width={1000}
							height={1000}
						/>
					</div>
				</CardHeader>
				<CardBody className="overflow-visible pt-4 text-center">
					<h6 className="font-bold md:text-xl text-lg">{name}</h6>
					<p className="text-lg font-semibold">{position}</p>
				</CardBody>
			</Card>
		</Link>
	);
}

export default ExecuteBoard;
