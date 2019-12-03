import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <Jumbotron id="home" fluid>
            <div className="title-container">
                <h1>Martha Sharpe</h1>
                <h2>Web Developer</h2>
            </div>
        </Jumbotron>
    )
}

export default Home;