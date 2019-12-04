import React from 'react';
import './About.css';
import { Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row className="about-container">
                <Col md={{ span: 4, offset: 1 }}>
                    <h2>About</h2>
                    <p>
                        I got into web development because I love being challenged on a daily basis. I enjoy working on a team and creating products that will improve people's lives and build an awesome future!
                    </p>
                </Col>
                <Col md={{ span: 4, offset: 2 }}>
                    <h2>Skills</h2>
                    <ul>
                        <li>ES6 JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Bootstrap/jQuery/Sass</li>
                        <li>Git/GitHub</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default About;