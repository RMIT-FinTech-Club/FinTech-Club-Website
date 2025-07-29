"use client";
import HonoreePage from "./hall-components/honoreePage";
import HallPage from "./hall-components/hallPage";
import { useState } from "react"
import { useSemester } from './hall-components/hooks/useSemester';

const members = [
      {
        name: "Alice Nguyen",
        achievement: "Led the club to win inter‑university hackathon.",
        category: "Department MVP",
        photo_url: "/ManhDung.svg",
        semester: "2025A",
      },
      {
        name: "Bob Tran",
        achievement: "Top GPA in the department with outstanding research contributions.",
        category: "Academic Ace",
        photo_url: "/ManhDung.svg",
        semester: "2025B",
      },
      {
        name: "Charlie Le",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Project MVP",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
      {
        name: "Penny Teller",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Community Builder",
        photo_url: "/ManhDung.svg",
        semester: "2025A",
      },
      {
        name: "Sheldon Cooper",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Rookie of the Semester",
        photo_url: "/ManhDung.svg",
        semester: "2025B",
      },
      {
        name: "Rachel Green",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Best Department",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
      {
        name: "Monica Geller",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Best Department",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
      {
        name: "Ross Geller",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Best Department",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
      {
        name: "Joey Tribbiani",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Best Department",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
]

export default function HallOfFamePage() {
  const categories = ["Department MVP", "Academic Ace", "Project MVP", "Community Builder", "Rookie of the Semester", "Best Department", "Club MVP"]
  const semesters = ["Semester A", "Semester B", "Semester C"]

  const { semester } = useSemester();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    selectedCategory ? (
      <HonoreePage
          members={members}
          category={selectedCategory}
          semester={semester}
          onBack={() => {
            setSelectedCategory(null);
          }}
        />
    ) : (
        <HallPage
          categories={categories}
          semesters={semesters}
          onCategorySelect={setSelectedCategory}
        />  
    )
  );
}
