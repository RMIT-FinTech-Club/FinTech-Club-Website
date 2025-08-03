"use client";
import PartnersCircle from "@/components/home/PartnersCircle"
import PartnersDiv from "@/components/home/PartnersDiv"

function Partners() {
	return (
		<div className="h-[100dvh] relative flex items-center">
			<PartnersCircle />
			<PartnersDiv />
		</div>
	);
}

export default Partners;
