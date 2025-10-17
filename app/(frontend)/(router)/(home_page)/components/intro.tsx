"use client";
import Image from "next/image";
import type React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

type MaskImageProps = {
	src: string;
	mask?: string;
	maskSize?: string;
	maskPosition?: string;
	maskRepeat?: string;
};

const MaskImage: React.FC<MaskImageProps> = ({ src }) => {
	return (
		<Image
			width={1000}
			height={1000}
			className="object-cover w-full"
			src={src}
			alt="FinTech Club Key Metrics"
			fetchPriority="high"
			priority={true}
			loading="eager"
		/>
	);
};

const IntroSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.5, // Adjust threshold as needed
	});
	const isMobile = useMediaQuery({ maxWidth: 500 });

	return (
		<nav>
			{isMobile ? (
				<section className="content flex flex-col bg-[#F9FAFB] md:flex-row items-center gap-6 w-full p-40">
					{/* Left text */}
					<div
						ref={ref}
						className="grid grid-rows-2 md:w-1/3 justify-center gap-y-16"
					>
						<div className="flex flex-col justify-end text-center gap-3 ml-5 w-[200px] h-[200px]">
							<h4 className="text-ft-primary-yellow">
								<CountUp start={0} end={inView ? 80 : 0} duration={5}>
									{({ countUpRef }) => (
										<span ref={countUpRef} className="text-6xl font-semibold" />
									)}
								</CountUp>
								+
							</h4>

							<h5 className="text-ft-primary-blue">Active Club Members</h5>
							<p>
								From diverse backgrounds, be it Finance, Business, Technology,
								Marketing, Design Studies, and more.
							</p>
						</div>
						<div className="flex flex-col justify-start -translate-y-32 ml-44 w-[200px] h-[200px] text-center gap-3">
							<h4 className="text-ft-primary-yellow">
								<CountUp start={0} end={inView ? 50 : 0} duration={5}>
									{({ countUpRef }) => (
										<span ref={countUpRef} className="text-6xl font-semibold" />
									)}
								</CountUp>
								+
							</h4>
							<div>
								<h5 className="text-ft-primary-blue">Club Projects</h5>
								<p className="w-[180px]">
									Include academic events, competitions, workshops, training,
									creative & media projects, technical development, and
									organizational projects.
								</p>
							</div>
						</div>
					</div>
					{/* Image */}
					<div className="md:w-1/3 w-[150px] mr-52 -translate-y-44">
						<MaskImage src="https://d2prwyp3rwi40.cloudfront.net/home/assets/KeyMetrics-EditedVersion.png" />
					</div>
					{/* Right text */}
					<div className="grid grid-rows-2 md:w-1/3 justify-center gap-y-20">
						<div className="flex flex-col justify-start text-center gap-3 -translate-y-64 ml-44 w-[200px] h-[200px]">
							<h4 className="text-ft-primary-yellow">
								<CountUp start={0} end={inView ? 7000 : 0} duration={5}>
									{({ countUpRef }) => (
										<span ref={countUpRef} className="text-6xl font-semibold" />
									)}
								</CountUp>
								+
							</h4>

							<h5 className="text-ft-primary-blue">Social Media Followings</h5>
							<p className="w-[180px]">
								A testament to FinTech Club’s prominence in the RMIT Community
								and beyond!
							</p>
						</div>

						<div className="flex flex-col justify-start text-center gap-3 -translate-y-80 ml-3 w-[200px] h-[200px]">
							<h4 className="text-ft-primary-yellow">
								<CountUp start={0} end={inView ? 40 : 0} duration={5}>
									{({ countUpRef }) => (
										<span ref={countUpRef} className="text-6xl font-semibold" />
									)}
								</CountUp>
								+
							</h4>
							<h5 className="text-ft-primary-blue">
								Academic & Industry Partners
							</h5>
							<p>
								In broad industries such as Traditional FinTech, Web3 FinTech,
								Finance, Technology, Healthcare, Venture Capital, etc.
							</p>
						</div>
					</div>
					<Image
						src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
						alt="Bear"
						height={400}
						width={600}
						fetchPriority="high"
						priority={true}
						loading="eager"
						className="absolute pt-[250vw]"
					/>
				</section>
			) : (
				/*desktop*/
				<section className="content flex flex-col bg-[#F9FAFB] md:flex-row items-center gap-6 w-full p-6 md:p-14">
					{/* Left text */}
					<div
						ref={ref}
						className="grid grid-rows-2 md:w-1/3 justify-center gap-y-16"
					>
						<div className="flex flex-col justify-end text-center gap-3">
							<h4 className="text-ft-primary-yellow">
								<CountUp start={0} end={inView ? 80 : 0} duration={5}>
									{({ countUpRef }) => (
										<span ref={countUpRef} className="text-6xl font-semibold" />
									)}
								</CountUp>
								+
							</h4>

							<h5 className="text-ft-primary-blue">Active Club Members</h5>
							<p>
								From diverse backgrounds, be it Finance, Business, Technology,
								Marketing, Design Studies, and more.
							</p>
						</div>
						<div className="flex flex-col justify-start text-center gap-3">
							<h4 className="text-ft-primary-yellow">
								<CountUp start={0} end={inView ? 50 : 0} duration={5}>
									{({ countUpRef }) => (
										<span ref={countUpRef} className="text-6xl font-semibold" />
									)}
								</CountUp>
								+
							</h4>

							<h5 className="text-ft-primary-blue">Club Projects</h5>
							<p>
								Include academic events, competitions, workshops, training,
								creative & media projects, technical development, and
								organizational projects.
							</p>
						</div>
					</div>
					{/* Image */}
					<div className="md:w-1/3 aspect-[1/1.5] content-center">
						<MaskImage src="https://d2prwyp3rwi40.cloudfront.net/home/assets/KeyMetrics-EditedVersion.png" />
					</div>
					{/* Right text */}
					<div className="grid grid-rows-2 md:w-1/3 justify-center gap-y-16">
						<div className="flex flex-col justify-start text-center gap-3 md:mt-10">
							<h4 className="text-ft-primary-yellow">
								<CountUp start={0} end={inView ? 7000 : 0} duration={5}>
									{({ countUpRef }) => (
										<span ref={countUpRef} className="text-6xl font-semibold" />
									)}
								</CountUp>
								+
							</h4>

							<h5 className="text-ft-primary-blue">Social Media Followings</h5>
							<p>
								A testament to FinTech Club’s prominence in the RMIT Community
								and beyond!
							</p>
						</div>

						<div className="flex flex-col justify-start text-center gap-3">
							<h4 className="text-ft-primary-yellow">
								<CountUp start={0} end={inView ? 40 : 0} duration={5}>
									{({ countUpRef }) => (
										<span ref={countUpRef} className="text-6xl font-semibold" />
									)}
								</CountUp>
								+
							</h4>
							<h5 className="text-ft-primary-blue">
								Academic & Industry Partners
							</h5>
							<p>
								In broad industries such as Traditional FinTech, Web3 FinTech,
								Finance, Technology, Healthcare, Venture Capital, etc.
							</p>
						</div>
					</div>
				</section>
			)}
		</nav>
	);
};

export default IntroSection;
