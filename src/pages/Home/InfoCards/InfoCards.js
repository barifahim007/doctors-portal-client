import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {
    const cardInfo = [
        {
            id: 1,
            name: 'Oppneing Hours',
            description: 'opne at 8am to 5 pm',
            img: clock,
            bgClass: 'bg-gradient-to-r from-primary to-neutral'

        },
        {
            id: 2,
            name: 'Our Locations',
            description: 'Brooklyn, NY 10036, United States',
            img: marker,
            bgClass: 'neutral'

        },
        {
            id: 3,
            name: 'Contract Us Now',
            description: '+000 123 456789',
            img: phone,
            bgClass: 'bg-gradient-to-r from-primary to-neutral'

        }
    ]
    return (
        <div className='grid mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardInfo.map(card => <InfoCard

                    key={card.id}
                    card={card}

                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;