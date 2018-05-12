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

class Game extends Component {
  render() {
    return (
      <Grid className="App">
        <Row>
          <Col md={12}>
            <div>Spel!!!</div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Game;
