"use client";
import * as React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function StackedLabel({
  label,
  measure = false,
}: { label: string; measure?: boolean }) {
  const isHR = label.toUpperCase() === "HUMAN RESOURCES";
  const container = measure ? "flex" : "hidden lg:flex";

  if (isHR) {
    const firstWord = "HUMAN".split("");
    const secondWord = "RESOURCES".split("");
    return (
      <span
        className={`${container} h-[29rem] 
                    flex-row items-stretch justify-between 
                    leading-none uppercase tracking-[0.08em] 
                    font-bold md:max-lg:gap-[0.25rem] ${poppins.className}`}
        aria-hidden="true"
      >
        <span className="flex flex-col 
                        justify-start items-center 
                        h-full gap-[0.45rem] 
                        md:max-lg:gap-[0.3rem]">
          {firstWord.map((ch, i) => (
            <span key={`human-${i}`} className="text-[clamp(1.5rem,0.9vw+0.95rem,2rem)] 
                                                md:max-lg:text-[clamp(1.05rem,0.45vw+0.9rem,1.25rem)]">
              {ch}
            </span>
          ))}
        </span>
        <span className="flex flex-col 
                        justify-end items-center h-full 
                        gap-[0.45rem] md:max-lg:gap-[0.3rem]">
          {secondWord.map((ch, i) => (
            <span key={`resources-${i}`} className="text-[clamp(1.5rem,0.9vw+0.95rem,2rem)] 
                                                    md:max-lg:text-[clamp(1.05rem,0.45vw+0.9rem,1.25rem)]">
              {ch}
            </span>
          ))}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`${container} flex-col items-center justify-center 
                  gap-[0.35rem] md:max-lg:gap-[0.25rem] 
                  leading-none uppercase tracking-[0.08em] 
                  font-bold ${poppins.className}`}
      aria-hidden="true"
    >
      {label.split("").map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className="text-[clamp(1.5rem,0.9vw+0.95rem,2rem)] 
                    md:max-lg:text-[clamp(1.05rem,0.45vw+0.9rem,1.25rem)]"
        >
          {ch}
        </span>
      ))}
    </span>
  );
}
