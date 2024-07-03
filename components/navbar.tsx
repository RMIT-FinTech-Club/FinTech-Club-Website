"use client";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, {
	useState,
	useEffect,
	ButtonHTMLAttributes,
	use,
	useRef,
} from "react";
import { Menu, X, CaretDown } from "tabler-icons-react"; // Including Tabler icons for menu controls
import {
	MotionConfig,
	Transition,
	Variant,
	Variants,
	motion,
	useAnimate,
} from "framer-motion";
import clsx from "clsx";
import { atom, useAtom } from "jotai";
import { set } from "mongoose";

const isOpenAtom = atom(false);

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useAtom(isOpenAtom);

	const navBarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const ulVariants = {
		open: {
			right: 0,
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		} as Variant,
		closed: {
			right: "-100%",
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		} as Variant,
	};

	const navBarItemVariants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};

	return (
		<motion.nav
			ref={navBarRef}
			initial={false}
			animate={isOpen ? "open" : "closed"}
			className="sticky top-0 z-50 flex w-full transition-colors duration-300 bg-ft-primary-blue shadow-md"
		>
			<div className="flex justify-between items-center max-w-6xl mx-auto px-4 w-full">
				<div className="logo relative w-14 h-14">
					<img
						src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/ft_logo.png"
						alt="FinTech Club Logo"
						className="absolute top-0 left-1/2 transform -translate-x-1/2"
					/>
				</div>
				<div className="md:hidden h-fit flex justify-center items-center">
					<AnimatedHamburger />
				</div>
				<motion.ul
					variants={ulVariants}
					className={
						"fixed -right-full bottom-0 bg-ft-primary-blue px-8 pr-16 md:hidden"
					}
					style={{ top: navBarRef.current?.offsetHeight }} // Right aligning the sidebar links
				>
					{siteConfig.navItems.map((item) => (
						<motion.li
							variants={navBarItemVariants}
							key={item.href}
							className="mb-6"
						>
							<Link
								className="font-bold text-white hover:text-ft-secondary-yellow"
								href={item.href}
								onClick={() => setIsOpen(false)}
							>
								{item.label}
							</Link>
						</motion.li>
					))}
				</motion.ul>
				<ul className="hidden md:relative md:flex md:items-center md:space-x-10 py-4">
					{siteConfig.navItems.map((item) => (
						<li key={item.href}>
							<Link
								className="font-bold text-white hover:text-ft-secondary-yellow"
								href={item.href}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
			{/* {isOpen && (
				<Button
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={toggleSidebar}
				/>
			)} */}
		</motion.nav>
	);
};

interface AnimatedHamburgerProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	stroke?: number;
	size?: number;
}

const AnimatedHamburger = ({
	stroke = 2,
	size = 24,
}: AnimatedHamburgerProps) => {
	let [isOpen, setIsOpen] = useAtom(isOpenAtom);

	const [containerBarScope, animateContainerBar] = useAnimate();

	const [topBarScope, animateTopBar] = useAnimate();
	const [bottomBarScope, animateBottomBar] = useAnimate();

	const containerStyles = {
		position: "relative",
		width: `${size}px`,
		height: `${size}px`,
		cursor: "pointer",
	} as React.CSSProperties;

	const barStyles = {
		width: `${size}px`,
		position: "absolute",
		height: `${stroke}px`,
		backgroundColor: "white",
	} as React.CSSProperties;

	useEffect(() => {
		async function animateBars() {
			if (isOpen) {
				// Closing animation
				animateTopBar(
					topBarScope.current,
					{ top: "50%" },
					{
						duration: 0.2,
						type: "tween",
						ease: "easeInOut",
					},
				);
				await animateBottomBar(
					bottomBarScope.current,
					{ top: "50%" },
					{
						duration: 0.2,
						type: "tween",
						ease: "easeInOut",
					},
				);

				// Spinning
				animateTopBar(
					topBarScope.current,
					{ rotate: 90 },
					{
						duration: 1.4,
						type: "spring",
						bounce: 0.4,
					},
				);
				animateContainerBar(
					containerBarScope.current,
					{ rotate: 135 },
					{
						duration: 1.4,
						type: "spring",
						bounce: 0.4,
					},
				);
			} else {
				// Spin back
				animateContainerBar(
					containerBarScope.current,
					{ rotate: -0 },
					{
						duration: 0.8,
						type: "spring",
						bounce: 0.2,
					},
				);
				await animateTopBar(
					topBarScope.current,
					{ rotate: -0 },
					{
						duration: 0.8,
						type: "spring",
						bounce: 0.2,
					},
				);

				// Opening animation
				animateTopBar(
					topBarScope.current,
					{ top: "0%" },
					{
						duration: 0.2,
						type: "tween",
						ease: "easeInOut",
					},
				);
				animateBottomBar(
					bottomBarScope.current,
					{ top: "100%" },
					{
						duration: 0.2,
						type: "tween",
						ease: "easeInOut",
					},
				);
			}
		}
		animateBars();
	}, [isOpen]);

	return (
		<motion.button
			ref={containerBarScope}
			style={containerStyles}
			onClick={() => setIsOpen(!isOpen)}
		>
			<motion.div
				ref={topBarScope}
				style={barStyles}
				className="top-0"
			></motion.div>
			<motion.div style={barStyles}></motion.div>
			<motion.div
				ref={bottomBarScope}
				style={barStyles}
				className="top-full"
			></motion.div>
		</motion.button>
	);
};

export default Navbar;
