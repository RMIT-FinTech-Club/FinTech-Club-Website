import clsx from "clsx";
import type React from "react";

type ContentContainerProps = {
	title: string;
	content: string;
	headingColor: string;
	textColor: string;
	bgColor: string;
	rounded: string;
	shadowPosition: string;
};

const ContentContainer: React.FC<ContentContainerProps> = ({
	title,
	content,
	headingColor,
	textColor,
	bgColor,
	rounded,
	shadowPosition,
}) => {
	return (
		<div
			className={clsx(
				"relative md:h-[83vh] md:w-[43vw] text-center py-20 md:pb-56 pb-32 md:px-32 px-11",
				rounded,
				bgColor,
				shadowPosition,
			)}
		>
			<h1 className={clsx("text-7xl my-8", headingColor)}> {title} </h1>
			<div
				className={clsx(
					"text-2xl text-justify md:text-start relative md:text-xl mx-auto",
				textColor,	
				)}
			>
				{" "}
				{content}{" "}
			</div>
		</div>
	);
};

export default ContentContainer;
