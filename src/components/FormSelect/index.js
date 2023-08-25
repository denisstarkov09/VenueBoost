import React from "react";

import "./index.css";

const FormSelect = (props) => {
  const {
    name = "",
    dataList = [],
    value = "",
    placeholder = "",
    onChanage = () => {},
  } = props;

  return (
    <div className="w-full">
      <p className="text-gray-500">{placeholder}</p>
      <select
        name={name}
        value={value}
        onChange={onChanage}
        className="w-full bg-white h-[42px] border-[1px] rounded-sm border-slate-300 px-2 focus:border-[1px] outline-none focus:border-blue-400"
      >
        {dataList.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
