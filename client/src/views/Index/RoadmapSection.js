import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class RoadmapSection extends Component {
  render() {
    return (
      <Container fluid id="roadmap">
        <Container>
          <Row className="pt-5">
            <Col md="12" className="text-center mb-5">
              <h1>The Bloody Roadmap</h1>
            </Col>
            <Col md="3" className="text-center px-3 mb-4">
              <h2>Q1</h2>
              <h3>2021</h3>
              <p>
                Something cool happens.<br />
                And another really cool thing.
              </p>
            </Col>
            <Col md="3" className="text-center px-3 mb-4">
              <h2>Q2</h2>
              <h3>2021</h3>
              <p>
                Something cool happens.<br />
                And another really cool thing.
              </p>
            </Col>
            <Col md="3" className="text-center px-3 mb-4">
              <h2>Q3</h2>
              <h3>2021</h3>
              <p>
                Something cool happens.<br />
                And another really cool thing.
              </p>
            </Col>
            <Col md="3" className="text-center px-3 mb-4">
              <h2>Q4</h2>
              <h3>2021</h3>
              <p>
                Something cool happens.<br />
                And another really cool thing.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default RoadmapSection;
