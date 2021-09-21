import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Menu from "./Menu";

class Index extends Component {
  render() {
    return (
      <Container fluid id="hero1">
        <Menu />
        <Row className="justify-content-center vertical-center hero-text">
          <Col md="5">
            <p class="title">
              THE BLOOD FACES HAVE <span class="red-accent">DROPPED</span>.
            </p>
            <div class="separator"></div>
            <p class="subtitle">
              And they mean business.<br />
              Only 3.333 available, and you’re early enough to mint your own right now.
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Index;
