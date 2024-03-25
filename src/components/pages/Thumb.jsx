import React from 'react';
import PropTypes from "prop-types";

const Thumb = ({logements}) => {
    return (
        logements.map((logement) => (
            <div className="thumb" key={logement.id}>
                <img src={logement.cover} alt={logement.title} />
                <h2 className='titleImg'>{logement.title}</h2>
            </div>

        ))
    );
};
Thumb.propTypes ={
    logements: PropTypes.array.isRequired
}
export default Thumb;