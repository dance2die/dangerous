import React, { ComponentType } from "react";
import domElements from "./domElements";
import hoistNonReactStatics from "hoist-non-react-statics";

import { Target, LineBuilder, HtmlBuilder, DOMType } from "./types";

function DangerousComponent(props: any) {
  const { as: WrappedComponent, args, forwardedRef, className } = props;
  const [texts, ...callbacks] = args;

  const toLines: LineBuilder = (text, i) =>
    `${text}${args[i + 1] ? callbacks[i](props) : ""}`;
  const toHtml: HtmlBuilder = (unsafeText, line) => (unsafeText += line);

  const __html: string = texts.map(toLines).reduce(toHtml, "");

  return (
    <WrappedComponent
      ref={forwardedRef}
      dangerouslySetInnerHTML={{ __html }}
      className={className}
    />
  );
}

function contructWithArgs(tag: Target, args: any) {
  const WrappedComponent = React.forwardRef((props, ref) => (
    <DangerousComponent as={tag} args={args} forwardedRef={ref} {...props} />
  ));

  WrappedComponent.displayName = `Dangerous(${getDisplayName(tag)})`;
  hoistNonReactStatics(WrappedComponent, tag as ComponentType<any>);
  return WrappedComponent;
}

function getDisplayName(tag: Target): string {
  return typeof tag === "string"
    ? `dangerous.${tag}`
    : tag.displayName || tag.name || "Component";
}

const dangerous = (tag: Target) => (...args: any) =>
  contructWithArgs(tag, args);

// Shorthands for all valid HTML Elements
Object.keys(domElements).forEach((domElement: DOMType) => {
  dangerous[domElement] = dangerous(domElement);
});

export default dangerous;
