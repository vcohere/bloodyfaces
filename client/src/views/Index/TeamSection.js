import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class PersonTile extends Component {
  render() {
    return (
      <Col md="3">
        <div className="img-wrap">
          <img src={this.props.img} className="profile-img" />
        </div>
        <h2 className="mb-0 mt-3">
          {this.props.role}
        </h2>
        <h3>
          {this.props.name}
        </h3>
      </Col>
    )
  }
}

class TeamSection extends Component {
  render() {
    return (
      <Container fluid id="team">
        <Container>
          <Row className="justify-content-center py-5">
            <Col lg="8" md="10" className="text-center">
              <h1 className="mb-4 mt-3">Meet the team</h1>

              <Row className="mt-5">
                <PersonTile img="https://miro.medium.com/max/500/1*xDIevNE7HEMiJQVTYg0qDQ.png" role="CEO" name="Michael Scott" />
                <PersonTile img="https://www.looper.com/img/gallery/the-untold-truth-of-dwight-schrute/intro-1562620300.jpg" role="CTO" name="Dwight Schrute" />
                <PersonTile img="https://pbs.twimg.com/profile_images/3171824697/ef75d90df2e65ce326acf30262df5918.jpeg" role="COO" name="Jim Halpert" />
                <PersonTile img="https://i1.wp.com/devsari.com/wp-content/uploads/2020/11/Pam.jpg?resize=800%2C445&ssl=1" role="Dev" name="Pam Beesly" />
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default TeamSection;
