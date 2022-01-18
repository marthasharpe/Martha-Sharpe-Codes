import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row className="about-container">
                <Col className="about-col" md={{ span: 6, offset: 1 }}>
                    <h3>About</h3>
                    <p>
                    I am a self-taught developer specializing in JavaScript, React, and React-Native. <br></br>I love writing quality code, learning new technologies, and solving complex problems.
                    </p>
                    <p>
                    Interested in learning how to code? Check out my ebook <a href="https://marthasharpe.gumroad.com/l/teach-yourself-to-code" target="blank">Teach Yourself to Code</a>
                    </p>
                    <p>
                    I also share my coding journey and do live coding challenges on my <a href="https://www.youtube.com/channel/UCqL_YXyK5g7rr4MmhqVCAGA" target="blank">YouTube channel</a>
                    </p>
                </Col>
                <Col className="about-col" md={{ span: 4 }}>
                    <h3>Skills</h3>
                            <ul>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>React-Native</li>
                                <li>Redux</li>
                                <li>Git/GitHub</li>
                                <li>REST APIs</li>
                                <li>GraphQL</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                            </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default About;