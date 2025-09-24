"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LabelSort from "./components/labelSort";
import PodcastCard from "./components/podcastCard";
import { motion } from "framer-motion";
import PaginationRounded from "./components/pagination";
import Image from "next/image";
import axios from "axios";

// Interface for the raw podcast data from the API
interface ApiPodcast {
  _id: string;
  title: string;
  summary: string;
  thumbnail_url: string;
  labels: string[];
  publicationDate: string;
}

// Interface for the data structure your PodcastCard component needs
interface DisplayPodcast {
  _id: string;
  imageSrc: string;
  imageAlt: string;
  labels: string[];
  title: string;
  description: string;
  date: string;
}

// --- Helper functions for date formatting ---
const addOrdinalSuffix = (day: number): string => {
  if (day > 10 && day < 14) return `${day}th`;
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
};

const formatPodcastDate = (isoString: string): string => {
  const dateObj = new Date(isoString);
  const day = addOrdinalSuffix(dateObj.getDate());
  const month = dateObj.toLocaleString("en-US", { month: "long" });
  const year = dateObj.getFullYear();
  return `${month} ${day}, ${year}`;
};

export default function PodcastLibrary() {
  // --- UPDATED: State to manage the active tab to match new design ---
  const [activeTab, setActiveTab] = useState("podcast");

  // State for managing API data, loading, and errors
  const [podcasts, setPodcasts] = useState<DisplayPodcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // State for pagination and filtering
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  // State to hold all unique labels for the dropdown
  const [availableLabels, setAvailableLabels] = useState<string[]>([]);

  const itemsPerPage = 5;

  // Effect to fetch all unique labels once on component mount
  useEffect(() => {
    const fetchAllLabels = async () => {
      try {
        const response = await axios.get(`/api/v1/podcast?limit=100`);
        const allPodcasts: ApiPodcast[] = response.data.podcasts || [];
        const allLabelsFlat = allPodcasts.flatMap((podcast) => podcast.labels);
        const uniqueLabels = Array.from(new Set(allLabelsFlat)).sort();
        setAvailableLabels(["All", ...uniqueLabels]);
      } catch (err) {
        console.error("Failed to fetch unique labels:", err);
        setAvailableLabels(["All"]);
      }
    };
    fetchAllLabels();
  }, []);

  // Effect to fetch paginated/filtered podcasts when page or selectedLabel changes
  useEffect(() => {
    const fetchPodcasts = async () => {
      setLoading(true);
      setError("");
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: itemsPerPage.toString(),
        });
        if (selectedLabel && selectedLabel !== "All") {
          params.append("labels", selectedLabel);
        }
        const response = await axios.get(
          `/api/v1/podcast?${params.toString()}`
        );
        const {
          podcasts: fetchedPodcasts = [],
          totalPages: fetchedTotalPages = 1,
        } = response.data;
        const formattedPodcasts: DisplayPodcast[] = fetchedPodcasts.map(
          (podcast: ApiPodcast) => ({
            _id: podcast._id,
            title: podcast.title,
            description: podcast.summary,
            imageSrc: podcast.thumbnail_url,
            imageAlt: podcast.title,
            labels: podcast.labels,
            date: formatPodcastDate(podcast.publicationDate),
          })
        );
        setPodcasts(formattedPodcasts);
        setTotalPages(fetchedTotalPages);
      } catch (err: any) {
        console.error("Error fetching podcasts:", err);
        setError("Failed to load podcasts. Please try again later.");
        setPodcasts([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };
    fetchPodcasts();
  }, [page, selectedLabel]);

  const handleLabelSelect = (label: string) => {
    setSelectedLabel(label);
    setPage(1);
  };

  const renderPodcastContent = () => {
    if (loading) {
      return (
        <div className="flex h-[40vh] w-full flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2C305F]"></div>
          <p className="mt-4 text-lg text-gray-600">Loading Podcasts...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="text-center py-16">
          <p className="text-lg text-red-600 bg-red-100 px-4 py-3 rounded-lg inline-block">
            ⚠️ {error}
          </p>
        </div>
      );
    }
    if (podcasts.length === 0) {
      return (
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-[#2C305F] mb-2">
            No Podcasts Found
          </h3>
          <p className="text-[#5E5E92]">
            There are no podcasts matching your selected filter.
          </p>
        </div>
      );
    }
    return (
      <>
        <div className="py-6 px-4 md:px-16 lg:px-24">
          {podcasts.map((podcast) => (
            <Link href={`/media/podcast/${podcast._id}`} key={podcast._id}>
              <PodcastCard
                imageSrc={podcast.imageSrc}
                imageAlt={podcast.imageAlt}
                labels={podcast.labels}
                title={podcast.title}
                description={podcast.description}
                date={podcast.date}
              />
            </Link>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center">
            <PaginationRounded
              page={page}
              onPageChange={(value) => setPage(value)}
              count={totalPages}
            />
          </div>
        )}
      </>
    );
  };

  return (
    <section>
      <div
        className="w-screen h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #474A6E, #DBB968)",
        }}
      >
        <div className="absolute w-screen h-screen z-10">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/media/podcast/Fintechtainment-LandscapePoster-New.png"
            alt="Fintechtainment Poster"
            fill
            priority
            className="object-fill opacity-15"
          />
        </div>
        <div className="absolute w-screen h-screen top-[-12vh] left-[2vw] z-20">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/media/YellowStars.png"
            alt="Yellow Stars"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center justify-center z-30 mt-[17vh]">
          <h1 className="text-5xl font-bold text-[9vh] text-center text-ft-primary-yellow-50 drop-shadow-[1.5px_1.5px_0_#1E264A]">
            FinTechTainment
          </h1>
          <p className="leading-6 font-semibold text-base text-white w-[50vw] text-justify py-6">
            FinTechTainment is play of words between "Fintech" and
            "Entertainment". It is a media project aimed at interviewing
            industry professionals with topics in the fields of: Business,
            Finance, Technology, and Entrepreneurship. Our approach is to have
            casual conversations about insightful academic and industry topics,
            in a way that is relatable and understandable by students and
-            curious newcomers.
          </p>
          <div
            className="w-fit h-fit rounded-md p-[2px] mt-[1.5rem]"
            style={{
              background: "linear-gradient(to top, #474A6E, #DBB968)",
            }}
          >
            <Link href="/media">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
                className="bg-ft-primary-blue-300 text-bluePrimary font-semibold px-4 py-2 rounded-md hover:bg-yellowCream"
              >
                Back to Media
              </motion.button>
            </Link>
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
        className="w-full pt-8 pb-2 pl-4 md:pl-16 lg:pl-24"
      >
        <MuiLink
          underline="hover"
          sx={{
            color: "#000000",
            "&:hover": { color: "#A28436" },
          }}
          component={Link}
          href="/media"
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
        >
          FinTechTainment Library
        </MuiLink>
      </Breadcrumbs>

      {/* --- NEW: Two-Tab Bar with your requested design --- */}
      <div className="px-4 md:px-16 lg:px-24 mb-6">
        <div className="max-w-lg mx-auto bg-gray-100 rounded-lg p-1 flex items-center space-x-1 shadow-inner border border-gray-200">
          <button
            onClick={() => setActiveTab("podcast")}
            className={`w-1/2 py-2.5 px-2 text-sm md:text-base rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A28436] focus:ring-opacity-50 ${
              activeTab === "podcast"
                ? "bg-[#DBB968] text-[#1E264A] shadow-md"
                : "bg-transparent text-gray-500 hover:bg-gray-200"
            }`}
          >
            FinTechTainment Podcast
          </button>
          <button
            onClick={() => setActiveTab("fintech101")}
            className={`w-1/2 py-2.5 px-2 text-sm md:text-base rounded-md font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A28436] focus:ring-opacity-50 ${
              activeTab === "fintech101"
                ? "bg-[#DBB968] text-[#1E264A] shadow-md"
                : "bg-transparent text-gray-500 hover:bg-gray-200"
            }`}
          >
            FinTech 101
          </button>
        </div>
      </div>

      {/* --- UPDATED: Conditional Rendering to match new tab names --- */}
      {activeTab === "podcast" && (
        <>
          <div className="relative pb-4 px-4 md:px-16 lg:px-24">
            <LabelSort
              availableLabels={availableLabels}
              onSelect={handleLabelSelect}
            />
          </div>
          {renderPodcastContent()}
        </>
      )}

      {activeTab === "fintech101" && (
        <div className="flex items-center justify-center h-[40vh]">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#2C305F] mb-2">
              Coming Soon!
            </h3>
            <p className="text-[#5E5E92]">
              Content for FinTech 101 will be available here in the future.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}