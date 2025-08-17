import type React from "react";

interface ImageForm2Props {
	images: string[];
}

const ImageForm2: React.FC<ImageForm2Props> = ({ images }) => {
	const decorClasses =
		"absolute z-0 bg-center bg-contain bg-no-repeat aspect-[1/1] w-[9vw] md:w-[4vw]";

	return (
		<div className="relative bg-deepBlue aspect-[100/68] md:w-[30vw] w-3/4 rounded-[3vw] md:rounded-[1vw] glowing">
			<div
				style={{
					backgroundImage: "url(/ProjectPage/decor_1.png)",
					animationDuration: "3s",
				}}
				className={`${decorClasses} glowing md:left-[-4vw] md:bottom-[-3vw] left-[-8vw] bottom-[-8vw]`}
			></div>
			<div
				style={{
					backgroundImage: "url(/ProjectPage/decor_5.png)",
					animationDuration: "3s",
				}}
				className={`${decorClasses} goDark md:right-[-3vw] md:top-[-3vw] right-[-8vw] top-[-8vw]`}
			></div>
			<div
				style={{ backgroundImage: `url(${images[0]})` }}
				className="md:border-[0.2vw] border-[0.8vw] border-white rounded-[3vw] md:rounded-[1vw] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[90%] h-[120%] bg-center bg-cover bg-no-repeat z-10"
			></div>
		</div>
	);
};

export default ImageForm2;
