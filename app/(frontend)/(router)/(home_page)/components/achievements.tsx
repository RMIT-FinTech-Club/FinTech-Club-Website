"use client";
import { Image } from "@heroui/react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";

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
    <section className="bg-[#F9FAFB] w-[100vw] pt-[4rem] pb-[5rem]  relative">
      <img
        src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+b%C3%AAn.svg"
        alt="Bear mascot"
        className="absolute right-[-10rem] top-[17rem] rotate-[-25deg] z-30"
        width={400}
      />

      <div className="absolute top-[-2rem] right-[8rem] w-[4.5rem] h-[4.5rem] bg-[#5E5E92] rounded-full z-10"></div>
      <div className="absolute top-[2.3rem] right-[6rem] w-[1.7rem] h-[1.7rem] bg-[#5E5E92] rounded-full z-10"></div>

      <div className="absolute top-[30rem] left-[4rem] w-[4rem] h-[4rem] bg-[#2C305F] rounded-full z-10"></div>
      <div className="absolute top-[36rem] left-[-1rem] w-[4rem] h-[4rem] bg-[#C9D6EA] rounded-full z-20"></div>
      <div className="absolute top-[38rem] left-[2.5rem] w-[4rem] h-[4rem] bg-[#DBB968] rounded-full z-10"></div>
      <div className="absolute top-[33rem] left-[-1.5rem] w-[4rem] h-[4rem] bg-[#2C305F] rounded-full z-10"></div>
      <div className="absolute top-[37rem] left-[8rem] w-[1rem] h-[1rem] bg-[#DBB968] rounded-full z-10"></div>
      <div className="absolute top-[29rem] left-[8rem] w-[0.8rem] h-[0.8rem] bg-[#2C305F] rounded-full z-10"></div>

      <div className="absolute bottom-[4rem] right-[16rem] w-[8rem] h-[8rem] bg-[#2C305F] rounded-full z-10"></div>
      <div className="absolute bottom-[27rem] right-[-0.7rem] w-[8rem] h-[8rem] bg-[#DCB968] rounded-full z-20"></div>
      <div className="absolute bottom-[6.5rem] right-[-3rem] w-[20rem] h-[20rem] bg-[#F7D27F] rounded-full z-10"></div>
      <div className="absolute bottom-[7rem] right-[12.5rem] w-[5rem] h-[5rem] bg-[#5E5E92] rounded-full z-10"></div>
      <div className="absolute bottom-[34rem] right-[8rem] w-[2rem] h-[2rem] bg-[#97ABD6] rounded-full z-10"></div>

      <div className="pl-[7rem]">
        <h2 className="text-[2.5rem] font-bold text-[#2C305F] [text-shadow:_0_3px_4px_rgba(0,0,0,0.5)]">
          Achievement
        </h2>
        <h3 className="text-[4rem] font-bold text-[#DCB968] leading-[3rem] [text-shadow:_0_3px_4px_rgba(0,0,0,0.5)]">
          Best Club of Semester
        </h3>
        <p className="text-[2.5rem] font-bold text-[#5E5E92] pt-[1rem] pl-[48rem]">
          5 times
        </p>
        <div className="pb-[17rem]">
          <div className="min-h-[200px] flex justify-center items-center relative">
            {cards.map((card) => (
              <CARD_STACK
                key={card.id}
                id={card.id}
                image={card.image}
                cards={cards}
                setCards={setCards}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-[2rem] mt-[4rem] ">
        <Image
          src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/home/achievement/BestClubSemB-2023.png"
          className="object-cover w-[32rem] rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
        />
        <div>
          <h3 className="text-[4rem] font-bold text-[#DCB968] leading-[3rem] [text-shadow:_0_3px_4px_rgba(0,0,0,0.5)]">
            Innovation Award
          </h3>
          <p className="text-[2.5rem] font-bold text-[#5E5E92] leading-[5rem]">
            2023
          </p>
        </div>
      </div>

      <div className="pl-[5rem] mt-[2rem]">
        <h3 className="pt-[2rem] text-[4rem] font-bold text-[#DCB968] leading-[3rem] [text-shadow:_0_3px_4px_rgba(0,0,0,0.5)]">
          Publicity Award
        </h3>
        <p className="mt-0 text-[2.5rem] font-bold text-[#5E5E92] leading-[5rem]">
          2024
        </p>
        <div className="flex flex-col md:flex-row gap-[7rem] relative">
          <div className="absolute z-10 left-[39rem] top-[-2.3rem] rotate-[-5deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 158 170"
              fill="none"
            >
              <path
                d="M109.947 114.433L153.358 93.6823L154.111 93.2659C155.229 92.5574 156.138 91.5529 156.745 90.3549C157.353 89.1569 157.637 87.8083 157.57 86.4469C157.502 85.0854 157.085 83.76 156.36 82.6058C155.636 81.4516 154.63 80.5101 153.446 79.8773L110.323 56.761L103.743 7.4808L103.587 6.6406C103.262 5.31202 102.602 4.0894 101.673 3.0979C100.744 2.1064 99.5806 1.38168 98.3014 0.99792C97.0222 0.614161 95.6734 0.585176 94.393 0.913908C93.1126 1.24264 91.9467 1.91729 91.0146 2.86879L57.0972 37.4625L9.72125 27.7465L8.90419 27.6253C7.5802 27.5057 6.25586 27.7501 5.06705 28.3333C3.87823 28.9166 2.86772 29.8178 2.13921 30.9444C1.41069 32.0711 0.990361 33.3826 0.921367 34.7445C0.852378 36.1063 1.13721 37.4695 1.74663 38.6942L23.8802 83.2145L1.06692 126.517L0.702629 127.315C0.217939 128.571 0.0680532 129.943 0.268231 131.291C0.468409 132.64 1.0115 133.916 1.84217 134.991C2.67284 136.066 3.7614 136.9 4.99694 137.409C6.2325 137.918 7.57089 138.084 8.87575 137.889L56.4669 130.799L89.8606 167.233C90.8273 168.288 92.057 169.05 93.4102 169.432C94.7635 169.814 96.1864 169.8 97.5178 169.393C98.8493 168.985 100.036 168.2 100.944 167.127C101.852 166.053 102.444 164.733 102.655 163.317L109.947 114.433Z"
                fill="#F7D27F"
              />
            </svg>
          </div>
          <div className="absolute z-10 left-[44rem] top-[1.5rem] rotate-[-5deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 158 170"
              fill="none"
            >
              <path
                d="M109.947 114.433L153.358 93.6823L154.111 93.2659C155.229 92.5574 156.138 91.5529 156.745 90.3549C157.353 89.1569 157.637 87.8083 157.57 86.4469C157.502 85.0854 157.085 83.76 156.36 82.6058C155.636 81.4516 154.63 80.5101 153.446 79.8773L110.323 56.761L103.743 7.4808L103.587 6.6406C103.262 5.31202 102.602 4.0894 101.673 3.0979C100.744 2.1064 99.5806 1.38168 98.3014 0.99792C97.0222 0.614161 95.6734 0.585176 94.393 0.913908C93.1126 1.24264 91.9467 1.91729 91.0146 2.86879L57.0972 37.4625L9.72125 27.7465L8.90419 27.6253C7.5802 27.5057 6.25586 27.7501 5.06705 28.3333C3.87823 28.9166 2.86772 29.8178 2.13921 30.9444C1.41069 32.0711 0.990361 33.3826 0.921367 34.7445C0.852378 36.1063 1.13721 37.4695 1.74663 38.6942L23.8802 83.2145L1.06692 126.517L0.702629 127.315C0.217939 128.571 0.0680532 129.943 0.268231 131.291C0.468409 132.64 1.0115 133.916 1.84217 134.991C2.67284 136.066 3.7614 136.9 4.99694 137.409C6.2325 137.918 7.57089 138.084 8.87575 137.889L56.4669 130.799L89.8606 167.233C90.8273 168.288 92.057 169.05 93.4102 169.432C94.7635 169.814 96.1864 169.8 97.5178 169.393C98.8493 168.985 100.036 168.2 100.944 167.127C101.852 166.053 102.444 164.733 102.655 163.317L109.947 114.433Z"
                fill="#F7D27F"
              />
            </svg>
          </div>
          <p className=""></p>
          <Image
            src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/home/achievement/BestClubSemB-2023.png"
            className="object-cover w-[36rem] rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 z-0"
          />
        </div>
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
  const rotate = useTransform(x, [-150, 150], [-18, 18]);

  const index = cards.findIndex((c) => c.id === id);
  const isFront = index === cards.length - 1;
  const offset = cards.length - 1 - index; // Offset from front to back

  const handleDragEnd = () => {
    const threshold = 100;
    if (Math.abs(x.get()) > threshold) {
      const direction = x.get() > 0 ? 1 : -1;
      animate(x, direction * 1000, {
        duration: 0.35,
        ease: "easeInOut",
        onComplete: () => {
          setCards((prev) => {
            const swiped = prev[prev.length - 1];
            const rest = prev.slice(0, -1);
            return [swiped, ...rest];
          });
          animate(x, 0, {
            duration: 0.35,
            ease: "easeOut",
          });
        },
      });
    } else {
      animate(x, 0, { duration: 0.125, ease: "linear" });
    }
  };

  return (
    <motion.img
      src={image}
      alt={`Achievement ${id}`}
      className="mt-[25rem] object-cover w-[36rem] hover:cursor-grab active:cursor-grabbing rounded-lg"
      style={{
        position: "absolute",
        x: isFront ? x : -offset * 30, // Overlap from right to left
        y: -offset * 30,
        rotate: isFront ? rotate : 0,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
        zIndex: cards.length - offset, // Front card on top
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={handleDragEnd}
      whileHover={{
        scale: isFront ? 1.05 : 1,
        transition: { duration: 0.2 },
        translateY: isFront ? "0" : "-35px",
        rotate: isFront ? 7 : 0,
      }}
    />
  );
};

export default Achievements;
