import { Accordion, AccordionItem, Link } from "@heroui/react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import { Leader, Team } from "./types";

// --- Prop Types ---
type TeamStructureProps = {
  leader: Leader;
  teams: Team[];
};

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-.5-2-1.5-2s-1.5.6-1.5 2V19h-3v-9h3V11c.5-.75 1.5-1.5 2.5-1.5s2.5 1 2.5 3.5V19z" />
  </svg>
);

// --- Reusable Bullet Point List ---
const InfoList = ({ title, items }: { title: string; items: string[] }) => {
  if (!items || items.length === 0) {
    return null;
  }
  
  return (
    <div className="mb-4">
      <h4 className="font-bold text-lg text-gray-800 mb-2">{title}</h4>
      <ul className="space-y-2 list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function TeamStructure({
  leader,
  teams = [],
}: TeamStructureProps) {
  if (!leader || !teams || teams.length === 0) {
    return null;
  }
  
  return (
    <section className="py-4 md:pt-8">
      <div className="mx-auto px-20">
        <SectionTitle>Team Structure</SectionTitle>
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center flex flex-col items-center border-t-4 border-[#2C305F]">
            <Image
              src={leader.avatarUrl}
              alt="Project Leader Avatar"
              width={50}
              height={50}
              loading="lazy"
              className="w-24 h-24 mb-4 rounded-full"
            />
            <h3 className="text-2xl font-bold text-[#2C305F]">{leader.name}</h3>
            <p className="text-gray-500 font-medium mb-4">{leader.role}</p>
            <Link
              href={leader.linkedinUrl}
              isExternal
              className="inline-flex items-center gap-2 bg-[#2C305F] hover:bg-[#3e358a] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              <LinkedinIcon />
              LinkedIn Profile
            </Link>
          </div>

          <div className="col-span-2">
            <Accordion
              defaultExpandedKeys={[teams[0]?.role]}
              itemClasses={{
                base: "group rounded-xl !border-none mb-3",
                title: "text-white font-bold text-lg",
                trigger:
                  "p-4 bg-[#2C305F] rounded-xl hover:bg-[#3e358a] transition-colors",
                indicator: "text-2xl font-bold text-white",
                content: "bg-[#F3F2F9] rounded-b-xl p-6 pt-10 relative",
              }}
            >
              {teams.map((team) => (
                <AccordionItem
                  key={team.role}
                  aria-label={team.role}
                  title={team.role}
                >
                  <div className="absolute top-[-16px] right-6 bg-[#DBB968] text-[#2C305F] font-bold px-4 py-2 rounded-md shadow-lg">
                    Team Leader: {team.leader_name}
                  </div>

                  <InfoList
                    title="Responsibilities"
                    items={team.responsibilities || []}
                  />
                  <InfoList 
                    title="Skills" 
                    items={team.skills || []} 
                  />
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}