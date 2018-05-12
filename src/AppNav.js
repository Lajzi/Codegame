import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";
import logo from "./styles/static/logo.svg";
import App from "./App";
import Header from "./components/Header.jsx";
import Game from "./components/Game.jsx";
import Rules from "./components/Rules.jsx";
import Footer from "./components/Footer.jsx";

class AppNav extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/game" component={Game} />
          <Route path="/rules" component={Rules} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default AppNav;
