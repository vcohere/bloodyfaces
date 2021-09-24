import React, { Component } from "react";

import { Link } from "react-router-dom";
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
          <Col lg="5" className="offset-lg-1 pt-5">
            <p class="title">
              THE BLOODY FACES HAVE <span class="red-accent">DROPPED</span>.
            </p>
            <div class="separator"></div>
            <p class="subtitle">
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
