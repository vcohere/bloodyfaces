import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import Menu from "./Menu";

class HeroSection extends Component {
  render() {
    return (
      <Container fluid id="hero1">
        <Menu />
        <Row className="justify-content-start hero-text pt-5">
          <Col md="8" lg="5" className="offset-md-1 pt-md-5 pb-4 mt-5 mt-md-0">
            <p className="title">
              THE BLOODY FACES HAVE <span className="red-accent">DROPPED</span>.
            </p>
            <div className="separator"></div>
            <p className="subtitle">
              And they mean business.<br />
              Only 3.333 available, and you’re early enough to mint your own right now.
            </p>
            <a href="/mint">
              <Button variant="primary" className="cta">Mint your own Bloody Face</Button>
            </a>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default HeroSection;
