"use client";
import React from "react";

import fakeAPI from "@/components/projects/fakeAPI/eventAPI";
import EventHeader from "./components/EventHeader";
import EventContent from "./components/EventContent";
import EventSponsors from "./components/EventSponsors";
import EventTeam from "./components/EventTeam";
import EventParticipants from "./components/EventParticipants";
import EventGallery from "./components/EventGallery";

const EventProject: React.FC = () => {
  return (
    <>
      <EventHeader />
      <EventContent sectionValue={fakeAPI.contentSection} />
      <EventSponsors sectionValue={fakeAPI.sponsorSection} />
      <EventTeam sectionValue={fakeAPI.teamSection} />
      <EventParticipants sectionValue={fakeAPI.participantsSection} />
      <EventGallery sectionValue={fakeAPI.gallerySection} />
    </>
  );
};

export default EventProject;
