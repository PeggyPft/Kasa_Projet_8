import React from 'react';
import logoFooter from "../assets/images/logoFooter.png";

const Footer = () => {
    return (
        <div className="footer">
            <img src={logoFooter} alt="logo Kasa" className='logoFooter'/>
            <p>@ 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;