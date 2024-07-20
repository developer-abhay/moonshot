import React, { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="flex min-w-[576px] flex-col rounded-2xl border-[1px] border-solid border-[#C1C1C1] px-[60px] py-10">
      {children}
    </div>
  );
};

export default Card;
