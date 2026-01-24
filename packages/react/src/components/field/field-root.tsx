"use client";

import { useId, useMemo } from "react";
import { cn } from "tailwind-variants";

import { type FieldValue, FieldContext } from "./field.context";
import { useFieldVariants } from "./field.variants";

export interface FieldRootProps extends React.ComponentProps<"div"> {
  name?: string;
  isRequired?: boolean;
}

export const FieldRoot = ({ className, name, isRequired, ...props }: FieldRootProps) => {
  const id = useId();
  const slots = useMemo(() => useFieldVariants({}), []);

  const value = useMemo<FieldValue>(
    () => ({
      name: name ?? id,
      isRequired,
    }),
    [name, id, isRequired],
  );

  return (
    <FieldContext value={value}>
      <div
        className={cn(slots.root(), className)}
        data-required={isRequired}
        {...props}
      />
    </FieldContext>
  );
};
