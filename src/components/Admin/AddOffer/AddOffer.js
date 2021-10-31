import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// import useAuth from '../../../hooks/useAuth';

const AddOffer = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    //const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
        fetch(`https://bloodcurdling-nightmare-41275.herokuapp.com/offers`, {
      method : 'post',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data =>{
      // console.log(data);
      if(data?.insertedId){
              alert('Successfully added Offer');
              reset();
              }
    })
    };
    return (
        <div>
            <Container>
              <Row>
                <Col xs={1} md={8}>
                  <h2 className="text-danger text-center">Add a Offer</h2>
            <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
          <input  placeholder="Image Link" {...register("img")} />
          <input placeholder="name" {...register("name", { required: true })} />
          
          <input placeholder="Description" {...register("description", { required: true })} />
          {errors.description && <span className="error">This field is required</span>}
          <input placeholder="Price"  {...register("price", { required: true })} />
          {errors.price && <span className="error">This field is required</span>}
          
          <input className="btn btn-danger" type="submit" />
        </form>
                </Col>
              </Row>
            </Container>
        
        </div>
    );
};

export default AddOffer;