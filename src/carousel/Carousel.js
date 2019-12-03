import React from 'react';
import { Card } from 'react-bootstrap';
import './Carousel.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CardCarousel = (props) => {

    const projectCards = props.data.map(project => {
        return (
            <Card style={{ width: '18rem' }} key={project.title}>
                <iframe class="video" src={project.image} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link href={project.github} target="_blank">GitHub</Card.Link>
                    <Card.Link href={project.netlify} target="_blank">Netlify</Card.Link>
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