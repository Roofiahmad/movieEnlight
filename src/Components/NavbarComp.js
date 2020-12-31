import React, { useState, useEffect } from "react";
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
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import axios from "axios";

const NavbarComp = (props) => {
  const { buttonLabel, className } = props;
  const [image, setImage] = useState(localStorage.getItem("images"));
  const [userName, setName] = useState(localStorage.getItem("userName"));
  const token = localStorage.getItem("token");
  let titleSearched = "";
  const role = localStorage.getItem("role");
  let regex = /admin/;
  let userregex = /user/;
  const admin = regex.test(role);
  const user = userregex.test(role);

  const signOutHandler = () => {
    localStorage.clear();
    window.location.reload();
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

  useEffect(async () => {
    if (token) {
      let config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      Axios.get(
        "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/user/profile",
        config
      )
        .then((response) => {
          {
            response.data.data.image ==
            "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/img/null"
              ? setImage(
                  "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                )
              : setImage(response.data.data.image);
          }
          setName(response.data.data.fullName);
          let email = response.data.data.email;
          localStorage.setItem("userName", userName);
          localStorage.setItem("email", email);
          localStorage.setItem("access", true);
          localStorage.setItem("role", response.data.data.role);
          localStorage.setItem("images", image);
        })
        .catch((err) => console.log(err));
    }
  });

  return (
    <div className="body">
      <Container>
        <Navbar className="navreally-dark" dark expand="md">
          <Link to="/">
            <NavbarBrand style={{ color: "#FFB700" }} href="/">
              <span>
                <img
                  alt="logo"
                  src="https://i.ibb.co/LZxNK66/png-clipart-graphic-film-cinema-movie-projector-hollywood-claquete-television-photography-thumbnail.png"
                  width="50px"
                ></img>
              </span>{" "}
              <img
                alt="logo"
                src="https://i.ibb.co/SsB8dMk/Logo-Makr-1-RD36w-1.png"
                width="100px"
              ></img>
            </NavbarBrand>
          </Link>
          <NavbarToggler style={{ color: "#FFB700" }} onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <br />
            <Nav className="mr-auto" navbar></Nav>
            <div className="col-md">
              <InputGroup>
                <Input
                  onChange={(e) => (titleSearched = e.target.value)}
                  className="searchForm"
                  type="text"
                  placeholder="search movie"
                ></Input>
                <InputGroupAddon addonType="append">
                  <Button
                    onClick={() => {
                      localStorage.setItem("searched", titleSearched);
                      window.location.reload();
                    }}
                    style={{ backgroundColor: "#FFB700" }}
                  >
                    <i className="fa fa-search"></i>
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <NavLink>
              {token ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                    <img
                      src={
                        image ==
                        "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/img/null"
                          ? "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
                          : image
                      }
                      className="ava"
                      alt="user ava"
                    ></img>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <b>{userName}</b>
                    </DropdownItem>
                    <Link to="/user" className="dropdown_link">
                      <DropdownItem>Profile</DropdownItem>
                    </Link>
                    {admin ? (
                      <Link to="/admin" className="dropdown_link">
                        <DropdownItem>Admin Settings</DropdownItem>
                      </Link>
                    ) : null}
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
