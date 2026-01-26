"use client";

import type { FieldValues, UseFormReturn } from "react-hook-form";

import { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { cn } from "tailwind-variants";

import { type FormVariants, formVariants } from "./form.variants";

interface PureFormProps extends Omit<React.ComponentProps<"form">, "onSubmit"> {}

export interface FormProps<T extends FieldValues> extends FormVariants, PureFormProps {
  form: UseFormReturn<T, any>;
  onSubmit: (data: T) => void | Promise<void>;
}

export const Form = <T extends FieldValues>({
  spacing,
  variant,
  className,
  children,
  form,
  onSubmit,
  ...props
}: FormProps<T>) => {
  const styles = useMemo(() => formVariants({ variant, spacing }), [variant, spacing]);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(styles, className)}
        noValidate
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
};
