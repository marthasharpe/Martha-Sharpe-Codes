import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Featured.css';
import { projectData } from '../projectData.js';

const Featured = () => {
    
    const featuredProjects = projectData.filter(project => project.featured === true)

    const projectCards = featuredProjects.map(project => {
        return (
            <Col className="card-container" key={project.title}>
                <Card style={{ width: 280, height: 400 }}>
                    <iframe title={project.title} className="video" src={project.image} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>   
                        <Card.Link href={project.github} target="_blank">GitHub Repo</Card.Link>
                        <Card.Link href={project.netlify} target="_blank">Live Demo</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        )  
    })
    return (
        <Container id="featured" className="featured-container" fluid>
            <h2 className="title">Featured Projects</h2>
            <Row className="justify-content-md-center">
                {projectCards}
            </Row>
        </Container>
    )
}

export default Featured;

