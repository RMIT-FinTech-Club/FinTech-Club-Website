import BondingActivities from "./components/bondingActivities";
import CountDown from "./countDown";
import RecruitmentProcess from "./recruitmentProcess";

const JoinUs = () => {
	return (
		<>
			{/* <CountDown />
			<RecruitmentProcess />
			<BondingActivities /> */}

			<div className="flex justify-center items-center h-screen bg-[#DCB968]">
				<CountDown date={new Date(2024, 10, 10)} />
			</div>

		</>
	);
};

export default JoinUs;
