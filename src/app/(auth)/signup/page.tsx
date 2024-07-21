"use client";
import React, { useState } from "react";
import Card from "../../_components/Card";
import CardHeading from "../../_components/CardHeading";
import Input from "../../_components/Input";
import Button from "../../_components/Button";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const { mutate: userSignUp } = api.user.signup.useMutation({
    onSuccess: (user) => {
      router.push(`/verify/${user.id}`);
      setName("");
      setEmail("");
      setPassword("");
      setIsLoading(false);
    },
    onError: () => {
      setIsLoading(false);
      console.log("OTP does not match");
    },
  });

  const registerUser = () => {
    setIsLoading(true);
    userSignUp({ name, email, password });
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <Card>
      <CardHeading>Create your account</CardHeading>
      <div className="mt-5 flex flex-col gap-8 pb-20">
        <Input type="text" value={name} label="Name" setValue={setName} />
        <Input type="email" value={email} label="Email" setValue={setEmail} />
        <Input
          type="password"
          value={password}
          label="Password"
          setValue={setPassword}
        />
        <Button text="create account" onClick={registerUser} />
        <p className="text=[#333333] mt-3 text-center">
          Have an Account?{" "}
          <Link
            href="/login"
            className="cursor-pointer font-medium tracking-wide text-black hover:underline"
          >
            LOGIN
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default Page;
