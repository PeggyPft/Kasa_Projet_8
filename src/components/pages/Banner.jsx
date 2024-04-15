import React from 'react';


const Banner = ({imageUrl}) => {
    return (
        <div className='container_Banner'>
            <div className='banner'>
                <img src={imageUrl} alt="Banner"/>
            </div>
            
        </div>
    );
};

export default Banner;