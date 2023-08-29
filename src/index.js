// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/reset.css";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Global
      styles={{
        ".main-color": {
          color: "#8d9eff",
        },
        ".sub-color-01": {
          color: "#6c4ab6",
        },
        ".sub-color-02": {
          color: "#8d72e1",
        },
        ".sub-color-03": {
          color: "#b9e0ff",
        },
        ".main-font-color": {
          color: "#333",
        },
        ".sub-font-color": {
          color: "#777",
        },
      }}
    />
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
