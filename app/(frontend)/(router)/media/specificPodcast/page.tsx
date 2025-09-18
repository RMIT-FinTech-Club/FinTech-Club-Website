"use client";

import React from "react";
// No need for useRef or useState for this basic implementation
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";
import Image from "next/image"; // Make sure Image is imported

export default function SpecificArticle() {
  const handleBreadcrumbClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    console.info("You clicked a breadcrumb.");
  };

  const podcastInfo = {
    title: "Podcast Title",
    date: "January 1st, 2025",
  };

  const guestSpeaker = {
    name: "Guest Speaker Name",
    description: "Brief Description",
    imageUrl:
      "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png",
  };

  const authors = [
    {
      id: 1,
      name: "Author Name",
      role: "Author Role",
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png",
    },
    {
      id: 2,
      name: "Author Name",
      role: "Author Role",
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png",
    },
    {
      id: 3,
      name: "Author Name",
      role: "Author Role",
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png",
    },
    {
      id: 4,
      name: "Author Name",
      role: "Author Role",
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png",
    },
  ];

  const relatedPodcasts = [
    {
      id: 1,
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png",
      title: "Podcast title",
      date: "January 1st, 2025",
      link: "/media/specificPodcast/1",
    },
    {
      id: 2,
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png",
      title: "Podcast title",
      date: "January 1st, 2025",
      link: "/media/specificPodcast/2",
    },
    {
      id: 3,
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png",
      title: "Podcast title",
      date: "January 1st, 2025",
      link: "/media/specificPodcast/3",
    },
  ];

  return (
    <section className="relative">
      <div
        className="w-screen h-[92vh] flex items-center justify-between px-16"
        style={{
          background: "linear-gradient(to bottom, #0D1742 62%, #DBB968 100%)",
        }}
      >
        <div className="absolute w-screen h-screen z-20 top-[0.1rem] left-[-0.1rem]">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/media/YellowStars-NoRope.png"
            alt="Yellow Stars"
            width={1000}
            height={200}
            loading="lazy"
            className="w-full"
          />
        </div>

        <div className="flex flex-col items-start justify-center z-10 mt-[10vh]">
          <div className="flex flex-grow gap-1 mb-4">
            <div className="p-2 rounded-lg mr-4 bg-ft-primary-yellow-200">
              Label
            </div>
            <div className="p-2 rounded-lg mr-4 bg-ft-primary-yellow-200">
              Another Label
            </div>
          </div>
          <h1 className="text-5xl font-bold text-[9vh] text-ft-text-bright">
            Podcast Title
          </h1>
          <p className="leading-6 font-medium text-base text-white w-[50vw] text-justify py-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div
            className="w-fit h-fit rounded-md p-[2px] mt-[0.5rem]"
            style={{
              background: "linear-gradient(to top, #474A6E, #DBB968)",
            }}
          >
            <a href="/media/podcast">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
                className="bg-ft-primary-blue-300 text-bluePrimary font-semibold px-4 py-2 rounded-md hover:bg-yellowCream"
              >
                Back to Podcast Library
              </motion.button>
            </a>
          </div>
        </div>
        <div className="mt-[10vh]">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png"
            alt="Podcast Graphic"
            width={1000}
            height={200}
            fetchPriority="high"
            loading="eager"
            priority={true}
            className="w-[30vw] h-auto rounded-lg"
          />
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
        className="w-full py-8 px-16"
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
          href="/media/podcast"
          onClick={handleBreadcrumbClick}
        >
          Podcast Library
        </MuiLink>
        <MuiLink
          underline="hover"
          sx={{
            color: "#000000",
            "&:hover": { color: "#A28436" },
          }}
          component={Link}
          href="/media/specificPodcast"
          onClick={handleBreadcrumbClick}
        >
          Podcast
        </MuiLink>
      </Breadcrumbs>

      <div className="flex justify-center pb-12 px-16 gap-8">
        {/* YouTube Video Section */}
        <div className="w-full max-w-4xl">
          {/* Responsive container for 16:9 aspect ratio */}
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/UioI68-0PHk?si=Fcr_F7XxqzfBiR50"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <h1 className="text-3xl mt-4 font-bold text-ft-primary-blue-50">
              {podcastInfo.title}
            </h1>
            <p className="text-ft-primary-blue-200 mt-2">
              <i>{podcastInfo.date}</i>
            </p>
          </div>

          {/* --- Guest Speaker Section --- */}
          <div className="flex items-center my-8">
            <div className="relative h-56 aspect-square rounded-tl-2xl rounded-bl-2xl overflow-hidden flex-shrink-0">
              <Image
                src={guestSpeaker.imageUrl}
                alt={guestSpeaker.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-ft-primary-blue-300 p-6 rounded-tr-2xl rounded-br-2xl h-56 w-full">
              <h3 className="font-bold text-xl text-ft-primary-blue-50">
                {guestSpeaker.name}
              </h3>
              <p className="text-[#000000] mt-1">{guestSpeaker.description}</p>
            </div>
          </div>

          {/* --- Authors Grid Section --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10">
            {authors.map((author) => (
              <div
                key={author.id}
                className="border-1 border-ft-primary-blue-50 border-solid rounded-2xl overflow-hidden shadow-lg bg-ft-background"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={author.imageUrl}
                    alt={author.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-bold text-ft-primary-blue-50">
                    {author.name}
                  </p>
                  <p className="text-sm text-[#000000]">{author.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="w-fit h-fit rounded-md p-[2px] mt-[2rem]"
            style={{
              background: "linear-gradient(to top, #474A6E, #DBB968)",
            }}
          >
            <a href="/media/article">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
                className="bg-ft-primary-blue-300 text-bluePrimary font-semibold px-4 py-2 rounded-md hover:bg-yellowCream"
              >
                Back to Podcast Library
              </motion.button>
            </a>
          </div>
        </div>

        {/* Right sidebar Related Podcasts */}
        <div className="w-full max-w-[17.75rem] flex flex-col gap-8">
          <div>
            <h2 className="text-3xl font-bold text-[#0D1742] mb-4">
              Related Podcasts
            </h2>
            <div className="flex flex-col gap-4">
              {relatedPodcasts.map((podcast) => (
                <Link
                  href={podcast.link}
                  key={podcast.id}
                  className="flex items-center bg-white rounded-2xl shadow-lg border border-[#0D1742] overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image Container */}
                  <div className="relative w-28 h-24 flex-shrink-0">
                    <Image
                      src={podcast.imageUrl}
                      alt={podcast.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="px-4">
                    <p className="font-bold text-[#000000] leading-tight">
                      {podcast.title}
                    </p>
                    <p className="text-sm text-[#000000]">{podcast.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-[-8.5rem] bottom-[20rem]">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
            alt="Mascot"
            width={200}
            height={500}
            loading="lazy"
            className="w-[25vw] h-auto -rotate-[35deg]"
          />
        </div>
      </div>
    </section>
  );
}
