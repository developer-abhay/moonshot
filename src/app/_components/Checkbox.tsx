import React, { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

interface CheckboxProps {
  label: string;
  userID: string;
  categoryID: string;
  onClick: any;
  checked: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ label, onClick, checked }) => {
  console.log(checked);
  return (
    <div className="inline-flex items-center gap-2" onClick={onClick}>
      <label
        className="relative flex cursor-pointer items-center rounded-full p-1"
        htmlFor={label}
      >
        <input
          checked={checked}
          type="checkbox"
          className="peer relative h-6 w-6 cursor-pointer appearance-none rounded-md bg-[#CCCCCC] transition-all checked:bg-gray-900"
          id={label}
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <IoMdCheckmark />
        </span>
      </label>
      <label
        className="mt-px cursor-pointer select-none capitalize"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
