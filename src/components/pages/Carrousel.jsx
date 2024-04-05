import React, {useState} from 'react';
import PropTypes from 'prop-types';
import arrowLeft from '../../assets/images/arrow-left.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

const Carrousel = ({pictures}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };



    return (
        <div className="carrousel">
            <img src={arrowLeft} alt="flèche gauche" className="arrowLeft" onClick={previousImage}/>
            <img src={pictures[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className='pictureCarrousel' />
            <img src={arrowRight} alt="flèche droite" className="arrowRight" onClick={nextImage} />
            <div className="pageCounter">{currentImageIndex + 1}/{pictures.length}</div>
            
        </div>
    );
};

Carrousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrousel;