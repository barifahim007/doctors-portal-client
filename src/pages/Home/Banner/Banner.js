import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';


const Banner = () => {
    return (
        <div >
            <div className="hero-content text-white flex-col lg:flex-row-reverse"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <img src={chair} alt='chair' className=" lg:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Getting started</PrimaryButton>
                </div>
            </div>

        </div >
    );
};

export default Banner;