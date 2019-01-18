import React from "react";
import domElements from "./domElements";
import hoistNonReactStatics from "hoist-non-react-statics";

// import {
//   Target,
//   LineBuilder,
//   HtmlBuilder,
//   Args,
//   DangerousComponentProps
// } from "./types";

// https://github.com/styled-components/styled-components/blob/master/src/utils/isTag.js
function isTag(target: string) {
  return (
    typeof target === "string" &&
    (process.env.NODE_ENV !== "production"
      ? target.charAt(0) === target.charAt(0).toLowerCase()
      : true)
  );
}

function DangerousComponent(props) {
  const { as: WrappedComponent, args, forwardedRef, className } = props;
  const [texts, ...callbacks] = args;

  const toLines = (text: string, i: number) =>
    `${text}${args[i + 1] ? callbacks[i](props) : ""}`;
  const toHtml = (unsafeText: string, line: string) => (unsafeText += line);

  const __html: string = texts.map(toLines).reduce(toHtml, "");

  return (
    <WrappedComponent
      ref={forwardedRef}
      dangerouslySetInnerHTML={{ __html }}
      className={className}
    />
  );
}

function contructWithArgs(tag, args) {
  const WrappedComponent = React.forwardRef((props, ref) => (
    <DangerousComponent as={tag} args={args} forwardedRef={ref} {...props} />
  ));

  WrappedComponent.displayName = `ContructWithArgs(${getDisplayName(tag)})`;

  hoistNonReactStatics(WrappedComponent, tag as React.ComponentType<any>);

  return WrappedComponent;
}

function getDisplayName(WrappedComponent) {
  if (isTag(WrappedComponent)) return `dangerous.${WrappedComponent}`;

  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const dangerous = tag => (...args) => contructWithArgs(tag, args);

// Shorthands for all valid HTML Elements
domElements.forEach((domElement: string) => {
  dangerous[domElement] = dangerous(domElement);
});

export default dangerous;
