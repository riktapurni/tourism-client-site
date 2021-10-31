import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../img/about.png'
const About = () => {
    return (
        <div>
            <Container className="mt-5">
                <h2 className="mb-5 text-danger text-center">About Our Agency</h2>
                    <Row>
                    <Col xs={12} md={7}>
                     Travel grew out of an overland luxury bus concept in the UK in the 70’s then transformed into a High Street bucket shop in the 80’s. The company has now evolved into a highly respected purpose driven Australian owned travel management company. Reho Travel is committed to making a difference in the world that its clients travel to, whether on business, on holiday or on a study tour. With offices in Melbourne and Sydney, the company is focused on managing the travel for companies with a travel spend up to $5m.
                    </Col>
                    <Col xs={12} md={5}>
                    <img src={about} alt="" className="img-fluid"/>
                    </Col>
                    </Row>
            </Container>
           {/* <Container className="my-5">
               <Row>
                   <h2 className="mb-5 text-danger">About Our Agency</h2>
                   <Col xs={12} md={7}>
                       <Card style={{ width: '40rem' }}>
                        <Card.Body>
                    <Card.Title>We are Go Trip
                        Ravels Support Agency</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">our agency is a experienced travel management company. We work with you to manage all elements of your travel in an efficient, cost effective and ethical manner</Card.Subtitle>
                    <Card.Text>
                    Travel grew out of an overland luxury bus concept in the UK in the 70’s then transformed into a High Street bucket shop in the 80’s. The company has now evolved into a highly respected purpose driven Australian owned travel management company. Reho Travel is committed to making a difference in the world that its clients travel to, whether on business, on holiday or on a study tour. With offices in Melbourne and Sydney, the company is focused on managing the travel for companies with a travel spend up to $5m.
                    </Card.Text>
                </Card.Body>
                </Card>
                </Col>
                   <Col xs={12} md={5}>
                       <img src={about} alt="" className="img-fluid"/>
                   </Col>
               </Row>
           </Container> */}
        </div>
    );
};

export default About;