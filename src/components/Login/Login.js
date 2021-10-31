import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const [isLoading, setIsLoading] = useState(true);
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/offers';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
         
        .then(result =>{
            history.push(redirect_uri);
        })
        .finally(() => setIsLoading(false));
    }
    return (
        <div>
            <Container className="mt-5 align-items-center">
                
                    <h2 className="mb-5 text-center"> Please Log In</h2>
                    
                        <Button variant="success" onClick={handleGoogleLogin}>Google Sign In</Button>
                   </Container>
            
        </div>
    );
};

export default Login;