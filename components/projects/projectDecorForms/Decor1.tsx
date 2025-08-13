function Decor1() {
	const decorClasses =
		"absolute aspect-square rounded-[50%] hidden md:inline";

	return (
		<>
			<div
				style={{ animationDuration: "7s" }}
				className={`${decorClasses} bg-gold top-[70%] left-[-0.5vw] w-[1vw] moveUD`}
			></div>
			<div
				style={{ animationDuration: "10s" }}
				className={`${decorClasses} bg-midDeepBlue bottom-[10%] left-[2vw] w-[5vw] moveLR`}
			></div>
			<div
				style={{ animationDuration: "8s" }}
				className={`${decorClasses} bg-midDeepBlue bottom-[12%] left-[12%] border-solid border border-white w-[1vw] moveRL`}
			></div>
		</>
	);
}

export default Decor1;
