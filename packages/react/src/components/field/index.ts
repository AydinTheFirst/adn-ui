import {
  FieldControl,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldRoot,
} from "./field";

export const Field = Object.assign(FieldRoot, {
  Control: FieldControl,
  Description: FieldDescription,
  Group: FieldGroup,
  Error: FieldError,
  Label: FieldLabel,
  Root: FieldRoot,
});

export * from "./field";

export type { FieldVariants } from "./field.variants";
export { fieldVariants } from "./field.variants";
