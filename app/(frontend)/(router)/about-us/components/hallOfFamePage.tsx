"use client";
import axios from "axios"
import { useState, useEffect } from "react"

import type { HallOfFameMember } from './hall-components/types';
import HonoreePage from "./hall-components/honoreePage";
import HallPage from "./hall-components/hallPage";
import { useSemester } from './hall-components/hooks/useSemester';
import ErrorFallback from "./hall-components/ErrorFallback";

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
        console.log(response.data)
        setMembers(response.data.honorees);
      } catch (err) {
        setError("Failed to load Hall of Fame members.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
  <>
    {loading && <ErrorFallback message="Loading Hall of Fame..." isLoading />}

    {error && <ErrorFallback message={error} onRetry={() => window.location.reload()} />}

    {!loading && !error && (
      selectedCategory ? (
        <HonoreePage
          members={members}
          category={selectedCategory}
          semester={semester}
          onBack={() => setSelectedCategory(null)}
        />
      ) : (
        <HallPage
          categories={categories}
          semesters={semesters}
          onCategorySelect={setSelectedCategory}
        />
      )
    )}
  </>
);

}
