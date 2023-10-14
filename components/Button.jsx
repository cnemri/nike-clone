import Image from "next/image";
import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full  ${
        backgroundColor ? backgroundColor : "bg-coral-red"
      } ${textColor ? textColor : "text-white"} ${borderColor}`}
    >
      {label}{" "}
      {iconURL && (
        <Image
          src={iconURL}
          alt="icon"
          className="ml-2 rounded-full"
          width={"5rem"}
          height={"5rem"}
        />
      )}
    </button>
  );
};

export default Button;
