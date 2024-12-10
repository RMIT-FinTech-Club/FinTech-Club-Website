import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
}

const Button: React.FC<ButtonProps> = ({ children, classes = "" }) => {
  return (
    <button
      className={`${classes} font-semibold text-white transition duration-200 text-[1.1vw] px-[3vw] py-[0.4vw] rounded-[4px] hover:contrast-150`}
    >
      {children}
    </button>
  );
};

export default Button;