"use client";
import { Image } from "@heroui/react";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type CardStackProps = {
  id: number;
  image: string;
};

const achievementData = [
  {
    id: 1,
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/home/achievement/BestClubSemC-2024.png",
  },
  {
    id: 2,
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/home/achievement/BestClubSemB-2023.png",
  },
  {
    id: 3,
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/home/achievement/BestClubSemA-2023.png",
  },
  {
    id: 4,
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/home/achievement/BestClubSemB-2021.png",
  },
  {
    id: 5,
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/home/achievement/BestClubSemA-2021.png",
  },
];

const Achievements = () => {
  const [cards, setCards] = useState<CardStackProps[]>(achievementData);

  return (
    <section className="bg-[#F9FAFB] max-w-[100vw] w-[100vw] p-[4rem] pl-[5rem]">
      <div>
        <h2 className="text-[2.5rem] font-bold text-[#2C305F] [text-shadow:_0_3px_4px_rgba(0,0,0,0.5)]">
          Achievement
        </h2>
        <h3 className="text-[3.5rem] font-bold text-[#DCB968] leading-[3rem] [text-shadow:_0_3px_4px_rgba(0,0,0,0.5)]">
          Best Club of Semester
        </h3>
        <div className="flex flex-col md:flex-row gap-[2rem] mt-[3rem]">
          <div className="min-h-screen grid place-items-center">
            {cards.map((card) => {
              return (
                <CARD_STACK
                  key={card.id}
                  id={card.id}
                  image={card.image}
                  cards={cards}
                  setCards={setCards}
                />
              );
            })}
          </div>
          <p className="text-[1.8rem] font-bold text-[#5E5E92] leading-[3.5rem]">
            5 times
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[2rem] mt-[3rem]">
        <Image className="object-cover w-full h-full" />
        <div>
          <h3 className="text-[3.5rem] font-bold text-[#DCB968] leading-[3rem] [text-shadow:_0_3px_4px_rgba(0,0,0,0.5)]">
            Innovation Award
          </h3>
          <p className=" text-[1.8rem] font-bold text-[#5E5E92] leading-[3.5rem]">
            2023
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-[3.5rem] font-bold text-[#DCB968] leading-[3rem] [text-shadow:_0_3px_4px_rgba(0,0,0,0.5)]">
          Publicity Award
        </h3>
        <p className=" text-[1.8rem] font-bold text-[#5E5E92] leading-[3.5rem]">
          2024
        </p>
      </div>
    </section>
  );
};

const CARD_STACK = ({
  id,
  image,
  cards,
  setCards,
}: {
  id: number;
  image: string;
  cards: CardStackProps[];
  setCards: Dispatch<SetStateAction<CardStackProps[]>>;
}) => {
  const x = useMotionValue(0);

  // useMotionValueEvent(x, "change", (latest) => {
  //   console.log(latest);
  // });

  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const isFront = id === cards[cards.length - 1].id;
  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 5 : -5;
    return `${rotateRaw.get() + offset}deg`;
  });
  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prevCards) => prevCards.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={image}
      alt={`Achievement ${id}`}
      className="object-cover origin-bottom w-[50rem] hover:cursor-grab active:cursor-grabbing"
      style={{
        gridColumn: 1,
        gridRow: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)" : undefined,
        zIndex: isFront ? 1 : 0,
      }}
      animate={{ scale: isFront ? 1 : 0.95 }}  
      drag="x"
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default Achievements;
