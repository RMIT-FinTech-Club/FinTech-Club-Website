// import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import React from "react";
import "./styles.css";
import Link from "next/link";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef} from "react";

type ExecutiveBoardCardProps = {
  image: string;
  name: string;
  position: string;
  linkedin: string;
};

const executiveBoardData = [
  {
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/executive_board/EVP.png",
    name: "Le Nguyen Khuong Duy",
    position: "External Vice President",
    linkedin: "https://www.linkedin.com/in/minhpnh/",
  },
  {
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/executive_board/DungNguyen-President.svg",
    name: "Truong Quoc Tri",
    position: "President",
    linkedin:
      "https://www.linkedin.com/in/nguy%E1%BB%85n-m%E1%BA%A1nh-d%C5%A9ng-598173262/",
  },
  {
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/executive_board/IVP-removebg-preview.png",
    name: "Nguyen Van Khue",
    position: "Internal Vice President",
    linkedin: "https://www.linkedin.com/in/minh-hoang-9229a62a4/",
  },
  {
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/executive_board/CFO-removebg-preview.png",
    name: "Nguyen Thien Dan",
    position: "Chief of Finance Officer",
    linkedin: "https://www.linkedin.com/in/tiendangtran/",
  },
];

const ExecuteBoard = () => {
  return (
    // using hex color (invalid)
    <section className="relative bg-[#F9FAFB] bg-cover bg-center pt-8">
      <main className="mx-[64px]">
        <div className="grid">
          <h2 className="leading-8 text-[#5E5E92] text-[2.2rem] font-bold">
            Meet Our
          </h2>
          <h1 className=" text-[#2C305F] text-[4.3rem]">Executive Board</h1>
          <p className="leading-3 w-full text-[#000000]">
            Meet the fierce, brilliant, and passionate minds behind the FinTech
            Club machine!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] my-16">
          {executiveBoardData.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref);

            return (
              <motion.div
                key={index}
                ref={ref}
                animate={{
                  y: isInView ? (index % 2 === 0 ? -20 : 20) : 0,
                  opacity: isInView ? 1 : 0.7,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <EXECUTIVE_BOARD_CARD {...item} />
              </motion.div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

function EXECUTIVE_BOARD_CARD({
  image,
  name,
  position,
  linkedin,
}: ExecutiveBoardCardProps) {
  return (
    <Card className="relative mt-[1.5rem] rounded-2xl border-[4px] border-[#2C305F] border-solid overflow-hidden">
      <CardHeader className="pb-0 pt-0 h-[12rem]">
        <div className="z-0">
          <Image
            alt={`${name} profile`}
            src={image}
            className="object-cover w-full h-full translate-y-[13%]"
          />
        </div>
      </CardHeader>
      <CardBody className=" relative z-10 overflow-visible pb-[0.5rem] pl-[1rem] pt-[1.5rem] bg-[#2C305F] rounded-t-[30px] flex justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h6 className="leading-6 font-semibold text-[0.9rem] text-[#FFEFCA]">
              {name}
            </h6>
            <p className="leading-5 text-[#FFEFCA] text-[0.7rem]">{position}</p>
          </div>
          <Link href={linkedin} target="_blank" rel="noopener noreferrer" title="Visit LinkedIn">
            <IconBrandLinkedin size={40} color="#FFEFCA" strokeWidth={0.8} className="transition duration-300 transform hover:scale-110 hover:brightness-150 hover:drop-shadow-[0_0_6px_#FFEFCA]"/>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

export default ExecuteBoard;
