import React from 'react';
import './dashboard.css';

function Card ({ theme, image, label1, label2, label3}) {
    return (
        <>
            <div className={`card ${theme ? 'dark-cards' : ''}`}>
                <div className='card-inner'>
                    <div className='col-md-4'>
                        <img src={image} className='icon' alt={image} />
                    </div>
                    <div className='col-md-8'>
                        <h5>{label1}</h5>
                        <h4>{label2}</h4>
                        <h6>{label3}</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;