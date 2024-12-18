import React, { useRef } from "react";
import { motion, useInView } from 'framer-motion';
import Button from "@/components/button";

interface EventGalleryProps {
    sectionValue: {
        images: string[];
    };
}

const EventGallery: React.FC<EventGalleryProps> = ({ sectionValue }) => {
    const { images } = sectionValue;

    const more1Ref = useRef<HTMLDivElement>(null);
    const more2Ref = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(galleryRef, { once: true, margin: '0px 0px -20% 0px' });

    const renderImages = (startIndex: number) => {
        const imageElements = images.slice(startIndex, startIndex + 3).map((image, index) => (
            <div
                key={index}
                className={`${
                    index === 1 ? "mx-0 md:mx-[1vw] my-[2vh] md:my-0" : ""
                } bg-center bg-no-repeat bg-cover aspect-[2/1] w-full md:w-1/3`}
                style={{ backgroundImage: `url(${image})` }}
            ></div>
        ));

        return imageElements;
    };

    function loadMore() {
        more1Ref.current?.classList.remove("hidden");
        more2Ref.current?.classList.remove("hidden");
        btnRef.current?.classList.add("hidden");
    };

    return (
        <motion.div
            className="flex flex-col justify-center items-center px-[5vw] py-[5vw] relative"
            ref={galleryRef}
            initial={{ opacity: 0, transform: 'translateY(10%)' }}
            animate={isInView ? { opacity: 1, transform: 'translateY(0)' } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="flex justify-center items-center mb-[5vw] md:flex-row flex-col">
                <div
                    className="bg-center bg-no-repeat bg-contain h-[10vw] md:h-[2vw] aspect-[100/28] mb-[1vw] md:mb-0"
                    style={{ backgroundImage: "url(/projectPage/bear_2.png)" }}
                ></div>
                <div className="md:text-[2vw] text-[5vw] text-deepBlue font-bold uppercase text-center mx-[1vw] tracking-[0.1vw]">
                    Event <span className="text-gold">Gallery</span>
                </div>
                <div
                    className="bg-center bg-no-repeat bg-contain h-[2vw] aspect-[100/28] md:inline-block hidden"
                    style={{ backgroundImage: "url(/projectPage/bear_2.png)" }}
                ></div>
            </div>
            <div className="flex justify-center items-center flex-col w-[90vw]">
                <div className="flex justify-center items-center md:flex-row flex-col w-full">
                    {renderImages(0)}
                </div>
                <div ref={more1Ref} className="md:flex hidden md:flex-row flex-col justify-center items-center w-full md:my-[1vw] my-[2vh]">
                    {renderImages(3)}
                </div>
                <div ref={more2Ref} className="md:flex hidden md:flex-row flex-col justify-center items-center w-full">
                    {renderImages(6)}
                </div>
                <span ref={btnRef}>
                    <Button onClick={loadMore} classes="md:hidden inline-block mt-[2vh]">Load More</Button>
                </span>
            </div>
        </motion.div>
    );
};

export default EventGallery;