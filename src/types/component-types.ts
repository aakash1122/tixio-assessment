import { PropsWithChildren } from "react";

type VariantType = "filled" | "outlined";
export type BaseComponent = PropsWithChildren & {
  variant?: VariantType;
  css?: string;
  fullwidth?: boolean;
};
