import type React from 'react';

interface ImageForm1Props {
    images: string[];
};

const ImageForm1:React.FC<ImageForm1Props> = ({ images }) => {
    const imgClasses = 'absolute w-[30%] h-[80%] rounded-[10px] bg-center bg-cover bg-no-repeat';

    return (
        <div className="w-[80%] md:w-[60%] relative aspect-square">
            <div style={{backgroundImage: `url(${images[0]})`}} className={`${imgClasses} top-0 left-0`}></div>
            <div style={{backgroundImage: `url(${images[1]})`}} className={`${imgClasses} bottom-0 left-1/2 translate-x-[-50%]`}></div>
            <div style={{backgroundImage: `url(${images[2]})`}} className={`${imgClasses} top-0 right-0`}>
                <div style={{backgroundImage: `url(${images[3]})`, animationDuration: '5s' }} className="absolute w-full aspect-[1/1] md:bottom-[-4vw] md:right-[-4vw] bottom-[-12vw] right-[-12vw] bg-center bg-cover bg-no-repeat shaking"></div>
            </div>
        </div>
    );
}

export default ImageForm1;