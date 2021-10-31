import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Offers from '../Offers/Offers';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    const { isLoading } = useAuth();
    if (isLoading){
        return (<Spinner className="text-center" animation="border" variant="danger" />)
    }
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;