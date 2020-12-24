import React from "react";
import axios from "axios";
import { createBrowserHistory } from 'history';
import { Router, Route, Link, browserHistory } from 'react-router';
import {
  Input,
  Container,
  Button,
  Modal,
  ModalBody,
  Form,
  Label,
} from "reactstrap";

export default function SignInModal(props) {
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log("email :", e.target.email.value);
    console.log("password :", e.target.password.value);

    const sendaDataLogin = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const response = await axios.post(
      "https://reqres.in/api/login",
      sendaDataLogin
    );
    console.log(response, "login success");

    localStorage.setItem("token", response.data.token);

    window.location.reload();
  };

  return (
    <Modal
      isOpen={props.modals}
      toggleSignup={props.toggleSignin}
      className={props.classcss}
    >
      <ModalBody>
        <Container style={{ textAlign: "right" }}>
          <Button
            style={{
              backgroundColor: "#FFB700",
              border: "none",
              fontSize: "20px",
            }}
            onClick={props.toggleSignin}
          >
            <strong>X</strong>
          </Button>
        </Container>
        <Container style={{ textAlign: "center", color: "#FFB700" }}>
          <h3>
            <strong>Sign In</strong>
          </h3>
        </Container>
        <Container>
          <hr />
          <Form onSubmit={(e) => handleSubmitLogin(e)}>
            <Label>Email</Label>
            <Input type="text" placeholder="" name="email"></Input>
            <br />
            <Label>Password</Label>
            <Input type="password" placeholder="" name="password"></Input>
            <br />
            <Container style={{ textAlign: "center" }}>
              <button type="submit" className="btn-yellow">
                Sign In
              </button>{" "}
              <br />
              <small className="text-muted">
                Don't have any account?{" "}
                <a className="a" onClick={props.toggleSwitch}>
                  Sign Up
                </a>
              </small>
            </Container>
          </Form>
        </Container>
      </ModalBody>
    </Modal>
  );
}
