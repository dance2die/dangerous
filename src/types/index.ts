import { ComponentType } from "react";

import domElements from "../domElements";

export type DOMType = keyof typeof domElements;
export type Target = DOMType | ComponentType<any>;

export type LineBuilder = {
  (text: string, index: number): string;
};

export type HtmlBuilder = {
  (unsafeText: string, line: string): string;
};

// prettier-ignore
export type TagFunction = (...args: any[]) => React.ForwardRefExoticComponent<React.RefAttributes<{}>>;

// prettier-ignore
export type Dangerous =
  { [key in DOMType]: TagFunction }
  | { (tag: Target): TagFunction };

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
