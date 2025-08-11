import type React from "react";
import Decor1 from "@/components/projects/projectDecorForms/Decor1";

const EventHeader: React.FC = () => {
	return (
		<section className="flex md:flex-row flex-col-reverse justify-center items-center min-h-[100vh] flex-wrap md:flex-nowrap overflow-x-hidden md:p-[5vw] px-[5vw] py-[10vw] relative bg-deepBlue">
			<Decor1 />
			<div
				className="absolute bg-center bg-no-repeat bg-cover top-0 left-0 w-full h-full z-0 opacity-10"
				style={{
					backgroundImage:
						"url(https://s3-alpha-sig.figma.com/img/e81a/aae2/5770c7d948219785c6bfac01a35112cf?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ST9v99VhLu4MDBDJePQza2COaVRlKZ7U4pjbyrTIGzD~5n06LNKuWnr3y176pQqwOTo2BpNKUNQ0wdsg0jSgNuEc7d75xA4sgbZ-UBVer~shOY9Qhxn8zcFaFQWzuW5TzXQ3-JltJBl~rxXiTYyVfdJWneGXTFuhGxTn7pBMl8OviQN5GofNBu4lMdE5jf7in5v8Oyv6G73rubr6dJDfE8V8018cxM-SjH9Qz-yaPTbW5t~JM7dMLcxF0zqgDiV7NEHUkmGAnSSmNgD~jrSbopj1vFZh6bH1~CqWS7kXLta~LsatDXarzknbLzLn8G5e3Fjo1EZiLDnH1l6XVNnE0A__)",
				}}
			></div>
			<div className="flex justify-center items-center flex-col w-full z-10">
				<div className="my-[3vh] md:mt-0 mt-[5vh] bg-[#FFEFCA] text-deepBlue text-[4.5vw] leading-[6vw] py-[2vw] px-[7vw] rounded-[4.75vw] md:text-[1.4vw] md:leading-[2vw] md:py-[0.4vw] md:px-[3vw] md:rounded-[1.4vw]">
					Our Event Details
				</div>
				<div className="my-[3vh] text-white text-[10vw] md:text-[6vw] font-bold tracking-[0.2vw] text-nowrap">
					Event Details
				</div>
				<div className="my-[3vh] text-white text-[4vw] leading-[7vw] text-center md:w-1/2 md:text-[1.5vw] md:leading-[2.2vw]">
					Lorem ipsum dolor sit amet consectetur. In nisl amet
					consequat vehicula lectus egestas nibh et sed. Quisque ac
					convallis adipiscing.
				</div>
				<button className="bg-gold font-semibold text-white transition duration-200 text-[5vw] my-[3vh] px-[15vw] py-[2vw] md:text-[1.8vw] md:px-[6vw] md:py-[0.5vw] rounded-[10px] hover:contrast-150">
					Join Us
				</button>
			</div>
		</section>
	);
};

export default EventHeader;
