import React from 'react';
import cavity from '../../../assets/service/cavity.png'
import fluoride from '../../../assets/service/fluoride.png'
import Whitening from '../../../assets/service/whitening.png'
import OurService from './OurService';
const OurServices = () => {
    const Services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: Whitening,
        }
    ]
    return (
        <div>
            <div className='text-center  mt-64 '>
                <h2 className='text-xl font-bold text-primary uppercase '>Our service</h2>
                <h3 className='text-3xl font-semibold text-white'>Service We Provide</h3>
            </div>
            <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white'>

                {
                    Services.map(service => <OurService
                        key={service.id}
                        service={service}

                    ></OurService>)
                }
            </div>
        </div>
    );
};

export default OurServices;