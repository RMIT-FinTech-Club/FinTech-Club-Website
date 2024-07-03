import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const ProjectPage = () => {
	return (
		<>
			<div className="w-screen mb-16 mx-auto">
				{/* <h1 className="text-center mt-9 text-[#DCB968]">Projects</h1>
				<div className="w-48 h-[3px] mx-auto bg-black mt-14" />
				<div className="mx-auto md:px-56 mt-4 w-full px-16">
					<p className="text-balance text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Odit officia tenetur provident corrupti repellendus unde
						corporis reprehenderit, rem ratione, ab odio omnis
						vitae, nostrum saepe! Placeat quia veniam maiores
						aliquam.
					</p>
				</div> */}

				<div className="mx-auto w-full md:px-[52px] max-md:mt-4 mt-20 bg-white bg-opacity-0 flex-col grid grid-cols-8 justify-center items-center gap-4">
					<div className="md:inline-flex sm:hidden md:w-full md:h-1 bg-ft-primary-blue flex items-center col-span-2">
						<div className="md:inline-block sm:hidden md:w-6 md:h-6 bg-ft-primary-blue rounded-full" />
					</div>

					<div className="flex-col justify-start items-center md:gap-1 flex md:col-span-4 col-span-8">
						<span
							className={`text-ft-primary-yellow md:text-6xl text-4xl font-bold md:font-[900] sm:font-extrabold md:tracking-wider md:leading-10 md:mt-0 mt-4 md:mb-0 mb-4 sm:mb-4 sm:mt-0`}
						>
							OUR PROJECTS
						</span>
					</div>

					<div className="md:inline-flex sm:hidden md:w-full md:h-1 bg-ft-primary-blue flex flex-row-reverse items-center justify-self-end col-span-2">
						<div className="md:inline-block sm:hidden md:w-6 md:h-6 bg-ft-primary-blue rounded-full" />
					</div>
				</div>

				<div className="grid md:grid-cols-1 md:grid-flow-row grid-flow-row-dense max-md:mt-8 mt-28 md:gap-y-32 gap-y-14 md:gap-x-11 md:px-36 px-11 w-full">
					{/* <div className="grid md:grid-cols-2 md:gap-x-11">
						<img
							className="mx-auto object-cover max-md:w-full w-4/5 rounded-2xl"
							src="https://placehold.co/1000x900"
							alt=""
							style={{ aspectRatio: "1/1" }}
						/>
						<div className="md:mt-0 mt-4 md:order-last flex flex-col justify-center">
							<h2 className="text-[#2C305F] max-md:text-center xl:text-[3.5rem] lg:text-[2.25rem] lg:font-extrabold text-[2rem]">
								Academic Projects
							</h2>
							<p className="lg:mt-6 md:mt-4 mt-2 text-balance text-justify xl:text-[1.3rem] lg:text-[1rem] md:text-[0.75rem]">
								Academic projects are the backbone of our
								organization. These include research, framework
								creation, or peer-to-peer discussions. Despite
								their small-scale nature, they contribute to our
								organization’s enhanced understanding of the
								interplay between Finance, Business, Tech, and
								Digital Disruption.
							</p>
							<div className="flex flex-col items-center mt-6">
								<Button
									type="button"
									className="lg:w-30 md:w-28 text-white font-bold rounded-full bg-[#2C305F] lg:text-[1.25rem] md:text-[1rem]"
								>
									<a
										href={"/projects/academic"}
										className="my-4"
									>
										Go to
									</a>
								</Button>
							</div>
						</div>
					</div> */}

					<div className="grid md:grid-cols-2 md:gap-x-11">
						<img
							className="mx-auto object-cover max-md:w-full w-4/5 rounded-2xl"
							src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Projects/Technical/technical-project.png"
							alt="Technical Projects"
							style={{ aspectRatio: "1/1" }}
						/>
						<div className="md:mt-0 mt-4 flex flex-col justify-center">
							<h2 className="text-[#2C305F] max-md:text-center xl:text-[3.5rem] lg:text-[2.25rem] md:font-extrabold text-[2rem]">
								Technical Projects
							</h2>
							<p className="lg:mt-6 md:mt-4 mt-2 text-balance text-justify xl:text-[1.3rem] lg:text-[1rem] md:text-[0.75rem]">
								Aimed at enhancing and refining members’
								technical expertise, including coding, website &
								app development, analysis, data visualization,
								design-thinking, etc. These projects provide
								members with a medium of practice and
								creativity, and an opportunity to implement
								class-learnt theories to real-life initiatives.
							</p>
							<div className="flex flex-col items-center mt-6">
								<Button
									type="button"
									className="lg:w-30 md:w-28 text-white font-bold rounded-full bg-[#2C305F] lg:text-[1.25rem] md:text-[1rem]"
								>
									<a
										href={"/projects/technical"}
										className="my-4"
									>
										Go to
									</a>
								</Button>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 md:gap-x-11">
						<img
							className="mx-auto object-cover max-md:w-full w-4/5 md:order-last rounded-2xl"
							src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Projects/Media/media-projects.png"
							alt="Media Projects"
						/>
						<div className="md:mt-0 mt-4 flex flex-col justify-center">
							<h2 className="text-[#2C305F] text-right max-md:text-center xl:text-[3.5rem] lg:text-[2.25rem] md:font-extrabold text-[2rem]">
								Media Projects
							</h2>
							<p className="lg:mt-6 md:mt-4 mt-2 text-balance text-justify xl:text-[1.3rem] lg:text-[1rem] md:text-[0.75rem]">
								Aimed at enhancing our members’ marketing skills
								and bolstering FinTech Club’s image, media
								projects facilitate the creation of informative,
								educational and trendy content that delights our
								club FanPage’s 5000+ people audience. These
								could include short-form reels, medium and
								long-form videos, infographics, magazines, and
								podcasts.
							</p>
							<div className="flex flex-col items-center mt-6">
								<Button
									type="button"
									className="lg:w-30 md:w-28 text-white font-bold rounded-full bg-[#2C305F] lg:text-[1.25rem] md:text-[1rem]"
								>
									<a
										href={"/projects/media"}
										className="my-4"
									>
										Go to
									</a>
								</Button>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 md:gap-x-11">
						<img
							className="mx-auto object-cover max-md:w-full w-4/5 rounded-2xl"
							src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/Projects/Technical/event-project.png"
							alt="Event Projects"
							style={{ aspectRatio: "1/1" }}
						/>
						<div className="md:mt-0 mt-4 flex flex-col justify-center">
							<h2 className="text-[#2C305F] max-md:text-center xl:text-[3.5rem] lg:text-[2.25rem] md:font-extrabold text-[2rem]">
								Event Projects
							</h2>
							<p className="lg:mt-6 md:mt-4 mt-2 text-balance text-justify xl:text-[1.3rem] lg:text-[1rem] md:text-[0.75rem]">
								Events are larger-scale/larger-impact projects
								of FinTech Club. These include open academic
								forums, public workshops, a national
								competition, etc. Events spread the image and
								ideas of FinTech Club, whilst engaging the
								community to this exciting field!
							</p>
							<div className="flex flex-col items-center mt-6">
								<Button
									type="button"
									className="lg:w-30 md:w-28 text-white font-bold rounded-full bg-[#2C305F] lg:text-[1.25rem] md:text-[1rem]"
								>
									<a
										href={"/projects/event"}
										className="my-4"
									>
										Go to
									</a>
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
