import { fontSans } from "@/config/fonts";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const historyData = [
  {
    year: "2019",
    title: "A Big-Four Inspiration",
    content:
      "Ms. Mai Hoang My Hao, our visionary leader, learned about the T-shaped knowledge concept while at a Big-4 firm internship and recognized its growing demand by employers internationally. Most RMIT clubs then were specialized, so she along with her friend Ms. Mai Doan Ngoc Han, co-founded a multi-disciplinary learning hub for Business, Finance, and Tech students to gain T-shaped skills, and explore the Finance-Technology intersection. With the support of Dr. Binh Nguyen, Senior Program Manager of RMIT’s Blockchain-Enabled Business major, the club was officially unveiled on February 10th, 2020!",
  },
  {
    year: "2020",
    title: "An Ambitious Vision",
    content:
      "Under Ms. Hao’s President tenure, she laid the club’s foundation for future growth. With her intellectual prowess, charitable heart, and ambitious passion, she spearheaded the club’s operations, initial projects, training workshops, collaborative efforts, and industry engagements to deliver value and foster an open-sharing FinTech Club environment. Her relentless efforts resulted in large numbers of talented students flocking to the club, further contributing to its acceleration and recognition in the RMIT community.",
  },
  {
    year: "2021",
    title: "Liftoff!",
    content:
      "Despite COVID-related disruptions, 2021 was an explosive year for FinTech Club. As Bitcoin prices peaked, FinTech-related investments soared, so was FinTech Club’s brand name elevated to the next level. We won “Best Academic Club of Semester” RMIT title for two semesters, successfully organized two major large-scale events envisioned by Ms. Hao, and our club members achieved significant recognition in international competitions. Apart from academics, we also initiated media endeavors like the FinTech Podcast, CafeFin weekly news, and the FinTech Magazine.",
  },
  {
    year: "2022",
    title: "Resilient As Ever",
    content:
      "With a bold mindset, FinTech Club ventured into a broad range of projects and activities in 2022, to deliver more diverse value and experiences for members. Apart from annualized events, we also initiated a charity-fundraising initiative for social causes, partnered with various industry partners, and initiated an internal blockchain development competition called “Star-Up” in collaboration with KardiaChain. Internally, we also created new bonding activity formats, such as the “End-of-Semester Trip” and the “FinTech Olympics”. Despite significant economic fluctuations, our FinTech Club remained resilient through an experimentative spirit.",
  },
  {
    year: "2023",
    title: "Without The People, There Wouldn’t Be A Club!",
    content:
      "In the pursuit of status, recognition and achievement, we as a club cannot forget what makes us who we are – the people. In 2023, our leadership philosophy shifted more towards fostering member well-being and skill/knowledge development. Our club members became more empowered, more connected with each other through this period, through projects such as the RMIT FinTech Blockchain Forum 2023, Club Day project, RMIT Business Plan Competition 2023, Finalytics Day, SnapID app development, and more. We learned that member empowerment is everything.",
  },
  {
    year: "2024",
    title: "Creating Exceptional Value",
    content:
      "After four years of trials-tribulations, our club had grown more experienced and more matured, readying us for a giant leap in 2024 and beyond! Our mission this year is to deliver exceptional value to internal club members, while further heightening our club’s presence in the RMIT community and abroad. To realize this objective, we aim to organize more Business & Tech skill workshops, upscale our media projects, and initiate more mutually beneficial collaborations with industry and student clubs to create real-life experiences for members. Ultimately, we want to further contribute to a FinTech Club that members are proud of, and that the community admires.",
  },
  {
    year: "2025",
    title: "lorem10",
    content: "lorem",
  },
];

export default function HistorySection() {
  const [emblaHorizontalRef, emblaHorizontalApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });

  const [centerSlideIndex, setCenterSlideIndex] = useState<number>(0);

  useEffect(() => {
    if (emblaHorizontalApi) {
      const onSelect = () => {
        const selectedIndex = emblaHorizontalApi.selectedScrollSnap();
        setCenterSlideIndex(selectedIndex);
      };

      emblaHorizontalApi.on("select", onSelect);
      return () => {
        emblaHorizontalApi.off("select", onSelect);
      };
    }
  }, [emblaHorizontalApi]);

  return (
    <section className="bg-[#F9FAFB] w-full px-6 pt-[1.5rem] pb-[2.5rem] text-center">
      <div className="relative w-full">
        <img
          src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/assets/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
          alt="Bear mascot"
          className="absolute w-[368px] left-[-8rem] top-[23rem] rotate-[50deg] z-30"
        />
        <img
          src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/assets/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
          alt="Bear mascot"
          className="absolute w-[368px] top-[23rem] right-[-8rem] rotate-[-50deg] z-30"
        />
        <div className="absolute top-[4rem] left-[2rem] w-[1rem] h-[1rem] bg-[#2C305F] rounded-full z-10"></div>
        <div className="absolute top-[4rem] right-[2rem] w-[1rem] h-[1rem] bg-[#2C305F] rounded-full z-10"></div>
        <div className="absolute top-[4.35rem] left-[2.2rem] w-[12rem] h-[0.25rem] bg-[#2C305F] z-10"></div>
        <div className="absolute top-[4.35rem] right-[2.2rem] w-[12rem] h-[0.25rem] bg-[#2C305F] z-10"></div>

        <div className="absolute bottom-[-4rem] left-[6rem] w-[4.3rem] h-[4.3rem] bg-[#2C305F] rounded-full z-10"></div>
        <div className="absolute bottom-[-2.6rem] left-[3rem] w-[4.3rem] h-[4.3rem] bg-[#C9D6EA] rounded-full z-20"></div>
        <div className="absolute bottom-[2.6rem] left-[1.5rem] w-[4.3rem] h-[4.3rem] bg-[#DBB968] rounded-full z-10"></div>
        <div className="absolute bottom-[2.6rem] left-[9.5rem] w-[4.3rem] h-[4.3rem] bg-[#2C305F] rounded-full z-10"></div>
        <div className="absolute bottom-[9rem] left-[4rem] w-[1rem] h-[1rem] bg-[#DBB968] rounded-full z-10"></div>
        <div className="absolute bottom-[6rem] left-[15rem] w-[1rem] h-[1rem] bg-[#2C305F] rounded-full z-10"></div>

        <div className="absolute bottom-[-4rem] right-[6rem] w-[4.3rem] h-[4.3rem] bg-[#2C305F] rounded-full z-10"></div>
        <div className="absolute bottom-[-2.6rem] right-[3rem] w-[4.3rem] h-[4.3rem] bg-[#C9D6EA] rounded-full z-20"></div>
        <div className="absolute bottom-[2.6rem] right-[1.5rem] w-[4.3rem] h-[4.3rem] bg-[#DBB968] rounded-full z-10"></div>
        <div className="absolute bottom-[2.6rem] right-[9.5rem] w-[4.3rem] h-[4.3rem] bg-[#2C305F] rounded-full z-10"></div>
        <div className="absolute bottom-[9rem] right-[4rem] w-[1rem] h-[1rem] bg-[#DBB968] rounded-full z-10"></div>
        <div className="absolute bottom-[6rem] right-[15rem] w-[1rem] h-[1rem] bg-[#2C305F] rounded-full z-10"></div>

        {/* Header */}
        <div>
          <h3
            className={`text-xl text-[#2C305F] font-medium ${fontSans.style}`}
          >
            BACK TO TIME
          </h3>
          <h1 className={`leading-[4rem] text-[3rem] font-bold mt-2`}>
            <span className="text-[#2C305F]">Discover the </span>
            <span className="text-[#DCB968]">FINTECH CLUB </span>
            <br />
            <span className=" pt-[2rem] text-[#97ABD6]">Story & History</span>
          </h1>
          <p className="text-[#000] mt-4 max-w-2xl mx-auto text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dolorem consequuntur saepe hic esse omnis.
          </p>
        </div>

        {/* YEAR SECTION */}
        <div className="flex justify-center items-center gap-[4rem] my-[3.5rem]">
          {/* Always render 2 before */}
          {[centerSlideIndex - 2, centerSlideIndex - 1].map((i) =>
            i < 0 ? (
              <div key={i} className="w-24 h-24 md:w-28 md:h-28" />
            ) : (
              <div
                key={i}
                className="flex items-center justify-center bg-[#FBDC83] w-24 h-24 md:w-28 md:h-28 rounded-full cursor-pointer"
                onClick={() => setCenterSlideIndex(i)}
              >
                <span
                  className={`text-2xl  font-bold text-[#262857] ${fontSans.style}`}
                >
                  {historyData[i].year}
                </span>
              </div>
            )
          )}

          {/* Center year bubble */}
          <div className="flex items-center justify-center bg-[#262857] w-44 h-44 md:w-48 md:h-48 rounded-full">
            <span
              className={`text-4xl text-[#FBDC83] font-bold ${fontSans.style}`}
            >
              {historyData[centerSlideIndex].year}
            </span>
          </div>

          {/* Always render 2 after */}
          {[centerSlideIndex + 1, centerSlideIndex + 2].map((i) =>
            i >= historyData.length ? (
              <div key={i} className="w-24 h-24 md:w-28 md:h-28" />
            ) : (
              <div
                key={i}
                className="flex items-center justify-center bg-[#FBDC83] w-24 h-24 md:w-28 md:h-28 rounded-full cursor-pointer"
                onClick={() => setCenterSlideIndex(i)}
              >
                <span
                  className={`text-2xl font-bold text-[#262857] ${fontSans.style}`}
                >
                  {historyData[i].year}
                </span>
              </div>
            )
          )}
        </div>

        {/* Content Section */}
        <motion.div
          key={centerSlideIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-[3rem] pb-[2rem]"
        >
          <h2
            className={`text-4xl font-semibold text-[#97ABD6] mb-4 ${fontSans.style}`}
          >
            {historyData[centerSlideIndex].title}
          </h2>
          <p
            className={`text-justify text-[#000] text-lg px-[3.5rem] ${fontSans.style}`}
          >
            {historyData[centerSlideIndex].content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
