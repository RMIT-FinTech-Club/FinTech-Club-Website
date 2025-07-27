import { fontSans } from "@/config/fonts";

export default function FinTechInTheEyes() {
  return (
    <>
      <div className="relative w-full">
        <img
          src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+tr%C6%B0%E1%BB%9Bc.svg"
          alt="Bear mascot"
          className="absolute w-[368px] -top-[10rem] right-[-8rem] rotate-[-50deg] z-30"
        />
      </div>
      <section className="max-w-screen flex justify-center items-center bg-[#F9FAFB]">
        <div className="w-fit">
          <img
            src="https://d2prwyp3rwi40.cloudfront.net/about_us/executive_board/President-TriTruong.png"
            alt="President Avatar"
            className="w-[30vw] aspect-auto object-cover"
          />
        </div>
        <div className="flex flex-col w-[45vw]">
          <div className="flex flex-col items-start">
            <h1 className={`text-7xl py-2 text-[#DBB968] font-[1000]`}>
              FINTECH
            </h1>
            <h2
              className={`text-4xl text-[#2B305E]  font-extrabold ${fontSans.style}`}
            >
              IN THE EYES OF
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <h2
              className={`text-5xl text-[#DBB968]  font-extrabold ${fontSans.style}`}
            >
              President
            </h2>
            <h2
              className={`text-4xl text-[#2B305E]  font-extrabold ${fontSans.style}`}
            >
              Truong Quoc Tri
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <p className={`text-2xl text-justify mt-6 ${fontSans.style}`}>
              FinTech Club has been a transformative experience for me. As an
              introvert, I found it challenging to make new friends at RMIT.
              However, joining the FinTech Club changed everything. I connected
              with like-minded individuals who shared my passion for finance and
              technology. Winning the "Star-Up" competition boosted my
              confidence and skills, and becoming President allowed me to give
              back to this uplifting community.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
