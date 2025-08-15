"use client";
import axios from "axios"
import { useState, useEffect } from "react"

import type { HallOfFameMember } from './hall-components/types';
import HonoreePage from "./hall-components/honoreePage";
import HallPage from "./hall-components/hallPage";
import { useSemester } from './hall-components/hooks/useSemester';
import HallRevealSection from "./hall-components/hall-display/HallRevealSection";

export default function HallOfFamePage() {
  const categories = ["Department MVP", "Academic Ace", "Project MVP", "Community Builder", "Rookie of the Semester", "Best Department", "Club MVP"]
  const semesters = ["Semester A", "Semester B", "Semester C"]

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
    {error && !loading && (
      <div className="pt-4 text-center">
        <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg inline-block">
          ⚠️ {error}
        </p>
      </div>
    )}
    
    {!loading && !error && (
      selectedCategory ? (
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
      )
    )}
  </>
);

}
