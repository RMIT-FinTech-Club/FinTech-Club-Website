"use client";
import HonoreeCard from "./honoreeCard";
import type { HonoreeListProps } from "../types";

const categoriesWithoutAchievement = ["Community Builder", "Rookie of the Semester", "Best Department", "Club MVP"];

export default function HonoreeList({ members }: HonoreeListProps) {
  return (
    <div
      className="
        m-5
        flex flex-col
        lg:flex lg:flex-row
        md:grid md:grid-cols-2
        gap-4
        justify-center
        items-center
      "
    >
      {members.map((one, idx) => (
        <HonoreeCard
          key={idx}
          name={one.name}
          achievement={one.achievement}
          photo_url={one.photo_url}
          hideAchievement={categoriesWithoutAchievement.includes(one.category)}
        />
      ))}
    </div>
  );
}
