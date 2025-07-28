import React, { Suspense } from "react";
import Overview from "./components/overview";
import Podcast from "./components/podcastLibrary";
import Article from "./components/articleLibrary";
import SpecificArticle from "./components/specificArticle";
import SpecificPodcast from "./components/specificPodcast";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Media = () => {
    return (
        <>
          {/* <Overview/>  
          <Podcast />   
          <Article />   
          <SpecificArticle />
          <SpecificPodcast /> */}
        </>
    );
};

export default Media;
