import React from 'react';
import imageBanner from "../../assets/images/imageBannerHome.png";

const Home = () => {
    return (
        <div className="home">
            <div className="bannerHome">
                <img src={imageBanner} alt="Image mer et rochers" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </div>
    );
};

export default Home;