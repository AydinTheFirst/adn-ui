import { use } from "react";

import { FieldContext } from "./field.context";

export const useField = () => {
  const context = use(FieldContext);

  if (!context) {
    throw new Error("useField must be used within a Field component");
  }

  return context;
};
