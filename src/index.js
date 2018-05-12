import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/main.css";
import AppNav from "./AppNav";
import registerServiceWorker from "./registerServiceWorker";
import index from "./index";
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppNav />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
