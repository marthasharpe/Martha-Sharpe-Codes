import React from 'react';
import './About.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import pic from '../profile-pic-crop copy.jpg';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row className="justify-content-center">
                <Col sm="10" md="6" className="align-items-center">
                    <img src={pic} className="profile" alt="profile"/>
                </Col>
                <Col sm="10" md="6" className="justify-content-center">
                    <h2>About</h2>
                    <p>
                        I got into web development because I wanted to be challenged. I wanted to create things that would make life easier for other people. I wanted to develop a skill would be of great value to the future.
                    </p>
                    <div>
                        <Button href="#projects" variant="primary">
                            Projects
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;