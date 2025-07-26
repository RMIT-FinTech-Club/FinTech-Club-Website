"use client";
import HeaderTitle from "./hall-components/headerTitle";
import HoFFilter from "./hall-components/hofFilter"
import Categories from "./hall-components/categories"

import {useState} from "react"

export interface HallOfFameMember {
  _id: string;
  name: string;
  achivement: string;
  category: string;     
  semester: string;     
  imageURL: string;
  uuid?: string;
}

export default function HallOfFamePage() {
  
  const categories = ["Department MVP", "Academic Ace", "Project MVP", "Community Builder", "Rookie of the Semester", "Best Department", "Club MVP"]
  const semesters = ["Semester A", "Semester B", "Semester C"]

  const [selectedSemester, setSelectedSemester] = useState("");
  return (
    <section className="relative py-10 overflow-hidden ">
      <div className='flex flex-row justify-center'>
        {/* <div>
          <img src="/bear_sideway.svg" alt="Mascot" className="absolute left-0 top-1/3 z-10 h-2/6 sm:h-3/6 md:h-4/6 lg:h-full xl:h-full md:-translate-y-1/3 lg:-translate-y-1/3" />
        </div> */}

        {/* > lg (1024px and up) */}
        <div className="hidden lg:block">
          <img
            src="/bear_sideway.svg"
            alt="Mascot"
            className="
              absolute left-0 top-1/3 z-10
              h-4/6 xl:h-full
              -translate-y-1/3
            "
          />
        </div>

        {/* < lg (smaller than 1024px) */}
        <div className="block lg:hidden">
          <img
            src="/bear_sideway.svg"
            alt="Mascot"
            className="
              absolute left-0 top-1/3 z-10
              h-2/6 sm:h-2/6 md:h-3/6
              -translate-y-1/3
            "
          />
        </div>

        <div className="flex flex-col items-center py-10 lg:w-7/12 md:w-7/12 w-5/12">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end items-center w-full">
              <HeaderTitle text="Hall of Fame" />
              <HoFFilter semesters={semesters} onSelect={setSelectedSemester}/>
          </div>

          <Categories categories={categories} semester={selectedSemester}/>
        </div>
      </div>
    </section>
  );
}
