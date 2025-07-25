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
				"relative md:min-h-[45vh] md:max-w-[45vw] text-center py-20 px-32",
				rounded,
				bgColor,
				shadowPosition,
			)}
		>
			<h1 className={clsx("text-7xl my-8", headingColor)}> {title} </h1>
			<div
				className={clsx(
					"text-2xl text-start relative md:text-xl mx-auto",
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
