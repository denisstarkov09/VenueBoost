import React from "react";
import BannerVideo from "../../assets/images/banner.mp4";
import "./index.css";

const Banner = () => {
  return (
    <div className={"align-col-middle view-terms mt-0 mb-10"}>
      <div className="banner mt-0 w-[100vw] bg-primary1 rounded-b-[100px] lg:rounded-b-[200px] relative">
        <div className="flex align-center my-auto max-w-full py-[9%]">
          <div className="grow basis-[500px] px-12 z-10">
            <p className="text-[44px] lg:text-[52px] color-light  transition-opacity">
              <span id="spin"></span>
            </p>
            <p className="text-[60px] lg:text-[76px] color-light font-semibold  ">
              Think VenueBoost
            </p>
            <p className="text-[28px] lg:text-[32px]  color-light mb-10 ">
              Unlock your venue's full potential.
            </p>
            <a
              href="/get-started"
              className=" bg-red-500  rounded-sm w-max h-auto py-2 px-10 text-white transition ease-in-out hover:scale-105 "
            >
              Get Started
            </a>
          </div>
          <div className="banner-video-container w-0 lg:w-[44%]">
            <video
              className="banner-video"
              autoPlay
              loop
              muted
              width="320"
              height="240"
            >
              <source src={BannerVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
