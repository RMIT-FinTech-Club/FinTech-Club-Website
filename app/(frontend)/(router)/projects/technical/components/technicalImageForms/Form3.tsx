import React from "react";
import '@/styles/animations.css'

interface Form3Props {
    images?: string[];
};

const Form3: React.FC<Form3Props> = ({ images = [] }) => {
    const imgClasses = 'absolute bg-center bg-no-repeat'
    const smallImgClasses = 'w-[4vw] aspect-square bg-contain'

    return (
        <div className='w-[35vw] aspect-[44/30] relative bg-white my-[4vw] rounded-[10px]' >
            <div className={`${imgClasses} ${smallImgClasses} bottom-[-3.5vw] left-[-3.5vw] glowing`} style={{ backgroundImage: `url('/projectPage/decor_1.png')`, animationDuration: '3s' }}></div>
            <div className={`${imgClasses} ${smallImgClasses} top-[-2vw] right-[-2vw] glowing`} style={{ backgroundImage: `url('/projectPage/decor_3.png')`, animationDuration: '3s' }}></div>
            <div className={`${imgClasses} bg-cover top-0 right-1/2 w-[40%] h-full`} style={{ backgroundImage: `url(${images[0]})` }}></div>
            <div className={`${imgClasses} bg-cover top-0 left-1/2 w-[40%] h-1/2`} style={{ backgroundImage: `url(${images[1]})` }}></div>
            <div className={`${imgClasses} bg-cover bottom-0 left-1/2 w-[40%] h-1/2`} style={{ backgroundImage: `url(${images[2]})` }}></div>
            <div className={`${imgClasses} bg-cover top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-[40%] aspect-square`} style={{ backgroundImage: `url(${images[3]})` }}></div>
        </div>
    );
};

export default Form3;