"use client"
import type React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './carousel.css';
import Project from './projectCard';
import Viewmore from './viewMore';


type datatype = {
    year: number;
    image: string;
    title: string;
    brief: string;
}

const data: datatype[] = [
    {
        year: 2025,
        image: "AchievementBg.png",
        title: "ABC",
        brief: "ddddd",
    },


    {
        year: 2025,
        image: "AchievementBg.png",
        title: "qrt",
        brief: "yui",
    },


    {
        year: 2025,
        image: "AchievementBg.png",
        title: "dsadasdsđ",
        brief: "ccc",
    },

    {
        year: 2026,
        image: "AchievementBg.png",
        title: "5454545",
        brief: "ccc",
    },

    {
        year: 2025,
        image: "AchievementBg.png",
        title: "dfdsffasdádasdsds",
        brief: "dádasd",
    },
]





const PastProject = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2.5,
        focusOnSelect: true,
    };

    return (
        <section className="pb-10">
            <h5 className="flex justify-center text-bluePrimary font-extrabold" > PAST HIGHLIGHTED PROJECTS</h5>

            <div className="flex place-content-center pt-10 max-w-[1652px] max-h-[54px]">
                <h6 className="text-yellowSand flex items-center pr-8"> 2025 </h6>
                <div className="max-w-[1200px] w-[2000px] h-[3px] font-black bg-yellowPrimary flex items-center"></div>
            </div>


            <Slider {...settings} className="">
                {
                    data.map(item =>

                        <Project
                            key={item.year}
                            year={item.year}
                            title={item.title}
                            image={item.image}
                            brief={item.brief}
                        />)}
            </Slider>


            <Viewmore />
        </section >
    );
};
export default PastProject;
