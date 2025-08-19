import type React from "react";

import Button from "@/components/button";
import ImageForm5 from "@/components/projects/projectImagineForms/Form5";
import Decor1 from "@/components/projects/projectDecorForms/Decor1";

interface HeaderProps {
	introduce: {
		images: string[];
	};
};

const Header: React.FC<HeaderProps> = ({ introduce }) => {
	const flexCenter = 'flex justify-center'

	return (
		<section className='min-h-[100vh] justify-around flex md:flex-row flex-col-reverse flex-wrap md:flex-nowrap overflow-x-hidden md:p-[5vw] px-[5vw] py-[10vw] relative bg-deepBlue'>
			<Decor1 />
			<div className='absolute bg-center bg-no-repeat bg-cover top-0 left-0 w-full h-full z-0 opacity-10' style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/c607/d5a4/4341d2a4dd286749fa7110c17c1d378e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRN1PrcDOnsHLAL33AERp01ih57OsHVeeX5-uYVlupvx0XRL5Goj9ZUDb-KhFihUbIG91Vehn4DZgEbe0eZ2iRrBGadNpRW1OHgjdOJtMPe0px0PSEzXgcFOhiQzIe0iMwF1ciRZ234nHnXQBH7~yihNToxWCEkuK4EAhFZLtv-DZRubw0mHcpY0X5f21ureM55HvHRKhvg9YTgX~UlK-xXsoosyD6GtR2N9keqMgAjifA5fJEMx7B-4mi6TgyJquJcUkOKsRgcyDpRyrTruobXbE0y~Z-d1EYBHH3KWVUD~1spvQwynIFaNtCV1iZLlc-WtMssvC1xnyIpmWV9qIA__)' }}></div>
			<div className={`${flexCenter} items-center md:items-start flex-col w-full md:w-1/2 z-10`}>
				<div className='md:my-[2vh] my-[1vh] md:mt-0 mt-[5vh] bg-[#FFEFCA] text-deepBlue text-[3.2vw] leading-[4vw] py-[1vw] px-[5vw] rounded-[3vw] md:text-[0.8vw] md:leading-[1.2vw] md:py-[0.4vw] md:px-[2vw] md:rounded-[1vw]'>Fintech Club Initiation</div>
				<div className='md:my-[2vh] my-[1vh] text-white text-[7vw] md:text-[4vw] font-bold tracking-[0.2vw] text-nowrap'>Media Projects</div>
				<div className='md:my-[2vh] my-[1vh] text-white text-[3vw] leading-[4.8vw] md:text-left text-center md:text-[1vw] md:leading-[1.4vw]'>Lorem ipsum dolor sit amet consectetur. In nisl amet consequat vehicula lectus egestas nibh et sed. Quisque ac convallis adipiscing.</div>
				<Button classes='bg-gold md:my-[2vh] my-[1vh]'>Join Us</Button>
			</div>
			<div className={`${flexCenter} items-center w-full md:w-1/2 z-10`}>
				<ImageForm5 images={introduce.images} />
			</div>
		</section>
	);
};

export default Header;