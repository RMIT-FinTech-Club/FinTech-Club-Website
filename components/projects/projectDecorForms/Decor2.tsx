function Decor2() {
	const decorClasses =
		"absolute aspect-square rounded-[50%] hidden md:inline";

	return (
		<>
			<div
				style={{ animationDuration: "10s" }}
				className={`${decorClasses} bg-gold top-[50%] right-[3vw] w-[1vw] moveDU`}
			></div>
			<div
				style={{ animationDuration: "13s" }}
				className={`${decorClasses} bg-midDeepBlue bottom-[10%] right-[2vw] w-[5vw] moveUD`}
			></div>
			<div
				style={{ animationDuration: "7s" }}
				className={`${decorClasses} bg-midDeepBlue bottom-[10%] right-[8%] w-[1vw] moveRL`}
			></div>
		</>
	);
}

export default Decor2;
