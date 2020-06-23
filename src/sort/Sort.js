import React, { useState, lazy, Suspense } from 'react';
import './Sort.css';
import { Container, Dropdown, DropdownButton, Button, ButtonGroup } from 'react-bootstrap';
import { projectData } from '../projectData.js';
const CardCarousel = lazy(() => import("./../carousel/Carousel.js"));


const Sort = () => {
    const [ data, setData ] = useState(projectData);

    return (
        <Container id="projects" className="projects-container" fluid>
            <h2 className="project-title">Personal Projects</h2>
            <ButtonGroup style={{ margin: "20px 0px" }}>
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
            <Suspense fallback={<div>Loading...</div>}>
                <CardCarousel data={data}/>
            </Suspense>
        </Container>
    )
}

export default Sort;