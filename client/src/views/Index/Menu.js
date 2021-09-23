import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class MenuElement extends Component {
  render() {
    return (
      <a class="d-inline-flex px-5 py-3" href="{this.props.anchor}">{this.props.title}</a>
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
