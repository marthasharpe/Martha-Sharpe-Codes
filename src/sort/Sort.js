import React from 'react';
import './Sort.css';
import { Container, Dropdown, DropdownButton, Button, ButtonGroup } from 'react-bootstrap';
import Carousel from './../carousel/Carousel.js';

const Sort = () => {
    return (
        <Container id="projects" className="projects-container">
            <ButtonGroup>
                <Button variant="dark">All Projects</Button>
                <DropdownButton  variant="dark" as={ButtonGroup} title="Technology" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">React</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Redux</Dropdown.Item>
                    <Dropdown.Item eventKey="3">JavaScript</Dropdown.Item>
                    <Dropdown.Item eventKey="4">HTML/CSS</Dropdown.Item>
                </DropdownButton>
                <DropdownButton  variant="dark" as={ButtonGroup} title="Date" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">newest - oldest</Dropdown.Item>
                    <Dropdown.Item eventKey="2">oldest - newest</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
            <Carousel />
        </Container>
    )
}

export default Sort;