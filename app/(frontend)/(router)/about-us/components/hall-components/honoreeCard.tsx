"use client";
import type { HonoreeCardProps } from "./types";

export default function HonoreeCard({ name, achievement, photo_url }: HonoreeCardProps) {

  return (
    <div className="
            inline-block bg-[#DBB968]
            p-1 m-1
            rounded-[40px]
            xl:w-56 lg:w-52 md:w-48 w-44
            xl:h-56 lg:h-52 md:h-48 h-44
    ">
        <div className="bg-[#2C305F] px-4 py-2 rounded-[36px] hover:shadow-lg w-full h-full">
            <div className="w-full h-full rounded-[30px] overflow-hidden">
                <img 
                    src={photo_url} 
                    loading="lazy" 
                    alt={name} 
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="
                    absolute
                    lg:-translate-y-14 md:-translate-y-12 sm:-translate-y-10 -translate-y-8
                    lg:-translate-x-3 md:-translate-x-3 sm:-translate-x-1 -translate-x-3
                    xl:w-52 lg:w-48 md:w-44 w-40
                    xl:h-16 lg:h-14 md:h-12 h-10
                    rounded-[30px]
                    overflow-hidden
            ">
                {/* Layer 1: bottom gradient */}
                <div className="
                    absolute inset-0
                    rounded-[30px]
                    bg-[linear-gradient(to_bottom,rgba(240,237,255,0.3)_0%,rgba(13,23,66,0.9)_50%,rgba(94,94,146,0.9)_100%)]
                    "
                ></div>

                {/* Layer 2: top gradient with blur */}
                <div
                    className="
                        absolute inset-0
                        rounded-[30px]
                        p-4
                        flex flex-col justify-center items-center
                    "
                    style={{
                    backdropFilter: 'blur(15px)',
                    WebkitBackdropFilter: 'blur(15px)',
                    background:
                        'linear-gradient(to_top, rgba(240,237,255,0.3) 0%, rgba(13,23,66,0.9) 50%, rgba(94,94,146,0.8) 100%)',
                    }}
                >
                    <div className="w-side-margin">
                        <p className="text-xs md:text-sm lg:text-sm xl:text-sm uppercase font-extrabold text-[#DBB968]">{name}</p>
                        <p className="text-xs md:text-sm lg:text-sm xl:text-sm uppercase font-semibold text-white">MVP of My Heart</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}