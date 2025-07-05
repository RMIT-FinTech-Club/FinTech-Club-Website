import type React from "react";

const technicalProjectDescription: React.FC<{
	projectName: string;
	projectDescription: string;
}> = ({ projectName, projectDescription }) => {
	return (
		<div className="w-full bg-ft-background py-6">
			<h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-8 uppercase text-[#2b305e]">
				{projectName}
			</h1>
			<div className="w-1/5 h-1 bg-black my-8 mx-auto" />
			<p className="font-poppins text-base sm:text-lg md:text-xl lg:text-2xl text-justify mt-4 w-4/5 mx-auto font-light">
				{projectDescription}
			</p>
		</div>
	);
};

export default technicalProjectDescription;
