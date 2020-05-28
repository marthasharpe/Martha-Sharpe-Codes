import React from 'react';
import { Card, ResponsiveEmbed } from 'react-bootstrap';
import './Carousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1360 },
        items: 4,
        slidesToSlide: 4, // optional, default to 1.
    },
    laptop: {
        breakpoint: { max: 1360, min: 980 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 980, min: 640 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const CardCarousel = (props) => {

    const projectCards = props.data.map(project => {
        return (
            <Card style={{ maxWidth: 400, height: 'auto' }} key={project.title}>
                <ResponsiveEmbed aspectRatio="16by9">
                    <iframe title={project.title} className="video" src={project.image} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </ResponsiveEmbed>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>   
                    <Card.Link href={project.github} target="_blank">GitHub Repo</Card.Link>
                    <Card.Link href={project.netlify} target="_blank">Live Demo</Card.Link>
                </Card.Body>
            </Card>
        )  
    })

    return (
        <Carousel responsive={responsive} autoPlay={false}>
            {projectCards}
        </Carousel>
    )
}

export default CardCarousel;