import React, { useState } from 'react';
import './CompStyle.css';
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
  Label
} from 'reactstrap';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

  const {
    buttonLabel,
    className
  } = props;

  return (
    <div className="body">
      <Container>
      <Navbar className="navreally-dark" dark expand="md">
        <NavbarBrand style={{color: "#FFC200"}} href="/">MilanTV</NavbarBrand>
        <NavbarToggler style={{color: "#FFC200"}} onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <br/>
          <Nav className="mr-auto" navbar>
          </Nav>
              <div className="col-md">
                <InputGroup>
                  <Input className="searchForm" type="input" placeholder="search movie"></Input>
                  <InputGroupAddon addonType="append">
                    <Button style={{backgroundColor: "#FFC200"}}><i className="fa fa-search"></i></Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <NavLink>
                  <Button style={{backgroundColor: "#FFC200"}} className="buttonreally-light" onClick={toggleModal}>Sign In</Button> <span/>
                  <Button style={{backgroundColor: "#FFC200"}} className="buttonreally-light" onClick={toggleModal}>Sign Up</Button>
              </NavLink>
          </Collapse>
      </Navbar>
      </Container>
      <Modal isOpen={modal} toggleModal={toggleModal} className={className}>
        <ModalBody>
          <Container style={{textAlign: "right"}}>
            <Button style={{backgroundColor: "#FFC200", border: "none"}} onClick={toggleModal}>X</Button>
          </Container>
          <Container>
            <hr/>
            <Form>
              <Label>Full Name</Label>
              <Input type="text" placeholder=""></Input>
              <br/>
              <Label>Email</Label>
              <Input type="text" placeholder=""></Input>
              <br/>
              <Label>Password</Label>
              <Input type="password" placeholder=""></Input>
              <br/>
              <Label>Confirm Password</Label>
              <Input type="password" placeholder=""></Input>
              <br/>
              <Container style={{textAlign: "center"}}>
                <Button style={{backgroundColor: "#FFC200", border: "none"}}>Sign In</Button>
              </Container>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default NavbarComp;