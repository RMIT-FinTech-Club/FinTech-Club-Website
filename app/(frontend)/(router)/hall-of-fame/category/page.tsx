"use client";
import { useSearchParams } from "next/navigation";
import CategoryCard from '../../about-us/components/hall-components/categoryCard'
import HeaderTitle from '../../about-us/components/hall-components/headerTitle'
import HonoreeList from "./components/honoreeList";
import { useRouter } from "next/navigation";

const members = [
      {
        name: "Alice Nguyen",
        achievement: "Led the club to win inter‑university hackathon.",
        category: "Department MVP",
        photo_url: "/ManhDung.svg",
        semester: "2025A",
      },
      {
        name: "Bob Tran",
        achievement: "Top GPA in the department with outstanding research contributions.",
        category: "Academic Ace",
        photo_url: "/ManhDung.svg",
        semester: "2025B",
      },
      {
        name: "Charlie Le",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Project MVP",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
      {
        name: "Penny Teller",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Community Builder",
        photo_url: "/ManhDung.svg",
        semester: "2025A",
      },
      {
        name: "Sheldon Cooper",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Rookie of the Semester",
        photo_url: "/ManhDung.svg",
        semester: "2025B",
      },
      {
        name: "Rachel Green",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Best Department",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
      {
        name: "Monica Geller",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Best Department",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
      {
        name: "Ross Geller",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Best Department",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
      {
        name: "Joey Tribbiani",
        achievement: "Delivered key features ahead of schedule, ensuring project success.",
        category: "Best Department",
        photo_url: "/ManhDung.svg",
        semester: "2025C",
      },
]

const CategoryPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const semester = searchParams.get("semester");
  const category = searchParams.get("category");

  const filteredMembers = members.filter(
    (m) =>
      (!semester || m.semester === semester) &&
      (!category || m.category === category)
  );

  return (
    <section className="relative pt-10 overflow-hidden ">
      <div className='flex flex-row justify-center'>
        {/* <div>
          <img src="/bear_sideway.svg" alt="Mascot" className="absolute left-0 top-1/3 z-10 h-2/6 sm:h-2/6 md:h-3/6 lg:h-4/6 xl:h-full md:-translate-y-1/3 lg:-translate-y-1/3" />
        </div> */}

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

          {category && semester && <div className="m-10"><CategoryCard category={category} semester={semester}/></div>}

          <HonoreeList members={filteredMembers} />

          <div className="bg-[#2C305F] rounded-2xl p-1 mt-5">
            <button 
              className="bg-[#DCB968] font-semibold rounded-xl p-1 px-2 text-bold"
              onClick={() => router.back() 
            }>
                Go Back
            </button>
          </div>
        </div>

        
        {/* <img src='/bubblesTop.svg' alt='decorTop' className="absolute top-0 right-0"/>
        <img src='/bubblesBottom.svg' alt='decorBottom' className="absolute bottom-0 right-0"/> */}
        {/* > lg (1024px and up) */}
        <div className="hidden xl:block lg:block md:block">
          <img
            src="/bubblesTop.svg"
            alt="decorTop"
            className="absolute top-0 right-0 h-[15%]"
          />
          <img
            src="/bubblesBottom.svg"
            alt="decorBottom"
            className="absolute bottom-0 right-0 h-[25%]"
          />
        </div>

        {/* < md (smaller than 768px) */}
        <div className="hidden sm:block">
          <img
            src="/bubblesTop.svg"
            alt="decorTop"
            className="absolute top-0 right-0 h-0"
          />
          <img
            src="/bubblesBottom.svg"
            alt="decorBottom"
            className="absolute bottom-0 right-0 h-0"
          />
        </div>

      </div>
    </section>
  );
}

export default CategoryPage;