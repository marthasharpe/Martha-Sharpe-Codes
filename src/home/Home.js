import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import './Home.css';
import pic from '../profile-pic-crop copy.jpg';

const Home = () => {
    return (
        <Jumbotron id="home" fluid>
            <div className="title-container">
                <Image style={{width: 300, marginBottom: 20}} src={pic} className="profile" alt="profile" roundedCircle fluid/>
                <h1>Martha Sharpe</h1>
                <h2>Software Engineer</h2>
            </div>
        </Jumbotron>
    )
}

export default Home;