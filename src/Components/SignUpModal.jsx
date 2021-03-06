import React from "react";
import {
  Input,
  Container,
  Button,
  Modal,
  ModalBody,
  Form,
  Label,
} from "reactstrap";
import axios from "axios";

export default function SignUpModal(props) {
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    console.log("fullname :", e.target.fullName.value);
    console.log("email :", e.target.email.value);
    console.log("password :", e.target.password.value);
    console.log("password :", e.target.passwordConfirmation.value);

    const sendaDataSignUp = {
      fullName: e.target.fullName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      passwordConfirmation: e.target.passwordConfirmation.value,
    };

    const response = await axios.post(
      "https://cors-anywhere.herokuapp.com/" +
        "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/user/signup",
      sendaDataSignUp
    );
    console.log(response, "signup success");

    localStorage.setItem("token", response.data.token);
    window.location.reload();
  };

  return (
    <div>
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
            <Form onSubmit={(e) => handleSubmitSignup(e)}>
              <Label>Full Name</Label>
              <Input name="fullName" type="text" placeholder=""></Input>
              <br />
              <Label>Email</Label>
              <Input name="email" type="text" placeholder=""></Input>
              <br />
              <Label>Password</Label>
              <Input name="password" type="password" placeholder=""></Input>
              <br />
              <Label>Confirm Password</Label>
              <Input
                name="passwordConfirmation"
                type="password"
                placeholder=""
              ></Input>
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
