import React, { Component } from "react";
import { ListGroup, ListGroupItem, Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return { players: state.players };
};


const ConnectedPlayers = ({ players }) => (
  <ListGroup>
    {players.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.name}
      </li>
    ))}
  </ListGroup>
);

const Players = connect(mapStateToProps)(ConnectedPlayers);

ConnectedPlayers.propTypes = {
  players: PropTypes.array.isRequired
};

export default Players;
