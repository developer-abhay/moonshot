"use client";
import React, { useState } from "react";
import Card from "@/app/_components/Card";
import CardHeading from "@/app/_components/CardHeading";
import Button from "@/app/_components/Button";
import OtpInput from "@/app/_components/OtpInput";
import { useParams, useRouter } from "next/navigation";
import { api } from "@/trpc/react";

const Page = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [verifyCode, setVerifyCode] = useState<string>("");

  const { mutate: verify, isPending } = api.user.verify.useMutation({
    onSuccess: () => {
      router.push("/login");
      console.log("User verified");
    },
    onError: () => {
      console.log("OTP does not match");
    },
  });

  const verifyUser = () => {
    verify({ userId: id, verifyCode });
  };
  if (isPending) return <p>Loading....</p>;
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
        <OtpInput length={8} onComplete={setVerifyCode} />

        <Button text="verify" onClick={verifyUser} />
      </div>
    </Card>
  );
};

export default Page;
