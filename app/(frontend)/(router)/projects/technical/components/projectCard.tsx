import React from "react";
import Button from "./Button";

interface ProjectCardProps {
    index: number;
    card: {
        tags: string[];
        title: {
            normal: string;
            highlight: string;
        };
        content: string;
        images: string[];
        bgc?: string;
        ImgForm: React.FC;
        DecorForm: React.FC;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ card, index }) => {
    const flexCenter = 'flex justify-center'
    const { tags, title, content, images, ImgForm, bgc, DecorForm } = card

    function createTags() {
        return (
            <div className='flex flex-wrap'>
                {tags.map((tag, index) => {
                    let tagIconURL = '';
                    switch(tag) {
                        case 'Web Development':
                            tagIconURL = '/projectPage/tag_1.png'
                            break;
                        case 'Machine Learning':
                            tagIconURL = '/projectPage/tag_2.png'
                            break;
                        case 'UI/UX Design':
                            tagIconURL = '/projectPage/tag_3.png'
                            break;
                        default:
                            console.error('Undefined tag')
                    }

                    return (
                        <div className={`flex py-[0.2vw] px-[1vw] ${bgc ? 'bg-white' : 'bg-lightPurple'} rounded-[5px] mr-[1vw]`} key={index}>
                            <div className='relative top-[0.3vw] bg-center bg-no-repeat bg-contain h-[1vw] aspect-square' style={{backgroundImage: `url('${tagIconURL}')`}}></div>
                            <div className='text-[1vw] text-deepBlue ml-[0.5vw]'>{tag}</div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <section className={`flex bg-[${bgc || 'white'}] overflow-x-hidden relative p-[5vw] ${index % 2 ? 'flex-row-reverse' : ''}`}>
            <div className={`${flexCenter} items-center w-1/2 z-10`}>
                <ImgForm images={images} />
                {DecorForm && <DecorForm />}
            </div>
            <div className={`${flexCenter} items-start flex-col w-1/2 z-10`}>
                {createTags()}
                <div className='my-[2vh] text-deepBlue text-[3vw] leading-[3.6vw] font-bold tracking-[0.1vw] uppercase'>{title.normal} <span className='text-gold'>{title.highlight}</span></div>
                <div className='my-[2vh] text-gray text-[1vw] leading-[1.4vw]'>{content}</div>
                <Button classes='bg-gold my-[2vh]'>Read More</Button>
            </div>
        </section>
    );
};

export default ProjectCard;