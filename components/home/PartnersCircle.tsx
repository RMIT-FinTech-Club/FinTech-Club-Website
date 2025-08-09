"use client";
import { useState, useRef } from "react";
import styles from "@/styles/partners.module.css";
import clsx from "clsx";

// Type definition for each partner item
type PartnerItem = {
  id: number;
  icon: string;
  bg: string;
};

// Initial state: 7 partners
const baseItems = [
  { id: 1, icon: "/home/partner_icon_6.svg" },
  { id: 2, icon: "/home/partner_icon_1.svg" },
  { id: 3, icon: "/home/partner_icon_2.svg" },
  { id: 4, icon: "/home/partner_icon_3.svg" },
  { id: 5, icon: "/home/partner_icon_4.svg" },
  { id: 6, icon: "/home/partner_icon_5.svg" },
  { id: 7, icon: "/home/partner_icon_6.svg" },
] as const;

// Create the initial state by mapping over baseItems
// Assign alternating background colors:
// Even indices → bg-blueSlate, odd indices → bg-bluePrimary
const initialItems: PartnerItem[] = baseItems.map((it, i) => ({
  ...it,
  bg: i % 2 === 0 ? "bg-blueSlate" : "bg-bluePrimary",
}));

function PartnersCircle() {
  const [items, setItems] = useState(initialItems); // Current displayed items
  const [animating, setAnimating] = useState(false); // Disable input while animating
  const circleRef = useRef<(HTMLDivElement | null)[]>([]); // Refs to each DOM element

  // Helper: return the opposite background color of neighbor
  const getNextBg = (neighborBg: string): string =>
    neighborBg === "bg-blueSlate" ? "bg-bluePrimary" : "bg-blueSlate";

  const handleClick = (dir: "next" | "prev") => {
    if (animating) return; // Ignore click while animating
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
        // Move the last item to the beginning
        const popped = rotated.pop()!;
        const neighborBg = rotated[0].bg; // check new neighbor
        popped.bg = getNextBg(neighborBg); // assign new color opposite of neighbor
        rotated.unshift(popped);
      } else {
        // Move the first item to the end
        const shifted = rotated.shift()!;
        const neighborBg = rotated[rotated.length - 1].bg; // check new neighbor
        shifted.bg = getNextBg(neighborBg); // assign new color opposite of neighbor
        rotated.push(shifted);
      }

      // Update state with rotated items
      setItems(rotated);
      setAnimating(false);

      // Remove animation classes after done
      circleRef.current.forEach((el, index) => {
        el?.classList.remove(styles[`circle_item_${index + 1}_${dir}`]);
      });
    }, 3000); // Match animation duration in CSS
  };

  return (
    <div className="absolute h-[80vh] w-[40vw] border-[0.2vw] border-[#000] rounded-[50%] top-[50%] translate-y-[-50%] left-[-20vw]">
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={(el: HTMLDivElement | null) => {
            circleRef.current[index] = el;
          }}
          className={clsx(
            styles.circle_item, // base positioning
            styles[`circle_item_${index + 1}`], // location in the circle
            "flex justify-center items-center text-[3vh] text-white bg-center bg-no-repeat bg-contain",
            item.bg // dynamic background color
          )}
          onClick={() => {
            // Only item at index 2 (top-middle) or index 4 (bottom-middle) are clickable
            if (index === 2) handleClick("prev");
            else if (index === 4) handleClick("next");
          }}
        >
          <div className="aspect-square w-3/5 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${item.icon})` }}></div>
          {[2, 3, 4].includes(index) && (
            <div
              className={`${styles.pattern} h-full w-full absolute top-0 left-0 rounded-[50%] bg-center bg-no-repeat bg-contain`}
              style={{ backgroundImage: `url(/home/pattern.svg)` }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default PartnersCircle;