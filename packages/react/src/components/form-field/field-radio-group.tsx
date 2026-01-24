"use client";

import { cn } from "tailwind-variants";

export interface FieldRadioGroupProps extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical";
}

export const FieldRadioGroup = ({
  className,
  orientation = "vertical",
  ...props
}: FieldRadioGroupProps) => {
  return (
    <div
      role='radiogroup'
      data-orientation={orientation}
      className={cn("radio-group", className)}
      {...props}
    />
  );
};
