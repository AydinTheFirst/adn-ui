import { tv, type VariantProps } from "tailwind-variants";

export const fieldVariants = tv({
  slots: {
    control: "input field__control",
    description: "field__description",
    error: "field__error",
    label: "label field__label",
    group: "field__group",
    root: "field",
  },
});

export type FieldVariants = VariantProps<typeof fieldVariants>;
