"use client";
import Image from "next/image";
import type React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const IntroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  return (
    <section className="flex flex-col bg-[#F9FAFB] md:flex-row items-center gap-6 w-full p-6 md:p-14">
	  {/* Left text */}
      <div
        ref={ref}
        className="grid grid-rows-2 md:w-1/3 justify-center gap-y-16"
      >
        <div className="flex flex-col justify-end text-center gap-3">
          <h5 className="text-ft-primary-yellow">
            <CountUp start={0} end={inView ? 80 : 0} duration={5}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="text-6xl font-semibold" />
              )}
            </CountUp>
            +
          </h5>
          {/* <h4 className="text-ft-primary-yellow">80+</h4> */}
          <h6 className="text-ft-primary-blue">Active Club Members</h6>
          <p>
            From diverse backgrounds, be it Finance, Business, Technology,
            Marketing, Design Studies, and more.
          </p>
        </div>
        <div className="flex flex-col justify-start text-center gap-3">
          <h5 className="text-ft-primary-yellow">
            <CountUp start={0} end={inView ? 50 : 0} duration={5}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="text-6xl font-semibold" />
              )}
            </CountUp>
            +
          </h5>
          {/* <h4 className="text-ft-primary-yellow">50+</h4> */}
          <h6 className="text-ft-primary-blue">Club Projects</h6>
          <p>
            Include academic events, competitions, workshops, training, creative
            & media projects, technical development, and organizational
            projects.
          </p>
        </div>
      </div>
      {/* Image */}
      {/* <MaskImage src='/ImageMask.svg' /> */}
      <div className="md:w-1/3 aspect-[1/1.5] content-center">
        <MaskImage src="/AchievementBg.png" />
      </div>
      {/* Right text */}
      <div className="grid grid-rows-2 md:w-1/3 justify-center gap-y-16">
        <div className="flex flex-col justify-end text-center gap-3">
          <h5 className="text-ft-primary-yellow">
            <CountUp start={0} end={inView ? 5000 : 0} duration={5}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="text-6xl font-semibold" />
              )}
            </CountUp>
            +
          </h5>
          {/* <h4 className="text-ft-primary-yellow">5000+</h4> */}
          <h6 className="text-ft-primary-blue">FanPage followings</h6>
          <p>
            A testament to FinTech Club’s prominence in the RMIT Community and
            beyond!
          </p>
        </div>

        <div className="flex flex-col justify-start text-center gap-3">
          <h5 className="text-ft-primary-yellow">
            <CountUp start={0} end={inView ? 60 : 0} duration={5}>
              {({ countUpRef }) => (
                <span ref={countUpRef} className="text-6xl font-semibold" />
              )}
            </CountUp>
            +
          </h5>
          <h6 className="text-ft-primary-blue">Academic & Industry Partners</h6>
          <p>
            In broad industries such as Traditional FinTech, Web3 FinTech,
            Finance, Technology, Healthcare, Venture Capital, etc.
          </p>
        </div>
      </div>
    </section>
  );
};

type MaskImageProps = {
  src: string;
  mask?: string;
  maskSize?: string;
  maskPosition?: string;
  maskRepeat?: string;
};

const MaskImage: React.FC<MaskImageProps> = () => {
  return (
    <Image
      width={1000}
      height={1000}
      className="object-cover w-full"
      src="https://d2prwyp3rwi40.cloudfront.net/home/assets/KeyMetrics-EditedVersion.png"
      alt="FinTech Club Key Metrics"
      fetchPriority="high"
      priority={true}
      loading="eager"
    />
  );
};

export default IntroSection;
