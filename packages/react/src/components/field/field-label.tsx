"use client";

import { useMemo } from "react";
import { cn } from "tailwind-variants";

import { useFieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldLabelProps extends React.ComponentProps<"label"> {}

export const FieldLabel = ({ className, children, ...props }: FieldLabelProps) => {
  const { name, isRequired } = useField();
  const slots = useMemo(() => useFieldVariants({}), []);

  return (
    <label
      htmlFor={name}
      className={cn(slots.label(), className)}
      data-required={Boolean(isRequired)}
      {...props}
    >
      {children}
    </label>
  );
};
