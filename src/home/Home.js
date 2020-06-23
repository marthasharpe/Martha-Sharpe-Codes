import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import './Home.css';
import pic from '../profile-pic-crop.jpg';

const Home = () => {
    return (
        <Jumbotron id="home" fluid>
            <div className="title-container">
                <Image style={{width: 300, marginBottom: 20}} src={pic} className="profile" alt="profile" roundedCircle fluid/>
                <h1>Martha Sharpe</h1>
                <h4>Software Developer</h4>
            </div>
        </Jumbotron>
    )
}

export default Home;