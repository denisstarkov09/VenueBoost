import React, { useEffect, useState } from "react";

import "./index.css";
import IconUp from "../../assets/svgs/drop-up.svg";
import IconDown from "../../assets/svgs/drop-down.svg";

const Dropdown = ({ title, content, status = false, onAction = () => {} }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setIsCollapsed(status);
  }, [status]);

  return (
    <div
      className={`flex flex-col  border-b-2 border-[#aea7bb] {
        isCollapsed ? "dropdown-opened" : "dropdown-closed"
      }`}
      onClick={() => onAction()}
    >
      <div
        className={` flex flex-row justify-between p-8 active:bg-[#aa9fc0] `}
      >
        <span className={`text-xl font-semibold `}>{title}</span>
        <img src={isCollapsed ? IconUp : IconDown} />
      </div>
      {
        <div className={` px-16 pb-8 ${isCollapsed ? "block" : "hidden"}`}>
          <span className="text-sm color-gray font-normal">{content}</span>
        </div>
      }
    </div>
  );
};

export default Dropdown;
