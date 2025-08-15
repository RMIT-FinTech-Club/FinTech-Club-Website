import React from 'react';

interface NavigationButtonProps {
    text: string;
    link: string;
}

const NavigationButton = ({text, link} : NavigationButtonProps) => {
    return (
        <a 
            href={link}
            className="flex flex-1 justify-center items-center py-4 px-16 bg-blueMidnight hover:bg-bluePrimary text-white border rounded-b-3xl text-center font-semibold"
        >
            {text}
        </a>
    );
};

export default NavigationButton;