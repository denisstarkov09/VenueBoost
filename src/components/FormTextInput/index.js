import React from "react";
import { isEmpty } from "../../utils/common";

const FormTextInput = ({
  name,
  error,
  value,
  type = "text",
  disabled = false,
  placeholder,
  className,
  inputClassName,
  onChange,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <p className="text-sm text-gray-500">{placeholder}</p>
      <input
        type={type}
        name={name}
        disabled={disabled}
        className={`w-full bg-white h-[42px] border-[1px] mb-8 rounded-sm border-slate-300 focus:border-[1px] outline-none focus:border-blue-400 py-0 px-2 ${inputClassName}`}
        value={value}
        onChange={(e) => onChange(e)}
      />
      {!isEmpty(error) && (
        <div className={"text-red-600 text-12 mt-2"}>{error}</div>
      )}
    </div>
  );
};

export default FormTextInput;
