import React, { useState } from 'react';
import styles from './CompStyle.css';
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
  InputGroupAddon
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
    <div>
      <Container>
      <Navbar className="navreally-light" light expand="md">
        <NavbarBrand className="" href="/">MilanTV</NavbarBrand>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <br/>
          <Nav className="mr-auto" navbar>
          </Nav>
              <div className="col-md">
                <InputGroup>
                  <Input className="searchForm" type="input" placeholder="search movie"></Input>
                  <InputGroupAddon addonType="append">
                    <Button style={{backgroundColor: '#FE024E'}}><i className="fa fa-search"></i></Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
              <NavLink>
                <div className="col-md">
                  <Button color="light" className="buttonreally-light" onClick={toggleModal}>Sign In</Button> <span/>
                  <Button color="light" className="buttonreally-light" onClick={toggleModal}>Sign Up</Button>
                </div>
              </NavLink>
          </Collapse>
      </Navbar>
      </Container>
      <Modal isOpen={modal} toggleModal={toggleModal} className={className}>
        <ModalHeader style={{textAlign: 'center'}} toggleModal={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default NavbarComp;