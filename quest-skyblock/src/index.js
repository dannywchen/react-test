// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./styles.css"; // Optional, if you have additional global styles
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
