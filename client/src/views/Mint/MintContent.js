import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FiArrowLeft } from 'react-icons/fi';

import MintAction from "./MintAction";
import NFTTile from "./NFTTile";

const MintContent = (props) => {
  const { drizzle, drizzleState } = props;
  const { BloodyFace } = drizzleState.contracts;

  const [supplyDataKey, setSupplyDataKey] = useState(null);
  const [balanceDataKey, setBalanceDataKey] = useState(null);

  useEffect(() => {
    const contract = drizzle.contracts.BloodyFace;

    setSupplyDataKey(contract.methods["totalSupply"].cacheCall());
    setBalanceDataKey(contract.methods["balanceOf"].cacheCall(drizzleState.accounts[0]));

    return () => {
      setSupplyDataKey(null);
      setBalanceDataKey(null);
    }
  });

  const getSupply = () => {
    let supply = BloodyFace.totalSupply[supplyDataKey];

    return supply ? supply.value : 0;
  };

  const getBalance = () => {
    let balance = BloodyFace.balanceOf[balanceDataKey];

    return balance ? balance.value : 0;
  };

  const getProgress = () => {
    let supply = getSupply();

    return supply ? (supply.value * 100 / 3333) : 0;
  };

  return (
    <div className="page">
      <Container fluid id="mint-container">
        <Row className="justify-content-start">
          <Col className="banner d-md-none">
            <a href="/">
              <FiArrowLeft className="return mt-3" />
            </a>
          </Col>
          <Col md="6" className="frame p-md-5 pb-4 overflow-auto">
            <h1 className="mt-md-5 mt-4 mb-4">Mint your own <span className="red-accent">Bloody Face</span> now.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan ante sem, et ornare neque euismod in. Nulla volutpat pretium lectus quis condimentum. Donec faucibus ex nisl, at tincidunt odio semper finibus.
            </p>

            <ProgressBar striped variant="danger" animated now={getProgress()} label={`${getSupply()} / 3333`} />

            <MintAction drizzle={drizzle} drizzleState={drizzleState} />

            <Row className="mt-5">
              <NFTTile drizzle={drizzle} drizzleState={drizzleState} id={0} balance={getBalance()} />
              <NFTTile drizzle={drizzle} drizzleState={drizzleState} id={1} balance={getBalance()} />
              <NFTTile drizzle={drizzle} drizzleState={drizzleState} id={2} balance={getBalance()} />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MintContent;
