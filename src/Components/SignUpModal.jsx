import React from "react";
import { Redirect } from "react-router-dom";
import {
  Input,
  Container,
  Button,
  Modal,
  ModalBody,
  Form,
  Label,
} from "reactstrap";

export default function SignUpModal(props) {
  const isLogged = localStorage.getItem("token");
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    console.log("fullname :", e.target.fullname.value);
    console.log("email :", e.target.email.value);
    console.log("password :", e.target.password.value);
  };

  return (
    <div>
      {isLogged ? <Redirect to="/" /> : null}
      <Modal
        isOpen={props.modal}
        toggleSignup={props.toggleSignup}
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
              onClick={props.toggleSignup}
            >
              <strong>X</strong>
            </Button>
          </Container>
          <Container style={{ textAlign: "center", color: "#FFB700" }}>
            <h3>
              <strong>Sign Up</strong>
            </h3>
          </Container>
          <Container>
            <hr />
            <Form onSubmit={handleSubmitSignup}>
              <Label>Full Name</Label>
              <Input name="fullname" type="text" placeholder=""></Input>
              <br />
              <Label>Email</Label>
              <Input name="email" type="text" placeholder=""></Input>
              <br />
              <Label>Password</Label>
              <Input name="password" type="password" placeholder=""></Input>
              <br />
              <Label>Confirm Password</Label>
              <Input type="password" placeholder=""></Input>
              <br />
              <Container style={{ textAlign: "center" }}>
                <button className="btn-yellow">Sign Up</button> <br />
                <small className="text-muted">
                  Already have an account?{" "}
                  <a className="a" onClick={props.toggleSwitch}>
                    Sign In
                  </a>
                </small>
              </Container>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}
