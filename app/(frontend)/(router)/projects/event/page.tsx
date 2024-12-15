"use client"
import fakeAPI from "./components/fakeAPI";
import EventHeader from "./components/EventHeader";
import EventContent from "./components/EventContent";
import EventSponsors from "./components/EventSponsors";
import EventTeam from "./components/EventTeam";

const Event = () => {
	return (
		<>
			<EventHeader />
			<EventContent sectionValue={fakeAPI.contentSection} />
			<EventSponsors sectionValue={fakeAPI.sponsorSection} />
			<EventTeam sectionValue={fakeAPI.teamSection} />
		</>
	);
};

export default Event;
