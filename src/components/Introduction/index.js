import React from "react";
import FormText from "../FormText";
import Item from "./Item";

const introductionList = [
  {
    icon: require("../../assets/svgs/truck.svg"),
    title: "#1 Point of Sale",
    comment: "Ranked in 2021 as G2's leading restaurants point of sale.",
  },
  {
    icon: require("../../assets/svgs/truck.svg"),
    title: "Always available",
    comment:
      "24/7 support, top-tier reliability, and full offline mode keep your restaurant moving.",
  },
  {
    icon: require("../../assets/svgs/truck.svg"),
    title: "Stronger performance",
    comment:
      "Restaurants using the VenueBoost platform have outperformed their peers by 10-30%.",
  },
  {
    icon: require("../../assets/svgs/truck.svg"),
    title: "Low-cost delivery",
    comment: "Reduce third-party delivery commissions by up to 80%.",
  },
];

const NewFeatures = () => {
  return (
    <div className="flex flex-col gap-4 items-center mb-24">
      <div className="flex flex-col text-center mt-10">
        <FormText
          type="title"
          title="Why Over 74,000 restaurants love VenueBoost"
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 text-left mt-10">
          {introductionList.map((item, index) => (
            <Item key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewFeatures;
