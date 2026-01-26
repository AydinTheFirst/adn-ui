import { RadioIndicator, RadioRoot } from "./radio";

export const Radio = Object.assign(RadioRoot, {
  Root: RadioRoot,
  Indicator: RadioIndicator,
});

export * from "./radio";
export type * from "./radio";

export { radioVariants, type RadioVariants } from "./radio.variants";
