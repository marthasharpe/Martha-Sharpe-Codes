import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../carousel/Carousel';
import { projectData } from '../projectData.js';
import './Featured.css';

const Featured = () => {
    const featuredProjects = projectData.filter(project => project.featured)

    return (
        <Container id="freelance" className="featured-container" fluid>
            <h2 className="title">Projects</h2>
            <Carousel projects={featuredProjects}/>
        </Container>
    )
}

export default Featured;

