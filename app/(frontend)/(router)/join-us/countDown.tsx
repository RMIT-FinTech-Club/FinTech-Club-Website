"use client";
import { motion } from "framer-motion";
import { fontMono } from "@/config/fonts";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import "./style.css";

export default function CountDown() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const interval = useRef<NodeJS.Timeout>();

	const timerCount = () => {
		const expiredDay = new Date("2024-07-16T00:00:00Z");
		interval.current = setInterval(() => {
			const now = new Date();
			const totalDays = expiredDay.getTime() - now.getTime();

			const days = Math.floor(totalDays / (1000 * 60 * 60 * 24));
			const hours = Math.floor(
				(totalDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor(
				(totalDays % (1000 * 60 * 60)) / (1000 * 60),
			);
			const seconds = Math.floor((totalDays % (1000 * 60)) / 1000);

			if (totalDays < 0) {
				// stop count down
				clearInterval(interval.current);
			} else {
				// update timer
				setDays(days);
				setHours(hours);
				setMinutes(minutes);
				setSeconds(seconds);
			}
		}, 1000);
	};
	useEffect(() => {
		timerCount();
		return () => {
			clearInterval(interval.current);
		};
	}, [timerCount]);

	return (
		<div className="relative countDown-container h-screen w-screen flex justify-center items-start">
			<div className="absolute w-full h-full top-0 left-0 bg-black opacity-60" />
			<div className="w-full z-10 mt-12 absolute flex flex-col justify-center gap-8 items-center">
				<h1
					className={`mb-7 md:mb-14 text-[#F9FAFB] text-2xl md:text-6xl font-bold ${fontMono.style}`}
				>
					Count down to form closed
				</h1>
				<div className="timer-container w-full md:w-4/5">
					<div className="timer w-full flex flex-col md:flex-row  justify-between items-center text-center mb-7 md:mb-14">
						<section
							className={`text-[#F9FAFB] mb-6 md:mb-0 ${fontMono.style}`}
						>
							<p className="text-5xl md:text-8xl mb-5 font-black">
								{days}
							</p>
							<p className="text-2xl md:text-5xl font-bold">
								DAYS
							</p>
						</section>
						<section
							className={`text-[#F9FAFB] mb-6 md:mb-0 font-bold ${fontMono.style}`}
						>
							<p className="text-5xl md:text-8xl mb-5 font-black">
								{hours}
							</p>
							<p className="text-2xl md:text-5xl font-bold">
								HOURS
							</p>
						</section>
						<section
							className={`text-[#F9FAFB] mb-6 md:mb-0 font-bold ${fontMono.style}`}
						>
							<p className="text-5xl md:text-8xl mb-5 font-black">
								{minutes}
							</p>
							<p className="text-2xl md:text-5xl font-bold">
								MINUTES
							</p>
						</section>
						<section
							className={`text-[#F9FAFB] font-bold ${fontMono.style}`}
						>
							<p className="text-5xl md:text-8xl mb-5 font-black">
								{seconds}
							</p>
							<p className="text-2xl md:text-5xl font-bold">
								SECONDS
							</p>
						</section>
					</div>
				</div>
				<motion.div
					className="text-2xl md:text-5xl px-5 md:px-10 py-6 md:py-12 bg-[#0D1742] border-2 md:border-4  rounded-3xl border-white text-[#F9FAFB] cursor-pointer"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.9 }}
					transition={{ type: "spring", stiffness: 400, damping: 17 }}
				>
					<Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2FFTC_MEMB%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2oTO9hfUgqP4CK9torQTPhvbroI-THRft8vb4mzKFK7FCAQWIcuE-_T4w_aem_BmHz_4iIPJXGEl3HcM0MKw&h=AT24rQsKDxyuzrlHXwEHOaHR4q0YbmTLyu_yZwq1F7pNmm-ouEg5v-icJ66w_WFHXZ4h3y_AyDVQWYaJzZUbHZwoB-aY-VQ6fFHCgwkxDrvLw7LHeyqLZhWKgWNUA-5mwd2sRL8Pmw&__tn__=-UK-R&c[0]=AT3ZE3z3TKSb3HPxOyDAKjdLJdFWMTw64Y_zhonPN7RDYYa3PGI8nzO0B5_bt9vYMv1l1KUkowM478nfP600bafMWqB_UrhkXfZ_WM-YFqUNqZWwcsB6-kZmthZixp7YEVJjDIvowF7jlkd-CR2b1ricFlgZahL8pNvwm3e_-qETcqJ3NN1DrT0JIsnqngcKXgP8Q4Y_CbBBVESFeeeA21aUp1gn4eQlzuJH">
						Join us here
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
