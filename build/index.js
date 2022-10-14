/* @jsx createElement*/
import { render, createElement } from "./react.js";
const Title = () => {
  return createElement("div", null, createElement("h1", null, "hihi"), createElement("h1", null, "1241241"));
};
render(createElement(Title, null), document.getElementById("app"));