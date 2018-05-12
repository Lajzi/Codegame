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
import { connect } from "react-redux";
import PropTypes from "prop-types";
import uuidv1 from "uuid";
import { addPlayer } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: players => dispatch(addPlayer(players))
  };
};

class ConnectedInitGame extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
    this.initializeGame = this.initializeGame.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const id = uuidv1();
    this.props.addPlayer({ name, id});
    this.setState({ name: "" });
  }
  initializeGame(e) {
    e.preventDefault();
    this.props.history.push("/game");
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <Row>
          <Col md={12}>
            <form onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>Who might you be?</ControlLabel>
                <FormControl id="name" type="text" value={name} onChange={this.handleChange} />
              </FormGroup>
              <Button type="submit">Join</Button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
          <Players />
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

const InitGame= connect(null, mapDispatchToProps)(ConnectedInitGame);

ConnectedInitGame.propTypes = {
  addPlayer: PropTypes.func.isRequired
};

export default withRouter(InitGame);
