"use client";

import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { useFieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldHelperTextProps extends React.ComponentProps<"p"> {}

export const FieldHelperText = ({ className, ...props }: FieldHelperTextProps) => {
  const { isRequired } = useField();
  const slots = useMemo(() => useFieldVariants({}), []);

  return (
    <p
      className={cn(slots.helperText(), className)}
      data-required={isRequired}
      {...props}
    />
  );
};
