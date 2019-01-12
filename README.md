![npm](https://img.shields.io/npm/v/dangerous.svg?style=flat-square)
![minified size](https://img.shields.io/bundlephobia/min/dangerous.svg?style=flat-square)
![build](https://img.shields.io/circleci/project/github/dance2die/dangerous/master.svg?style=flat-square)
[![](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/dance2die)


# 🤔 What?

Create a dangerous React component in Styled Components style (tagged literal
templates) syntax.

`dangerous` returns a component, which uses
[dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
internally to convert your dangerous input to set literal to DOM's innerHTML
value.

# 👨‍💻 Example

```javascript
const Dangerous = dangerous.div`
  <h1>Who am I?</h1>
  <p>Last Name is "${props => props.lastName}"</p>
  <p>First Name is "${props => props.firstName}"</p>
  <a href="javascript:alert('hi');">Show Alert</a>
`;

function App() {
  return <Dangerous firstName="Sung" lastName="Kim" />;
}
```

[![Edit dangerous-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/x7ymrzw88q)

Code above will display following and clicking on "Show Alert" link will show an alert.

![demo](img/demo.gif)