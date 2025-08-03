"use client"; // Mark as Client Component

import { useEffect, useRef } from "react";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LabelSort from "./labelSort";

export default function PodcastLibrary() {
  const pRef = useRef<HTMLParagraphElement>(null); // TypeScript fix

  const handleLabelSelect = (label: string) => {
    console.log("Selected label:", label);
    // TODO: Call API based on selected label
  };

  const handleBreadcrumbClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    console.info("You clicked a breadcrumb.");
    n
  };

  return (
    <section>
      <div className="w-screen h-screen bg-gradient-over-image bg-no-repeat bg-center flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-md p-6 rounded-lg text-white text-center space-y-4">
            <h1 className="text-4xl font-bold text-[9vh] text-[#DCB968] drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)] p-6">Fintechtainment</h1>
          <p className="leading-tight font-bold gap-10 text-base line-clamp-6 w-[85vh] text-left p-6 margin-bottom-6  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className="bg-white text-bluePrimary px-4 py-2 top-[10rem] rounded-md hover:bg-yellowCream ">
            Back to Media
          </button>
        </div>
      </div>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" sx={{ color: "#0D1742" }} />}
        sx={{ color: "#2C305F", "& .MuiBreadcrumbs-separator": { mx: 0.5 } }}
        className="w-full p-8 pl-16"
      >
        <MuiLink
          underline="hover"
          sx={{
            color: "#2C305F", // bluePrimary
            "&:hover": { color: "#FFEFCA" }, // yellowCream
          }}
          component={Link}
          href="/media"
          onClick={handleBreadcrumbClick}
        >
          Media
        </MuiLink>
                <MuiLink
          underline="hover"
          sx={{
            color: "#2C305F", // bluePrimary
            "&:hover": { color: "#FFEFCA" }, // yellowCream
          }}
          component={Link}
          href="/media/podcast"
          onClick={handleBreadcrumbClick}
        >
          Podcast Library
        </MuiLink>
        <Typography sx={{ color: "white" }} aria-current="page">
          Podcast Library
        </Typography>
      </Breadcrumbs>
      <div className="p-6">
        <LabelSort onSelect={handleLabelSelect} />
      </div>
    </section>
  );
}