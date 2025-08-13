import type React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/components/button";

interface ProjectCardProps {
	index: number;
	card: ProjectCardData;
}

interface ProjectCardData {
	tags: string[];
	title: {
		normal: string;
		highlight: string;
	};
	content: string;
	images: string[];
	ImgForm: React.ComponentType<any>;
	DecorForm?: () => JSX.Element;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ card, index }) => {
	const { tags, title, content, images, ImgForm, DecorForm } = card;
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

	const flexCenter = "flex justify-center";

	function createTags() {
		return (
			<div className="flex flex-wrap md:justify-start justify-center">
				{tags.map((tag, i) => {
					let tagIconURL = "";
					switch (tag) {
						case "Web Development":
							tagIconURL = "/projectPage/tag_1.png";
							break;
						case "Machine Learning":
							tagIconURL = "/projectPage/tag_2.png";
							break;
						case "UI/UX Design":
							tagIconURL = "/projectPage/tag_3.png";
							break;
						default:
							console.error("Undefined tag");
					}

					return (
						<div
							className={`flex md:py-[0.2vw] md:px-[1vw] md:mr-[1vw] py-[0.4vw] px-[3vw] mr-[2.5vw] ${index % 2 ? "bg-white" : "bg-lightPurple"} rounded-[5px]`}
							key={i}
						>
							<div
								className="relative md:top-[0.3vw] md:h-[1vw] top-[0.6vw] h-[3vw] bg-center bg-no-repeat bg-contain aspect-square"
								style={{
									backgroundImage: `url('${tagIconURL}')`,
								}}
							></div>
							<div className="md:text-[1vw] md:ml-[0.5vw] text-[3vw] ml-[1vw] text-deepBlue">
								{tag}
							</div>
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<motion.section
			ref={ref}
			className={`flex ${index % 2 ? "bg-lightPurple" : "bg-white"} overflow-x-hidden relative px-[5vw] md:py-[5vw] py-[10vw] flex-col ${index % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}
			initial={{ opacity: 0, transform: "translateY(10%)" }}
			animate={isInView ? { opacity: 1, transform: "translateY(0)" } : {}}
			transition={{ duration: 1, ease: "easeInOut" }}
		>
			<div className={`${flexCenter} items-center w-full md:w-1/2 z-10`}>
				<ImgForm images={images} />
				{DecorForm && <DecorForm />}
			</div>
			<div
				className={`${flexCenter} md:items-start items-center flex-col w-full md:w-1/2 z-10`}
			>
				<div>{createTags()}</div>
				<div className="my-[2vh] text-deepBlue text-[7vw] leading-[9vw] tracking-[0.2vw] md:text-[3vw] md:leading-[3.6vw] md:tracking-[0.1vw] font-bold uppercase">
					{title.normal}{" "}
					<span className="text-gold">{title.highlight}</span>
				</div>
				<div className="my-[2vh] text-gray text-[3vw] leading-[4vw] md:text-[1vw] md:leading-[1.4vw] md:text-left text-center">
					{content}
				</div>
				<Button classes="bg-gold my-[2vh]">Read More</Button>
			</div>
		</motion.section>
	);
};

export default ProjectCard;
