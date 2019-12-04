import React from 'react';
import './About.css';
import { Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row className="about-container align-items-center">
                <Col md={{ span: 3, offset: 2 }}>
                    <h2>About</h2>
                    <p>
                        I got into web development because I love being challenged on a daily basis. I enjoy being part of a team, building amazing products that will improve people's lives and create an awesome future!
                    </p>
                </Col>
                <Col md={{ span: 3, offset: 2 }}>
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