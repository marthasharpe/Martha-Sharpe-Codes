import React from 'react';
import { Container, Row, Col, Card, ResponsiveEmbed } from 'react-bootstrap';
import './Featured.css';

const Featured = () => {
    return (
        <Container id="projects" className="featured-container" fluid>
            <h2 className="title">Featured Project</h2>
            <Row className="justify-content-md-center">
                <Col md="6">
                    <Card className="featured-card">
                        <ResponsiveEmbed aspectRatio="16by9">
                            <iframe
                                title="MySchool: Full-Stack Web App"
                                className="video"
                                src="https://www.youtube-nocookie.com/embed/eR6Su2uIC8o"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </ResponsiveEmbed>
                        <Card.Body>
                            <Card.Title>
                                MySchool: Full-Stack Web App
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                March 2020
                            </Card.Subtitle>
                            <Card.Text>
                                A website for saving online learning resources.
                            </Card.Text>
                            <Card.Text>
                                Built a REST API using Node, Express, and MongoDB. Used Mongoose schemas for data modelling and to create relationships between collections of data. Implemented user login with password encryption and JWT authentication. 
                            </Card.Text>
                            <Card.Text>
                                A CRUD application built with React. Used Redux for state management and Redux-Thunk with Axios for API calls. Persisted state with session storage. Used React-Router-DOM for dynamic routing and React-Bootstrap components. 
                            </Card.Text>
                            <Card.Link href="https://github.com/marthasharpe/myschool-back" target="_blank">
                                Backend Repo
                            </Card.Link>
                            <Card.Link href="https://github.com/marthasharpe/MySchool-front" target="_blank">
                                Frontend Repo
                            </Card.Link>
                            <Card.Link href="https://my-school.netlify.com/" target="_blank">
                                Live Demo
                            </Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Featured;

