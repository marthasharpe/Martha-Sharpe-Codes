import React from 'react';
import { Container, Row, Col, Card, ResponsiveEmbed } from 'react-bootstrap';
import './Featured.css';

const Featured = () => {
    return (
        <Container id="freelance" className="featured-container" fluid>
            <h2 className="title">Freelance Work</h2>
            <Row className="justify-content-md-center">
            {/* <Col md="6">
                    <Card className="featured-card">
                        <ResponsiveEmbed aspectRatio="16by9">
                            <iframe
                                title="React-Native Video-Sharing App"
                                className="video"
                                src="https://www.youtube-nocookie.com/embed/kXh8uU8IhQw"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </ResponsiveEmbed>
                        <Card.Body>
                            <Card.Title>
                                React-Native Video Sharing App
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                June 2020
                            </Card.Subtitle>
                            <Card.Text>
                                Squarespace site.
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
                </Col> */}
                <Col md="6">
                    <Card className="featured-card">
                        <ResponsiveEmbed aspectRatio="16by9">
                            <iframe
                                title="React-Native Video-Sharing App"
                                className="video"
                                src="https://www.youtube-nocookie.com/embed/kXh8uU8IhQw"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </ResponsiveEmbed>
                        <Card.Body>
                            <Card.Title>
                                React-Native Video Sharing App
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                June 2020
                            </Card.Subtitle>
                            <Card.Text>
                                A cross-platform mobile app for recording and sharing videos. Built with React-Native and Expo. Created wireframes for the design based on the client's desired features and flow. Developed the front end architecture using Redux for state management.
                                <br/><br/>
                                Some challenges I faced:
                                <ul>
                                    <li>screen orientation</li>
                                    <li>authentication flows</li>
                                    <li>pull to refresh</li>
                                    <li>search bar filter</li>
                                    <li>navigation between screens</li>
                                    <li>uploading files to AWS</li>
                                </ul>
                                <em>"Martha is an excellent developer, she worked to my specification on an MVP for a Pitchdrop Mobile application and I was very happy with the results. Her work was timely and the code produced was of a high quality. Her communication is very clear. I wouldn't hesitate to recommend her to others or to work with her again." - Callam Delaney, Pitchdrop</em>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Featured;

