import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import { FaSpinner } from 'react-icons/fa';

import imgTile from "../../images/tile.png";

class NftView extends Component {
  state = {
    nftData: null,
    isLoading: false,
    previousBalance: null
  };

  async componentDidUpdate() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.BloodyFace;

    let balance = this.props.balance && this.props.balance.value;

    // If the previous balance saved in the state is different than current balance
    // It means that the user minted a new NFT, so we keep going
    // If it's the same balance, we return; to avoid an infinite loop
    if (balance !== this.state.previousBalance) {
      this.setState({ previousBalance: balance });
    }
    else {
      return;
    }

    // If the ID of this NFT is inferior to the balance, then we don't own that NFT yet so we return;
    if (!this.props.balance || !(this.props.balance.value > this.props.id))
      return;

    this.setState({ isLoading: true });

    // Get the ID of the NFT
    let nftId = await contract.methods.tokenOfOwnerByIndex(this.props.drizzleState.accounts[0], this.props.id).call();

    if (!nftId) {
      this.setState({ isLoading: false });
      return;
    }

    // Get the Metadata from the NFT ID
    let nftMetadata = await contract.methods.tokenURI(nftId).call();

    if (!nftMetadata) {
      this.setState({ isLoading: false });
      return;
    }

    // Fetch the data on the database
    fetch(nftMetadata)
      .then((res) => {
        return res.json()
      })
      .then((nftData) => {
        this.setState({ nftData, isLoading: false });
      },
      (error) => {
        this.setState({ isLoading: false });
        console.log('Error : ', error);
      })
  }

  render() {
    const { nftData, isLoading } = this.state;

    return (
      <Col className="tile-wrap" key={this.props.balance}>
        { (isLoading && !nftData) &&
          <div className="spinner-wrap">
            <FaSpinner className="spinner" />
          </div>
        }
        <img src={nftData ? nftData.external_url : imgTile} className="img-fluid" />
      </Col>
    )
  }
}

export default NftView;
