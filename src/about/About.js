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
                        For the past 10 years, I have poured myself into starting a family, managing a home business, and homeschooling four children. Last year, I took up web development and have been obssessed ever since.
                        <br/><br/>
                        I love the daily challenges of being a web developer: writing quality code, learning new technologies, and solving complex problems. I learn quickly and test my knowledge by creating projects, pushing to GitHub, and sharing on LinkedIn.
                        <br/><br/>
                        My contagious enthusiasm and passion for learning is one reason I was chosen as a LinkedIn Top Voice for Web Development in 2019. Now, I am eager to be part of a team and build amazing things that will change people's lives!
                    </p>
                </Col>
                <Col className="about-col" md={{ span: 5, offset: 1 }}>
                    <h3>Skills</h3>
                    <ul>
                        <li>Primary Experience:</li>
                            <ul>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Redux</li>
                                <li>Git/GitHub</li>
                            </ul>
                        <li>Other Experience:</li>
                            <ul>
                                <li>RESTful APIs</li>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>MongoDB</li>
                                <li>FireBase</li>
                                <li>Bootstrap and derivatives</li>
                                <li>Sass and Material-UI</li>
                                <li>jQuery</li>
                            </ul>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default About;