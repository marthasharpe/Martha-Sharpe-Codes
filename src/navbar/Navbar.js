import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import resume from '../Martha-Sharpe-Resume.pdf';
import logo from '../logo.png';

const Navigate = () => {
    return (
      <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#App">
          <img
            alt=""
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"  className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#freelance">Freelance</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href={resume} target="_blank">Resumé</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigate;