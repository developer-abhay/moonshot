import React, { FC } from "react";

interface InputProps {
  label: string;
  type: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: FC<InputProps> = ({ label, type, value, setValue }) => {
  return (
    <div>
      <h5>{label}</h5>
      <input
        className="mt-1 w-full rounded-md border-[1px] border-solid border-[#C1C1C1] p-3"
        type={type}
        value={value}
        placeholder="Enter"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
