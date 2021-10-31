import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const UpdateOrder = () => {
    const [order, setOrder] = useState({})
    const {id} = useParams();
    const {user} = useAuth();
    useEffect(()=>{
        const url = `https://bloodcurdling-nightmare-41275.herokuapp.com/orders/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setOrder(data))
    }, [id]);
    // update Order
const handleNameChange = e =>{
   //console.log( e.target.value)
   const updatedName = e.target.value;
   const updatedOrder = {name: updatedName, email: user.email}
   setOrder(updatedOrder)
}
const handleEmailChange = e => {
    const updateEmail = e.target.value;
    const updatedOrder = {name:user.name, email: updateEmail}
    setOrder(updatedOrder)
}
    const handleUpdateOrder = e => {
        const url = `https://bloodcurdling-nightmare-41275.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0 ){
                alert("Updated Successfully");
                setOrder({});
            }
            console.log(data)
        })
        e.preventDefault()
    }
    return (
        <div>
            <h2> Update Order</h2>
            <p><small>Order Id: {id}</small>  </p>
            <form onSubmit={handleUpdateOrder}>
        <input type="text" onChange={handleNameChange} value={user.displayName || ''}/>
        <br />
        <input type="email" onChange={handleEmailChange} value={user.email || ''}/>
        <br />
        <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateOrder;