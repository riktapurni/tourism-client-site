import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Offers = () => {
    const [offers, setOffers] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        fetch('https://bloodcurdling-nightmare-41275.herokuapp.com/offers')
        .then(res => res.json())
        .then(data => setOffers(data))
        .finally(() => setIsLoading(false));
    }, []);
    
    return (
        <div>
            
            <Container>
              <h3 className="text-danger mb-5 text-center">Our Offers</h3>
                 <Row xs={1} md={3} className="g-4">
            {
                offers?.map(offer => (<Col key={offer?._id}>
      <Card>
        <Card.Img variant="top" src={offer?.img} />
        <Card.Body>
          <Card.Title>{offer?.name}</Card.Title>
          <Card.Text>
            {offer?.description}
          </Card.Text>
          <Card.Text>
            Price: From ${offer?.price}
          </Card.Text>
        <NavLink  to= {`/offers/${offer?._id}`}> <Button variant="danger">Booking for {offer?.name.toLowerCase()}</Button>
        </NavLink>

        </Card.Body>
      </Card>
    </Col>))
            }
            </Row>
            </Container>

        </div>
    );
};

export default Offers;