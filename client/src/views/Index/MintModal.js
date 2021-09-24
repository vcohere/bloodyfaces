import React, { Component } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

import { newContextComponents } from "@drizzle/react-components";

const { ContractData, ContractForm } = newContextComponents;

class MintModal extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>

          <ContractData
            drizzle={this.props.drizzle}
            drizzleState={this.props.drizzleState}
            contract="BloodyFace"
            method="balanceOf"
            methodArgs={[this.props.drizzleState.accounts[0]]}
            render={(cid) =>  (
              <div className="artwork-container">
                {cid}
              </div>
            )}
          />

          <ContractForm
            drizzle={this.props.drizzle}
            drizzleState={this.props.drizzleState}
            contract="BloodyFace"
            method="mintBloodyFace"
          />

          <Form.Label htmlFor="bloodyfaces-amount">How many Bloody Faces would you like to mint ?</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              id="bloodyfaces-amount"
              placeholder="1 - 3"
              type="number"
              min="1"
              max="3"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default MintModal;
