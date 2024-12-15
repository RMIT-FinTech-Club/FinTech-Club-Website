interface ContentProps {
    contentPayload: ContentData;
}

export interface ContentData {
    title: {
        normal: string;
        highlight: string;
    };
    content: string;
}

const Content:React.FC<ContentProps> = ({ contentPayload }) => {
    const { title, content } = contentPayload;

    return (
        <div className="flex justify-center md:items-start items-center flex-col w-full md:w-1/2 z-10">
            <div className='my-[2vh] text-deepBlue text-[7vw] leading-[9vw] tracking-[0.2vw] md:text-[3vw] md:leading-[3.6vw] md:tracking-[0.1vw] font-bold uppercase'>{title.normal} <span className='text-gold'>{title.highlight}</span></div>
            <div className='my-[2vh] text-gray text-[3vw] leading-[4vw] md:text-[1vw] md:leading-[1.4vw] text-justify'>{content}</div>
        </div>
    );
};

export default Content;