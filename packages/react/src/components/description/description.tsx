"use client";

import { cn } from "tailwind-variants";

import { descriptionVariants, type DescriptionVariants } from "./description.variants";

export interface DescriptionProps extends React.ComponentProps<"p">, DescriptionVariants {}

export const Description = ({ className, ...props }: DescriptionProps) => {
  return (
    <p
      className={cn(descriptionVariants(), className)}
      {...props}
    />
  );
};
