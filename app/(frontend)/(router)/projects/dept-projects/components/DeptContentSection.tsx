import { Project } from "./types";
import { Poppins } from "next/font/google";
import ProjectCarousel from "./ProjectCarousel";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "600", "800"] });

export default function DeptSection({
  label,
  description,
  items,
}: {
  label: string;
  description: React.ReactNode;
  items: Project[];
}) {
  return (
    <section className="w-[73.3vw] space-y-4">
      <div className="relative mt-4 w-full">
        {/* Circles as background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {
            label === "HUMAN RESOURCES"
            ? (<div></div>)
            : (
              <div>
                {/* Large light blue circle */}
                <div className="absolute top-[-1.5rem] right-10 w-12 h-12 hidden lg:block bg-[#C9D6EA] rounded-full"></div>
                {/* Large dark blue circle */}
                <div className="absolute top-0 right-3 w-12 h-12 hidden lg:block bg-[#2C305F] rounded-full"></div>
                {/* Large gold circle */}
                <div className="absolute top-8 right-16 w-12 h-12 hidden lg:block bg-[#DBB968] rounded-full"></div>
                {/* Small gold circle */}
                <div className="absolute top-16 right-10 w-3 h-3 hidden lg:block bg-[#DBB968] rounded-full"></div>
                {/* Small dark blue circle */}
                <div className="absolute top-5 right-[-1rem] w-2 h-2 hidden lg:block bg-[#2C305F] rounded-full"></div>
              </div>
            )
          }
          
          {
            label === "HUMAN RESOURCES"
            ? (
              <div
                className="bg-[#2C305F] h-12 w-56 my-6 absolute hidden lg:block 
                          lg:top-44 [@media(min-width:1160px)]:top-44 [@media(min-width:1253px)]:top-32"
                style={{
                  clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)"
                }}
              ></div>
            )
            : (
              <div
                className="bg-[#2C305F] h-12 w-56 my-6 absolute hidden lg:block 
                          lg:top-48 [@media(min-width:1160px)]:top-32"
                style={{
                  clipPath: "polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)"
                }}
              ></div>
          )}
        </div>

        <div className="relative w-full min-h-[6rem]">
          <div className="relative z-10">
            <h1
              className={
                label === "HUMAN RESOURCES"
                  ? `${poppins.className} leading-[1.1] text-5xl`
                  : `${poppins.className} leading-[1.1] text-4xl md:text-5xl lg:text-6xl`
              }
            >
              <span className="font-normal text-[#0B0B0B]">Visit </span>
              <span className="font-extrabold tracking-wide text-[#DBB968]">
                {label}
              </span>
              <span className="font-normal text-[#0B0B0B]"> department</span>
            </h1>

            <h2
              className={`${poppins.className} block w-fit ml-auto text-right font-bold text-[#2C305F] leading-tight text-3xl md:text-4xl lg:text-5xl`}
            >
              Ongoing Projects
            </h2>

            <div
              className="clamp-4 md:clamp-6 lg:clamp-8 md:text-base md:max-lg:py-4 lg:py-7
                       md:max-lg:text-sm md:max-lg:leading-[1.5] lg:text-base lg:leading-7
                       break-words hyphens-auto"
            >
              {description}
            </div>

            <div className="p-5 md:max-lg:p-4">
              <ProjectCarousel items={items} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}