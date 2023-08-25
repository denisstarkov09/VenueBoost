import React, { useEffect, useState } from "react";
import FormText from "../../components/FormText";
import FormTextInput from "../../components/FormTextInput";
import ContactUsImg from "../../assets/images/contact-us-form-image.jpg";
import Faq from "../../components/Faq";
import "./index.css";

const Contact = () => {
  const [data, setData] = useState(null);
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
  const handleChange = (e) => {
    setData((info) => ({ ...info, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    console.log(data);
  };
  return (
    <div className="align-col-middle ">
      <div className="first-part mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-[40px] bg-secondary1 p-7 gap-2">
          <p className="text-primary1 font-semibold">Want to book a Demo?</p>
          <p className="text-slate-500 text-12 inline leading-none">
            Are you new to VenueBoost? Book in a Demo and our experienced team
            will show you how our products can be specifically suited to your
            venue's needs.
          </p>
          <a
            href="#"
            className="ml-2 text-12 text-primary1 underline decoration-primary1"
          >
            Click here
          </a>
        </div>
        <div className="rounded-[40px] bg-secondary1 p-7 gap-2">
          <p className="text-primary1 font-semibold">Want to book a Demo?</p>
          <p className="text-slate-500 text-12 inline">
            Are you new to VenueBoost? Book in a Demo and our experienced team
            will show you how our products can be specifically suited to your
            venue's needs.
          </p>
          <a
            href="#"
            className="ml-2 text-12 text-primary1 underline decoration-primary1"
          >
            Click here
          </a>
        </div>
        <div className="rounded-[40px] bg-secondary1 p-7 gap-2">
          <p className="text-primary1 font-semibold">Want to book a Demo?</p>
          <p className="text-slate-500 text-12 inline">
            Are you new to VenueBoost? Book in a Demo and our experienced team
            will show you how our products can be specifically suited to your
            venue's needs.
          </p>
          <a
            href="#"
            className="ml-2 text-12 text-primary1 underline decoration-primary1"
          >
            Click here
          </a>
        </div>
      </div>
      <div className="second-part w-[100vw] rounded-[100px] lg:rounded-[200px] mt-6 py-[50px] bg-secondary1 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="mx-auto  max-w-screen-2xl rounded-[40px] px-2 sm:px-3 md:px-4 lg:px-5 bg-primary1 flex flex-col lg:flex-row gap-4 z-[10]">
          <div className="left-column p-10 w-[100%] lg:w-[50%]">
            <p className="text-white text-[28px]">
              Gain visibility into your venue operations{" "}
            </p>
            <p className="text-white">
              Discuss your goals and priorities with a VenueBoost export and get
              tailored support.
            </p>

            <img
              src={ContactUsImg}
              alt="contact us image"
              className="mt-3 rounded-[45px]"
            />
          </div>
          <div className="right-column w-[100%] lg:w-[50%]  bg-white rounded-[40px] p-10">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 flex-col ">
              <FormTextInput
                name="first_name"
                placeholder="First Name"
                value={data?.first_name || ""}
                onChange={handleChange}
              />
              <FormTextInput
                name="last_name"
                placeholder="Last Name"
                value={data?.last_name || ""}
                onChange={handleChange}
              />
              <FormTextInput
                name="email"
                type={"email"}
                placeholder="Email"
                value={data?.email || ""}
                onChange={handleChange}
              />
              <FormTextInput
                name="mobile"
                placeholder="Mobile Number"
                value={data?.mobile || ""}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <FormText
                type="subtitle-based"
                customClass="mt-6 block"
                title="By clicking Submit you agree to our Privacy Policy"
              />
              <FormText
                type="subtitle-based"
                customClass="mt-3 block"
                title="You also agree to receive marketing communications from Snapfoot Boost about news, events, promotions and monthly newsletters. You can unsubscribe from Snapfoot Boost emails at any time."
              />

              <button
                className="submit-button bg-primary1 mt-5 rounded-sm w-max h-auto py-2 px-10 text-white transition ease-in-out hover:scale-105 "
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="thrid-part flex w-[70%]">
        <Faq faqData={generalFaq} className="w-[100%]" />
      </div>
    </div>
  );
};

export default Contact;
