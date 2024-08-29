'use client'
import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";
import ReactCountdown from "react-countdown";
import type { CountdownProps, CountdownRendererFn } from "react-countdown";

const StaticCard = ({
	position,
	unit
}: {
	position: "upper" | "lower";
	unit: number | string;
}) => {
	if (position === "upper") {
		return (
			<Flex
				pos="relative"
				justifyContent="center"
				w="100%"
				h="50%"
				overflow="hidden"
				alignItems="flex-end"
				borderTopRadius={18.51}
				borderBottom="4.12px solid #F7D27F"
				bgColor="#F9FAFB"
			>
				<Text
					fontSize={"200px"}
					fontWeight="normal"
					transform="translateY(50%)"
					color="#DBB968"
				>
					{unit}
				</Text>
			</Flex>
		);
	}

	return (
		<Flex
			pos="relative"
			justifyContent="center"
			w="100%"
			h="50%"
			overflow="hidden"
			alignItems="flex-start"
			bgColor="#F9FAFB"
			borderBottomRadius={18.51}
			borderTop="4.12px solid #F7D27F"
		>
			<Text
				fontSize={"200px"}
				fontWeight="semibold"
				transform="translateY(-50%)"
				color="#DBB968"
			>
				{unit}
			</Text>
		</Flex>
	);
};

const MotionFlex = motion(Flex);

const UpperAnimatedCard = memo(
	({
		current,
		previous
	}: {
		current: number | string;
		previous: number | string;
	}) => {
		const [displayUnit, setDisplayUnit] = useState(previous);
		const controls = useAnimationControls();

		useEffect(() => {
			controls.start({
				rotateX: [0, -180],
				transition: { duration: 0.9, ease: "easeInOut" }
			});
			setDisplayUnit(previous);
		}, [previous]);

		return (
			<MotionFlex
				id="upper-animated-card"
				animate={controls}
				justifyContent="center"
				pos="absolute"
				w="100%"
				h="50%"
				overflow="hidden"
				sx={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
				top={0}
				alignItems="flex-end"
				transformOrigin="50% 100%"
				transform="rotateX(0deg)"
				bgColor="#F9FAFB"
				borderTopRadius={18.51}
				borderBottom="4.12px solid #F7D27F"
				onAnimationComplete={() => {
					setDisplayUnit(current);
					controls.set({ rotateX: 0 });
				}}
			>
				<Text
					fontSize={"200px"}
					fontWeight="semibold"
					transform="translateY(50%)"
					color="#DBB968"
				>
					{displayUnit}
				</Text>
			</MotionFlex>
		);
	}
);

const BottomAnimatedCard = ({ unit }: { unit: number | string }) => {
	const [displayUnit, setDisplayUnit] = useState(unit);
	const controls = useAnimationControls();

	useEffect(() => {
		controls.start({
			rotateX: [180, 0],
			transition: { duration: 0.9, ease: "easeInOut" }
		});
		setDisplayUnit(unit);
	}, [unit]);

	return (
		<MotionFlex
			id="animated-card"
			animate={controls}
			justifyContent="center"
			pos="absolute"
			left={0}
			w="100%"
			h="50%"
			overflow="hidden"
			sx={{ backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}
			top="50%"
			alignItems="flex-start"
			transformOrigin="50% 0%"
			transform="rotateX(180deg)"
			bgColor="#F9FAFB"
			borderBottomRadius={18.51}
			borderTop="4.12px solid #F7D27F"
		>
			<Text
				fontSize={"200px"}
				fontWeight="semibold"
				transform="translateY(-50%)"
				color="#DBB968"
			>
				{displayUnit}
			</Text>
		</MotionFlex>
	);
};

const FlipContainer = ({
	number,
	title
}: {
	number: number;
	title: "days" | "hours" | "mins" | "secs";
}) => {
	const { current, previous } = useMemo(() => {
		const currentDigit = number;
		const previousDigit = number + 1;

		const current =
			currentDigit < 10
				? `0${currentDigit}`
				: (title === "secs" || title === "mins") && currentDigit === 60
					? "00"
					: currentDigit;
		const previous =
			previousDigit < 10
				? `0${previousDigit}`
				: (title === "secs" || title === "mins") && previousDigit === 60
					? "00"
					: previousDigit;

		return { current, previous };
	}, [number]);

	return (
		<Box>
			<Box
				display="block"
				pos="relative"
				w="327.22px"
				h="264.67px"
				bgColor="#12161C"
				rounded="18.51px"
				sx={{ perspective: "800px", perspectiveOrigin: "50% 50%" }}
			>
				<StaticCard position="upper" unit={current} />
				<StaticCard position="lower" unit={previous} />
				<UpperAnimatedCard current={current} previous={previous} />
				<BottomAnimatedCard unit={current} />
			</Box>

			{/* Text */}
			<Center py={20}>
				<Text
					fontSize={"47.61px"}
					fontWeight="light"
					textTransform="uppercase"
					color="white"
				>
					{title}
				</Text>
			</Center>
		</Box>
	);
};

const renderer: CountdownRendererFn = ({
	hours,
	minutes,
	seconds,
	completed,
	days
}:
	{
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
		completed: boolean;
	}

) => {
	if (completed) return null;
	return (
		<Center>
			<HStack align="center" spacing={50}>
				<FlipContainer number={days} title="days" />
				<FlipContainer number={hours} title="hours" />
				<FlipContainer number={minutes} title="mins" />
				<FlipContainer number={seconds} title="secs" />
			</HStack>
		</Center>
	);
};

export default function Countdown({ date }: Pick<CountdownProps, "date">) {
	return <ReactCountdown date={date} renderer={renderer} />;
};
