import React from "react";

interface ImagesProps {
    images: string[]
}

const ImagesForm: React.FC<ImagesProps> = ({ images }) => {
    const imgClasses = 'absolute bg-center bg-cover bg-no-repeat w-[48%] h-[40%] rounded-[10px]'

    return (
        <div className="w-full md:w-1/2 z-10">
            <div className="relative md:w-[40vw] w-[80vw] aspect-[4/3] mx-auto md:mr-auto md:mx-0 md:my-0 my-[10vw]">
                <div className={`${imgClasses} top-0 left-0`} style={{ backgroundImage: `url(${images[0]})` }}></div>
                <div className={`${imgClasses} top-[45%] left-0`} style={{ backgroundImage: `url(${images[1]})` }}></div>
                <div className={`${imgClasses} bottom-0 right-0`} style={{ backgroundImage: `url(${images[2]})` }}></div>
                <div className={`${imgClasses} bottom-[45%] right-0`} style={{ backgroundImage: `url(${images[3]})` }}></div>
            </div>
        </div>
    );
}

export default ImagesForm;