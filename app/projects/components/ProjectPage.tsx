import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const ProjectPage = () => {
	return (
		<>
			<div className="w-screen mb-16 mx-auto">
				<h1 className="text-center mt-9 text-[#DCB968]">Projects</h1>
				<div className="w-48 h-[3px] mx-auto bg-black mt-14" />
				<div className="mx-auto md:px-56 mt-4 w-full px-16">
					<p className="text-balance text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odit officia tenetur provident corrupti repellendus unde
						corporis reprehenderit, rem ratione, ab odio omnis
						vitae, nostrum saepe! Placeat quia veniam maiores
						aliquam.
					</p>
				</div>

				<div className="grid md:grid-cols-1 md:grid-flow-row grid-flow-row-dense mt-14 md:gap-y-32 gap-y-14 md:gap-x-11 md:px-36 px-11 w-full">
					<div className="grid md:grid-cols-2 md:gap-x-11">
						<img
							className="mx-auto object-cover w-full rounded-2xl"
							src="https://placehold.co/1000x900"
							alt=""
						/>
						<div className="md:mt-0 mt-4 md:order-last">
							<h2 className="text-[#2C305F]">Academic Projects</h2>
							<p className="md:mt-9 mt-4 text-balance text-justify">
								Academic projects are the backbone of our organization. These include research, framework creation, or peer-to-peer discussions. Despite their small-scale nature, they contribute to our organization’s enhanced understanding of the interplay between Finance, Business, Tech, and Digital Disruption.
							</p>
							<div className="flex flex-col items-center mt-6">
								<Button
									type="button"
									className="w-28 text-white font-bold rounded-full bg-[#2C305F]"
								>
									<a href={"/projects/academic"}>Go to</a>
								</Button>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 md:gap-x-11">
						<img
							className="mx-auto object-cover w-full md:order-last rounded-2xl"
							src="https://placehold.co/1000x900"
							alt=""
						/>
						<div className="md:mt-0 mt-4">
							<h2 className="text-[#2C305F] text-right">
								Technical Projects
							</h2>
							<p className="md:mt-9 mt-4 text-balance text-justify">
								Aimed at enhancing and refining members’ technical expertise, including coding, website & app development, analysis, data visualization, design-thinking, etc. These projects provide members with a medium of practice and creativity, and an opportunity to implement class-learnt theories to real-life initiatives.
							</p>
							<div className="flex flex-col items-center mt-6">
								<Button
									type="button"
									className="w-28 text-white font-bold rounded-full bg-[#2C305F]"
								>
									<a href={"/projects/technical"}>Go to</a>
								</Button>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 md:gap-x-11">
						<img
							className="mx-auto object-cover w-full rounded-2xl"
							src="https://placehold.co/1000x900"
							alt=""
						/>
						<div className="md:mt-0 mt-4 md:order-last">
							<h2 className="text-[#2C305F]">Media Projects</h2>
							<p className="md:mt-9 mt-4 text-balance text-justify">
								Aimed at enhancing our members’ marketing skills and bolstering FinTech Club’s image, media projects facilitate the creation of informative, educational and trendy content that delights our club FanPage’s 5000+ people audience. These could include short-form reels, medium and long-form videos, infographics, magazines, and podcasts.
							</p>
							<div className="flex flex-col items-center mt-6">
								<Button
									type="button"
									className="w-28 text-white font-bold rounded-full bg-[#2C305F]"
								>
									<Link href="/academic">Go to</Link>
								</Button>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 md:gap-x-11">
						<img
							className="mx-auto object-cover w-full md:order-last rounded-2xl"
							src="https://placehold.co/1000x900"
							alt=""
						/>
						<div className="md:mt-0 mt-4">
							<h2 className="text-[#2C305F] text-right">
								Event Projects
							</h2>
							<p className="md:mt-9 mt-4 text-balance text-justify">
								Events are larger-scale/larger-impact projects of FinTech Club. These include open academic forums, public workshops, a national competition, etc. Events spread the image and ideas of FinTech Club, whilst engaging the community to this exciting field!

							</p>
							<div className="flex flex-col items-center mt-6">
								<Button
									type="button"
									className="w-28 text-white font-bold rounded-full bg-[#2C305F]"
								>
									<a href={"/projects/event"}>Go to</a>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectPage;
