import React, { Component } from "react";
import { Grid, Row, Col, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Grid>
      <Row>
        <Col md={12}>
          <h1>CODEIT</h1>
          <Nav bsStyle="pills">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li role="presentation">
              <Link to="/rules">Rules</Link>
            </li>
          </Nav>
        </Col>
      </Row>
    </Grid>
  </header>
);

export default Header;
