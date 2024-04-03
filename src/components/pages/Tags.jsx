import React from 'react';
import logements from '../../data/logements.json';

const Tags = ({logementId}) => {
    const logement = logements.find((logement) => logement.id === logementId);


    return (
        <div className='tags'>
            {logement.tags.map((tag, index) => (
                <span key={index} className='tag'>{tag}</span>
            ))}
        </div>
    );
};

export default Tags;