'use client'
import React, { useState } from "react";
import AuthorList, { AuthorDetails } from "./components/author";
import FollowUs from "./components/followUs";
import HeaderPodcastPage from "./components/headerPodcastPage";
import PodcastDescription from "./components/podcastDescription";
import PodcastMainFunction from "./components/podcastMainFunction";
import PodcastTitle from "./components/podcastTitle";
import clsx from "clsx";
import { Image } from "@nextui-org/react";

const Podcast = ({ params }: { params: { id: string } }) => {

    const id = params.id;

    const [backgroundImage, setBackgroundImage] = useState<string>("");

    return (
        <div className={clsx("w-screen flex flex-col items-center justify-around relative bg-ft-primary-blue-900")}
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="w-[90vw] lg:flex lg:flex-col z-10 h-screen justify-around my-4">
                <HeaderPodcastPage text="Podcast" />
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Podcast image */}
                    <div className=" h-full flex justify-center aspect-square p-0 m-0">
                        <Image
                            src='https://i1.sndcdn.com/artworks-bKfJHiI8Zw5I-0-t1080x1080.jpg'
                            alt="Fintechtainment logo"
                            className="size-[300px] lg:size-[400px] rounded-xl"
                        />
                    </div>
                    {/* Podcast details */}
                    <div className="flex flex-col justify-around">
                        <AuthorList authorDetails={[
                            {
                                authorName: "Fintechtainment",
                                authorAvatarURL: "https://media.licdn.com/dms/image/D4D03AQEaou8VA27H1w/profile-displayphoto-shrink_400_400/0/1675323252612?e=2147483647&v=beta&t=-VMwScuIjKYYSCwI0x9D9RtkmtuGh6nLDQTzXfXT4Cc"
                            }
                        ] as AuthorDetails[]} />
                        <PodcastDescription />
                        <FollowUs />
                    </div>
                </div>
                <div>
                    <PodcastMainFunction />
                </div>
            </div>
        </div>
    );
};

export default Podcast;
