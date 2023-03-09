import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import user1 from '../../../assets/images/people1.png'
import user2 from '../../../assets/images/people2.png'
import user3 from '../../../assets/images/people3.png'
import UserTestimonial from './UserTestimonial';

const Testimonials = () => {
    const userReview = [
        {
            _id: 1,
            name: "Winson Herry",
            img: user1,
            location: "California",
            comments: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 2,
            name: "guana liana",
            img: user2,
            location: "new york",
            comments: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            _id: 3,
            name: "young lee",
            img: user3,
            location: "Dhaka",
            comments: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        }
    ]
    return (
        <section className='my-16'>
            <div>
                <div className='flex justify-between'>
                    <div className=''>
                        <h2 className='text-xl font-bold text-primary'>Testimonials</h2>
                        <h4 className='font-semibold text-white text-3xl'>What Our Patients Says</h4>
                    </div>
                    <figure>
                        <img className='w-24  lg:w-44' src={quote} alt="" />
                    </figure>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    userReview.map(review => <UserTestimonial
                        key={review._id}
                        review={review}

                    ></UserTestimonial>)
                }
            </div>
        </section>
    );
};

export default Testimonials;