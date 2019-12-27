import React from 'react';
import './Navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import resume from '../Martha Sharpe Resume.pdf';

const Navigate = () => {
    return (
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Martha Sharpe</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Projects" id="projects-dropdown">
              <NavDropdown.Item href="#featured">Featured</NavDropdown.Item>
              <NavDropdown.Item href="#projects">All Projects</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.linkedin.com/in/marthasharpe2020/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/marthasharpe" target="_blank">GitHub</Nav.Link>
            <Nav.Link href={resume} target="_blank">Resumé</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigate;