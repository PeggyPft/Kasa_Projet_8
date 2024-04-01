import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const Thumb = ({logements}) => {
    return (
        logements.map((logement) => (
            <Link to={`/logement/${logement.id}`} className="thumb" key={logement.id}>
                <img src={logement.cover} alt={logement.title} />
                <h2 className='titleImg'>{logement.title}</h2>
            </Link>

        ))
    );
};
Thumb.propTypes ={
    logements: PropTypes.array.isRequired
}
export default Thumb;