import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";

const Players = props => (
  <ListGroup>
    {props.players.map((players, index) => <ListGroupItem key={index}>{players}</ListGroupItem>)}
  </ListGroup>
);

export default Players;
