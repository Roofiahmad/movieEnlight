import React, { Component, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Form
} from "reactstrap";
import axios from "axios";

export default class UserModal extends Component {
  state = {
    token: localStorage.getItem("token"),
    image: null,
  };
  handleSubmit = (e) => {
    console.log(this.state.image);
    e.preventDefault();
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formData = new FormData();
    formData.append("image",this.state.image, this.state.image.name);
    axios
      .put(`http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/user/update/profile/photo
      `,
        formData,
        {
          headers: header,
        }
      )
      .then((response) => {
        console.log(response);
        alert("Profile Image Updated Successfully");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  handleUpdateImage = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    this.setState({
      image: file,
    });
  };
  render() {
  return (
    <div>
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
              <ModalHeader toggle={this.props.toggle}><h5 style={{ color: "#FFB700" }}>Change Image Profile</h5></ModalHeader>
          <Form onSubmit={(e) => {
          this.handleSubmit(e);
          }}> 
              <ModalBody>
                <FormGroup>
                  <Input onChange={(e) => this.handleUpdateImage(e)} type={"file"} name={"image"} id="exampleFile" />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" style={{ backgroundColor: "#FFB700" }} >
                  Submit
                </Button>
              </ModalFooter>
          </Form>
      </Modal>
    </div>
    );
  }
};
