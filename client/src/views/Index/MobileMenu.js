import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { HiMenu } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

class MobileMenu extends Component {
  state = {
    show: false
  };

  burgerTap(newShow) {
    let show = newShow;

    this.setState({ show });
  }

  render() {
    return (
      <div>
        <HiMenu id="burger-icon" className="d-md-none d-inline-flex" onClick={() => this.burgerTap(true)} />
        {this.state.show &&
          <Container fluid id="mobile-menu" className={this.state.show ? 'active' : ''}>
            <RiCloseFill id="close-icon" onClick={() => this.burgerTap(false)} />
            <Row className="pt-5 px-3">
              <a className="d-block px-0 mb-3" onClick={() => this.burgerTap(false)} href="#story">Story</a>
              <a className="d-block px-0 mb-3" onClick={() => this.burgerTap(false)} href="#roadmap">Roadmap</a>
              <a className="d-block px-0 mb-3" onClick={() => this.burgerTap(false)} href="#faq">FAQ</a>
              <a className="d-block px-0 mb-3" onClick={() => this.burgerTap(false)} href="#team">Team</a>
              <Button href="/mint" variant="primary" className="button">
                Mint your own now
              </Button>
            </Row>
          </Container>
        }
      </div>
    )
  }
}

export default MobileMenu;
