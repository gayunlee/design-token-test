import React from "react";

interface Props {
  text: string;
  state?: "default" | "hover";
  size: "md" | "lg";
  type: "primary" | "light-secondary";
}

const sizes = {
  md: "h-[48px]",
  lg: "h-[60px]",
};

const types = {
  primary: "bg-primary-200 text-surface-50",
  "light-secondary":
    "bg-transparent text-primary-200 border-primary-200 border-2",
};

const MainButton = ({ text, type, size }: Props) => {
  return (
    <button
      className={`py-[12px] px-[20px] rounded-[4px] h-[48px] bg-primary-200 ${types?.[type]} ${sizes?.[size]}`}
    >
      <p>{text}</p>
    </button>
  );
};

export default MainButton;
