import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandYoutube,
} from "@tabler/icons-react";
import clsx from "clsx";
import React from "react";

const FollowUs = () => {

    const icons = [IconBrandFacebook, IconBrandInstagram, IconBrandYoutube];

    const iconList = () => {
        return (
            icons.map((Icon, idx) => (
                <Icon
                    key={idx}
                    className={clsx("mx-2 cursor-pointer",
                        'text-ft-primary-yellow-500 hover:text-ft-primary-yellow-200'
                    )}
                    size={30} />
            ))
        )
    }

    return (
        <div className="hidden lg:flex">
            {/* Laptop view */}
            <div className="lg:flex py-2 px-4 hidden">
                <div className="">
                    <h5 className="text-ft-text-bright">Follow Us:</h5>
                </div>
                <div className="flex items-center">
                    {iconList()}
                </div>
            </div>
            {/* Mobile view */}
            <div className="flex lg:hidden py-1 px-2 items-center">
                <div className="">
                    <h5 className="text-ft-text-bright">Follow Us:</h5>
                </div>
                <div className="flex items-center">
                    {iconList()}
                </div>
            </div>
        </div>
    );
};

export default FollowUs;
