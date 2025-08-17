import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="h-[95vh]">
        <div className="w-full h-full flex gap-4 items-center">
          {/* Left Column */}
          <div className="w-[56%] h-full bg-ft-primary-blue-400 rounded-br-large flex flex-col justify-center px-32 text-ft-primary-blue-100">
            <div className="flex gap-3 mb-6">
              <Chip className="bg-ft-primary-blue-100">Label 1</Chip>
              <Chip className="bg-ft-primary-blue-100">Another Label</Chip>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold">Project Title</h1>
              <Chip className="bg-ft-primary-yellow-200">Ongoing</Chip>
            </div>

            <p className="text-white/90 text-lg mb-8 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex gap-4">
              <Button
                as={Link}
                href="/projects"
                className="bg-ft-primary-yellow-300 hover:bg-ft-primary-yellow-100/90 text-ft-primary-blue-500 rounded-lg px-6 w-fit text-md font-semibold"
              >
                Explore more
              </Button>

              <Button
                as={Link}
                href="/projects"
                className="bg-ft-primary-blue-100 hover:bg-ft-primary-blue-100/90 text-ft-primary-blue-500 rounded-lg px-6 w-fit text-md font-semibold"
              >
                Back to Projects
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between h-full flex-1 gap-4">
            <div className="h-[75%]">
              <Image
                src="/placeholder.svg"
                alt="Bear Mascot Illustration"
                width={500}
                height={500}
                className="w-full h-full object-contai rounded-bl-large"
              />
            </div>

            <div className="flex-1 bg-ft-primary-yellow-500 rounded-tl-large rounded-bl-large"></div>
          </div>
        </div>
      </section>
    </>
  );
}
