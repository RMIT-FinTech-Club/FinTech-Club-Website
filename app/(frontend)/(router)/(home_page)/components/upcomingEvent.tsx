"use client";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/upcoming.module.css";
import clsx from "clsx";

// Data shape for an event card
type EventItem = {
  name: string;
  image: string;
  date: string;
  labels: string[];
};

// Static list of events (source of truth for dots order)
const placeholders: EventItem[] = [
  {
    name: "Hackathon 2025",
    image:
      "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter",
    date: "31th August",
    labels: ["Tech", "Innovation"],
  },
  {
    name: "Design Sprint",
    image:
      "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter",
    date: "02nd Sep",
    labels: ["Design", "UX"],
  },
  {
    name: "Dev Conf",
    image:
      "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter",
    date: "10th Sep",
    labels: ["Developer", "Conference"],
  },
  {
    name: "AI Meetup",
    image:
      "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter",
    date: "18th Sep",
    labels: ["AI", "Networking", "Innovation", "Forum"],
  },
  {
    name: "Cloud Day",
    image:
      "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter",
    date: "25th Sep",
    labels: ["Cloud", "Technology"],
  },
  {
    name: "Startup Pitch",
    image:
      "https://tr.rbxcdn.com/180DAY-62ee9984377b63b7ed19737271c65a04/500/280/Image/Jpeg/noFilter",
    date: "30th Sep",
    labels: ["Startup", "Pitching"],
  },
];

export default function UpcomingEvent() {
  // Rotating copy of placeholders that drives what’s rendered
  const [items, setItems] = useState<EventItem[]>(placeholders);

  // Prevents new clicks while the 3s CSS animation is running
  const [animating, setAnimating] = useState(false);

  // Refs to the 5 visible card DOM nodes (positions card_1..card_5)
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  // Trigger a step to the next or previous slide.
  // We apply CSS classes to animate positions, then rotate the data array
  // after 3s to match the new visual order.
  const handleClick = (dir: "next" | "prev") => {
    if (animating) return;
    setAnimating(true);

    // Add animation class to each of the 5 card positions
    cardRef.current.forEach((el, i) => {
      el?.classList.add(styles[`card_${i + 1}_${dir}`]);
    });

    // After animation finishes, rotate the array to match visual result
    setTimeout(() => {
      const rotated = [...items];

      if (dir === "prev") {
        // Move the last item to the front (right → center)
        // Matches clicking card_2 to go "previous"
        rotated.unshift(rotated.pop()!);
      } else {
        // Move the first item to the end (left → center)
        // Matches clicking card_4 to go "next"
        rotated.push(rotated.shift()!);
      }

      setItems(rotated);
      setAnimating(false);

      // Clean up animation classes for the next click
      cardRef.current.forEach((el, i) => {
        el?.classList.remove(styles[`card_${i + 1}_${dir}`]);
      });
    }, 3000); // Must match the CSS animation-duration
  };

  // Compute the 5 cards to render at fixed positions card_1..card_5.
  // If there are fewer than 5 items you can loop; here we assume >= 5.
  const visible = Array.from(
    { length: 5 },
    (_, i) => items[i % (items.length || 1)]
  );

  const labelBgColors = [
    "bg-ft-primary-yellow-50",
    "bg-ft-secondary-blue",
    "bg-ft-secondary-yellow",
    "bg-ft-primary-blue-300",
  ];

  return (
    <div className="h-fit w-[100vw] py-6 relative flex flex-col items-center">
      {/* Header + decorative stars */}
      <div className="h-[max-content] w-[max-content] relative mx-auto mt-[2vh] mb-[4vh]">
        <p className="text-[4vw] text-bluePrimary uppercase font-extrabold text-center">
          UPCOMING EVENTS
        </p>
        <div
          className="absolute bottom-[calc(100%-2vh)] left-[0.2vw] h-[5vh] aspect-square bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url(/home/star.svg)" }}
        />
        <div
          className="absolute top-[-2vh] left-[-13vh] h-[12vh] aspect-square bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url(/home/star.svg)" }}
        />
        <div
          className="absolute top-[1vh] right-[-11vh] h-[10vh] aspect-square bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url(/home/star.svg)" }}
        />
        <div
          className="absolute top-[calc(100%-3vh)] right-[-1vw] h-[5vh] aspect-square bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url(/home/star.svg)" }}
        />
      </div>

      {/* Carousel stage (5 fixed positions) */}
      <div className="h-[85vh] w-full relative">
        {visible.map((ev, index) => (
          <div
            key={`${ev.name}-${index}`}
            ref={(el: HTMLDivElement | null) => {
              // Keep a ref to each fixed position wrapper
              cardRef.current[index] = el;
            }}
            className={clsx(
              styles.card, // base: 3D, opacity, duration, fill-mode, etc.
              styles[`card_${index + 1}`], // fixed position class: card_1..card_5
              "grid place-items-center h-[75vh] w-[27vw] border-bluePrimary border-[0.5vh] rounded-[2vw] p-[2vh] bg-blueSlate"
            )}
            onClick={() => {
              // Click on the side cards to navigate:
              // card_2 → prev (bring right item to center)
              // card_4 → next (bring left item to center)
              if (index === 1) handleClick("prev");
              else if (index === 3) handleClick("next");
            }}
          >
            {/* Card content */}
            <p className="text-[1.5rem] text-yellowSand uppercase text-center font-bold">
              {ev.name}
            </p>

            <div
              className="relative w-full h-[35vh] rounded-[3vh] p-[1.5vh]"
              style={{
                background: "linear-gradient(to bottom, #C9D6EA, #DBB968)",
              }}
            >
              <div
                className="w-full h-full rounded-[2.5vh] bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url(${ev.image})` }}
              />
            </div>

            <div className="w-full h-[15vh] flex justify-between">
              <div
                className="h-full aspect-square rounded-[3vh] p-[1.5vh]"
                style={{
                  background: "linear-gradient(to bottom, #C9D6EA, #DBB968)",
                }}
              >
                <div className="bg-ft-primary-yellow-50 w-full h-full rounded-[3vh] flex justify-center items-center">
                  <p className="text-[1.25rem] leading-[4vh] font-medium text-center">
                    {ev.date}
                  </p>
                </div>
              </div>
              <div
                className="h-full w-full ml-[1vw] rounded-[3vh] p-[1.5vh] flex justify-center items-center"
                style={{
                  background: "linear-gradient(to bottom, #C9D6EA, #DBB968)",
                }}
              >
                <div className="bg-white w-full h-full rounded-[2.5vh] flex flex-wrap justify-around items-center">
                  {ev.labels.map((tag, i) => (
                    <div
                      key={i}
                      className={`${labelBgColors[i % 4]} text-black text-[0.75rem] text-center min-w-[6rem] font-normal px-3 py-1 rounded-md`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="h-fit w-fit rounded-[4.5vh] py-[1vh] px-[0.5vw] cursor-pointer"
              style={{
                background: "linear-gradient(to bottom, #C9D6EA, #DBB968)",
              }}
            >
              <div className="bg-ft-primary-yellow-50 w-full h-full rounded-[3vh] py-[1vh] px-[1vw] flex justify-center items-center">
                <p className="text-[1rem] leading-[3.3vh] font-semibold text-center">
                  More Details
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots + arrows */}
      <div className="w-full flex justify-center items-center gap-[1.5vw] mt-[-4vh] z-[10]">
        <button
          className="h-[5vh] w-[5vh] text-[3vh] leading-[4vh] rounded-full border border-[#ddd] grid place-items-center hover:bg-[#f7f7f7] disabled:opacity-50"
          onClick={() => handleClick("prev")}
          disabled={animating}
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        <div className="flex items-center gap-[0.8vw]">
          {placeholders.map((_, i) => {
            // Active dot = the original index of the center card (items[2])
            const activeIndex = placeholders.indexOf(items[2]);
            return (
              <div
                key={i}
                className={`h-[2vh] aspect-square rounded-full ${
                  i === activeIndex ? "bg-yellowPrimary" : "bg-[#D9D9D9]"
                }`}
              />
            );
          })}
        </div>

        <button
          className="h-[5vh] w-[5vh] text-[3vh] leading-[4vh] rounded-full border border-[#ddd] grid place-items-center hover:bg-[#f7f7f7] disabled:opacity-50"
          onClick={() => handleClick("next")}
          disabled={animating}
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
