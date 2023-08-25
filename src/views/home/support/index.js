import React from "react";
import FormText from "../../../components/FormText";

const Support = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-24 my-24">
      <div className="mr-10">
        <img
          src={require("../../../assets/images/contact.png")}
          alt="contact"
        />
      </div>
      <div className="flex flex-col justify-center lg:pl-20">
        <FormText type="subtitle" title="CUSTOMER SUPPORT" />
        <FormText
          type="title"
          customClass="my-10"
          title="24/7 Integrated Customer Support"
        />
        <FormText
          type="subtitle"
          title="Our customer support are always ready to help your problems 24/7. Any question? Contact us"
        />
        <a
          href="/get-started"
          className="btn bg-primary1 text-white w-max mt-10 flex items-center"
        >
          Contact Sales
        </a>
      </div>
    </div>
  );
};

export default Support;
