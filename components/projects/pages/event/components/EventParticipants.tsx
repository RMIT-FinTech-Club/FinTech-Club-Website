import type React from "react";
import { useRef } from "react";
import { motion, useInView as useInViewFramer } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Decor3 from "@/components/projects/projectDecorForms/Decor3";

interface EventParticipantsProps {
	sectionValue: {
		participants: {
			image: string;
			count: number;
			description: string;
			addOn?: string;
		}[];
	};
}

const EventParticipants: React.FC<EventParticipantsProps> = ({
	sectionValue,
}) => {
	const { participants } = sectionValue;

	const participantsRef = useRef(null);
	const isInView = useInViewFramer(participantsRef, {
		once: true,
		margin: "0px 0px -20% 0px",
	});

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={participantsRef}
			className="flex flex-col justify-center items-center px-[5vw] py-[5vw] relative"
			initial={{ opacity: 0, transform: "translateY(10%)" }}
			animate={isInView ? { opacity: 1, transform: "translateY(0)" } : {}}
			transition={{ duration: 1, ease: "easeInOut" }}
		>
			<Decor3 />
			<div className="md:text-[2vw] text-[5vw] md:tracking-[0.1vw] tracking-[0.2vw] text-deepBlue font-bold uppercase text-center mb-[5vw]">
				Some of Our <span className="text-gold">Participants</span>
			</div>
			<div
				ref={ref}
				className="flex justify-between items-center md:flex-row flex-col w-[80vw]"
			>
				{participants.map((participant, index) => {
					const { image, count, description, addOn } = participant;

					return (
						<div
							key={index}
							className="flex flex-col justify-center items-center bg-[#F6F7F9] py-[5vw] md:py-[2vw] w-full md:w-[18vw] rounded-[6vw] md:rounded-[1vw] my-[3vw] md:my-0"
						>
							<div
								className="w-1/3 bg-center bg-no-repeat bg-contain aspect-square"
								style={{ backgroundImage: `url(${image})` }}
							></div>
							<div className="text-deepBlue text-[13vw] md:text-[3vw] font-bold my-[8vw] md:my-[1vw]">
								<CountUp
									start={0}
									end={inView ? count : 0}
									duration={5}
								>
									{({ countUpRef }) => (
										<span ref={countUpRef} />
									)}
								</CountUp>
								<span className="uppercase">{addOn}</span>
							</div>
							<div className="text-midDeepBlue text-[7vw] md:text-[1.5vw] font-normal my-[1vw]">
								{description}
							</div>
						</div>
					);
				})}
			</div>
		</motion.div>
	);
};

export default EventParticipants;
