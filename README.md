# 🤔 What?

Create a dangerous React component in Styled Components style (tagged literal
templates) syntax.

`dangerous` returns a component, which uses
[dangerouslySetInnerHTML](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
internally to convert your dangerous input to set literal to DOM's innerHTML
value.

# 👨‍💻 Example

```javascript
const Dangerous = dangerous(Block)`
  <h1>Who am I?</h1>
  <p>Last Name is "${props => props.lastName}"</p>
  <p>First Name is "${props => props.firstName}"</p>
  <a href="javascript:alert('hi');">Show Alert</a>
`;

function App() {
  return <Dangerous firstName="Sung" lastName="Kim" />;
}
```

Code above will display following and clicking on "Show Alert" link will show an alert.

![demo](img/demo.gif)