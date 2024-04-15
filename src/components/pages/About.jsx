import React from 'react';
import imageBannerAbout from "../../assets/images/imageBannerAbout.png";
import Banner from './Banner';
import Collapse from './Collapse';
import collapseData from "../../data/collapse.json";

const About = () => {
    return (
        <div className="about">
            <div className="bannerAbout">
                <Banner imageUrl={imageBannerAbout}/>
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