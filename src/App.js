import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import logo from "./styles/static/logo.svg";
import InitGame from "./components/InitGame.jsx";
import Game from "./components/Game.jsx";
import Players from "./components/Players.jsx";


class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row>
          <Col md={12}>
            <InitGame />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
