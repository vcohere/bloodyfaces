import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MenuElement extends Component {
  render() {
    return (
      <Col md="2" className="p-3">
        <a href="{this.props.anchor}">{this.props.title}</a>
      </Col>
    )
  }
}

class Menu extends Component {
  render() {
    return (
      <Row className="justify-content-end text-uppercase" id="menu">
        <MenuElement anchor="#" title="Story" />
        <MenuElement anchor="#" title="Roadmap" />
        <MenuElement anchor="#" title="Faq" />
        <MenuElement anchor="#" title="Team" />
      </Row>
    )
  }
}

export default Menu;
