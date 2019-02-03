import { ComponentType } from "react";

import domElements from "../domElements";

// // https://github.com/Microsoft/TypeScript/issues/20965#issuecomment-354858633
// export type StringValuesOf<T extends string[]> = T[number];
// export type DOMElements = StringValuesOf<typeof domElements>;

// Taken from Styled Components flow type declaration
// https://github.com/styled-components/styled-components/blob/master/src/types.js#L16
// export type Target = string | ComponentType<any>;
export type DOMType = keyof typeof domElements;
export type Target = DOMType | ComponentType<any>;

export type LineBuilder = {
  (text: string, index: number): string;
};

export type HtmlBuilder = {
  (unsafeText: string, line: string): string;
};

// interface ArgsCallback extends Function {
//   (props: any): string;
// }

// export interface DangerousComponentProps {
//   as: Target;
//   forwardedRef: React.Ref<Target>;
//   args: Args;
// }

// interface ArgsCallback extends Array<DangerousComponentProps> {
//   (props: DangerousComponentProps): string;
// }

// export type Args = Array<string | ArgsCallback>;
