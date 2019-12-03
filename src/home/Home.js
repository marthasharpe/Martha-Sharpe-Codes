import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <Jumbotron id="home" fluid>
            <div className="title-container">
                <h1>Martha Sharpe</h1>
                <h2>Web Developer</h2>
                <div>
                    <Button href="#about" variant="primary">About Me</Button>
                </div>
            </div>
        </Jumbotron>
    )
}

export default Home;