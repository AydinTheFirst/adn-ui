import { FieldCheckbox } from "./field-checkbox";
import { FieldErrorMessage } from "./field-error-message";
import { FieldHelperText } from "./field-helper-text";
import { FieldInput } from "./field-input";
import { FieldLabel } from "./field-label";
import { FieldRadio } from "./field-radio";
import { FieldRadioGroup } from "./field-radio-group";
import { FieldRoot } from "./field-root";
import { FieldSelect } from "./field-select";
import { FieldTextArea } from "./field-textarea";

export { FieldCheckbox, type FieldCheckboxProps } from "./field-checkbox";
export { FieldErrorMessage, type FieldErrorMessageProps } from "./field-error-message";
export { FieldHelperText, type FieldHelperTextProps } from "./field-helper-text";
export { FieldInput, type FieldInputProps } from "./field-input";
export { FieldLabel, type FieldLabelProps } from "./field-label";
export { FieldRadio, type FieldRadioProps } from "./field-radio";
export { FieldRadioGroup, type FieldRadioGroupProps } from "./field-radio-group";
export { FieldRoot, type FieldRootProps } from "./field-root";
export { FieldSelect, type FieldSelectProps } from "./field-select";
export { FieldTextArea, type FieldTextAreaProps } from "./field-textarea";

export const Field = Object.assign(FieldRoot, {
  Checkbox: FieldCheckbox,
  ErrorMessage: FieldErrorMessage,
  HelperText: FieldHelperText,
  Input: FieldInput,
  Label: FieldLabel,
  Radio: FieldRadio,
  RadioGroup: FieldRadioGroup,
  Root: FieldRoot,
  Select: FieldSelect,
  TextArea: FieldTextArea,
});

export { useFieldVariants, type FieldVariants } from "./field.variants";
