import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.scss"; // Import global styles

// Render the main App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
