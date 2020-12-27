import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import axios from "axios";

const UserNameModal = (props) => {
    const isLogged = localStorage.getItem("token");
    const handleUpdateName = async (e) => {
        e.preventDefault();
        console.log("NAMAAAAAA :", e.target.fullName.value);
    
        const config = {
            headers: {
                'Authorization': 'Bearer ' + isLogged, 
            },
        };

        const sendDataName = {
            fullName: e.target.fullName.value,

        };
    
        const response = await axios.put(
          "https://cors-anywhere.herokuapp.com/" +
            "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/user/update/profile/name",
          sendDataName, config
        );
    
        console.log(response, "Update FullName Success");
    
        localStorage.setItem("Status", "Name Updated");
        alert("Name Updated Successfully!");
        window.location.reload();
    
        // window.location.reload();
      };
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}><h5 style={{ color: "#FFB700" }}>Change Your Name</h5></ModalHeader>
        <ModalBody>
          <Form onSubmit={(e) => handleUpdateName(e)}>   
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text" 
                    name="fullName" 
                    id="fullName"
                    placeholder="Enter New Name"
                    />
                    <InputGroupAddon addonType="append">
                        <Button type="submit" style={{ backgroundColor: "#FFB700" }}>
                            Update
                        </Button>
                    </InputGroupAddon> 
                </InputGroup>
            </FormGroup>
        </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default UserNameModal;
