"use client";
import React, { useEffect, useRef, useState } from "react";
import AuthorList, { AuthorDetails } from "./components/author";
import FollowUs from "./components/followUs";
import HeaderPodcastPage from "./components/headerPodcastPage";
import PodcastDescription from "./components/podcastDescription";
import PodcastMainFunction from "./components/podcastMainFunction";
import clsx from "clsx";
import { Image } from "@nextui-org/react";
import axios from "axios";

interface authorData {
  name: string;
  profileImageUrl: string;
}
interface PodcastData {
  title: string;
  description: string;
  authors: authorData[];
  thumnailFileUrl: string;
  audioFileUrl: string;
}
interface PodcastProps {
  params: {
    id: string;
  };
}

const Podcast = ({ params }: PodcastProps) => {
  const id = params.id;
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [data, setData] = useState<PodcastData | null>(null);
  const fetchingStatus = useRef<boolean>(false);

  useEffect(() => {
    if (!fetchingStatus.current) {
      fetchingStatus.current = true;
      axios
        .get(`/api/v1/podcasts/${id}`)
        .then((response) => {
          console.log(`check data: ${JSON.stringify(response.data)}`);
          setData(response.data);
          setBackgroundImage(response.data.thumnailFileUrl); // Setting background image from data
        })
        .catch((error) => {
          console.error("Error fetching podcast data:", error);
        });
    }
  }, [id]);

  if (data) {
    return (
      <div
        className={clsx(
          "w-screen  overflow-hidden flex flex-col items-center justify-around relative bg-ft-primary-blue-900"
        )}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "91.2vh",
        }}
      >
		<div className="w-full h-full absolute left-0 top-0 bg-black opacity-60"></div>
        <div
          className="w-[90vw] lg:flex lg:flex-col z-10 h-screen justify-between my-4 "
          style={{ height: "99%" }}
        >
          <HeaderPodcastPage text="Podcast" />
          <div className="h-3/4 lg:h-1/2 flex flex-col lg:flex-row gap-4">
            {/* Podcast image */}
            <div className=" h-full flex justify-center aspect-square p-0 my-4">
              <Image
                src={data.thumnailFileUrl}
                alt="Fintechtainment logo"
                className="size-[200px] lg:size-[300px] lg:h-full rounded-xl"
              />
            </div>
            <p className="lg:hidden text-white w-1/2 mx-auto text-center">{data.title}</p>
            <div className="h-1/2 lg:h-auto lg:flex lg:flex-col lg:justify-around">
              <AuthorList
                authorDetails={data.authors.map((authorData: authorData) => ({
                  authorName: authorData.name,
                  authorAvatarURL: authorData.profileImageUrl,
                }))}
              />
              <PodcastDescription description={data.description} />
              <FollowUs />
            </div>
          </div>
          <div>
            <PodcastMainFunction
              audioFileUrl={data.audioFileUrl}
              title={data.title}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Podcast;
