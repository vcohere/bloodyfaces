import React, { Component } from "react";
import { newContextComponents } from "@drizzle/react-components";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FiArrowLeft } from 'react-icons/fi';

import MintAction from "./MintAction";
import NftView from "./NftView";

import imgTile from "../../images/tile.png";

const { ContractData, ContractForm } = newContextComponents;

class Page extends Component {
  state = {
    supplyDataKey: null,
    balanceDataKey: null
  };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.BloodyFace;

    let supplyDataKey = contract.methods["totalSupply"].cacheCall();
    let balanceDataKey = contract.methods["balanceOf"].cacheCall(this.props.drizzleState.accounts[0]);

    this.setState({ balanceDataKey, supplyDataKey });
  }

  render() {
    const { BloodyFace } = this.props.drizzleState.contracts;
    const displaySupply = BloodyFace.totalSupply[this.state.supplyDataKey];
    const displayBalance = BloodyFace.balanceOf[this.state.balanceDataKey];

    const progress = displaySupply ? (displaySupply.value * 100 / 3333) : 0;

    return (
      <div className="page">
        <Container fluid id="mint-container">
          <Row className="justify-content-start">
            <Col className="banner d-md-none">
              <a href="/">
                <FiArrowLeft className="return mt-3" />
              </a>
            </Col>
            <Col md="6" className="frame p-md-5 pb-4">
              <h1 className="mt-md-5 mt-4 mb-4">Mint your own <span className="red-accent">Bloody Face</span> now.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan ante sem, et ornare neque euismod in. Nulla volutpat pretium lectus quis condimentum. Donec faucibus ex nisl, at tincidunt odio semper finibus.
              </p>

              <ProgressBar striped variant="danger" animated now={progress} label={`${displaySupply && displaySupply.value} / 3333`} />

              <MintAction drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} />

              <Row className="mt-5">
                <NftView drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} id={0} balance={displayBalance} />
                <NftView drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} id={1} balance={displayBalance} />
                <NftView drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} id={2} balance={displayBalance} />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Page;
