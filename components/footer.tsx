import type React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#142850] text-white py-14 relative rounded-t-[80px]">
			<div className="container mx-auto flex flex-col lg:flex-row justify-center items-center px-4 space-y-6 lg:space-y-0 lg:space-x-4">

				{/* Social Media Icons Section */}
				<div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-4 flex-grow mt-4">
					<div className="flex flex-row lg:flex-col gap-4 lg:gap-6 justify-center items-center h-full">
						<Link href="https://www.facebook.com/rmitfintechclub/" legacyBehavior>
							<a target="_blank" className="transform hover:scale-110 transition duration-200 cursor-pointer">
								<svg width={17} height={28} className="hover:text-[#DBB968]" viewBox="0 0 18 32" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.8807 1.44092H12.5218C10.595 1.44092 8.74715 2.2127 7.38472 3.58649C6.02229 4.96027 5.25688 6.82352 5.25688 8.76635V13.1616H0.897949V19.022H5.25688V30.7426H11.0688V19.022H15.4277L16.8807 13.1616H11.0688V8.76635C11.0688 8.37778 11.2219 8.00513 11.4944 7.73038C11.7669 7.45562 12.1364 7.30126 12.5218 7.30126H16.8807V1.44092Z" stroke="white" stroke-width="1.3319" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							</a>
						</Link>
						<Link href="https://www.instagram.com/rmitfintechclub/" legacyBehavior>
							<a target="_blank" className="transform hover:scale-110 transition duration-200 cursor-pointer">
								<Image src="/footer/instagram1.svg" alt="Instagram" width={28} height={28} className="hover:text-[#DBB968]" />
							</a>
						</Link>
						<Link href="https://www.youtube.com/@rmitvietnamfintechclub" legacyBehavior>
							<a target="_blank" className="transform hover:scale-110 transition duration-200 cursor-pointer">
								<Image src="/footer/youtube1.svg" alt="YouTube" width={28} height={28} className="hover:text-[#DBB968]" />
							</a>
						</Link>
						<Link href="https://www.linkedin.com/company/rmit-fintech-club" legacyBehavior>
							<a target="_blank" className="transform hover:scale-110 transition duration-200 cursor-pointer">
								<Image src="/footer/linkedin.svg" alt="LinkedIn" width={28} height={28} className="hover:text-[#DBB968]" />
							</a>
						</Link>
						<div className="transform hover:scale-110 transition duration-200 relative group">
							<Image src="/footer/telegram1.svg" alt="Telegram" width={28} height={28} className="hover:text-[#DBB968]" />
							<span className="absolute left-0 bottom-full mb-1 w-max px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
								Not Available
							</span>
						</div>
						<div className="transform hover:scale-110 transition duration-200 relative group">
							<Image src="/footer/github1.svg" alt="GitHub" width={28} height={28} className="hover:text-[#DBB968]" />
							<span className="absolute left-0 bottom-full mb-1 w-max px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
								Not Available
							</span>
						</div>
						<div className="transform hover:scale-110 transition duration-200 relative group">
							<Image src="/footer/twitter1.svg" alt="Twitter" width={28} height={28} className="hover:text-[#DBB968]" />
							<span className="absolute left-0 bottom-full mb-1 w-max px-2 py-1 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
								Not Available
							</span>
						</div>
					</div>
				</div>


				<div className="flex justify-center lg:justify-start order-first lg:order-none flex-grow items-stretch">
					<Image
						src="/footer/fintech-logo.svg"
						alt="FinTech Club Logo"
						width={360}
						height={360}
						className="w-auto"
						style={{
							width: '280px',
							maxWidth: '330px',
							maxHeight: '100%',
						}}
					/>
				</div>

				<div className="flex flex-col items-center lg:items-start text-center lg:pr-[2vw] lg:text-left mx-auto lg:mx-0 lg:w-1/2 max-w-max">
					<h5 className="text-ft-primary-yellow-500 font-bold text-lg lg:mb-[2vh]">ABOUT US</h5>
					<p className="text-base w-3/4 lg:w-full text-center lg:text-left">
						RMIT FinTech Club is the first ever student-led Financial Technology club in Vietnam, founded in 2020. Founded on the mission to bring Business & Technology.
					</p>

					<h5 className="text-ft-primary-yellow-500 font-bold text-lg mt-6">Contact Us</h5>
					<div className="flex flex-col items-center lg:items-start space-y-2 text-base">

						<div className="flex items-center space-x-2 lg:my-[2vh]">
							<Image src="/footer/location.svg" alt="Location" width={28} height={28} className="relative bottom-[8px] lg:bottom-0" />
							<span className="leading-tight">702 Đ. Nguyễn Văn Linh, Tân Hưng, Quận 7, Hồ Chí Minh</span>
						</div>

						<div className="flex items-center space-x-2">
							<Image src="/footer/email.svg" alt="Email" width={28} height={28} />
							<a href="mailto:fintechclub@rmit.edu.com" className="text-white hover:underline leading-tight">
								fintechclub@rmit.edu.com
							</a>
						</div>
					</div>
				</div>

				{/* Important Links Section */}
				<div className="flex flex-col text-center lg:text-left space-y-4 max-w-max flex-grow z-10">
					<h5 className="text-ft-primary-yellow-500 font-bold text-lg">Important Links</h5>
					<ul className="space-y-2">
						<li><Link href="/" className="hover:text-[#DBB968]">Home</Link></li>
						<li><Link href="/about-us" className="hover:text-[#DBB968]">About Us</Link></li>
						<li><Link href="/events" className="hover:text-[#DBB968]">Events</Link></li>
						<li><Link href="/projects" className="hover:text-[#DBB968]">Projects</Link></li>
						<li><Link href="/join-us" className="hover:text-[#DBB968]">Join Us</Link></li>
					</ul>
				</div>
			</div>


			<div className="container mx-auto text-center mt-8 border-t border-gray-500 pt-4">
				<p className="text-sm">
					Copyright ©2024 All Rights Reserved.
				</p>
			</div>

			<div className="absolute bottom-0 right-0 z-0">
				{/* > lg */}
				<div className="hidden lg:block">
					<Image
						src="/footer/bear1.svg"
						alt="Bear"
						layout="intrinsic"
						width={450}
						height={450}
						className="object-contain"
					/>
				</div>

				{/* <lg  */}
				<div className="block lg:hidden">
					<Image
						src="/footer/bear2.svg"
						alt="Bear"
						layout="intrinsic"
						width={250}
						height={250}
						className="object-contain"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;