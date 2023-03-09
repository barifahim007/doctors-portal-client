import React from 'react';

const UserTestimonial = ({ review }) => {
    const { img, comments, location, name } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p> {comments}</p>
                <div className="card-actions  mt-4">
                    <div className="avatar ">
                        <div className="w-24 rounded-xl mr-6">
                            <img className='' src={img} alt="" />
                        </div>
                        <div>
                            <h2 className='font-bold'>{name}</h2>
                            <p className=' font-bold'>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTestimonial;