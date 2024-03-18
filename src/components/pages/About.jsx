import React from 'react';
import imageBannerAbout from "../../assets/images/imageBannerAbout.png";

const About = () => {
    return (
        <div className="about">
            <div className="bannerAbout">
                <img src={imageBannerAbout} alt="Photo montagnes" />
            </div>
        </div>
    );
};

export default About;