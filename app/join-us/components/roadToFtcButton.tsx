"use client";
import { Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";

interface RoadToFtcButtonProps {
	text: string;
	color: string;
	link: string;
}

const RoadToFtcButton = ({ text, color, link }: RoadToFtcButtonProps) => {
	return (
		<div>
			{/* Laptop view */}
			<motion.div
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
			>
				<div className="hidden lg:flex">
					<Button
						className={`mx-8 my-2 py-2 px-4 ${color} text-white font-bold rounded-xl w-96 h-24 text-4xl`}
						href={link}
						as={Link}
					>
						{text}
					</Button>
				</div>
			</motion.div>
			{/* Mobile view */}
			<motion.div
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.9 }}
				transition={{ type: "spring", stiffness: 400, damping: 17 }}
			>
				<div className="flex lg:hidden">
					<Button
						className={`mx-2 my-2 py-2 px-2 ${color} text-white font-bold rounded-full w-44 h-12 text-xl`}
					>
						{text}
					</Button>
				</div>
			</motion.div>
		</div>
	);
};

export default RoadToFtcButton;
