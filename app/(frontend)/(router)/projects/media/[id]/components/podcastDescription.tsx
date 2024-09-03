import React from "react";

const PodcastDescription: React.FC<{ description: string }> = ({
	description,
}) => {
	return (
		<div className="w-full px-4 relative overflow-auto h-1/2 lg:h-auto">
			<p className="text-ft-text-bright py-2 text-center lg:text-start">
				{description}
			</p>
		</div>
	);
};

export default PodcastDescription;
