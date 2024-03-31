import React from 'react';
import imageBannerAbout from "../../assets/images/imageBannerAbout.png";
import Collapse from './Collapse';
import collapseData from "../../data/collapse.json";

const About = () => {
    return (
        <div className="about">
            <div className="bannerAbout">
                <img src={imageBannerAbout} alt="Photo montagnes" />
            </div>
            <div className="collapseContainer">
                <Collapse notices={collapseData} />
            </div>

        </div>
    );
};

export default About;