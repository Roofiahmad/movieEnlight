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

export default function UserDashboard() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
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
          <div className={classCss.email}>your email: saitama@example.com</div>
        </Col>
        <Col>
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
  );
}