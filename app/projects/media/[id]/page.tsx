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

interface PodcastData {
  title: string;
  description: string;
  authors: AuthorDetails[];
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
      axios.get(`/api/v1/podcasts/${id}`).then((response) => {
        console.log(`check data: ${JSON.stringify(response.data.title)}`);
        setData(response.data);
        setBackgroundImage(response.data.thumnailFileUrl); // Setting background image from data
      }).catch(error => {
        console.error("Error fetching podcast data:", error);
      });
    }
  }, [id]);

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
                  data.authors.map((authorData) => ({
                    authorName: authorData.authorName,
                    authorAvatarURL: authorData.authorAvatarURL,
                  }))
                }
              />
              <PodcastDescription description={data.description} />
              <FollowUs />
            </div>
          </div>
          <div>
            <PodcastMainFunction audioFileUrl={data.audioFileUrl} title={data.title} />
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Podcast;
