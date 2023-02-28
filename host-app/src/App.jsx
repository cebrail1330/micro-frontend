import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from 'remote/Header';
import TkCalendar from 'remote/TkCalendar';

const App = () => (
  <div className="container">
    <div>Name: host-app</div>
      <Header />
      <TkCalendar/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
