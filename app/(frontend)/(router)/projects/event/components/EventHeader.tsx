import type React from "react";
import Button from "../../components/Button";

const EventHeader: React.FC = () => {
	return (
		<section className='flex md:flex-row flex-col-reverse flex-wrap md:flex-nowrap overflow-x-hidden md:p-[5vw] px-[5vw] py-[10vw] relative bg-deepBlue'>
			<div className='absolute bg-center bg-no-repeat bg-cover top-0 left-0 w-full h-full z-0 opacity-10' style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/e81a/aae2/5770c7d948219785c6bfac01a35112cf?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ST9v99VhLu4MDBDJePQza2COaVRlKZ7U4pjbyrTIGzD~5n06LNKuWnr3y176pQqwOTo2BpNKUNQ0wdsg0jSgNuEc7d75xA4sgbZ-UBVer~shOY9Qhxn8zcFaFQWzuW5TzXQ3-JltJBl~rxXiTYyVfdJWneGXTFuhGxTn7pBMl8OviQN5GofNBu4lMdE5jf7in5v8Oyv6G73rubr6dJDfE8V8018cxM-SjH9Qz-yaPTbW5t~JM7dMLcxF0zqgDiV7NEHUkmGAnSSmNgD~jrSbopj1vFZh6bH1~CqWS7kXLta~LsatDXarzknbLzLn8G5e3Fjo1EZiLDnH1l6XVNnE0A__)' }}></div>
			<div className='flex justify-center items-center flex-col w-full z-10'>
				<div className='my-[2vh] md:mt-0 mt-[5vh] bg-[#FFEFCA] text-deepBlue text-[3.2vw] leading-[4vw] py-[1vw] px-[5vw] rounded-[3vw] md:text-[0.8vw] md:leading-[1.2vw] md:py-[0.4vw] md:px-[2vw] md:rounded-[1vw]'>Our Event Details</div>
				<div className='my-[2vh] text-white text-[7vw] md:text-[4vw] font-bold tracking-[0.2vw] text-nowrap'>Event Details</div>
				<div className='my-[2vh] text-white text-[4vw] leading-[6vw] text-center md:w-1/2 md:text-[1vw] md:leading-[1.4vw]'>Lorem ipsum dolor sit amet consectetur. In nisl amet consequat vehicula lectus egestas nibh et sed. Quisque ac convallis adipiscing.</div>
				<Button classes='bg-gold my-[2vh]'>Join Us</Button>
			</div>
		</section>
	);
};

export default EventHeader;
