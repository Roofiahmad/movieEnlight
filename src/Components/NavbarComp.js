import React, { useState } from "react";
import "./NavbarComp.css";
import Axios from "axios";
import {
  Input,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  Form,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const NavbarComp = (props) => {
  const isLogged = localStorage.getItem("token");

  const signOutHandler = () => {
    localStorage.clear();
    window.location.reload();
  };

  const handleSubmit = (event) => {
    console.log(event);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [modals, setModals] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleSignup = () => setModal(!modal);
  const toggleSignin = () => setModals(!modals);
  const toggleSwitch = () => {
    setModal(!modal);
    setModals(!modals);
  };

  const { buttonLabel, className } = props;

  let config = {
    headers: {
      'Authorization': 'Bearer ' + isLogged 
    }

  }

 
  

  const dataLogin = Axios.get( 
    "https://cors-anywhere.herokuapp.com/"+"http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/user/profile",
      config
    )
    .then( ( response ) => {
      console.log( response )
      image = response.data.data.image;
      userName = response.data.data.fullName;
      localStorage.setItem("userName", userName);
      localStorage.setItem("image", image);
    } )
    .catch()
    

    let image = localStorage.getItem("image");
    let userName = localStorage.getItem("userName");
    image = `http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969${image}`
    console.log( userName )
    console.log( image )
    

  

  return (
    <div className="body">
      <Container>
        <Navbar className="navreally-dark" dark expand="md">
          <Link to="/">
            <NavbarBrand style={{ color: "#FFB700" }} href="/">
              <span>
                <img
                  src="https://cdn.discordapp.com/attachments/789439456599212092/790110134293495838/logo.png"
                  width="50px"
                ></img>
              </span>{" "}
              <strong>MilanTV</strong>
            </NavbarBrand>
          </Link>
          <NavbarToggler style={{ color: "#FFB700" }} onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <br />
            <Nav className="mr-auto" navbar></Nav>
            <div className="col-md">
              <InputGroup>
                <Input
                  className="searchForm"
                  type="input"
                  placeholder="search movie"
                ></Input>
                <InputGroupAddon addonType="append">
                  <Button style={{ backgroundColor: "#FFB700" }}>
                    <i className="fa fa-search"></i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <NavLink>
              {isLogged ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    <img
                      src={image}
                      className="ava"
                    ></img>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <b>{userName}</b>
                    </DropdownItem>
                    <DropdownItem>
                      <Link className="dropdown_link" to="/user">
                        Profile
                      </Link>
                    </DropdownItem>
                    <DropdownItem>
                      <Link to="/user" className="dropdown_link">
                        Settings
                      </Link>
                    </DropdownItem>
                    <DropdownItem>Help</DropdownItem>
                    <DropdownItem onClick={signOutHandler}>
                      Sign Out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <div>
                  <Button
                    style={{ backgroundColor: "#FFC200" }}
                    className="buttonreally-light"
                    onClick={toggleSignin}
                  >
                    Sign In
                  </Button>{" "}
                  <span />
                  <Button
                    style={{ backgroundColor: "#FFC200" }}
                    className="buttonreally-light"
                    onClick={toggleSignup}
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </NavLink>
          </Collapse>
        </Navbar>
      </Container>
      <SignUpModal
        modal={modal}
        toggleSignup={toggleSignup}
        classcss={className}
        toggleSwitch={toggleSwitch}
      />

      <SignInModal
        modals={modals}
        toggleSignin={toggleSignin}
        classcss={className}
        toggleSwitch={toggleSwitch}
      />
    </div>
  );
};

export default NavbarComp;
