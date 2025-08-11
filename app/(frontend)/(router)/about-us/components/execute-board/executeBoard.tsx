import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import React, { useRef } from "react";
import "./styles.css";
import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";

type ExecutiveBoardCardProps = {
	image: string;
	name: string;
	position: string;
	linkedin: string;
};

const executiveBoardData = [
	{
		image: "https://d2prwyp3rwi40.cloudfront.net/about_us/executive_board/President-TriTruong.png",
		name: "Truong Quoc Tri",
		position: "President",
		linkedin: "https://www.linkedin.com/in/truong-quoc-tri/",
	},
	{
		image: "https://d2prwyp3rwi40.cloudfront.net/about_us/executive_board/EVP-KhuongDuy.png",
		name: "Le Nguyen Khuong Duy",
		position: "External Vice President",
		linkedin: "https://www.linkedin.com/in/marcio-lnkd/",
	},
	{
		image: "https://d2prwyp3rwi40.cloudfront.net/about_us/executive_board/IVP-KhueNguyen.png",
		name: "Nguyen Van Khue",
		position: "Internal Vice President",
		linkedin: "https://www.linkedin.com/in/vankhuenguyen/",
	},
	{
		image: "https://d2prwyp3rwi40.cloudfront.net/about_us/executive_board/CFO-ThienDan.png",
		name: "Nguyen Thien Dan",
		position: "Chief of Finance Officer",
		linkedin: "https://www.linkedin.com/in/dan-nguyen-2a2a01265/",
	},
];

const ExecuteBoard = () => {
  return (
    // using hex color (invalid)
    <section className="relative bg-[#F9FAFB] bg-cover bg-center pt-[4rem]">
      <div className="absolute top-[4.3rem] right-[1.8rem] w-[4rem] h-[4rem] bg-[#C9D6EA] rounded-full"></div>
      <div className="absolute top-[11rem] right-[5rem] w-[2.5rem] h-[2.5rem] bg-[#DBB968] rounded-full"></div>
      <div className="absolute bottom-[-1rem] right-[-2.4rem] w-[6rem] h-[6rem] bg-[#DBB968] rounded-full z-20"></div>
      <div className="absolute bottom-[-2rem] right-[1.8rem] w-[3.7rem] h-[3.7rem] bg-[#2C305F] rounded-full z-10"></div>
      <div className="absolute bottom-[-6rem] left-[1rem] w-[8rem] h-[8rem] bg-[#2C305F] rounded-full z-10"></div>
      <div className="absolute bottom-[2rem] left-[8.5rem] w-[2.8rem] h-[2.8rem] bg-[#C9D6EA] rounded-full z-10"></div>
      <div className="absolute bottom-[-1.8rem] left-[12rem] w-[4.3rem] h-[4.3rem] bg-[#DBB968] rounded-full z-10"></div>
      <div className="absolute bottom-[5rem] left-[15rem] w-[2rem] h-[2rem] bg-[#DBB968] rounded-full z-10"></div>
      <div className="absolute bottom-[1rem] left-[21rem] w-[1.6rem] h-[1.6rem] bg-[#C9D6EA] rounded-full z-10"></div>
      
      <main className="mx-[4rem] 2xl:mx-[10rem]">
        <div className="content grid">
          <h2 className="leading-8 text-[#5E5E92] text-[2.2rem] font-bold">
            Meet Our
          </h2>
          <h1 className=" text-[#2C305F] text-[4.3rem]">Executive Board</h1>
          <p className="leading-8 w-full text-[#000000]">
            Meet the fierce, brilliant, and passionate minds behind the FinTech
            Club machine!
          </p>
        </div>
        <div className=" pt-16 pb-[8rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] 2xl:gap-[5rem]">
          {executiveBoardData.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref);

						return (
							// effect
							<motion.div
								key={index}
								ref={ref}
								animate={{
									y: isInView
										? index % 2 === 0
											? -25
											: 25
										: 0,
									opacity: isInView ? 1 : 0.7,
								}}
								transition={{ duration: 1, ease: "easeOut" }}
							>
								<EXECUTIVE_BOARD_CARD {...item} />
							</motion.div>
						);
					})}
				</div>
			</main>
		</section>
	);
};

function EXECUTIVE_BOARD_CARD({
	image,
	name,
	position,
	linkedin,
}: ExecutiveBoardCardProps) {
	return (
		<Card className="relative mt-[1.5rem] rounded-2xl border-[4px] border-[#2C305F] border-solid overflow-hidden">
			<CardHeader className="pb-0 pt-0 h-[12rem] 2xl:h-[16rem]">
				<div className="z-0">
					<Image
						alt={`${name} profile`}
						src={image}
						className="object-cover w-full h-full translate-y-[13%]"
					/>
				</div>
			</CardHeader>
			<CardBody className=" relative z-10 overflow-visible pb-[0.5rem] pl-[1rem] pt-[1.5rem] bg-[#2C305F] rounded-t-[30px] flex justify-between">
				<div className="flex justify-between items-start">
					<div>
						<h6 className="leading-6 font-semibold text-[0.9rem] text-[#FFEFCA]">
							{name}
						</h6>
						<p className="leading-5 text-[#FFEFCA] text-[0.7rem]">
							{position}
						</p>
					</div>
					<Link
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer"
						title="Visit LinkedIn"
					>
						<IconBrandLinkedin
							size={40}
							color="#FFEFCA"
							strokeWidth={0.8}
							className="transition duration-300 transform hover:scale-110 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FFEFCA]"
						/>
					</Link>
				</div>
			</CardBody>
		</Card>
	);
}

export default ExecuteBoard;
