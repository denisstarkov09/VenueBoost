import React, { useEffect, useState } from "react";
import { Country } from "country-state-city";
import "./index.css";
import FormText from "../../components/FormText";
import FormTextInput from "../../components/FormTextInput";
import FormSelect from "../../components/FormSelect";
import { create as createContactSale } from "../../redux/actions/contactsales";
import { NotificationManager } from "react-notifications";
import FormImg from "../../assets/images/get-started.png";
import CheckMark from "../../assets/svgs/checkmark.svg";
const contactReason = [
  { value: "learn_boost", title: "I want to learn about Snapfoot Boost" },
  { value: "want_book", title: "I want to book a reservation" },
  {
    value: "customer_with_question",
    title: "I'm a current customer with a question",
  },
];

const GetStarted = () => {
  const [data, setData] = useState(null);
  const countryList = Country.getAllCountries().map((item) => ({
    value: item.isoCode,
    title: item.name,
  }));

  const handleChange = (e) => {
    setData((info) => ({ ...info, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    createContactSale(data)
      .then((data) => {
        setData(null);
        NotificationManager.success(
          data?.message ||
            "We've received your request, we will update with you shortly.",
          "Success",
          3000
        );
      })
      .catch((error) => {
        NotificationManager.error(
          error.message || "Something went wrong!",
          "Error",
          3000
        );
      });
  };

  return (
    <div className={"align-col-middle view-terms mt-0"}>
      <div className="content-header mt-0 w-[96vw] bg-primary1 rounded-b-[100px] lg:rounded-b-[200px] overflow-hidden relative">
        <div className="flex align-middle max-w-full ">
          <div className="w-[100%] lg:w-[30%] px-12 py-20">
            <FormText
              customClass="md:text-5xl text-3xl color-light font-semibold"
              // customStyle={{lineHeight: '108px'}}
              title="Book a Free Demo"
            />
            <FormText
              type="normal"
              customClass="block color-light mt-5"
              title="Request a personalised demo for your venue"
            />
          </div>
          <div className="w-0 lg:w-[70%]">
            <img src={FormImg} className="max-w-full" alt="get started" />
          </div>
        </div>
      </div>
      <div className="content-form pb-12 flex flex-col lg:flex-row">
        <div className="left-column pr-[10%] py-12 w-[100%] lg:w-[50%]">
          <FormText
            customClass="text-1xl block"
            // customStyle={{lineHeight: '108px'}}
            title="Tell us about your restaurant business"
          />
          <div className="flex mt-3">
            <img src={CheckMark} className="w-5 h-5 mr-4" alt="checkmark" />
            <FormText
              type="subtitle-based"
              customClass="text-sm"
              title="A member of our team will reach out shortly to discuss your needs and if you’d like, give you a platform demo"
            />
          </div>
          <div className="flex mt-3">
            <img src={CheckMark} className="w-5 h-5 mr-4" alt="checkmark" />
            <FormText
              type="subtitle-based"
              customClass="text-sm"
              title="A member of our team will reach out shortly to discuss your needs and if you’d like, give you a platform demo"
            />
          </div>
          <div className="flex mt-3">
            <img src={CheckMark} className="w-5 h-5 mr-4" alt="checkmark" />
            <FormText
              type="subtitle-based"
              customClass="text-sm"
              title="A member of our team will reach out shortly to discuss your needs and if you’d like, give you a platform demo"
            />
          </div>
        </div>
        <div className="right-column w-[100%] lg:w-[50%] z-10 mt-0 lg:mt-[-30%]   rounded-[40px] bg-white   p-8 gap-y-4 gap-x-8">
          <div>
            <FormText
              type="itemtitle"
              customClass="font-normal"
              title="Tell us about your restaurant business"
            />
            <FormText
              type="subtitle-based"
              customClass="my-3 block"
              title="A member of our team will reach out shortly to discuss your needs and if you’d like, give you a platform demo"
            />
          </div>
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
            <FormTextInput
              name="restaurant_name"
              placeholder="Restaurant Name"
              value={data?.restaurant_name || ""}
              onChange={handleChange}
            />
            <FormTextInput
              name="restaurant_city"
              placeholder="Restaurant City"
              value={data?.restaurant_city || ""}
              onChange={handleChange}
            />
            <FormTextInput
              name="restaurant_state"
              placeholder="Restaurant State/Province"
              value={data?.restaurant_state || ""}
              onChange={handleChange}
            />
            <FormTextInput
              name="restaurant_zipcode"
              placeholder="Restaurant Zip/Postal Code"
              value={data?.restaurant_zipcode || ""}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-7">
            <FormSelect
              name={"restaurant_country"}
              placeholder="Restaurant Country"
              value={data?.restaurant_country || ""}
              dataList={countryList}
              onChanage={handleChange}
            />
            <FormSelect
              name={"contact_reason"}
              placeholder="Why are you contacting?"
              value={data?.contact_reason || ""}
              dataList={contactReason}
              onChanage={handleChange}
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
  );
};

export default GetStarted;
