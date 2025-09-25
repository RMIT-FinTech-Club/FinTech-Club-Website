"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LabelSort from "./components/labelSort";
import PodcastCard from "./components/podcastCard";
import ReelPlayer from "./components/reelPlayer";
import ReelLibraryGrid from "./components/ReelLibraryGrid";
import { motion } from "framer-motion";
import PaginationRounded from "./components/pagination";
import Image from "next/image";
import axios from "axios";

// --- TYPE DEFINITIONS ---
interface ApiPodcast {
  _id: string;
  title: string;
  summary: string;
  thumbnail_url: string;
  labels: string[];
  publicationDate: string;
}

interface DisplayPodcast {
  _id: string;
  imageSrc: string;
  imageAlt: string;
  labels: string[];
  title: string;
  description: string;
  date: string;
}

// --- HELPER FUNCTIONS ---
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
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("podcast");
  const [podcasts, setPodcasts] = useState<DisplayPodcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const [availableLabels, setAvailableLabels] = useState<string[]>([]);
  const [selectedReelIndex, setSelectedReelIndex] = useState<number | null>(
    null
  );

  const itemsPerPage = 5;

  // --- DATA ---
  // In page.tsx

  const fintech101Reels = [
    {
      id: 1,
      title: "What is Fintech? The 60-Second Explainer",
      description:
        "A quick rundown of what 'Fintech' (Financial Technology) actually means and how it's changing the way we handle money, from banking to investing.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1601597111158-2f8e6392d435?&auto=format&fit=crop&w=800&q=80",
      videoId: "hYWeWbKtNcM",
      publicationDate: "2025-09-20T10:00:00.000Z",
      labels: ["Fintech", "Technology", "Finance 101"],
    },
    {
      id: 2,
      title: "Understanding Blockchain in under a minute",
      description:
        "Demystifying blockchain technology. Learn about decentralized ledgers, blocks, and why it's the secure foundation behind cryptocurrencies like Bitcoin.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?&auto=format&fit=crop&w=800&q=80",
      videoId: "yubzJw0uiE4",
      publicationDate: "2025-09-15T10:00:00.000Z",
      labels: ["Blockchain", "Crypto", "Decentralization"],
    },
    {
      id: 3,
      title: "Digital Wallets: How Do They Work?",
      description:
        "Explore the technology behind digital wallets like Apple Pay and Google Pay. How do they store your card information securely and make payments so easy?",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1593532938825-7a6273c7c220?&auto=format&fit=crop&w=800&q=80",
      videoId: "P_Ho_6y1vi0",
      publicationDate: "2025-09-10T10:00:00.000Z",
      labels: ["Digital Payments", "Mobile Tech"],
    },
    {
      id: 4,
      title: "The Rise of Robo-Advisors 🤖",
      description:
        "What are Robo-Advisors? Discover how automated, algorithm-driven platforms are making investment advice more accessible and affordable for everyone.",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?&auto=format&fit=crop&w=800&q=80",
      videoId: "zw8y2i_O2yY",
      publicationDate: "2025-09-05T10:00:00.000Z",
      labels: ["Investing", "AI in Finance", "WealthTech"],
    },
  ];

  // --- EFFECTS ---
  useEffect(() => {
    const fetchAllLabels = async () => {
      try {
        const response = await axios.get(`/api/v1/podcast?limit=100`);
        const allPodcasts: ApiPodcast[] = response.data.podcasts || [];
        const allLabelsFlat = allPodcasts.flatMap((p) => p.labels);
        const uniqueLabels = Array.from(new Set(allLabelsFlat)).sort();
        setAvailableLabels(["All", ...uniqueLabels]);
      } catch (err) {
        console.error("Failed to fetch unique labels:", err);
        setAvailableLabels(["All"]);
      }
    };
    fetchAllLabels();
  }, []);

  useEffect(() => {
    if (activeTab === "podcast") {
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
            (p: ApiPodcast) => ({
              _id: p._id,
              title: p.title,
              description: p.summary,
              imageSrc: p.thumbnail_url,
              imageAlt: p.title,
              labels: p.labels,
              date: formatPodcastDate(p.publicationDate),
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
    }
  }, [page, selectedLabel, activeTab]);

  const handleLabelSelect = (label: string) => {
    setSelectedLabel(label);
    setPage(1);
  };

  // --- RENDER LOGIC ---
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
        <div className="pt-8 px-4 md:px-16 lg:px-24">
          {podcasts.map((podcast) => (
            <Link
              href={`/media/fintechtainment/${podcast._id}`}
              key={podcast._id}
            >
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
      {/* Hero Section */}
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
            curious newcomers.
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

      {/* Conditionally show Breadcrumbs OR the Back button */}
      {selectedReelIndex === null ? (
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" sx={{ color: "#A28436" }} />}
          sx={{ color: "#000000", "& .MuiBreadcrumbs-separator": { mx: 0.5 } }}
          className="w-full pt-8 pb-2 pl-16"
        >
          <MuiLink underline="hover" sx={{ color: "#000000", "&:hover": { color: "#A28436" } }} component={Link} href="/media">
            Media
          </MuiLink>
          <MuiLink underline="hover" sx={{ color: "#000000", "&:hover": { color: "#A28436" } }} component={Link} href="/media/fintechtainment">
            FinTechTainment Library
          </MuiLink>
        </Breadcrumbs>
      ) : (
        <div className="w-full pt-8 pb-4 pl-16">
          <button
            onClick={() => setSelectedReelIndex(null)}
            className="flex items-center text-gray-700 font-semibold hover:text-black transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to FinTech 101 Library
          </button>
        </div>
      )}

      {/* Conditionally render the Tab Bar only when not in player view */}
      {selectedReelIndex === null && (
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
      )}

      {/* Conditional Tab Content */}
      {activeTab === "podcast" && (
        <>
          <div className="relative px-4 md:px-16 lg:px-24">
            <LabelSort
              availableLabels={availableLabels}
              onSelect={handleLabelSelect}
            />
          </div>
          {renderPodcastContent()}
        </>
      )}

      {activeTab === "fintech101" && (
        <div className="px-4 pb-8 md:px-16 lg:px-24">
          {selectedReelIndex === null ? (
            <ReelLibraryGrid
              reels={fintech101Reels}
              onReelSelect={(index) => setSelectedReelIndex(index)}
            />
          ) : (
            <ReelPlayer
              reels={fintech101Reels}
              selectedIndex={selectedReelIndex}
              onClose={() => setSelectedReelIndex(null)}
              onNavigate={(newIndex) => setSelectedReelIndex(newIndex)}
            />
          )}
        </div>
      )}
    </section>
  );
}
