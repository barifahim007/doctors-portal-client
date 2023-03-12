import React, { useState } from 'react';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Service from '../Service/Service';

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppoinmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppoinmentBanner>
            <Service
                selectedDate={selectedDate}
            ></Service>
        </div>
    );
};

export default Appoinment;