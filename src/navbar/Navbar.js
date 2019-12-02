import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

const Navigate = () => {
    return (
<Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">MarthaSharpeCodes</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="justify-content-end mr-auto">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#linkedin">LinkedIn</Nav.Link>
      <Nav.Link href="#github">GitHub</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default Navigate;