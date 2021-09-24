import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import imgFace from "../../images/face.png";

class StorySection extends Component {
  render() {
    return (
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
    )
  }
}

export default StorySection;
