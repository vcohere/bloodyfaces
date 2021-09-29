import React, { Component } from "react";

import Row from "react-bootstrap/Row";

class MenuElement extends Component {
  render() {
    return (
      <a className="d-none d-md-inline-flex px-5 py-3" href={this.props.anchor}>{this.props.title}</a>
    )
  }
}

class Menu extends Component {
  render() {
    return (
      <Row className="justify-content-end text-uppercase mb-0" id="menu">
        <MenuElement anchor="#story" title="Story" />
        <MenuElement anchor="#roadmap" title="Roadmap" />
        <MenuElement anchor="#faq" title="Faq" />
        <MenuElement anchor="#team" title="Team" />
      </Row>
    )
  }
}

export default Menu;
