"use client";
import { useState, useEffect } from "react";

type VerticalTabTitleProps = {
  text: string;
  className?: string;
  forceVerticalOnMobile?: boolean;
};

export default function VerticalTabTitle({
  text,
  className = "",
  forceVerticalOnMobile = false,
}: VerticalTabTitleProps) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // MOBILE: single-line
  if (isMobile && !forceVerticalOnMobile) {
    return (
      <div
        className={[
          "text-white font-bold uppercase leading-none text-center",
          "text-sm xs:text-base tracking-wide",
          "whitespace-nowrap overflow-hidden text-ellipsis",
          className,
        ].join(" ")}
        title={text}
      >
        {text}
      </div>
    );
  }

  // DESKTOP: stacked characters
  return (
    <div
      className={[
        "text-white font-bold uppercase leading-tight tracking-widest text-center",
        "text-lg",
        className,
      ].join(" ")}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span key={index} className="block">
          {char}
        </span>
      ))}
    </div>
  );
}
