import React from 'react';

const TreatmentTime = ({ treatment, setAppoinment }) => {
    const { name, slots } = treatment;
    return (
        <div className="card mt-8 shadow-xl">
            <div className="card-body ">
                <h2 className="text-center text-2xl font-bold text-primary">{name}</h2>
                <p className='text-white' >{slots.length > 0 ? slots[0] : 'try another day'}</p>
                <p className='text-white'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available </p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className=" btn btn-primary text-white"
                        onClick={() => setAppoinment(treatment)}

                    >Book Appoinment

                    </label>
                </div>
            </div>
        </div >
    );
};

export default TreatmentTime;