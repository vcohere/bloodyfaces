import React, { useState, useEffect } from "react";

import Col from "react-bootstrap/Col";
import { FaSpinner } from 'react-icons/fa';

import imgTile from "../../images/tile.png";

const NFTTile = (props) => {
  const { drizzle, drizzleState, balance, id } = props;
  const { BloodyFace } = drizzleState.contracts;

  const [nftData, setNftData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let maxIdInWallet = parseInt(balance) - 1;

    if (id <= maxIdInWallet) {
      setIsLoading(true);
      getNftData();
    }

    return () => {
      setNftData(null);
      setIsLoading(false);
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
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        console.log('Error : ', error);
      });
  };

  return (
    <Col className="tile-wrap">
      { (isLoading && !nftData) &&
        <div className="spinner-wrap">
          <FaSpinner className="spinner" />
        </div>
      }
      <img src={nftData ? nftData.external_url : imgTile} className="img-fluid" />
    </Col>
  );
};

export default React.memo(NFTTile);
