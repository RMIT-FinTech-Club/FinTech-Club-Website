"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Department =
    "HumanResources"
    | "Marketing"
    | "Technology"
    | "Business"



type DepartmentInfo = {
    name: string;
    description: string;
    background: string;
};

const departments: Record<Department, DepartmentInfo> = {
    HumanResources: {
        name: "HR DEPARTMENT",
        description:
            "What is a club, without its people? Where would the club’s fun and desirability be, without its culture? That is where the Human Resources Department comes in. HR is in charge of organizing the club’s internal bonding activities, the FinTech Olympics, Newbies Orientation Day, End of Semester Award Ceremony, and the FinTech Field Trip – in addition to ensuring member well-being, safety and connection via the HR Committee. The HR Department consists of some of the kindest, most caring, most enthusiastic members in FTC. So, if you want to be a part of this lovely community, join the HR Dept.!",
        background: "https://ik.imagekit.io/wiiiaaa/Rectangle%20418-5.png?updatedAt=1753272450185",
    },

    Technology: {
        name: "TECH DEPARTMENT",
        description:
            "With an unquenchable thirst for coding, fixing bugs, the Technology Department represents the second pillar of our organization. We are responsible for the development of the club’s technical projects, including the SnapID Computer Vision Project, RBPC Website, and currently the FinTech Club Website Project. Beyond practical coding projects, we also provide internal training & sharing sessions, public workshops, mentoring initiatives, and memorable bonding activities for Tech Dept. members. Our members receive the full package of skill improvement, industry connections, and a belonging environment.",
        background: "https://ik.imagekit.io/wiiiaaa/Rectangle%20418-8.png?updatedAt=1753273775176",
    },

    Marketing: {
        name: "MARKETING DEPARTMENT",
        description:
            "With a creative and expressive mindset, the Marketing Department is accountable for maintaining and spreading the digital presence of the club’s story and mission. Through various media projects, collaborative teams, adventurous campaigns, the Marketing Dept. never failed to disappoint in generating the most engaging and visually appealing content to hook the eyes of curious FinTech Club followers! So, you want to express yourself, unleash your creativity, unbound your imagination? Join the Marketing Dept. to help us bolster our club presence, and fulfill your creative interests!",
        background: "https://ik.imagekit.io/wiiiaaa/Rectangle%20418-7.png?updatedAt=1753273775201",
    },


    Business: {
        name: "BUSINESS DEPARTMENT",
        description:
            "The Business Department is regarded as the cornerstone of FinTech Club’s unequivocal success and rapid development. This curiosity-driven Dept. is actively involved in researching, brainstorming and collaborating with others to generate academic values, operation frameworks and awesome activities related to the Finance, Business and Technology space. More specifically, Business members are involved in curating internal skill training, knowledge workshops, and composing well-researched articles on Financial Technology news and trends to educate members, and further engage the external community to our core disciplines!",
        background: "https://ik.imagekit.io/wiiiaaa/Rectangle%20418-9.png?updatedAt=1753274688967",
    },
};

const Department = () => {

    const [department, setDepartment] = useState<DepartmentInfo>(
        departments.HumanResources,
    );


    return (
        <div className="relative w-screen h-[60rem] max-w-[100vw] bg-[#F9FAFB]">
            {/* nền xanh */}
            <div className="relative">
                <div className="absolute bg-background bg-cover w-screen h-screen ">
                    <img src="https://ik.imagekit.io/wiiiaaa/Be%20One%20of%20Us.png?updatedAt=1753217247818"></img>
                </div>
                {/* nền trắng */}
                <div className="absolute pr-[1000px] pb-8 w-[1200px] h-[835px] bg-white ">

                </div>
                {/*con gấu */}
                <div className="absolute w-40 h-40">
                    <img src="https://ik.imagekit.io/wiiiaaa/Ma%CC%A3%CC%86t%20tru%CC%9Bo%CC%9B%CC%81c.png?updatedAt=1753273775125"></img>
                </div>
                {/* hình tròn góc phải*/}
                <div className="absolute w-[8rem] h-[8rem] bg-[#DBB968] rounded-full top-[3rem] right-[4rem]"></div>
                <div className="absolute w-[2rem] h-[2rem] bg-[#DBB968] rounded-full top-[8rem] right-[1rem]"></div>
                <div className="absolute w-[8rem] h-[8rem] bg-[#2B305E] rounded-full top-[-7rem] right-[-2rem]"></div>
                {/* hình dept */}
                <section className="absolute flex flex-col place-items-end pl-[730px] pt-36">
                    <img
                        src={department.background}
                        alt={department.background ? `Image for ${department.name} department` : "No image available"}
                    />
                </section>
                {/* ngôi sao to */}
                <div className="absolute pl-[530px] pt-20 w-20 h-20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="158" height="170" viewBox="0 0 158 170" fill="none">
                        <path d="M109.947 114.433L153.358 93.6823L154.111 93.2659C155.229 92.5574 156.138 91.5529 156.745 90.3549C157.353 89.1569 157.637 87.8083 157.57 86.4469C157.502 85.0854 157.085 83.76 156.36 82.6058C155.636 81.4516 154.63 80.5101 153.446 79.8773L110.323 56.761L103.743 7.4808L103.587 6.6406C103.262 5.31202 102.602 4.0894 101.673 3.0979C100.744 2.1064 99.5806 1.38168 98.3014 0.99792C97.0222 0.614161 95.6734 0.585176 94.393 0.913908C93.1126 1.24264 91.9467 1.91729 91.0146 2.86879L57.0972 37.4625L9.72125 27.7465L8.90419 27.6253C7.5802 27.5057 6.25586 27.7501 5.06705 28.3333C3.87823 28.9166 2.86772 29.8178 2.13921 30.9444C1.41069 32.0711 0.990361 33.3826 0.921367 34.7445C0.852378 36.1063 1.13721 37.4695 1.74663 38.6942L23.8802 83.2145L1.06692 126.517L0.702629 127.315C0.217939 128.571 0.0680532 129.943 0.268231 131.291C0.468409 132.64 1.0115 133.916 1.84217 134.991C2.67284 136.066 3.7614 136.9 4.99694 137.409C6.2325 137.918 7.57089 138.084 8.87575 137.889L56.4669 130.799L89.8606 167.233C90.8273 168.288 92.057 169.05 93.4102 169.432C94.7635 169.814 96.1864 169.8 97.5178 169.393C98.8493 168.985 100.036 168.2 100.944 167.127C101.852 166.053 102.444 164.733 102.655 163.317L109.947 114.433Z" fill="#F7D27F" />
                    </svg>
                </div>
                {/*ngôi sao nhỏ */}
                <div className="absolute pl-[450px] pt-14">
                    <svg xmlns="http://www.w3.org/2000/svg" width="71" height="75" viewBox="0 0 71 75" fill="none">
                        <path d="M49.0552 50.4815L68.234 41.3138L68.5671 41.1299C69.0607 40.8169 69.4623 40.3731 69.7307 39.8438C69.9991 39.3145 70.1248 38.7187 70.0949 38.1173C70.065 37.5158 69.8806 36.9302 69.5605 36.4203C69.2405 35.9104 68.7962 35.4944 68.2731 35.2148L49.2212 25.0021L46.3144 3.23011L46.2456 2.85891C46.102 2.27195 45.8101 1.7318 45.3998 1.29375C44.9894 0.855712 44.4754 0.53553 43.9102 0.365986C43.3451 0.196442 42.7492 0.183633 42.1835 0.328872C41.6178 0.474103 41.1027 0.772161 40.6909 1.19253L25.7062 16.476L4.77559 12.1835L4.41462 12.1299C3.82967 12.0771 3.24458 12.1851 2.71936 12.4428C2.19415 12.7004 1.74771 13.0986 1.42585 13.5963C1.10399 14.0941 0.91829 14.6735 0.88781 15.2752C0.857332 15.8769 0.983167 16.4791 1.25241 17.0202L11.031 36.6892L0.952109 55.8203L0.79117 56.1726C0.577039 56.7275 0.510817 57.3337 0.599255 57.9295C0.687694 58.5252 0.927629 59.0892 1.29462 59.564C1.6616 60.0389 2.14253 60.4075 2.6884 60.6324C3.23427 60.8573 3.82556 60.9305 4.40205 60.8444L25.4278 57.7121L40.1811 73.8083C40.6082 74.2748 41.1514 74.6114 41.7493 74.7801C42.3472 74.9487 42.9758 74.9427 43.564 74.7627C44.1523 74.5827 44.6766 74.2359 45.0777 73.7615C45.4788 73.2871 45.7406 72.7041 45.8335 72.0785L49.0552 50.4815Z" fill="#F7D27F" />
                    </svg>

                </div>


                {/* chữ */}
                <div className="absolute justify-start text-wrap w-[650px] h-[200px] pl-20 pt-44 ">
                    <p className="mt-4 text-[#DCB968] font-bold text-[60px]  ">BE ONE OF US</p>
                    <p className={`font-bold text-blueMidnight mt-5 text-wrap text-[25px] md:text-5xl sm:text-4xl w-[1000px]`} >
                        {department.name}
                    </p>
                    <p className="ft-body-2 w-full mt-6 text-justify text-[#000] text-[16px] font-medium md:text-left">
                        {department.description}
                    </p>

                </div>

                {/*button explore */}
                <div className="pl-20 pt-[650px] absolute">
                    <button className="text-[#fff] bg-[#0D1742] rounded-xl w-[140px] h-[40px] font-semibold drop-shadow-lg text-[12px] ">
                        Explore more
                    </button>
                </div>

                {/* buttons */}
                <div className="pt-[730px] pl-20 mt-6 gap-5 flex text-[11px] ">
                    {(Object.keys(departments) as Department[]).map((dept) => {
                        return (
                            <button
                                className={`w-[120px] h-[58px] font-semibold drop-shadow-lg text-[#0D1742] bg-[#DBB968] rounded-xl`}
                                onClick={() => setDepartment(departments[dept])}
                            >
                                {dept.toUpperCase()}
                            </button>
                        )
                    })}
                </div>


            </div>
        </div>

    );
};

export default Department;