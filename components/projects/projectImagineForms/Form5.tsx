import type React from "react";
import "@/styles/animations.css";

interface ImageForm5Props {
	images?: string[];
}

const ImageForm5: React.FC<ImageForm5Props> = ({ images = [] }) => {
	const imgClasses = "absolute bg-center bg-no-repeat";
	const bigImgClasses =
		"w-[60%] h-[80%] bg-cover rounded-t-[calc(70vw/100*30)] rounded-b-none";
	const smallImgClasses = "md:w-[3vw] w-[9vw] aspect-square bg-contain";

	return (
		<div className="md:w-[30vw] w-[70vw] aspect-square relative">
			<div
				className={`${imgClasses} ${bigImgClasses} top-0 left-0`}
				style={{ backgroundImage: `url(${images[0]})` }}
			></div>
			<div
				className={`${imgClasses} ${bigImgClasses} bottom-0 right-0`}
				style={{ backgroundImage: `url(${images[1]})` }}
			></div>
			<div
				className={`${imgClasses} ${smallImgClasses} top-[82%] right-[65%] glowing`}
				style={{
					backgroundImage: `url('/projectPage/decor_1.png')`,
					animationDuration: "3s",
				}}
			></div>
			<div
				className={`${imgClasses} ${smallImgClasses} bottom-[85%] left-[65%] glowing`}
				style={{
					backgroundImage: `url('/projectPage/decor_2.png')`,
					animationDuration: "3s",
				}}
			></div>
		</div>
	);
};

export default ImageForm5;
