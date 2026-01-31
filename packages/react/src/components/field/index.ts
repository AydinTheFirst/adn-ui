import { Checkbox } from "./checkbox";
import { CheckboxGroup } from "./checkbox-group";
import {
  FieldRoot,
  FieldLabel,
  FieldDescription,
  FieldErrorMessage,
  FieldPrefix,
  FieldSuffix,
  FieldGroup,
} from "./field";
import { Input } from "./input";
import { Radio } from "./radio";
import { RadioGroup } from "./radio-group";
import { Select } from "./select";
import { Switch } from "./switch";
import { TextArea } from "./textarea";

export * from "./use-field";
export * from "./context";
export * from "./field.variants";
export * from "./field";

export const Field = Object.assign(FieldRoot, {
  Checkbox,
  CheckboxGroup,
  Description: FieldDescription,
  ErrorMessage: FieldErrorMessage,
  Label: FieldLabel,
  Input,
  Radio,
  RadioGroup,
  Root: FieldRoot,
  Select,
  Switch,
  TextArea,
  Prefix: FieldPrefix,
  Suffix: FieldSuffix,
  Group: FieldGroup,
});
