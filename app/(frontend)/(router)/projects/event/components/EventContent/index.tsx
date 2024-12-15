import React from 'react';
import Content from "./Content";
import ImagesForm from "./ImageForm";

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
    return (
        <div className="flex overflow-x-hidden relative px-[5vw] md:py-[5vw] py-[10vw] flex-col md:flex-row">
            <ImagesForm images={sectionValue.images} />
            <Content contentPayload={sectionValue} />
        </div>
    );
}

export default EventContent;