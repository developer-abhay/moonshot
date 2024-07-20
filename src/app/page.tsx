"use client";

import Card from "./_components/Card";
import CardHeading from "./_components/CardHeading";
import Checkbox from "./_components/Checkbox";

import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState<string[]>([
    "shoes",
    "men t-shirts",
    "makeup",
    "jewellery",
    "women t-shirt",
    "furniture",
  ]);
  return (
    <Card>
      <CardHeading>Please mark your interests!</CardHeading>
      <p className="my-4 text-center">We will keep you notified.</p>
      <h3 className="my-2 text-xl font-medium">My saved interests!</h3>
      <div className="flex flex-col gap-4">
        {categories.map((title) => (
          <Checkbox label={title} />
        ))}
      </div>
      <div className="mt-10 flex items-center justify-center gap-3 text-xl font-medium text-[#ACACAC]">
        <MdKeyboardDoubleArrowLeft />
        <IoIosArrowBack />
        <span>1</span>
        <span>2</span>
        <span className="text-black">3</span>
        <span>4</span>
        <span>5</span>
        <IoIosArrowForward />
        <MdKeyboardDoubleArrowRight />
      </div>
    </Card>
  );
}
