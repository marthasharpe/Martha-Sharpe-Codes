import React from 'react';
import './About.css';
import { Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row className="about-container align-items-center">
                <Col>
                    <h2>About</h2>
                    <p>
                        I enjoy web development because I like being challenged on a daily basis. I am excited to work on a team, creating amazing products that will help people and build an awesome future!
                    </p>
                </Col>
                <Col>
                    <h2>Skills</h2>
                    <ul>
                        <li>ES6 JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Bootstrap/jQuery/SASS</li>
                        <li>Git/GitHub</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default About;