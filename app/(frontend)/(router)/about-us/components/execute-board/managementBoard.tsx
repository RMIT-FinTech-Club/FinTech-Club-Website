import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import React, { useRef } from "react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import "./styles.css";
import Link from "next/link";

type ManagementBoardCardProps = {
  image: string;
  name: string;
  position: string;
  linkedin: string;
};

const managementBoardData = [
  {
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/management_board/MinhNgoc-HoB-removebg-preview.png",
    name: "TRUONG MINH NGOC",
    position: "Head of Business",
    linkedin: "https://www.linkedin.com/in/truong-minh-ngoc/",
  },
  {
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/management_board/BaoNgoc-HoHR-removebg-preview.png",
    name: "NGUYEN BAO NGOC",
    position: "Head of Human Resources",
    linkedin: "https://www.linkedin.com/in/helene-ngoc-nguyen/",
  },
  {
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/management_board/Hoang+Anh_Head_Marketing.png",
    name: "NGUYEN TRAN HOANG ANH",
    position: "Head of Marketing",
    linkedin: "https://www.linkedin.com/in/hoang-anh-nguyen-tran-30b67a232/",
  },
  {
    image:
      "https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/management_board/DiemQui-HoT-removebg-preview.png",
    name: "HUYNH LE DIEM QUI",
    position: "Head of Technology",
    linkedin:
      "https://www.linkedin.com/in/qu%C3%AD-hu%E1%BB%B3nh-l%C3%AA-di%E1%BB%85m-a0473424a/",
  },
];

const ManagementBoard = () => {
  return (
    // using hex color (invalid)
    <section className="relative bg-[#F9FAFB] bg-cover bg-center pt-[5rem]">
      <Image
        src="https://fintech-club-website.s3.ap-southeast-2.amazonaws.com/about_us/assets/Mascot+-+M%E1%BA%B7t+b%C3%AAn.svg"
        alt="Bear mascot"
        className="absolute left-[-8rem] top-[-5rem] rotate-[35deg] scale-x-[-1] z-30"
        width={368}
      />
      <div className="absolute bottom-[-2rem] right-[8rem] w-[7rem] h-[7rem] bg-[#C9D6EA] rounded-full z-20"></div>
      <div className="absolute bottom-[-2rem] right-[13rem] w-[3.7rem] h-[3.7rem] bg-[#DBB968] rounded-full z-10"></div>
      <div className="absolute bottom-[0.5rem] right-[16rem] w-[3.7rem] h-[3.7rem] bg-[#2C305F] rounded-full z-10"></div>
      <div className="absolute bottom-[0.2rem] right-[21rem] w-[1.8rem] h-[1.8rem] bg-[#2C305F] rounded-full z-10"></div>
      <div className="absolute bottom-[4.8rem] right-[15rem] w-[1.3rem] h-[1.3rem] bg-[#C9D6EA] rounded-full z-10"></div>
      <div className="absolute bottom-[3rem] right-[5.5rem] w-[1.3rem] h-[1.3rem] bg-[#C9D6EA] rounded-full z-10"></div>
      <div className="absolute bottom-[3rem] right-[2.4rem] w-[4rem] h-[4rem] bg-[#2C305F] rounded-full z-10"></div>

      <main className="mx-[64px] 2xl:mx-[10rem]">
        <div className="grid text-right">
          <h2 className="leading-8 text-[#5E5E92] text-[2.2rem] font-bold">
            Meet Our
          </h2>
          <h1 className=" text-[#DCB968] text-[4.3rem]">Management Board</h1>
          <p className="leading-3 w-full text-[#000000]">
            Meet the talented representatives behind the four pillars of RMIT Vietnam FinTech Club!
          </p>
        </div>
        <div className=" pt-16 pb-[8rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] 2xl:gap-[5rem]">
          {managementBoardData.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref);
            return (
              // effect
              <motion.div
                key={index}
                ref={ref}
                animate={{
                  y: isInView ? (index % 2 === 0 ? 25 : -25) : 0,
                  opacity: isInView ? 1 : 0.7,
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <MANAGEMENT_BOARD_CARD {...item} />
              </motion.div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

function MANAGEMENT_BOARD_CARD({
  image,
  name,
  position,
  linkedin,
}: ManagementBoardCardProps) {
  return (
    <Card className="relative mt-[1.5rem] rounded-2xl border-[4px] border-[#F7D27F] border-solid overflow-hidden">
      <CardHeader className="pb-0 pt-0 h-[12rem] 2xl:h-[16rem]">
        <div className="z-0">
          <Image
            alt={`${name} profile`}
            src={image}
            className="object-cover w-full h-full translate-y-[13%]"
          />
        </div>
      </CardHeader>
      <CardBody className=" relative z-10 overflow-visible pb-[0.5rem] pl-[1rem] pt-[1.5rem] bg-[#F7D27F] rounded-t-[30px] flex justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h6 className="leading-6 font-semibold text-[0.9rem] text-[#2C305F]">
              {name}
            </h6>
            <p className="leading-5 text-[#2C305F] text-[0.7rem]">{position}</p>
          </div>
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Visit LinkedIn"
          >
            <IconBrandLinkedin
              size={40}
              color="#2C305F"
              strokeWidth={0.8}
              className="transition duration-300 transform hover:scale-110 hover:brightness-150 hover:drop-shadow-[0_0_6px_#2C305F]"
            />
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}
export default ManagementBoard;
