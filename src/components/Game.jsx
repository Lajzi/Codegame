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

class Game extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <div>Spel!!!</div>
            <Players />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Game;
