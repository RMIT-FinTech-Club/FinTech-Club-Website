import { Button } from "@heroui/react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-screen bg-[#F9FAFB] lg:py-12 flex-col justify-start items-center p-side-margin-mobile md:p-20 gap-6 md:gap-12 flex">
      <div className=" justify-start items-center gap-6 md:gap-[60px] flex flex-col md:flex-row ">
        <div className="content w-full md:w-[45vw] h-full relative">
          <div className="absolute top-[2.5rem] right-[-1.5rem] w-[3rem] h-[3rem] bg-[#2C305F] rounded-full z-10"></div>
          <div className="absolute top-[-2.25rem] right-[-0.25rem] w-[3rem] h-[3rem] bg-[#C9D6EA] rounded-full z-20"></div>
          <div className="absolute top-[-1.5rem] right-[2.5rem] w-[3rem] h-[3rem] bg-[#DBB968] rounded-full z-10"></div>
          <div className="absolute top-[-1.5rem] right-[-2.5rem] w-[3rem] h-[3rem] bg-[#2C305F] rounded-full z-10"></div>
          <div className="absolute top-[2.25rem] right-[6rem] w-[1rem] h-[1rem] bg-[#DBB968] rounded-full z-10"></div>
          <div className="absolute top-[7.25rem] right-[-1.5rem] w-[1rem] h-[1rem] bg-[#2C305F] rounded-full z-10"></div>
          <h5 className="font-bold">What is</h5>
          <h4 className="text-[#000A64] font-[1000] uppercase mt-[0.75rem] mb-[1.25rem]">
            <span className="text-[#DCB968]">Fin</span>Tech Club ?
          </h4>

          <p className="leading-relaxed text-justify text-[1.5rem] md:text-[1.25rem]">
            We are the first ever student-led Financial Technology initiative in
            Vietnam. Founded in early 2020, RMIT FinTech Club aims to unite
            students across diverse degree programs and offer valuable insights
            into the dynamic realm of Financial Technology. Through a wide range
            of initiatives, we empower our members with the necessary skills,
            mindset, and confidence to engage in the fast-growing FinTech
            industry.
          </p>

          <div className="justify-start items-center gap-6 flex mt-8">
            <Button
              className="bg-[#DBB968] text-[#2C305F] w-[7rem] font-bold"
              variant="solid"
            >
              <Link href="/about-us">Read More</Link>
            </Button>
            <Button
              className="bg-ft-primary-blue text-ft-text-bright w-[7rem] font-bold"
              variant="solid"
            >
              <Link href="/join-us">Join Us</Link>
            </Button>
          </div>
        </div>
        <div className="w-full md:w-[40vw] rounded-xl relative flex flex-col items-center justify-center">
          <Image
            className="w-full object-cover rounded-3xl"
            src="https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png"
            alt="Placeholder image"
            fetchPriority="high"
            loading="eager"
            width={1000}
            height={1000}
            priority={true}
          />
          <div className="mt-4 flex flex-col justify-center w-full">
            <p className="text-[#2C305F] text-[1.5rem] font-bold">
              Our Core Activities
            </p>
            <div className="flex flex-row mt-2 justify-between items-center">
              <div className="bg-[#F8DA92] p-3 text-center w-[11vw] border-0 rounded-[2rem]">
                Projects
              </div>
              <div className="bg-[#F8DA92] p-3 text-center w-[11vw] border-0 rounded-[2rem]">
                Events
              </div>
              <div className="bg-[#F8DA92] p-3 text-center w-[11vw] border-0 rounded-[2rem]">
                Workshops
              </div>
            </div>

            <div className="flex flex-row mt-2 justify-center gap-4 items-center">
              <div className="bg-[#F8DA92] p-3 text-center w-[11vw] border-0 rounded-[2rem]">
                Competitions
              </div>
              <div className="bg-[#F8DA92] p-3 text-center w-[11vw] border-0 rounded-[2rem]">
                Training
              </div>
            </div>

            <div className="flex flex-row mt-2 justify-between items-center">
              <div className="bg-[#F8DA92] p-3 text-center w-[11vw] border-0 rounded-[2rem]">
                Networking
              </div>
              <div className="bg-[#F8DA92] p-3 text-center w-[11vw] border-0 rounded-[2rem]">
                Media
              </div>
              <div className="bg-[#F8DA92] p-3 text-center w-[11vw] border-0 rounded-[2rem]">
                Bonding
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col md:flex-row justify-between items-center flex w-full h-fit">
        <Image
          src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
          alt=""
          width={1000}
          height={200}
          fetchPriority="high"
          loading="eager"
          priority={true}
          className="relative rounded-xl object-cover w-[20vw]"
        />
        <Image
          src="https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-EOSTrip.png"
          alt=""
          width={1000}
          height={200}
          fetchPriority="high"
          loading="eager"
          priority={true}
          className="relative rounded-xl object-cover w-[27vw]"
        />
        <Image
          src="https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ClubDay.png"
          alt=""
          width={1000}
          height={200}
          fetchPriority="high"
          loading="eager"
          priority={true}
          className="relative rounded-xl object-cover w-[35vw]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
