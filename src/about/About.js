import React from 'react';
import './About.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import pic from '../profile-pic-crop copy.jpg';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row className="about-container align-items-center">
                <Col className="about-col">
                    <Image src={pic} alt="profile" roundedCircle fluid/>
                </Col>
                <Col className="about-col">
                    <h2>About</h2>
                    <p>
                        I got into web development because I wanted to be challenged. I wanted to create things that would make life easier for other people. I wanted to develop a skill would be of great value to the future.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;