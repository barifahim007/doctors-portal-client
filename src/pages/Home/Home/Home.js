import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import OurServices from '../OurServices/OurServices';
import Testimonials from '../Testimonials/Testimonials';
import ContactForm from './ContactForm/ContactForm';


const Home = () => {
    return (
        <div className='mx-5' >
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <Card></Card>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>

        </div>
    );
};

export default Home;