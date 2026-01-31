import { tv, type VariantProps } from "tailwind-variants";

export const fieldVariants = tv({
  slots: {
    root: "field",
    label: "field__label",
    description: "field__description",
    error: "field__error",
    group: "field__group",
    prefix: "field__prefix",
    suffix: "field__suffix",
  },
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
