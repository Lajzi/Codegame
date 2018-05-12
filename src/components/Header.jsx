import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Grid>
      <Row>
        <Col md={12}>
          <h1>CODEIT</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rules">Rules</Link>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Grid>
  </header>
);

export default Header;
