import HeaderTitle from "./headerTitle";
import HoFFilter from "./hofFilter"
import Categories from "./categories"
import type { HallDisplayProps } from "./types";
import { useSemester } from "./hooks/useSemester";

const HallDisplay = ({
  categories, 
  semesters, 
  onCategorySelect
} : HallDisplayProps) => {

  const { semester, semesterLabel, setSemester } = useSemester();

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
                <HoFFilter semesters={semesters} onSelect={setSemester} selectedLabel={semesterLabel}/>
            </div>
  
            <Categories categories={categories} setSelectedCategory={onCategorySelect}/>
          </div>
        </div>
      </section>
    );
}

export default HallDisplay