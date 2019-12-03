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
                    <Button variant="dark"
                        onClick={() => setData(projectData)}
                        >
                        All Projects
                    </Button>
                    
                    <DropdownButton variant="dark" as={ButtonGroup} title="Filter" id="bg-nested-dropdown">
                        <Dropdown.Item
                            onClick={() => setData(projectData.filter(project => project.technology.includes("React")))}
                            >
                            React
                            </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setData(projectData.filter(project => project.technology.includes("Redux")))}       >
                            Redux
                            </Dropdown.Item>
                        <Dropdown.Item 
                            onClick={() => setData(projectData.filter(project => project.technology.includes("JavaScript")))}  >
                            JavaScript
                            </Dropdown.Item>
                        <Dropdown.Item 
                            onClick={() => setData(projectData.filter(project => project.technology.includes("Bootstrap")))}   >
                            Bootstrap
                            </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton  variant="dark" as={ButtonGroup} title="Sort" id="bg-nested-dropdown">
                        <Dropdown.Item
                            onClick={() => setData(data.slice().sort(( a, b ) => a.date > b.date ? 1 : -1))}
                            >
                            oldest - newest
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => setData(data.slice().sort(( a, b ) => a.date > b.date ? -1 : 1))}
                            >
                            newest - oldest
                        </Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </Row>
            <CardCarousel data={data}/>
        </Container>
    )
}

export default Sort;