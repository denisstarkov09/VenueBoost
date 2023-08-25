import React, { useEffect, useState } from "react";
import "./index.css";
// import FaqGeneral from "./faq-general";
// import FaqAccount from "./faq-account";
// import FaqSecurity from "./faq-security";
import FormText from "../../../components/FormText";
import Faq from "../../../components/Faq";
import FaqImg from "../../../assets/images/faq.png";
// import FaqSvg from "../../../assets/svgs/faq.png";

const Faqs = () => {
  const generalFaq = [
    {
      id: 1,
      status: false,
      title: "What is Veshion?",
      content:
        "Veshion is the fastest growing online fashion retailer in Asia. Sites in each country ensure that fashion products are tailored to the tastes of each country and adapt to its preferences. . We offer womenswear, menswear, shoes, accessories, sporting goods, Muslim fashion, and more!",
    },
    {
      id: 2,
      status: false,
      title: "Where Veshion can be downloaded?",
      content:
        "Veshion is the fastest growing online fashion retailer in Asia. Sites in each country ensure that fashion products are tailored to the tastes of each country and adapt to its preferences. . We offer womenswear, menswear, shoes, accessories, sporting goods, Muslim fashion, and more!",
    },
    {
      id: 3,
      status: false,
      title: "How to create a Veshion account?",
      content:
        "Veshion is the fastest growing online fashion retailer in Asia. Sites in each country ensure that fashion products are tailored to the tastes of each country and adapt to its preferences. . We offer womenswear, menswear, shoes, accessories, sporting goods, Muslim fashion, and more!",
    },
  ];

  return (
    <div className="align-col-middle ">
      <div className="mt-0 w-[100vw]  bg-primary1 rounded-b-[100px] lg:rounded-b-[200px]">
        <div className="flex mx-auto max-w-full relative p-20">
          <div className="w-[50%]  px-12 py-20">
            <FormText
              customClass="md:text-5xl text-3xl color-light font-semibold "
              // customStyle={{lineHeight: '108px'}}
              title="Frequently Asked Questions"
            />
          </div>
          <div className="clip-img absolute  top-[10px] left-[55%] w-[40%]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.2 3.17">
              <clipPath id="blob" clipPathUnits="objectBoundingBox">
                <path
                  d="M167.2 0c-6.6 3.5-9.2 4.9 0 0Z"
                  style={{ fill: "none" }}
                ></path>
                <path d="M1 .5v.07C1 .61.98.65.96.69.93.74.89.78.84.81.78.85.71.86.64.85.59.85.54.83.5.81.42.77.35.73.27.69.16.64.02.6 0 .46V.42C0 .28.11.23.22.17L.41.08S.48.05.52.03C.58 0 .65 0 .71 0c.04 0 .07.01.11.03.07.03.12.09.15.16.02.05.03.1.03.16"></path>
              </clipPath>
            </svg>
            <img
              src={FaqImg}
              className="absolute left-0 top-[30px]"
              alt="faq"
            />
          </div>
        </div>
      </div>
      <Faq faqData={generalFaq} className="w-[80%] mt-10" />
    </div>
  );
};

export default Faqs;
