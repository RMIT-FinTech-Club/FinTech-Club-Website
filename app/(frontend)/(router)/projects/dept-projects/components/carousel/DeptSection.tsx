import { Project } from "../types";
import { Poppins } from "next/font/google";
import ProjectCarousel from "../ProjectCarousel";

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
    <section className="w-full space-y-4">
      <div className="mt-4 w-full max-w-[1100px] md:max-lg:max-w-[880px] md:max-lg:pr-16">
        <h1
          className={`${poppins.className} leading-[1.1]
                      text-[clamp(1.5rem,2.2vw+1rem,2.5rem)]
                      md:max-lg:text-[clamp(1.25rem,1.1vw+0.9rem,1.9rem)]
                      lg:text-[clamp(1.75rem,2vw+1rem,2.75rem)]`}
        >
          <span className="font-normal text-[#0B0B0B]">Visit </span>
          <span className="font-extrabold tracking-wide text-[#DBB968]">{label}</span>
          <span className="font-normal text-[#0B0B0B]"> department</span>
        </h1>

        <h2
          className={`${poppins.className} block w-fit ml-auto text-right font-bold text-[#2C305F] leading-tight
                      text-[clamp(1.5rem,2.2vw+1rem,2.5rem)]
                      md:max-lg:text-[clamp(1.25rem,1.1vw+0.9rem,1.9rem)]
                      lg:text-[clamp(1.75rem,2vw+1rem,2.75rem)]`}
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
    </section>
  );
}