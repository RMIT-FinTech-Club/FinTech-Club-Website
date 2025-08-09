"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhatAreYouWaitingFor = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });

	return (
		<div
			ref={ref}
			className="flex flex-col sm:flex-row justify-center items-center w-full px-10 py-12 bg-white"
			style={{ minHeight: "80vh" }}
		>
			<motion.div
				className="flex flex-col items-center sm:items-start text-center sm:text-left mb-8 sm:mb-0 sm:mr-8"
				initial={{ opacity: 0, x: -50 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 1, ease: "easeOut" }}
			>
				<motion.h2
					className="text-2xl sm:text-4xl font-bold text-black mb-4"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					What Are You Waiting For?
				</motion.h2>
				<div className="flex gap-4 mb-2">
					<a
						href="https://forms.office.com/r/Z55Yha5E10"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-[#2B305E] text-white font-semibold rounded-[60px] border border-[#3c4376] hover:border-[#97ABD6] transition duration-600 ease-in-out hover:bg-[#97ABD6] text-center"
					>
						Registration Form
					</a>
					<a
						href="https://bit.ly/FTC_Recruitment_Booklet_2024C"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 border border-[#2B305E] text-[#2B305E] font-semibold rounded-[60px] transition duration-600 ease-in-out hover:bg-[#3c4376] hover:text-white text-center"
					>
						View Our Booklet
					</a>
				</div>
			</motion.div>

			<motion.div
				className="relative w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[950px] lg:h-[850px] flex items-center justify-center"
				initial={{ opacity: 0, x: 50 }}
				whileHover={{ scale: 1.03 }}
				animate={isInView ? { opacity: 1, x: 0 } : {}}
				transition={{ duration: 1, ease: "easeInOut" }}
			>
				<img
					src="/joinUsPage/bear.svg"
					alt="Bear"
					className="w-full lg:w-[70%] mx-auto aspect-square object-contain"
				/>
			</motion.div>
		</div>
	);
};

export default WhatAreYouWaitingFor;
