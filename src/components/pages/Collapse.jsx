import React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import arrowUp from "../../assets/images/chevron-up-solid.svg";

const Collapse = ({notices}) => {
    // gestion de l'état d'ouverture et fermeture des sections
    const [openSections, setOpenSections] = useState ({});

    const toggleSection = (title) => {
        setOpenSections(prevState => ({
            ...prevState, // spread operator pour copier le state
            [title]: !prevState[title]
        }));
    };

    return (
        <div className='collapse_Container'>
            {notices.map((notice) => (
                <div className="collapse_Section" key={notice.title}>
                    <div className="collapse_Header" onClick={() => toggleSection(notice.title)}>
                        <h3>{notice.title}</h3>
                        <img src={arrowUp} alt="arrow" className={openSections[notice.title] ? 'arrowUp open' : 'arrowUp'} />
                    </div>    
                    {openSections[notice.title] && <p className="collapse_Content">{notice.content}</p>}
                </div>
            ))}
        </div>
    );
};

Collapse.propTypes = {
    notices: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    })).isRequired
};

export default Collapse;