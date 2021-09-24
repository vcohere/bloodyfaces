import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

import imgFace from "../../images/face.png";
import imgBloodHorizontal from "../../images/blood-horizontal.png";

import Menu from "./Menu";

class Index extends Component {
  render() {
    return (
      <div class="page">
        <Container fluid id="hero1">
          <Menu />
          <Row className="justify-content-center vertical-center hero-text">
            <Col md="5">
              <p class="title">
                THE BLOODY FACES HAVE <span class="red-accent">DROPPED</span>.
              </p>
              <div class="separator"></div>
              <p class="subtitle">
                And they mean business.<br />
                Only 3.333 available, and you’re early enough to mint your own right now.
              </p>
              <Button variant="primary" className="cta">Mint your own Bloody Face</Button>
            </Col>
          </Row>
        </Container>
        <Container fluid id="story">
          <Container>
            <Row className="justify-content-center py-5">
              <Col md="5">
                <img src={imgFace} class="img-fluid" />
              </Col>
              <Col md="5">
                <h1>
                  A REAL <span class="red-accent">PUNCH</span> TO THE GUTS TO ALL THE TYPICAL USELESS NFT DROPS.
                </h1>
                <h2>
                  If you’re looking for yet another overpriced pixel-art, well this ain’t it. Bloody Faces are just the tip of the iceberg.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan ante sem, et ornare neque euismod in. Nulla volutpat pretium lectus quis condimentum. Donec faucibus ex nisl, at tincidunt odio semper finibus.
                </p>
                <p>
                  Aliquam pulvinar nulla tellus, laoreet ultricies sem tincidunt non. Aliquam bibendum hendrerit sem, at scelerisque nisi fringilla non. Integer luctus aliquam risus, ac pretium neque vestibulum quis.
                </p>
                <p>
                  Aenean elementum sem nec nulla pellentesque, id molestie ante semper. Aliquam ultrices lorem nec malesuada fringilla. Proin eu est sit amet dui faucibus euismod sed ac nunc.
                </p>
                <p>
                  Cras tempus dapibus leo, ut porttitor nulla blandit tempus. Nam mattis rutrum malesuada. Ut lacinia rutrum arcu, et molestie erat vulputate ac. Nunc at erat consequat, gravida purus quis, imperdiet neque.
                </p>
                <p>
                  Phasellus laoreet massa ut auctor pellentesque. Sed ex nibh, pharetra aliquam est ac, dapibus lobortis mauris.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan ante sem, et ornare neque euismod in. Nulla volutpat pretium lectus quis condimentum. Donec faucibus ex nisl, at tincidunt odio semper finibus.
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid id="roadmap">
          <Container>
            <Row className="pt-5">
              <Col md="12" className="text-center mb-5">
                <h1>The Bloody Roadmap</h1>
              </Col>
              <Col md="3" className="text-center px-3">
                <h2>Q1</h2>
                <h3>2021</h3>
                <p>
                  Something cool happens.<br />
                  And another really cool thing.
                </p>
              </Col>
              <Col md="3" className="text-center px-3">
                <h2>Q2</h2>
                <h3>2021</h3>
                <p>
                  Something cool happens.<br />
                  And another really cool thing.
                </p>
              </Col>
              <Col md="3" className="text-center px-3">
                <h2>Q3</h2>
                <h3>2021</h3>
                <p>
                  Something cool happens.<br />
                  And another really cool thing.
                </p>
              </Col>
              <Col md="3" className="text-center px-3">
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
        <Container fluid id="faq" className="px-0">
          <img src={imgBloodHorizontal} class="img-fluid" />
          <Container>
            <Row className="justify-content-center py-5">
              <Col md="8" className="text-center">
                <h1 class="mb-4 mt-3">Any questions ?</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis ipsum, dignissim quis laoreet sed, iaculis non tellus. Suspendisse ipsum ante, condimentum venenatis ex id, lacinia consectetur sapien. Curabitur placerat nibh eu faucibus ultrices. Maecenas elementum tortor imperdiet lacus euismod convallis. Donec placerat scelerisque sodales. Integer quis semper augue. Maecenas ut velit justo. In vehicula mauris magna, a luctus turpis viverra non. Nam facilisis in odio nec auctor. Praesent venenatis hendrerit metus, at aliquam nibh feugiat sit amet. Nunc at molestie urna, at luctus lacus. Duis dictum felis auctor, interdum leo ut, venenatis quam.
                </p>
                <Accordion className="mt-5">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>WHERE CAN I SEE MY NFT ?</Accordion.Header>
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

export default Index;
