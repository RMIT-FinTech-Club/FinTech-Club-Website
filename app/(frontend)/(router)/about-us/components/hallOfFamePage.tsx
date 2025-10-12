"use client";
import axios from "axios";
import { useState, useEffect } from "react";

import type { HallOfFameMember } from "./hall-components/types";
import HonoreePage from "./hall-components/honoreePage";
import HallPage from "./hall-components/hallPage";
import { useSemester } from "./hall-components/hooks/useSemester";
import HallRevealSection from "./hall-components/hall-display/HallRevealSection";
import HeaderTitle from "./hall-components/headerTitle";
import Image from "next/image";

export default function HallOfFamePage() {
  const categories = [
    "Department MVP",
    "Academic Ace",
    "Project MVP",
    "Community Builder",
    "Rookie of the Semester",
    "Best Department",
    "Club MVP",
  ];
  const semesters = ["Semester A", "Semester B", "Semester C"];

  const { semester } = useSemester();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [members, setMembers] = useState<HallOfFameMember[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        const currentYear = new Date().getFullYear();
        const response = await axios.get("/api/v1/hall-of-fame", {
          params: { year: currentYear },
        });
        setMembers(response.data.honorees);
        setError(null);
      } catch (err: any) {
        console.error("Error fetching Hall of Fame members:", err);
        if (err.response?.status === 404) {
          setError("Hall of Fame API not found");
        } else if (err.code === "ERR_NETWORK") {
          setError("Network error. Please check your connection.");
        } else {
          setError("Failed to load Hall of Fame data. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <>
      {loading && (
        <section className="relative py-12 overflow-hidden bg-[#F9FAFB]">
          <div className="flex flex-row justify-center">
            <div className="hidden lg:block">
              <Image
                src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
                alt="Mascot"
                width={420}
                height={420}
                loading="lazy"
                className="
                        absolute z-10 left-[-11.5rem] top-[2rem] rotate-[40deg] h-full
                      "
              />
            </div>

            <div className="flex flex-col items-center py-10 lg:w-8/12 md:w-7/12 w-6/12">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end items-center w-full">
                <HeaderTitle text="Hall of Fame" />
              </div>
              <div className="pt-16 pb-[8rem] flex justify-center items-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#DCB968] mx-auto mb-4"></div>
                  <p className="text-[#5E5E92]">Loading Hall of Fame...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {error && !loading && (
        <div className="pt-4 text-center">
          <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg inline-block">
            ⚠️ {error}
          </p>
        </div>
      )}

      {!loading &&
        !error &&
        (selectedCategory ? (
          <HonoreePage
            members={members}
            category={selectedCategory}
            semester={semester}
            onBack={() => setSelectedCategory(null)}
          />
        ) : (
          <HallRevealSection>
            <HallPage
              categories={categories}
              semesters={semesters}
              onCategorySelect={setSelectedCategory}
            />
          </HallRevealSection>
        ))}
    </>
  );
}
