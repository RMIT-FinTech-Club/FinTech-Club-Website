import React from "react";
import ActivityRow from "./activity-row";
import DateChip from "./date-chip";

const items = [
  {
    bg: "#98AACE",
    strong: true,
    month: "January",
    day: "22",
    year: "2025",
    text: "Some activities right here.",
  },
  {
    bg: "#F8EAC6",
    month: "January",
    day: "22",
    year: "2025",
    text: "Some activities right here.",
  },
  {
    bg: "#ECEAF9",
    month: "January",
    day: "22",
    year: "2025",
    text: "Some activities right here.",
  },
  {
    bg: "#F8EAC6",
    month: "January",
    day: "22",
    year: "2025",
    text: "Some activities right here.",
  },
  {
    bg: "#ECEAF9",
    month: "November",
    day: "22",
    year: "2025",
    text: "Some activities right here.",
  },
];

export default function KeyActivities() {
  return (
    <section className="mx-auto max-w-4xl px-4 md:px-4 space-y-4 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-6">
        Key Activities
      </h2>
      {items.map((item, idx) => (
        <ActivityRow key={idx} bg={item.bg} strong={item.strong}>
          <div className="flex items-center gap-4 md:gap-6">
            <DateChip
              month={item.month}
              day={item.day}
              year={item.year}
              strong={item.strong}
            />
            <p className="text-lg md:text-xl font-medium text-neutral-900">
              {item.text}
            </p>
          </div>
        </ActivityRow>
      ))}
    </section>
  );
}
