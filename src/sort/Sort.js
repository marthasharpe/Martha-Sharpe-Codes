import React, { useState } from 'react';
import './Sort.css';
import { Container, Row, Dropdown, DropdownButton, Button, ButtonGroup } from 'react-bootstrap';
import CardCarousel from './../carousel/Carousel.js';
import { projectData } from '../projectData.js';

const Sort = () => {
    const [ data, setData ] = useState(projectData);

    return (
        <Container id="projects" className="projects-container">
            <h2 className="title">My Projects</h2>
            <Row>
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
            </Row>
            <CardCarousel data={data}/>
        </Container>
    )
}

export default Sort;