"use client";
import { useEffect, useState } from "react";
import Countdown from "../components/Countdown";
import NavigationButton from "../components/NavigationButton";

export default function CountdownPage() {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isShortHeight, setIsShortHeight] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }

    const handleResize = () => {
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
      setIsShortHeight(window.innerHeight < 900);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    // Container for the whole section
    <div className="flex flex-col">
      {/* Hero Section with Yellow background */}
      <div
        className="relative flex flex-col items-center justify-center rounded-b-[80px]"
        style={{
          minHeight: `calc(100vh - ${navbarHeight}px)`,
          backgroundColor: "#DBB968",
          backgroundImage: "url('/joinUsPage/background-pattern.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          className={`text-4xl md:text-5xl lg:text-7xl font-bold text-center text-[white] px-2 mb-8 z-10 ${
            isShortHeight ? "mt-8" : ""
          }`}
        >
          COUNT DOWN TO FORM CLOSED
        </h1>
        <div className={`${isShortHeight ? "mb-8" : ""}`}>
          <Countdown date={new Date(2025, 10, 14)} />
        </div>

        {/*  change svg here nhe  */}
        <img
          src="/joinUsPage/star1.svg"
          alt="Dot 4"
          className="absolute bottom-3/4 left-72 transform -translate-x-1/2 -translate-y-1/2 md:block hidden z-0"
        />
      </div>
      {/* Navigation Tabs section: scroll to the corresponding section with IDs */}
      <div className="flex flex-row self-center w-full md:w-2/3 lg:w-2/3">
        <NavigationButton text="MEMBER BENEFITS" link="#member-benefits" />
        <NavigationButton
          text="RECRUITMENT PROCESS"
          link="#recruitment-process"
        />
        <NavigationButton text="JOIN NOW!" link="#join-now" />
      </div>
    </div>
  );
}
