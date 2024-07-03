"use client";
import React, { useEffect, useRef, useState } from "react";
import AuthorList, { AuthorDetails } from "./components/author";
import FollowUs from "./components/followUs";
import HeaderPodcastPage from "./components/headerPodcastPage";
import PodcastDescription from "./components/podcastDescription";
import PodcastMainFunction from "./components/podcastMainFunction";
import PodcastTitle from "./components/podcastTitle";
import clsx from "clsx";
import { Image } from "@nextui-org/react";
import axios from "axios";

const Podcast = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [data, setData] = useState();
  const fetchingStatus = useRef<boolean>(false);

  useEffect(() => {
    if (!fetchingStatus.current) {
      fetchingStatus.current = true;
      axios.get(`/api/v1/podcasts/${id}`).then((data) => {
        console.log(`check data: ${JSON.stringify(data.data.title)}`)
        setData(data.data);
      });
    }
  });
  if (data) {
    return (
      <div
        className={clsx(
          "w-screen flex flex-col items-center justify-around relative bg-ft-primary-blue-900"
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-[90vw] lg:flex lg:flex-col z-10 h-screen justify-around my-4">
          <HeaderPodcastPage text="Podcast" />
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Podcast image */}
            <div className=" h-full flex justify-center aspect-square p-0 m-0">
              <Image
                src={data.thumnailFileUrl}
                alt="Fintechtainment logo"
                className="size-[300px] lg:size-[400px] rounded-xl"
              />
            </div>
            {/* Podcast details */}
            <div className="flex flex-col justify-around">
              <AuthorList
                authorDetails={
                    data.authors.map((authorData)=>{
                        return {
                        authorName: authorData.name,
                        authorAvatarURL: authorData.profileImageUrl
                        }
                    })
                } 
              />
              <PodcastDescription description={data.description}/>
              <FollowUs />
            </div>
          </div>
          <div>
            <PodcastMainFunction audioFileUrl={data.audioFileUrl}  title={data.title}/>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Podcast;
