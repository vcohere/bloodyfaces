import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import imgMetamask from "../../images/metamask.png";

const Metamask = () => {
  return (
    <div id="metamask">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" lg="6" className="frame p-lg-5 p-4 text-center">
            <h1>You need an Ethereum wallet.</h1>

            <img src={imgMetamask} />

            <div>We are currently on the Ropsten Testnet.</div>
            <Button href="https://metamask.io/download.html" target="_blank" variant="primary" className="button mt-5">
              Get MetaMask
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Metamask;
