import React from 'react';
import { Jumbotron, Image, Nav } from 'react-bootstrap';
import './Home.css';
import pic from '../profile-pic-crop.jpg';
import FontAwesome from 'react-fontawesome'


const Home = () => {
    return (
        <Jumbotron id="home" fluid>
            <div className="title-container">
                <Image src={pic} className="profile-pic" alt="profile" roundedCircle fluid/>
                <h1>Martha Sharpe</h1>
                <h3>Software Developer</h3>
                <Nav>
                  <Nav.Link href="https://www.linkedin.com/in/marthasharpe2020/" target="_blank">
                    <FontAwesome name="linkedin" size="2x" className="social-link"/>
                  </Nav.Link>
                  <Nav.Link href="https://twitter.com/SharpeMartha" target="_blank">
                    <FontAwesome name="twitter" size="2x" className="social-link"/>
                  </Nav.Link>
                  <Nav.Link href="https://github.com/marthasharpe" target="_blank">
                    <FontAwesome name="github" size="2x" className="social-link"/>
                  </Nav.Link>
                  <Nav.Link href="https://www.youtube.com/channel/UCqL_YXyK5g7rr4MmhqVCAGA" target="_blank">
                    <FontAwesome name="youtube" size="2x" className="social-link"/>
                  </Nav.Link>
                </Nav>
            </div>
        </Jumbotron>
    )
}

export default Home;