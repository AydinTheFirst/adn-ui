import { tv, type VariantProps } from "tailwind-variants";

export const useFieldVariants = tv({
  slots: {
    checkbox: "checkbox",
    errorMessage: "error-message",
    helperText: "helper-text",
    input: "input",
    label: "label",
    radio: "radio",
    root: "field",
    select: "select",
    textarea: "textarea",
  },
});

export type FieldVariants = VariantProps<typeof useFieldVariants>;
