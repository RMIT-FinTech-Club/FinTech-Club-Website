import type React from "react";
import Link from "next/link";
import Image from "next/image";

const TechnicalTag: React.FC<{ tagName: string }> = ({ tagName }) => {
	return (
		<div className="m-1 text-[0.75rem] p-1 rounded-md text-black font-bold border-ft-primary-blue border-[2px]">
			{tagName}
		</div>
	);
};

const TechnicalProjectCard: React.FC<{
	projectId: string;
	projectTitle: string;
	projectTags: string[];
	projectDescription: string;
	projectImg: string;
	isImageLast: boolean;
}> = ({
	projectId,
	projectTitle,
	projectDescription,
	projectTags,
	projectImg,
	isImageLast
}) => {
		return (
			<div className="grid md:grid-cols-12 justify-between box-border p-2 rounded-xl md:gap-x-12 gap-7">
				<div className={`rounded-xl md:col-span-4 ${isImageLast ? "md:order-last" : ""}`}>
					<Image
						className="rounded-xl aspect-square object-cover"
						src={projectImg}
						alt="project image"
						width={1000}
						height={1000}
					/>
				</div>
				<div className="flex flex-col lg:w-[40vw] md:w-[60vw] sm:w-full min-w-[320px] relative md:gap-2 gap-4 md:col-span-8">
					<div className="flex gap-2 max-sm:justify-center">
						{projectTags.map((tag, id) => (
							<TechnicalTag key={id} tagName={tag} />
						))}
					</div>
					<div className=" text-6xl text-ft-primary-yellow font-bold max-sm:text-center">
						{projectTitle}
					</div>
					<p className="w-full text-justify">{projectDescription}</p>
					<div className="w-full flex justify-end">
						<button
							className="text-white text-[1rem] font-semibold bg-ft-primary-blue hover:bg-ft-primary-blue-600 w-40 max-sm:w-full p-3 rounded-lg"
							type="button"
						>
							<span className="block w-full h-full hover:scale-110">
								<Link href={`/projects/technical/${projectId}`}>
									Read more
								</Link>
							</span>
						</button>
					</div>
				</div>
			</div>
		);
	};

export default TechnicalProjectCard;
