import { ComponentType } from "react";

// Taken from Styled Components flow type declaration
// https://github.com/styled-components/styled-components/blob/master/src/types.js#L16
export type Target = string | ComponentType<any>;

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
