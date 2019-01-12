import { ComponentType } from "react";

export type Target = string | ComponentType;

export type LineBuilder = {
  (text: string, index: number): string;
};

export type HtmlBuilder = {
  (unsafeText: string, line: string): string;
};
