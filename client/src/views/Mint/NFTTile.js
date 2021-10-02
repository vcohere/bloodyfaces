import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { FaSpinner } from 'react-icons/fa';

import imgTile from "../../images/tile.png";

const NFTTile = (props) => {
  const { drizzle, drizzleState, balance, id } = props;
  const { BloodyFace } = drizzleState.contracts;

  const [nftData, setNftData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("ENTERING USEEFFECT");
    let maxIdInWallet = parseInt(balance) - 1;

    if (id <= maxIdInWallet) {
      setIsLoading(true);
      getNftData();
    }

    return () => {
      setNftData(null);
      setIsLoading(false);
      setShowModal(false);
    };
  }, [props.balance]);

  const getNftData = async () => {
    const contract = drizzle.contracts.BloodyFace;

    const nftId = await contract.methods.tokenOfOwnerByIndex(drizzleState.accounts[0], id).call();

    if (!nftId) {
      setIsLoading(false);
      return;
    }

    const nftMetadata = await contract.methods.tokenURI(nftId).call();

    if (!nftMetadata) {
      setIsLoading(false);
      return;
    }

    fetch(nftMetadata)
      .then((res) => {
        return res.json();
      })
      .then((parsedRes) => {
        setNftData(parsedRes);
        console.log(parsedRes);
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        console.log('Error : ', error);
      });
  };

  const openModal = () => {
    if (nftData)
      setShowModal(true);
  };

  return (
    <Col className="tile-wrap">
      <Modal className="nft-modal" size="lg" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{nftData && nftData.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col md="6">
                <img src={nftData ? nftData.external_url : imgTile} className="img-fluid" />
              </Col>
              <Col md="6">
                <h3>Description</h3>
                <p>
                  {nftData && nftData.description}
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>

      { (isLoading && !nftData) &&
        <div className="spinner-wrap">
          <FaSpinner className="spinner" />
        </div>
      }
      <img src={nftData ? nftData.external_url : imgTile} className={"img-fluid " + (nftData && "cursor-pointer")} onClick={() => openModal()} />
    </Col>
  );
};

export default React.memo(NFTTile);
