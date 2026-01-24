"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useFieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldErrorMessageProps extends React.ComponentProps<"p"> {}

export const FieldErrorMessage = ({ className, ...props }: FieldErrorMessageProps) => {
  const { name, isRequired } = useField();
  const {
    formState: { errors },
  } = useFormContext();
  const slots = useMemo(() => useFieldVariants({}), []);

  return (
    <p
      aria-describedby={`${name}-error`}
      className={cn(slots.errorMessage(), className)}
      data-required={isRequired}
      {...props}
    >
      {errors[name] && (errors[name]?.message as React.ReactNode)}
    </p>
  );
};
