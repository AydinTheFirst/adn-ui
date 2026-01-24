"use client";

import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useFieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldTextAreaProps extends React.ComponentProps<"textarea"> {}

export const FieldTextArea = ({ className, required, ...props }: FieldTextAreaProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();
  const slots = useMemo(() => useFieldVariants({}), []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, isDirty, isTouched, isValidating, error } }) => (
        <textarea
          id={name}
          {...props}
          {...field}
          required={isRequired || required}
          data-invalid={Boolean(invalid)}
          data-dirty={Boolean(isDirty)}
          data-touched={Boolean(isTouched)}
          data-validating={Boolean(isValidating)}
          data-error={Boolean(error)}
          className={cn(slots.textarea(), className)}
        />
      )}
    />
  );
};
