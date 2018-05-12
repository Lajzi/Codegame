import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl,
  Button,
  ControlLabel
} from "react-bootstrap";
import Players from "./Players.jsx";
import Level1 from "../game1/Level1.jsx";

class Game extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div>Spel!!!</div>
            <Level1 />
            <Players />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Game;
