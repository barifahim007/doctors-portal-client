import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import InfoCards from '../InfoCards/InfoCards';
import OurServices from '../OurServices/OurServices';


const Home = () => {
    return (
        <div className='mx-5' >
            <Banner></Banner>
            <InfoCards></InfoCards>
            <OurServices></OurServices>
            <Card></Card>

        </div>
    );
};

export default Home;