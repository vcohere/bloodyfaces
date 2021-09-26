import React, { Component } from "react";
import { newContextComponents } from "@drizzle/react-components";
import SetString from "./SetString";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

import NftView from "./NftView";

import imgTile from "../../images/tile.png";

const { ContractData, ContractForm } = newContextComponents;

class Page extends Component {
  state = {
    balance: null,
    supplyDataKey: null,
    nfts: [],
    nftsData: []
  };

  async getBalance() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.BloodyFace;

    return await contract.methods.balanceOf(this.props.drizzleState.accounts[0]).call();
  }

  async fetchMetadata() {
    const nfts = this.state.nfts;

    if (nfts.length <= 0)
      return;

    let nftsData = [];

    for (let i = 0; i < nfts.length; i++) {
      fetch(nfts[i])
        .then((res) => {
          return res.json()
        })
        .then((result) => {
          console.log('fetched');
          nftsData.push(result);

          this.setState({ nftsData });

          console.log(this.state.nftsData);
        })
    }
  }

  async getNftsMetadata() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.BloodyFace;

    let balance = await this.getBalance();

    let nfts = [];

    if (balance) {
      for (let i = 0; i < balance; i++) {
        let nftId = await contract.methods.tokenOfOwnerByIndex(this.props.drizzleState.accounts[0], i).call();

        nfts.push(await contract.methods.tokenURI(nftId).call());
      }
    }

    console.log(nfts);

    this.setState({ nfts })

    this.fetchMetadata();
  }

  async componentDidMount() {
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

    return (
      <div class="page">
        <Container fluid id="mint-container">
          <Row className="justify-content-start">
            <Col md="6" className="frame p-5">
              <h1 class="mt-5 mb-4">Mint your own <span class="red-accent">Bloody Face</span> now.</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan ante sem, et ornare neque euismod in. Nulla volutpat pretium lectus quis condimentum. Donec faucibus ex nisl, at tincidunt odio semper finibus.
              </p>

              <div class="text-center">{displaySupply && displaySupply.value} / 3.333 minted</div>

              <ProgressBar striped variant="danger" animated now={10} />

              <span class="red-accent">{displayBalance && displayBalance.value}</span>

              <SetString drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} />

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
