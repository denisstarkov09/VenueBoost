import React, { useEffect, useState } from "react";

import "./index.css";
import Dropdown from "../Dropdown";

const Faq = ({ faqData = [], className = "" }) => {
  const [faqList, setFaqList] = useState(faqData);

  useEffect(() => {
    setFaqList(faqData);
  }, [faqData]);

  const handleAction = (id) => {
    setFaqList((list) =>
      list.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        } else {
          return { ...item, status: false };
        }
      })
    );
  };

  return (
    <div className={`flex flex-col my-2 ${className}`}>
      {/* <p className="my-14 text-[40px] text-primary1 font-semibold text-center">
        Frequently Asked Questions
      </p> */}
      {faqList.length > 0 &&
        faqList.map((item, index) => (
          <Dropdown
            className=""
            key={index}
            title={item.title}
            content={item.content}
            status={item.status}
            onAction={() => handleAction(item.id)}
          />
        ))}
    </div>
  );
};

export default Faq;
