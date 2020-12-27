import React, { useState } from "react";
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

const UserModal = (props) => {
  const isLogged = localStorage.getItem('token');

  const[file, setFile] = useState(null);

  const handleUpdateImage = async (e) => {
    let files = e.target.files[0];
    setFile(files);
    console.log(file);
  } 

  const handleUpload = async (e) => {
    const config = {
      headers: {
          'Authorization': 'Bearer ' + isLogged,
          'Content-Type': 'multipart/form-data', 
      },
    };

    let formdata = new FormData();

    formdata.append(file, file.name);

    let formdatas = {
      image: formdata,
    }
    localStorage.setItem("test", file.name);

    localStorage.setItem("tests", formdatas);
    localStorage.setItem("testss", formdata);


    const response = await axios.put(
      "https://cors-anywhere.herokuapp.com/" +
        "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/user/update/profile/photo",
      formdatas, config
    );

    console.log(response, "Update Photo Success");

    localStorage.setItem("Status", "Photo Updated");
    alert("Name Updated Successfully!");
  };

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
              <ModalHeader toggle={props.toggle}><h5 style={{ color: "#FFB700" }}>Change Image Profile</h5></ModalHeader>
          <Form> 
              <ModalBody>
                <FormGroup>
                  <Input onChange={(e) => handleUpdateImage(e)} type="file" name="image" id="exampleFile" />
                </FormGroup>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" onClick={(e) => handleUpload(e)} style={{ backgroundColor: "#FFB700" }} >
                  Submit
                </Button>
              </ModalFooter>
          </Form>
      </Modal>
    </div>
  );
};

export default UserModal;
