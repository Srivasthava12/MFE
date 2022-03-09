import React from "react";
import ReactDOM from "react-dom";

import Counter from "remote/Counter";

import "./index.css";

const App = () => (
  <div className="container">
<Counter/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
