import React from "react";

const Button = ({ children, handleClick, label }) => {
  const style = {
    download: "bg-brownPrimary text-white px-2 w-44",
    logout:
      "bg-white text-brownPrimary border-2 border-brownPrimary border-dashed w-24",
  };

  return (
    <div
      onClick={handleClick}
      className={`${style[label]} text-center text-sm capitalize font-semibold py-1 rounded-xl mt-4 hover:cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default Button;
