import React from 'react';
import PromoAnimation from './Animation';
import Enroll from './Enroll';

// promotional home page with components
const Promotion = () => {
    return (
        <div className='promotion_wrapper' style={{background:'#ffffff'}}>
            <div className='container'></div>
                <PromoAnimation/>
                <Enroll/>
        </div>
    );
};

export default Promotion;