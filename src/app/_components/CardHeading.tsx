import React, { FC } from "react";

interface CardHeadingProps {
  children: string;
}

const CardHeading: FC<CardHeadingProps> = ({ children }) => {
  return <h1 className="text-center text-[32px] font-semibold">{children}</h1>;
};

export default CardHeading;
