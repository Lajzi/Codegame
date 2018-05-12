import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.css";
import AppNav from "./AppNav";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <BrowserRouter>
    <AppNav />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
