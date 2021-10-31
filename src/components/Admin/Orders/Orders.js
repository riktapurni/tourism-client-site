import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const [isApprove, setApprove] = useState(true);
    
    useEffect(()=>{
        setIsLoading(true)
        fetch('https://bloodcurdling-nightmare-41275.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);
    //Order delete handler
    const handleDeleteOrder = id => {
         const proceed = window.confirm("Are you sure, You want to delete ?");
        if(proceed) {
            const url = `https://bloodcurdling-nightmare-41275.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('successfully Deleted Order');
                const remainingOrder = orders.filter(order => order?._id !== id);
                setOrders(remainingOrder)
            }
        })
        }
    }
                // if (isApprove){
                //             return (<Button>Pendig</Button>)
                //         }
                //         setApprove(false)
    return (
        <div>
            <Container>
                <h2 className="my-5 text-danger">My Orders are : {orders?.length}</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>email</th>
                        <th>Booking name</th>
                        <th>Package Price($)</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        orders?.map((order,index) => (
                            <tr>
                            <td>{index}</td>
                            <td>{order?.userName}</td>
                            <td>{order?.email}</td>
                            <td>{order?.name}</td>
                            <td>$ {order?.price}</td>
                            <td>
                               <Link to={`/orders/updateOrder/${order?._id}`}> <button className="btn btn-sm btn-warning">update</button></Link>
                               <button onClick={()=> handleDeleteOrder(order?._id)}className="btn btn-sm btn-danger">delete</button></td>
                        </tr>
                        ))
                        }
                    </tbody>
        </Table>
            </Container>

        </div>
    );
};

export default Orders;