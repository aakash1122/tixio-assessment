import React, { HTMLInputTypeAttribute } from "react";
import { BaseComponent } from "../../types/component-types";

const variants = {
  filled: "bg-[#C39EF3]",
  outlined: "border-[1px] border-dark_primary text-dark_primary",
};

type Props = BaseComponent & {
  type: HTMLInputTypeAttribute | undefined;
  placeHolder?: string;
};

const TextField = ({
  type,
  placeHolder = "type",
  css = "",
  variant = "filled",
  fullwidth,
  children,
}: Props) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className={`${css} outline-none h-[42px] px-[20px] rounded text-sm focus:outline ${
        fullwidth ? "w-full" : "w-max"
      } ${variants[variant]}`}
    />
  );
};

export default TextField;
