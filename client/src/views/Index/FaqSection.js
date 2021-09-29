import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

import imgBloodHorizontal from "../../images/blood-horizontal.png";
import imgBloodStain from "../../images/blood-stain.png";

class FaqSection extends Component {
  render() {
    return (
      <div className="position-relative">
        <Container fluid id="faq" className="px-0 pb-5">
          <img src={imgBloodHorizontal} className="img-fluid" />
          <Container>
            <Row className="justify-content-center py-5">
              <Col lg="8" md="10" className="text-center faq-content">
                <img src={imgBloodStain} className="blood-stain" />
                <h1 className="mb-4 mt-3">Any questions ?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis ipsum, dignissim quis laoreet sed, iaculis non tellus. Suspendisse ipsum ante, condimentum venenatis ex id, lacinia consectetur sapien. Curabitur placerat nibh eu faucibus ultrices. Maecenas elementum tortor imperdiet lacus euismod convallis. Donec placerat scelerisque sodales. Integer quis semper augue. Maecenas ut velit justo. In vehicula mauris magna, a luctus turpis viverra non. Nam facilisis in odio nec auctor. Praesent venenatis hendrerit metus, at aliquam nibh feugiat sit amet. Nunc at molestie urna, at luctus lacus. Duis dictum felis auctor, interdum leo ut, venenatis quam.
                </p>
                <Accordion className="mt-5">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>WHERE CAN I SEE MY NFT ?</Accordion.Header>
                    <Accordion.Body className="bg-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>HOW MUCH DOES IT COST TO MINT ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>WHAT DO I GET WITH MY NFT ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>ANOTHER QUESTION PERHAPS ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion className="mt-3">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>WHY IS THE SKY BLUE ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    )
  }
}

export default FaqSection;
