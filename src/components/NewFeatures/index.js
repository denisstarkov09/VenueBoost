import React, { useState } from "react";
import Setimg from "../../assets/svgs/people.svg";
import SetimgHover from "../../assets/svgs/people1.svg";

import BannerVideo from "../../assets/images/feature.mp4";
// import CheckMark from "../../assets/svgs/checkmark.svg";
// import FormText from "../FormText";
import "./index.css";
import FeatureItem from "./FeatureItem";
const featureList = [
  {
    video: BannerVideo,
    // title: 'Free Delivery',
    // comment: 'Free delivery up to $7 to all addresses'
    title: "Setup",
    subtitle1:
      "Setup your ResDiary account and access your bookings anytime, anywhere.",
    subtitle2:
      "Integrate with your existing systems, to modernise and scale your hospitality operations. Get more reservations from popular diner channels in real time and deter no-shows by taking deposits or securely storing card details.",
    checkbox: [
      { title: "Table management" },
      { title: "W8List" },
      { title: "Yield Management" },
      { title: "Resphone" },
      { title: "Group Central Reservations" },
    ],
  },
  {
    video: BannerVideo,
    // title: 'Free Delivery',
    // comment: 'Free delivery up to $7 to all addresses'
    title: "Attract Diners",
    subtitle1:
      "Setup your ResDiary account and access your bookings anytime, anywhere.",
    subtitle2:
      "Integrate with your existing systems, to modernise and scale your hospitality operations. Get more reservations from popular diner channels in real time and deter no-shows by taking deposits or securely storing card details.",
    checkbox: [
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
    ],
  },
  {
    video: BannerVideo,
    // title: 'Free Delivery',
    // comment: 'Free delivery up to $7 to all addresses'
    title: "Ordering",
    subtitle1:
      "Setup your ResDiary account and access your bookings anytime, anywhere.",
    subtitle2:
      "Integrate with your existing systems, to modernise and scale your hospitality operations. Get more reservations from popular diner channels in real time and deter no-shows by taking deposits or securely storing card details.",
    checkbox: [
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
    ],
  },
  {
    video: BannerVideo,
    // title: 'Free Delivery',
    // comment: 'Free delivery up to $7 to all addresses'
    title: "Loyalty",
    subtitle1:
      "Setup your ResDiary account and access your bookings anytime, anywhere.",
    subtitle2:
      "Integrate with your existing systems, to modernise and scale your hospitality operations. Get more reservations from popular diner channels in real time and deter no-shows by taking deposits or securely storing card details.",
    checkbox: [
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
      { title: "Table management" },
    ],
  },
];

const NewFeatures = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="align-col-middle">
      <div className="second-part w-[100vw] rounded-[50px] lg:rounded-[100px] mt-6 py-[50px] bg-secondary1 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="mx-auto  max-w-screen-xl">
          <ul className="flex flex-row rounded-[32px] border-2 border-primary1 w-[80%] mx-auto mb-12">
            <li
              className={` w-full border-r-2 bg-white border-primary1 rounded-l-[30px] align-col-middle py-4 ${
                index === 0 ? "active" : ""
              }`}
              onClick={() => setIndex(0)}
            >
              {index === 0 ? <img src={SetimgHover} /> : <img src={Setimg} />}
              <h2>Setup</h2>
            </li>
            <li
              className={`w-full border-r-2 bg-white border-primary1 align-col-middle ${
                index === 1 ? "active" : ""
              } `}
              onClick={() => setIndex(1)}
            >
              {index === 1 ? <img src={SetimgHover} /> : <img src={Setimg} />}

              <h2>Attract Diners</h2>
            </li>
            <li
              className={`w-full border-r-2 bg-white border-primary1 align-col-middle ${
                index === 2 ? "active" : ""
              } `}
              onClick={() => setIndex(2)}
            >
              {index === 2 ? <img src={SetimgHover} /> : <img src={Setimg} />}
              <h2>Ordering</h2>
            </li>
            <li
              className={`w-full bg-white border-primary1 align-col-middle rounded-r-[30px]  ${
                index === 3 ? "active" : ""
              }`}
              onClick={() => setIndex(3)}
            >
              {index === 3 ? <img src={SetimgHover} /> : <img src={Setimg} />}
              <h2>Loyalty</h2>
            </li>
          </ul>
        </div>
        <FeatureItem
          video={featureList[index].video}
          title={featureList[index].title}
          subtitle1={featureList[index].subtitle1}
          subtitle2={featureList[index].subtitle2}
          checkbox={featureList[index].checkbox}
        />
      </div>
    </div>
  );
};

export default NewFeatures;
