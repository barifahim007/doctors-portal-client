import React, { children } from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <div>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-neutral text-white">{children}</button>
        </div>
    );
};

export default PrimaryButton;