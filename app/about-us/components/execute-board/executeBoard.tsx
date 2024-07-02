'use client'
import {
	Card,
	CardBody,
	CardHeader,
	Image,
} from "@nextui-org/react";
import React, { useState } from "react";
import "./styles.css";
import { Reorder, useMotionValue } from "framer-motion";

type ExecutiveBoardCardProps = {
	image: string;
	name: string;
	position: string;
}

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
	}
]

const ExecuteBoard = () => {
	const [items, setItems] = useState<ExecutiveBoardCardProps[]>(executiveBoardData)
	const y = useMotionValue(0);
	const boxShadow = useRaisedShadow(y);


	return (
		<section className="relative bg-ft-primary-yellow-500 bg-cover bg-center pt-6">
			<main className="mx-side-margin-mobile mt-0 md:mx-side-margin">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4 my-16 md:px-0 px-10">
					<Reorder.Group axis="x" values={items} onReorder={setItems}>
						{items.map((item: ExecutiveBoardCardProps) => (
							<Reorder.Item className="mt-10" key={item.name} value={item.name} id={item.name} style={{ boxShadow, y }}>
								<ExecutiveBoardCard  {...item} />
							</Reorder.Item>
						))}
					</Reorder.Group>
					{/* <Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
						<CardHeader className="py-2 px-5 flex flex-col justify-items-center ">
							<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible h-full">
								<Image
									alt="Card background"
									className="object-cover rounded-2xl bg-transparent text-center team-card-image"
									src={"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/MinhPhan-EVP.png"}
								/>
							</div>
						</CardHeader>
						<CardBody className="overflow-visible pt-4 text-center">
							<h6 className="font-bold md:text-3xl text-2xl text-ft-primary-blue-500">
								PHAN NHAT MINH
							</h6>
							<h6 className="text-lg text-ft-primary-blue-500">
								External Vice President
							</h6>
						</CardBody>
					</Card>
					<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
						<CardHeader className="py-2 px-5 flex flex-col justify-items-center ">
							<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible h-full">
								<Image
									alt="Card background"
									className="object-cover rounded-2xl bg-transparent text-center team-card-image"
									src="ExecuteBoard/President.svg"
								/>
							</div>
						</CardHeader>
						<CardBody className="overflow-visible pt-4 text-center">
							<h6 className="font-bold md:text-3xl text-2xl text-ft-primary-blue-500">
								NGUYEN MANH DUNG
							</h6>
							<h6 className="text-lg text-ft-primary-blue-500">
								President
							</h6>
						</CardBody>
					</Card>
					<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
						<CardHeader className="py-2 px-5 flex flex-col justify-items-center ">
							<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible h-full">
								<Image
									alt="Card background"
									className="object-cover rounded-2xl bg-transparent text-center team-card-image"
									src="ExecuteBoard/VicePresident.svg"
								/>
							</div>
						</CardHeader>
						<CardBody className="overflow-visible pt-4 text-center">
							<h6 className="font-bold md:text-3xl text-2xl text-ft-primary-blue-500">
								HOANG NGUYEN NHAT MINH
							</h6>
							<h6 className="text-lg text-ft-primary-blue-500">
								Internal Vice President
							</h6>
						</CardBody>
					</Card>
					<Card className="py-4 px-2 rounded-3xl bg-gray-100 relative overflow-visible">
						<CardHeader className="py-2 px-5 flex-col items-center">
							<div className="bg-ft-primary-yellow-500 rounded-2xl relative overflow-visible">
								<Image
									alt="Card background"
									className="object-cover rounded-2xl bg-transparent text-center team-card-image scale-110"
									src={"https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Tien+Dang.png"}
								/>
							</div>
						</CardHeader>
						<CardBody className="overflow-visible pt-4 text-center">
							<h6 className="font-bold md:text-3xl text-2xl text-ft-primary-blue-500">
								DANG TRAN TIEN
							</h6>
							<h6 className="text-lg text-ft-primary-blue-500">
								Chief of Finance Officer
							</h6>
						</CardBody>
					</Card> */}
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

function ExecutiveBoardCard({ image, name, position }: ExecutiveBoardCardProps) {
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
	)
}

import { animate, MotionValue } from "framer-motion";
import { useEffect } from "react";

const inactiveShadow = "0px 0px 0px rgba(0,0,0,0.8)";

function useRaisedShadow(value: MotionValue<number>) {
  const boxShadow = useMotionValue(inactiveShadow);

  useEffect(() => {
    let isActive = false;
    value.onChange((latest) => {
      const wasActive = isActive;
      if (latest !== 0) {
        isActive = true;
        if (isActive !== wasActive) {
          animate(boxShadow, "5px 5px 10px rgba(0,0,0,0.3)");
        }
      } else {
        isActive = false;
        if (isActive !== wasActive) {
          animate(boxShadow, inactiveShadow);
        }
      }
    });
  }, [value, boxShadow]);

  return boxShadow;
}

export default ExecuteBoard;