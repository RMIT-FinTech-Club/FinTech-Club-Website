import type React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import ImageForm8 from "@/components/projects/projectImagineForms/Form8";
import Decor2 from '@/components/projects/projectDecorForms/Decor2';

interface EventContentProps {
    sectionValue: {
        images: string[];
        title: {
            normal: string;
            highlight: string;
        };
        content: string;
    };
};

const EventContent: React.FC<EventContentProps> = ({ sectionValue }) => {
    const { title, content } = sectionValue;
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });

    return (
        <motion.div
            className="flex overflow-x-hidden relative px-[5vw] md:py-[5vw] py-[10vw] flex-col md:flex-row"
            ref={ref}
            initial={{ opacity: 0, transform: 'translateY(10%)' }}
            animate={isInView ? { opacity: 1, transform: 'translateY(0)' } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <Decor2 />
            <ImageForm8 images={sectionValue.images} />
            <div className="flex justify-center md:items-start items-center flex-col w-full md:w-1/2 z-10">
                <div className='my-[2vh] text-deepBlue text-[7vw] leading-[9vw] tracking-[0.2vw] md:text-[3vw] md:leading-[3.6vw] md:tracking-[0.1vw] font-bold uppercase'>{title.normal} <span className='text-gold'>{title.highlight}</span></div>
                <div className='my-[2vh] text-gray text-[3vw] leading-[4vw] md:text-[1vw] md:leading-[1.4vw] text-justify'>{content}</div>
            </div>
        </motion.div>
    );
}

export default EventContent;