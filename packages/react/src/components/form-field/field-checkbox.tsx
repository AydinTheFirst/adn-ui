"use client";

import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useFieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldCheckboxProps extends Omit<React.ComponentProps<"input">, "type"> {}

export const FieldCheckbox = ({ className, required, ...props }: FieldCheckboxProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();
  const slots = useMemo(() => useFieldVariants({}), []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, isDirty, isTouched, isValidating, error } }) => (
        <input
          type='checkbox'
          id={name}
          {...props}
          {...field}
          required={isRequired || required}
          checked={field.value}
          data-invalid={Boolean(invalid)}
          data-dirty={Boolean(isDirty)}
          data-touched={Boolean(isTouched)}
          data-validating={Boolean(isValidating)}
          data-error={Boolean(error)}
          className={cn(slots.checkbox(), className)}
        />
      )}
    />
  );
};
