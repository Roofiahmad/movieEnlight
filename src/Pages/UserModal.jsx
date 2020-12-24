import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
} from "reactstrap";

const UserModal = (props) => {
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Change Image Profile</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={props.toggle}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserModal;
