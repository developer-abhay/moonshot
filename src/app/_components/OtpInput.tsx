"use client";
import React, { useRef, useState } from "react";

type InputProps = {
  length?: number;
  onComplete: (pin: string) => void;
};

const OTPInput = ({ length = 4, onComplete }: InputProps) => {
  const inputRef = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length }, () => null),
  );
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(""));

  const setRef = (index: number) => (ref: HTMLInputElement | null) => {
    inputRef.current[index] = ref!;
  };

  const handleTextChange = (input: string, index: number) => {
    if (input.length > 1) {
      input = input.slice(0, 1);
    }
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
    if (newPin.every((digit) => digit !== "")) {
      onComplete(newPin.join(""));
    }
  };

  return (
    <div className="mb-10 flex items-center justify-center gap-3">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="number"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          // ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
          ref={setRef(index)}
          className={`h-12 w-12 rounded border border-[#C1C1C1] text-center text-2xl font-extrabold text-slate-900 outline-none [appearance:textfield] focus:border-blue-600 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`}
          style={{ marginRight: index === length - 1 ? "0" : "10px" }}
        />
      ))}
    </div>
  );
};

export default OTPInput;

{
  /* <div className="mb-10 flex items-center justify-center gap-3">
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
         
        </div> */
}
