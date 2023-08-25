import React, { useEffect } from "react";
import "./index.css";
import Pricing from "../../components/Pricing";
import Testimonials from "./testimonial";
import NewFeatures from "../../components/NewFeatures";
import Introduction from "../../components/Introduction";
import Banner from "../../components/Banner";
import Support from "./support";

const Home = (props) => {
  return (
    <div className={"view-home"}>
      <Banner />
      <Introduction />
      <NewFeatures />
      <Support />
      <Pricing hasMoreBtn={true} />
      <Testimonials />
    </div>
  );
};

export default Home;
