import React from "react";
import { useMediaQuery } from "react-responsive";

interface NavigationButtonProps {
	text: string;
	link: string;
}

const NavigationButton = ({ text, link }: NavigationButtonProps) => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (link.startsWith("#")) {
			e.preventDefault();
			const target = document.querySelector(link);
			if (target) {
				target.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	return (
		<a
			href={link}
			onClick={handleClick}
			className="flex flex-1 justify-center items-center md:w-[250px] md:h-[80px] sm:w-[80px] sm:h-[50px] py-4 px-8 bg-ft-primary-blue hover:bg-ft-primary-blue-200 text-white border rounded-b-full text-center md:text-[15px] lg:text-[20px] text-[11px] font-semibold"
		>
			{text}
		</a>
	);
};

export default NavigationButton;
