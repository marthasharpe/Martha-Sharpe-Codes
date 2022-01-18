import React from 'react';
import { Container, Row, Col, Card, ResponsiveEmbed} from 'react-bootstrap';
import { projectData } from '../projectData.js';
import './Projects.css';

const Projects = () => {
    const featuredProjects = projectData.filter(project => project.featured)

    const projectCards = featuredProjects.map(project => {
        return (
            <Col className="card-container" key={project.title}>
                <Card>
                    <ResponsiveEmbed aspectRatio="16by9">
                        <iframe
                            title={project.title}
                            className="video"
                            src={project.image}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </ResponsiveEmbed>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{project.date}</Card.Subtitle>
                        <Card.Text>{project.description}</Card.Text>   
                        <Card.Link href={project.github} target="_blank">
                            GitHub Repo
                        </Card.Link>
                        <Card.Link href={project.netlify} target="_blank">
                            Live Demo
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        )  
    })

    return (
        <Container className="projects-container" fluid>
            <h2 className="title">Other Projects</h2>
            <Row className="justify-content-md-center">
                {projectCards}
            </Row>
        </Container>
    )
}

export default Projects;
