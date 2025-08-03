import React, { Suspense } from "react";
import Overview from "./overview/components/overview";
import Podcast from "./podcast/components/podcastLibrary";
import Article from "./article/components/articleLibrary";
import SpecificArticle from "./article/components/specific/specificArticle";
import SpecificPodcast from "./podcast/components/specific/specificPodcast";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Media = () => {
  return (
    <>
      <SpecificArticle />
      <SpecificPodcast />
    </>
  );
};

export default Media;
