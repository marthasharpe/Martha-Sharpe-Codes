import React from 'react';
import './About.css';
import { Container, Row, Col} from 'react-bootstrap';

const About = () => {
    return (
        <Container id="about" fluid>
            <Row className="about-container">
                <Col className="about-col" md={{ span: 5, offset: 1 }}>
                    <h3>About</h3>
                    <p>
                    I am a self-taught developer specializing in JavaScript, React, Redux, and React-Native. Most of my learning has been through building and deploying apps, pushing to GitHub and getting peer code reviews on LinkedIn.
                    <br/><br/>
                    Because of my contagious enthusiasm and passion for learning, I was chosen as a 2019 LinkedIn Top Voice for Web Development. I love the daily challenges of web development: writing quality code, learning new technologies, and solving complex problems.
                    <br/><br/>
                    I have been continuing to learn through freelance opportunities. A Squarespace site using Mailchimp and a React-Native app for sharing videos. I look forward to working on a team that is passionate about their product.
                    </p>
                </Col>
                <Col className="about-col" md={{ span: 5, offset: 1 }}>
                    <h3>Skills</h3>
                    <ul>
                        <li>Primary Experience:</li>
                            <ul>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React-Native</li>
                                <li>Git/GitHub</li>
                            </ul>
                            <br/>
                        <li>Secondary Experience:</li>
                            <ul>
                                <li>RESTful APIs</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>FireBase</li>
                                <li>Bootstrap and derivatives</li>
                            </ul>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default About;