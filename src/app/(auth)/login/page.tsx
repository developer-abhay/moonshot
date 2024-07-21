"use client";
import React, { useState } from "react";
import Card from "../../_components/Card";
import CardHeading from "../../_components/CardHeading";
import Input from "../../_components/Input";
import Button from "../../_components/Button";
import Link from "next/link";
import { api } from "@/trpc/react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();
  const { mutate: login, isPending } = api.user.login.useMutation({
    onSuccess: (data) => {
      router.push("/");
      Cookies.set("token", data?.token!);
      console.log("logged in as " + data?.user?.name);
    },
    onError: () => {
      console.log("User doesnot exist ");
    },
  });

  const loginUser = () => {
    login({
      email,
      password,
    });
  };

  if (isPending) return <p>Loading...</p>;
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
          type="password"
          value={password}
          label="Password"
          setValue={setPassword}
        />
        <Button text="login" onClick={loginUser} />
        <hr className="border-t-[2px] border-[#C1C1C1]" />
        <p className="text=[#333333] mt-3 text-center">
          Don't have an Account?
          <Link
            href="/signup"
            className="ml-2 cursor-pointer font-medium tracking-wide text-black hover:underline"
          >
            SIGN UP
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default Page;
