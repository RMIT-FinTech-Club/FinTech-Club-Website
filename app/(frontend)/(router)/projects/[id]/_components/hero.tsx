import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  description: string;
  image_url: string;
  labels: string[];
  status: string;
};

export default function Hero({
  title,
  description,
  image_url,
  labels,
  status,
}: HeroProps) {
  return (
    <section className="h-[92vh]">
      <div className="w-full h-full flex gap-4 items-center">
        {/* Left Column */}
        <div className="w-[56%] h-full bg-ft-primary-blue-200 rounded-br-[2.5rem] flex flex-col justify-center px-20 text-ft-primary-blue-100">
          <div className="flex gap-3 mb-4">
            {labels.map((label) => (
              <Chip
                key={label}
                className="bg-ft-primary-blue-300 text-ft-text-dark"
              >
                {label}
              </Chip>
            ))}
          </div>

          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-ft-primary-blue-300">
              {title}
            </h1>
            <Chip className="bg-ft-primary-yellow-300 text-ft-primary-yellow-100">
              {status}
            </Chip>
          </div>

          <p className="text-ft-text-bright text-base mb-4 leading-relaxed text-justify">
            {description}
          </p>

          <div>
            <Button
              as={Link}
              href="/projects"
              className="bg-ft-primary-blue-300 hover:bg-ft-primary-blue-300/90 text-ft-text-dark rounded-lg px-6 w-fit text-md font-semibold"
            >
              Back to Projects
            </Button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between h-full flex-1 gap-4">
          <div className="h-[75%] relative">
            <Image
              src={image_url}
              alt={`${title} hero graphic`}
              fill
              className="w-full h-full object-fill rounded-bl-large"
              priority
            />
          </div>
          <div className="flex-1 bg-ft-primary-yellow rounded-tl-[2rem] rounded-bl-[2rem]"></div>
        </div>
      </div>
    </section>
  );
}