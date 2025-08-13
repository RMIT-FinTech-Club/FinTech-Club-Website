import type React from "react";

interface ImageForm3Props {
	images: string[];
}

const ImageForm3: React.FC<ImageForm3Props> = ({ images }) => {
	const blockClasses =
		"absolute z-0 w-[60%] h-[60%] rounded-[3vw] md:rounded-[1vw]";
	const circleClasses =
		"absolute z-0 aspect-square rounded-[50%] md:inline-block hidden";
	const imgClasses = "absolute z-10 bg-center bg-no-repeat";

	return (
		<div className="relative aspect-[100/73] md:w-[40vw] w-[80vw]">
			<div
				className={`${blockClasses} left-0 bottom-0 bg-[#97ABD6] moveUD`}
				style={{ animationDuration: "6s" }}
			>
				<div
					style={{
						backgroundImage: "url(/ProjectPage/decor_3.png)",
						animationDuration: "3s",
					}}
					className={`${imgClasses} bg-contain glowing aspect-square w-[9vw] left-[-6vw] bottom-[-6vw] md:w-[4vw] md:left-[-3vw] md:bottom-[-3vw]`}
				></div>
			</div>
			<div
				className={`${blockClasses} right-0 top-0 bg-[#F8DA92] moveDU`}
				style={{ animationDuration: "6s" }}
			></div>
			<div
				className={`${circleClasses} bg-deepBlue right-0 bottom-[1vw] w-[5vw] MAS`}
				style={{ animationDuration: "20s" }}
			>
				<span
					className={`${circleClasses} bottom-[-40%] right-[-40%] bg-midDeepBlue w-[1.5vw]`}
				></span>
			</div>
			<div
				className={`${circleClasses} top-[50%] right-[-2.5vw] w-[1.5vw] bg-gold moveUD`}
				style={{ animationDuration: "5s" }}
			></div>
			<div
				style={{ backgroundImage: `url(${images[0]})` }}
				className={`${imgClasses} w-[80%] h-[80%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover rounded-[3vw] md:rounded-[1vw] border-solid border-white border-[0.8vw] md:border-[0.2vw]`}
			></div>
		</div>
	);
};

export default ImageForm3;
