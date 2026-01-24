"use client";

import { Checkbox as BaseCheckbox } from "@base-ui/react";
import { LucideCheck } from "lucide-react";
import { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "tailwind-variants";

import { useFieldVariants } from "./field.variants";
import { useField } from "./use-field";

export interface FieldCheckboxProps extends BaseCheckbox.Root.Props {}

export const FieldCheckbox = ({ className, children, required, ...props }: FieldCheckboxProps) => {
  const { control } = useFormContext();
  const { name, isRequired } = useField();
  const slots = useMemo(() => useFieldVariants({}), []);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field, fieldState: { invalid, error } }) => (
        <BaseCheckbox.Root
          id={name}
          {...props}
          {...field}
          required={isRequired || required}
          checked={field.value}
          onCheckedChange={field.onChange}
          data-invalid={Boolean(invalid)}
          data-error={Boolean(error)}
          className={cn(slots.checkbox(), className)}
        >
          <BaseCheckbox.Indicator className={slots.checkboxIndicator()}>
            <LucideCheck />
          </BaseCheckbox.Indicator>
          {children}
        </BaseCheckbox.Root>
      )}
    />
  );
};
