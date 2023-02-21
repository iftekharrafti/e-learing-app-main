import React from 'react';

const CountDownRendered = ({ days, hours, minutes, seconds }) => {

    return (
        <div className='d-flex flex-wrap mb-5 mt-4'>
            <div style={{background: 'white', padding: '15px', borderRadius: '15px', marginRight: '15px', width: '90px', marginBottom: '20px'}}>
                <h4 className='fs-2 fw-bold text-center text-primary'>{days}</h4>
                <p className='text-center'>Days</p>
            </div>
            <div style={{background: 'white', padding: '15px', borderRadius: '15px', marginRight: '15px', width: '90px', marginBottom: '20px'}}>
                <h4 className="fs-2 fw-bold text-center text-primary">{hours}</h4>
                <p className="text-center">Hours</p>
            </div>
            <div style={{background: 'white', padding: '15px', borderRadius: '15px', marginRight: '15px', width: '90px', marginBottom: '20px'}}>
                <h4 className="fs-2 fw-bold text-center text-primary">{minutes}</h4>
                <p className="text-center">Minutes</p>
            </div>
            <div style={{background: 'white', padding: '15px', borderRadius: '15px', marginRight: '15px', width: '90px', marginBottom: '20px'}}>
                <h4 className="fs-2 fw-bold text-center text-primary">{seconds}</h4>
                <p className="text-center">Seconds</p>
            </div>
        </div>
    );
};

export default CountDownRendered;