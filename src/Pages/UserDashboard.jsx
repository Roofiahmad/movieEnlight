import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import classCss from "./UserDashboard.module.css";
import UserModal from "./UserModal";
import UserNameModal from "./UserNameModal";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function UserDashboard() {
  const token = localStorage.getItem("token");
  const fullName = localStorage.getItem("userName");

  // let config = {
  //   headers: {
  //     Authorization: "Bearer " + token(),
  //   },
  // };
  // Axios.post("http://localhost:8000/api/v1/get_token_payloads", config)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [modals, setModals] = useState(false);

  const toggles = () => setModals(!modals);

  // Ubah Password
    const isLogged = localStorage.getItem("token");
    const handleUpdatePassword = async (e) => {
        e.preventDefault();
        console.log("PASSWORDDDD :", e.target.password.value);
    
        const config = {
            headers: {
                'Authorization': 'Bearer ' + isLogged, 
            },
        };

        const sendDataPass = {
            password: e.target.password.value,
            passwordConfirmation: e.target.passwordConfirmation.value
        };
    
        const response = await axios.put(
          "https://cors-anywhere.herokuapp.com/" +
            "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/user/update/profile/password",
          sendDataPass, config
        );
    
        console.log(response, "Update Password Success");
    
        localStorage.setItem("PassStatus", "Password Updated");
        alert("Password Updated Successfully!");
        window.location.reload();
    
        // window.location.reload();
      };

  return (
    <div>
        <Container className={classCss.user_dashboard_container}>
          <UserModal modal={modal} toggle={toggle} />
          <UserNameModal modal={modals} toggle={toggles} />
          <h4>User Setting</h4>
          <div className={classCss.user_image_container}>
            <img
              onClick={toggle}
              className={classCss.user_image}
              src="https://i.pinimg.com/736x/c9/52/74/c95274e31176aab30dad81344e58c7cc.jpg"
              alt="user image"
            />
            <i className={`far fa-edit ${classCss.icon}`} onClick={toggle}></i>
          </div>
          <Form className="form">
            <Col>
              <div className={classCss.email}>
                your email: saitama@example.com
              </div>
            </Col>
          </Form>

          <Form className="form">
              <FormGroup>                
                <Label for="fullName">Full Name</Label>
                <InputGroup>
                  <Input
                    size="100px"
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder=""
                    value={fullName}
                    disabled
                  />
                  <InputGroupAddon addonType="append">
                    <Button onClick={toggles} style={{ backgroundColor: "#FFB700" }}>
                      <i className="far fa-edit"></i>
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
          </Form>

          <Form className="form" onSubmit={(e) => handleUpdatePassword(e)}>
              <FormGroup>
                <Label for="oldPassword">New Password</Label>
                <Input
                  size="100px"
                  type="password"
                  name="password"
                  id="oldPassword"
                  placeholder="********"
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="passwordConfirmation"
                  id="confirmPassword"
                  placeholder="********"
                />
              </FormGroup>
                <Button type="submit" style={{ backgroundColor: "#FFB700" }}>Change Password</Button>
          </Form>
        </Container>
    </div>
  );
}
