"use client";
import { fontMono } from "@/config/fonts";

export default function FinTechInTheEyes() {
	return (
		<div className="w-screen grid md:grid-cols-12 p-11 md:p-0">
			<img
				src="https://ik.imagekit.io/mbrrji2rk/Picture1.png?updatedAt=1718879714203"
				alt="president profile"
				className="hidden md:block md:col-span-5 mt-32"
			/>
			<div className="md:col-span-5 col-span-10 place-content-center md:content-start md:mt-32">
				<h1
					className={`text-3xl md:text-7xl text-center md:text-end md:py-2 text-[#DBB968] font-black ${fontMono.style}`}
				>
					FINTECH
				</h1>
				<h1
					className={`text-3xl md:text-7xl text-center md:text-end mb-3 md:py-2 md:mb-6 text-[#2B305E]  font-black ${fontMono.style}`}
				>
					IN THE EYES OF
				</h1>
				<img
					src="https://ik.imagekit.io/mbrrji2rk/Picture1.png?updatedAt=171887971420"
					alt="president profile"
					className="md:hidden block border-8 border-[#DBB968] rounded-3xl"
				/>
				<h2
					className={`hidden md:block text-2xl md:text-4xl text-start md:py-2 text-[#DBB968] italic font-bold  ${fontMono.style}`}
				>
					President
				</h2>
				<h2
					className={`text-2xl md:text-4xl text-center md:text-start mt-4 md:mt-0 md:py-2 md:mb-6 text-[#2B305E] font-extrabold ${fontMono.style}`}
				>
					Nguyen Manh Dung
				</h2>
				<h2
					className={`md:hidden text-1xl text-center mt-3 text-[#DBB968] ${fontMono.style}`}
				>
					President
				</h2>
				<p
					className={`text-1xl md:text-2xl text-justify mt-4 md:mt-0 mb-0 md:mb-36 md:text-left ${fontMono.style}`}
				>
					FinTech Club changed my life. Joining RMIT was challenging
					as an introvert, making new friends difficult. College was
					lonely until I found the FinTech Club, where like-minded
					individuals shared my passion for growth. Winning the
					"Star-Up" competition boosted my confidence and skills.
					Becoming President allowed me to give back to this uplifting
					community.
				</p>
			</div>
			<div className="md:block hidden flex-col justify-betwwen md:col-span-2 mt-32">
				<img
					alt="fintech mascot"
					className="md:block hidden h-[300px] w-full mb-5"
					src="https://ik.imagekit.io/wsdkzaaovq/Mascot.svg?updatedAt=1718591967593"
				/>
				<img
					alt="decoration"
					src="https://ik.imagekit.io/wsdkzaaovq/Some%20Decoration.svg?updatedAt=1718591556722"
					className=" md:block hidden h-[300px] w-full"
				/>
			</div>

			{/* <img
        alt="fintech mascot"
        className="md:block md:col-span-2 hidden h-[300px] w-full "
        src="https://ik.imagekit.io/wsdkzaaovq/Mascot.svg?updatedAt=1718591967593"
      />
      <img
        alt="decoration"
        src="https://ik.imagekit.io/wsdkzaaovq/Some%20Decoration.svg?updatedAt=1718591556722"
        className="md:block md:col-span-2 hidden h-[300px] w-full relative bottom-0 right-0"
      /> */}
		</div>
	);
}
