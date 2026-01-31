import { tv, type VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base: "button",
  defaultVariants: {
    isIconOnly: false,
    size: "md",
    variant: "primary",
  },
  variants: {
    isIconOnly: {
      true: "button--icon-only",
    },
    size: {
      xl: "button--xl",
      lg: "button--lg",
      md: "button--md",
      sm: "button--sm",
    },
    variant: {
      default: "button--default",
      danger: "button--danger",
      ghost: "button--ghost",
      outline: "button--outline",
      primary: "button--primary",
      secondary: "button--secondary",
      success: "button--success",
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
