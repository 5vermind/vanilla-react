/* @jsx createElement*/
import { render, createElement } from "./react.js";

const Title = () => {
  return (
    <div>
      <h1>hihi</h1>
      <h1>1241241</h1>
    </div>
  );
};

render(<Title />, document.getElementById("app"));
