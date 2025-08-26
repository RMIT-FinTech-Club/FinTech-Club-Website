"use client";
import HeaderTitle from "./headerTitle";
import HonoreeList from "./honoree-display/honoreeList";
import CategoryCard from "./hall-display/categoryCard";
import type { CategoryPageProps } from "./types";
import { useMemo } from "react";

const HonoreePage = ({
    members,
    category,
    semester,
    onBack
} : CategoryPageProps) => {

  const filteredMembers = useMemo(() => {
    return members.filter(m => m.semester === semester && m.category === category);
  }, [members, semester, category]);

  return (
    <section className="relative pt-10 overflow-hidden bg-[#F9FAFB]">
      <div className='flex flex-row justify-center'>

        {/* > lg (1024px and up) */}
        <div className="hidden lg:block">
          <img
            src="/bear_sideway.svg"
            alt="Mascot"
            className="
              absolute left-0 top-1/3 z-10
              h-4/6 xl:h-5/6
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
          <HeaderTitle text="Hall of Fame" />

          {category && <div className="m-10"><CategoryCard category={category}/></div>}

          <HonoreeList members={filteredMembers} />

          <div className="bg-[#2C305F] rounded-2xl p-1 mt-5">
            <button 
              className="bg-[#DCB968] font-semibold rounded-xl p-1 px-2 text-bold"
              onClick={() => onBack?.()}
            >
                Go Back
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HonoreePage;