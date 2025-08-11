"use client";

import { Button } from "@heroui/react";
import { useState, useEffect, useRef } from "react";

type DepartmentDataProps = {
  labels: string[];
  title: string;
  content: string;
  link: string;
  image: string;
};

const departmentData: DepartmentDataProps[] = [
  {
    labels: ["Fintech", "Innovation"],
    title: "Digital Banking Platform",
    content:
      "Revolutionary banking solution that transforms traditional financial services with cutting-edge technology and user-centric design. Our platform integrates advanced security measures with intuitive user interfaces to provide seamless financial experiences for modern consumers.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=1468&auto=format&fit=crop",
  },
  {
    labels: ["AI/ML"],
    title: "Smart Analytics Engine",
    content:
      "Advanced machine learning platform that provides real-time insights and predictive analytics for business optimization. Harness the power of artificial intelligence to make data-driven decisions and stay ahead of market trends with our comprehensive analytics suite.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    labels: ["Blockchain", "Web3", "DeFi"],
    title: "Decentralized Trading System",
    content:
      "Next-generation blockchain infrastructure enabling secure, transparent, and efficient peer-to-peer transactions. Built on cutting-edge distributed ledger technology, our platform ensures maximum security while maintaining optimal performance and scalability.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
  },
];

const OngoingProjects = ({
  projects = departmentData,
}: {
  projects?: DepartmentDataProps[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const lastInteractionRef = useRef(Date.now());
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentProject = projects[currentIndex];
  const nextProject = projects.length
    ? projects[(currentIndex + 1) % projects.length]
    : null;

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  // Function to go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Reset inactivity timer
  const registerInteraction = () => {
    lastInteractionRef.current = Date.now();
    setIsAutoPlaying(false); // stop autoplay if running
  };

  // Watch for inactivity to trigger autoplay
  useEffect(() => {
    const checkInactivity = setInterval(() => {
      const now = Date.now();
      if (now - lastInteractionRef.current > 10000) {
        // 30 seconds inactivity
        setIsAutoPlaying(true);
      }
    }, 1000);

    return () => clearInterval(checkInactivity);
  }, []);

  // Handle auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayIntervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // every 5 seconds
    } else if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[calc(100vh-3rem)]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat duration-700 ease-in-out"
          style={{ backgroundImage: `url(${currentProject.image})` }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, 
                rgba(64, 68, 114, 0.75) 0%,
                rgba(49, 53, 104, 0.81) 12.5%,
                rgba(37, 41, 95, 0.86) 25%,
                rgba(16, 21, 79, 0.94) 37.5%,
                rgba(8, 13, 73, 0.97) 50%,
                rgba(0, 5, 67, 1) 62.5%,
                rgba(0, 5, 67, 1) 75%,
                rgba(110, 95, 86, 0.95) 87.5%,
                rgba(220, 185, 104, 0.9) 100%
              )`,
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="pt-[5rem] h-[calc(100vh-3rem)] relative z-10 flex items-center justify-center px-[5rem]">
          {/* Left */}
          <div className="relative flex-1 max-w-xl text-white">
            <div className="absolute top-[-4rem] px-[0.8rem] py-[0.5rem] text-[#2C305F] font-semibold bg-[#F0EDFF] rounded-tl-md rounded-tr-[5rem] rounded-br-[5rem] rounded-bl-md">On-going Projects</div>

            <div className="flex flex-wrap gap-2 mb-6">
              {currentProject.labels.map((label, index) => (
                <span
                  key={index}
                  className="bg-[#F7D27F] hover:bg-[#DCB968] text-black px-3 py-1 rounded text-sm font-medium"
                >
                  {label}
                </span>
              ))}
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {currentProject.title.toUpperCase()}
            </h2>

            <p className="text-base leading-relaxed mb-8 text-gray-100 text-justify w-[90%]">
              {currentProject.content}
            </p>

            {currentProject.link && (
              <Button
                onClick={registerInteraction}
                className="bg-[#DCB968] hover:bg-yellowEarth text-[#2C305F] text-[16px] py-3 font-semibold rounded-lg transition-colors"
                as="a"
                href={currentProject.link}
              >
                Explore More
              </Button>
            )}
          </div>

          {/* Right */}
          <div className="hidden lg:block flex-shrink-0">
            <div className="relative">
              <div className="w-[30rem] h-[22rem] rounded-[30px] bg-gradient-to-b from-[rgba(240,237,255,1)] to-[rgba(94,94,146,1)] z-0">
                <div
                  className="absolute inset-0 m-[10px] bg-cover bg-center bg-no-repeat rounded-3xl transition-all duration-700 ease-in-out z-10"
                  style={{ backgroundImage: `url(${currentProject.image})` }}
                ></div>
                <div
                  className="w-[16rem] h-[16rem] right-[-20rem] bottom-0 absolute ml-[10px] bg-cover bg-center bg-no-repeat rounded-3xl transition-all duration-700 ease-in-out z-10"
                  style={{
                    backgroundImage: `url(${nextProject!.image})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        {projects.length > 1 && (
          <Button
            isIconOnly
            size="sm"
            className="absolute mt-[5rem] right-[3.5rem] top-1/2 transform -translate-y-1/2 z-20 bg-[#EADDFF] text-[#000] backdrop-blur-sm hover:bg-white/20 hover:text-white border border-white/20"
            onClick={() => {
              nextSlide();
              registerInteraction();
            }}
            aria-label="Next project"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        )}

        {/* Dots */}
        {projects.length > 1 && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    goToSlide(index);
                    registerInteraction();
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#DCB968] scale-125 shadow-lg"
                      : "bg-[#FFFFFF] hover:bg-white/60 border border-white/30"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Counter */}
        <div className="absolute top-8 right-8 z-20 bg-black/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm border border-white/20 flex items-center gap-2">
          {currentIndex + 1} / {projects.length}
          {isAutoPlaying && (
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs">AUTO</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
