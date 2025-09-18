"use client";

import React from "react";
// No need for useRef or useState for this basic implementation
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion } from "framer-motion";
import Image from "next/image"; // Make sure Image is imported

export default function SpecificArticle() {
  const handleBreadcrumbClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    console.info("You clicked a breadcrumb.");
  };

  const pdfUrl =
    "https://d2prwyp3rwi40.cloudfront.net/article/products/2KmbHPTReB4d1be3ikwP5-Study-Guide-Week-3-The-Future-of-AI-Data-Science.pdf"; // Example PDF link

  // Dummy data for authors and related articles
  const authors = [
    { name: "Author Name 1", role: "Author Role 1" },
    { name: "Author Name 2", role: "Author Role 2" },
    { name: "Author Name 3", role: "Author Role 3" },
  ];

  const relatedArticles = [
    {
      id: 1,
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png", // Use a relevant image
      title: "Article Title (Probably very long) 1",
      date: "Publication Date 1",
      link: "/media/specificArticle/1", // Example link
    },
    {
      id: 2,
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png", // Use a relevant image
      title: "Article Title (Probably very long) 2",
      date: "Publication Date 2",
      link: "/media/specificArticle/2", // Example link
    },
    {
      id: 3,
      imageUrl:
        "https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png", // Use a relevant image
      title: "Article Title (Probably very long) 3",
      date: "Publication Date 3",
      link: "/media/specificArticle/3", // Example link
    },
  ];

  return (
    <section className="relative">
      <div
        className="w-screen h-[92vh] flex items-center justify-between px-16"
        style={{
          background: "linear-gradient(to bottom, #0D1742 62%, #DBB968 100%)",
        }}
      >
        <div className="absolute w-screen h-screen z-20 top-[0.1rem] left-[-0.1rem]">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/media/YellowStars-NoRope.png"
            alt="Yellow Stars"
            width={1000}
            height={200}
            loading="lazy"
            className="w-full"
          />
        </div>

        <div className="flex flex-col items-start justify-center z-10 mt-[10vh]">
          <div className="flex flex-grow gap-1 mb-4">
            <div className="p-2 rounded-lg mr-4 bg-ft-primary-yellow-200">
              Label
            </div>
            <div className="p-2 rounded-lg mr-4 bg-ft-primary-yellow-200">
              Another Label
            </div>
          </div>
          <h1 className="text-5xl font-bold text-[9vh] text-ft-text-bright">
            Bi-weekly Article
          </h1>
          <p className="leading-6 font-medium text-base text-white w-[50vw] text-justify py-4">
            Welcome to the Bi-weekly Article Series, where curiosity meets
            analysis at the intersection of finance and technology. Our
            articles, crafted by dedicated members of the FinTech Club, blend
            academic depth with real-world relevance, providing you with
            rigorously researched insights into emerging industry trends
            alongside pivotal global economic events. Explore our latest work
            and discover what’s truly shaping the industry today.
          </p>
          <div
            className="w-fit h-fit rounded-md p-[2px] mt-[0.5rem]"
            style={{
              background: "linear-gradient(to top, #474A6E, #DBB968)",
            }}
          >
            <a href="/media/article">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
                className="bg-ft-primary-blue-300 text-bluePrimary font-semibold px-4 py-2 rounded-md hover:bg-yellowCream"
              >
                Back to Article Library
              </motion.button>
            </a>
          </div>
        </div>
        <div className="mt-[10vh]">
          <Image
            src="https://d2prwyp3rwi40.cloudfront.net/media/podcast/FintechtainmentPoster-New.png"
            alt="Article Graphic"
            width={1000}
            height={200}
            fetchPriority="high"
            loading="eager"
            priority={true}
            className="w-[30vw] h-auto rounded-lg"
          />
        </div>
      </div>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <NavigateNextIcon fontSize="small" sx={{ color: "#A28436" }} />
        }
        sx={{
          color: "#000000",
          "& .MuiBreadcrumbs-separator": { mx: 0.5 },
        }}
        className="w-full py-8 px-16"
      >
        <MuiLink
          underline="hover"
          sx={{
            color: "#000000",
            "&:hover": { color: "#A28436" },
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
            color: "#000000",
            "&:hover": { color: "#A28436" },
          }}
          component={Link}
          href="/media/article"
          onClick={handleBreadcrumbClick}
        >
          Article Library
        </MuiLink>
        <MuiLink
          underline="hover"
          sx={{
            color: "#000000",
            "&:hover": { color: "#A28436" },
          }}
          component={Link}
          href="/media/specificArticle"
          onClick={handleBreadcrumbClick}
        >
          Article
        </MuiLink>
      </Breadcrumbs>

      <div className="flex justify-center pb-12 px-16 gap-8">
        {/* PDF PREVIEW SECTION */}
        <div className="w-full max-w-4xl">
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            className="w-full h-[150vh] rounded-lg shadow-lg"
            aria-label="PDF article preview"
          >
            This browser does not support PDFs.
          </iframe>
          <div
            className="w-fit h-fit rounded-md p-[2px] mt-[2rem] mx-auto"
            style={{
              background: "linear-gradient(to top, #474A6E, #DBB968)",
            }}
          >
            <a href="/media/article">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 1.1 }}
                className="bg-ft-primary-blue-300 text-bluePrimary font-semibold px-4 py-2 rounded-md hover:bg-yellowCream"
              >
                Back to Article Library
              </motion.button>
            </a>
          </div>
        </div>

        {/* Right sidebar for Author and Related Articles */}
        <div className="w-full max-w-[17.75rem] flex flex-col gap-4">
          {/* Author Section */}
          <div className="p-6 rounded-lg shadow-md border-2 border-[#DBB968]">
            <h2 className="text-3xl font-bold text-[#DBB968] mb-4">Author</h2>
            <div className="divide-y divide-gray-200">
              {authors.map((author, index) => (
                <div key={index} className="py-4 last:pb-0 first:pt-0">
                  <p className="text-lg font-semibold text-[#000000]">
                    {author.name}
                  </p>
                  <p className="text-sm text-[#000000]">{author.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles Section */}
          <div>
            <h2 className="text-3xl font-bold text-ft-primary-yellow-100 mb-4">
              Related Articles
            </h2>
            <div className="flex flex-col gap-6">
              {relatedArticles.map((article) => (
                <Link
                  href={article.link}
                  key={article.id}
                  passHref
                  className="block rounded-lg overflow-hidden border-1 border-[#0D1742] hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0"
                    />
                  </div>
                  <div
                    className="p-4"
                    style={{
                      background:
                        "linear-gradient(to bottom, #C9D6EA 0%, #DBB968 100%)",
                      paddingTop: "60px",
                      marginTop: "-60px",
                    }}
                  >
                    <p className="text-lg font-semibold text-ft-primary-blue-50">
                      {article.title}
                    </p>
                    <p className="text-sm text-ft-primary-blue-200">
                      {article.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-9rem] left-0">
        <Image
          src="https://d2prwyp3rwi40.cloudfront.net/global/Mascot+-+M%E1%BA%B7t+b%C3%AAn.svg"
          alt="Mascot"
          width={200}
          height={500}
          loading="lazy"
          className="w-[25vw] h-auto scale-x-[-1]"
        />
      </div>
    </section>
  );
}
