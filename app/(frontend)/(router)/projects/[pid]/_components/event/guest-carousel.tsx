"use client";

import { Button, Card, CardBody, CardFooter, cn, Link } from "@heroui/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const projectList = [
  { id: 1, title: "Project 1", image: "/placeholder.svg" },
  { id: 2, title: "Project 2", image: "/placeholder.svg" },
  { id: 3, title: "Project 3", image: "/placeholder.svg" },
  { id: 4, title: "Project 4", image: "/placeholder.svg" },
  { id: 5, title: "Project 5", image: "/placeholder.svg" },
  { id: 6, title: "Project 6", image: "/placeholder.svg" },
  { id: 7, title: "Project 7", image: "/placeholder.svg" },
  { id: 8, title: "Project 8", image: "/placeholder.svg" },
  { id: 9, title: "Project 9", image: "/placeholder.svg" },
  { id: 10, title: "Project 10", image: "/placeholder.svg" },
];

export default function GuestCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setActiveIndex(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const selectedIndex = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    setActiveIndex(index);
    api?.scrollTo(index);
  };

  return (
    <section className="py-16 bg-ft-primary-blue-100 mb-8">
      <div className="flex flex-col gap-4 items-center mx-auto w-[calc(100%-20rem)]">
        <Carousel
          setApi={setApi}
          opts={{
            // align: "center",
            loop: true,
            startIndex: 0,
          }}
          className="w-full space-y-2"
        >
          <div className="w-full flex justify-between px-8">
            <h3 className="inline-block text-2xl md:text-3xl font-bold text-neutral-900 text-left">
              Guest Speakers
            </h3>
            <div className="relative w-fit flex justify-center items-center gap-2">
              <CarouselPrevious className="border-none top-0 left-0 translate-0 relative" />
              <CarouselNext className="border-none top-0 right-0 translate-0 relative" />
            </div>
          </div>

          <CarouselContent className="-ml-2">
            {projectList.map((project, index) => {
              const isActive = index === activeIndex;
              return (
                <CarouselItem
                  key={project.id}
                  onClick={() => selectedIndex(index)}
                  className="md:basis-1/2 lg:basis-1/5 pl-2 pr-2"
                >
                  <div className="p-1">
                    <Card
                      className={`shadow-sm border-0 h-[300px]  ${
                        isActive ? "" : "scale-80 opacity-60"
                      }`}
                    >
                      <CardBody className="flex flex-col gap-2 aspect-square items-center p-0 h-[75%]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </CardBody>
                      <CardFooter className="flex flex-col items-start justify-center bg-ft-primary-blue-200 h-[25%] px-6">
                        <span>{project.title}</span>
                        <span>Project Description: {project.id}</span>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        {/* <div className="flex justify-center space-x-2">
          {projectList.map((_, index) => (
            <button
              key={index}
              onClick={() => selectedIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-500 hover:scale-110",
                activeIndex === index
                  ? "bg-ft-primary-yellow-800 scale-110 w-[30px]"
                  : "bg-ft-primary-yellow-400 hover:bg-ft-primary-yellow-800/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          as={Link}
          href="/library"
          className="max-w-fit bg-ft-primary-yellow-500 font-semibold"
        >
          Go to Library
        </Button> */}
      </div>
    </section>
  );
}
