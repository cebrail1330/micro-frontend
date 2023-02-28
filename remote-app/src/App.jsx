import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./components/Header";
import TkCalendar from "./components/TkCalendar";
const App = () => (
  <div>
    <div>Name: remote-app</div>
      <TkCalendar/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
