import React, { PropsWithChildren } from "react";

const variants = {
  filled: "bg-primary text-white",
  outlined: "border-[1px] border-dark_primary text-dark_primary",
};
type VariantType = keyof typeof variants;

type Props = PropsWithChildren & {
  variant?: VariantType;
  css?: string;
  fullwidth?: boolean;
};

const Button = ({
  css = "",
  variant = "filled",
  fullwidth = false,
  children,
}: Props) => {
  return (
    <button
      className={`flex items-center justify-center rounded gap-1 py-[10px] px-[20px] text-sm ${
        fullwidth ? "w-full" : "w-max"
      } ${variants[variant]} ${css}`}
    >
      {children}
    </button>
  );
};

export default Button;
