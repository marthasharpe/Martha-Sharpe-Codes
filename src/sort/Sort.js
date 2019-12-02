import React from 'react';
import './Sort.css';
import { Container, Dropdown, DropdownButton, Button, ButtonGroup } from 'react-bootstrap';

const Sort = () => {
    return (
        <Container id="projects">
            <ButtonGroup variant="secondary">
                <Button variant="secondary">All Projects</Button>
                <DropdownButton  variant="secondary" as={ButtonGroup} title="Technology" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">React</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Redux</Dropdown.Item>
                    <Dropdown.Item eventKey="3">JavaScript</Dropdown.Item>
                    <Dropdown.Item eventKey="4">HTML/CSS</Dropdown.Item>
                </DropdownButton>
                <DropdownButton  variant="secondary" as={ButtonGroup} title="Date" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">newest - oldest</Dropdown.Item>
                    <Dropdown.Item eventKey="2">oldest - newest</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </Container>
    )
}

export default Sort;