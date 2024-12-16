'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StepsToRegisterPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

    return (
        <div ref={ref} className="w-full flex justify-center items-center bg-white relative" style={{ minHeight: '80vh' }}>

            <motion.div
                className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row justify-center items-center w-full max-w-6xl lg:gap-x-6"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <div className="flex flex-col items-center text-center">
                    <p className="text-xl md:text-xl lg:text-2xl font-semibold text-black mb-2">RMIT Club Day</p>
                    <p className="text-lg md:text-base lg:text-lg text-gray-600 mb-4">Discover our unique <br /> culture and activities.</p>
                    <div className="w-[250px] md:w-[200px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px]">
                        <img src="/joinUsPage/step1.svg" alt="Step 1" />
                    </div>
                </div>

                <div className="md:hidden flex flex-col items-center mt-2">
                    <img src="/joinUsPage/MobileArrow.svg" alt="Dotted Arrow" className="w-[10px] h-[70px]" />
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-[250px] md:w-[200px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px]">
                        <img src="/joinUsPage/step2.svg" alt="Step 2" />
                    </div>
                    <p className="text-xl md:text-xl lg:text-2xl font-semibold text-black mt-4">Induction Day</p>
                    <p className="text-lg md:text-base lg:text-lg text-gray-600">Where you could find out more <br /> about us this semester.</p>
                </div>

                <div className="md:hidden flex flex-col items-center m-3">
                    <img src="/joinUsPage/MobileArrow.svg" alt="Dotted Arrow" className="w-[10px] h-[70px]" />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="text-xl md:text-xl lg:text-2xl font-semibold text-black mb-2">Application Round</p>
                    <p className="text-lg md:text-base lg:text-lg text-gray-600 mb-4">Prepare your CV and fill in our <br /> application form.</p>
                    <div className="w-[250px] md:w-[200px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px]">
                        <img src="/joinUsPage/step3.svg" alt="Step 3" />
                    </div>
                </div>

                <div className="md:hidden flex flex-col items-center mt-2">
                    <img src="/joinUsPage/MobileArrow.svg" alt="Dotted Arrow" className="w-[10px] h-[70px]" />
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="w-[250px] md:w-[200px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px]">
                        <img src="/joinUsPage/step4.svg" alt="Step 4" />
                    </div>
                    <p className="text-xl md:text-xl lg:text-2xl font-semibold text-black mt-4">Interview Round</p>
                    <p className="text-lg md:text-base lg:text-lg text-gray-600">Ace your interview <br /> and join the team!</p>
                </div>
            </motion.div>

            <img
                src="/joinUsPage/smallBear.svg"
                alt="Small Bear"
                className="absolute bottom-[-20px] left-[-20px] w-[150px] sm:w-[200px] md:w-[250px]"
                style={{ transform: 'translateY(50%)' }}  // Slight overflow to the bottom
            />

            <img
                src="/joinUsPage/4balls.svg"
                alt="4 Balls"
                className="absolute top-[20px] right-[-2px] w-[90px] sm:w-[100px] md:w-[150px]"
                style={{ transform: 'translateY(-33%)' }}  // Slight overflow to the top
            />
        </div>
    );
};

export default StepsToRegisterPage;
