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
} from "reactstrap";
import classCss from "./UserDashboard.module.css";
import UserModal from "./UserModal";
import { Redirect } from "react-router-dom";
import Axios from "axios";

export default function UserDashboard() {
  const token = localStorage.getItem("token");

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

  return (
    <div>
      {token ? (
        <Container className={classCss.user_dashboard_container}>
          <UserModal modal={modal} toggle={toggle} />
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
            <Col>
              <FormGroup>
                <Label for="fullName">Fullname</Label>
                <Input
                  size="100px"
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder=""
                />
              </FormGroup>
              <FormGroup>
                <Label for="oldPassword">Old Password</Label>
                <Input
                  size="100px"
                  type="password"
                  name="password"
                  id="oldPassword"
                  placeholder="********"
                />
              </FormGroup>
              <FormGroup>
                <Label for="newPassword">New Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="newPassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Form>
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}
