"use client";

import { cn } from "tailwind-variants";

import { type LabelVariants, labelVariants } from "./label.variants";

export interface LabelProps extends LabelVariants, React.ComponentProps<"label"> {}

export const Label = ({ className, children, ...props }: LabelProps) => {
  const styles = labelVariants();

  return (
    <label
      className={cn(className, styles)}
      {...props}
    >
      {children}
    </label>
  );
};
