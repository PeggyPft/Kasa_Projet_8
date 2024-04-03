import React from 'react';
import logements from '../../data/logements.json';
import redStar from '../../assets/images/red-star.svg';
import greyStar from '../../assets/images/grey-star.svg';

const Ratings = ({logementId}) => {
    const logement = logements.find((logement) => logement.id === logementId);

    // Récupérer le rating du logement
    const {rating} = logement;

    // Création d'un tableau d'étoiles en fonction du rating
    const stars = [];
    for (let i = 0; i <= 4; i++) {
        if (i <= rating) {
            stars.push(<img key={i} src={redStar} alt="étoile validée" />);
        } else {
            stars.push(<img key={i} src={greyStar} alt="étoile non validée" />);
        }
        
    }

    return (
        <div className='stars'>
            {stars}
        </div>
    );
};

export default Ratings;