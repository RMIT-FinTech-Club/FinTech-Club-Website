"use client";
import React, { useState } from "react";
import { Button } from "@heroui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Department = "Technology" | "Business" | "Marketing" | "HumanResources";

type DepartmentInfo = {
  name: string;
  button: string;
  description: string;
  background: string;
};

const departments: Record<Department, DepartmentInfo> = {
  Technology: {
    name: "TECHNOLOGY DEPARTMENT",
    button: "Technology",
    description:
      "With an unquenchable thirst for coding, fixing bugs, the Technology Department represents the second pillar of our organization. We are responsible for the development of the club’s technical projects, including the SnapID Computer Vision Project, RBPC Website, and currently the FinTech Club Website Project. Beyond practical coding projects, we also provide internal training & sharing sessions, public workshops, mentoring initiatives, and memorable bonding activities for Tech Dept. members. Our members receive the full package of skill improvement, industry connections, and a belonging environment.",
    background:
      "https://d2prwyp3rwi40.cloudfront.net/home/department-mascot/Technology.png",
  },
  Business: {
    name: "BUSINESS DEPARTMENT",
    button: "Business",
    description:
      "The Business Department is regarded as the cornerstone of FinTech Club’s unequivocal success and rapid development. This curiosity-driven Dept. is actively involved in researching, brainstorming and collaborating with others to generate academic values, operation frameworks and awesome activities related to the Finance, Business and Technology space. More specifically, Business members are involved in curating internal skill training, knowledge workshops, and composing well-researched articles on Financial Technology news and trends to educate members, and further engage the external community to our core disciplines!",
    background:
      "https://d2prwyp3rwi40.cloudfront.net/home/department-mascot/Business.png",
  },
  Marketing: {
    name: "MARKETING DEPARTMENT",
    button: "Marketing",
    description:
      "With a creative and expressive mindset, the Marketing Department is accountable for maintaining and spreading the digital presence of the club’s story and mission. Through various media projects, collaborative teams, adventurous campaigns, the Marketing Dept. never failed to disappoint in generating the most engaging and visually appealing content to hook the eyes of curious FinTech Club followers! So, you want to express yourself, unleash your creativity, unbound your imagination? Join the Marketing Dept. to help us bolster our club presence, and fulfill your creative interests!",
    background:
      "https://d2prwyp3rwi40.cloudfront.net/home/department-mascot/Marketing.png",
  },

  HumanResources: {
    name: "HUMAN RESOURCES DEPARTMENT",
    button: "Human Resources",
    description:
      "What is a club, without its people? Where would the club’s fun and desirability be, without its culture? That is where the Human Resources Department comes in. HR is in charge of organizing the club’s internal bonding activities, the FinTech Olympics, Newbies Orientation Day, End of Semester Award Ceremony, and the FinTech Field Trip – in addition to ensuring member well-being, safety and connection via the HR Committee. The HR Department consists of some of the kindest, most caring, most enthusiastic members in FTC. So, if you want to be a part of this lovely community, join the HR Dept.!",
    background:
      "https://d2prwyp3rwi40.cloudfront.net/home/department-mascot/Human+Resources.png",
  },
};

const Department = () => {
  const [department, setDepartment] = useState<DepartmentInfo>(
    departments.HumanResources
  );

  return (
    <div className="relative w-screen bg-[#F9FAFB] flex flex-row">
        {/*con gấu */}
        <div className="absolute w-[12rem] h-auto top-[-2rem] left-[-4.25rem] rotate-[109deg]">
          <img src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"></img>
        </div>
        <div className="h-full w-[70vw] bg-[#F9FAFB]">
        <section className="flex flex-col items-start pl-20 pt-[8.5rem] max-w-[50vw]">
          <p className="text-[#DCB968] font-bold text-5xl">BE ONE OF US</p>
          <p className={`font-bold mt-6 text-[#5E5E92] text-wrap text-4xl`}>
            {department.name}
          </p>
          <p className="mt-4 text-[1rem] leading-6 text-justify font-normal">
            {department.description}
          </p>
          <button className="text-[#F0EDFF] bg-[#5E5E92] rounded-xl w-fit px-6 py-2 mt-4 font-semibold drop-shadow-lg text-[1rem]">
            Explore more
          </button>
          <div className="mt-6 flex flex-row flex-wrap gap-4 justify-between">
            {(Object.keys(departments) as Department[]).map((dept) => {
              const department = departments[dept];
              return (
                <div
                  key={dept}
                  className="group p-[1px] rounded-[10px] bg-gradient-to-b from-[#F0EDFF] to-[#5E5E92]"
                >
                  <Button
                    onPress={() => setDepartment(department)}
                    className="w-[7.5rem] h-[4rem] rounded-[10px] text-[#0B0B3B] text-wrap font-semibold text-base bg-[#F0EDFF] group-hover:[background:linear-gradient(to_bottom,_#C9D6EA_0%,_#DBB968_58%)] transition-all duration-300"
                  >
                    {department.button.toUpperCase()}
                  </Button>
                </div>
              );
            })}
          </div>
        </section>
        </div>
      <div className="h-full w-[30vw] bg-[#2C305F]"></div>
    </div>
  );
};

export default Department;
