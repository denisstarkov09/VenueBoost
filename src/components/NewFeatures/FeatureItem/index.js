import React from "react";

import "./index.css";
import FormText from "../../FormText";
// import BannerVideo from "../../../assets/images/banner.mp4";
import CheckMark from "../../../assets/svgs/checkmark.svg";

const FeatureItem = ({ video, title, subtitle1, subtitle2, checkbox }) => {
  console.log(title);
  return (
    <div className="flex flex-col lg:flex-row w-[80%] mx-auto p-8">
      <div className="w-[100%] lg:w-[50%]  align-middle p-5">
        <video className="" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="w-[100%] lg:w-[50%]  p-5">
        <div className="">
          <FormText
            customClass="text-[32px] text-primary1 font-semibold"
            title={title}
          />
          <FormText customClass="text-[16px] mt-3 block" title={subtitle1} />
          <FormText
            customClass="text-[14px] mt-3 block text-slate-500 "
            title={subtitle2}
          />
          <div className="grid grid-cols-2 gap-1 mb-8">
            {checkbox.map((item, index) => (
              <div className="flex items-center mt-3" key={index}>
                <img src={CheckMark} className="w-5 h-5 mr-4" alt="checkmark" />
                <FormText
                  customClass="text-[16px] text-primary underline"
                  title={item.title}
                />
              </div>
            ))}
          </div>
          <a
            href="/get-started"
            className=" bg-primary1  rounded-sm w-max h-auto py-2 px-10 text-white transition ease-in-out hover:scale-105 "
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
