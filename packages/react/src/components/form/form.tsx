"use client";

import type { FieldValues, UseFormReturn } from "react-hook-form";

import { useMemo } from "react";
import { FormProvider } from "react-hook-form";
import { cn } from "tailwind-variants";

import { type FormVariants, formVariants } from "./form.variants";

export interface FormProps<TFieldValues extends FieldValues = FieldValues>
  extends FormVariants, Omit<React.ComponentProps<"form">, "onSubmit"> {
  form: UseFormReturn<TFieldValues>;
  onSubmit: (data: TFieldValues) => void | Promise<void>;
}

export const Form = <TFieldValues extends FieldValues = FieldValues>({
  form,
  onSubmit,
  className,
  children,
  spacing,
  variant,
  ...props
}: FormProps<TFieldValues>) => {
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
