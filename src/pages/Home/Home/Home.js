import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import OurServices from '../OurServices/OurServices';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div className='mx-5' >
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <Card></Card>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>

        </div>
    );
};

export default Home;