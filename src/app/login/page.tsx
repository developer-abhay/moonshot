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
        <CardHeading>Login</CardHeading>
        <h3 className="mb-2 mt-5 text-2xl font-medium">
          Welcome back to ECOMMERCE
        </h3>
        <p>The next gen business marketplace</p>
      </div>
      <div className="mt-5 flex flex-col gap-8">
        <Input type="email" value={email} label="Email" setValue={setEmail} />
        <Input
          type="text"
          value={password}
          label="Password"
          setValue={setPassword}
        />
        <Button text="login" />
        <hr className="border-t-[2px] border-[#C1C1C1]" />
        <p className="text=[#333333] mt-3 text-center">
          Don't have an Account?
          <span className="ml-2 cursor-pointer font-medium tracking-wide text-black hover:underline">
            SIGN UP
          </span>
        </p>
      </div>
    </Card>
  );
};

export default page;
