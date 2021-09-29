import React from "react";

import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

class MintAction extends React.Component {
  state = {
    stackId: null,
    showAlert: false
  };

  mintNft = () => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.BloodyFace;

    // let drizzle know we want to call the `mintBloodyFace` method with `value`
    const stackId = contract.methods["mintBloodyFace"].cacheSend({
      from: drizzleState.accounts[0],
      gas : 500000,
      value: drizzle.web3.utils.toWei('0.03','ether')
    });

    let showAlert = true;

    // save the `stackId` for later reference
    this.setState({ stackId, showAlert });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    let status = transactions[txHash] && transactions[txHash].status;

    return `Transaction status: ${status ? status : 'Waiting...'}`;
  };

  hideAlert = () => {
    this.setState({ showAlert: false });
  };

  render() {
    const { showAlert } = this.state;

    return (
      <div className="mt-4">
        <Button onClick={this.mintNft} variant="primary" className="mint-button">
          MINT NOW
        </Button>
        {showAlert &&
          <Alert variant="dark" className="mt-4" onClose={() => this.hideAlert()} dismissible>
            {this.getTxStatus()}
          </Alert>
        }
      </div>
    );
  }
}

export default MintAction;
