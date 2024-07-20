"use client";
import React, { useState } from "react";
import Card from "../_components/Card";
import CardHeading from "../_components/CardHeading";
import Input from "../_components/Input";
import Button from "../_components/Button";

const page = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Card>
      <CardHeading>Create your account</CardHeading>
      <div className="mt-5 flex flex-col gap-8 pb-20">
        <Input type="text" value={name} label="Name" setValue={setName} />
        <Input type="email" value={email} label="Email" setValue={setEmail} />
        <Input
          type="text"
          value={password}
          label="Password"
          setValue={setPassword}
        />
        <Button text="create account" />
        <p className="text=[#333333] mt-3 text-center">
          Have an Account?{" "}
          <span className="cursor-pointer font-medium text-black hover:underline">
            LOGIN
          </span>
        </p>
      </div>
    </Card>
  );
};

export default page;
