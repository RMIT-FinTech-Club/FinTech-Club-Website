import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { set } from "mongoose";

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
    useEffect(() => {
        setTimeout(() => {
            console.clear()
        }, 3000)
    }, [])

    const { team } = sectionValue;
    
    const [currentMember, setCurrentMember] = useState(0);
    const [startPosition, setStartPosition] = useState<number | null>(null);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(0)

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartPosition(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || startPosition === null) return;
        const currentPosition = e.touches[0].clientX;
        setCurrentTranslate(prevTranslate + currentPosition - startPosition);
        setCurrentPosition(prevTranslate + currentPosition - startPosition)
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        const movedBy = currentTranslate - prevTranslate;

        if (movedBy < -50 && currentMember < team.length - 1) {
            setCurrentMember((prev) => prev + 1);
        } else if (movedBy > 50 && currentMember > 0) {
            setCurrentMember((prev) => prev - 1);
        }
        setPrevTranslate(currentMember * -90);
        setCurrentTranslate(currentMember * -90);
    };

    const imgClasses = "bg-contain bg-center bg-no-repeat";
    const btnClasses = "flex justify-center items-center w-[15vw] aspect-square rounded-[50%] mt-[5vw] mx-[7vw] border border-solid";

    const nextMember = () => setCurrentMember((prev) => Math.min(prev + 1, team.length - 1));
    const prevMember = () => setCurrentMember((prev) => Math.max(prev - 1, 0));

    return (
        <div className="flex flex-col justify-center items-center px-[5vw] pt-[10vw] md:pb-[5vw] pb-[10vw]">
            <div className="flex md:justify-between justify-center items-center w-full">
                <div className="md:text-[2vw] text-[5vw] md:tracking-[0.1vw] tracking-[0.2vw] text-deepBlue font-bold uppercase text-center my-[3vw] md:my-0">
                    The organizing <span className="text-gold">Team</span>
                </div>
                <div className="grow mx-[1vw] h-[2px] bg-lightPurple md:inline hidden"></div>
                <div
                    className={`${imgClasses} h-[4vw] aspect-[10/9] mr-[1vw] md:inline hidden`}
                    style={{ backgroundImage: "url(/projectPage/decor_4.png)" }}
                ></div>
                <div
                    className={`${imgClasses} h-[3.5vw] aspect-[3/1] md:inline hidden`}
                    style={{ backgroundImage: "url(/projectPage/bear_1.png)" }}
                ></div>
            </div>
            <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="flex justify-between md:w-full w-[90vw] mt-[5vw] overflow-hidden rounded-[20px]"
            >
                {team.map((member, index) => {
                    const { name, image, role, bgc, link } = member;

                    return (
                        <Link key={index} href={link}>
                            <div
                                style={{ backgroundColor: bgc, transform: `translateX(-${90 * currentMember}vw)` }}
                                className={`group relative flex justify-center items-end w-[90vw] md:w-[15vw] aspect-[3/4] overflow-hidden cursor-pointer transition-all duration-300 rounded-none md:rounded-[20px]`}
                            >
                                <div
                                    className="absolute left-[50%] translate-x-[-50%] top-[10%] w-[150%] aspect-[3/4] bg-cover bg-center bg-no-repeat md:group-hover:scale-[1.15] group-hover:scale-[1] transition-all duration-300"
                                    style={{ backgroundImage: `url(${image})` }}
                                ></div>
                                <div className="absolute md:w-[14vw] md:h-[4vw] w-[85vw] h-[20vw] p-[2vw] md:p-[0.5vw] left-[2.5vw] bottom-[2.5vw] md:left-[0.5vw] md:bottom-[0.5vw] bg-white rounded-[15px] flex flex-col">
                                    <div className="w-full text-[6vw] md:text-[1vw] leading-[8vw] md:leading-[1.5vw] text-deepBlue font-bold text-center md:group-hover:brightness-200 group-hover:brightness-100 transition-all duration-300">
                                        {name}
                                    </div>
                                    <div className="w-full text-[6vw] md:text-[1vw] leading-[8vw] md:leading-[1.5vw] text-gold font-semibold text-center">
                                        {role}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <div className="flex md:hidden justify-between">
                <div className={`${btnClasses} ${currentMember == 0 ? 'bg-white border-deepBlue' : 'bg-deepBlue border-white'}`} onClick={prevMember}>
                    <svg fill={`${currentMember == 0 ? '#0D1742' : '#FFF'}`} className="w-[7vw] aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg>
                </div>
                <div className={`${btnClasses} ${currentMember == team.length - 1 ? 'bg-white border-deepBlue' : 'bg-deepBlue border-white'}`} onClick={nextMember}>
                    <svg fill={`${currentMember == team.length - 1 ? '#0D1742' : '#FFF'}`} className="w-[7vw] aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default EventTeam;