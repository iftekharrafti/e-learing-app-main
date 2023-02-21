import React from 'react';

const PrimaryButton = ({children, background, color}) => {
    return (
        <div>
            <button style={{padding: '10px 20px', background: background, color: color, border: 0}} className='py-2 px-3 fw-bold'>{children}</button>
        </div>
    );
};

export default PrimaryButton;