"use client"; // Client Component for Next.js

import Image from "next/image";
import { FC } from "react";

interface ArticleCardProps {
  imageSrc: string;
  imageAlt: string;
  labels: string[];
  title: string;
  description: string;
  date: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  imageSrc,
  imageAlt,
  labels,
  title,
  description,
  date,
}) => {
  return (
    <div className="flex rounded-xl shadow-md border border-[#0D1742] overflow-hidden max-w-6xl h-[20rem] m-auto mb-8">
      <div className="w-1/3">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
          width={320} 
          height={320} 
        />
      </div>
      {/* Text section */}
      <div className="w-2/3 p-6 flex flex-col justify-between bg-[#F9FAFB]">
        {/* Labels */}
        <div className="flex gap-2 mb-2">
          {labels.map((label, index) => (
            <span
              key={index}
              className="bg-[#F7D27F] px-3 py-1 rounded-md font-semibold text-[#2A2A57]"
            >
              {label}
            </span>
          ))}
        </div>
        {/* Title */}
        <h2 className="text-2xl font-bold text-[#2C305F]">{title}</h2>
        {/* Description */}
        <p className="text-[#2A2A57] text-base mt-2 mb-4 line-clamp-3">
          {description}
        </p>
        {/* Date */}
        <p className="text-[#2A2A57] italic font-medium text-sm">{date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;