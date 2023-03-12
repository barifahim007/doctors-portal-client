import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-8xl font-bold text-primary">404!</h1>
                        <p className="py-6 text-6xl"> Page Not Found!</p>
                        <button className="btn btn-primary"><Link to="/">Go to Home</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;