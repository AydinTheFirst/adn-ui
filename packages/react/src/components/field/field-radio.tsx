"use client";

import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useFieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldRadioProps extends Omit<React.ComponentProps<"input">, "type"> {
  value: string;
}

export const FieldRadio = ({ className, value, required, ...props }: FieldRadioProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();
  const slots = useMemo(() => useFieldVariants({}), []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { invalid, error } }) => (
        <input
          type='radio'
          id={`${name}-${value}`}
          {...props}
          checked={field.value === value}
          onChange={() => field.onChange(value)}
          onBlur={field.onBlur}
          value={value}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
          className={cn(slots.radio(), className)}
          required={isRequired || required}
        />
      )}
    />
  );
};
