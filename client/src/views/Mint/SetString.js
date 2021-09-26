import React from "react";

class SetString extends React.Component {
  state = { stackId: null };

  setValue = () => {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.BloodyFace;

    // let drizzle know we want to call the `set` method with `value`
    const stackId = contract.methods["mintBloodyFace"].cacheSend({
      from: drizzleState.accounts[0],
      gas : 500000
    });

    // save the `stackId` for later reference
    this.setState({ stackId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txHash] && transactions[txHash].status}`;
  };

  render() {
    return (
      <div>
        <button onClick={this.setValue} type="button">
          MINT
        </button>
        <div>{this.getTxStatus()}</div>
      </div>
    );
  }
}

export default SetString;
