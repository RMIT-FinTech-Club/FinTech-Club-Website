import React from "react";
import '@/styles/animations.css'

export interface ImageForm6Props {
    images: string[];
}

const ImageForm6: React.FC<ImageForm6Props> = ({ images = [] }) => {
    const imgClasses = 'absolute bg-center bg-cover bg-no-repeat'
    const smallImgClasses = 'w-[20%] aspect-[5/4] rounded-[10px]'

    return (
        <div className='md:w-[30vw] md:mb-0 mb-[10vw] w-[90vw] aspect-[35/28] relative'>
            <div className='absolute bg-[#FFEFCA] w-[40%] h-[40%] left-[50%] top-[45%] rounded-[10px]'></div>
            <div className={`${imgClasses} top-[10%] left-1/2 translate-x-[-50%] w-[30%] h-[60%] rounded-[10px]`} style={{backgroundImage: `url(${images[1]})`}}></div>
            <div className={`${imgClasses} top-0 left-0 w-[40%] h-[80%]`} style={{backgroundImage: `url(${images[0]})`}}></div>
            <div className={`${imgClasses} ${smallImgClasses} top-0 right-0`} style={{backgroundImage: `url(${images[2]})`}}></div>
            <div className={`${imgClasses} ${smallImgClasses} top-1/2 translate-y-[-50%] right-0`} style={{backgroundImage: `url(${images[3]})`}}></div>
            <div className={`${imgClasses} ${smallImgClasses} left-[20%] bottom-[-5%]`} style={{backgroundImage: `url(${images[4]})`}}></div>
        </div>
    );
};

export default ImageForm6;