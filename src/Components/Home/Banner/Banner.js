import React from 'react';
import Rectangle2 from '../../images/Rectangle2.png';
import './Banner.css'

const Banner = () => {
    return (

        <div className="banner-container">
        <div className='banner-image-align'>
        <img src={Rectangle2} alt="" />
        </div>
        
        
        <div className="banner-tittle">Computer Engineer</div>
        <div className="banner-text">142,765 Computer Engineers follow</div>
        
    </div>

    

    )


};

export default Banner;