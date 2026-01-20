"use client";

import { cn } from "tailwind-variants";

import { type LabelVariants, labelVariants } from "./label.variants";

export interface LabelProps extends LabelVariants, React.ComponentProps<"label"> {}

export const Label = ({ className, ...props }: LabelProps) => {
  const styles = labelVariants();

  // oxlint-disable-next-line jsx_a11y/label-has-associated-control
  return <label className={cn(className, styles)} {...props} />;
};
