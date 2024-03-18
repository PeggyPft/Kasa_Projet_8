import React from 'react';
import logoFooter from "../assets/images/logoFooter.png";
import textFooter from "../assets/images/textFooter.png";

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoFooter} alt="logo Kasa" className='logoFooter'/>
            <h3 className='textFooter'>© 2020 Kasa. All rights reserved</h3>
        </div>
    );
};

export default Footer;