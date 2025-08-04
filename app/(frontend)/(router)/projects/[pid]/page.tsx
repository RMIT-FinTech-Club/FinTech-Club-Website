"use client";

import { useState } from "react";
import { Button, Chip } from "@heroui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@heroui/react";
import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";
import Hero from "./_components/hero";

export default function ProjectDetail() {
  const [openAccordion, setOpenAccordion] = useState<string>("development");

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? "" : section);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
			<Hero />
      
      {/* Goals Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Goals
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Develop a fun and engaging web-based 2D chess game
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Create a user-friendly NFT marketplace within the game for
                  collecting and trading
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Showcase Vietnamese history through visually stunning 2D NFT
                  skins and compelling in-game elements
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Build a community around the game, fostering interest in
                  Vietnamese history and culture
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">
                  Utilize blockchain technology for verifiable ownership,
                  scarcity, and secure trading of NFTs
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="bg-[#D8B35A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Scope
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-[#F3F2F9] p-6 rounded-2xl">
              <span className="text-gray-900 font-medium">
                Vietnamese History Integration
              </span>
            </div>
            <div className="bg-[#4A407D] p-6 rounded-2xl">
              <span className="text-white font-medium">
                NFT and Blockchain Integration
              </span>
            </div>
            <div className="bg-[#312A5E] p-6 rounded-2xl">
              <span className="text-white font-medium">Core Game Features</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Team Structure
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                {/* <Image
                  alt="heroui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                /> */}
                <div className="flex flex-col">
                  <p className="text-md">HeroUI</p>
                  <p className="text-small text-default-500">heroui.com</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <p>
                  Make beautiful websites regardless of your design experience.
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/heroui-inc/heroui"
                >
                  Visit source code on GitHub.
                </Link>
              </CardFooter>
            </Card>

            {/* Accordion */}
            <div className="space-y-4">
              <Accordion selectionMode="multiple">
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Accordion 1"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Accordion 2"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </AccordionItem>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Accordion 3"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Central line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gray-300"></div>

              <div className="space-y-16">
                {/* Event 1 - Right */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <span className="inline-block bg-[#D8B35A] text-black px-4 py-2 rounded-lg text-sm font-medium mb-4">
                      January 1st, 2025
                    </span>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#4A407D] rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <Card className="bg-[#F3F2F9] border-none">
                      <CardBody className="p-6">
                        <h3 className="font-bold text-gray-900 mb-2">
                          An Event Here
                        </h3>
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                      </CardBody>
                    </Card>
                  </div>
                </div>

                {/* Event 2 - Left */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8">
                    <Card className="bg-[#F3F2F9] border-none">
                      <CardBody className="p-6">
                        <h3 className="font-bold text-gray-900 mb-2">
                          An Event Here
                        </h3>
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#4A407D] rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8 text-left">
                    <span className="inline-block bg-[#D8B35A] text-black px-4 py-2 rounded-lg text-sm font-medium">
                      January 1st, 2025
                    </span>
                  </div>
                </div>

                {/* Event 3 - Right */}
                <div className="relative flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <span className="inline-block bg-[#D8B35A] text-black px-4 py-2 rounded-lg text-sm font-medium mb-4">
                      January 1st, 2025
                    </span>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#4A407D] rounded-full border-4 border-white"></div>
                  <div className="w-1/2 pl-8">
                    <Card className="bg-[#F3F2F9] border-none">
                      <CardBody className="p-6">
                        <h3 className="font-bold text-gray-900 mb-2">
                          An Event Here
                        </h3>
                        <div className="w-full h-20 bg-gray-200 rounded-lg"></div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
