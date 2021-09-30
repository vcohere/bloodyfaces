import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const MintAction = (props) => {
  const { drizzle, drizzleState } = props;
  const contract = drizzle.contracts.BloodyFace;

  const [stackId, setStackId] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("dark");
  const [transactionStatus, setTransactionStatus] = useState("");

  useEffect(() => {
    getTxStatus();
  }, [drizzleState.transactions]);

  const mintNft = () => {
    setStackId(contract.methods["mintBloodyFace"].cacheSend({
      from: drizzleState.accounts[0],
      gas: 500000,
      value: drizzle.web3.utils.toWei("0.03", "ether")
    }));

    getTxStatus();
    setShowAlert(true);
  };

  const getTxStatus = () => {
    const { transactions, transactionStack } = drizzleState;
    const txHash = transactionStack[stackId];

    if (!txHash) return null;

    let status = transactions[txHash] && transactions[txHash].status;

    if (status === "success")
      setAlertType("success");

    setTransactionStatus(`Transaction status: ${status ? status : 'Waiting...'}`);
  };

  const hideAlert = () => {
    setShowAlert(false);
    setAlertType("dark");
  };

  return (
    <div className="mt-4">
      <Button onClick={mintNft} variant="primary" className="mint-button">
        MINT NOW
      </Button>
      {showAlert &&
        <Alert variant={alertType} className="mt-4" onClose={() => hideAlert()} dismissible>
          {transactionStatus}
        </Alert>
      }
    </div>
  );
};

export default React.memo(MintAction);
