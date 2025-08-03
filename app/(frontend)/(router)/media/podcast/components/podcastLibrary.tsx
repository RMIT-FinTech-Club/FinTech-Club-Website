"use client"; // Mark as Client Component

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LabelSort from "./labelSort";
import PodcastCard from "./podcastCard"; 
import { motion } from "framer-motion";
import PaginationRounded from "./pagination";


export default function PodcastLibrary() {
  const pRef = useRef<HTMLParagraphElement>(null); 
  const [page, setPage] = useState(1); // Single page state

  const handleLabelSelect = (label: string) => {
    console.log("Selected label:", label);
    // TODO: Call API based on selected label
  };

  const handleBreadcrumbClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.info("You clicked a breadcrumb.");
    
  };

  // Define podcast data array
  const podcasts = [
    {
      imageSrc: "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Podcast 1",
      labels: ["Finance", "Tech"],
      title: "Podcast Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 1st, 2025",
    },
    {
      imageSrc: "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Podcast 2",
      labels: ["Finance", "Tech"],
      title: "Podcast Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 2nd, 2025",
    },
    {
      imageSrc: "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Podcast 3",
      labels: ["Finance", "Tech"],
      title: "Podcast Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 3rd, 2025",
    },
    {
      imageSrc: "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Podcast 4",
      labels: ["Finance", "Tech"],
      title: "Podcast Title 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 4th, 2025",
    },
    {
      imageSrc: "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Podcast 5",
      labels: ["Finance", "Tech"],
      title: "Podcast Title 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 5th, 2025",
    },
    {
      imageSrc: "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Podcast 6",
      labels: ["Finance", "Tech"],
      title: "Podcast Title 6",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 5th, 2025",
    },
    {
      imageSrc: "https://d2prwyp3rwi40.cloudfront.net/home/assets/IntroPhoto-ODay.png",
      imageAlt: "Podcast 7",
      labels: ["Finance", "Tech"],
      title: "Podcast Title 7",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "January 5th, 2025",
    },
  ];

  const itemsPerPage = 5; // Show 5 cards per page
  const totalPages = Math.ceil(podcasts.length / itemsPerPage);

  // Determine which cards to render based on page
  const getVisibleCards = () => {
    const startIndex = (page - 1) * itemsPerPage;
    return podcasts.filter((_, index) => index >= startIndex && index < startIndex + itemsPerPage);
  };

  const visibleCards = getVisibleCards();
  return (
    <section>
      <div className="w-screen h-screen bg-gradient-over-image bg-no-repeat bg-center flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-md p-6 rounded-lg text-white text-center space-y-4">
            <h1 className="text-4xl font-bold text-[9vh] text-[#DCB968] drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)] p-6">Fintechtainment</h1>
          <p className="leading-tight font-bold gap-10 text-base line-clamp-6 w-[85vh] text-left p-6 margin-bottom-6  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 1.1 }}
            className="bg-white text-bluePrimary px-4 py-2 rounded-md hover:bg-yellowCream"
          >
            Back to Media
          </motion.button>
        </div>
      </div>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" sx={{ color: "#0D1742" }} />}
        sx={{ color: "#2C305F", "& .MuiBreadcrumbs-separator": { mx: 0.5 } }}
        className="w-full p-8 pl-16"
      >
        <MuiLink
          underline="hover"
          sx={{
            color: "#2C305F", 
            "&:hover": { color: "#FFEFCA" }, 
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
            color: "#2C305F", 
            "&:hover": { color: "#FFEFCA" }, 
          }}
          component={Link}
          href="/media/podcast"
          onClick={handleBreadcrumbClick}
        >
          Podcast Library
        </MuiLink>
        <Typography sx={{ color: "white" }} aria-current="page">
          Podcast Library
        </Typography>
      </Breadcrumbs>
      <div className="relative p-6 left-24 text-xl">
        <LabelSort onSelect={handleLabelSelect} />
      </div>
      <div className="p-6">
{visibleCards.map((podcast, index) => (
          <PodcastCard
            key={index}
            imageSrc={podcast.imageSrc}
            imageAlt={podcast.imageAlt}
            labels={podcast.labels}
            title={podcast.title}
            description={podcast.description}
            date={podcast.date}
          />
        ))}
      </div>
     <div className="flex justify-center mt-8">
        <PaginationRounded page={page} onPageChange={setPage} count={totalPages} />
      </div>
    </section>
  );
}