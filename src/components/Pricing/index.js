import React, { useEffect } from "react";
import "./index.css";
import Svg_check from "../../assets/svgs/checkbox.svg";
import { Link } from "react-router-dom";
import RouteNames from "../../constants/route_names";
import FormText from "../FormText";

const Pricing = (props) => {
  const data = [
    {
      type: "Basic",
      price: 9,
      desc: "Beautifully simple project planning",
      items: [
        "24/7 Support",
        "Instant Backup",
        "10 GB Storage",
        "Unlimited Bandwith",
      ],
    },
    {
      type: "Premium",
      price: 17,
      desc: "Declutter your mind and save time with Premium",
      items: [
        "24/7 Support",
        "Instant Backup",
        "500 GB Storage",
        "Unlimited Bandwith",
        "Unlimited Access",
      ],
    },
    {
      type: "Business",
      price: 29,
      desc: "For large business and team. Special price for you",
      items: [
        "24/7 Support",
        "Instant Backup",
        "Unlimited Storage",
        "Unlimited Bandwith",
        "Unlimited Access",
        "Priority Client",
      ],
    },
  ];

  const PlanItem = ({ data }) => {
    return (
      <div
        className={`rounded-24 p-5 md:p-9 ${
          data.type == "Premium" ? "bg-white shadow-lg_1" : "bg-gray2"
        }`}
      >
        <p className={"text-20 text-black1  font-semibold"}>{data?.type}</p>
        <div className={"flex-row mt-9 mb-9"}>
          <FormText
            customClass="text-5xl font-semibold"
            title={`$${data?.price}`}
          />
          <FormText type="subtitle" title="/month" />
        </div>
        <p className={"text-18 text-gray1 font-normal mb-9"}>{data?.desc}</p>
        {data?.items?.map((item) => (
          <div className={"flex justify-start items-center gap-5 mb-6"}>
            <img src={Svg_check} className={" w-7 h-7 object-contain"} />
            <FormText type="normal" title={item} />
          </div>
        ))}
        <button
          className={` mt-6 px-6 py-3 rounded-xl border-2 ${
            data.type == "Premium"
              ? "bg-primary1 text-white"
              : "bg-white text-primary1"
          } text-16 leading-7 border-primary1 `}
        >
          Get started
        </button>
      </div>
    );
  };

  return (
    <div
      className={
        "pricing-plans mx-auto max-w-screen-main px-4 pt-16 pb-6 sm:px-6 md:px-8 lg:px-16 lg:pt-24 "
      }
    >
      <div className={"flex flex-col justify-center items-center"}>
        {/* <h2 className={'text-34 text-black1 font-semibold'}></h2>
        <p className={'text-18 text-gray1 font-normal mt-3'}>.</p> */}
        <FormText type="title" title="Plans & Pricing" />
        <FormText
          type="subtitle"
          customClass="mt-3"
          title="Pay by month and cancel at any time."
        />
      </div>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 mt-12 md:mt-24"
        }
      >
        {data.map((item) => (
          <PlanItem key={item.type} data={item} onStart={(item) => {}} />
        ))}
      </div>
      {props.hasMoreBtn == true && (
        <div className={"flex justify-center items-center mt-7"}>
          <Link
            to={RouteNames.pricing}
            className={` mt-6 px-6 py-4 rounded-xl   bg-gray2 text-black1 text-18 leading-7 font-semibold `}
          >
            Pricing plans in details
          </Link>
        </div>
      )}
    </div>
  );
};

export default Pricing;
