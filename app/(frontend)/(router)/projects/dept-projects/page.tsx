"use client";
import DepartmentAccordionClient from "./components/DepartmentAccordionClient";
import ProjectCarousel from "./components/ProjectCarousel";
import type { DeptItemBase } from "./components/types";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600", "800"] });

export default function DeptProjects() {

    const commonSection = (label: string, para: React.ReactNode) => (
        <section className="w-full space-y-4">
            <div className="mt-4 w-full max-w-[1100px] md:max-lg:max-w-[880px] md:max-lg:pr-16">
            <h1 className={`${poppins.className} leading-[1.1]
                            text-[clamp(1.5rem,2.2vw+1rem,2.5rem)]
                            md:max-lg:text-[clamp(1.25rem,1.1vw+0.9rem,1.9rem)]
                            lg:text-[clamp(1.75rem,2vw+1rem,2.75rem)]`}>
                <span className="font-normal text-[#0B0B0B]">Visit </span>
                <span className="font-extrabold tracking-wide text-[#DBB968]">{label}</span>
                <span className="font-normal text-[#0B0B0B]"> department</span>
            </h1>

            <h2 className={`${poppins.className} block w-fit ml-auto text-right font-bold text-[#2C305F] leading-tight
                            text-[clamp(1.5rem,2.2vw+1rem,2.5rem)]
                            md:max-lg:text-[clamp(1.25rem,1.1vw+0.9rem,1.9rem)]
                            lg:text-[clamp(1.75rem,2vw+1rem,2.75rem)]`}>
                Ongoing Projects
            </h2>

            {/* dept description paragraph */}
            <div className="clamp-4 md:clamp-6 lg:clamp-8 md:text-base md:max-lg:py-4 lg:py-7
                            md:max-lg:text-sm md:max-lg:leading-[1.5] lg:text-base lg:leading-7
                            break-words hyphens-auto">
                {para}
            </div>

            <div className="p-5 md:max-lg:p-4">
                <ProjectCarousel
                items={[
                    { id: 1, title: "Fintech Club Website", imageUrl: "https://media.istockphoto.com/id/465257035/photo/small-orange-kitten-lie-on-the-bed.jpg?s=612x612&w=0&k=20&c=p3Br3Jby5H-MOk9tSt0lEloX3JpM2bdEZ_b7egqxDV4=", description:"Comprehensive business workshops for students and professionals" },
                    { id: 2, title: "Fintech Club Website", imageUrl: "/images/projects/fintech-web-2.jpg", description:"Comprehensive business workshops for students and professionals" },
                    { id: 3, title: "Another Project", imageUrl: "/images/projects/another.jpg", description:"Comprehensive business workshops for students and professionals" },
                    { id: 4, title: "Mobile App Revamp", imageUrl: "/images/projects/app.jpg", description:"Comprehensive business workshops for students and professionals" },
                ]}
                />
            </div>
            </div>
        </section>
    );

    const items = [
        {
            value: "technology",
            label: "TECHNOLOGY",
            color: "bg-[#DBB968]",
            renderContent: ({ label }: DeptItemBase) =>
            commonSection(
                label,
                <p>
                    commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            ),
        },
        {
            value: "business",
            label: "BUSINESS",
            color: "bg-[#2C305F]",
            renderContent: ({ label }: DeptItemBase) =>
            commonSection(
                label,
                <p>
                    commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            ),
        },
        {
            value: "marketing",
            label: "MARKETING",
            color: "bg-[#DBB968]",
            renderContent: ({ label }: DeptItemBase) =>
            commonSection(
                label,
                <p>
                    commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            ),
        },
        {
            value: "human-resources",
            label: "HUMAN RESOURCES",
            color: "bg-[#2C305F]",
            renderContent: ({ label }: DeptItemBase) =>
            commonSection(
                label,
                <p>
                    commodo consequat.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            ),
        },
    ];

    return <DepartmentAccordionClient items={items} defaultOpen="technology" />;
}