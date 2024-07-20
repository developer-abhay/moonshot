import { UseMutateFunction } from "@tanstack/react-query";
import React, { FC } from "react";

interface CardButtonProps {
  text: string;
  onClick: any;
}

const Button: FC<CardButtonProps> = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="hover cursor-pointer rounded-md bg-black p-4 text-center uppercase tracking-widest text-white hover:bg-black/80"
    >
      {text}
    </div>
  );
};

export default Button;
