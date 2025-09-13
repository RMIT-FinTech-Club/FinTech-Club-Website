"use client";

import React from "react";
import { useRef, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LabelSort from "./components/labelSort";
import ArticleCard from "./components/articleCard";
import { motion } from "framer-motion";
import PaginationRounded from "./components/pagination";
import Image from "next/image";

export default function ArticleLibrary() {
  const pRef = useRef<HTMLParagraphElement>(null);
  const [page, setPage] = useState(1); // Single page state

  const handleLabelSelect = (label: string) => {
    console.log("Selected label:", label);
    // TODO: Call API based on selected label
  };

  const handleBreadcrumbClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    console.info("You clicked a breadcrumb.");
  };

  const articles = [
    {
      imageSrc:
        "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Article 1",
      labels: ["Finance", "Tech"],
      title: "Article Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 1st, 2025",
    },
    {
      imageSrc:
        "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Article 2",
      labels: ["Finance", "Tech"],
      title: "Article Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 2nd, 2025",
    },
    {
      imageSrc:
        "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Article 3",
      labels: ["Finance", "Tech"],
      title: "Article Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 3rd, 2025",
    },
    {
      imageSrc:
        "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Article 4",
      labels: ["Finance", "Tech"],
      title: "Article Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 4th, 2025",
    },
    {
      imageSrc:
        "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Article 5",
      labels: ["Finance", "Tech"],
      title: "Article Title 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 5th, 2025",
    },
    {
      imageSrc:
        "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Article 6",
      labels: ["Finance", "Tech"],
      title: "Article Title 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 5th, 2025",
    },
    {
      imageSrc:
        "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Article 7",
      labels: ["Finance", "Tech"],
      title: "Article Title 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 5th, 2025",
    },
  ];

  const itemsPerPage = 5; // Show 5 cards per page
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Determine which cards to render based on page
  const getVisibleCards = () => {
    const startIndex = (page - 1) * itemsPerPage;
    return articles.filter(
      (_, index) => index >= startIndex && index < startIndex + itemsPerPage
    );
  };

  const visibleCards = getVisibleCards();
  return (
    <section>
      <div
        className="w-screen h-[92vh] flex items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #474A6E, #DBB968)",
        }}
      >
        <div className="absolute w-screen h-screen z-10">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/media/article/BiWeeklyArticle-LandscapePoster.png"
            alt="Bi-Weekly Article Poster"
            width={1000}
            height={200}
            fetchPriority="high"
            loading="eager"
            priority={true}
            className="w-full h-full opacity-25"
          />
        </div>
        <div className="absolute w-screen h-screen top-[-12vh] left-[2vw] z-20">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/media/YellowStars.png"
            alt="Yellow Stars"
            width={1000}
            height={200}
            loading="lazy"
            className="w-full"
          />
        </div>

        <div className="flex flex-col items-center justify-center z-10 mt-[17vh]">
          <h1 className="text-5xl font-bold text-[9vh] text-center text-[#2C305F] drop-shadow-[1.5px_1.5px_0_#DCB968]">
            Bi-weekly Article
          </h1>
          <p className="leading-6 font-semibold text-base text-white w-[50vw] text-justify py-6">
            Welcome to the Bi-weekly Article Series, where curiosity meets
            analysis at the intersection of finance and technology. Our
            articles, crafted by dedicated members of the FinTech Club, blend
            academic depth with real-world relevance, providing you with
            rigorously researched insights into emerging industry trends
            alongside pivotal global economic events. Explore our latest work
            and discover what’s truly shaping the industry today.
          </p>
          <div
            className="w-fit h-fit rounded-md p-[2px] mt-[1.5rem] "
            style={{
              background: "linear-gradient(to top, #474A6E, #DBB968)",
            }}
          >
            <a href="/media">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
                className="bg-ft-primary-blue-300 text-bluePrimary font-semibold px-4 py-2 rounded-md hover:bg-yellowCream"
              >
                Back to Media
              </motion.button>
            </a>
          </div>
        </div>
      </div>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon fontSize="small" sx={{ color: "#A28436" }} />
        }
        sx={{
          color: "#000000",
          "& .MuiBreadcrumbs-separator": { mx: 0.5 },
        }}
        className="w-full py-8 pl-16"
      >
        <MuiLink
          underline="hover"
          sx={{
            color: "#000000",
            "&:hover": { color: "#A28436" },
          }}
          component={Link}
          href="/media"
          onClick={handleBreadcrumbClick}
        >
          Media
        </MuiLink>
        <MuiLink
          underline="hover"
          sx={{
            color: "#000000",
            "&:hover": { color: "#A28436" },
          }}
          component={Link}
          href="/media/article"
          onClick={handleBreadcrumbClick}
        >
          Article Library
        </MuiLink>
      </Breadcrumbs>
      <div className="relative pb-4 pl-24">
        <LabelSort onSelect={handleLabelSelect} />
      </div>
      <div className="py-6 px-24">
        {visibleCards.map((article, index) => (
          <ArticleCard
            key={index}
            imageSrc={article.imageSrc}
            imageAlt={article.imageAlt}
            labels={article.labels}
            title={article.title}
            description={article.description}
            date={article.date}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <PaginationRounded
          page={page}
          onPageChange={setPage}
          count={totalPages}
        />
      </div>
    </section>
  );
}
