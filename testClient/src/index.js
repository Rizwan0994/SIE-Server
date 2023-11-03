import React from "react";
import { render } from "react-dom";
import "./index.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
const root = document.getElementById("root");
render(
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>,
  root
);
