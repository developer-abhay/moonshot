import React, { FC } from "react";

interface CardButtonProps {
  text: string;
}

const Button: FC<CardButtonProps> = ({ text }) => {
  return (
    <div className="hover cursor-pointer rounded-md bg-black p-4 text-center uppercase tracking-widest text-white hover:bg-black/80">
      {text}
    </div>
  );
};

export default Button;
