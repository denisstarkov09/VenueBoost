import React, { useState } from "react";
// import SvgDown from "../../assets/svgs/chevron-down.svg";
import "./index.css";

const DropdownMenuMobile = ({ title, menu }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <a
        className="flex m-4 mx-6 w-full text-18 align-middle font-medium text-black1 transition flex gap-1 cursor-pointer hover:text-black1/75"
        onMouseEnter={() => setIsCollapsed(true)}
        onMouseLeave={() => setIsCollapsed(false)}
      >
        <span className="whitespace-nowrap align-start "> {title}</span>
        {/* <img src={SvgDown} className={"w-4 h-4"} alt="svg" /> */}
      </a>
      <div className={`${isCollapsed ? "block" : "hidden"}`}>
        <ul className={`grid grid-cols-1  text-18`}>
          {menu.map((item, i) => (
            <li key={i} className="px-10 py-3 text-md bg-white  ">
              <a href={item.url} className="flex">
                <div className="ml-1">
                  <span>{item.label}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownMenuMobile;
