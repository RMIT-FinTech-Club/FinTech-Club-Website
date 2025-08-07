import React from "react";

export default function Goal() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Goals
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">
                Develop a fun and engaging web-based 2D chess game
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">
                Create a user-friendly NFT marketplace within the game for
                collecting and trading
              </span>
            </li>
          </ul>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">
                Showcase Vietnamese history through visually stunning 2D NFT
                skins and compelling in-game elements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">
                Build a community around the game, fostering interest in
                Vietnamese history and culture
              </span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-[#4A407D] rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">
                Utilize blockchain technology for verifiable ownership,
                scarcity, and secure trading of NFTs
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
