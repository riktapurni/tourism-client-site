import React from 'react';
import { Col, Container, Row, } from 'react-bootstrap';
import banner from '../../img/banner.png'
const Banner = () => {
    return (
        <div className="banner py-4">
                <Container>
                <Row className="align-items-center ">
                <Col xs={12} md={5}>
                <div className="text-start">
                    <h1><span className="text-danger fw-bolder">Let's Enjoy </span>
                <br />
                The Wonders of Nature
                </h1>
                <p className="banner-text mt-3">
                    Let’s start your journey with us, your dream will come true 
                    <br />
                     
                </p>
               <button className="btn btn-danger">Discover Now</button>
                </div>
                </Col>
                <Col xs={12} md={7}>
                <img src={banner} alt="" className="img-fluid"/>
                </Col>
                </Row>
                </Container>
            </div>
    );
};

export default Banner;