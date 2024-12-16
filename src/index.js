import React from "react";
import ReactDOM from "react-dom/client"; // For React 18
import App from "./App";
import "./App.css";

// Ensure you're using the correct rendering method for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
