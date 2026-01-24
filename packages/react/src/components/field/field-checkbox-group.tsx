"use client";

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react";
import { cn } from "tailwind-variants";
export interface FieldCheckboxGroupProps extends BaseCheckboxGroup.Props {
  orientation?: "horizontal" | "vertical";
}

export const FieldCheckboxGroup = ({
  className,
  orientation = "vertical",
  ...props
}: FieldCheckboxGroupProps) => {
  return (
    <BaseCheckboxGroup
      role='group'
      data-orientation={orientation}
      className={cn("checkbox-group", className)}
      {...props}
    />
  );
};
