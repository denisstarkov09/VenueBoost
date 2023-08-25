import React, { useState } from "react";
import "./index.css";

const DropdownMenu = ({ title, menu }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <a
        className="flex w-full text-18 lg:h-20 align-middle font-medium text-black1 transition flex gap-1 cursor-pointer hover:text-black1/75"
        onMouseEnter={() => setIsCollapsed(true)}
        onMouseLeave={() => setIsCollapsed(false)}
      >
        <span className="whitespace-nowrap  "> {title}</span>
      </a>
      <div
        className={`dropdownmenu fixed right-1/4 left-1/4 z-10 rounded-lg bg-white px-5 py-2 lg:py-5 ${
          isCollapsed ? "block" : "hidden"
        }`}
        onMouseEnter={() => setIsCollapsed(true)}
        onMouseLeave={() => setIsCollapsed(false)}
      >
        <ul className={`grid grid-cols-2 gap-4 w-70 text-18`}>
          {menu.map((item, i) => (
            <li
              key={i}
              className="px-4 py-1 lg:py-2 text-xl hover:bg-gray-100 rounded-lg"
            >
              <a href={item.url} className="flex">
                <img src={item.icon} className={"w-6 h-6"} alt="icon" />
                <div className="ml-4">
                  <span>{item.label}</span>
                  {item.subtitle && (
                    <p
                      // className={`${
                      //   className === "mobile" ? "text-xs mb-4" : "text-sm"
                      // } text-slate-600`}
                      className="text-xs lg:text-sm text-slate-600"
                      key={item.key}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
