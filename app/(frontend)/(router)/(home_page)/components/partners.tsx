"use client"
import { useState, useRef } from "react";
import PartnersCircle from "@/components/home/PartnersCircle";
import PartnersDiv from "@/components/home/PartnersDiv";
import styles from "@/styles/partners.module.css";

// Type definition for each partner item
export type PartnerItem = {
  id: number;
  icon: string;
  bg: string;
};

// Initial state: 7 partners with alternating background colors
const initialItems: PartnerItem[] = [
  { id: 1, icon: "/home/other_partners.svg", bg: "bg-blueSlate" },
  { id: 2, icon: "/home/hospitality.svg", bg: "bg-bluePrimary" },
  { id: 3, icon: "/home/academic.svg", bg: "bg-blueSlate" },
  { id: 4, icon: "/home/blockchain.svg", bg: "bg-bluePrimary" },
  { id: 5, icon: "/home/fintech.svg", bg: "bg-blueSlate" },
  { id: 6, icon: "/home/charity.svg", bg: "bg-bluePrimary" },
  { id: 7, icon: "/home/other_partners.svg", bg: "bg-blueSlate" },
];

export default function Partners() {
  const [items, setItems] = useState(initialItems);
  const [animating, setAnimating] = useState(false);
  const circleRef = useRef<(HTMLDivElement | null)[]>([]);

  // Helper: return the opposite background color of neighbor
  const getNextBg = (neighborBg: string): string =>
    neighborBg === "bg-blueSlate" ? "bg-bluePrimary" : "bg-blueSlate";

  const handleClick = (dir: "next" | "prev") => {
    if (animating) return;
    setAnimating(true);

    // Add animation class to each element
    circleRef.current.forEach((el, index) => {
      if (el) {
        el.classList.add(styles[`circle_item_${index + 1}_${dir}`]);
      }
    });

    // Wait for animation to finish before updating positions
    setTimeout(() => {
      const rotated = [...items];

      if (dir === "prev") {
        const popped = rotated.pop()!;
        const neighborBg = rotated[0].bg;
        popped.bg = getNextBg(neighborBg);
        rotated.unshift(popped);
      } else {
        const shifted = rotated.shift()!;
        const neighborBg = rotated[rotated.length - 1].bg;
        shifted.bg = getNextBg(neighborBg);
        rotated.push(shifted);
      }

      setItems(rotated);
      setAnimating(false);

      // Remove animation classes after done
      circleRef.current.forEach((el, index) => {
        el?.classList.remove(styles[`circle_item_${index + 1}_${dir}`]);
      });
    }, 3000); // Match animation duration in CSS
  };

  return (
    <div className="w-[100vw] h-[40rem] bg-[#F9FAFB] relative flex items-center">
      <PartnersCircle
        items={items}
        handleClick={handleClick}
        circleRef={circleRef}
        animating={animating}
      />
      <PartnersDiv items={items} />
    </div>
  );
}