import React, { useState } from 'react';
import './NavbarComp.css';
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
  const [modals, setModals] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleSignup = () => setModal(!modal); 
  const toggleSignin = () => setModals(!modals);
  const toggleSwitch = () => {
    setModal(!modal);
    setModals(!modals)
  }

  

  const {
    buttonLabel,
    className
  } = props;

  return (
    <div className="body">
      <Container>
      <Navbar className="navreally-dark" dark expand="md">
        <NavbarBrand style={{color: "#FFC200"}} href="/"><span><img src="https://cdn.discordapp.com/attachments/789439456599212092/790110134293495838/logo.png" width="50px"></img></span> <strong>MilanTV</strong></NavbarBrand>
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
                  {/* <Button style={{backgroundColor: "#FFC200"}} className="buttonreally-light" onClick={toggleSignin}>Sign In</Button> <span/>
                  <Button style={{backgroundColor: "#FFC200"}} className="buttonreally-light" onClick={toggleSignup}>Sign Up</Button> */}

                  <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav>
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQH19uFleJ5GTg/profile-displayphoto-shrink_100_100/0/1599416920232?e=1613001600&v=beta&t=YKWii72d55LG67y88694QtOKGNUG0ljJR7W3zGZGJPA" className="ava"></img>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <b>Jody Mantap</b>
                        </DropdownItem>
                        <DropdownItem>
                          Profile
                        </DropdownItem>
                        <DropdownItem>
                          Settings
                        </DropdownItem>
                        <DropdownItem>
                          Help
                        </DropdownItem>
                        <DropdownItem>
                          Sign Out
                        </DropdownItem>
                      </DropdownMenu>
                  </UncontrolledDropdown>
              </NavLink>
          </Collapse>
      </Navbar>
      </Container>
      <Modal isOpen={modal} toggleSignup={toggleSignup} className={className}>
        <ModalBody>
          <Container style={{textAlign: "right"}}>
            <Button style={{backgroundColor: "#FFC200", border: "none", fontSize: "20px"}} onClick={toggleSignup}><strong>X</strong></Button>
          </Container>
          <Container style={{textAlign: "center", color: "#FFC200" }}>
            <h3><strong>Sign Up</strong></h3>
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
                <button className="btn-yellow">Sign Up</button> <br/>
                <small className="text-muted">Already have an account? <a className="a" onClick={toggleSwitch} >Sign In</a></small>
              </Container>
            </Form>
          </Container>
        </ModalBody>
      </Modal>


      <Modal isOpen={modals} toggleSignup={toggleSignin} className={className}>
        <ModalBody>
          <Container style={{textAlign: "right"}}>
            <Button style={{backgroundColor: "#FFC200", border: "none", fontSize: "20px"}} onClick={toggleSignin}><strong>X</strong></Button>
          </Container>
          <Container style={{textAlign: "center", color: "#FFC200" }}>
            <h3><strong>Sign In</strong></h3>
          </Container>
          <Container>
            <hr/>
            <Form>
              <Label>Email</Label>
              <Input type="text" placeholder=""></Input>
              <br/>
              <Label>Password</Label>
              <Input type="password" placeholder=""></Input>
              <br/>
              <Container style={{textAlign: "center"}}>
                <button className="btn-yellow">Sign In</button> <br/>
                <small className="text-muted">Don't have any account? <a className="a" onClick={toggleSwitch}>Sign Up</a></small>
              </Container>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default NavbarComp;