import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Make sure this path is correct
import App from "./App"; // Ensure this is pointing to your App.js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // This should match an element in your index.html
);
