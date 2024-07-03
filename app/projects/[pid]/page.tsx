import { Avatar, Button, Card, CardBody, Divider } from "@nextui-org/react";
import { IconLink } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const ProjectDetail = () => {
	return (
		<section className="md:mt-16 flex flex-col justify-start p-4 md:p-10 bg-gray-100 min-h-screen">
			<header className="text-center md:text-start mb-6">
				<h1 className="text-5xl font-bold" style={{ color: "#2C305F" }}>
					Global Trading
				</h1>
			</header>
			<main className="md:mt-6">
				<div className="grid grid-cols-12 md:my-8 my-3 gap-6 grid-flow-row">
					<div className="my-auto md:col-span-1 col-span-3">
						<img
							src="https://i.pravatar.cc/150?u=a04258114e29026302d"
							alt="Author Thumbnail"
							className="w-20 h-20 rounded-full"
						/>
					</div>
					<div className="place-self-start justify-self-start md:col-span-7 col-span-9 my-auto">
						<h6 className="font-bold text-lg" style={{ color: "#2C305F" }}>
							Lorem ipsum dolor sit amet
						</h6>
						<h6 className="text-gray-600">Lorem ipsum dolor sit amet</h6>
					</div>
					<div className="md:justify-self-end md:col-span-4 col-span-12 my-auto md:w-fit w-full">
						<Link
							href="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/UML+class+-+application+architecture.pdf"
							target="_blank"
							rel="noreferrer"
						>
							<Button
								auto
								icon={<IconLink stroke={2} />}
								className="py-4 items-center justify-center flex-grow my-auto px-6 rounded-full drop-shadow-lg text-xl text-white duration-300"
								style={{ backgroundColor: "#DCB968", hover: { backgroundColor: "#b89e52" }, active: { backgroundColor: "#a2864a" } }}
							>
								Full access
							</Button>
						</Link>
					</div>
				</div>
				<Card className="max-w-full my-4">
					<CardBody>
						<p style={{ color: "#2C305F" }}>
							Make beautiful websites regardless of your design experience.
						</p>
					</CardBody>
				</Card>
				<p>
					The FinTech Forum 2024 is set to be the most dynamic student-driven FinTech event, with a mission to educate and immerse students into the various aspects of the FinTech Universe! As we begin to officially launch the event, we would like to acknowledge the contributions made by our esteemed Sponsors that have made our event possible.
				</p>
				<Divider className="my-6" style={{ backgroundColor: "#2C305F" }} />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h5 className="text-xl font-semibold" style={{ color: "#2C305F" }}>Lorem ipsum dolor sit amet</h5>
					</div>
					<div className="grid grid-cols-2 grid-rows-2 text-center gap-6">
						{["https://i.pravatar.cc/150?img=1", "https://i.pravatar.cc/150?img=2", "https://i.pravatar.cc/150?img=3", "https://i.pravatar.cc/150?img=4"].map((src, index) => (
							<div key={index} className="flex flex-row items-center">
								<Avatar isBordered radius="sm" src={src} />
							</div>
						))}
					</div>
				</div>
			</main>
		</section>
	);
};

export default ProjectDetail;