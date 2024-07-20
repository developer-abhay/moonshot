"use client";
import React, { useState } from "react";
import Card from "../_components/Card";
import CardHeading from "../_components/CardHeading";
import Input from "../_components/Input";
import Button from "../_components/Button";

const page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Card>
      <div className="text-center">
        <CardHeading>Verify your email</CardHeading>
        <p className="my-5">
          Enter the 8 digit code you have received on <br />
          <span className="font-medium">swa***@gmail.com</span>
        </p>
      </div>
      <div className="mt-5 flex flex-col pb-10">
        <p>Code</p>
        <div className="mb-10 flex items-center justify-center gap-3">
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
          <input
            type="text"
            className="h-14 w-14 appearance-none rounded border border-[#C1C1C1] p-4 text-center text-2xl font-extrabold text-slate-900 outline-none"
            pattern="\d*"
            maxLength={1}
          />
        </div>
        <Button text="verify" />
      </div>
    </Card>
  );
};

export default page;
