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
				"relative md:min-h-[35rem] md:max-w-[45vw] flex flex-col justify-center items-center py-15 px-20",
				rounded,
				bgColor,
				shadowPosition,
			)}
		>
			<h1 className={clsx("text-center text-7xl my-8", headingColor)}> {title} </h1>
			<div
				className={clsx(
					"text-2xl text-justify relative max-w-[30rem] md:text-xl",
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
