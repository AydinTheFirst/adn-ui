import { tv, type VariantProps } from "tailwind-variants";

export const formVariants = tv({
  base: "form",
  variants: {
    spacing: {
      default: "form--default",
      compact: "form--compact",
      relaxed: "form--relaxed",
    },
    variant: {
      inline: "form--inline",
      grid: "form--grid",
      stacked: "form--stacked",
    },
  },
  defaultVariants: {
    spacing: "default",
    variant: "stacked",
  },
});

export type FormVariants = VariantProps<typeof formVariants>;
