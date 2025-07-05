import type React from "react";

interface ProjectTechStack {
	techName: string;
	techDescription: string;
}

const TechStack: React.FC<{ techStacks: ProjectTechStack[] }> = ({
	techStacks,
}) => {
	// console.log(techStacks);
	return (
		<section className="w-full bg-ft-background">
			<h1 className="w-full h-full my-4 text-center text-ft-primary-blue text-4xl font-extrabold">
				How we made it?
			</h1>
			<div className="w-[16vw] h-0.5 bg-ft-primary-yellow m-auto" />
			<div className="flex flex-col md:flex-row justify-around p-6 md:p-12 space-y-6 md:space-y-0">
				<div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
					<div className="text-6xl mb-4">💻</div>
					<h3 className="text-2xl mb-2">{techStacks[0]?.techName}</h3>
					<p className="text-lg text-gray-600 mb-4">
						{techStacks[0]?.techDescription}
					</p>
					<a
						href="#"
						className="text-white bg-ft-primary-blue px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800"
					>
						Learn more
					</a>
				</div>
				<div className="bg-white p-6 text-center w-full md:w-1/3 transform scale-110 shadow-xl rounded-2xl transition-transform duration-300 hover:scale-115 z-10">
					<div className="text-6xl mb-4">☁️</div>
					<h3 className="text-2xl mb-2">{techStacks[1]?.techName}</h3>
					<p className="text-lg text-gray-600 mb-4">
						{techStacks[1]?.techDescription}
					</p>
					<a
						href="#"
						className="text-white bg-ft-primary-blue px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800"
					>
						Learn more
					</a>
				</div>
				<div className="bg-white rounded-lg shadow-md p-6 text-center w-full md:w-1/3 transform transition-transform duration-300 hover:scale-105">
					<div className="text-6xl mb-4">🔒</div>
					<h3 className="text-2xl mb-2">{techStacks[2]?.techName}</h3>
					<p className="text-lg text-gray-600 mb-4">
						{techStacks[2]?.techDescription}
					</p>
					<a
						href="#"
						className="text-white bg-ft-primary-blue px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-800"
					>
						Learn more
					</a>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
