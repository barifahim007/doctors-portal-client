import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import TreatmentTime from './TreatmentTime';

const Service = ({ selectedDate }) => {
    const [treatmentdate, setTreatmentDate] = useState([]);
    const [appoinment, setAppoinment] = useState(null)

    useEffect(() => {
        fetch('treatmentTime.json')
            .then(res => res.json())
            .then(data => setTreatmentDate(data))


    }, [])
    return (
        <div className='text-center mt-12'>
            <p>Available Service On: {<span className='text-xl font-bold text-success'> {format(selectedDate, 'PP')}.</span>} </p>
            <div className='my-16 grid  gap-6 grid-cols1 md:gird-cols-2 lg:grid-cols-3'>
                {
                    treatmentdate.map(treatment => <TreatmentTime
                        key={treatment._id}
                        treatment={treatment}
                        setAppoinment={setAppoinment}
                    ></TreatmentTime>)
                }
                {
                    appoinment &&
                    <BookingModal
                        appoinment={appoinment}
                        selectedDate={selectedDate}
                    >

                    </BookingModal>
                }
            </div>
        </div>
    );
};

export default Service;