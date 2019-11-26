import React from 'react';
import './About.css';
import { Container, Row, Col } from 'react-bootstrap';
import pic from '../profile-pic-crop copy.jpg';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row>
                <Col>
                    <h2>About</h2>
                    <p>
                        A lot about me, Martha Dawn Sharpe, a coder.
                    </p>
                </Col>
                <Col>
                    <img src={pic} className="profile" alt="profile"/>
                </Col>
            </Row>
        </Container>
    )
}

export default About;