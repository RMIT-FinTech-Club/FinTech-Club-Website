import type React from "react";

interface ImageForm4Props {
	images: string[];
}

const ImageForm4: React.FC<ImageForm4Props> = ({ images }) => {
	return (
		<div className="relative bg-white flex justify-center items-center p-[3vh_1vh_1vh_1vh] md:rounded-[1vw] rounded-[3vw]">
			<div
				style={{ backgroundImage: `url(${images[0]})` }}
				className="aspect-square bg-center bg-cover bg-no-repeat w-[70vw] rounded-[4vw] border-[0.8vw] md:w-[25vw] md:rounded-[1vw] md:border-[0.2vw] border-white"
			></div>
			<div
				style={{
					backgroundImage: `url(${images[1]})`,
					animationDuration: "4s",
				}}
				className="w-[20vw] top-[-3vw] right-[-9vw] md:w-[8vw] md:top-[-1vw] md:right-[-3vw] absolute aspect-square bg-center bg-contain bg-no-repeat MAG"
			></div>
		</div>
	);
};

export default ImageForm4;
