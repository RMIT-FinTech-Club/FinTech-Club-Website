"use client"
import { useState, useEffect, useRef, type Dispatch, type SetStateAction } from 'react';

interface EventTeamProps {
    sectionValue: {
        team: {
            bgc: string;
            image: string;
            name: string;
            role: string;
            link: string;
        }[];
    };
}

const EventTeam: React.FC<EventTeamProps> = ({ sectionValue }) => {
    const { team } = sectionValue;

    const [currentMember, setCurrentMember]: [number, Dispatch<SetStateAction<number>>] = useState(0);
    const [movePosition, setMovePosition]: [number, Dispatch<SetStateAction<number>>] = useState(0);
    const [isMobile, setIsMobile]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

    const isDragging = useRef<boolean>(false);
    const timeWait = useRef<boolean>(false);
    const sliderReversed = useRef<boolean>(false);
    const startPosition = useRef<number | undefined>(undefined);
    const currentPosition = useRef<number | undefined>(undefined);
    const currentMemberRef = useRef<number>(currentMember);

    useEffect(() => {
        currentMemberRef.current = currentMember;
    }, [currentMember]);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextMember = () => setCurrentMember((prev) => Math.min(prev + 1, team.length - 1));
    const prevMember = () => setCurrentMember((prev) => Math.max(prev - 1, 0));

    const handleNavigation = (direction: "next" | "prev") => {
        timeWait.current = true;
        direction === "next" ? nextMember() : prevMember();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (window.innerWidth < 768 && !isDragging.current && !timeWait.current) {
                if (!sliderReversed.current) currentMemberRef.current === team.length - 1 ? (sliderReversed.current = true) : nextMember();
                else currentMemberRef.current === 0 ? (sliderReversed.current = false) : prevMember();
            }
            else timeWait.current = false;
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const handleTouchStart = (e: React.TouchEvent) => {
        startPosition.current = e.touches[0].clientX;
        isDragging.current = true;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging.current && startPosition.current !== undefined) currentPosition.current = e.touches[0].clientX;
        if (currentPosition.current && startPosition.current) setMovePosition(startPosition.current - currentPosition.current);
    };

    const handleTouchEnd = () => {
        setMovePosition(0);
        isDragging.current = false;
        timeWait.current = true;

        if (startPosition.current !== undefined && currentPosition.current !== undefined) {
            const movedBy = startPosition.current - currentPosition.current;

            if (movedBy > 50 && currentMemberRef.current < team.length - 1) nextMember();
            if (movedBy < -50 && currentMemberRef.current > 0) prevMember();
        }
    };

    const imgClasses = "bg-contain bg-center bg-no-repeat";
    const btnClasses = "flex justify-center items-center w-[15vw] aspect-square rounded-full mt-[5vw] mx-[7vw] border border-solid";

    return (
        <div className="flex flex-col justify-center items-center px-[5vw] pt-[10vw] md:pb-[5vw] pb-[10vw]">
            <div className="flex md:justify-between justify-center items-center w-full">
                <h2 className="md:text-[2vw] text-[5vw] md:tracking-[0.1vw] tracking-[0.2vw] text-deepBlue font-bold uppercase text-center my-[3vw] md:my-0">
                    The organizing <span className="text-gold">Team</span>
                </h2>
                <div className="grow mx-[1vw] h-[2px] bg-lightPurple md:inline hidden"></div>
                <div className={`${imgClasses} h-[4vw] aspect-[10/9] mr-[1vw] md:inline hidden`} style={{ backgroundImage: "url(/projectPage/decor_4.png)" }}></div>
                <div className={`${imgClasses} h-[3.5vw] aspect-[3/1] md:inline hidden`} style={{ backgroundImage: "url(/projectPage/bear_1.png)" }}></div>
            </div>

            <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="flex justify-between md:w-full w-[90vw] mt-[5vw] overflow-hidden rounded-[20px]"
            >
                {team.map((member, index) => (
                    <a key={index} href={member.link}>
                        <div
                            style={{ backgroundColor: member.bgc, transform: isMobile ? `translateX(calc(-${90 * currentMember}vw - ${movePosition * 1.5}px))` : "none" }}
                            className="group relative flex justify-center items-end w-[90vw] md:w-[15vw] aspect-[3/4] overflow-hidden cursor-pointer transition-all rounded-none md:rounded-[20px]"
                        >
                            <div
                                className="absolute left-1/2 translate-x-[-50%] top-[10%] w-[150%] aspect-[3/4] bg-cover bg-center bg-no-repeat md:group-hover:scale-[1.15] group-hover:scale-[1] transition-all duration-300"
                                style={{ backgroundImage: `url(${member.image})` }}
                            ></div>
                            <div className="absolute md:w-[14vw] md:h-[4vw] w-[85vw] h-[20vw] p-[2vw] md:p-[0.5vw] left-[2.5vw] bottom-[2.5vw] md:left-[0.5vw] md:bottom-[0.5vw] bg-white rounded-[15px] flex flex-col">
                                <h3 className="w-full text-[6vw] md:text-[1vw] leading-[8vw] md:leading-[1.5vw] text-deepBlue font-bold text-center md:group-hover:brightness-200 group-hover:brightness-100 transition-all duration-300">
                                    {member.name}
                                </h3>
                                <p className="w-full text-[6vw] md:text-[1vw] leading-[8vw] md:leading-[1.5vw] text-gold font-semibold text-center">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <div className="flex md:hidden justify-between">
                <button
                    className={`${btnClasses} ${currentMember === 0 ? "bg-white border-deepBlue" : "bg-deepBlue border-white"}`}
                    onClick={() => handleNavigation("prev")}
                >
                    <svg className="w-[7vw] aspect-square" fill={currentMember === 0 ? "#0D1742" : "#FFF"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        {/* {Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc} */}
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                </button>
                <button
                    className={`${btnClasses} ${currentMember === team.length - 1 ? "bg-white border-deepBlue" : "bg-deepBlue border-white"}`}
                    onClick={() => handleNavigation("next")}
                >
                    <svg className="w-[7vw] aspect-square" fill={currentMember === team.length - 1 ? "#0D1742" : "#FFF"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        {/* {Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc} */}
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default EventTeam;
