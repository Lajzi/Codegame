import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  FormGroup,
  FormControl,
  Button,
  ControlLabel
} from "react-bootstrap";
import Players from "./Players.jsx";

class InitGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      players: []
    };
    this.initializeGame = this.initializeGame.bind(this);
  }
  onChange = event => {
    this.setState({ name: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({
      name: "",
      players: [...this.state.players, this.state.name]
    });
  };
  initializeGame(e) {
    e.preventDefault();
    this.props.history.push("/game");
  }
  render() {
    return (
      <div>
        <Row>
          <Col md={12}>
            <form onSubmit={this.onSubmit}>
              <FormGroup>
                <ControlLabel>Who might you be?</ControlLabel>
                <FormControl value={this.state.name} onChange={this.onChange} />
                <Button type="submit">Join</Button>
              </FormGroup>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Players players={this.state.players} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Button bsStyle="primary" onClick={this.initializeGame}>
              Everybody's in
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(InitGame);
