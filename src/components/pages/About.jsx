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
                {collapseData.map((collaps, index) => (
                <Collapse 
                    collapseGenericName={"collapse_Container_About"} 
                    key={index}
                    title={collaps.title}
                    content={collaps.content}
                />
            ))}
            </div>

        </div>
    );
};

export default About;