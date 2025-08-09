"use client";
import { useState } from "react";
import VerticalAccordionItem from "./dept-projects/VerticalAccordionItem";
import { BusinessContent } from "./dept-projects/DeptContent";
import VerticalTabTitle from "./dept-projects/VerticleTabTitle";

const contentData = [
	{ title: "Technology", content: <BusinessContent /> },
	{ title: "Business", content: <BusinessContent /> },
	{ title: "Marketing", content: <BusinessContent /> },
	{ title: "Human Resources", content: <BusinessContent /> },
];

export default function Projects() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const [itemHeights, setItemHeights] = useState<number[]>(
		Array(contentData.length).fill(0)
	);

	const maxHeight = Math.max(...itemHeights, 0);
	const reportHeight = (idx: number) => (h: number) =>
		setItemHeights(prev => (prev[idx] === h ? prev : Object.assign([...prev], { [idx]: h })));

	const getAccordionColor = (index: number) =>
		index % 2 === 0
		? { backgroundColor: "#DBB968", borderColor: "#DBB968" }
		: { backgroundColor: "#2C305F", borderColor: "#2C305F" };

	return (
		<div className="flex flex-col md:flex-row p-6 bg-gray-100 min-h-0">
		{contentData.map((item, i) => {
			const isOpen = openIndex === i;
			const { backgroundColor, borderColor } = getAccordionColor(i);
			return (
				<VerticalAccordionItem
					key={i}
					title={<VerticalTabTitle text={item.title} />}
					content={item.content}
					isOpen={isOpen}
					onToggle={() => setOpenIndex(isOpen ? null : i)}
					backgroundColor={backgroundColor}
					borderColor={borderColor}
					targetHeight={maxHeight || undefined}
					onContentHeight={reportHeight(i)}
				/>
			);
		})}
		</div>
	);
}