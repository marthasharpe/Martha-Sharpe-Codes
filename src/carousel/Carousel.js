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
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link href="#">GitHub</Card.Link>
                    <Card.Link href="#">Netlify</Card.Link>
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