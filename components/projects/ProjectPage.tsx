"use client"
import type React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import fakeAPI from './fakeAPI/mainAPI'
import Button from '@/components/button';

const ProjectPage: React.FC = () => {
    return (
        <div>
            <div className="relative bg-deepBlue overflow-hidden flex justify-center items-center flex-col-reverse flex-wrap md:flex-row md:flex-nowrap px-[5vw] md:py-[5vw] py-[4vh]">
                <div className="aspect-square rounded-[50%] bg-gold moveUD hidden md:absolute left-[-0.75vw] top-[70%] w-[1.5vw] z-0 md:inline-block" style={{ animationDuration: '6s' }}></div>
                <div className="aspect-square rounded-[50%] hidden md:absolute moveLR left-[8vh] bottom-[3vh] w-[5vw] bg-midDeepBlue z-0 md:inline-block" style={{ animationDuration: '10s' }}>
                    <div className="aspect-square rounded-[50%] hidden md:absolute w-[1.5vw] moveRL left-[140%] top-[20%] bg-midDeepBlue border border-white z-0 md:inline-block" style={{ animationDuration: '8s' }}></div>
                </div>
                <div className="min-h-[75vh] flex justify-center flex-col flex-wrap text-white z-10 md:items-start md:w-[60%] w-full items-center">
                    <div className="my-[2vh] md:my-[5vh] bg-gold text-white md:text-[0.8vw] md:leading-[1.2vw] md:p-[0.4vw_2vw] md:rounded-[1vw] text-[4vw] leading-[8vw] p-[0.2vw_6vw] rounded-[4.2vw]">Innovate, Learn, Lead</div>
                    <h1 className="my-[2vh] md:my-[-2vh] md:text-[3vw] md:leading-[3.6vw] text-center md:text-left text-[8vw] leading-[9vw]">The Student-led Financial Technology Club</h1>
                    <div className="my-[2vh] md:my-[5vh] md:text-[1vw] md:leading-[1.5vw] text-white w-full md:w-[80%] text-[4vw] leading-[5vw] text-center md:text-left">Our club focuses on empowering members with the skills, knowledge, and hands-on experience needed to thrive in the ever-evolving FinTech industry. Through workshops, real-world projects, and networking events with industry leaders.</div>
                    <Button classes="my-[2vh] md:my-[5vh]">Join Us</Button>
                </div>
                <div className="relative md:w-[40%] w-full flex justify-center items-center md:mt-0 mt-[10vh]">
                    <div className="absolute bg-center bg-contain bg-no-repeat aspect-square md:left-[1vw] md:bottom-[-3vw] md:w-[4vw] glowing left-0 bottom-[-4vh] w-[8vw]" style={{ backgroundImage: 'url(/projectPage/decor_1.png)', animationDuration: '3s' }}></div>
                    <div className="absolute bg-center bg-contain bg-no-repeat aspect-square md:right-0 md:top-[-2vw] md:w-[3vw] right-0 top-[-2vh] w-[8vw] glowing" style={{ backgroundImage: 'url(/projectPage/decor_2.png)', animationDuration: '3s' }}></div>
                    <div className="relative aspect-[533/600] bg-white w-[70vw] rounded-[2vw] ml-0 md:w-[27vw] md:rounded-[2vw] md:ml-[5vw]">
                        <div className="absolute inset-0 flex justify-center items-center overflow-hidden rounded-[2vw]">
                            <img className="scale-[1.4] select-none" src='https://s3-alpha-sig.figma.com/img/740e/b219/b79eb7bb2ba4da6014821709c76155f0?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XlU1MGqbLkYaQj-NgmJlXuP3pSD68vOciTLrtJZQDUIiBSIY6d3JiqA3gsaVHFk9HYVGGwL7kglyRhRW~kqcHgRsKq-xoPTCLakiXJ3Txx-iw9Ftr2zIvcJGXhXzprSe8Dt6ugnYhwvJ-MjTFs~HcVo8SOkx1LYM6knjuwTG2uOuWs2xtG2zGV9hfUiAS2npgjks1C~LrSYW~~JwWUrxQyASfF9qn6pPtWeqQSfhOeQDUUztJselh7JDG0B51MCjl1aFqt3IGAl7RiEa66hCXKOKitnYdfiaTtDTQEF4vrf0rodHTImbzGZKlj-8QXIiR1E9pcep0DJCRSAlOo~PFw__' />
                        </div>
                        <div className="absolute w-[95%] h-[120%] bg-center bg-cover bg-no-repeat scale-x-[-1] bottom-[-0.1vw] left-[-2vw]" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/e400/b9f5/be2d5a0425040245ae7b0cb07d1caf55?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mhSkaoMbf~yaRFREQgrNyJP2NvxP0xh1irBrveeK0Lej6gveNTjZsd1Bkk6oq-~LgCt5HjSW7sit5V8VXHYLVkSPbufMgogDgbZ6gPG1wISol0GR2qzB2vkwxz~YKfy3KzSEdJQarzvFfOBYc7-Hsy3~i7-2cJXYngyq34uAVJp8g4NNIsrufFglQnfSyvo4x2JxltKm0HST0Atj47ZfcV0hm2g~7vuqWsnHsOGf5KM1qq7meaYzDfLwVRMLoXy8eTUuubLE-x5fMFJZXIUMzIoqnmsD9uToc8a8wtrQYUUg6prByrIFn0btSOp8Rm5D4F8VqhLyEZ8C1HjhygJ0WQ__)' }}></div>
                    </div>
                </div>
            </div>
            {fakeAPI.map((project, index) => {
                const ref = useRef(null);
                const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

                return (
                    <motion.div
                        key={index}
                        style={{ backgroundColor: project.bgc || 'white' }}
                        className={`${index % 2 == 0 ? 'md:flex-row ' : 'md:flex-row-reverse'} ${index == fakeAPI.length - 1 ? 'w-[90%] md:mb-[5vw] mx-[auto] md:rounded-[1vw] mb-[5vh] rounded-[3vw]' : 'w-full'} relative flex-wrap flex md:flex-nowrap md:py-[5vw] py-[10vh]`}
                        ref={ref}
                        initial={{ opacity: 0, transform: 'translateY(10%)' }}
                        animate={isInView ? { opacity: 1, transform: 'translateY(0)'} : {}}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        {index === 0 && (
                            <>
                                <div className="absolute aspect-square rounded-[50%] right-[-2.5vw] bottom-[20%] w-[5vw] moveUD bg-deepBlue hidden md:inline-block" style={{ animationDuration: '12s' }}></div>
                                <div className="absolute aspect-square rounded-[50%] right-[2vw] top-[50%] w-[1.5vw] moveDU bg-gold hidden md:inline-block" style={{ animationDuration: '6s' }}></div>
                                <div className="absolute aspect-square rounded-[50%] right-[3vw] bottom-[13%] w-[1.5vw] moveLR bg-deepBlue hidden md:inline-block" style={{ animationDuration: '9s' }}></div>
                            </>
                        )}
                        <div className="flex md:w-1/2 w-full justify-center items-center md:mb-0 mb-[8vh]">
                            <project.imgForm images={project.imgLinks} />
                        </div>
                        <div className={`${index % 2 == 0 ? 'md:pr-[5vw]' : 'md:pl-[5vw]'} pr-0 pl-0 flex justify-center items-center md:items-start flex-col flex-wrap md:w-1/2 w-full z-10`}>
                            <h3 className="md:text-[2vw] text-[4vw] mb-[2vh] font-normal text-gold">Project {index + 1}</h3>
                            <div className="md:text-[3vw] text-[7vw] tracking-[0.3vw] md:tracking-[0.2vw] font-bold uppercase text-deepBlue">{project.name} <span className="text-gold">Projects</span></div>
                            <p className="md:text-justify text-center text-[#727272] md:text-[1vw] md:leading-[2vw] md:w-full my-[2vh] w-[90%] text-[3vw] leading-[5vw]">{project.content}</p>
                            <Button href={project.url}>Explore more</Button>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default ProjectPage;