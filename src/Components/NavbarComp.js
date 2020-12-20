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
  NavbarText
} from 'reactstrap';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const NavbarComp = (props) => {
  const [isOpen, setIsOpen, setModal, modal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

  return (
    <div>
      <Container className="position-absolute">
      <Navbar className="really-light" light expand="md">
        <NavbarBrand href="/">MovieApp</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Input type="search" placeholder="search movie"></Input>
            </NavItem>
          </Nav>
        <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>
            <NavLink className="text-dark text-link" onClick={toggleModal}>Sign In</NavLink>
            <NavLink className="text-dark text-link" onClick={toggleModal}>Sign Up</NavLink>
          </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default NavbarComp;